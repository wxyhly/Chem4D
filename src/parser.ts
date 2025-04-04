type Ring = AtomNode[];
export interface AtomNode {
    prevatom?: AtomNode;
    prebond?: BondType;
    nexts?: AtomNode[];
    name: string;
    charge?: number;
    tag?: number;
    bonds?: BondNode[];
    rings?: number[];
}
export interface BondNode {
    type: BondType;
    start: AtomNode;
    stop: AtomNode;
}
export type BondType = number;// 高位键数，低位0-7表示>数，8-15表示<数
// "" | "." | "-" | "->" | "<-" | "->>" | "<<-" | "=" | "<=" | "=>" | "<<=" | "=>>" | "#" |"$"|"#>"|"<#";
function bondType2str(type: BondType) {
    if (type === 0) return "..";
    let base = ".-=#$"[type >> 8];
    let d = type & 0xF;
    if (d > 8) {
        return ">".repeat(d - 8);
    } else {
        return "<".repeat(d);
    }
}
function bracheClone(a: AtomNode) {
    let b: AtomNode = { name: a.name, nexts: a.nexts.map(bracheClone), bonds: [] };
    if (a.charge) {
        b.charge = a.charge;
    }
    if (a.prebond) b.prebond = a.prebond;
    if (a.prevatom) b.prevatom = a.prevatom;
    return b;
}
export class Parser {
    cursor = 0;
    str: string;
    inAtom = false;
    atomNumber = 0;
    currentBond: string;
    constructor(str: string,mode2D:boolean) {
        str = !mode2D?str.replaceAll(/\{\:.*\:\}/g,"").replaceAll(/\[\:(.*)\:\]/g,"$1"):str.replaceAll(/\[\:.*\:\]/g,"").replaceAll(/\{\:(.*)\:\}/g,"$1");
        this.str = mode2D?str.replaceAll(/Elc[0-9]+/g,""):str;
    }
    parse() {
        const tree = this.nextChain(); // str to tree
        const g = new GraphBuilder();
        g.generateChain(tree); // tree to graph
        g.sssr();
        return g;
    }
    getChar(): string {
        return this.str[this.cursor];
    }
    nextNumber() {
        let c = this.getChar();
        if (!c?.match(/[0-9]/)) {
            return 0;
        }
        let n = 0;
        while (c?.match(/[0-9]/)) {
            n = n * 10 + parseInt(c);
            this.cursor++;
            c = this.getChar();
        }
        return n;
    }
    nextBond(): BondType {
        let c = this.getChar();
        let delta = 0;
        while (c === "<") {
            delta++;
            this.cursor++;
            c = this.getChar();
        }
        if (delta > 0) {
            let base = ".-=#$".indexOf(c);
            this.cursor++;
            if (base === -1 || delta > 7) throw "unknown bond symbol";
            return (base << 4) + (delta & 7);
        }
        let base = ".-=#$".indexOf(c);
        if (base === 0 && this.str[this.cursor+1]===".") {
            this.cursor+=2;
            return 0;
        }
        if (base === -1) return -1; // this is not a bond
        this.cursor++;
        c = this.getChar();
        while (c === ">") {
            delta++;
            this.cursor++;
            c = this.getChar();
        }
        return (base << 4) + ((delta + 8));
    }
    nextAtom() {
        if (this.getChar() === "[") {// [...]
            this.cursor++;
            this.inAtom = true;
            let atom = this.nextAtom();
            if (this.getChar() !== "]") {
                throw new Error("] expected");
            }
            this.inAtom = false;
            return atom;
        }
        if (!this.getChar().match(/[A-Z\*]/)) {// if not /^[A-Z]/
            throw new Error("Invalid atom name");
        }
        let atom: AtomNode = { name: this.getChar(), nexts: [], bonds: [] };
        let c = this.getChar();
        if (c === "*") {
            atom.name = "";
            while (c === "*") {
                atom.name += c;
                this.cursor++;
                c = this.getChar();
            }
        } else {
            this.cursor++;
            c = this.getChar();
            while (c?.match(/[a-z]/)) {
                atom.name += c;
                this.cursor++;
                c = this.getChar();
            }
        }
        if (c === "%") {
            this.cursor++;
            const num = this.nextNumber();
            if (num) {
                atom.tag = num;
            }
        }
        // Xn or X+n / X-n，no Xm+n allowed
        if ((c === "+" || c === "-") && this.inAtom) {
            atom.charge = c === "+" ? 1 : -1;
            this.cursor++;
            atom.charge *= this.nextNumber() || 1;
        } else {
            const num = this.nextNumber();
            this.atomNumber = num || 1;
        }
        return atom;
    }
    nextChain() {
        let BondType: BondType;
        let firstAtom: AtomNode;
        let prevAtom: AtomNode | null = null;
        while (this.cursor < this.str.length) {
            BondType = this.nextBond();
            let c = this.getChar();
            let atom: AtomNode;
            if (c === "[" || c.match(/[A-Z\*]/)) {
                atom = this.nextAtom();
                atom.prebond = BondType;
                if (prevAtom) {
                    prevAtom.nexts.push(atom); // connect
                    atom.prevatom = prevAtom;
                    if (atom.prebond === -1) {
                        atom.prebond = 24;
                    }
                    if (this.atomNumber > 1) {
                        const repeat = this.atomNumber;
                        for (let i = 1; i < repeat; i++) {
                            prevAtom.nexts.push(bracheClone(atom));
                        }
                    }
                } else {
                    firstAtom = atom;
                }
                prevAtom = atom;
                if (this.getChar()?.match(/[\.\-\=\$\#\<\>]/)) {
                    const cursorPos = this.cursor;
                    BondType = this.nextBond();
                    if (this.getChar() === "%") this.cursor++;
                    const num = this.nextNumber();
                    if (num) {
                        prevAtom.nexts.push({
                            name: "bond", prebond: BondType, tag: num, prevatom: prevAtom
                        });
                    } else {
                        this.cursor = cursorPos;
                    }
                }
                continue;
            }
            if (c === "(") {
                this.cursor++;
                atom = this.nextChain();
                if (prevAtom) {
                    prevAtom.nexts.push(atom);
                    atom.prevatom = prevAtom;
                    if (atom.prebond === -1) atom.prebond = 24;
                } else {
                    throw new Error("found brach at beginning");
                }
                if (this.getChar() !== ")") {
                    throw new Error(") expected");
                }
                this.cursor++;
                const num = this.nextNumber();
                if (num) {
                    for (let i = 1; i < num; i++) {
                        prevAtom.nexts.push(bracheClone(atom));
                    }
                }
                continue;
            }
            // if (c.match(/[\.\-\=\$\#\<\>]/)) {
            //     const cursorPos = this.cursor;
            //     BondType = this.nextBond();
            //     if (this.getChar() === "%") this.cursor++;
            //     const num = this.nextNumber();
            //     if (num) {
            //         prevAtom.nexts.push({
            //             name: "bond", prebond: BondType, tag: num, prevatom: prevAtom
            //         });
            //     } else {
            //         this.cursor = cursorPos;
            //     }
            //     continue;
            // }
            if (c === ")") {
                return firstAtom;
            }
            this.cursor++;
        }
        return firstAtom;
    }
}
class GraphBuilder {
    atoms: AtomNode[] = [];
    bonds: BondNode[] = [];
    tagMap = new Map<number, AtomNode>();
    rings: Ring[] = [];
    ringGroup: [AtomNode[], number[]][] = [];
    addBond(type: BondType, start: AtomNode, stop: AtomNode): BondNode {
        const b = { type, start, stop };
        start.bonds.push(b);
        stop.bonds.push(b);
        this.bonds.push(b);
        return b;
    }
    generateChain(atom: AtomNode): AtomNode {
        if (atom.name === "bond") {
            throw "unexpected bonded tag";
        }
        if (atom.tag) {
            if (this.tagMap.has(atom.tag)) {
                const other = this.tagMap.get(atom.tag);
                this.addBond(16, atom, other);
                this.recordRing(atom, other);
                this.tagMap.delete(atom.tag);
            } else {
                this.tagMap.set(atom.tag, atom);
            }
        }
        const branchNum = atom.nexts.length;
        for (let i = 0; i < branchNum; i++) {
            const ch = atom.nexts[i];
            if (ch.name === "bond") {
                if (this.tagMap.has(ch.tag)) {
                    const other = this.tagMap.get(ch.tag);
                    this.addBond(ch.prebond, atom, other);
                    this.recordRing(atom, other);
                    this.tagMap.delete(ch.tag);
                } else {
                    throw "not implemented yet for C=1....C1";
                }
                continue;
            }
            const child = this.generateChain(ch);
            this.addBond(atom.nexts[i].prebond, atom, child);
        }
        this.atoms.push(atom);
        return atom;
    }
    recordRing(a: AtomNode, b: AtomNode) {
        let lefts = [a]; let l = a;
        let rights = [b]; let r = b;
        while (l.prevatom) {
            l = l.prevatom;
            lefts.push(l);
        }
        let pos = lefts.indexOf(r);
        while (r.prevatom && pos === -1) {
            r = r.prevatom;
            rights.push(r);
            pos = lefts.indexOf(r);
        }
        pos--;
        while (pos >= 0) {
            rights.push(lefts[pos--]);
        }
        const ringTag = this.rings.length;
        for (const a of rights) {
            a.rings ??= [];
            a.rings.push(ringTag);
        }
        this.rings.push(rights);
        // console.log(rights.map(e => e.name).join(","));
    }
    sssr() {
        for (const a of this.atoms) {
            if (a.rings?.length > 1) {
                for (let i = 0; i < a.rings.length; i++) {
                    this.ringGroup[a.rings[i]] = [[], a.rings.filter((v, idx) => idx != i)];
                }
            }
        }
        for (let rid = 0; rid < this.rings.length; rid++) {
            let bridgesCount = 0; let nextRing = Infinity;
            for (let a of this.rings[rid]) {
                if (!this.ringGroup[rid]) continue;
                this.ringGroup[rid][0].push(a);
                const nr = a.rings?.find(v => v > rid);

                nextRing = Math.min(nextRing, nr);
                const count = nr ? 1 : 0;
                bridgesCount += count;
            }
            if (bridgesCount > 2 && this.rings[nextRing]?.length > bridgesCount) {
                const newRing = [];
                let firstNot = true;
                let firstTrue = true;
                let ridNext = 0;
                for (const a of this.rings[nextRing]) {
                    if (!a.rings.includes(rid)) {
                        newRing.push(a);
                    }
                    ridNext++;
                }
                for (const a of this.rings[rid]) {
                    if (!a.rings.includes(nextRing)) newRing.push(a);
                }

                this.rings[nextRing] = newRing;
            }
        }
        for (const r of this.rings) console.log(r.map(e => e.name).join(","));
    }
}