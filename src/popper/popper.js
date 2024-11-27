import { h } from 'vue';
import popperWrapper from './popper-wrapper.vue';
import numericPopper from './numeric-popper.vue';
import stringPopper from './string-popper.vue';
import APIPopper from './api-poppover.vue';
import programPopper from './program-popper.vue';
import createPopper from './create-popper.vue';

function getComponent(type) {
    switch(type) {
        case 'Numeric':
            return numericPopper;
        case 'String':
            return stringPopper;
        case 'API':
            return APIPopper;
        case 'program':
            return programPopper;
        case 'create':
            return createPopper;
    }
    return null;
}


function Popper(props, { attrs }) {
    const type = props.meta?.type;
    const targetComponent = getComponent(type);
    let q = [];
    if(targetComponent) {
        q = [
            h(targetComponent, props.meta)
        ]
    }
    return h(popperWrapper, props.meta, q);
}
Popper.props = {
    meta: Object,
};

export default Popper;
  