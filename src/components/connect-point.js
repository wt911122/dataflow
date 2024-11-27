import { Node } from '@joskii/jflow-core';
export const DIRECTION = {
    /** RIGHT */
    RIGHT: 0,
    /** BOTTOM */
    BOTTOM: 1,
    /** LEFT */
    LEFT: 2,
    /** TOP */
    TOP: 3,
    /** SELF */
    SELF: 100,
}

class ConnectPoint extends Node {
    constructor(configs) {
        super(configs);
        this.type = 'ConnectPoint';
        this.radius = 6;
        this.innerColor = configs.innerColor || 'transparent';
        this.outlineColor = configs.outlineColor || 'transparent';
        this.hasArrow = configs.hasArrow;
        this.content = configs.content;
        this.highlight = false;
    }

    setConfig(configs) {
        Object.keys(configs).forEach((k) => {
            if (configs[k] !== undefined && configs[k] !== null) {
                this[k] = configs[k];
                this._rawConfigs[k] = configs[k];
            }
        });
    }

    render(ctx) {
        const {
            anchor,
            backgroundColor,
            borderColor,
            innerColor,
            outlineColor,
            content,
            hasArrow,
            radius,
        } = this;
        const [x, y] = anchor;
        ctx.translate(x, y);
        if (outlineColor !== 'transparent') {
            ctx.strokeStyle = outlineColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, radius + 2, 0, 2 * Math.PI);
            ctx.stroke();
        }
        if (borderColor !== 'transparent') {
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, radius + 1, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (backgroundColor !== 'transparent') {
            ctx.fillStyle = backgroundColor;
            ctx.beginPath();
            ctx.arc(0, 0, content ? radius + 3 : radius + 1, 0, 2 * Math.PI);
            ctx.fill();
        }

        if (innerColor !== 'transparent') {
            ctx.fillStyle = innerColor;
            ctx.beginPath();
            ctx.arc(0, 0, radius / 2, 0, 2 * Math.PI);
            ctx.fill();
        }
        if (hasArrow) {
            ctx.beginPath();
            ctx.moveTo(1.5, 3);
            ctx.lineTo(-1.5, 0);
            ctx.lineTo(1.5, -3);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }

        if (content) {
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = `12px PingFang SC`;
            ctx.fillText(content, 0, 0);
        }

        ctx.translate(-x, -y);
    }

    isHit(point) {
        const anchor = this.anchor;
        return Math.pow(point[0] - anchor[0], 2) + Math.pow(point[1] - anchor[1], 2) < 36;
    }

    getBoundingRect() {
        const anchor = this.anchor;
        const r = this.radius + 2;
        const ltx = anchor[0] - r;
        const lty = anchor[1] - r;
        const rbx = anchor[0] + r;
        const rby = anchor[1] + r;
        return [
            ltx, lty,
            rbx, rby,
        ];
    }

    calculateIntersection(point) {
        const [x1, y1] = point;
        const [x2, y2] = this.anchor;
        const vecx = x2 - x1;
        const vecy = y2 - y1;
        const dist = Math.sqrt(vecx * vecx + vecy * vecy);

        const ratio = this.radius / dist;
        return [x2 - ratio * vecx, y2 - ratio * vecy];
    }

    getIntersectionsInFourDimension() {
        const [x, y] = this._belongs.calculateToCoordination(this.anchor);
        const r = this.radius;
        return {
            [DIRECTION.RIGHT]: [x + r, y],
            [DIRECTION.LEFT]: [x - r, y],
            [DIRECTION.BOTTOM]: [x, y + r],
            [DIRECTION.TOP]: [x, y - r],
        };
    }

    getBoundingDimension() {
        const r = this.radius + 2;
        return {
            width: r * 2,
            height: r * 2,
        };
    }
}

export default ConnectPoint;
