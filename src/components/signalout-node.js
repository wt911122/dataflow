import { h } from 'vue';
import ComponentOutNode from './component-out-node.vue';


function getComponent(type) {
    switch(type) {
        case 'ComponentSignalOut':
            return ComponentOutNode;
    }
    return null;
}


function SignalOutNode(props) {
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
SignalOutNode.props = {
    node: Object,
};

export default SignalOutNode;

