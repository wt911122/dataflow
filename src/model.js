import * as babel from "@babel/parser";

let uuid = 0;

class Argument {
    keyword = '';
    type = '';
    constructor(source){
        this.uuid = uuid++;
        this.keyword = source.keyword;
        this.type = source.type;
    }
}

class Output {
    value = undefined;
    setValue(val) {
        this.value = val; 
    }

    getValue() {
        return this.value;
    }

    clear() {
        this.value = undefined;
    }
}

export class Decalaration {
    arguments = {}
    constructor(inputs) {
        inputs.forEach(({ keyword, type }) => {
            this.arguments[keyword] = new Argument({ keyword, type })
        });
    }

    validate(inputs) {
        const inKeys = Object.keys(inputs);
        return Object.keys(this.arguments).every(argu => inKeys.includes(argu))
    }
    has(key) {
        return this.arguments.hasOwnProperty(key)
    }
    getArguments() {
        return Array.from(Object.values(this.arguments));
    }
}

class Operator {
    input = {};
    output = new Output();
    declaration = undefined;

    constructor(name, func, declaration) {
        this.setExpression(func);
        this.name = name
    }

    setExpression(expression){
        this.resolveExpression(expression);
        this.func = eval(expression);
        this.expression = expression;
        this.clear()
    }

    addInput(key, value) {
        this.input[key] = value;
    }

    removeInput(key) {
        delete this.input[key];
        this.output.clear();
    }

    validate() {
        return this.declaration.validate(this.input);
    }

    async run() {
        try {
            this.output.setValue(await this.func.call(null, this.input));
        } catch (error) {
            this.output.setValue(undefined)            
        }
        return this.output
    }

    allowInput(key) {
        return this.declaration.has(key)
    }

    clear() {
        this.input = {};
        this.output.clear();
    }

    resolveExpression(expression) {
        const ast = babel.parse(expression, {
            allowImportExportEverywhere: true,
            allowAwaitOutsideFunction: true,
            allowReturnOutsideFunction: true,
            allowSuperOutsideMethod: true,
            sourceType: "unambiguous",
            strictMode: true
        });
        const argus = ast.program.body[0].expression.params[0].properties.map((p) => ({ keyword: p.key.name }));
        this.declaration = new Decalaration(argus)
    }

    exportData() {
        return {
            name: this.name,
            expression: this.expression
        }
    }
}

class Node extends EventTarget{
    name = '';
    uuid = undefined
    next = [];
    prev = [];
    position = [0, 0];
    constructor(source) {
        super();
        this.uuid = uuid ++;
        this.position = source.position;
        this.name = source.name;
    }
    linkOut(node, key) {
        this.next.push({ key, node })
    }
    linkIn(node, key) { return false }

    unlinkIn(node, key) {
        const idx = this.prev.findIndex(n => n.key === key && n.node === node);
        if(idx !== -1) {
            this.prev.splice(idx, 1);
        }
    }
    unlinkOut(node, key) {
        const idx = this.next.findIndex(n => n.key === key && n.node === node);
        if(idx !== -1) {
            this.next.splice(idx, 1);
        } 
    }

    getValue() { return undefined }

    delete() {
        const links = []
        this.prev.forEach(p => {
            p.node.unlinkOut(this, p.key);
            links.push(Link.getUnikey(p.node, this, p.key))
        })
        this.next.forEach(n => {
            n.node.unlinkIn(this, n.key);
            links.push(Link.getUnikey(this, n.node, n.key))
        })
        return links;
    }

    setPosition(anchor) {
        this.position = anchor;
    }

    setName(name) {
        this.name = name;
    }

    exportData() {
        return {
            type: this.type,
            position: this.position.slice()
        }
    }
}

const PROGRAM_NODE_STATUS = {
    ON: 'ON',
    OFF: 'OFF'
}

export class ProgramNode extends Node {
    operator = null;
    status = PROGRAM_NODE_STATUS.OFF;
    type = 'Function'
    constructor(operator) {
        super(operator);
        this.operator = operator;
    }
    setExpression(expression, program) {
        while(this.prev.length) {
            const n = this.prev[0];
            program.unlinkNode(n.node, this, n.key);
        }
        this.prev = [];
        this.next.forEach(n => {
            n.node.clearInput(n.key)
        });
        this.operator.setExpression(expression);
        this.dispatchEvent(new CustomEvent('output'))
        this.dispatchEvent(new CustomEvent('expressionchange'))
    }
    linkIn(other, key) {
        if(this.operator.allowInput(key)){
            this.prev.push({
                key, 
                node: other
            });
            return true;
        }
        return false
    }

