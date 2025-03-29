const RADIUS_TABLE = {
    "C": 70,
    "E": 68,
    "N": 65,
    "O": 60,
    "F": 50,
    "H": 30,
    "D": 30,
    "T": 30,
    "e-": 50,
};
const COLOR_TABLE = {
    "C": "rgb(70,70,70)",
    "E": "rgb(0,200,150)",
    "B": "rgb(145, 67, 49)",
    "Tn": "rgb(113, 0, 200)",
    "Tk": "rgb(161, 129, 186)",
    "Qc": "rgb(93, 117, 79)",
    "Q": "rgb(255, 0, 166)",
    "Si": "rgb(199, 112, 78)",
    "O": "rgb(120,120,255)",
    "N": "rgb(220, 210, 0)",
    "S": "rgb(236, 200, 23)",
    "P": "rgb(162, 54, 54)",
    "F": "rgb(174, 237, 17)",
    "Fd": "rgb(73, 239, 89)",
    "Cl": "rgb(104, 201, 75)",
    "Ld": "rgb(42, 174, 0)",
    "Fn": "rgb(196, 173, 0)",
    "Ny": "rgb(68, 200, 200)",
    "H": "rgb(255,40,40)",
    "D": "rgb(0, 210, 0)",
    "T": "rgb(0, 0, 255)",
    "e-": "rgb(0,0,0)",
};
export class CanvasDraw {
    canvas;
    ctx;
    scale = 0.6;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    calcDim(atoms) {
        const margin = 25;
        let X = 0, Y = 0;
        for (let e of atoms) {
            X = Math.max(X, Math.abs(e.position.x));
            Y = Math.max(Y, Math.abs(e.position.y));
        }
        this.canvas.width = Math.max((X * this.scale + margin) * 2, 200);
        this.canvas.height = (Y * this.scale + margin) * 2 + 10;
    }
    drawMolecule(atoms, bonds) {
        this.calcDim(atoms);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let e of bonds) {
            this.drawBond(e);
        }
        let id = 0;
        for (let e of atoms) {
            this.drawAtom(e, id++);
        }
    }
    drawMoleculeName(name) {
        this.ctx.font = "15px Arial";
        this.ctx.fillStyle = "black";
        const dim = this.ctx.measureText(name);
        this.ctx.fillText(name, this.canvas.width / 2 - dim.width / 2, this.canvas.height - 2);
    }
    drawAtom(a, id) {
        if (!a.position)
            return;
        const scale = this.scale;
        const cx = a.position.x * scale + this.canvas.width / 2;
        const cy = -a.position.y * scale + this.canvas.height / 2;
        // this.ctx.fillStyle = COLOR_TABLE[a.name] ?? "white";
        if (a.name[0] === "*") {
            this.ctx.beginPath();
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            for (let i = 0; i < a.name.length; i++)
                this.ctx.arc(cx, cy, (i + 1) * 10 * scale, 0, Math.PI * 2);
            this.ctx.fill();
        }
        else {
            this.ctx.fillStyle = a.error ? "red" : a.name in COLOR_TABLE ? COLOR_TABLE[a.name] : "rgb(100, 100, 100)";
            // this.ctx.font = "20px Arial";
            this.ctx.font = a.error ? Math.round(44 * scale) + "px Arial" : Math.round(33 * scale) + "px Arial";
            // this.ctx.fillStyle = (a as any).error ? "red" : "black";
            const dim = this.ctx.measureText(a.name);
            this.ctx.fillText(a.name, cx - dim.width / 2, cy + (dim.actualBoundingBoxAscent - dim.actualBoundingBoxDescent) / 2);
            this.ctx.font = Math.round(20 * scale) + "px Arial";
            // if ((a as any).potential) this.ctx.fillText((a as any).potential, cx + dim.width / 2, cy - dim.fontBoundingBoxDescent);
            if (a.charge)
                this.ctx.fillText(a.charge === 2 ? "2+" : a.charge === 1 ? "+" : a.charge === -1 ? "-" : a.charge === -2 ? "2-" : a.charge === -3 ? "3-" : a.charge < 0 ? (-a.charge) + "-" : (a.charge + "+"), cx + dim.width / 2, cy - dim.fontBoundingBoxDescent);
        }
        // if ((a as any).oma) this.ctx.fillText((a as any).oma, cx, cy+15);
    }
    drawBond(b) {
        if (!b.start.position || !b.stop.position || !(b.type >> 4))
            return;
        const scaleStart = this.scale;
        const scaleStop = this.scale;
        this.ctx.lineWidth = b.type >> 4 === 4 ? 10.5 : b.type >> 4 === 3 ? 7 : b.type >> 4 === 2 ? 5 : 2;
        let rx = b.start.position.x - b.stop.position.x;
        let ry = b.start.position.y - b.stop.position.y;
        const nr = 1 / Math.hypot(rx, ry);
        rx *= nr;
        ry *= nr;
        let arrows = b.type & 15;
        arrows = arrows >= 8 ? arrows - 8 : -arrows;
        const radA = b.start.name.includes("*") ? 10 : 22 + (b.type >> 4 > 1 && arrows < 0 ? (b.type >> 4) * 2 : 0);
        const radB = b.stop.name.includes("*") ? 10 : 22 + (b.type >> 4 > 1 && arrows > 0 ? (b.type >> 4) * 2 : 0);
        const ax = b.start.position.x - radA * rx, ay = b.start.position.y - radA * ry;
        const bx = b.stop.position.x + radB * rx, by = b.stop.position.y + radB * ry;
        const ratio = 0.5 - (arrows) / ((b.type >> 4) * 4);
        const drawBondLine = () => {
            this.ctx.strokeStyle = b.start.name in COLOR_TABLE ? COLOR_TABLE[b.start.name] : "rgb(100, 100, 100)";
            this.ctx.beginPath();
            this.ctx.moveTo(ax * scaleStart + this.canvas.width / 2, -ay * scaleStart + this.canvas.height / 2);
            this.ctx.lineTo((bx * (1 - ratio) + ratio * ax) * scaleStop + this.canvas.width / 2, -(by * (1 - ratio) + ratio * ay) * scaleStop + this.canvas.height / 2);
            this.ctx.stroke();
            this.ctx.strokeStyle = b.stop.name in COLOR_TABLE ? COLOR_TABLE[b.stop.name] : "rgb(100, 100, 100)";
            this.ctx.beginPath();
            this.ctx.moveTo((bx * (1 - ratio) + ratio * ax) * scaleStop + this.canvas.width / 2, -(by * (1 - ratio) + ratio * ay) * scaleStop + this.canvas.height / 2);
            this.ctx.lineTo(bx * scaleStop + this.canvas.width / 2, -by * scaleStop + this.canvas.height / 2);
            this.ctx.stroke();
        };
        drawBondLine();
        if (b.type >> 4 > 1) {
            this.ctx.strokeStyle = "rgb(255,255,255)";
            this.ctx.lineWidth = b.type >> 4 === 4 ? 8 : b.type >> 4 === 3 ? 4.5 : 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(ax * scaleStart + this.canvas.width / 2, -ay * scaleStart + this.canvas.height / 2);
            this.ctx.lineTo(bx * scaleStop + this.canvas.width / 2, -by * scaleStop + this.canvas.height / 2);
            this.ctx.stroke();
            if (b.type >> 4 > 2) {
                // this.ctx.strokeStyle = "black";
                this.ctx.lineWidth = b.type >> 4 === 3 ? 1.5 : 4;
                drawBondLine();
            }
            if (b.type >> 4 === 4) {
                this.ctx.strokeStyle = "white";
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(ax * scaleStart + this.canvas.width / 2, -ay * scaleStart + this.canvas.height / 2);
                this.ctx.lineTo(bx * scaleStop + this.canvas.width / 2, -by * scaleStop + this.canvas.height / 2);
                this.ctx.stroke();
            }
        }
        // this.ctx.fillStyle = "red";
        // this.ctx.fillText((b.type).toString(16), (b.stop.position.x + b.start.position.x) / 2 * scaleStop + this.canvas.width / 2, -(b.stop.position.y + b.start.position.y) / 2 * scaleStop + this.canvas.height / 2)
        if ((b.type & 0xF) !== 8) {
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            const sign = (b.type & 0xF) > 8;
            this.ctx.strokeStyle = sign ? b.start.name in COLOR_TABLE ? COLOR_TABLE[b.start.name] : "rgb(100, 100, 100" : b.stop.name in COLOR_TABLE ? COLOR_TABLE[b.stop.name] : "rgb(100, 100, 100)";
            let cx = sign ? bx : ax;
            let cy = sign ? by : ay;
            const offsetNeed = b.type >> 4 > 1 && arrows !== 0 && arrows < 0 !== sign;
            if (offsetNeed) {
                const offset = (sign ? 1 : -1) * (b.type >> 4) * 2;
                cx -= rx * offset;
                cy -= ry * offset;
            }
            const arrowLen = 10;
            const arrowWidth = 10;
            const arrowLenX = sign ? rx * arrowLen : -rx * arrowLen;
            const arrowLenY = sign ? ry * arrowLen : -ry * arrowLen;
            const arrowWidX = sign ? rx * arrowWidth : -rx * arrowWidth;
            const arrowWidY = sign ? ry * arrowWidth : -ry * arrowWidth;
            const gap = 1;
            for (let i = 0; i < (b.type & 7); i++, cx += arrowLenX * gap, cy += arrowLenY * gap) {
                this.ctx.moveTo((cx + arrowLenX + arrowWidY) * scaleStop + this.canvas.width / 2, -(cy + arrowLenY - arrowWidX) * scaleStop + this.canvas.height / 2);
                this.ctx.lineTo((cx) * scaleStop + this.canvas.width / 2, -(cy) * scaleStop + this.canvas.height / 2);
                this.ctx.lineTo((cx + arrowLenX - arrowWidY) * scaleStop + this.canvas.width / 2, -(cy + arrowLenY + arrowWidX) * scaleStop + this.canvas.height / 2);
            }
            this.ctx.stroke();
        }
    }
}
//# sourceMappingURL=draw.js.map