import * as babel from "@babel/parser";
import { SignalIn, SignalInNode, SignalOut, SignalOutNode, Decalaration } from './model';
let uuid = 0;
export class APISignal extends SignalIn{
    name = ''
    type = 'API';
    constructor(source) {
        super()
        this.name = source.name;
        this.url = source.URL;
        
        this.fetchData();
    }

    async fetchData() {
        const res = await fetch(this.url);
        const json = await res.json();
        this.updateSignal(json);
    }

    setURL(url) {
        this.url = url;
        this.fetchData();
    }

    exportData() {
        return {
            name: this.name,
            URL: this.url
        }
    }
    static resolver(n) {
        if(!n.name) {
            n.name = `API${uuid++}`
        }
        const sig = new APISignal(n);
        const node = new SignalInNode(sig);
        node.position = n.position;
        return {
            name: n.name,
            node: node
        }
    }
}


export class StringSignal extends SignalIn{
    name = ''
    type = 'String';
    constructor(source) {
        super()
        this.name = source.name;
        this.value = source.value;
        this.updateSignal(source.value);
    }

    setValue(val) {
        this.value = val;
        this.updateSignal(val);
    }

    exportData() {
        return {
            name: this.name,
            value: this.value
        }
    }
    static resolver(n) {
        if(!n.name) {
            n.name = `String${uuid++}`
        }
        const sig = new StringSignal(n);
        const node = new SignalInNode(sig);
        node.position = n.position;
        return {
            name: n.name,
            node: node
        }
    }
}


export class NumericSignal extends SignalIn{
    name = ''
    type = 'Numeric';
    constructor(source) {
        super()
        this.name = source.name;
        this.value = source.value;
        this.updateSignal(source.value);
    }

    setValue(val) {
        this.value = val;
        this.updateSignal(val);
    }

    exportData() {
        return {
            name: this.name,
            value: this.value
        }
    }
    static resolver(n) {
        if(!n.name) {
            n.name = `Numeric${uuid++}`
        }
        const sig = new NumericSignal(n);
        const node = new SignalInNode(sig);
        node.position = n.position;
        return {
            name: n.name,
            node: node
        }
    }
}


export class ComponentSignalIn extends SignalIn{
    name = ''
    type = 'ComponentSignalIn';
    componentGetter = null;
    constructor(source) {
        super()
        this.name = source.name;
        this.componentName = source.componentName;
    }

    setComponentGetter(componentGetter) {
        this.componentGetter = componentGetter;
    }

    bindUpdater(componentGetter) {
        const component = componentGetter(this.componentName);
        component.registUpdater((val) => {
            this.updateSignal(val);
        });
    }

    exportData() {
        return {
            name: this.name,
            value: this.value,
            componentName: this.componentName,
        }
    }
    static resolver(n) {
        if(!n.name) {
            n.name = `ComponentSignalIn${uuid++}`
        }
        const sig = new ComponentSignalIn(n);
        const node = new SignalInNode(sig);
        node.position = n.position;
        return {
            name: n.name,
            node: node
        }
    }
}


export class ComponentSignalOut extends SignalOut{
    name = ''
    type = 'ComponentSignalOut';
    componentGetter = null;
    declaration = null
    constructor(source) {
        super()
        this.name = source.name;
        this.componentName = source.componentName;
        this.setExpression(source.expression);
    }

    setComponentGetter(componentGetter) {
        this.componentGetter = componentGetter;
    }

    validate() {
        return this.declaration.validate(this.input);
    }

    getComponent() {
        return this.componentGetter(this.componentName);
    }

    allowInput(key) {
        return this.declaration.has(key)
    }

    removeInput(key) {
        super.removeInput(key);
        this.run();
    }

    setExpression(expression){
        this.resolveExpression(expression);
        this.func = eval(expression);
        this.expression = expression;
        this.clear()
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

    async run() {
        // try {
            const component = this.getComponent()
            await this.func.call(null, this.input, component);
        // } catch (error) {
        //     console.error(error)
        // }
    }

    exportData() {
        return {
            name: this.name,
            componentName: this.componentName,
            expression: this.expression
        }
    }
    static resolver(n) {
        if(!n.name) {
            n.name = `ComponentSignalOut${uuid++}`
        }
        const sig = new ComponentSignalOut(n);
        const node = new SignalOutNode(sig);
        node.position = n.position;
        return {
            name: n.name,
            node: node
        }
    }
}


export function applyResolver(nodeResolver) {
    nodeResolver.add('Numeric', NumericSignal.resolver);
    nodeResolver.add('String', StringSignal.resolver);
    nodeResolver.add('API', APISignal.resolver);
    nodeResolver.add('ComponentSignalOut', ComponentSignalOut.resolver);
    nodeResolver.add('ComponentSignalIn', ComponentSignalIn.resolver)
}