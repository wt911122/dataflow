import { BezierLink } from '@joskii/jflow-core';

class DataLink extends BezierLink {
    constructor(configs) {
        super(configs);
        this.showclose = configs.showclose || false
    }

    render(ctx) {
        super.render(ctx);
    }
}