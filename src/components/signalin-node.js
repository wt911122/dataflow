import { h } from 'vue';
import ProgramNode from './program-node.vue';
import NumericNode from './numeric-node.vue';
import StringNode from './string-node.vue';
import APINode from './api-node.vue';
import ComponentSignalInNode from './component-in-node.vue';

function getComponent(type) {
    switch(type) {
        case 'Numeric':
            return NumericNode;
        case 'String':
            return StringNode;
        case 'API':
            return APINode;
        case 'ComponentSignalIn':
            return ComponentSignalInNode;
    }
    return null;
}


function SignalInNode(props) {
    const type = props.node?.type;
    const targetComponent = getComponent(type);
    console.log(type, targetComponent)
    if(targetComponent) {
        return h(targetComponent, {
            node: props.node
        });
    }
    return null;
}
SignalInNode.props = {
    node: Object,
};

export default SignalInNode;

