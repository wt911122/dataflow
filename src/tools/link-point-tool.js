import { toRaw } from 'vue';
import helpPoint from '../custom/helper-point';
import dragDropBehavior from './drag-drop-behavior';
import { DIRECTION, getDirectionNearestPoint } from '../custom/utils';
import { BezierLink } from '@joskii/jflow-core';
class LinkPointTool {
    constructor(configs = {}) {
        this.topP = new helpPoint();
        this.bottomP = new helpPoint();
        this.leftP = new helpPoint();
        this.rightP = new helpPoint();
        this.status = {
            sourceNode: null,
            renderNode: null,
            anchor: null,
            width: null, 
            height: null,
            insecPos: null,
            showPoint: false,
            linking: false,
            linkSource: null,
        };

        this.onLink = configs.onLink;
        this.onLinkNew = configs.onLinkNew;
        this.resolveCursor = configs.resolveCursor;
    }

    registToJflow(jflowInstance) {
        const {
            topP, bottomP, leftP, rightP
        } = this;
        jflowInstance.addEventListener('afterJflowRender', (event) => {
            const ctx = event.detail.ctx;
            if(this.status.showPoint){
                topP.render(ctx);
                bottomP.render(ctx);
                leftP.render(ctx);
                rightP.render(ctx);
            }
        });
        this.jflowInstance = jflowInstance;

        const f = ((e) => {
            if(!this.status.showPoint) {
                return;
            }
            if(this.status.linking || jflowInstance.isInLinkingMode()) {
                return;
            }
            const dir = this._targetLockOnControlPoint(e);
            if(dir !== null) {
                e.stopPropagation();
                this.status.linking = true;
                const self = this;
                let moved = false;
                dragDropBehavior(e, {
                    jflowInstance,
                    dragMoveCallback(dx, dy, status, event) {
                        const { offsetX, offsetY } = event
                        const point = jflowInstance._calculatePointBack([offsetX, offsetY]);
                        const {
                            sourceNode,
                            renderNode,
                            insecPos
                        } = self.status;
                        if(!moved) {
                            const q = toRaw(self.status.sourceNode);
                            jflowInstance.setLinkingMode(q, (configs) => {
                                let branchInfo = null
                                if(q?.type === 'ExclusiveGateway'){
                                    branchInfo = {};
                                    branchInfo.branchName = '分支';
                                    branchInfo.priority = '优先级1';
                                    branchInfo.rule = '满足条件数据可进分支';
                                }
                                if(q?.type === 'ParallelGateway'){
                                    branchInfo = {};
                                    branchInfo.branchName = '分支';
                                    branchInfo.priority = '优先级1';
                                    branchInfo.rule = '所有数据可进入分支';
                                }
                                const l = new flowLink({
                                    ...configs,
                                    branchInfo,
                                    backgroundColor: '#4E75EC',
                                    fromDir: dir,
                                });
                                Object.defineProperty(l, '_jflow', {
                                    get() {
                                        return jflowInstance;
                                    }
                                });
                                return l;
                            });
                            self.status.linkSource = self.status.sourceNode;
                            jflowInstance._tempNode.anchor = point;
                        }
                        moved = true
                        const flag = sourceNode && self.isInTargetBounding(point)
                        if(flag) {
                            if(jflowInstance._tempLink.from !== renderNode) {
                                // 不可以自连接
                                const toDir = getDirectionNearestPoint([0,1,2,3], point, insecPos);
                                self.changeCpBg(toDir);
                                jflowInstance.setLinkingLink({
                                    to: renderNode,
                                    toDir,
                                });
                            }
                        } else {
                            jflowInstance._tempLink.to = jflowInstance._tempNode;
                            jflowInstance._tempLink.toDir = undefined;
                        }
                    },
                    dragEndCallback(event) {
                        if(moved) {
                            const {
                                sourceNode,
                                linkSource,
                                insecPos
                            } = self.status;
                            const templink = jflowInstance._tempLink;
                            const fromDir = templink.fromDir ?? templink._fromDir;
                            const toDir = templink.toDir ?? templink._toDir;
                            if(sourceNode) {
                                self.onLink(linkSource, sourceNode, fromDir, toDir);
                            } else {
                                // 弹窗
                                const { clientX, clientY } = event
                                jflowInstance.preventClearTemp();
                                self.onLinkNew(linkSource, fromDir, toDir, {
                                    clientX, clientY
                                })
                            }
                            self.status.showPoint = false;
                            // jflowInstance.clearTemp();
                        }
                        self.status.linking = false;
                        self.status.linkSource = null;
                    }
                })
            }
        }).bind(this);
        jflowInstance.canvas.addEventListener('pointerdown', f, {
            capture: true,
        });

        jflowInstance.canvas.addEventListener('pointermove', (event) => {
            if(this.status.showPoint) {
                const { offsetX, offsetY } = event
                let point = jflowInstance._calculatePointBack([offsetX, offsetY]);
                topP.isPrepare = false;
                bottomP.isPrepare = false;
                leftP.isPrepare = false;
                rightP.isPrepare = false;
                if(!this.status.linking) {
                    if(topP.isHit(point)) {
                        topP.isPrepare = true;
                        this.resolveCursor('crosshair', 4);
                    } else if(bottomP.isHit(point)) {
                        bottomP.isPrepare = true;
                        this.resolveCursor('crosshair', 4);
                    } else if(leftP.isHit(point)) {
                        leftP.isPrepare = true;
                        this.resolveCursor('crosshair', 4);
                    } else if(rightP.isHit(point)) {
                        rightP.isPrepare = true;
                        this.resolveCursor('crosshair', 4);
                    } else {
                        this.resolveCursor('default');
                    }
                }
                // if(topP.isHit(point) || bottomP.isHit(point) || leftP.isHit(point) || rightP.isHit(point)) {
                //     this.resolveCursor('crosshair', 4);
                // } else {
                //     this.resolveCursor('default');
                // }
                const flag = this.isInTargetBounding(point);
                if(!flag) {
                    this.hide();
                }
                jflowInstance.scheduleRender();
            } else {
                // jflowInstance.canvas.style.cursor = 'default';
                this.resolveCursor('default');
            }
        });
    }

