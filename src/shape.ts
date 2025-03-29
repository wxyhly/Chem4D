import { Checker3D, Checker4D } from "./checker.js";
import { AtomNode as BaseAtomNode, BondNode as BaseBondNode, BondType } from "./parser.js";
interface Coord {
    x: number, y: number
}
interface AtomNode extends BaseAtomNode {
    bonds: BondNode[];
    position: Coord;
    potential?: number;
    weight?: number;
}
interface BondNode {
    start: AtomNode;
    stop: AtomNode;
    type: BondType;
}
interface Graph {
    atoms: AtomNode[];
    bonds: BondNode[];
    rings: AtomNode[][];
    ringGroup: [AtomNode[], number[]][];
}

interface BaseGraph {
    atoms: BaseAtomNode[];
    bonds: BaseBondNode[];
    rings: BaseAtomNode[][];
    ringGroup: [BaseAtomNode[], number[]][];
}
export class ShapeBuilder {
    graph: Graph;
    frontier = new Array<AtomNode>;
    blength = 100;
    hydrogenBondScale = 0.75;
    constructor(g: BaseGraph) {
        this.graph = g as Graph;
        new Checker4D(g).check();
    }
    calcWeight() {
        const all = new Set(this.graph.atoms);
        let changed = true;
        // calc branches
        while (all.size && changed) {
            changed = false;
            for (const a of all) {
                let one = 0;
                let sum = 1;
                if (a.bonds.length === 1) { a.potential = 1; all.delete(a); changed = true; break; }
                for (const b of a.bonds) {
                    const p = this.getSibling(a, b).potential;
                    if (!p) one++; else sum += p;
                }
                if (one === 1) { a.potential = sum; all.delete(a); changed = true; break; }
            }
        }
        // calc rings
        for (const r of this.graph.rings) {
            for (const a of r) {
                a.potential = r.length;
                all.delete(a);
            }
        }
        // calc bridges
        while (all.size && changed) {
            changed = false;
            for (const a of all) {
                let one = 0;
                let sum = 1;
                if (a.bonds.length === 1) { a.potential = 1; all.delete(a); changed = true; break; }
                for (const b of a.bonds) {
                    const p = this.getSibling(a, b).potential;
                    if (!p) one++; else sum += p;
                }
                if (one === 1) { a.potential = sum; all.delete(a); changed = true; break; }
            }
        }
    }
    drawInitRing(ring: AtomNode[]) {
        const n = ring.length; let t = 0;
        const radius = this.blength / Math.sin(Math.PI / n) / 2;
        for (const a of ring) {
            t += Math.PI * 2 / n;
            a.position = { x: Math.cos(t) * radius, y: Math.sin(t) * radius };
            this.frontier.push(a);
        }
        if (this.graph.ringGroup[0]?.length) {
            const oring = this.graph.ringGroup[0][1][0];
            this.drawRingArc(this.graph.rings[oring],true);
        }
    }
    // rel pos define outside of the ring
    drawRingArc(ring: AtomNode[], swap?: boolean) {
        let first = NaN; let last = NaN;
        for (let i = 0; i < ring.length; i++) {
            if (!ring[i].position && ring[(i + ring.length - 1) % ring.length].position) { first = (i + ring.length - 1) % ring.length; }
            if (ring[i].position && !ring[(i + ring.length - 1) % ring.length].position) { last = i; }
        }
        if (isNaN(first) || isNaN(last)) return;
        const start = ring[first].position;
        const end = ring[last].position;
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const angle = Math.atan2(dy, dx);
        const ccord = Math.hypot(dx, dy);
        const n = (last - first + ring.length) % ring.length;
        const fractN = 1 / (n);
        let radius: number;
        const iterateFn = (halfangle: number) => {
            radius = ccord / (2 * Math.sin(halfangle));
            return 2 * Math.sin((Math.PI - halfangle) * fractN) * radius;
        }
        let error = 0;
        let halfangle = Math.PI * fractN;
        do {
            const len = iterateFn(halfangle);
            error = Math.abs(len - this.blength);
            halfangle += ((len - this.blength) / radius) * 0.1 * (n);
        } while (error > 0.1);
        const median = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
        const radiusDist = radius * Math.cos(halfangle);
        const rotated = swap ? angle + Math.PI / 2 : angle - Math.PI / 2;
        const center = { x: median.x + Math.cos(rotated) * radiusDist, y: median.y + Math.sin(rotated) * radiusDist };
        const startAngle = Math.atan2(start.y - center.y, start.x - center.x);
        const angleStep = -(swap ? Math.PI - halfangle : halfangle - Math.PI) * fractN * 2;
        let t = startAngle + angleStep;
        for (let i = first; i !== last; i = (i + 1) % ring.length) {
            if (ring[i].position) continue;
            ring[i].position = { x: Math.cos(t) * radius + center.x, y: Math.sin(t) * radius + center.y };
            t += angleStep;
            this.frontier.push(ring[i]);
        }
    }
    getSibling(self: AtomNode, bond: number | BondNode) {
        const b = (typeof bond === "number") ? self.bonds[bond] : bond;
        if (b.start === self) return b.stop;
        return b.start;
    }
    drawBranch(self: AtomNode) {
        this.frontier.pop();
        const vecs: number[] = [];
        let finished = true;
        for (const b of self.bonds) {
            const p = this.getSibling(self, b).position;
            if (p) vecs.push(Math.atan2(p.y - self.position.y, p.x - self.position.x));
            if (!p) finished = false;
        }
        if (finished) return;
        self.bonds.sort((a, b) => (this.getSibling(self, a).potential ?? 0) - (this.getSibling(self, b).potential ?? 0));
        if (vecs.length === 0) {
            const n = self.bonds.length; let t = 0;
            for (const b of self.bonds) {
                t += Math.PI * 2 / n;
                const s = this.getSibling(self, b);
                let radius = this.blength;
                if (b.type === 8) radius *= 1.5;
                if (this.isHydrongen(s) || this.isHydrongen(self)) radius *= this.hydrogenBondScale;
                if (this.isCluster(s) || this.isCluster(self)) radius *= this.hydrogenBondScale;

                s.position = { x: Math.cos(t) * radius + self.position.x, y: Math.sin(t) * radius + + self.position.y };
                this.frontier.push(s);
            }
        }
        // store [direction, energy][]
        const energyList: [number, number][] = [];
        if (vecs.length === 1) {
            const n = self.bonds.length; let t = vecs[0];
            for (const b of self.bonds) {
                const s = this.getSibling(self, b);
                if (s.position) continue;
                t += Math.PI * 2 / n;
                let radius = this.blength;
                energyList.push([t, this.calcEnergyAtPoint({ x: Math.cos(t) * radius + self.position.x, y: Math.sin(t) * radius + self.position.y })]);
            }
        }

        if (vecs.length >= 2) {
            let t = vecs[0]; let t1 = vecs[1];
            let dt = (t1 - t) % (Math.PI * 2);
            if (dt < Math.PI && dt > 0) dt -= Math.PI * 2;
            if (dt > -Math.PI && dt < 0) dt += Math.PI * 2;
            const step = dt / (self.bonds.length - 1);
            for (const b of self.bonds) {
                const s = this.getSibling(self, b);
                if (s.position) continue;
                t += step;
                let radius = this.blength;
                energyList.push([t, this.calcEnergyAtPoint({ x: Math.cos(t) * radius + self.position.x, y: Math.sin(t) * radius + self.position.y })]);
            }
        }
        energyList.sort((a, b) => b[1] - a[1]);
        let idx = 0;
        for (const b of self.bonds) {
            const s = this.getSibling(self, b);
            if (s.position) continue;
            let radius = this.blength;
            if (b.type === 8) radius *= 1.5;
            if (this.isHydrongen(s) || this.isHydrongen(self)) radius *= this.hydrogenBondScale;
            if (this.isCluster(s) || this.isCluster(self)) radius *= this.hydrogenBondScale;
            let t = energyList[idx++][0];
            s.position = { x: Math.cos(t) * radius + self.position.x, y: Math.sin(t) * radius + self.position.y };
            this.adjustNearbyAtAtom(s);
            this.frontier.push(s);
        }

    }
    isHydrongen(a: AtomNode) {
        return a.name === "H" || a.name === "D" || a.name === "T";
    }
    isCluster(a: AtomNode) {
        return a.name.includes("*");
    }
    build() {
        this.calcWeight();
        const g = this.graph;
        if (g.rings.length) {
            this.drawInitRing(g.rings[0]);
        } else {
            let start = g.atoms[0];
            while (start.prevatom) start = start.prevatom as AtomNode;
            start.position = { x: 0, y: 0 };
            this.frontier.push(start);
        }
        const finisinedRings = new Set;
        let count = 0;
        while (this.frontier.length) {
            const f = this.frontier[this.frontier.length - 1];
            // if (count > 2) return this.graph;
            const ring = g.rings.find(r => r.find(v => f === v));
            if (!ring || finisinedRings.has(ring)) { this.drawBranch(f); count++; continue; }
            this.drawRing(ring, f);
            finisinedRings.add(ring);
            count++;
        }
        let cenx = 0;
        let ceny = 0;
        let countN = 0;
        for (const a of this.graph.atoms) {
            if (!a.position) continue;
            cenx += a.position.x;
            ceny += a.position.y;
            countN++;
        }
        cenx /= countN;
        ceny /= countN;
        for (const a of this.graph.atoms) {
            if (!a.position) continue;
            a.position.x -= cenx;
            a.position.y -= ceny;
        }
        return this.graph;
    }
    drawRing(ring: AtomNode[], self: AtomNode) {
        const vecs: number[] = [];
        let finished = true;
        for (const b of self.bonds) {
            const p = this.getSibling(self, b).position;
            if (p) vecs.push(Math.atan2(p.y - self.position.y, p.x - self.position.x));
            if (!p) finished = false;
        }
        if (finished) { this.frontier.pop(); return; }
        const n = ring.length; let t = 0;
        const radius = this.blength / Math.sin(Math.PI / n) / 2;
        const index = ring.indexOf(self);
        if (vecs.length === 1) {
            let t = vecs[0] - (index + 1) * Math.PI * 2 / n;
            const cenx = self.position.x - Math.cos(vecs[0]) * radius;
            const ceny = self.position.y - Math.sin(vecs[0]) * radius;
            for (const a of ring) {
                t += Math.PI * 2 / n;
                // a.position = { x: cenx, y: ceny };
                a.position = { x: Math.cos(t) * radius + cenx, y: Math.sin(t) * radius + ceny };
                if (!this.frontier.includes(a)) this.frontier.push(a);
            }
        }
        if (this.graph.ringGroup[this.graph.rings.indexOf(ring)]?.length) {
            const oring = this.graph.ringGroup[this.graph.rings.indexOf(ring)][1][0];
            this.drawRingArc(this.graph.rings[oring]);
        }
    }
    calcEnergyAtPoint(p: Coord) {
        let energy = 0;
        for (const a of this.graph.atoms) {
            if (!a.position || a.position === p) continue;
            let dx = a.position.x - p.x;
            let dy = a.position.y - p.y;
            energy += (this.isHydrongen(a) ? 5 : 10) / (dx * dx + dy * dy);
        }
        return energy;
    }

    adjustNearbyAtAtom(at: AtomNode) {
        const p = at.position;
        const movement = { x: 0, y: 0 };
        for (const a of this.graph.atoms) {
            if (!a.position || a.position === p) continue;
            let dx = a.position.x - p.x;
            let dy = a.position.y - p.y;
            let r = Math.hypot(dx, dy);
            let thrd = r - ((this.isHydrongen(a) || this.isHydrongen(at)) ? 30 : 60);
            if (thrd < 0) {
                const t = Math.atan2(dy, dx);
                movement.x += Math.cos(dx) * thrd * 0.8;
                movement.y += Math.sin(dx) * thrd * 0.8;
                console.log("moved " + at.name + " from " + a.name + " with thrd=" + thrd);
            }
        }
        p.x += movement.x; p.y += movement.y;
    }
}