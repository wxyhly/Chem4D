export class Checker {
    graph;
    maxbonds;
    perdelta;
    valentTable;
    constructor(g) {
        this.graph = g;
    }
    check() {
        for (const a of this.graph.atoms) {
            let valent = 0;
            let bonds = 0;
            for (const b of a.bonds) {
                bonds += b.type >> 4;
                valent += b.type >> 4;
                let delta = b.type & 15;
                delta = ((delta >= 8) ? delta - 8 : -delta) * this.perdelta;
                valent += b.stop === a ? delta : -delta;
            }
            valent -= (a.charge ?? 0) * this.perdelta;
            a.oma = valent + "," + bonds;
            const valentTarget = this.valentTable[a.name];
            if (this.isHydrongen(a)) {
                if ((valentTarget - valent !== 0 && valentTarget - valent !== 2) || (bonds > 1))
                    a.error = true;
                continue;
            }
            if (valentTarget)
                this.addHydrongen(a, valentTarget - valent, this.maxbonds - bonds);
        }
    }
}
export class Checker3D extends Checker {
    constructor(g) {
        super(g);
        this.maxbonds = 4;
        this.perdelta = 1;
        this.valentTable = Object.fromEntries("H1,Li7,Be6,B5,C4,N3,O2,F1,Na7,Mg6,Al5,Si4,P3,S2,Cl1".split(/,/).map(e => [e.match(/[A-z]+/g)[0], Number(e.match(/[0-9\-\.]+/g)[0])]));
    }
    addHydrongen(a, valent, bond) {
        if (valent > bond || valent < 0) {
            a.error = true;
            return;
        }
        for (let i = 0; i < valent; i++) {
            const b = { type: 0x18, start: a, stop: { prevatom: a, prebond: 0x18, nexts: [], name: "H", bonds: [] } };
            b.stop.bonds.push(b);
            a.bonds.push(b);
            this.graph.atoms.push(b.stop);
            this.graph.bonds.push(b);
        }
    }
    isHydrongen(a) {
        return a.name === "H";
    }
}
export class Checker4D extends Checker {
    constructor(g) {
        super(g);
        this.maxbonds = 5;
        this.perdelta = 0.5;
        this.valentTable = Object.fromEntries("*2,H1.5,D1,T0.5,I0.5,F0.5,Cl0.5,Fd1,Ld1,Fn1.5,Lp1.5,O2,S2,Ny2.5,Ps2.5,N3,P3,Tn3.5,Gp3.5,E4,G4,Tk4.5,Gs4.5,C5,Si5,Du5.5,Qc5.5,Dd6,Q6,Qb6.5,B7,Bc7.5,Na-0.5,Lt1".split(/,/).map(e => [e.match(/[A-z\*]+/g)[0], Number(e.match(/[0-9\-\.]+/g)[0])]));
    }
    addHydrongen(a, valent, bond) {
        if (valent < 0) {
            a.error = true;
            return;
        }
        // 0.5H + 1D + 1.5T = valent
        // H + D + T <= bond
        // maximize D, then maximize H
        let D = bond, H = 0, T = 0;
        let found = false;
        if (a.name === "*")
            D = 0;
        while (D >= 0) {
            H = Math.min(bond - D, (valent - D) * 2);
            while (H >= 0) {
                T = (valent - D - 0.5 * H) / 1.5;
                if (T >= 0 && H + D + T <= bond) {
                    found = true;
                    break;
                } // found
                H--;
            }
            if (found)
                break;
            D--;
        }
        if (!found) {
            a.error = true;
            return;
        }
        for (let j = 0; j < 3; j++) {
            const btype = [0x19, 0x18, 0x11][j];
            const hname = "HDT"[j];
            for (let i = 0; i < [H, D, T][j]; i++) {
                const b = { type: btype, start: a, stop: { prevatom: a, prebond: btype, nexts: [], name: hname, bonds: [] } };
                b.stop.bonds.push(b);
                a.bonds.push(b);
                this.graph.atoms.push(b.stop);
                this.graph.bonds.push(b);
            }
        }
    }
    isHydrongen(a) {
        return a.name === "H" || a.name === "D" || a.name === "T";
    }
}
//# sourceMappingURL=checker.js.map