    getValue() {
        return this.operator.output.getValue();
    }

    async process(key, value) {
        this.operator.addInput(key, value);

        await this.processLocal()
    }

    async processLocal() {
        if(this.operator.validate()) {
            const output = await this.operator.run();
            this.dispatchEvent(new CustomEvent('output'))
            this.status = PROGRAM_NODE_STATUS.ON;
            this.next.forEach(({ key, node }) => {
                node.process(key, output.getValue());
            }) 
        }
    }

    unlinkIn(node, key) {
        this.clearInput(key);
        super.unlinkIn(node, key);
        
    }

    clearInput(key) {
        this.operator.removeInput(key);
        this.next.forEach(n => {
            n.node.clearInput(n.key)
        })
        this.dispatchEvent(new CustomEvent('output'))
    }
    
    clear() {
        this.status = PROGRAM_NODE_STATUS.OFF;
        this.operator.clear();
    }

    exportData() {
        return {
            ...this.operator.exportData(),
            ...super.exportData(),
        }
    }
}

export class SignalIn extends EventTarget{
    output = new Output();
    constructor() {
        super();
    }

    clear() {
        this.output.clear();
    }

    listen() { }
    updateSignal(outputValue) {
        this.output.setValue(outputValue);
        this.dispatchEvent(new CustomEvent('update'))
    }
}

export class SignalInNode extends Node {
    signal = null;
    type = 'SignalIn';
    constructor(signal) {
        super(signal);
        this.signal = signal;
        this.type = signal.type;
        this.signal.listen();
        this.signal.addEventListener('update', this.process.bind(this));
    }

    getValue() {
        return this.signal.output.getValue();
    }

    process() {
        this.next.forEach(({ key, node }) => {
            node.process(key, this.getValue());
        })
    }
    exportData() {
        return {
            ...this.signal.exportData(),
            ...super.exportData()
        }
    }
}

export class SignalOut extends EventTarget{
    input = {};
    constructor() {
        super();
    }

    allowInput(key) { return false }

    addInput(key, value) {
        this.input[key] = value;
    }

    removeInput(key) {
        delete this.input[key];
    }

    async run() {}

    clear() { }
}

export class SignalOutNode extends Node {
    signal = null;
    type = 'SignalOut';
    status = PROGRAM_NODE_STATUS.OFF;
    constructor(signal) {
        super(signal);
        this.signal = signal;
        this.type = signal.type;
    }

    getValue() {
        return this.signal.output.getValue();
    }

    async process(key, value) {
        this.signal.addInput(key, value);
        if(this.signal.validate()) {
            await this.signal.run();
            this.status = PROGRAM_NODE_STATUS.ON;
        }
    }

    linkIn(other, key) {
        if(this.signal.allowInput(key)){
            this.prev.push({
                key, 
                node: other
            });
            return true;
        }
        return false
    }

    unlinkIn(node, key) {
        this.clearInput(key);
        super.unlinkIn(node, key);
    }

    clearInput(key) {
        this.signal.removeInput(key);
    }

    clear() {
        this.status = PROGRAM_NODE_STATUS.OFF;
        this.signal.clear();
    }

    exportData() {
        return {
            ...this.signal.exportData(),
            ...super.exportData()
        }
    }
}

function linkNode(a, b, key) {
    a.linkOut(b, key);
    b.linkIn(a, key);
}

function unlinkNode(a, b, key) {
    a.unlinkOut(b, key);
    b.unlinkIn(a, key);
}

function run(signals) {
    const callStack = signals;
    while(callStack.length) {
        const s = callStack.shift();
        s.process()
    };
}

function collection(activeMaps, allNodes) {
    allNodes.forEach(node => {
        if(node instanceof ProgramNode) {
            if(!activeMaps.includes(node.uuid)){
                node.clear();
            }
        }
    });
}

class Link {
    constructor(from, to, key) {
        this.from = from;
        this.to = to;
        this.key = key;
    }

