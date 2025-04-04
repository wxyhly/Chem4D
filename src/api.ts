import { CanvasDraw, COLOR_TABLE } from "./draw.js";
import { Parser } from "./parser.js";
import { ShapeBuilder } from "./shape.js";
import { mdata } from "./molecgen.js";

export function getStructureInfo(smiles: string) {
    return new ShapeBuilder(new Parser(smiles,false).parse()).build();
}
export function getAtomRadius(a: string) {
    if(a==="*") return 0.01;
    if (a === "H" || a === "T" || a === "D") return 35;
    let k = ("Li Lt Lb Be Bc B Qb Q Qc C Tk E Tn N Ny O Fn Fd F".split(" ").indexOf(a));
    if (k >= 0) return 80 - k;
    k = ("Na Nt Nm Mg Ml Al Da Dd Du Si Gs G Gp P Ps S Lp Ld Cl".split(" ").indexOf(a));
    if (k >= 0) return 100 - k * 0.5;
    if(a==="I") return 200;
    return 100;
}
export function getAtomColor(a: string) {
    return COLOR_TABLE[a] ?? "rgb(100,100,100)";
}
export function drawStructure(smiles: string, canvas: HTMLCanvasElement) {
    const g = new ShapeBuilder(new Parser(smiles,true).parse()).build();
    const engine = new CanvasDraw(canvas);
    engine.calcDim(g.atoms);
    engine.drawMolecule(g.atoms, g.bonds);
}
export function goodLuck() {
    const id = Math.floor(Math.sqrt(Math.sqrt(Math.random())) * mdata.length);
    return mdata[id];
}