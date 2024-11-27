const adapter = {
    enableWheelMove: true,
    canvas: {
        wheel (event, jflow) {
            event.preventDefault();
            if(!adapter.enableWheelMove) {
                return;
            }
            let { offsetX, offsetY, deltaX, deltaY } = event
            if(event.ctrlKey) { 
                deltaY = -deltaY;
                jflow.zoomHandler(offsetX, offsetY, deltaX, deltaY, event);
            } else if(event.shiftKey) {
                jflow.panHandler(-deltaY, 0, event);
            } else {
                jflow.panHandler(-deltaX, -deltaY, event);
            }
        },
    },
};

export default adapter