    get unikey() {
        return `${this.from.name}-${this.to.name}-${this.key}`
    }

    delete() {
        const { from: a, to: b, key} = this;
        a.unlinkOut(b, key);
        b.unlinkIn(a, key);
    }

    static getUnikey(a, b, key) {
        return `${a.name}-${b.name}-${key}`
    }

    exportData() {
        return [this.from.name, this.to.name, this.key]
    }
}

const functionTypeResolver = (n) => {
    if(!n.name) {
        n.name = `Function${uuid++}`
    }
    const declaration = n.declaration;
    const op = new Operator(n.name, n.expression)
    const q = new ProgramNode(op);
    q.position = n.position;
    return {
        name: n.name,
        node: q
    }
}

export class NodeResolver {
    _resolvers = new Map();
    constructor() {
        this.add('Function', functionTypeResolver)
    }
    add(type, resolver){
        this._resolvers.set(type, resolver);
    }
    resolve(source){
        const type = source.type;
        const resolver = this._resolvers.get(type);
        if(resolver) {
            return resolver(source);
        }
        return null;
    }
}

export class Program {
    nodes = new Map();
    links = new Map();
    
    nodeResolver = null;
    constructor(nodeResolver) {
        this.nodeResolver = nodeResolver
    }
    
    load(source) {
        this.nodes = new Map();
        this.links = new Map();
        const { nodes, links } = source;
        nodes.forEach(n => {
            this.addNode(n);
        });
        this.loadLinks(links);
    }

    deleteLinkByKey(key) {
        this.links.delete(key);
    }

    delete(source) {
        if(source instanceof Link) {
            this.links.delete(source.unikey);
        }
        if(source instanceof Node) {
            this.nodes.delete(source.name);
        }
    }

    addNode(n) {
        const resolved = this.nodeResolver.resolve(n);
        if(resolved) {
            const { name, node } = resolved;
            this.nodes.set(name, node);
        }
    }

    loadLinks(links) {
        links.forEach(([a, b, c]) => {
            const n1 = this.nodes.get(a);
            const n2 = this.nodes.get(b);
            if(n1 && n2){
                this.linkNode(n1, n2, c);
            }
        });
    }

    linkNode(a, b, key) {
        const link = new Link(a, b, key);
        a.linkOut(b, key);
        b.linkIn(a, key);
        this.links.set(link.unikey, link)
    }
    
    unlinkNode(a, b, key) {
        const unikey = Link.getUnikey(a, b, key);
        this.links.delete(unikey)
        a.unlinkOut(b, key);
        b.unlinkIn(a, key);
    }

    getNodes() {
        return Array.from(this.nodes.values())
    }
    getLinks() {
        return Array.from(this.links.values())
    }

    run() {
        const signals = this.getNodes().filter(n => n instanceof SignalInNode);
        run(signals);
    }

    exportData() {
        const nodes = this.getNodes();
        const nodesData = nodes.map(n => n.exportData());

        const links = this.getLinks();
        const linksData = links.map(l => l.exportData());
        return {
            nodes: nodesData,
            links: linksData,
        }
    }

}

export function boot(source) {
   const program = new Program();
   program.load(source);
   console.log(program)
   return program;
}


/*const sum = new ProgramNode(
    new Operator(({a, b}) => {
        return new Promise((r) => {
            setTimeout(() => {
                r(a+b);
            }, 800);
        })
    }, new Decalaration([{ keyword: 'a' }, { keyword: 'b' }])));

const multiple = new ProgramNode(
    new Operator(({a, b}) => {
        return new Promise((r) => {
            setTimeout(() => {
                r(a*b);
            }, 500);
        })
    }, new Decalaration([{ keyword: 'a' }, { keyword: 'b' }])))


const varaible1 = new VariableNode({ value: 3 })
const varaible2 = new VariableNode({ value: 1 })
const varaible3 = new VariableNode({ value: 5 })


linkNode(varaible1, sum, 'a');
linkNode(varaible2, sum, 'b');
linkNode(sum, multiple, 'a');
linkNode(varaible3, multiple, 'b');


const signals = [
    varaible1, varaible2, varaible3
]

run(signals);
console.log(sum, multiple);

varaible1.setValue(6);
varaible1.process()
console.log(sum, multiple);
*/