    changeCpBg(dir) {
        const {
            topP, bottomP, leftP, rightP
        } = this;
        topP.isHover = false;
        bottomP.isHover = false;
        leftP.isHover = false;
        rightP.isHover = false;
        switch(dir) {
            case DIRECTION.TOP:
                topP.isHover = true;
                break;
            case DIRECTION.BOTTOM:
                bottomP.isHover = true;
                break;
            case DIRECTION.LEFT:
                leftP.isHover = true;
                break;
            case DIRECTION.RIGHT:
                rightP.isHover = true;
                break; 
        }
    }

    _targetLockOnControlPoint(event) {
        const {
            topP, bottomP, leftP, rightP, jflowInstance
        } = this;
        const { offsetX, offsetY } = event
        let point = jflowInstance._calculatePointBack([offsetX, offsetY]);
        if(topP.isHit(point)) {
            return DIRECTION.TOP;
        }
        if(bottomP.isHit(point)) {
            return DIRECTION.BOTTOM;
        }
        if(leftP.isHit(point)) {
            return DIRECTION.LEFT;
        }
        if(rightP.isHit(point)) {
            return DIRECTION.RIGHT;
        }
        return null;
    }

    isInTargetBounding(point) {
        const {
            anchor,
            width, 
            height,
        } = this.status;
        const w = width /2;
        const h = height/2;
        return (point[0] > anchor[0] - w
            && point[0] < anchor[0] + w
            && point[1] > anchor[1] - h
            && point[1] < anchor[1] + h)
    }

    request(sourceNode) {
        sourceNode = toRaw(sourceNode);
        if(this.status.linking && this.status.linkSource === sourceNode) {
            return;
        }
        const jflowInstance = this.jflowInstance;
        const renderNode = jflowInstance.getRenderNodeBySource(toRaw(sourceNode));
        const insecPos = renderNode.getIntersectionsInFourDimension();
        const {
            topP, bottomP, leftP, rightP
        } = this;
        const anchor = renderNode.anchor.slice();
        const width = insecPos[0][0] - insecPos[2][0] + 8;
        const height = insecPos[1][1] - insecPos[3][1] + 8;
        topP.anchor = insecPos[3];
        bottomP.anchor = insecPos[1];
        leftP.anchor = insecPos[2];
        rightP.anchor = insecPos[0];
        this.changeCpBg();
        
        
        Object.assign(this.status, {
            sourceNode,
            renderNode,
            anchor,
            width, 
            height,
            insecPos,
            showPoint: true,
        });
        jflowInstance.scheduleRender();
    }

    requestLink(point) {
        const {
            renderNode,
            insecPos,
            showPoint,
            sourceNode
        } = this.status;
        if(!showPoint) {
            return {
                renderNode: undefined,
                dir: undefined
            }
        }
        const flag = this.isInTargetBounding(point)
        if(flag) {
            const dir = getDirectionNearestPoint([0,1,2,3], point, insecPos);
            this.changeCpBg(dir);
            return {
                sourceNode,
                renderNode,
                dir
            }
        } else {
            return {
                renderNode: undefined,
                dir: undefined,
                sourceNode: undefined,
            }
        }
    }

    hide() {
        Object.assign(this.status, {
            sourceNode: null,
            renderNode: null,
            anchor: null,
            width: null, 
            height: null,
            insecPos: null,
            showPoint: false,
        });
    }
   
}

export default LinkPointTool