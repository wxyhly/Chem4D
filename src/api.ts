import { Parser } from "./parser.js";
import { ShapeBuilder } from "./shape.js";

export function getStructureInfo(smiles: string) {
    const g = new ShapeBuilder(new Parser(smiles).parse()).build();
}