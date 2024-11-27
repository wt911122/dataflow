import { toRaw } from 'vue';
import { ProgramNode, SignalInNode, NumericSignal } from './model';


class BaseNode {
    position = [];
    name = '';
    constructor(source) {
        this.name = source.name;
        this.position = source.position;
        this.source = source;
        // this.type = source.type
    }
}
class ArgmentLayoutNode extends BaseNode { 
    constructor(source){
        super(source)
        this.keyword = source.keyword
    }
}
class SignalInLayoutNode extends BaseNode {
    type = 'SignalIn'
}
class OutputLayoutNode extends BaseNode { }

class ProgramLayoutNode extends BaseNode {
    type = 'Function'
    constructor(source) {
        super(source);
        this.argus = source.operator.declaration.getArguments().map(a => new ArgmentLayoutNode(a))
        this.output = new OutputLayoutNode(source.operator.output)
    }

    getArgumentLayoutNode(keyword) {
        return this.argus.find((a) => a.keyword === keyword);
    }

    getOutputLayoutNode() {
        return this.output;
    }
}

function makeNode(source) {
    if(source instanceof ProgramNode) {
        return new ProgramLayoutNode(source);
    }
    if(source instanceof SignalInNode) {
        return new SignalInLayoutNode(source);
    }
}

export class FreeLayout {
    constructor(source) {
        this.static = false;
        this.reOrder(source);
        
    }
    reOrder(source) {
        this.source = source;
        this.flowStack = [];
        this.flowLinkStack = [];
        this.nodes = [];
        const nodeMap = {};
        const s = toRaw(source);
        s.getNodes().forEach((node) => {
            const layoutNode = makeNode(node);
            nodeMap[node.name] = layoutNode;
            this.flowStack.push({
                type: layoutNode.type,
                source: node,
                layoutNode,
            });
            this.nodes.push(layoutNode)
        })

        s.getLinks().forEach(link => {
            let fromNode = nodeMap[link.from.name];
            if(fromNode.source instanceof ProgramNode) {
                fromNode = fromNode.getOutputLayoutNode();
            }
            const node = nodeMap[link.to.name];
            const argu = node.getArgumentLayoutNode(link.key);
            this.flowLinkStack.push({
                source: link,
                from: fromNode,
                to: argu,
            })
        });
    }

    reflow(jflow) {
        const nodes = this.nodes;
        nodes.forEach((node, idx) => {
            const s = toRaw(node.source);
            console.log(s)
            const [ x, y ] = s.position;
            const anchor = [x || 0, y || 0];
            const instance = jflow.getRenderNodeBySource(s);
            instance.anchor = anchor;
        });
    }
}