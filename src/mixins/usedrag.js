import { ref, provide, toRaw } from 'vue'; 


export const useDrag = () => {
    const payload = {
        target: null,
        x: 0, y: 0,
    };
    const startDrag = (e, target) => {
        target = toRaw(target);   
        Object.assign(payload, {
            target,
            x: e.clientX,
            y: e.clientY,
        });
    }

    const endDrag = (e, callback) => {
        if(payload.x !== e.clientX || payload.y !== e.clientY) {
            callback(payload)
        }

        Object.assign(payload, {
            target: null,
            x: 0, y: 0,
        });
    }
    provide('startDrag', startDrag);
    provide('endDrag', endDrag);
    return {
        startDrag,
        endDrag
    }
}