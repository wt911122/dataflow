import { ref, provide, toRaw, inject, onMounted, watch } from 'vue'; 

export const usePopper = (getJFlow, anchorRef) => {
    const popper = ref({
        type: undefined,
        active: false,
        source: null,
        x: 0,
        y: 0,
        coord: [0,0]
    });
    
    const syncPosition = (jflowInstance, anchorDom) => {
        const point = jflowInstance.calculateToRealWorld([0, 0]);
        anchorDom.style.transform = `translate(${point[0]}px, ${point[1]}px)`
        if(popper.value.active) {
            const t = popper.value;
            Object.assign(t, {
                x: t.coord[0]*jflowInstance.scale,
                y: t.coord[1]*jflowInstance.scale
            })
        }
    }
    const mountPopper = () => {
        const jflowInstance = getJFlow();
        const anchorDom = anchorRef.value;
        syncPosition(jflowInstance, anchorDom)
        jflowInstance.addEventListener('zoompan', (event) => {
            syncPosition(jflowInstance, anchorDom);
        });
    }
    

    // const openPopper = (e, type, meta) => {

    //     Object.assign(popper.value, {
    //         type,
    //         meta,
    //         active: true,
    //         position
    //     })
    // }
    
    const openNodePopper = (source, type) => {
        const jflowInstance = getJFlow();
        const renderNode = jflowInstance.getRenderNodeBySource(toRaw(source));
        let p;
        p = [
            renderNode.anchor[0],
            renderNode.anchor[1] - renderNode.height/2,
        ];
        const coord = renderNode._belongs.calculateToCoordination?.(p) || p;
        const x = coord[0] * jflowInstance.scale;
        const y = coord[1] * jflowInstance.scale;
        
        Object.assign(popper.value, {
            type,
            source,
            active: true,
            coord, x, y
        });

    }

    const openCreatePopper = (e) => {
        const { topLayerPoint } = e.detail;
        const jflowInstance = getJFlow();
        const x = topLayerPoint[0] * jflowInstance.scale;
        const y = topLayerPoint[1] * jflowInstance.scale;
        Object.assign(popper.value, {
            type: 'create',
            active: true,
            coord: topLayerPoint.slice(), 
            x, y
        });
    }

    const closeNodePopper = () => {
        Object.assign(popper.value, {
            type: undefined,
            active: false,
            source: null,
            x: 0,
            y: 0,
            coord: [0,0]
        });
    }

    provide('openNodePopper', openNodePopper)
    provide('claseNodePopper', closeNodePopper)
    return {
        popper,
        mountPopper,
        openNodePopper,
        closeNodePopper,
        openCreatePopper
    }
}