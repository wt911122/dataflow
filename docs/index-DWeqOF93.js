var Et=Object.defineProperty;var yt=(Q,e,t)=>e in Q?Et(Q,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):Q[e]=t;var j=(Q,e,t)=>yt(Q,typeof e!="symbol"?e+"":e,t);function _mergeNamespaces(Q,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const n in s)if(n!=="default"&&!(n in Q)){const i=Object.getOwnPropertyDescriptor(s,n);i&&Object.defineProperty(Q,n,i.get?i:{enumerable:!0,get:()=>s[n]})}}}return Object.freeze(Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const U of i.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&s(U)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function makeMap(Q){const e=Object.create(null);for(const t of Q.split(","))e[t]=1;return t=>t in e}const EMPTY_OBJ={},EMPTY_ARR=[],NOOP=()=>{},NO=()=>!1,isOn=Q=>Q.charCodeAt(0)===111&&Q.charCodeAt(1)===110&&(Q.charCodeAt(2)>122||Q.charCodeAt(2)<97),isModelListener=Q=>Q.startsWith("onUpdate:"),extend=Object.assign,remove=(Q,e)=>{const t=Q.indexOf(e);t>-1&&Q.splice(t,1)},hasOwnProperty$2=Object.prototype.hasOwnProperty,hasOwn=(Q,e)=>hasOwnProperty$2.call(Q,e),isArray=Array.isArray,isMap=Q=>toTypeString(Q)==="[object Map]",isSet=Q=>toTypeString(Q)==="[object Set]",isFunction=Q=>typeof Q=="function",isString=Q=>typeof Q=="string",isSymbol=Q=>typeof Q=="symbol",isObject=Q=>Q!==null&&typeof Q=="object",isPromise=Q=>(isObject(Q)||isFunction(Q))&&isFunction(Q.then)&&isFunction(Q.catch),objectToString=Object.prototype.toString,toTypeString=Q=>objectToString.call(Q),toRawType=Q=>toTypeString(Q).slice(8,-1),isPlainObject=Q=>toTypeString(Q)==="[object Object]",isIntegerKey=Q=>isString(Q)&&Q!=="NaN"&&Q[0]!=="-"&&""+parseInt(Q,10)===Q,isReservedProp=makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cacheStringFunction=Q=>{const e=Object.create(null);return t=>e[t]||(e[t]=Q(t))},camelizeRE=/-(\w)/g,camelize=cacheStringFunction(Q=>Q.replace(camelizeRE,(e,t)=>t?t.toUpperCase():"")),hyphenateRE=/\B([A-Z])/g,hyphenate=cacheStringFunction(Q=>Q.replace(hyphenateRE,"-$1").toLowerCase()),capitalize=cacheStringFunction(Q=>Q.charAt(0).toUpperCase()+Q.slice(1)),toHandlerKey=cacheStringFunction(Q=>Q?`on${capitalize(Q)}`:""),hasChanged=(Q,e)=>!Object.is(Q,e),invokeArrayFns=(Q,...e)=>{for(let t=0;t<Q.length;t++)Q[t](...e)},def=(Q,e,t,s=!1)=>{Object.defineProperty(Q,e,{configurable:!0,enumerable:!1,writable:s,value:t})},looseToNumber=Q=>{const e=parseFloat(Q);return isNaN(e)?Q:e},toNumber=Q=>{const e=isString(Q)?Number(Q):NaN;return isNaN(e)?Q:e};let _globalThis;const getGlobalThis=()=>_globalThis||(_globalThis=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function normalizeStyle(Q){if(isArray(Q)){const e={};for(let t=0;t<Q.length;t++){const s=Q[t],n=isString(s)?parseStringStyle(s):normalizeStyle(s);if(n)for(const i in n)e[i]=n[i]}return e}else if(isString(Q)||isObject(Q))return Q}const listDelimiterRE=/;(?![^(]*\))/g,propertyDelimiterRE=/:([^]+)/,styleCommentRE=/\/\*[^]*?\*\//g;function parseStringStyle(Q){const e={};return Q.replace(styleCommentRE,"").split(listDelimiterRE).forEach(t=>{if(t){const s=t.split(propertyDelimiterRE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function normalizeClass(Q){let e="";if(isString(Q))e=Q;else if(isArray(Q))for(let t=0;t<Q.length;t++){const s=normalizeClass(Q[t]);s&&(e+=s+" ")}else if(isObject(Q))for(const t in Q)Q[t]&&(e+=t+" ");return e.trim()}const specialBooleanAttrs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",isSpecialBooleanAttr=makeMap(specialBooleanAttrs);function includeBooleanAttr(Q){return!!Q||Q===""}const isRef$1=Q=>!!(Q&&Q.__v_isRef===!0),toDisplayString=Q=>isString(Q)?Q:Q==null?"":isArray(Q)||isObject(Q)&&(Q.toString===objectToString||!isFunction(Q.toString))?isRef$1(Q)?toDisplayString(Q.value):JSON.stringify(Q,replacer,2):String(Q),replacer=(Q,e)=>isRef$1(e)?replacer(Q,e.value):isMap(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,n],i)=>(t[stringifySymbol(s,i)+" =>"]=n,t),{})}:isSet(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>stringifySymbol(t))}:isSymbol(e)?stringifySymbol(e):isObject(e)&&!isArray(e)&&!isPlainObject(e)?String(e):e,stringifySymbol=(Q,e="")=>{var t;return isSymbol(Q)?`Symbol(${(t=Q.description)!=null?t:e})`:Q};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let activeEffectScope;class EffectScope{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=activeEffectScope,!e&&activeEffectScope&&(this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=activeEffectScope;try{return activeEffectScope=this,e()}finally{activeEffectScope=t}}}on(){activeEffectScope=this}off(){activeEffectScope=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function getCurrentScope(){return activeEffectScope}let activeSub;const pausedQueueEffects=new WeakSet;class ReactiveEffect{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,activeEffectScope&&activeEffectScope.active&&activeEffectScope.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pausedQueueEffects.has(this)&&(pausedQueueEffects.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||batch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cleanupEffect(this),prepareDeps(this);const e=activeSub,t=shouldTrack;activeSub=this,shouldTrack=!0;try{return this.fn()}finally{cleanupDeps(this),activeSub=e,shouldTrack=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)removeSub(e);this.deps=this.depsTail=void 0,cleanupEffect(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pausedQueueEffects.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){isDirty(this)&&this.run()}get dirty(){return isDirty(this)}}let batchDepth=0,batchedSub,batchedComputed;function batch(Q,e=!1){if(Q.flags|=8,e){Q.next=batchedComputed,batchedComputed=Q;return}Q.next=batchedSub,batchedSub=Q}function startBatch(){batchDepth++}function endBatch(){if(--batchDepth>0)return;if(batchedComputed){let e=batchedComputed;for(batchedComputed=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let Q;for(;batchedSub;){let e=batchedSub;for(batchedSub=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){Q||(Q=s)}e=t}}if(Q)throw Q}function prepareDeps(Q){for(let e=Q.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cleanupDeps(Q){let e,t=Q.depsTail,s=t;for(;s;){const n=s.prevDep;s.version===-1?(s===t&&(t=n),removeSub(s),removeDep(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}Q.deps=e,Q.depsTail=t}function isDirty(Q){for(let e=Q.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(refreshComputed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!Q._dirty}function refreshComputed(Q){if(Q.flags&4&&!(Q.flags&16)||(Q.flags&=-17,Q.globalVersion===globalVersion))return;Q.globalVersion=globalVersion;const e=Q.dep;if(Q.flags|=2,e.version>0&&!Q.isSSR&&Q.deps&&!isDirty(Q)){Q.flags&=-3;return}const t=activeSub,s=shouldTrack;activeSub=Q,shouldTrack=!0;try{prepareDeps(Q);const n=Q.fn(Q._value);(e.version===0||hasChanged(n,Q._value))&&(Q._value=n,e.version++)}catch(n){throw e.version++,n}finally{activeSub=t,shouldTrack=s,cleanupDeps(Q),Q.flags&=-3}}function removeSub(Q,e=!1){const{dep:t,prevSub:s,nextSub:n}=Q;if(s&&(s.nextSub=n,Q.prevSub=void 0),n&&(n.prevSub=s,Q.nextSub=void 0),t.subs===Q&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)removeSub(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function removeDep(Q){const{prevDep:e,nextDep:t}=Q;e&&(e.nextDep=t,Q.prevDep=void 0),t&&(t.prevDep=e,Q.nextDep=void 0)}let shouldTrack=!0;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack),shouldTrack=!1}function resetTracking(){const Q=trackStack.pop();shouldTrack=Q===void 0?!0:Q}function cleanupEffect(Q){const{cleanup:e}=Q;if(Q.cleanup=void 0,e){const t=activeSub;activeSub=void 0;try{e()}finally{activeSub=t}}}let globalVersion=0,Link$1=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class Dep{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!activeSub||!shouldTrack||activeSub===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==activeSub)t=this.activeLink=new Link$1(activeSub,this),activeSub.deps?(t.prevDep=activeSub.depsTail,activeSub.depsTail.nextDep=t,activeSub.depsTail=t):activeSub.deps=activeSub.depsTail=t,addSub(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=activeSub.depsTail,t.nextDep=void 0,activeSub.depsTail.nextDep=t,activeSub.depsTail=t,activeSub.deps===t&&(activeSub.deps=s)}return t}trigger(e){this.version++,globalVersion++,this.notify(e)}notify(e){startBatch();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{endBatch()}}}function addSub(Q){if(Q.dep.sc++,Q.sub.flags&4){const e=Q.dep.computed;if(e&&!Q.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)addSub(s)}const t=Q.dep.subs;t!==Q&&(Q.prevSub=t,t&&(t.nextSub=Q)),Q.dep.subs=Q}}const targetMap=new WeakMap,ITERATE_KEY=Symbol(""),MAP_KEY_ITERATE_KEY=Symbol(""),ARRAY_ITERATE_KEY=Symbol("");function track(Q,e,t){if(shouldTrack&&activeSub){let s=targetMap.get(Q);s||targetMap.set(Q,s=new Map);let n=s.get(t);n||(s.set(t,n=new Dep),n.map=s,n.key=t),n.track()}}function trigger(Q,e,t,s,n,i){const U=targetMap.get(Q);if(!U){globalVersion++;return}const g=F=>{F&&F.trigger()};if(startBatch(),e==="clear")U.forEach(g);else{const F=isArray(Q),B=F&&isIntegerKey(t);if(F&&t==="length"){const r=Number(s);U.forEach((I,C)=>{(C==="length"||C===ARRAY_ITERATE_KEY||!isSymbol(C)&&C>=r)&&g(I)})}else switch((t!==void 0||U.has(void 0))&&g(U.get(t)),B&&g(U.get(ARRAY_ITERATE_KEY)),e){case"add":F?B&&g(U.get("length")):(g(U.get(ITERATE_KEY)),isMap(Q)&&g(U.get(MAP_KEY_ITERATE_KEY)));break;case"delete":F||(g(U.get(ITERATE_KEY)),isMap(Q)&&g(U.get(MAP_KEY_ITERATE_KEY)));break;case"set":isMap(Q)&&g(U.get(ITERATE_KEY));break}}endBatch()}function reactiveReadArray(Q){const e=toRaw(Q);return e===Q?e:(track(e,"iterate",ARRAY_ITERATE_KEY),isShallow(Q)?e:e.map(toReactive))}function shallowReadArray(Q){return track(Q=toRaw(Q),"iterate",ARRAY_ITERATE_KEY),Q}const arrayInstrumentations={__proto__:null,[Symbol.iterator](){return iterator(this,Symbol.iterator,toReactive)},concat(...Q){return reactiveReadArray(this).concat(...Q.map(e=>isArray(e)?reactiveReadArray(e):e))},entries(){return iterator(this,"entries",Q=>(Q[1]=toReactive(Q[1]),Q))},every(Q,e){return apply(this,"every",Q,e,void 0,arguments)},filter(Q,e){return apply(this,"filter",Q,e,t=>t.map(toReactive),arguments)},find(Q,e){return apply(this,"find",Q,e,toReactive,arguments)},findIndex(Q,e){return apply(this,"findIndex",Q,e,void 0,arguments)},findLast(Q,e){return apply(this,"findLast",Q,e,toReactive,arguments)},findLastIndex(Q,e){return apply(this,"findLastIndex",Q,e,void 0,arguments)},forEach(Q,e){return apply(this,"forEach",Q,e,void 0,arguments)},includes(...Q){return searchProxy(this,"includes",Q)},indexOf(...Q){return searchProxy(this,"indexOf",Q)},join(Q){return reactiveReadArray(this).join(Q)},lastIndexOf(...Q){return searchProxy(this,"lastIndexOf",Q)},map(Q,e){return apply(this,"map",Q,e,void 0,arguments)},pop(){return noTracking(this,"pop")},push(...Q){return noTracking(this,"push",Q)},reduce(Q,...e){return reduce(this,"reduce",Q,e)},reduceRight(Q,...e){return reduce(this,"reduceRight",Q,e)},shift(){return noTracking(this,"shift")},some(Q,e){return apply(this,"some",Q,e,void 0,arguments)},splice(...Q){return noTracking(this,"splice",Q)},toReversed(){return reactiveReadArray(this).toReversed()},toSorted(Q){return reactiveReadArray(this).toSorted(Q)},toSpliced(...Q){return reactiveReadArray(this).toSpliced(...Q)},unshift(...Q){return noTracking(this,"unshift",Q)},values(){return iterator(this,"values",toReactive)}};function iterator(Q,e,t){const s=shallowReadArray(Q),n=s[e]();return s!==Q&&!isShallow(Q)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.value&&(i.value=t(i.value)),i}),n}const arrayProto=Array.prototype;function apply(Q,e,t,s,n,i){const U=shallowReadArray(Q),g=U!==Q&&!isShallow(Q),F=U[e];if(F!==arrayProto[e]){const I=F.apply(Q,i);return g?toReactive(I):I}let B=t;U!==Q&&(g?B=function(I,C){return t.call(this,toReactive(I),C,Q)}:t.length>2&&(B=function(I,C){return t.call(this,I,C,Q)}));const r=F.call(U,B,s);return g&&n?n(r):r}function reduce(Q,e,t,s){const n=shallowReadArray(Q);let i=t;return n!==Q&&(isShallow(Q)?t.length>3&&(i=function(U,g,F){return t.call(this,U,g,F,Q)}):i=function(U,g,F){return t.call(this,U,toReactive(g),F,Q)}),n[e](i,...s)}function searchProxy(Q,e,t){const s=toRaw(Q);track(s,"iterate",ARRAY_ITERATE_KEY);const n=s[e](...t);return(n===-1||n===!1)&&isProxy(t[0])?(t[0]=toRaw(t[0]),s[e](...t)):n}function noTracking(Q,e,t=[]){pauseTracking(),startBatch();const s=toRaw(Q)[e].apply(Q,t);return endBatch(),resetTracking(),s}const isNonTrackableKeys=makeMap("__proto__,__v_isRef,__isVue"),builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).filter(Q=>Q!=="arguments"&&Q!=="caller").map(Q=>Symbol[Q]).filter(isSymbol));function hasOwnProperty$1(Q){isSymbol(Q)||(Q=String(Q));const e=toRaw(this);return track(e,"has",Q),e.hasOwnProperty(Q)}class BaseReactiveHandler{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){const n=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(n?i?shallowReadonlyMap:readonlyMap:i?shallowReactiveMap:reactiveMap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const U=isArray(e);if(!n){let F;if(U&&(F=arrayInstrumentations[t]))return F;if(t==="hasOwnProperty")return hasOwnProperty$1}const g=Reflect.get(e,t,isRef(e)?e:s);return(isSymbol(t)?builtInSymbols.has(t):isNonTrackableKeys(t))||(n||track(e,"get",t),i)?g:isRef(g)?U&&isIntegerKey(t)?g:g.value:isObject(g)?n?readonly(g):reactive(g):g}}class MutableReactiveHandler extends BaseReactiveHandler{constructor(e=!1){super(!1,e)}set(e,t,s,n){let i=e[t];if(!this._isShallow){const F=isReadonly(i);if(!isShallow(s)&&!isReadonly(s)&&(i=toRaw(i),s=toRaw(s)),!isArray(e)&&isRef(i)&&!isRef(s))return F?!1:(i.value=s,!0)}const U=isArray(e)&&isIntegerKey(t)?Number(t)<e.length:hasOwn(e,t),g=Reflect.set(e,t,s,isRef(e)?e:n);return e===toRaw(n)&&(U?hasChanged(s,i)&&trigger(e,"set",t,s):trigger(e,"add",t,s)),g}deleteProperty(e,t){const s=hasOwn(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&trigger(e,"delete",t,void 0),n}has(e,t){const s=Reflect.has(e,t);return(!isSymbol(t)||!builtInSymbols.has(t))&&track(e,"has",t),s}ownKeys(e){return track(e,"iterate",isArray(e)?"length":ITERATE_KEY),Reflect.ownKeys(e)}}class ReadonlyReactiveHandler extends BaseReactiveHandler{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const mutableHandlers=new MutableReactiveHandler,readonlyHandlers=new ReadonlyReactiveHandler,shallowReactiveHandlers=new MutableReactiveHandler(!0),shallowReadonlyHandlers=new ReadonlyReactiveHandler(!0),toShallow=Q=>Q,getProto=Q=>Reflect.getPrototypeOf(Q);function createIterableMethod(Q,e,t){return function(...s){const n=this.__v_raw,i=toRaw(n),U=isMap(i),g=Q==="entries"||Q===Symbol.iterator&&U,F=Q==="keys"&&U,B=n[Q](...s),r=t?toShallow:e?toReadonly:toReactive;return!e&&track(i,"iterate",F?MAP_KEY_ITERATE_KEY:ITERATE_KEY),{next(){const{value:I,done:C}=B.next();return C?{value:I,done:C}:{value:g?[r(I[0]),r(I[1])]:r(I),done:C}},[Symbol.iterator](){return this}}}}function createReadonlyMethod(Q){return function(...e){return Q==="delete"?!1:Q==="clear"?void 0:this}}function createInstrumentations(Q,e){const t={get(n){const i=this.__v_raw,U=toRaw(i),g=toRaw(n);Q||(hasChanged(n,g)&&track(U,"get",n),track(U,"get",g));const{has:F}=getProto(U),B=e?toShallow:Q?toReadonly:toReactive;if(F.call(U,n))return B(i.get(n));if(F.call(U,g))return B(i.get(g));i!==U&&i.get(n)},get size(){const n=this.__v_raw;return!Q&&track(toRaw(n),"iterate",ITERATE_KEY),Reflect.get(n,"size",n)},has(n){const i=this.__v_raw,U=toRaw(i),g=toRaw(n);return Q||(hasChanged(n,g)&&track(U,"has",n),track(U,"has",g)),n===g?i.has(n):i.has(n)||i.has(g)},forEach(n,i){const U=this,g=U.__v_raw,F=toRaw(g),B=e?toShallow:Q?toReadonly:toReactive;return!Q&&track(F,"iterate",ITERATE_KEY),g.forEach((r,I)=>n.call(i,B(r),B(I),U))}};return extend(t,Q?{add:createReadonlyMethod("add"),set:createReadonlyMethod("set"),delete:createReadonlyMethod("delete"),clear:createReadonlyMethod("clear")}:{add(n){!e&&!isShallow(n)&&!isReadonly(n)&&(n=toRaw(n));const i=toRaw(this);return getProto(i).has.call(i,n)||(i.add(n),trigger(i,"add",n,n)),this},set(n,i){!e&&!isShallow(i)&&!isReadonly(i)&&(i=toRaw(i));const U=toRaw(this),{has:g,get:F}=getProto(U);let B=g.call(U,n);B||(n=toRaw(n),B=g.call(U,n));const r=F.call(U,n);return U.set(n,i),B?hasChanged(i,r)&&trigger(U,"set",n,i):trigger(U,"add",n,i),this},delete(n){const i=toRaw(this),{has:U,get:g}=getProto(i);let F=U.call(i,n);F||(n=toRaw(n),F=U.call(i,n)),g&&g.call(i,n);const B=i.delete(n);return F&&trigger(i,"delete",n,void 0),B},clear(){const n=toRaw(this),i=n.size!==0,U=n.clear();return i&&trigger(n,"clear",void 0,void 0),U}}),["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=createIterableMethod(n,Q,e)}),t}function createInstrumentationGetter(Q,e){const t=createInstrumentations(Q,e);return(s,n,i)=>n==="__v_isReactive"?!Q:n==="__v_isReadonly"?Q:n==="__v_raw"?s:Reflect.get(hasOwn(t,n)&&n in s?t:s,n,i)}const mutableCollectionHandlers={get:createInstrumentationGetter(!1,!1)},shallowCollectionHandlers={get:createInstrumentationGetter(!1,!0)},readonlyCollectionHandlers={get:createInstrumentationGetter(!0,!1)},shallowReadonlyCollectionHandlers={get:createInstrumentationGetter(!0,!0)},reactiveMap=new WeakMap,shallowReactiveMap=new WeakMap,readonlyMap=new WeakMap,shallowReadonlyMap=new WeakMap;function targetTypeMap(Q){switch(Q){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function getTargetType(Q){return Q.__v_skip||!Object.isExtensible(Q)?0:targetTypeMap(toRawType(Q))}function reactive(Q){return isReadonly(Q)?Q:createReactiveObject(Q,!1,mutableHandlers,mutableCollectionHandlers,reactiveMap)}function shallowReactive(Q){return createReactiveObject(Q,!1,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap)}function readonly(Q){return createReactiveObject(Q,!0,readonlyHandlers,readonlyCollectionHandlers,readonlyMap)}function shallowReadonly(Q){return createReactiveObject(Q,!0,shallowReadonlyHandlers,shallowReadonlyCollectionHandlers,shallowReadonlyMap)}function createReactiveObject(Q,e,t,s,n){if(!isObject(Q)||Q.__v_raw&&!(e&&Q.__v_isReactive))return Q;const i=n.get(Q);if(i)return i;const U=getTargetType(Q);if(U===0)return Q;const g=new Proxy(Q,U===2?s:t);return n.set(Q,g),g}function isReactive(Q){return isReadonly(Q)?isReactive(Q.__v_raw):!!(Q&&Q.__v_isReactive)}function isReadonly(Q){return!!(Q&&Q.__v_isReadonly)}function isShallow(Q){return!!(Q&&Q.__v_isShallow)}function isProxy(Q){return Q?!!Q.__v_raw:!1}function toRaw(Q){const e=Q&&Q.__v_raw;return e?toRaw(e):Q}function markRaw(Q){return!hasOwn(Q,"__v_skip")&&Object.isExtensible(Q)&&def(Q,"__v_skip",!0),Q}const toReactive=Q=>isObject(Q)?reactive(Q):Q,toReadonly=Q=>isObject(Q)?readonly(Q):Q;function isRef(Q){return Q?Q.__v_isRef===!0:!1}function ref(Q){return createRef(Q,!1)}function createRef(Q,e){return isRef(Q)?Q:new RefImpl(Q,e)}class RefImpl{constructor(e,t){this.dep=new Dep,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:toRaw(e),this._value=t?e:toReactive(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||isShallow(e)||isReadonly(e);e=s?e:toRaw(e),hasChanged(e,t)&&(this._rawValue=e,this._value=s?e:toReactive(e),this.dep.trigger())}}function unref(Q){return isRef(Q)?Q.value:Q}const shallowUnwrapHandlers={get:(Q,e,t)=>e==="__v_raw"?Q:unref(Reflect.get(Q,e,t)),set:(Q,e,t,s)=>{const n=Q[e];return isRef(n)&&!isRef(t)?(n.value=t,!0):Reflect.set(Q,e,t,s)}};function proxyRefs(Q){return isReactive(Q)?Q:new Proxy(Q,shallowUnwrapHandlers)}class ComputedRefImpl{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Dep(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=globalVersion-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&activeSub!==this)return batch(this,!0),!0}get value(){const e=this.dep.track();return refreshComputed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function computed$1(Q,e,t=!1){let s,n;return isFunction(Q)?s=Q:(s=Q.get,n=Q.set),new ComputedRefImpl(s,n,t)}const INITIAL_WATCHER_VALUE={},cleanupMap=new WeakMap;let activeWatcher;function onWatcherCleanup(Q,e=!1,t=activeWatcher){if(t){let s=cleanupMap.get(t);s||cleanupMap.set(t,s=[]),s.push(Q)}}function watch$1(Q,e,t=EMPTY_OBJ){const{immediate:s,deep:n,once:i,scheduler:U,augmentJob:g,call:F}=t,B=R=>n?R:isShallow(R)||n===!1||n===0?traverse(R,1):traverse(R);let r,I,C,o,l=!1,A=!1;if(isRef(Q)?(I=()=>Q.value,l=isShallow(Q)):isReactive(Q)?(I=()=>B(Q),l=!0):isArray(Q)?(A=!0,l=Q.some(R=>isReactive(R)||isShallow(R)),I=()=>Q.map(R=>{if(isRef(R))return R.value;if(isReactive(R))return B(R);if(isFunction(R))return F?F(R,2):R()})):isFunction(Q)?e?I=F?()=>F(Q,2):Q:I=()=>{if(C){pauseTracking();try{C()}finally{resetTracking()}}const R=activeWatcher;activeWatcher=r;try{return F?F(Q,3,[o]):Q(o)}finally{activeWatcher=R}}:I=NOOP,e&&n){const R=I,k=n===!0?1/0:n;I=()=>traverse(R(),k)}const f=getCurrentScope(),d=()=>{r.stop(),f&&remove(f.effects,r)};if(i&&e){const R=e;e=(...k)=>{R(...k),d()}}let N=A?new Array(Q.length).fill(INITIAL_WATCHER_VALUE):INITIAL_WATCHER_VALUE;const y=R=>{if(!(!(r.flags&1)||!r.dirty&&!R))if(e){const k=r.run();if(n||l||(A?k.some((_,q)=>hasChanged(_,N[q])):hasChanged(k,N))){C&&C();const _=activeWatcher;activeWatcher=r;try{const q=[k,N===INITIAL_WATCHER_VALUE?void 0:A&&N[0]===INITIAL_WATCHER_VALUE?[]:N,o];F?F(e,3,q):e(...q),N=k}finally{activeWatcher=_}}}else r.run()};return g&&g(y),r=new ReactiveEffect(I),r.scheduler=U?()=>U(y,!1):y,o=R=>onWatcherCleanup(R,!1,r),C=r.onStop=()=>{const R=cleanupMap.get(r);if(R){if(F)F(R,4);else for(const k of R)k();cleanupMap.delete(r)}},e?s?y(!0):N=r.run():U?U(y.bind(null,!0),!0):r.run(),d.pause=r.pause.bind(r),d.resume=r.resume.bind(r),d.stop=d,d}function traverse(Q,e=1/0,t){if(e<=0||!isObject(Q)||Q.__v_skip||(t=t||new Set,t.has(Q)))return Q;if(t.add(Q),e--,isRef(Q))traverse(Q.value,e,t);else if(isArray(Q))for(let s=0;s<Q.length;s++)traverse(Q[s],e,t);else if(isSet(Q)||isMap(Q))Q.forEach(s=>{traverse(s,e,t)});else if(isPlainObject(Q)){for(const s in Q)traverse(Q[s],e,t);for(const s of Object.getOwnPropertySymbols(Q))Object.prototype.propertyIsEnumerable.call(Q,s)&&traverse(Q[s],e,t)}return Q}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const stack=[];let isWarning=!1;function warn$1(Q,...e){if(isWarning)return;isWarning=!0,pauseTracking();const t=stack.length?stack[stack.length-1].component:null,s=t&&t.appContext.config.warnHandler,n=getComponentTrace();if(s)callWithErrorHandling(s,t,11,[Q+e.map(i=>{var U,g;return(g=(U=i.toString)==null?void 0:U.call(i))!=null?g:JSON.stringify(i)}).join(""),t&&t.proxy,n.map(({vnode:i})=>`at <${formatComponentName(t,i.type)}>`).join(`
`),n]);else{const i=[`[Vue warn]: ${Q}`,...e];n.length&&i.push(`
`,...formatTrace(n)),console.warn(...i)}resetTracking(),isWarning=!1}function getComponentTrace(){let Q=stack[stack.length-1];if(!Q)return[];const e=[];for(;Q;){const t=e[0];t&&t.vnode===Q?t.recurseCount++:e.push({vnode:Q,recurseCount:0});const s=Q.component&&Q.component.parent;Q=s&&s.vnode}return e}function formatTrace(Q){const e=[];return Q.forEach((t,s)=>{e.push(...s===0?[]:[`
`],...formatTraceEntry(t))}),e}function formatTraceEntry({vnode:Q,recurseCount:e}){const t=e>0?`... (${e} recursive calls)`:"",s=Q.component?Q.component.parent==null:!1,n=` at <${formatComponentName(Q.component,Q.type,s)}`,i=">"+t;return Q.props?[n,...formatProps(Q.props),i]:[n+i]}function formatProps(Q){const e=[],t=Object.keys(Q);return t.slice(0,3).forEach(s=>{e.push(...formatProp(s,Q[s]))}),t.length>3&&e.push(" ..."),e}function formatProp(Q,e,t){return isString(e)?(e=JSON.stringify(e),t?e:[`${Q}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?t?e:[`${Q}=${e}`]:isRef(e)?(e=formatProp(Q,toRaw(e.value),!0),t?e:[`${Q}=Ref<`,e,">"]):isFunction(e)?[`${Q}=fn${e.name?`<${e.name}>`:""}`]:(e=toRaw(e),t?e:[`${Q}=`,e])}function callWithErrorHandling(Q,e,t,s){try{return s?Q(...s):Q()}catch(n){handleError(n,e,t)}}function callWithAsyncErrorHandling(Q,e,t,s){if(isFunction(Q)){const n=callWithErrorHandling(Q,e,t,s);return n&&isPromise(n)&&n.catch(i=>{handleError(i,e,t)}),n}if(isArray(Q)){const n=[];for(let i=0;i<Q.length;i++)n.push(callWithAsyncErrorHandling(Q[i],e,t,s));return n}}function handleError(Q,e,t,s=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:U}=e&&e.appContext.config||EMPTY_OBJ;if(e){let g=e.parent;const F=e.proxy,B=`https://vuejs.org/error-reference/#runtime-${t}`;for(;g;){const r=g.ec;if(r){for(let I=0;I<r.length;I++)if(r[I](Q,F,B)===!1)return}g=g.parent}if(i){pauseTracking(),callWithErrorHandling(i,null,10,[Q,F,B]),resetTracking();return}}logError(Q,t,n,s,U)}function logError(Q,e,t,s=!0,n=!1){if(n)throw Q;console.error(Q)}const queue=[];let flushIndex=-1;const pendingPostFlushCbs=[];let activePostFlushCbs=null,postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;function nextTick(Q){const e=currentFlushPromise||resolvedPromise;return Q?e.then(this?Q.bind(this):Q):e}function findInsertionIndex(Q){let e=flushIndex+1,t=queue.length;for(;e<t;){const s=e+t>>>1,n=queue[s],i=getId(n);i<Q||i===Q&&n.flags&2?e=s+1:t=s}return e}function queueJob(Q){if(!(Q.flags&1)){const e=getId(Q),t=queue[queue.length-1];!t||!(Q.flags&2)&&e>=getId(t)?queue.push(Q):queue.splice(findInsertionIndex(e),0,Q),Q.flags|=1,queueFlush()}}function queueFlush(){currentFlushPromise||(currentFlushPromise=resolvedPromise.then(flushJobs))}function queuePostFlushCb(Q){isArray(Q)?pendingPostFlushCbs.push(...Q):activePostFlushCbs&&Q.id===-1?activePostFlushCbs.splice(postFlushIndex+1,0,Q):Q.flags&1||(pendingPostFlushCbs.push(Q),Q.flags|=1),queueFlush()}function flushPreFlushCbs(Q,e,t=flushIndex+1){for(;t<queue.length;t++){const s=queue[t];if(s&&s.flags&2){if(Q&&s.id!==Q.uid)continue;queue.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function flushPostFlushCbs(Q){if(pendingPostFlushCbs.length){const e=[...new Set(pendingPostFlushCbs)].sort((t,s)=>getId(t)-getId(s));if(pendingPostFlushCbs.length=0,activePostFlushCbs){activePostFlushCbs.push(...e);return}for(activePostFlushCbs=e,postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){const t=activePostFlushCbs[postFlushIndex];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}activePostFlushCbs=null,postFlushIndex=0}}const getId=Q=>Q.id==null?Q.flags&2?-1:1/0:Q.id;function flushJobs(Q){try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const e=queue[flushIndex];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),callWithErrorHandling(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;flushIndex<queue.length;flushIndex++){const e=queue[flushIndex];e&&(e.flags&=-2)}flushIndex=-1,queue.length=0,flushPostFlushCbs(),currentFlushPromise=null,(queue.length||pendingPostFlushCbs.length)&&flushJobs()}}let currentRenderingInstance=null,currentScopeId=null;function setCurrentRenderingInstance(Q){const e=currentRenderingInstance;return currentRenderingInstance=Q,currentScopeId=Q&&Q.type.__scopeId||null,e}function withCtx(Q,e=currentRenderingInstance,t){if(!e||Q._n)return Q;const s=(...n)=>{s._d&&setBlockTracking(-1);const i=setCurrentRenderingInstance(e);let U;try{U=Q(...n)}finally{setCurrentRenderingInstance(i),s._d&&setBlockTracking(1)}return U};return s._n=!0,s._c=!0,s._d=!0,s}function withDirectives(Q,e){if(currentRenderingInstance===null)return Q;const t=getComponentPublicInstance(currentRenderingInstance),s=Q.dirs||(Q.dirs=[]);for(let n=0;n<e.length;n++){let[i,U,g,F=EMPTY_OBJ]=e[n];i&&(isFunction(i)&&(i={mounted:i,updated:i}),i.deep&&traverse(U),s.push({dir:i,instance:t,value:U,oldValue:void 0,arg:g,modifiers:F}))}return Q}function invokeDirectiveHook(Q,e,t,s){const n=Q.dirs,i=e&&e.dirs;for(let U=0;U<n.length;U++){const g=n[U];i&&(g.oldValue=i[U].value);let F=g.dir[s];F&&(pauseTracking(),callWithAsyncErrorHandling(F,t,8,[Q.el,g,Q,e]),resetTracking())}}const TeleportEndKey=Symbol("_vte"),isTeleport=Q=>Q.__isTeleport,leaveCbKey=Symbol("_leaveCb"),enterCbKey=Symbol("_enterCb");function useTransitionState(){const Q={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return onMounted(()=>{Q.isMounted=!0}),onBeforeUnmount(()=>{Q.isUnmounting=!0}),Q}const TransitionHookValidator=[Function,Array],BaseTransitionPropsValidators={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},recursiveGetSubtree=Q=>{const e=Q.subTree;return e.component?recursiveGetSubtree(e.component):e},BaseTransitionImpl={name:"BaseTransition",props:BaseTransitionPropsValidators,setup(Q,{slots:e}){const t=getCurrentInstance(),s=useTransitionState();return()=>{const n=e.default&&getTransitionRawChildren(e.default(),!0);if(!n||!n.length)return;const i=findNonCommentChild(n),U=toRaw(Q),{mode:g}=U;if(s.isLeaving)return emptyPlaceholder(i);const F=getInnerChild$1(i);if(!F)return emptyPlaceholder(i);let B=resolveTransitionHooks(F,U,s,t,C=>B=C);F.type!==Comment&&setTransitionHooks(F,B);const r=t.subTree,I=r&&getInnerChild$1(r);if(I&&I.type!==Comment&&!isSameVNodeType(F,I)&&recursiveGetSubtree(t).type!==Comment){const C=resolveTransitionHooks(I,U,s,t);if(setTransitionHooks(I,C),g==="out-in"&&F.type!==Comment)return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete C.afterLeave},emptyPlaceholder(i);g==="in-out"&&F.type!==Comment&&(C.delayLeave=(o,l,A)=>{const f=getLeavingNodesForType(s,I);f[String(I.key)]=I,o[leaveCbKey]=()=>{l(),o[leaveCbKey]=void 0,delete B.delayedLeave},B.delayedLeave=A})}return i}}};function findNonCommentChild(Q){let e=Q[0];if(Q.length>1){for(const t of Q)if(t.type!==Comment){e=t;break}}return e}const BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(Q,e){const{leavingVNodes:t}=Q;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function resolveTransitionHooks(Q,e,t,s,n){const{appear:i,mode:U,persisted:g=!1,onBeforeEnter:F,onEnter:B,onAfterEnter:r,onEnterCancelled:I,onBeforeLeave:C,onLeave:o,onAfterLeave:l,onLeaveCancelled:A,onBeforeAppear:f,onAppear:d,onAfterAppear:N,onAppearCancelled:y}=e,R=String(Q.key),k=getLeavingNodesForType(t,Q),_=(J,Z)=>{J&&callWithAsyncErrorHandling(J,s,9,Z)},q=(J,Z)=>{const v=Z[1];_(J,Z),isArray(J)?J.every(S=>S.length<=1)&&v():J.length<=1&&v()},et={mode:U,persisted:g,beforeEnter(J){let Z=F;if(!t.isMounted)if(i)Z=f||F;else return;J[leaveCbKey]&&J[leaveCbKey](!0);const v=k[R];v&&isSameVNodeType(Q,v)&&v.el[leaveCbKey]&&v.el[leaveCbKey](),_(Z,[J])},enter(J){let Z=B,v=r,S=I;if(!t.isMounted)if(i)Z=d||B,v=N||r,S=y||I;else return;let H=!1;const T=J[enterCbKey]=w=>{H||(H=!0,w?_(S,[J]):_(v,[J]),et.delayedLeave&&et.delayedLeave(),J[enterCbKey]=void 0)};Z?q(Z,[J,T]):T()},leave(J,Z){const v=String(Q.key);if(J[enterCbKey]&&J[enterCbKey](!0),t.isUnmounting)return Z();_(C,[J]);let S=!1;const H=J[leaveCbKey]=T=>{S||(S=!0,Z(),T?_(A,[J]):_(l,[J]),J[leaveCbKey]=void 0,k[v]===Q&&delete k[v])};k[v]=Q,o?q(o,[J,H]):H()},clone(J){const Z=resolveTransitionHooks(J,e,t,s,n);return n&&n(Z),Z}};return et}function emptyPlaceholder(Q){if(isKeepAlive(Q))return Q=cloneVNode(Q),Q.children=null,Q}function getInnerChild$1(Q){if(!isKeepAlive(Q))return isTeleport(Q.type)&&Q.children?findNonCommentChild(Q.children):Q;const{shapeFlag:e,children:t}=Q;if(t){if(e&16)return t[0];if(e&32&&isFunction(t.default))return t.default()}}function setTransitionHooks(Q,e){Q.shapeFlag&6&&Q.component?(Q.transition=e,setTransitionHooks(Q.component.subTree,e)):Q.shapeFlag&128?(Q.ssContent.transition=e.clone(Q.ssContent),Q.ssFallback.transition=e.clone(Q.ssFallback)):Q.transition=e}function getTransitionRawChildren(Q,e=!1,t){let s=[],n=0;for(let i=0;i<Q.length;i++){let U=Q[i];const g=t==null?U.key:String(t)+String(U.key!=null?U.key:i);U.type===Fragment?(U.patchFlag&128&&n++,s=s.concat(getTransitionRawChildren(U.children,e,g))):(e||U.type!==Comment)&&s.push(g!=null?cloneVNode(U,{key:g}):U)}if(n>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function markAsyncBoundary(Q){Q.ids=[Q.ids[0]+Q.ids[2]+++"-",0,0]}function setRef(Q,e,t,s,n=!1){if(isArray(Q)){Q.forEach((l,A)=>setRef(l,e&&(isArray(e)?e[A]:e),t,s,n));return}if(isAsyncWrapper(s)&&!n)return;const i=s.shapeFlag&4?getComponentPublicInstance(s.component):s.el,U=n?null:i,{i:g,r:F}=Q,B=e&&e.r,r=g.refs===EMPTY_OBJ?g.refs={}:g.refs,I=g.setupState,C=toRaw(I),o=I===EMPTY_OBJ?()=>!1:l=>hasOwn(C,l);if(B!=null&&B!==F&&(isString(B)?(r[B]=null,o(B)&&(I[B]=null)):isRef(B)&&(B.value=null)),isFunction(F))callWithErrorHandling(F,g,12,[U,r]);else{const l=isString(F),A=isRef(F);if(l||A){const f=()=>{if(Q.f){const d=l?o(F)?I[F]:r[F]:F.value;n?isArray(d)&&remove(d,i):isArray(d)?d.includes(i)||d.push(i):l?(r[F]=[i],o(F)&&(I[F]=r[F])):(F.value=[i],Q.k&&(r[Q.k]=F.value))}else l?(r[F]=U,o(F)&&(I[F]=U)):A&&(F.value=U,Q.k&&(r[Q.k]=U))};U?(f.id=-1,queuePostRenderEffect(f,t)):f()}}}getGlobalThis().requestIdleCallback;getGlobalThis().cancelIdleCallback;const isAsyncWrapper=Q=>!!Q.type.__asyncLoader,isKeepAlive=Q=>Q.type.__isKeepAlive;function onActivated(Q,e){registerKeepAliveHook(Q,"a",e)}function onDeactivated(Q,e){registerKeepAliveHook(Q,"da",e)}function registerKeepAliveHook(Q,e,t=currentInstance){const s=Q.__wdc||(Q.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return Q()});if(injectHook(e,s,t),t){let n=t.parent;for(;n&&n.parent;)isKeepAlive(n.parent.vnode)&&injectToKeepAliveRoot(s,e,t,n),n=n.parent}}function injectToKeepAliveRoot(Q,e,t,s){const n=injectHook(e,Q,s,!0);onUnmounted(()=>{remove(s[e],n)},t)}function injectHook(Q,e,t=currentInstance,s=!1){if(t){const n=t[Q]||(t[Q]=[]),i=e.__weh||(e.__weh=(...U)=>{pauseTracking();const g=setCurrentInstance(t),F=callWithAsyncErrorHandling(e,t,Q,U);return g(),resetTracking(),F});return s?n.unshift(i):n.push(i),i}}const createHook=Q=>(e,t=currentInstance)=>{(!isInSSRComponentSetup||Q==="sp")&&injectHook(Q,(...s)=>e(...s),t)},onBeforeMount=createHook("bm"),onMounted=createHook("m"),onBeforeUpdate=createHook("bu"),onUpdated=createHook("u"),onBeforeUnmount=createHook("bum"),onUnmounted=createHook("um"),onServerPrefetch=createHook("sp"),onRenderTriggered=createHook("rtg"),onRenderTracked=createHook("rtc");function onErrorCaptured(Q,e=currentInstance){injectHook("ec",Q,e)}const COMPONENTS="components";function resolveComponent(Q,e){return resolveAsset(COMPONENTS,Q,!0,e)||Q}const NULL_DYNAMIC_COMPONENT=Symbol.for("v-ndc");function resolveAsset(Q,e,t=!0,s=!1){const n=currentRenderingInstance||currentInstance;if(n){const i=n.type;{const g=getComponentName(i,!1);if(g&&(g===e||g===camelize(e)||g===capitalize(camelize(e))))return i}const U=resolve(n[Q]||i[Q],e)||resolve(n.appContext[Q],e);return!U&&s?i:U}}function resolve(Q,e){return Q&&(Q[e]||Q[camelize(e)]||Q[capitalize(camelize(e))])}function renderList(Q,e,t,s){let n;const i=t,U=isArray(Q);if(U||isString(Q)){const g=U&&isReactive(Q);let F=!1;g&&(F=!isShallow(Q),Q=shallowReadArray(Q)),n=new Array(Q.length);for(let B=0,r=Q.length;B<r;B++)n[B]=e(F?toReactive(Q[B]):Q[B],B,void 0,i)}else if(typeof Q=="number"){n=new Array(Q);for(let g=0;g<Q;g++)n[g]=e(g+1,g,void 0,i)}else if(isObject(Q))if(Q[Symbol.iterator])n=Array.from(Q,(g,F)=>e(g,F,void 0,i));else{const g=Object.keys(Q);n=new Array(g.length);for(let F=0,B=g.length;F<B;F++){const r=g[F];n[F]=e(Q[r],r,F,i)}}else n=[];return n}function renderSlot(Q,e,t={},s,n){if(currentRenderingInstance.ce||currentRenderingInstance.parent&&isAsyncWrapper(currentRenderingInstance.parent)&&currentRenderingInstance.parent.ce)return openBlock(),createBlock(Fragment,null,[createVNode("slot",t,s)],64);let i=Q[e];i&&i._c&&(i._d=!1),openBlock();const U=i&&ensureValidVNode(i(t)),g=t.key||U&&U.key,F=createBlock(Fragment,{key:(g&&!isSymbol(g)?g:`_${e}`)+(!U&&s?"_fb":"")},U||[],U&&Q._===1?64:-2);return F.scopeId&&(F.slotScopeIds=[F.scopeId+"-s"]),i&&i._c&&(i._d=!0),F}function ensureValidVNode(Q){return Q.some(e=>isVNode(e)?!(e.type===Comment||e.type===Fragment&&!ensureValidVNode(e.children)):!0)?Q:null}const getPublicInstance=Q=>Q?isStatefulComponent(Q)?getComponentPublicInstance(Q):getPublicInstance(Q.parent):null,publicPropertiesMap=extend(Object.create(null),{$:Q=>Q,$el:Q=>Q.vnode.el,$data:Q=>Q.data,$props:Q=>Q.props,$attrs:Q=>Q.attrs,$slots:Q=>Q.slots,$refs:Q=>Q.refs,$parent:Q=>getPublicInstance(Q.parent),$root:Q=>getPublicInstance(Q.root),$host:Q=>Q.ce,$emit:Q=>Q.emit,$options:Q=>resolveMergedOptions(Q),$forceUpdate:Q=>Q.f||(Q.f=()=>{queueJob(Q.update)}),$nextTick:Q=>Q.n||(Q.n=nextTick.bind(Q.proxy)),$watch:Q=>instanceWatch.bind(Q)}),hasSetupBinding=(Q,e)=>Q!==EMPTY_OBJ&&!Q.__isScriptSetup&&hasOwn(Q,e),PublicInstanceProxyHandlers={get({_:Q},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:n,props:i,accessCache:U,type:g,appContext:F}=Q;let B;if(e[0]!=="$"){const o=U[e];if(o!==void 0)switch(o){case 1:return s[e];case 2:return n[e];case 4:return t[e];case 3:return i[e]}else{if(hasSetupBinding(s,e))return U[e]=1,s[e];if(n!==EMPTY_OBJ&&hasOwn(n,e))return U[e]=2,n[e];if((B=Q.propsOptions[0])&&hasOwn(B,e))return U[e]=3,i[e];if(t!==EMPTY_OBJ&&hasOwn(t,e))return U[e]=4,t[e];shouldCacheAccess&&(U[e]=0)}}const r=publicPropertiesMap[e];let I,C;if(r)return e==="$attrs"&&track(Q.attrs,"get",""),r(Q);if((I=g.__cssModules)&&(I=I[e]))return I;if(t!==EMPTY_OBJ&&hasOwn(t,e))return U[e]=4,t[e];if(C=F.config.globalProperties,hasOwn(C,e))return C[e]},set({_:Q},e,t){const{data:s,setupState:n,ctx:i}=Q;return hasSetupBinding(n,e)?(n[e]=t,!0):s!==EMPTY_OBJ&&hasOwn(s,e)?(s[e]=t,!0):hasOwn(Q.props,e)||e[0]==="$"&&e.slice(1)in Q?!1:(i[e]=t,!0)},has({_:{data:Q,setupState:e,accessCache:t,ctx:s,appContext:n,propsOptions:i}},U){let g;return!!t[U]||Q!==EMPTY_OBJ&&hasOwn(Q,U)||hasSetupBinding(e,U)||(g=i[0])&&hasOwn(g,U)||hasOwn(s,U)||hasOwn(publicPropertiesMap,U)||hasOwn(n.config.globalProperties,U)},defineProperty(Q,e,t){return t.get!=null?Q._.accessCache[e]=0:hasOwn(t,"value")&&this.set(Q,e,t.value,null),Reflect.defineProperty(Q,e,t)}};function normalizePropsOrEmits(Q){return isArray(Q)?Q.reduce((e,t)=>(e[t]=null,e),{}):Q}let shouldCacheAccess=!0;function applyOptions(Q){const e=resolveMergedOptions(Q),t=Q.proxy,s=Q.ctx;shouldCacheAccess=!1,e.beforeCreate&&callHook$1(e.beforeCreate,Q,"bc");const{data:n,computed:i,methods:U,watch:g,provide:F,inject:B,created:r,beforeMount:I,mounted:C,beforeUpdate:o,updated:l,activated:A,deactivated:f,beforeDestroy:d,beforeUnmount:N,destroyed:y,unmounted:R,render:k,renderTracked:_,renderTriggered:q,errorCaptured:et,serverPrefetch:J,expose:Z,inheritAttrs:v,components:S,directives:H,filters:T}=e;if(B&&resolveInjections(B,s,null),U)for(const O in U){const Y=U[O];isFunction(Y)&&(s[O]=Y.bind(t))}if(n){const O=n.call(t,t);isObject(O)&&(Q.data=reactive(O))}if(shouldCacheAccess=!0,i)for(const O in i){const Y=i[O],st=isFunction(Y)?Y.bind(t,t):isFunction(Y.get)?Y.get.bind(t,t):NOOP,It=!isFunction(Y)&&isFunction(Y.set)?Y.set.bind(t):NOOP,rt=computed({get:st,set:It});Object.defineProperty(s,O,{enumerable:!0,configurable:!0,get:()=>rt.value,set:gt=>rt.value=gt})}if(g)for(const O in g)createWatcher(g[O],s,t,O);if(F){const O=isFunction(F)?F.call(t):F;Reflect.ownKeys(O).forEach(Y=>{provide(Y,O[Y])})}r&&callHook$1(r,Q,"c");function z(O,Y){isArray(Y)?Y.forEach(st=>O(st.bind(t))):Y&&O(Y.bind(t))}if(z(onBeforeMount,I),z(onMounted,C),z(onBeforeUpdate,o),z(onUpdated,l),z(onActivated,A),z(onDeactivated,f),z(onErrorCaptured,et),z(onRenderTracked,_),z(onRenderTriggered,q),z(onBeforeUnmount,N),z(onUnmounted,R),z(onServerPrefetch,J),isArray(Z))if(Z.length){const O=Q.exposed||(Q.exposed={});Z.forEach(Y=>{Object.defineProperty(O,Y,{get:()=>t[Y],set:st=>t[Y]=st})})}else Q.exposed||(Q.exposed={});k&&Q.render===NOOP&&(Q.render=k),v!=null&&(Q.inheritAttrs=v),S&&(Q.components=S),H&&(Q.directives=H),J&&markAsyncBoundary(Q)}function resolveInjections(Q,e,t=NOOP){isArray(Q)&&(Q=normalizeInject(Q));for(const s in Q){const n=Q[s];let i;isObject(n)?"default"in n?i=inject(n.from||s,n.default,!0):i=inject(n.from||s):i=inject(n),isRef(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:U=>i.value=U}):e[s]=i}}function callHook$1(Q,e,t){callWithAsyncErrorHandling(isArray(Q)?Q.map(s=>s.bind(e.proxy)):Q.bind(e.proxy),e,t)}function createWatcher(Q,e,t,s){let n=s.includes(".")?createPathGetter(t,s):()=>t[s];if(isString(Q)){const i=e[Q];isFunction(i)&&watch(n,i)}else if(isFunction(Q))watch(n,Q.bind(t));else if(isObject(Q))if(isArray(Q))Q.forEach(i=>createWatcher(i,e,t,s));else{const i=isFunction(Q.handler)?Q.handler.bind(t):e[Q.handler];isFunction(i)&&watch(n,i,Q)}}function resolveMergedOptions(Q){const e=Q.type,{mixins:t,extends:s}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:U}}=Q.appContext,g=i.get(e);let F;return g?F=g:!n.length&&!t&&!s?F=e:(F={},n.length&&n.forEach(B=>mergeOptions(F,B,U,!0)),mergeOptions(F,e,U)),isObject(e)&&i.set(e,F),F}function mergeOptions(Q,e,t,s=!1){const{mixins:n,extends:i}=e;i&&mergeOptions(Q,i,t,!0),n&&n.forEach(U=>mergeOptions(Q,U,t,!0));for(const U in e)if(!(s&&U==="expose")){const g=internalOptionMergeStrats[U]||t&&t[U];Q[U]=g?g(Q[U],e[U]):e[U]}return Q}const internalOptionMergeStrats={data:mergeDataFn,props:mergeEmitsOrPropsOptions,emits:mergeEmitsOrPropsOptions,methods:mergeObjectOptions,computed:mergeObjectOptions,beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,components:mergeObjectOptions,directives:mergeObjectOptions,watch:mergeWatchOptions,provide:mergeDataFn,inject:mergeInject};function mergeDataFn(Q,e){return e?Q?function(){return extend(isFunction(Q)?Q.call(this,this):Q,isFunction(e)?e.call(this,this):e)}:e:Q}function mergeInject(Q,e){return mergeObjectOptions(normalizeInject(Q),normalizeInject(e))}function normalizeInject(Q){if(isArray(Q)){const e={};for(let t=0;t<Q.length;t++)e[Q[t]]=Q[t];return e}return Q}function mergeAsArray(Q,e){return Q?[...new Set([].concat(Q,e))]:e}function mergeObjectOptions(Q,e){return Q?extend(Object.create(null),Q,e):e}function mergeEmitsOrPropsOptions(Q,e){return Q?isArray(Q)&&isArray(e)?[...new Set([...Q,...e])]:extend(Object.create(null),normalizePropsOrEmits(Q),normalizePropsOrEmits(e??{})):e}function mergeWatchOptions(Q,e){if(!Q)return e;if(!e)return Q;const t=extend(Object.create(null),Q);for(const s in e)t[s]=mergeAsArray(Q[s],e[s]);return t}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uid$1=0;function createAppAPI(Q,e){return function(s,n=null){isFunction(s)||(s=extend({},s)),n!=null&&!isObject(n)&&(n=null);const i=createAppContext(),U=new WeakSet,g=[];let F=!1;const B=i.app={_uid:uid$1++,_component:s,_props:n,_container:null,_context:i,_instance:null,version,get config(){return i.config},set config(r){},use(r,...I){return U.has(r)||(r&&isFunction(r.install)?(U.add(r),r.install(B,...I)):isFunction(r)&&(U.add(r),r(B,...I))),B},mixin(r){return i.mixins.includes(r)||i.mixins.push(r),B},component(r,I){return I?(i.components[r]=I,B):i.components[r]},directive(r,I){return I?(i.directives[r]=I,B):i.directives[r]},mount(r,I,C){if(!F){const o=B._ceVNode||createVNode(s,n);return o.appContext=i,C===!0?C="svg":C===!1&&(C=void 0),I&&e?e(o,r):Q(o,r,C),F=!0,B._container=r,r.__vue_app__=B,getComponentPublicInstance(o.component)}},onUnmount(r){g.push(r)},unmount(){F&&(callWithAsyncErrorHandling(g,B._instance,16),Q(null,B._container),delete B._container.__vue_app__)},provide(r,I){return i.provides[r]=I,B},runWithContext(r){const I=currentApp;currentApp=B;try{return r()}finally{currentApp=I}}};return B}}let currentApp=null;function provide(Q,e){if(currentInstance){let t=currentInstance.provides;const s=currentInstance.parent&&currentInstance.parent.provides;s===t&&(t=currentInstance.provides=Object.create(s)),t[Q]=e}}function inject(Q,e,t=!1){const s=currentInstance||currentRenderingInstance;if(s||currentApp){const n=currentApp?currentApp._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&Q in n)return n[Q];if(arguments.length>1)return t&&isFunction(e)?e.call(s&&s.proxy):e}}const internalObjectProto={},createInternalObject=()=>Object.create(internalObjectProto),isInternalObject=Q=>Object.getPrototypeOf(Q)===internalObjectProto;function initProps(Q,e,t,s=!1){const n={},i=createInternalObject();Q.propsDefaults=Object.create(null),setFullProps(Q,e,n,i);for(const U in Q.propsOptions[0])U in n||(n[U]=void 0);t?Q.props=s?n:shallowReactive(n):Q.type.props?Q.props=n:Q.props=i,Q.attrs=i}function updateProps(Q,e,t,s){const{props:n,attrs:i,vnode:{patchFlag:U}}=Q,g=toRaw(n),[F]=Q.propsOptions;let B=!1;if((s||U>0)&&!(U&16)){if(U&8){const r=Q.vnode.dynamicProps;for(let I=0;I<r.length;I++){let C=r[I];if(isEmitListener(Q.emitsOptions,C))continue;const o=e[C];if(F)if(hasOwn(i,C))o!==i[C]&&(i[C]=o,B=!0);else{const l=camelize(C);n[l]=resolvePropValue(F,g,l,o,Q,!1)}else o!==i[C]&&(i[C]=o,B=!0)}}}else{setFullProps(Q,e,n,i)&&(B=!0);let r;for(const I in g)(!e||!hasOwn(e,I)&&((r=hyphenate(I))===I||!hasOwn(e,r)))&&(F?t&&(t[I]!==void 0||t[r]!==void 0)&&(n[I]=resolvePropValue(F,g,I,void 0,Q,!0)):delete n[I]);if(i!==g)for(const I in i)(!e||!hasOwn(e,I))&&(delete i[I],B=!0)}B&&trigger(Q.attrs,"set","")}function setFullProps(Q,e,t,s){const[n,i]=Q.propsOptions;let U=!1,g;if(e)for(let F in e){if(isReservedProp(F))continue;const B=e[F];let r;n&&hasOwn(n,r=camelize(F))?!i||!i.includes(r)?t[r]=B:(g||(g={}))[r]=B:isEmitListener(Q.emitsOptions,F)||(!(F in s)||B!==s[F])&&(s[F]=B,U=!0)}if(i){const F=toRaw(t),B=g||EMPTY_OBJ;for(let r=0;r<i.length;r++){const I=i[r];t[I]=resolvePropValue(n,F,I,B[I],Q,!hasOwn(B,I))}}return U}function resolvePropValue(Q,e,t,s,n,i){const U=Q[t];if(U!=null){const g=hasOwn(U,"default");if(g&&s===void 0){const F=U.default;if(U.type!==Function&&!U.skipFactory&&isFunction(F)){const{propsDefaults:B}=n;if(t in B)s=B[t];else{const r=setCurrentInstance(n);s=B[t]=F.call(null,e),r()}}else s=F;n.ce&&n.ce._setProp(t,s)}U[0]&&(i&&!g?s=!1:U[1]&&(s===""||s===hyphenate(t))&&(s=!0))}return s}const mixinPropsCache=new WeakMap;function normalizePropsOptions(Q,e,t=!1){const s=t?mixinPropsCache:e.propsCache,n=s.get(Q);if(n)return n;const i=Q.props,U={},g=[];let F=!1;if(!isFunction(Q)){const r=I=>{F=!0;const[C,o]=normalizePropsOptions(I,e,!0);extend(U,C),o&&g.push(...o)};!t&&e.mixins.length&&e.mixins.forEach(r),Q.extends&&r(Q.extends),Q.mixins&&Q.mixins.forEach(r)}if(!i&&!F)return isObject(Q)&&s.set(Q,EMPTY_ARR),EMPTY_ARR;if(isArray(i))for(let r=0;r<i.length;r++){const I=camelize(i[r]);validatePropName(I)&&(U[I]=EMPTY_OBJ)}else if(i)for(const r in i){const I=camelize(r);if(validatePropName(I)){const C=i[r],o=U[I]=isArray(C)||isFunction(C)?{type:C}:extend({},C),l=o.type;let A=!1,f=!0;if(isArray(l))for(let d=0;d<l.length;++d){const N=l[d],y=isFunction(N)&&N.name;if(y==="Boolean"){A=!0;break}else y==="String"&&(f=!1)}else A=isFunction(l)&&l.name==="Boolean";o[0]=A,o[1]=f,(A||hasOwn(o,"default"))&&g.push(I)}}const B=[U,g];return isObject(Q)&&s.set(Q,B),B}function validatePropName(Q){return Q[0]!=="$"&&!isReservedProp(Q)}const isInternalKey=Q=>Q[0]==="_"||Q==="$stable",normalizeSlotValue=Q=>isArray(Q)?Q.map(normalizeVNode):[normalizeVNode(Q)],normalizeSlot=(Q,e,t)=>{if(e._n)return e;const s=withCtx((...n)=>normalizeSlotValue(e(...n)),t);return s._c=!1,s},normalizeObjectSlots=(Q,e,t)=>{const s=Q._ctx;for(const n in Q){if(isInternalKey(n))continue;const i=Q[n];if(isFunction(i))e[n]=normalizeSlot(n,i,s);else if(i!=null){const U=normalizeSlotValue(i);e[n]=()=>U}}},normalizeVNodeSlots=(Q,e)=>{const t=normalizeSlotValue(e);Q.slots.default=()=>t},assignSlots=(Q,e,t)=>{for(const s in e)(t||s!=="_")&&(Q[s]=e[s])},initSlots=(Q,e,t)=>{const s=Q.slots=createInternalObject();if(Q.vnode.shapeFlag&32){const n=e._;n?(assignSlots(s,e,t),t&&def(s,"_",n,!0)):normalizeObjectSlots(e,s)}else e&&normalizeVNodeSlots(Q,e)},updateSlots=(Q,e,t)=>{const{vnode:s,slots:n}=Q;let i=!0,U=EMPTY_OBJ;if(s.shapeFlag&32){const g=e._;g?t&&g===1?i=!1:assignSlots(n,e,t):(i=!e.$stable,normalizeObjectSlots(e,n)),U=e}else e&&(normalizeVNodeSlots(Q,e),U={default:1});if(i)for(const g in n)!isInternalKey(g)&&U[g]==null&&delete n[g]},queuePostRenderEffect=queueEffectWithSuspense;function createRenderer(Q){return baseCreateRenderer(Q)}function baseCreateRenderer(Q,e){const t=getGlobalThis();t.__VUE__=!0;const{insert:s,remove:n,patchProp:i,createElement:U,createText:g,createComment:F,setText:B,setElementText:r,parentNode:I,nextSibling:C,setScopeId:o=NOOP,insertStaticContent:l}=Q,A=(a,c,u,L=null,x=null,b=null,G=void 0,D=null,m=!!c.dynamicChildren)=>{if(a===c)return;a&&!isSameVNodeType(a,c)&&(L=ct(a),gt(a,x,b,!0),a=null),c.patchFlag===-2&&(m=!1,c.dynamicChildren=null);const{type:E,ref:W,shapeFlag:V}=c;switch(E){case Text:f(a,c,u,L);break;case Comment:d(a,c,u,L);break;case Static:a==null&&N(c,u,L,G);break;case Fragment:S(a,c,u,L,x,b,G,D,m);break;default:V&1?k(a,c,u,L,x,b,G,D,m):V&6?H(a,c,u,L,x,b,G,D,m):(V&64||V&128)&&E.process(a,c,u,L,x,b,G,D,m,at)}W!=null&&x&&setRef(W,a&&a.ref,b,c||a,!c)},f=(a,c,u,L)=>{if(a==null)s(c.el=g(c.children),u,L);else{const x=c.el=a.el;c.children!==a.children&&B(x,c.children)}},d=(a,c,u,L)=>{a==null?s(c.el=F(c.children||""),u,L):c.el=a.el},N=(a,c,u,L)=>{[a.el,a.anchor]=l(a.children,c,u,L,a.el,a.anchor)},y=({el:a,anchor:c},u,L)=>{let x;for(;a&&a!==c;)x=C(a),s(a,u,L),a=x;s(c,u,L)},R=({el:a,anchor:c})=>{let u;for(;a&&a!==c;)u=C(a),n(a),a=u;n(c)},k=(a,c,u,L,x,b,G,D,m)=>{c.type==="svg"?G="svg":c.type==="math"&&(G="mathml"),a==null?_(c,u,L,x,b,G,D,m):J(a,c,x,b,G,D,m)},_=(a,c,u,L,x,b,G,D)=>{let m,E;const{props:W,shapeFlag:V,transition:X,dirs:M}=a;if(m=a.el=U(a.type,b,W&&W.is,W),V&8?r(m,a.children):V&16&&et(a.children,m,null,L,x,resolveChildrenNamespace(a,b),G,D),M&&invokeDirectiveHook(a,null,L,"created"),q(m,a,a.scopeId,G,L),W){for(const $ in W)$!=="value"&&!isReservedProp($)&&i(m,$,null,W[$],b,L);"value"in W&&i(m,"value",null,W.value,b),(E=W.onVnodeBeforeMount)&&invokeVNodeHook(E,L,a)}M&&invokeDirectiveHook(a,null,L,"beforeMount");const P=needTransition(x,X);P&&X.beforeEnter(m),s(m,c,u),((E=W&&W.onVnodeMounted)||P||M)&&queuePostRenderEffect(()=>{E&&invokeVNodeHook(E,L,a),P&&X.enter(m),M&&invokeDirectiveHook(a,null,L,"mounted")},x)},q=(a,c,u,L,x)=>{if(u&&o(a,u),L)for(let b=0;b<L.length;b++)o(a,L[b]);if(x){let b=x.subTree;if(c===b||isSuspense(b.type)&&(b.ssContent===c||b.ssFallback===c)){const G=x.vnode;q(a,G,G.scopeId,G.slotScopeIds,x.parent)}}},et=(a,c,u,L,x,b,G,D,m=0)=>{for(let E=m;E<a.length;E++){const W=a[E]=D?cloneIfMounted(a[E]):normalizeVNode(a[E]);A(null,W,c,u,L,x,b,G,D)}},J=(a,c,u,L,x,b,G)=>{const D=c.el=a.el;let{patchFlag:m,dynamicChildren:E,dirs:W}=c;m|=a.patchFlag&16;const V=a.props||EMPTY_OBJ,X=c.props||EMPTY_OBJ;let M;if(u&&toggleRecurse(u,!1),(M=X.onVnodeBeforeUpdate)&&invokeVNodeHook(M,u,c,a),W&&invokeDirectiveHook(c,a,u,"beforeUpdate"),u&&toggleRecurse(u,!0),(V.innerHTML&&X.innerHTML==null||V.textContent&&X.textContent==null)&&r(D,""),E?Z(a.dynamicChildren,E,D,u,L,resolveChildrenNamespace(c,x),b):G||Y(a,c,D,null,u,L,resolveChildrenNamespace(c,x),b,!1),m>0){if(m&16)v(D,V,X,u,x);else if(m&2&&V.class!==X.class&&i(D,"class",null,X.class,x),m&4&&i(D,"style",V.style,X.style,x),m&8){const P=c.dynamicProps;for(let $=0;$<P.length;$++){const K=P[$],nt=V[K],Qt=X[K];(Qt!==nt||K==="value")&&i(D,K,nt,Qt,x,u)}}m&1&&a.children!==c.children&&r(D,c.children)}else!G&&E==null&&v(D,V,X,u,x);((M=X.onVnodeUpdated)||W)&&queuePostRenderEffect(()=>{M&&invokeVNodeHook(M,u,c,a),W&&invokeDirectiveHook(c,a,u,"updated")},L)},Z=(a,c,u,L,x,b,G)=>{for(let D=0;D<c.length;D++){const m=a[D],E=c[D],W=m.el&&(m.type===Fragment||!isSameVNodeType(m,E)||m.shapeFlag&70)?I(m.el):u;A(m,E,W,null,L,x,b,G,!0)}},v=(a,c,u,L,x)=>{if(c!==u){if(c!==EMPTY_OBJ)for(const b in c)!isReservedProp(b)&&!(b in u)&&i(a,b,c[b],null,x,L);for(const b in u){if(isReservedProp(b))continue;const G=u[b],D=c[b];G!==D&&b!=="value"&&i(a,b,D,G,x,L)}"value"in u&&i(a,"value",c.value,u.value,x)}},S=(a,c,u,L,x,b,G,D,m)=>{const E=c.el=a?a.el:g(""),W=c.anchor=a?a.anchor:g("");let{patchFlag:V,dynamicChildren:X,slotScopeIds:M}=c;M&&(D=D?D.concat(M):M),a==null?(s(E,u,L),s(W,u,L),et(c.children||[],u,W,x,b,G,D,m)):V>0&&V&64&&X&&a.dynamicChildren?(Z(a.dynamicChildren,X,u,x,b,G,D),(c.key!=null||x&&c===x.subTree)&&traverseStaticChildren(a,c,!0)):Y(a,c,u,W,x,b,G,D,m)},H=(a,c,u,L,x,b,G,D,m)=>{c.slotScopeIds=D,a==null?c.shapeFlag&512?x.ctx.activate(c,u,L,G,m):T(c,u,L,x,b,G,m):w(a,c,m)},T=(a,c,u,L,x,b,G)=>{const D=a.component=createComponentInstance(a,L,x);if(isKeepAlive(a)&&(D.ctx.renderer=at),setupComponent(D,!1,G),D.asyncDep){if(x&&x.registerDep(D,z,G),!a.el){const m=D.subTree=createVNode(Comment);d(null,m,c,u)}}else z(D,a,c,u,x,b,G)},w=(a,c,u)=>{const L=c.component=a.component;if(shouldUpdateComponent(a,c,u))if(L.asyncDep&&!L.asyncResolved){O(L,c,u);return}else L.next=c,L.update();else c.el=a.el,L.vnode=c},z=(a,c,u,L,x,b,G)=>{const D=()=>{if(a.isMounted){let{next:V,bu:X,u:M,parent:P,vnode:$}=a;{const it=locateNonHydratedAsyncRoot(a);if(it){V&&(V.el=$.el,O(a,V,G)),it.asyncDep.then(()=>{a.isUnmounted||D()});return}}let K=V,nt;toggleRecurse(a,!1),V?(V.el=$.el,O(a,V,G)):V=$,X&&invokeArrayFns(X),(nt=V.props&&V.props.onVnodeBeforeUpdate)&&invokeVNodeHook(nt,P,V,$),toggleRecurse(a,!0);const Qt=renderComponentRoot(a),Ft=a.subTree;a.subTree=Qt,A(Ft,Qt,I(Ft.el),ct(Ft),a,x,b),V.el=Qt.el,K===null&&updateHOCHostEl(a,Qt.el),M&&queuePostRenderEffect(M,x),(nt=V.props&&V.props.onVnodeUpdated)&&queuePostRenderEffect(()=>invokeVNodeHook(nt,P,V,$),x)}else{let V;const{el:X,props:M}=c,{bm:P,m:$,parent:K,root:nt,type:Qt}=a,Ft=isAsyncWrapper(c);if(toggleRecurse(a,!1),P&&invokeArrayFns(P),!Ft&&(V=M&&M.onVnodeBeforeMount)&&invokeVNodeHook(V,K,c),toggleRecurse(a,!0),X&&xt){const it=()=>{a.subTree=renderComponentRoot(a),xt(X,a.subTree,a,x,null)};Ft&&Qt.__asyncHydrate?Qt.__asyncHydrate(X,a,it):it()}else{nt.ce&&nt.ce._injectChildStyle(Qt);const it=a.subTree=renderComponentRoot(a);A(null,it,u,L,a,x,b),c.el=it.el}if($&&queuePostRenderEffect($,x),!Ft&&(V=M&&M.onVnodeMounted)){const it=c;queuePostRenderEffect(()=>invokeVNodeHook(V,K,it),x)}(c.shapeFlag&256||K&&isAsyncWrapper(K.vnode)&&K.vnode.shapeFlag&256)&&a.a&&queuePostRenderEffect(a.a,x),a.isMounted=!0,c=u=L=null}};a.scope.on();const m=a.effect=new ReactiveEffect(D);a.scope.off();const E=a.update=m.run.bind(m),W=a.job=m.runIfDirty.bind(m);W.i=a,W.id=a.uid,m.scheduler=()=>queueJob(W),toggleRecurse(a,!0),E()},O=(a,c,u)=>{c.component=a;const L=a.vnode.props;a.vnode=c,a.next=null,updateProps(a,c.props,L,u),updateSlots(a,c.children,u),pauseTracking(),flushPreFlushCbs(a),resetTracking()},Y=(a,c,u,L,x,b,G,D,m=!1)=>{const E=a&&a.children,W=a?a.shapeFlag:0,V=c.children,{patchFlag:X,shapeFlag:M}=c;if(X>0){if(X&128){It(E,V,u,L,x,b,G,D,m);return}else if(X&256){st(E,V,u,L,x,b,G,D,m);return}}M&8?(W&16&&Ct(E,x,b),V!==E&&r(u,V)):W&16?M&16?It(E,V,u,L,x,b,G,D,m):Ct(E,x,b,!0):(W&8&&r(u,""),M&16&&et(V,u,L,x,b,G,D,m))},st=(a,c,u,L,x,b,G,D,m)=>{a=a||EMPTY_ARR,c=c||EMPTY_ARR;const E=a.length,W=c.length,V=Math.min(E,W);let X;for(X=0;X<V;X++){const M=c[X]=m?cloneIfMounted(c[X]):normalizeVNode(c[X]);A(a[X],M,u,null,x,b,G,D,m)}E>W?Ct(a,x,b,!0,!1,V):et(c,u,L,x,b,G,D,m,V)},It=(a,c,u,L,x,b,G,D,m)=>{let E=0;const W=c.length;let V=a.length-1,X=W-1;for(;E<=V&&E<=X;){const M=a[E],P=c[E]=m?cloneIfMounted(c[E]):normalizeVNode(c[E]);if(isSameVNodeType(M,P))A(M,P,u,null,x,b,G,D,m);else break;E++}for(;E<=V&&E<=X;){const M=a[V],P=c[X]=m?cloneIfMounted(c[X]):normalizeVNode(c[X]);if(isSameVNodeType(M,P))A(M,P,u,null,x,b,G,D,m);else break;V--,X--}if(E>V){if(E<=X){const M=X+1,P=M<W?c[M].el:L;for(;E<=X;)A(null,c[E]=m?cloneIfMounted(c[E]):normalizeVNode(c[E]),u,P,x,b,G,D,m),E++}}else if(E>X)for(;E<=V;)gt(a[E],x,b,!0),E++;else{const M=E,P=E,$=new Map;for(E=P;E<=X;E++){const Ut=c[E]=m?cloneIfMounted(c[E]):normalizeVNode(c[E]);Ut.key!=null&&$.set(Ut.key,E)}let K,nt=0;const Qt=X-P+1;let Ft=!1,it=0;const ot=new Array(Qt);for(E=0;E<Qt;E++)ot[E]=0;for(E=M;E<=V;E++){const Ut=a[E];if(nt>=Qt){gt(Ut,x,b,!0);continue}let Bt;if(Ut.key!=null)Bt=$.get(Ut.key);else for(K=P;K<=X;K++)if(ot[K-P]===0&&isSameVNodeType(Ut,c[K])){Bt=K;break}Bt===void 0?gt(Ut,x,b,!0):(ot[Bt-P]=E+1,Bt>=it?it=Bt:Ft=!0,A(Ut,c[Bt],u,null,x,b,G,D,m),nt++)}const pt=Ft?getSequence(ot):EMPTY_ARR;for(K=pt.length-1,E=Qt-1;E>=0;E--){const Ut=P+E,Bt=c[Ut],bt=Ut+1<W?c[Ut+1].el:L;ot[E]===0?A(null,Bt,u,bt,x,b,G,D,m):Ft&&(K<0||E!==pt[K]?rt(Bt,u,bt,2):K--)}}},rt=(a,c,u,L,x=null)=>{const{el:b,type:G,transition:D,children:m,shapeFlag:E}=a;if(E&6){rt(a.component.subTree,c,u,L);return}if(E&128){a.suspense.move(c,u,L);return}if(E&64){G.move(a,c,u,at);return}if(G===Fragment){s(b,c,u);for(let V=0;V<m.length;V++)rt(m[V],c,u,L);s(a.anchor,c,u);return}if(G===Static){y(a,c,u);return}if(L!==2&&E&1&&D)if(L===0)D.beforeEnter(b),s(b,c,u),queuePostRenderEffect(()=>D.enter(b),x);else{const{leave:V,delayLeave:X,afterLeave:M}=D,P=()=>s(b,c,u),$=()=>{V(b,()=>{P(),M&&M()})};X?X(b,P,$):$()}else s(b,c,u)},gt=(a,c,u,L=!1,x=!1)=>{const{type:b,props:G,ref:D,children:m,dynamicChildren:E,shapeFlag:W,patchFlag:V,dirs:X,cacheIndex:M}=a;if(V===-2&&(x=!1),D!=null&&setRef(D,null,u,a,!0),M!=null&&(c.renderCache[M]=void 0),W&256){c.ctx.deactivate(a);return}const P=W&1&&X,$=!isAsyncWrapper(a);let K;if($&&(K=G&&G.onVnodeBeforeUnmount)&&invokeVNodeHook(K,c,a),W&6)Lt(a.component,u,L);else{if(W&128){a.suspense.unmount(u,L);return}P&&invokeDirectiveHook(a,null,c,"beforeUnmount"),W&64?a.type.remove(a,c,u,at,L):E&&!E.hasOnce&&(b!==Fragment||V>0&&V&64)?Ct(E,c,u,!1,!0):(b===Fragment&&V&384||!x&&W&16)&&Ct(m,c,u),L&&At(a)}($&&(K=G&&G.onVnodeUnmounted)||P)&&queuePostRenderEffect(()=>{K&&invokeVNodeHook(K,c,a),P&&invokeDirectiveHook(a,null,c,"unmounted")},u)},At=a=>{const{type:c,el:u,anchor:L,transition:x}=a;if(c===Fragment){ht(u,L);return}if(c===Static){R(a);return}const b=()=>{n(u),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(a.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:D}=x,m=()=>G(u,b);D?D(a.el,b,m):m()}else b()},ht=(a,c)=>{let u;for(;a!==c;)u=C(a),n(a),a=u;n(c)},Lt=(a,c,u)=>{const{bum:L,scope:x,job:b,subTree:G,um:D,m,a:E}=a;invalidateMount(m),invalidateMount(E),L&&invokeArrayFns(L),x.stop(),b&&(b.flags|=8,gt(G,a,c,u)),D&&queuePostRenderEffect(D,c),queuePostRenderEffect(()=>{a.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Ct=(a,c,u,L=!1,x=!1,b=0)=>{for(let G=b;G<a.length;G++)gt(a[G],c,u,L,x)},ct=a=>{if(a.shapeFlag&6)return ct(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const c=C(a.anchor||a.el),u=c&&c[TeleportEndKey];return u?C(u):c};let lt=!1;const ut=(a,c,u)=>{a==null?c._vnode&&gt(c._vnode,null,null,!0):A(c._vnode||null,a,c,null,null,null,u),c._vnode=a,lt||(lt=!0,flushPreFlushCbs(),flushPostFlushCbs(),lt=!1)},at={p:A,um:gt,m:rt,r:At,mt:T,mc:et,pc:Y,pbc:Z,n:ct,o:Q};let dt,xt;return{render:ut,hydrate:dt,createApp:createAppAPI(ut,dt)}}function resolveChildrenNamespace({type:Q,props:e},t){return t==="svg"&&Q==="foreignObject"||t==="mathml"&&Q==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function toggleRecurse({effect:Q,job:e},t){t?(Q.flags|=32,e.flags|=4):(Q.flags&=-33,e.flags&=-5)}function needTransition(Q,e){return(!Q||Q&&!Q.pendingBranch)&&e&&!e.persisted}function traverseStaticChildren(Q,e,t=!1){const s=Q.children,n=e.children;if(isArray(s)&&isArray(n))for(let i=0;i<s.length;i++){const U=s[i];let g=n[i];g.shapeFlag&1&&!g.dynamicChildren&&((g.patchFlag<=0||g.patchFlag===32)&&(g=n[i]=cloneIfMounted(n[i]),g.el=U.el),!t&&g.patchFlag!==-2&&traverseStaticChildren(U,g)),g.type===Text&&(g.el=U.el)}}function getSequence(Q){const e=Q.slice(),t=[0];let s,n,i,U,g;const F=Q.length;for(s=0;s<F;s++){const B=Q[s];if(B!==0){if(n=t[t.length-1],Q[n]<B){e[s]=n,t.push(s);continue}for(i=0,U=t.length-1;i<U;)g=i+U>>1,Q[t[g]]<B?i=g+1:U=g;B<Q[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,U=t[i-1];i-- >0;)t[i]=U,U=e[U];return t}function locateNonHydratedAsyncRoot(Q){const e=Q.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:locateNonHydratedAsyncRoot(e)}function invalidateMount(Q){if(Q)for(let e=0;e<Q.length;e++)Q[e].flags|=8}const ssrContextKey=Symbol.for("v-scx"),useSSRContext=()=>inject(ssrContextKey);function watchEffect(Q,e){return doWatch(Q,null,e)}function watch(Q,e,t){return doWatch(Q,e,t)}function doWatch(Q,e,t=EMPTY_OBJ){const{immediate:s,deep:n,flush:i,once:U}=t,g=extend({},t),F=e&&s||!e&&i!=="post";let B;if(isInSSRComponentSetup){if(i==="sync"){const o=useSSRContext();B=o.__watcherHandles||(o.__watcherHandles=[])}else if(!F){const o=()=>{};return o.stop=NOOP,o.resume=NOOP,o.pause=NOOP,o}}const r=currentInstance;g.call=(o,l,A)=>callWithAsyncErrorHandling(o,r,l,A);let I=!1;i==="post"?g.scheduler=o=>{queuePostRenderEffect(o,r&&r.suspense)}:i!=="sync"&&(I=!0,g.scheduler=(o,l)=>{l?o():queueJob(o)}),g.augmentJob=o=>{e&&(o.flags|=4),I&&(o.flags|=2,r&&(o.id=r.uid,o.i=r))};const C=watch$1(Q,e,g);return isInSSRComponentSetup&&(B?B.push(C):F&&C()),C}function instanceWatch(Q,e,t){const s=this.proxy,n=isString(Q)?Q.includes(".")?createPathGetter(s,Q):()=>s[Q]:Q.bind(s,s);let i;isFunction(e)?i=e:(i=e.handler,t=e);const U=setCurrentInstance(this),g=doWatch(n,i.bind(s),t);return U(),g}function createPathGetter(Q,e){const t=e.split(".");return()=>{let s=Q;for(let n=0;n<t.length&&s;n++)s=s[t[n]];return s}}const getModelModifiers=(Q,e)=>e==="modelValue"||e==="model-value"?Q.modelModifiers:Q[`${e}Modifiers`]||Q[`${camelize(e)}Modifiers`]||Q[`${hyphenate(e)}Modifiers`];function emit(Q,e,...t){if(Q.isUnmounted)return;const s=Q.vnode.props||EMPTY_OBJ;let n=t;const i=e.startsWith("update:"),U=i&&getModelModifiers(s,e.slice(7));U&&(U.trim&&(n=t.map(r=>isString(r)?r.trim():r)),U.number&&(n=t.map(looseToNumber)));let g,F=s[g=toHandlerKey(e)]||s[g=toHandlerKey(camelize(e))];!F&&i&&(F=s[g=toHandlerKey(hyphenate(e))]),F&&callWithAsyncErrorHandling(F,Q,6,n);const B=s[g+"Once"];if(B){if(!Q.emitted)Q.emitted={};else if(Q.emitted[g])return;Q.emitted[g]=!0,callWithAsyncErrorHandling(B,Q,6,n)}}function normalizeEmitsOptions(Q,e,t=!1){const s=e.emitsCache,n=s.get(Q);if(n!==void 0)return n;const i=Q.emits;let U={},g=!1;if(!isFunction(Q)){const F=B=>{const r=normalizeEmitsOptions(B,e,!0);r&&(g=!0,extend(U,r))};!t&&e.mixins.length&&e.mixins.forEach(F),Q.extends&&F(Q.extends),Q.mixins&&Q.mixins.forEach(F)}return!i&&!g?(isObject(Q)&&s.set(Q,null),null):(isArray(i)?i.forEach(F=>U[F]=null):extend(U,i),isObject(Q)&&s.set(Q,U),U)}function isEmitListener(Q,e){return!Q||!isOn(e)?!1:(e=e.slice(2).replace(/Once$/,""),hasOwn(Q,e[0].toLowerCase()+e.slice(1))||hasOwn(Q,hyphenate(e))||hasOwn(Q,e))}function markAttrsAccessed(){}function renderComponentRoot(Q){const{type:e,vnode:t,proxy:s,withProxy:n,propsOptions:[i],slots:U,attrs:g,emit:F,render:B,renderCache:r,props:I,data:C,setupState:o,ctx:l,inheritAttrs:A}=Q,f=setCurrentRenderingInstance(Q);let d,N;try{if(t.shapeFlag&4){const R=n||s,k=R;d=normalizeVNode(B.call(k,R,r,I,o,C,l)),N=g}else{const R=e;d=normalizeVNode(R.length>1?R(I,{attrs:g,slots:U,emit:F}):R(I,null)),N=e.props?g:getFunctionalFallthrough(g)}}catch(R){blockStack.length=0,handleError(R,Q,1),d=createVNode(Comment)}let y=d;if(N&&A!==!1){const R=Object.keys(N),{shapeFlag:k}=y;R.length&&k&7&&(i&&R.some(isModelListener)&&(N=filterModelListeners(N,i)),y=cloneVNode(y,N,!1,!0))}return t.dirs&&(y=cloneVNode(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&setTransitionHooks(y,t.transition),d=y,setCurrentRenderingInstance(f),d}const getFunctionalFallthrough=Q=>{let e;for(const t in Q)(t==="class"||t==="style"||isOn(t))&&((e||(e={}))[t]=Q[t]);return e},filterModelListeners=(Q,e)=>{const t={};for(const s in Q)(!isModelListener(s)||!(s.slice(9)in e))&&(t[s]=Q[s]);return t};function shouldUpdateComponent(Q,e,t){const{props:s,children:n,component:i}=Q,{props:U,children:g,patchFlag:F}=e,B=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&F>=0){if(F&1024)return!0;if(F&16)return s?hasPropsChanged(s,U,B):!!U;if(F&8){const r=e.dynamicProps;for(let I=0;I<r.length;I++){const C=r[I];if(U[C]!==s[C]&&!isEmitListener(B,C))return!0}}}else return(n||g)&&(!g||!g.$stable)?!0:s===U?!1:s?U?hasPropsChanged(s,U,B):!0:!!U;return!1}function hasPropsChanged(Q,e,t){const s=Object.keys(e);if(s.length!==Object.keys(Q).length)return!0;for(let n=0;n<s.length;n++){const i=s[n];if(e[i]!==Q[i]&&!isEmitListener(t,i))return!0}return!1}function updateHOCHostEl({vnode:Q,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===Q&&(s.el=Q.el),s===Q)(Q=e.vnode).el=t,e=e.parent;else break}}const isSuspense=Q=>Q.__isSuspense;function queueEffectWithSuspense(Q,e){e&&e.pendingBranch?isArray(Q)?e.effects.push(...Q):e.effects.push(Q):queuePostFlushCb(Q)}const Fragment=Symbol.for("v-fgt"),Text=Symbol.for("v-txt"),Comment=Symbol.for("v-cmt"),Static=Symbol.for("v-stc"),blockStack=[];let currentBlock=null;function openBlock(Q=!1){blockStack.push(currentBlock=Q?null:[])}function closeBlock(){blockStack.pop(),currentBlock=blockStack[blockStack.length-1]||null}let isBlockTreeEnabled=1;function setBlockTracking(Q){isBlockTreeEnabled+=Q,Q<0&&currentBlock&&(currentBlock.hasOnce=!0)}function setupBlock(Q){return Q.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null,closeBlock(),isBlockTreeEnabled>0&&currentBlock&&currentBlock.push(Q),Q}function createElementBlock(Q,e,t,s,n,i){return setupBlock(createBaseVNode(Q,e,t,s,n,i,!0))}function createBlock(Q,e,t,s,n){return setupBlock(createVNode(Q,e,t,s,n,!0))}function isVNode(Q){return Q?Q.__v_isVNode===!0:!1}function isSameVNodeType(Q,e){return Q.type===e.type&&Q.key===e.key}const normalizeKey=({key:Q})=>Q??null,normalizeRef=({ref:Q,ref_key:e,ref_for:t})=>(typeof Q=="number"&&(Q=""+Q),Q!=null?isString(Q)||isRef(Q)||isFunction(Q)?{i:currentRenderingInstance,r:Q,k:e,f:!!t}:Q:null);function createBaseVNode(Q,e=null,t=null,s=0,n=null,i=Q===Fragment?0:1,U=!1,g=!1){const F={__v_isVNode:!0,__v_skip:!0,type:Q,props:e,key:e&&normalizeKey(e),ref:e&&normalizeRef(e),scopeId:currentScopeId,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:currentRenderingInstance};return g?(normalizeChildren(F,t),i&128&&Q.normalize(F)):t&&(F.shapeFlag|=isString(t)?8:16),isBlockTreeEnabled>0&&!U&&currentBlock&&(F.patchFlag>0||i&6)&&F.patchFlag!==32&&currentBlock.push(F),F}const createVNode=_createVNode;function _createVNode(Q,e=null,t=null,s=0,n=null,i=!1){if((!Q||Q===NULL_DYNAMIC_COMPONENT)&&(Q=Comment),isVNode(Q)){const g=cloneVNode(Q,e,!0);return t&&normalizeChildren(g,t),isBlockTreeEnabled>0&&!i&&currentBlock&&(g.shapeFlag&6?currentBlock[currentBlock.indexOf(Q)]=g:currentBlock.push(g)),g.patchFlag=-2,g}if(isClassComponent(Q)&&(Q=Q.__vccOpts),e){e=guardReactiveProps(e);let{class:g,style:F}=e;g&&!isString(g)&&(e.class=normalizeClass(g)),isObject(F)&&(isProxy(F)&&!isArray(F)&&(F=extend({},F)),e.style=normalizeStyle(F))}const U=isString(Q)?1:isSuspense(Q)?128:isTeleport(Q)?64:isObject(Q)?4:isFunction(Q)?2:0;return createBaseVNode(Q,e,t,s,n,U,i,!0)}function guardReactiveProps(Q){return Q?isProxy(Q)||isInternalObject(Q)?extend({},Q):Q:null}function cloneVNode(Q,e,t=!1,s=!1){const{props:n,ref:i,patchFlag:U,children:g,transition:F}=Q,B=e?mergeProps(n||{},e):n,r={__v_isVNode:!0,__v_skip:!0,type:Q.type,props:B,key:B&&normalizeKey(B),ref:e&&e.ref?t&&i?isArray(i)?i.concat(normalizeRef(e)):[i,normalizeRef(e)]:normalizeRef(e):i,scopeId:Q.scopeId,slotScopeIds:Q.slotScopeIds,children:g,target:Q.target,targetStart:Q.targetStart,targetAnchor:Q.targetAnchor,staticCount:Q.staticCount,shapeFlag:Q.shapeFlag,patchFlag:e&&Q.type!==Fragment?U===-1?16:U|16:U,dynamicProps:Q.dynamicProps,dynamicChildren:Q.dynamicChildren,appContext:Q.appContext,dirs:Q.dirs,transition:F,component:Q.component,suspense:Q.suspense,ssContent:Q.ssContent&&cloneVNode(Q.ssContent),ssFallback:Q.ssFallback&&cloneVNode(Q.ssFallback),el:Q.el,anchor:Q.anchor,ctx:Q.ctx,ce:Q.ce};return F&&s&&setTransitionHooks(r,F.clone(r)),r}function createTextVNode(Q=" ",e=0){return createVNode(Text,null,Q,e)}function normalizeVNode(Q){return Q==null||typeof Q=="boolean"?createVNode(Comment):isArray(Q)?createVNode(Fragment,null,Q.slice()):isVNode(Q)?cloneIfMounted(Q):createVNode(Text,null,String(Q))}function cloneIfMounted(Q){return Q.el===null&&Q.patchFlag!==-1||Q.memo?Q:cloneVNode(Q)}function normalizeChildren(Q,e){let t=0;const{shapeFlag:s}=Q;if(e==null)e=null;else if(isArray(e))t=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),normalizeChildren(Q,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!isInternalObject(e)?e._ctx=currentRenderingInstance:n===3&&currentRenderingInstance&&(currentRenderingInstance.slots._===1?e._=1:(e._=2,Q.patchFlag|=1024))}else isFunction(e)?(e={default:e,_ctx:currentRenderingInstance},t=32):(e=String(e),s&64?(t=16,e=[createTextVNode(e)]):t=8);Q.children=e,Q.shapeFlag|=t}function mergeProps(...Q){const e={};for(let t=0;t<Q.length;t++){const s=Q[t];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=normalizeClass([e.class,s.class]));else if(n==="style")e.style=normalizeStyle([e.style,s.style]);else if(isOn(n)){const i=e[n],U=s[n];U&&i!==U&&!(isArray(i)&&i.includes(U))&&(e[n]=i?[].concat(i,U):U)}else n!==""&&(e[n]=s[n])}return e}function invokeVNodeHook(Q,e,t,s=null){callWithAsyncErrorHandling(Q,e,7,[t,s])}const emptyAppContext=createAppContext();let uid=0;function createComponentInstance(Q,e,t){const s=Q.type,n=(e?e.appContext:Q.appContext)||emptyAppContext,i={uid:uid++,vnode:Q,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new EffectScope(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:normalizePropsOptions(s,n),emitsOptions:normalizeEmitsOptions(s,n),emit:null,emitted:null,propsDefaults:EMPTY_OBJ,inheritAttrs:s.inheritAttrs,ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=emit.bind(null,i),Q.ce&&Q.ce(i),i}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance;let internalSetCurrentInstance,setInSSRSetupState;{const Q=getGlobalThis(),e=(t,s)=>{let n;return(n=Q[t])||(n=Q[t]=[]),n.push(s),i=>{n.length>1?n.forEach(U=>U(i)):n[0](i)}};internalSetCurrentInstance=e("__VUE_INSTANCE_SETTERS__",t=>currentInstance=t),setInSSRSetupState=e("__VUE_SSR_SETTERS__",t=>isInSSRComponentSetup=t)}const setCurrentInstance=Q=>{const e=currentInstance;return internalSetCurrentInstance(Q),Q.scope.on(),()=>{Q.scope.off(),internalSetCurrentInstance(e)}},unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off(),internalSetCurrentInstance(null)};function isStatefulComponent(Q){return Q.vnode.shapeFlag&4}let isInSSRComponentSetup=!1;function setupComponent(Q,e=!1,t=!1){e&&setInSSRSetupState(e);const{props:s,children:n}=Q.vnode,i=isStatefulComponent(Q);initProps(Q,s,i,e),initSlots(Q,n,t);const U=i?setupStatefulComponent(Q,e):void 0;return e&&setInSSRSetupState(!1),U}function setupStatefulComponent(Q,e){const t=Q.type;Q.accessCache=Object.create(null),Q.proxy=new Proxy(Q.ctx,PublicInstanceProxyHandlers);const{setup:s}=t;if(s){pauseTracking();const n=Q.setupContext=s.length>1?createSetupContext(Q):null,i=setCurrentInstance(Q),U=callWithErrorHandling(s,Q,0,[Q.props,n]),g=isPromise(U);if(resetTracking(),i(),(g||Q.sp)&&!isAsyncWrapper(Q)&&markAsyncBoundary(Q),g){if(U.then(unsetCurrentInstance,unsetCurrentInstance),e)return U.then(F=>{handleSetupResult(Q,F,e)}).catch(F=>{handleError(F,Q,0)});Q.asyncDep=U}else handleSetupResult(Q,U,e)}else finishComponentSetup(Q,e)}function handleSetupResult(Q,e,t){isFunction(e)?Q.type.__ssrInlineRender?Q.ssrRender=e:Q.render=e:isObject(e)&&(Q.setupState=proxyRefs(e)),finishComponentSetup(Q,t)}let compile;function finishComponentSetup(Q,e,t){const s=Q.type;if(!Q.render){if(!e&&compile&&!s.render){const n=s.template||resolveMergedOptions(Q).template;if(n){const{isCustomElement:i,compilerOptions:U}=Q.appContext.config,{delimiters:g,compilerOptions:F}=s,B=extend(extend({isCustomElement:i,delimiters:g},U),F);s.render=compile(n,B)}}Q.render=s.render||NOOP}{const n=setCurrentInstance(Q);pauseTracking();try{applyOptions(Q)}finally{resetTracking(),n()}}}const attrsProxyHandlers={get(Q,e){return track(Q,"get",""),Q[e]}};function createSetupContext(Q){const e=t=>{Q.exposed=t||{}};return{attrs:new Proxy(Q.attrs,attrsProxyHandlers),slots:Q.slots,emit:Q.emit,expose:e}}function getComponentPublicInstance(Q){return Q.exposed?Q.exposeProxy||(Q.exposeProxy=new Proxy(proxyRefs(markRaw(Q.exposed)),{get(e,t){if(t in e)return e[t];if(t in publicPropertiesMap)return publicPropertiesMap[t](Q)},has(e,t){return t in e||t in publicPropertiesMap}})):Q.proxy}const classifyRE=/(?:^|[-_])(\w)/g,classify=Q=>Q.replace(classifyRE,e=>e.toUpperCase()).replace(/[-_]/g,"");function getComponentName(Q,e=!0){return isFunction(Q)?Q.displayName||Q.name:Q.name||e&&Q.__name}function formatComponentName(Q,e,t=!1){let s=getComponentName(e);if(!s&&e.__file){const n=e.__file.match(/([^/\\]+)\.\w+$/);n&&(s=n[1])}if(!s&&Q&&Q.parent){const n=i=>{for(const U in i)if(i[U]===e)return U};s=n(Q.components||Q.parent.type.components)||n(Q.appContext.components)}return s?classify(s):t?"App":"Anonymous"}function isClassComponent(Q){return isFunction(Q)&&"__vccOpts"in Q}const computed=(Q,e)=>computed$1(Q,e,isInSSRComponentSetup);function h(Q,e,t){const s=arguments.length;return s===2?isObject(e)&&!isArray(e)?isVNode(e)?createVNode(Q,null,[e]):createVNode(Q,e):createVNode(Q,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&isVNode(t)&&(t=[t]),createVNode(Q,e,t))}const version="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let policy;const tt$1=typeof window<"u"&&window.trustedTypes;if(tt$1)try{policy=tt$1.createPolicy("vue",{createHTML:Q=>Q})}catch{}const unsafeToTrustedHTML=policy?Q=>policy.createHTML(Q):Q=>Q,svgNS="http://www.w3.org/2000/svg",mathmlNS="http://www.w3.org/1998/Math/MathML",doc=typeof document<"u"?document:null,templateContainer=doc&&doc.createElement("template"),nodeOps={insert:(Q,e,t)=>{e.insertBefore(Q,t||null)},remove:Q=>{const e=Q.parentNode;e&&e.removeChild(Q)},createElement:(Q,e,t,s)=>{const n=e==="svg"?doc.createElementNS(svgNS,Q):e==="mathml"?doc.createElementNS(mathmlNS,Q):t?doc.createElement(Q,{is:t}):doc.createElement(Q);return Q==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:Q=>doc.createTextNode(Q),createComment:Q=>doc.createComment(Q),setText:(Q,e)=>{Q.nodeValue=e},setElementText:(Q,e)=>{Q.textContent=e},parentNode:Q=>Q.parentNode,nextSibling:Q=>Q.nextSibling,querySelector:Q=>doc.querySelector(Q),setScopeId(Q,e){Q.setAttribute(e,"")},insertStaticContent(Q,e,t,s,n,i){const U=t?t.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===i||!(n=n.nextSibling)););else{templateContainer.innerHTML=unsafeToTrustedHTML(s==="svg"?`<svg>${Q}</svg>`:s==="mathml"?`<math>${Q}</math>`:Q);const g=templateContainer.content;if(s==="svg"||s==="mathml"){const F=g.firstChild;for(;F.firstChild;)g.appendChild(F.firstChild);g.removeChild(F)}e.insertBefore(g,t)}return[U?U.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},TRANSITION="transition",ANIMATION="animation",vtcKey=Symbol("_vtc"),DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TransitionPropsValidators=extend({},BaseTransitionPropsValidators,DOMTransitionPropsValidators),decorate$1=Q=>(Q.displayName="Transition",Q.props=TransitionPropsValidators,Q),Transition=decorate$1((Q,{slots:e})=>h(BaseTransition,resolveTransitionProps(Q),e)),callHook=(Q,e=[])=>{isArray(Q)?Q.forEach(t=>t(...e)):Q&&Q(...e)},hasExplicitCallback=Q=>Q?isArray(Q)?Q.some(e=>e.length>1):Q.length>1:!1;function resolveTransitionProps(Q){const e={};for(const S in Q)S in DOMTransitionPropsValidators||(e[S]=Q[S]);if(Q.css===!1)return e;const{name:t="v",type:s,duration:n,enterFromClass:i=`${t}-enter-from`,enterActiveClass:U=`${t}-enter-active`,enterToClass:g=`${t}-enter-to`,appearFromClass:F=i,appearActiveClass:B=U,appearToClass:r=g,leaveFromClass:I=`${t}-leave-from`,leaveActiveClass:C=`${t}-leave-active`,leaveToClass:o=`${t}-leave-to`}=Q,l=normalizeDuration(n),A=l&&l[0],f=l&&l[1],{onBeforeEnter:d,onEnter:N,onEnterCancelled:y,onLeave:R,onLeaveCancelled:k,onBeforeAppear:_=d,onAppear:q=N,onAppearCancelled:et=y}=e,J=(S,H,T)=>{removeTransitionClass(S,H?r:g),removeTransitionClass(S,H?B:U),T&&T()},Z=(S,H)=>{S._isLeaving=!1,removeTransitionClass(S,I),removeTransitionClass(S,o),removeTransitionClass(S,C),H&&H()},v=S=>(H,T)=>{const w=S?q:N,z=()=>J(H,S,T);callHook(w,[H,z]),nextFrame(()=>{removeTransitionClass(H,S?F:i),addTransitionClass(H,S?r:g),hasExplicitCallback(w)||whenTransitionEnds(H,s,A,z)})};return extend(e,{onBeforeEnter(S){callHook(d,[S]),addTransitionClass(S,i),addTransitionClass(S,U)},onBeforeAppear(S){callHook(_,[S]),addTransitionClass(S,F),addTransitionClass(S,B)},onEnter:v(!1),onAppear:v(!0),onLeave(S,H){S._isLeaving=!0;const T=()=>Z(S,H);addTransitionClass(S,I),addTransitionClass(S,C),forceReflow(),nextFrame(()=>{S._isLeaving&&(removeTransitionClass(S,I),addTransitionClass(S,o),hasExplicitCallback(R)||whenTransitionEnds(S,s,f,T))}),callHook(R,[S,T])},onEnterCancelled(S){J(S,!1),callHook(y,[S])},onAppearCancelled(S){J(S,!0),callHook(et,[S])},onLeaveCancelled(S){Z(S),callHook(k,[S])}})}function normalizeDuration(Q){if(Q==null)return null;if(isObject(Q))return[NumberOf(Q.enter),NumberOf(Q.leave)];{const e=NumberOf(Q);return[e,e]}}function NumberOf(Q){return toNumber(Q)}function addTransitionClass(Q,e){e.split(/\s+/).forEach(t=>t&&Q.classList.add(t)),(Q[vtcKey]||(Q[vtcKey]=new Set)).add(e)}function removeTransitionClass(Q,e){e.split(/\s+/).forEach(s=>s&&Q.classList.remove(s));const t=Q[vtcKey];t&&(t.delete(e),t.size||(Q[vtcKey]=void 0))}function nextFrame(Q){requestAnimationFrame(()=>{requestAnimationFrame(Q)})}let endId=0;function whenTransitionEnds(Q,e,t,s){const n=Q._endId=++endId,i=()=>{n===Q._endId&&s()};if(t!=null)return setTimeout(i,t);const{type:U,timeout:g,propCount:F}=getTransitionInfo(Q,e);if(!U)return s();const B=U+"end";let r=0;const I=()=>{Q.removeEventListener(B,C),i()},C=o=>{o.target===Q&&++r>=F&&I()};setTimeout(()=>{r<F&&I()},g+1),Q.addEventListener(B,C)}function getTransitionInfo(Q,e){const t=window.getComputedStyle(Q),s=l=>(t[l]||"").split(", "),n=s(`${TRANSITION}Delay`),i=s(`${TRANSITION}Duration`),U=getTimeout(n,i),g=s(`${ANIMATION}Delay`),F=s(`${ANIMATION}Duration`),B=getTimeout(g,F);let r=null,I=0,C=0;e===TRANSITION?U>0&&(r=TRANSITION,I=U,C=i.length):e===ANIMATION?B>0&&(r=ANIMATION,I=B,C=F.length):(I=Math.max(U,B),r=I>0?U>B?TRANSITION:ANIMATION:null,C=r?r===TRANSITION?i.length:F.length:0);const o=r===TRANSITION&&/\b(transform|all)(,|$)/.test(s(`${TRANSITION}Property`).toString());return{type:r,timeout:I,propCount:C,hasTransform:o}}function getTimeout(Q,e){for(;Q.length<e.length;)Q=Q.concat(Q);return Math.max(...e.map((t,s)=>toMs(t)+toMs(Q[s])))}function toMs(Q){return Q==="auto"?0:Number(Q.slice(0,-1).replace(",","."))*1e3}function forceReflow(){return document.body.offsetHeight}function patchClass(Q,e,t){const s=Q[vtcKey];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?Q.removeAttribute("class"):t?Q.setAttribute("class",e):Q.className=e}const vShowOriginalDisplay=Symbol("_vod"),vShowHidden=Symbol("_vsh"),vShow={beforeMount(Q,{value:e},{transition:t}){Q[vShowOriginalDisplay]=Q.style.display==="none"?"":Q.style.display,t&&e?t.beforeEnter(Q):setDisplay(Q,e)},mounted(Q,{value:e},{transition:t}){t&&e&&t.enter(Q)},updated(Q,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(Q),setDisplay(Q,!0),s.enter(Q)):s.leave(Q,()=>{setDisplay(Q,!1)}):setDisplay(Q,e))},beforeUnmount(Q,{value:e}){setDisplay(Q,e)}};function setDisplay(Q,e){Q.style.display=e?Q[vShowOriginalDisplay]:"none",Q[vShowHidden]=!e}const CSS_VAR_TEXT=Symbol(""),displayRE=/(^|;)\s*display\s*:/;function patchStyle(Q,e,t){const s=Q.style,n=isString(t);let i=!1;if(t&&!n){if(e)if(isString(e))for(const U of e.split(";")){const g=U.slice(0,U.indexOf(":")).trim();t[g]==null&&setStyle(s,g,"")}else for(const U in e)t[U]==null&&setStyle(s,U,"");for(const U in t)U==="display"&&(i=!0),setStyle(s,U,t[U])}else if(n){if(e!==t){const U=s[CSS_VAR_TEXT];U&&(t+=";"+U),s.cssText=t,i=displayRE.test(t)}}else e&&Q.removeAttribute("style");vShowOriginalDisplay in Q&&(Q[vShowOriginalDisplay]=i?s.display:"",Q[vShowHidden]&&(s.display="none"))}const importantRE=/\s*!important$/;function setStyle(Q,e,t){if(isArray(t))t.forEach(s=>setStyle(Q,e,s));else if(t==null&&(t=""),e.startsWith("--"))Q.setProperty(e,t);else{const s=autoPrefix(Q,e);importantRE.test(t)?Q.setProperty(hyphenate(s),t.replace(importantRE,""),"important"):Q[s]=t}}const prefixes=["Webkit","Moz","ms"],prefixCache={};function autoPrefix(Q,e){const t=prefixCache[e];if(t)return t;let s=camelize(e);if(s!=="filter"&&s in Q)return prefixCache[e]=s;s=capitalize(s);for(let n=0;n<prefixes.length;n++){const i=prefixes[n]+s;if(i in Q)return prefixCache[e]=i}return e}const xlinkNS="http://www.w3.org/1999/xlink";function patchAttr(Q,e,t,s,n,i=isSpecialBooleanAttr(e)){s&&e.startsWith("xlink:")?t==null?Q.removeAttributeNS(xlinkNS,e.slice(6,e.length)):Q.setAttributeNS(xlinkNS,e,t):t==null||i&&!includeBooleanAttr(t)?Q.removeAttribute(e):Q.setAttribute(e,i?"":isSymbol(t)?String(t):t)}function patchDOMProp(Q,e,t,s,n){if(e==="innerHTML"||e==="textContent"){t!=null&&(Q[e]=e==="innerHTML"?unsafeToTrustedHTML(t):t);return}const i=Q.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const g=i==="OPTION"?Q.getAttribute("value")||"":Q.value,F=t==null?Q.type==="checkbox"?"on":"":String(t);(g!==F||!("_value"in Q))&&(Q.value=F),t==null&&Q.removeAttribute(e),Q._value=t;return}let U=!1;if(t===""||t==null){const g=typeof Q[e];g==="boolean"?t=includeBooleanAttr(t):t==null&&g==="string"?(t="",U=!0):g==="number"&&(t=0,U=!0)}try{Q[e]=t}catch{}U&&Q.removeAttribute(n||e)}function addEventListener(Q,e,t,s){Q.addEventListener(e,t,s)}function removeEventListener(Q,e,t,s){Q.removeEventListener(e,t,s)}const veiKey=Symbol("_vei");function patchEvent(Q,e,t,s,n=null){const i=Q[veiKey]||(Q[veiKey]={}),U=i[e];if(s&&U)U.value=s;else{const[g,F]=parseName(e);if(s){const B=i[e]=createInvoker(s,n);addEventListener(Q,g,B,F)}else U&&(removeEventListener(Q,g,U,F),i[e]=void 0)}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(Q){let e;if(optionsModifierRE.test(Q)){e={};let s;for(;s=Q.match(optionsModifierRE);)Q=Q.slice(0,Q.length-s[0].length),e[s[0].toLowerCase()]=!0}return[Q[2]===":"?Q.slice(3):hyphenate(Q.slice(2)),e]}let cachedNow=0;const p=Promise.resolve(),getNow=()=>cachedNow||(p.then(()=>cachedNow=0),cachedNow=Date.now());function createInvoker(Q,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;callWithAsyncErrorHandling(patchStopImmediatePropagation(s,t.value),e,5,[s])};return t.value=Q,t.attached=getNow(),t}function patchStopImmediatePropagation(Q,e){if(isArray(e)){const t=Q.stopImmediatePropagation;return Q.stopImmediatePropagation=()=>{t.call(Q),Q._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const isNativeOn=Q=>Q.charCodeAt(0)===111&&Q.charCodeAt(1)===110&&Q.charCodeAt(2)>96&&Q.charCodeAt(2)<123,patchProp=(Q,e,t,s,n,i)=>{const U=n==="svg";e==="class"?patchClass(Q,s,U):e==="style"?patchStyle(Q,t,s):isOn(e)?isModelListener(e)||patchEvent(Q,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):shouldSetAsProp(Q,e,s,U))?(patchDOMProp(Q,e,s),!Q.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&patchAttr(Q,e,s,U,i,e!=="value")):Q._isVueCE&&(/[A-Z]/.test(e)||!isString(s))?patchDOMProp(Q,camelize(e),s,i,e):(e==="true-value"?Q._trueValue=s:e==="false-value"&&(Q._falseValue=s),patchAttr(Q,e,s,U))};function shouldSetAsProp(Q,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in Q&&isNativeOn(e)&&isFunction(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&Q.tagName==="INPUT"||e==="type"&&Q.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=Q.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return isNativeOn(e)&&isString(t)?!1:e in Q}const rendererOptions=extend({patchProp},nodeOps);let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions))}const createApp=(...Q)=>{const e=ensureRenderer().createApp(...Q),{mount:t}=e;return e.mount=s=>{const n=normalizeContainer(s);if(!n)return;const i=e._component;!isFunction(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const U=t(n,!1,resolveRootNamespace(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),U},e};function resolveRootNamespace(Q){if(Q instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&Q instanceof MathMLElement)return"mathml"}function normalizeContainer(Q){return isString(Q)?document.querySelector(Q):Q}function useStack(Q){function e(s,n){Q.addToStack(s),n&&(n=toRaw(n),s._jflow.setRenderNodeBySource(n,s))}function t(s){Q.removeFromStack(s)}provide("addToStack",e),provide("removeFromStack",t)}function useLinkStack(Q){function e(s,n,i){Q.addToLinkStack(s),n&&i&&Q.addLinkNodeBySource(n,i,s)}function t(s,n,i){Q.removeFromLinkStack(s),n&&i&&Q.removeLinkNodeBySource(n,i,s)}provide("addToLinkStack",e),provide("removeFromLinkStack",t)}function lowerFirstLetter(Q){return Q.charAt(0).toLowerCase()+Q.slice(1)}function bindEvent(Q,e){const t=[];return Object.keys(e).map(s=>{if(/^on[A-Z]/.test(s)){let n=e[s];if(Array.isArray(n)){n=n.filter(U=>typeof U=="function");const i=/^on(.*)/.exec(s);if(i[1]){const U=lowerFirstLetter(i[1]);n.forEach(g=>{Q.addEventListener(U,g),t.push(()=>{Q.removeEventListener(U,g)})})}}else if(n&&typeof n=="function"){const i=/^on(.*)/.exec(s);if(i[1]){const U=lowerFirstLetter(i[1]);Q.addEventListener(U,n),t.push(()=>{Q.removeEventListener(U,n)})}}}}),()=>{t.forEach(s=>s()),t.length=0}}function getDefaultExportFromCjs(Q){return Q&&Q.__esModule&&Object.prototype.hasOwnProperty.call(Q,"default")?Q.default:Q}var jflow_bundle={exports:{}};(function(module,exports){(function(Q,e){module.exports=e()})(self,function(){return(()=>{var __webpack_modules__={633:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BaseLink": () => (/* reexport */ base_link),
  "BezierLink": () => (/* reexport */ bezier_link),
  "Capsule": () => (/* reexport */ capsule),
  "CapsuleGroup": () => (/* reexport */ CapsuleGroup),
  "CapsuleVertical": () => (/* reexport */ capsule_vertical),
  "CapsuleVerticalGroup": () => (/* reexport */ CapsuleVerticalGroup),
  "Diamond": () => (/* reexport */ diamond),
  "DiamondGroup": () => (/* reexport */ DiamondGroup),
  "DiamondVerticalGroup": () => (/* reexport */ DiamondVerticalGroup),
  "Group": () => (/* reexport */ Group),
  "GroupFactory": () => (/* reexport */ groupFactory),
  "Icon": () => (/* reexport */ instance_image),
  "Instance": () => (/* reexport */ instance_instance),
  "JFLOW_MODE": () => (/* reexport */ JFLOW_MODE),
  "JFlowEvent": () => (/* reexport */ events),
  "LinearLayout": () => (/* reexport */ linear_layout),
  "Link": () => (/* reexport */ instance_link),
  "Node": () => (/* reexport */ node),
  "Point": () => (/* reexport */ point),
  "PointGroup": () => (/* reexport */ PointGroup),
  "PolyLink": () => (/* reexport */ poly_link),
  "Rectangle": () => (/* reexport */ rectangle),
  "Rhombus": () => (/* reexport */ rhombus),
  "RhombusGroup": () => (/* reexport */ RhombusGroup),
  "ScrollGroup": () => (/* reexport */ scroll_group),
  "ShadowDom": () => (/* reexport */ shadowDom),
  "Text": () => (/* reexport */ elements_text),
  "TextElement": () => (/* reexport */ TextElement),
  "TextGroup": () => (/* reexport */ text_group),
  "commonEventAdapter": () => (/* reexport */ commonAdapter),
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/core/utils/canvas.js
/**
 * @typedef {Object} CanvasMeta
 * @property {Element} canvas - canvas 元素
 * @property {number} width - 画布宽度
 * @property {number} height - 画布高度
 * @property {number} raw_width - 画布元素宽度
 * @property {number} raw_height - 画布元素高度
 * @property {number} left - 画布距离左端距离
 * @property {number} top - 画布距离顶端距离
 * @property {Context2d} ctx - Context2d
 * @property {number} scale - 当前的像素设备比
 */
/**
 * 创建一个 canvas 元素
 * @param  {Element} wrapper - dom元素
 * @return {CanvasMeta}
 */
function createCanvas(wrapper) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var _wrapper$getBoundingC = wrapper.getBoundingClientRect(),
    width = _wrapper$getBoundingC.width,
    height = _wrapper$getBoundingC.height,
    left = _wrapper$getBoundingC.left,
    top = _wrapper$getBoundingC.top;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.style.userSelect = 'none';
  var scale = window.devicePixelRatio;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  if (wrapper) {
    wrapper.style.position = 'relative';
    wrapper.style.overflow = 'hidden';
    wrapper.append(canvas);
  }
  return {
    canvas: canvas,
    width: width,
    height: height,
    raw_width: canvas.width,
    raw_height: canvas.height,
    left: left,
    top: top,
    ctx: ctx,
    scale: scale
  };
}
function canvas_resizeCanvas(canvas, wrapper) {
  var _wrapper$getBoundingC2 = wrapper.getBoundingClientRect(),
    width = _wrapper$getBoundingC2.width,
    height = _wrapper$getBoundingC2.height,
    left = _wrapper$getBoundingC2.left,
    top = _wrapper$getBoundingC2.top;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  var scale = window.devicePixelRatio;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  return {
    width: width,
    height: height,
    raw_width: canvas.width,
    raw_height: canvas.height
  };
}
var caheCanvas = document.createElement('canvas');
caheCanvas.width = 1;
caheCanvas.height = 1;
var caheCanvasctx = caheCanvas.getContext('2d');
var scale = window.devicePixelRatio;
caheCanvasctx.scale(scale, scale);

/**
 * 在离线canvas上绘制元素
 * @param  {render} render - 绘图函数
 */
function requestCacheCanvas(render) {
  caheCanvasctx.clearRect(0, 0, 5, 5);
  caheCanvasctx.save();
  render(caheCanvasctx);
  caheCanvasctx.restore();
  caheCanvasctx.clearRect(0, 0, 5, 5);
}
function listenOnDevicePixelRatio(callback, destroyHandler) {
  var target = matchMedia("(resolution: ".concat(window.devicePixelRatio, "dppx)"));
  function onChange() {
    console.log("devicePixelRatio changed: " + window.devicePixelRatio);
    callback(window.devicePixelRatio);
    listenOnDevicePixelRatio(callback, destroyHandler);
  }
  destroyHandler(function () {
    console.log('remove devicePixelRatio event handler');
    target.removeEventListener("change", onChange, {
      once: true
    });
  });
  target.addEventListener("change", onChange, {
    once: true
  });
}
;// CONCATENATED MODULE: ./node_modules/bezier-js/src/utils.js


// math-inlining.
const { abs, cos, sin, acos, atan2, sqrt, pow } = Math;

// cube root function yielding real roots
function crt(v) {
  return v < 0 ? -pow(-v, 1 / 3) : pow(v, 1 / 3);
}

// trig constants
const pi = Math.PI,
  tau = 2 * pi,
  quart = pi / 2,
  // float precision significant decimal
  epsilon = 0.000001,
  // extremas used in bbox calculation and similar algorithms
  nMax = Number.MAX_SAFE_INTEGER || 9007199254740991,
  nMin = Number.MIN_SAFE_INTEGER || -9007199254740991,
  // a zero coordinate, which is surprisingly useful
  ZERO = { x: 0, y: 0, z: 0 };

// Bezier utility functions
const utils = {
  // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
  Tvalues: [
    -0.0640568928626056260850430826247450385909,
    0.0640568928626056260850430826247450385909,
    -0.1911188674736163091586398207570696318404,
    0.1911188674736163091586398207570696318404,
    -0.3150426796961633743867932913198102407864,
    0.3150426796961633743867932913198102407864,
    -0.4337935076260451384870842319133497124524,
    0.4337935076260451384870842319133497124524,
    -0.5454214713888395356583756172183723700107,
    0.5454214713888395356583756172183723700107,
    -0.6480936519369755692524957869107476266696,
    0.6480936519369755692524957869107476266696,
    -0.7401241915785543642438281030999784255232,
    0.7401241915785543642438281030999784255232,
    -0.8200019859739029219539498726697452080761,
    0.8200019859739029219539498726697452080761,
    -0.8864155270044010342131543419821967550873,
    0.8864155270044010342131543419821967550873,
    -0.9382745520027327585236490017087214496548,
    0.9382745520027327585236490017087214496548,
    -0.9747285559713094981983919930081690617411,
    0.9747285559713094981983919930081690617411,
    -0.9951872199970213601799974097007368118745,
    0.9951872199970213601799974097007368118745,
  ],

  // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
  Cvalues: [
    0.1279381953467521569740561652246953718517,
    0.1279381953467521569740561652246953718517,
    0.1258374563468282961213753825111836887264,
    0.1258374563468282961213753825111836887264,
    0.121670472927803391204463153476262425607,
    0.121670472927803391204463153476262425607,
    0.1155056680537256013533444839067835598622,
    0.1155056680537256013533444839067835598622,
    0.1074442701159656347825773424466062227946,
    0.1074442701159656347825773424466062227946,
    0.0976186521041138882698806644642471544279,
    0.0976186521041138882698806644642471544279,
    0.086190161531953275917185202983742667185,
    0.086190161531953275917185202983742667185,
    0.0733464814110803057340336152531165181193,
    0.0733464814110803057340336152531165181193,
    0.0592985849154367807463677585001085845412,
    0.0592985849154367807463677585001085845412,
    0.0442774388174198061686027482113382288593,
    0.0442774388174198061686027482113382288593,
    0.0285313886289336631813078159518782864491,
    0.0285313886289336631813078159518782864491,
    0.0123412297999871995468056670700372915759,
    0.0123412297999871995468056670700372915759,
  ],

  arcfn: function (t, derivativeFn) {
    const d = derivativeFn(t);
    let l = d.x * d.x + d.y * d.y;
    if (typeof d.z !== "undefined") {
      l += d.z * d.z;
    }
    return sqrt(l);
  },

  compute: function (t, points, _3d) {
    // shortcuts
    if (t === 0) {
      points[0].t = 0;
      return points[0];
    }

    const order = points.length - 1;

    if (t === 1) {
      points[order].t = 1;
      return points[order];
    }

    const mt = 1 - t;
    let p = points;

    // constant?
    if (order === 0) {
      points[0].t = t;
      return points[0];
    }

    // linear?
    if (order === 1) {
      const ret = {
        x: mt * p[0].x + t * p[1].x,
        y: mt * p[0].y + t * p[1].y,
        t: t,
      };
      if (_3d) {
        ret.z = mt * p[0].z + t * p[1].z;
      }
      return ret;
    }

    // quadratic/cubic curve?
    if (order < 4) {
      let mt2 = mt * mt,
        t2 = t * t,
        a,
        b,
        c,
        d = 0;
      if (order === 2) {
        p = [p[0], p[1], p[2], ZERO];
        a = mt2;
        b = mt * t * 2;
        c = t2;
      } else if (order === 3) {
        a = mt2 * mt;
        b = mt2 * t * 3;
        c = mt * t2 * 3;
        d = t * t2;
      }
      const ret = {
        x: a * p[0].x + b * p[1].x + c * p[2].x + d * p[3].x,
        y: a * p[0].y + b * p[1].y + c * p[2].y + d * p[3].y,
        t: t,
      };
      if (_3d) {
        ret.z = a * p[0].z + b * p[1].z + c * p[2].z + d * p[3].z;
      }
      return ret;
    }

    // higher order curves: use de Casteljau's computation
    const dCpts = JSON.parse(JSON.stringify(points));
    while (dCpts.length > 1) {
      for (let i = 0; i < dCpts.length - 1; i++) {
        dCpts[i] = {
          x: dCpts[i].x + (dCpts[i + 1].x - dCpts[i].x) * t,
          y: dCpts[i].y + (dCpts[i + 1].y - dCpts[i].y) * t,
        };
        if (typeof dCpts[i].z !== "undefined") {
          dCpts[i] = dCpts[i].z + (dCpts[i + 1].z - dCpts[i].z) * t;
        }
      }
      dCpts.splice(dCpts.length - 1, 1);
    }
    dCpts[0].t = t;
    return dCpts[0];
  },

  computeWithRatios: function (t, points, ratios, _3d) {
    const mt = 1 - t,
      r = ratios,
      p = points;

    let f1 = r[0],
      f2 = r[1],
      f3 = r[2],
      f4 = r[3],
      d;

    // spec for linear
    f1 *= mt;
    f2 *= t;

    if (p.length === 2) {
      d = f1 + f2;
      return {
        x: (f1 * p[0].x + f2 * p[1].x) / d,
        y: (f1 * p[0].y + f2 * p[1].y) / d,
        z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z) / d,
        t: t,
      };
    }

    // upgrade to quadratic
    f1 *= mt;
    f2 *= 2 * mt;
    f3 *= t * t;

    if (p.length === 3) {
      d = f1 + f2 + f3;
      return {
        x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x) / d,
        y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y) / d,
        z: !_3d ? false : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z) / d,
        t: t,
      };
    }

    // upgrade to cubic
    f1 *= mt;
    f2 *= 1.5 * mt;
    f3 *= 3 * mt;
    f4 *= t * t * t;

    if (p.length === 4) {
      d = f1 + f2 + f3 + f4;
      return {
        x: (f1 * p[0].x + f2 * p[1].x + f3 * p[2].x + f4 * p[3].x) / d,
        y: (f1 * p[0].y + f2 * p[1].y + f3 * p[2].y + f4 * p[3].y) / d,
        z: !_3d
          ? false
          : (f1 * p[0].z + f2 * p[1].z + f3 * p[2].z + f4 * p[3].z) / d,
        t: t,
      };
    }
  },

  derive: function (points, _3d) {
    const dpoints = [];
    for (let p = points, d = p.length, c = d - 1; d > 1; d--, c--) {
      const list = [];
      for (let j = 0, dpt; j < c; j++) {
        dpt = {
          x: c * (p[j + 1].x - p[j].x),
          y: c * (p[j + 1].y - p[j].y),
        };
        if (_3d) {
          dpt.z = c * (p[j + 1].z - p[j].z);
        }
        list.push(dpt);
      }
      dpoints.push(list);
      p = list;
    }
    return dpoints;
  },

  between: function (v, m, M) {
    return (
      (m <= v && v <= M) ||
      utils.approximately(v, m) ||
      utils.approximately(v, M)
    );
  },

  approximately: function (a, b, precision) {
    return abs(a - b) <= (precision || epsilon);
  },

  length: function (derivativeFn) {
    const z = 0.5,
      len = utils.Tvalues.length;

    let sum = 0;

    for (let i = 0, t; i < len; i++) {
      t = z * utils.Tvalues[i] + z;
      sum += utils.Cvalues[i] * utils.arcfn(t, derivativeFn);
    }
    return z * sum;
  },

  map: function (v, ds, de, ts, te) {
    const d1 = de - ds,
      d2 = te - ts,
      v2 = v - ds,
      r = v2 / d1;
    return ts + d2 * r;
  },

  lerp: function (r, v1, v2) {
    const ret = {
      x: v1.x + r * (v2.x - v1.x),
      y: v1.y + r * (v2.y - v1.y),
    };
    if (v1.z !== undefined && v2.z !== undefined) {
      ret.z = v1.z + r * (v2.z - v1.z);
    }
    return ret;
  },

  pointToString: function (p) {
    let s = p.x + "/" + p.y;
    if (typeof p.z !== "undefined") {
      s += "/" + p.z;
    }
    return s;
  },

  pointsToString: function (points) {
    return "[" + points.map(utils.pointToString).join(", ") + "]";
  },

  copy: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  angle: function (o, v1, v2) {
    const dx1 = v1.x - o.x,
      dy1 = v1.y - o.y,
      dx2 = v2.x - o.x,
      dy2 = v2.y - o.y,
      cross = dx1 * dy2 - dy1 * dx2,
      dot = dx1 * dx2 + dy1 * dy2;
    return atan2(cross, dot);
  },

  // round as string, to avoid rounding errors
  round: function (v, d) {
    const s = "" + v;
    const pos = s.indexOf(".");
    return parseFloat(s.substring(0, pos + 1 + d));
  },

  dist: function (p1, p2) {
    const dx = p1.x - p2.x,
      dy = p1.y - p2.y;
    return sqrt(dx * dx + dy * dy);
  },

  closest: function (LUT, point) {
    let mdist = pow(2, 63),
      mpos,
      d;
    LUT.forEach(function (p, idx) {
      d = utils.dist(point, p);
      if (d < mdist) {
        mdist = d;
        mpos = idx;
      }
    });
    return { mdist: mdist, mpos: mpos };
  },

  abcratio: function (t, n) {
    // see ratio(t) note on http://pomax.github.io/bezierinfo/#abc
    if (n !== 2 && n !== 3) {
      return false;
    }
    if (typeof t === "undefined") {
      t = 0.5;
    } else if (t === 0 || t === 1) {
      return t;
    }
    const bottom = pow(t, n) + pow(1 - t, n),
      top = bottom - 1;
    return abs(top / bottom);
  },

  projectionratio: function (t, n) {
    // see u(t) note on http://pomax.github.io/bezierinfo/#abc
    if (n !== 2 && n !== 3) {
      return false;
    }
    if (typeof t === "undefined") {
      t = 0.5;
    } else if (t === 0 || t === 1) {
      return t;
    }
    const top = pow(1 - t, n),
      bottom = pow(t, n) + top;
    return top / bottom;
  },

  lli8: function (x1, y1, x2, y2, x3, y3, x4, y4) {
    const nx =
        (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
      ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
      d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d == 0) {
      return false;
    }
    return { x: nx / d, y: ny / d };
  },

  lli4: function (p1, p2, p3, p4) {
    const x1 = p1.x,
      y1 = p1.y,
      x2 = p2.x,
      y2 = p2.y,
      x3 = p3.x,
      y3 = p3.y,
      x4 = p4.x,
      y4 = p4.y;
    return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
  },

  lli: function (v1, v2) {
    return utils.lli4(v1, v1.c, v2, v2.c);
  },

  makeline: function (p1, p2) {
    const x1 = p1.x,
      y1 = p1.y,
      x2 = p2.x,
      y2 = p2.y,
      dx = (x2 - x1) / 3,
      dy = (y2 - y1) / 3;
    return new Bezier(
      x1,
      y1,
      x1 + dx,
      y1 + dy,
      x1 + 2 * dx,
      y1 + 2 * dy,
      x2,
      y2
    );
  },

  findbbox: function (sections) {
    let mx = nMax,
      my = nMax,
      MX = nMin,
      MY = nMin;
    sections.forEach(function (s) {
      const bbox = s.bbox();
      if (mx > bbox.x.min) mx = bbox.x.min;
      if (my > bbox.y.min) my = bbox.y.min;
      if (MX < bbox.x.max) MX = bbox.x.max;
      if (MY < bbox.y.max) MY = bbox.y.max;
    });
    return {
      x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
      y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my },
    };
  },

  shapeintersections: function (
    s1,
    bbox1,
    s2,
    bbox2,
    curveIntersectionThreshold
  ) {
    if (!utils.bboxoverlap(bbox1, bbox2)) return [];
    const intersections = [];
    const a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
    const a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
    a1.forEach(function (l1) {
      if (l1.virtual) return;
      a2.forEach(function (l2) {
        if (l2.virtual) return;
        const iss = l1.intersects(l2, curveIntersectionThreshold);
        if (iss.length > 0) {
          iss.c1 = l1;
          iss.c2 = l2;
          iss.s1 = s1;
          iss.s2 = s2;
          intersections.push(iss);
        }
      });
    });
    return intersections;
  },

  makeshape: function (forward, back, curveIntersectionThreshold) {
    const bpl = back.points.length;
    const fpl = forward.points.length;
    const start = utils.makeline(back.points[bpl - 1], forward.points[0]);
    const end = utils.makeline(forward.points[fpl - 1], back.points[0]);
    const shape = {
      startcap: start,
      forward: forward,
      back: back,
      endcap: end,
      bbox: utils.findbbox([start, forward, back, end]),
    };
    shape.intersections = function (s2) {
      return utils.shapeintersections(
        shape,
        shape.bbox,
        s2,
        s2.bbox,
        curveIntersectionThreshold
      );
    };
    return shape;
  },

  getminmax: function (curve, d, list) {
    if (!list) return { min: 0, max: 0 };
    let min = nMax,
      max = nMin,
      t,
      c;
    if (list.indexOf(0) === -1) {
      list = [0].concat(list);
    }
    if (list.indexOf(1) === -1) {
      list.push(1);
    }
    for (let i = 0, len = list.length; i < len; i++) {
      t = list[i];
      c = curve.get(t);
      if (c[d] < min) {
        min = c[d];
      }
      if (c[d] > max) {
        max = c[d];
      }
    }
    return { min: min, mid: (min + max) / 2, max: max, size: max - min };
  },

  align: function (points, line) {
    const tx = line.p1.x,
      ty = line.p1.y,
      a = -atan2(line.p2.y - ty, line.p2.x - tx),
      d = function (v) {
        return {
          x: (v.x - tx) * cos(a) - (v.y - ty) * sin(a),
          y: (v.x - tx) * sin(a) + (v.y - ty) * cos(a),
        };
      };
    return points.map(d);
  },

  roots: function (points, line) {
    line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };

    const order = points.length - 1;
    const aligned = utils.align(points, line);
    const reduce = function (t) {
      return 0 <= t && t <= 1;
    };

    if (order === 2) {
      const a = aligned[0].y,
        b = aligned[1].y,
        c = aligned[2].y,
        d = a - 2 * b + c;
      if (d !== 0) {
        const m1 = -sqrt(b * b - a * c),
          m2 = -a + b,
          v1 = -(m1 + m2) / d,
          v2 = -(-m1 + m2) / d;
        return [v1, v2].filter(reduce);
      } else if (b !== c && d === 0) {
        return [(2 * b - c) / (2 * b - 2 * c)].filter(reduce);
      }
      return [];
    }

    // see http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
    const pa = aligned[0].y,
      pb = aligned[1].y,
      pc = aligned[2].y,
      pd = aligned[3].y;

    let d = -pa + 3 * pb - 3 * pc + pd,
      a = 3 * pa - 6 * pb + 3 * pc,
      b = -3 * pa + 3 * pb,
      c = pa;

    if (utils.approximately(d, 0)) {
      // this is not a cubic curve.
      if (utils.approximately(a, 0)) {
        // in fact, this is not a quadratic curve either.
        if (utils.approximately(b, 0)) {
          // in fact in fact, there are no solutions.
          return [];
        }
        // linear solution:
        return [-c / b].filter(reduce);
      }
      // quadratic solution:
      const q = sqrt(b * b - 4 * a * c),
        a2 = 2 * a;
      return [(q - b) / a2, (-b - q) / a2].filter(reduce);
    }

    // at this point, we know we need a cubic solution:

    a /= d;
    b /= d;
    c /= d;

    const p = (3 * b - a * a) / 3,
      p3 = p / 3,
      q = (2 * a * a * a - 9 * a * b + 27 * c) / 27,
      q2 = q / 2,
      discriminant = q2 * q2 + p3 * p3 * p3;

    let u1, v1, x1, x2, x3;
    if (discriminant < 0) {
      const mp3 = -p / 3,
        mp33 = mp3 * mp3 * mp3,
        r = sqrt(mp33),
        t = -q / (2 * r),
        cosphi = t < -1 ? -1 : t > 1 ? 1 : t,
        phi = acos(cosphi),
        crtr = crt(r),
        t1 = 2 * crtr;
      x1 = t1 * cos(phi / 3) - a / 3;
      x2 = t1 * cos((phi + tau) / 3) - a / 3;
      x3 = t1 * cos((phi + 2 * tau) / 3) - a / 3;
      return [x1, x2, x3].filter(reduce);
    } else if (discriminant === 0) {
      u1 = q2 < 0 ? crt(-q2) : -crt(q2);
      x1 = 2 * u1 - a / 3;
      x2 = -u1 - a / 3;
      return [x1, x2].filter(reduce);
    } else {
      const sd = sqrt(discriminant);
      u1 = crt(-q2 + sd);
      v1 = crt(q2 + sd);
      return [u1 - v1 - a / 3].filter(reduce);
    }
  },

  droots: function (p) {
    // quadratic roots are easy
    if (p.length === 3) {
      const a = p[0],
        b = p[1],
        c = p[2],
        d = a - 2 * b + c;
      if (d !== 0) {
        const m1 = -sqrt(b * b - a * c),
          m2 = -a + b,
          v1 = -(m1 + m2) / d,
          v2 = -(-m1 + m2) / d;
        return [v1, v2];
      } else if (b !== c && d === 0) {
        return [(2 * b - c) / (2 * (b - c))];
      }
      return [];
    }

    // linear roots are even easier
    if (p.length === 2) {
      const a = p[0],
        b = p[1];
      if (a !== b) {
        return [a / (a - b)];
      }
      return [];
    }

    return [];
  },

  curvature: function (t, d1, d2, _3d, kOnly) {
    let num,
      dnm,
      adk,
      dk,
      k = 0,
      r = 0;

    //
    // We're using the following formula for curvature:
    //
    //              x'y" - y'x"
    //   k(t) = ------------------
    //           (x'² + y'²)^(3/2)
    //
    // from https://en.wikipedia.org/wiki/Radius_of_curvature#Definition
    //
    // With it corresponding 3D counterpart:
    //
    //          sqrt( (y'z" - y"z')² + (z'x" - z"x')² + (x'y" - x"y')²)
    //   k(t) = -------------------------------------------------------
    //                     (x'² + y'² + z'²)^(3/2)
    //

    const d = utils.compute(t, d1);
    const dd = utils.compute(t, d2);
    const qdsum = d.x * d.x + d.y * d.y;

    if (_3d) {
      num = sqrt(
        pow(d.y * dd.z - dd.y * d.z, 2) +
          pow(d.z * dd.x - dd.z * d.x, 2) +
          pow(d.x * dd.y - dd.x * d.y, 2)
      );
      dnm = pow(qdsum + d.z * d.z, 3 / 2);
    } else {
      num = d.x * dd.y - d.y * dd.x;
      dnm = pow(qdsum, 3 / 2);
    }

    if (num === 0 || dnm === 0) {
      return { k: 0, r: 0 };
    }

    k = num / dnm;
    r = dnm / num;

    // We're also computing the derivative of kappa, because
    // there is value in knowing the rate of change for the
    // curvature along the curve. And we're just going to
    // ballpark it based on an epsilon.
    if (!kOnly) {
      // compute k'(t) based on the interval before, and after it,
      // to at least try to not introduce forward/backward pass bias.
      const pk = utils.curvature(t - 0.001, d1, d2, _3d, true).k;
      const nk = utils.curvature(t + 0.001, d1, d2, _3d, true).k;
      dk = (nk - k + (k - pk)) / 2;
      adk = (abs(nk - k) + abs(k - pk)) / 2;
    }

    return { k: k, r: r, dk: dk, adk: adk };
  },

  inflections: function (points) {
    if (points.length < 4) return [];

    // FIXME: TODO: add in inflection abstraction for quartic+ curves?

    const p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }),
      a = p[2].x * p[1].y,
      b = p[3].x * p[1].y,
      c = p[1].x * p[2].y,
      d = p[3].x * p[2].y,
      v1 = 18 * (-3 * a + 2 * b + 3 * c - d),
      v2 = 18 * (3 * a - b - 3 * c),
      v3 = 18 * (c - a);

    if (utils.approximately(v1, 0)) {
      if (!utils.approximately(v2, 0)) {
        let t = -v3 / v2;
        if (0 <= t && t <= 1) return [t];
      }
      return [];
    }

    const trm = v2 * v2 - 4 * v1 * v3,
      sq = Math.sqrt(trm),
      d2 = 2 * v1;

    if (utils.approximately(d2, 0)) return [];

    return [(sq - v2) / d2, -(v2 + sq) / d2].filter(function (r) {
      return 0 <= r && r <= 1;
    });
  },

  bboxoverlap: function (b1, b2) {
    const dims = ["x", "y"],
      len = dims.length;

    for (let i = 0, dim, l, t, d; i < len; i++) {
      dim = dims[i];
      l = b1[dim].mid;
      t = b2[dim].mid;
      d = (b1[dim].size + b2[dim].size) / 2;
      if (abs(l - t) >= d) return false;
    }
    return true;
  },

  expandbox: function (bbox, _bbox) {
    if (_bbox.x.min < bbox.x.min) {
      bbox.x.min = _bbox.x.min;
    }
    if (_bbox.y.min < bbox.y.min) {
      bbox.y.min = _bbox.y.min;
    }
    if (_bbox.z && _bbox.z.min < bbox.z.min) {
      bbox.z.min = _bbox.z.min;
    }
    if (_bbox.x.max > bbox.x.max) {
      bbox.x.max = _bbox.x.max;
    }
    if (_bbox.y.max > bbox.y.max) {
      bbox.y.max = _bbox.y.max;
    }
    if (_bbox.z && _bbox.z.max > bbox.z.max) {
      bbox.z.max = _bbox.z.max;
    }
    bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
    bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
    if (bbox.z) {
      bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
    }
    bbox.x.size = bbox.x.max - bbox.x.min;
    bbox.y.size = bbox.y.max - bbox.y.min;
    if (bbox.z) {
      bbox.z.size = bbox.z.max - bbox.z.min;
    }
  },

  pairiteration: function (c1, c2, curveIntersectionThreshold) {
    const c1b = c1.bbox(),
      c2b = c2.bbox(),
      r = 100000,
      threshold = curveIntersectionThreshold || 0.5;

    if (
      c1b.x.size + c1b.y.size < threshold &&
      c2b.x.size + c2b.y.size < threshold
    ) {
      return [
        (((r * (c1._t1 + c1._t2)) / 2) | 0) / r +
          "/" +
          (((r * (c2._t1 + c2._t2)) / 2) | 0) / r,
      ];
    }

    let cc1 = c1.split(0.5),
      cc2 = c2.split(0.5),
      pairs = [
        { left: cc1.left, right: cc2.left },
        { left: cc1.left, right: cc2.right },
        { left: cc1.right, right: cc2.right },
        { left: cc1.right, right: cc2.left },
      ];

    pairs = pairs.filter(function (pair) {
      return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
    });

    let results = [];

    if (pairs.length === 0) return results;

    pairs.forEach(function (pair) {
      results = results.concat(
        utils.pairiteration(pair.left, pair.right, threshold)
      );
    });

    results = results.filter(function (v, i) {
      return results.indexOf(v) === i;
    });

    return results;
  },

  getccenter: function (p1, p2, p3) {
    const dx1 = p2.x - p1.x,
      dy1 = p2.y - p1.y,
      dx2 = p3.x - p2.x,
      dy2 = p3.y - p2.y,
      dx1p = dx1 * cos(quart) - dy1 * sin(quart),
      dy1p = dx1 * sin(quart) + dy1 * cos(quart),
      dx2p = dx2 * cos(quart) - dy2 * sin(quart),
      dy2p = dx2 * sin(quart) + dy2 * cos(quart),
      // chord midpoints
      mx1 = (p1.x + p2.x) / 2,
      my1 = (p1.y + p2.y) / 2,
      mx2 = (p2.x + p3.x) / 2,
      my2 = (p2.y + p3.y) / 2,
      // midpoint offsets
      mx1n = mx1 + dx1p,
      my1n = my1 + dy1p,
      mx2n = mx2 + dx2p,
      my2n = my2 + dy2p,
      // intersection of these lines:
      arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n),
      r = utils.dist(arc, p1);

    // arc start/end values, over mid point:
    let s = atan2(p1.y - arc.y, p1.x - arc.x),
      m = atan2(p2.y - arc.y, p2.x - arc.x),
      e = atan2(p3.y - arc.y, p3.x - arc.x),
      _;

    // determine arc direction (cw/ccw correction)
    if (s < e) {
      // if s<m<e, arc(s, e)
      // if m<s<e, arc(e, s + tau)
      // if s<e<m, arc(e, s + tau)
      if (s > m || m > e) {
        s += tau;
      }
      if (s > e) {
        _ = e;
        e = s;
        s = _;
      }
    } else {
      // if e<m<s, arc(e, s)
      // if m<e<s, arc(s, e + tau)
      // if e<s<m, arc(s, e + tau)
      if (e < m && m < s) {
        _ = e;
        e = s;
        s = _;
      } else {
        e += tau;
      }
    }
    // assign and done.
    arc.s = s;
    arc.e = e;
    arc.r = r;
    return arc;
  },

  numberSort: function (a, b) {
    return a - b;
  },
};



;// CONCATENATED MODULE: ./node_modules/bezier-js/src/poly-bezier.js


/**
 * Poly Bezier
 * @param {[type]} curves [description]
 */
class PolyBezier {
  constructor(curves) {
    this.curves = [];
    this._3d = false;
    if (!!curves) {
      this.curves = curves;
      this._3d = this.curves[0]._3d;
    }
  }

  valueOf() {
    return this.toString();
  }

  toString() {
    return (
      "[" +
      this.curves
        .map(function (curve) {
          return utils.pointsToString(curve.points);
        })
        .join(", ") +
      "]"
    );
  }

  addCurve(curve) {
    this.curves.push(curve);
    this._3d = this._3d || curve._3d;
  }

  length() {
    return this.curves
      .map(function (v) {
        return v.length();
      })
      .reduce(function (a, b) {
        return a + b;
      });
  }

  curve(idx) {
    return this.curves[idx];
  }

  bbox() {
    const c = this.curves;
    var bbox = c[0].bbox();
    for (var i = 1; i < c.length; i++) {
      utils.expandbox(bbox, c[i].bbox());
    }
    return bbox;
  }

  offset(d) {
    const offset = [];
    this.curves.forEach(function (v) {
      offset.push(...v.offset(d));
    });
    return new PolyBezier(offset);
  }
}



;// CONCATENATED MODULE: ./node_modules/bezier-js/src/bezier.js
/**
  A javascript Bezier curve library by Pomax.

  Based on http://pomax.github.io/bezierinfo

  This code is MIT licensed.
**/




// math-inlining.
const { abs: bezier_abs, min, max, cos: bezier_cos, sin: bezier_sin, acos: bezier_acos, sqrt: bezier_sqrt } = Math;
const bezier_pi = Math.PI;
// a zero coordinate, which is surprisingly useful
const bezier_ZERO = { x: 0, y: 0, z: 0 };

/**
 * Bezier curve constructor.
 *
 * ...docs pending...
 */
class Bezier {
  constructor(coords) {
    let args =
      coords && coords.forEach ? coords : Array.from(arguments).slice();
    let coordlen = false;

    if (typeof args[0] === "object") {
      coordlen = args.length;
      const newargs = [];
      args.forEach(function (point) {
        ["x", "y", "z"].forEach(function (d) {
          if (typeof point[d] !== "undefined") {
            newargs.push(point[d]);
          }
        });
      });
      args = newargs;
    }

    let higher = false;
    const len = args.length;

    if (coordlen) {
      if (coordlen > 4) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
        higher = true;
      }
    } else {
      if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
      }
    }

    const _3d = (this._3d =
      (!higher && (len === 9 || len === 12)) ||
      (coords && coords[0] && typeof coords[0].z !== "undefined"));

    const points = (this.points = []);
    for (let idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
      var point = {
        x: args[idx],
        y: args[idx + 1],
      };
      if (_3d) {
        point.z = args[idx + 2];
      }
      points.push(point);
    }
    const order = (this.order = points.length - 1);

    const dims = (this.dims = ["x", "y"]);
    if (_3d) dims.push("z");
    this.dimlen = dims.length;

    const aligned = utils.align(points, { p1: points[0], p2: points[order] });
    this._linear = !aligned.some((p) => bezier_abs(p.y) > 0.0001);

    this._lut = [];

    this._t1 = 0;
    this._t2 = 1;
    this.update();
  }

  static quadraticFromPoints(p1, p2, p3, t) {
    if (typeof t === "undefined") {
      t = 0.5;
    }
    // shortcuts, although they're really dumb
    if (t === 0) {
      return new Bezier(p2, p2, p3);
    }
    if (t === 1) {
      return new Bezier(p1, p2, p2);
    }
    // real fitting.
    const abc = Bezier.getABC(2, p1, p2, p3, t);
    return new Bezier(p1, abc.A, p3);
  }

  static cubicFromPoints(S, B, E, t, d1) {
    if (typeof t === "undefined") {
      t = 0.5;
    }
    const abc = Bezier.getABC(3, S, B, E, t);
    if (typeof d1 === "undefined") {
      d1 = utils.dist(B, abc.C);
    }
    const d2 = (d1 * (1 - t)) / t;

    const selen = utils.dist(S, E),
      lx = (E.x - S.x) / selen,
      ly = (E.y - S.y) / selen,
      bx1 = d1 * lx,
      by1 = d1 * ly,
      bx2 = d2 * lx,
      by2 = d2 * ly;
    // derivation of new hull coordinates
    const e1 = { x: B.x - bx1, y: B.y - by1 },
      e2 = { x: B.x + bx2, y: B.y + by2 },
      A = abc.A,
      v1 = { x: A.x + (e1.x - A.x) / (1 - t), y: A.y + (e1.y - A.y) / (1 - t) },
      v2 = { x: A.x + (e2.x - A.x) / t, y: A.y + (e2.y - A.y) / t },
      nc1 = { x: S.x + (v1.x - S.x) / t, y: S.y + (v1.y - S.y) / t },
      nc2 = {
        x: E.x + (v2.x - E.x) / (1 - t),
        y: E.y + (v2.y - E.y) / (1 - t),
      };
    // ...done
    return new Bezier(S, nc1, nc2, E);
  }

  static getUtils() {
    return utils;
  }

  getUtils() {
    return Bezier.getUtils();
  }

  static get PolyBezier() {
    return PolyBezier;
  }

  valueOf() {
    return this.toString();
  }

  toString() {
    return utils.pointsToString(this.points);
  }

  toSVG() {
    if (this._3d) return false;
    const p = this.points,
      x = p[0].x,
      y = p[0].y,
      s = ["M", x, y, this.order === 2 ? "Q" : "C"];
    for (let i = 1, last = p.length; i < last; i++) {
      s.push(p[i].x);
      s.push(p[i].y);
    }
    return s.join(" ");
  }

  setRatios(ratios) {
    if (ratios.length !== this.points.length) {
      throw new Error("incorrect number of ratio values");
    }
    this.ratios = ratios;
    this._lut = []; //  invalidate any precomputed LUT
  }

  verify() {
    const print = this.coordDigest();
    if (print !== this._print) {
      this._print = print;
      this.update();
    }
  }

  coordDigest() {
    return this.points
      .map(function (c, pos) {
        return "" + pos + c.x + c.y + (c.z ? c.z : 0);
      })
      .join("");
  }

  update() {
    // invalidate any precomputed LUT
    this._lut = [];
    this.dpoints = utils.derive(this.points, this._3d);
    this.computedirection();
  }

  computedirection() {
    const points = this.points;
    const angle = utils.angle(points[0], points[this.order], points[1]);
    this.clockwise = angle > 0;
  }

  length() {
    return utils.length(this.derivative.bind(this));
  }

  static getABC(order = 2, S, B, E, t = 0.5) {
    const u = utils.projectionratio(t, order),
      um = 1 - u,
      C = {
        x: u * S.x + um * E.x,
        y: u * S.y + um * E.y,
      },
      s = utils.abcratio(t, order),
      A = {
        x: B.x + (B.x - C.x) / s,
        y: B.y + (B.y - C.y) / s,
      };
    return { A, B, C, S, E };
  }

  getABC(t, B) {
    B = B || this.get(t);
    let S = this.points[0];
    let E = this.points[this.order];
    return Bezier.getABC(this.order, S, B, E, t);
  }

  getLUT(steps) {
    this.verify();
    steps = steps || 100;
    if (this._lut.length === steps) {
      return this._lut;
    }
    this._lut = [];
    // We want a range from 0 to 1 inclusive, so
    // we decrement and then use <= rather than <:
    steps--;
    for (let i = 0, p, t; i < steps; i++) {
      t = i / (steps - 1);
      p = this.compute(t);
      p.t = t;
      this._lut.push(p);
    }
    return this._lut;
  }

  on(point, error) {
    error = error || 5;
    const lut = this.getLUT(),
      hits = [];
    for (let i = 0, c, t = 0; i < lut.length; i++) {
      c = lut[i];
      if (utils.dist(c, point) < error) {
        hits.push(c);
        t += i / lut.length;
      }
    }
    if (!hits.length) return false;
    return (t /= hits.length);
  }

  project(point) {
    // step 1: coarse check
    const LUT = this.getLUT(),
      l = LUT.length - 1,
      closest = utils.closest(LUT, point),
      mpos = closest.mpos,
      t1 = (mpos - 1) / l,
      t2 = (mpos + 1) / l,
      step = 0.1 / l;

    // step 2: fine check
    let mdist = closest.mdist,
      t = t1,
      ft = t,
      p;
    mdist += 1;
    for (let d; t < t2 + step; t += step) {
      p = this.compute(t);
      d = utils.dist(point, p);
      if (d < mdist) {
        mdist = d;
        ft = t;
      }
    }
    ft = ft < 0 ? 0 : ft > 1 ? 1 : ft;
    p = this.compute(ft);
    p.t = ft;
    p.d = mdist;
    return p;
  }

  get(t) {
    return this.compute(t);
  }

  point(idx) {
    return this.points[idx];
  }

  compute(t) {
    if (this.ratios) {
      return utils.computeWithRatios(t, this.points, this.ratios, this._3d);
    }
    return utils.compute(t, this.points, this._3d, this.ratios);
  }

  raise() {
    const p = this.points,
      np = [p[0]],
      k = p.length;
    for (let i = 1, pi, pim; i < k; i++) {
      pi = p[i];
      pim = p[i - 1];
      np[i] = {
        x: ((k - i) / k) * pi.x + (i / k) * pim.x,
        y: ((k - i) / k) * pi.y + (i / k) * pim.y,
      };
    }
    np[k] = p[k - 1];
    return new Bezier(np);
  }

  derivative(t) {
    return utils.compute(t, this.dpoints[0], this._3d);
  }

  dderivative(t) {
    return utils.compute(t, this.dpoints[1], this._3d);
  }

  align() {
    let p = this.points;
    return new Bezier(utils.align(p, { p1: p[0], p2: p[p.length - 1] }));
  }

  curvature(t) {
    return utils.curvature(t, this.dpoints[0], this.dpoints[1], this._3d);
  }

  inflections() {
    return utils.inflections(this.points);
  }

  normal(t) {
    return this._3d ? this.__normal3(t) : this.__normal2(t);
  }

  __normal2(t) {
    const d = this.derivative(t);
    const q = bezier_sqrt(d.x * d.x + d.y * d.y);
    return { x: -d.y / q, y: d.x / q };
  }

  __normal3(t) {
    // see http://stackoverflow.com/questions/25453159
    const r1 = this.derivative(t),
      r2 = this.derivative(t + 0.01),
      q1 = bezier_sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z),
      q2 = bezier_sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
    r1.x /= q1;
    r1.y /= q1;
    r1.z /= q1;
    r2.x /= q2;
    r2.y /= q2;
    r2.z /= q2;
    // cross product
    const c = {
      x: r2.y * r1.z - r2.z * r1.y,
      y: r2.z * r1.x - r2.x * r1.z,
      z: r2.x * r1.y - r2.y * r1.x,
    };
    const m = bezier_sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
    c.x /= m;
    c.y /= m;
    c.z /= m;
    // rotation matrix
    const R = [
      c.x * c.x,
      c.x * c.y - c.z,
      c.x * c.z + c.y,
      c.x * c.y + c.z,
      c.y * c.y,
      c.y * c.z - c.x,
      c.x * c.z - c.y,
      c.y * c.z + c.x,
      c.z * c.z,
    ];
    // normal vector:
    const n = {
      x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
      y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
      z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z,
    };
    return n;
  }

  hull(t) {
    let p = this.points,
      _p = [],
      q = [],
      idx = 0;
    q[idx++] = p[0];
    q[idx++] = p[1];
    q[idx++] = p[2];
    if (this.order === 3) {
      q[idx++] = p[3];
    }
    // we lerp between all points at each iteration, until we have 1 point left.
    while (p.length > 1) {
      _p = [];
      for (let i = 0, pt, l = p.length - 1; i < l; i++) {
        pt = utils.lerp(t, p[i], p[i + 1]);
        q[idx++] = pt;
        _p.push(pt);
      }
      p = _p;
    }
    return q;
  }

  split(t1, t2) {
    // shortcuts
    if (t1 === 0 && !!t2) {
      return this.split(t2).left;
    }
    if (t2 === 1) {
      return this.split(t1).right;
    }

    // no shortcut: use "de Casteljau" iteration.
    const q = this.hull(t1);
    const result = {
      left:
        this.order === 2
          ? new Bezier([q[0], q[3], q[5]])
          : new Bezier([q[0], q[4], q[7], q[9]]),
      right:
        this.order === 2
          ? new Bezier([q[5], q[4], q[2]])
          : new Bezier([q[9], q[8], q[6], q[3]]),
      span: q,
    };

    // make sure we bind _t1/_t2 information!
    result.left._t1 = utils.map(0, 0, 1, this._t1, this._t2);
    result.left._t2 = utils.map(t1, 0, 1, this._t1, this._t2);
    result.right._t1 = utils.map(t1, 0, 1, this._t1, this._t2);
    result.right._t2 = utils.map(1, 0, 1, this._t1, this._t2);

    // if we have no t2, we're done
    if (!t2) {
      return result;
    }

    // if we have a t2, split again:
    t2 = utils.map(t2, t1, 1, 0, 1);
    return result.right.split(t2).left;
  }

  extrema() {
    const result = {};
    let roots = [];

    this.dims.forEach(
      function (dim) {
        let mfn = function (v) {
          return v[dim];
        };
        let p = this.dpoints[0].map(mfn);
        result[dim] = utils.droots(p);
        if (this.order === 3) {
          p = this.dpoints[1].map(mfn);
          result[dim] = result[dim].concat(utils.droots(p));
        }
        result[dim] = result[dim].filter(function (t) {
          return t >= 0 && t <= 1;
        });
        roots = roots.concat(result[dim].sort(utils.numberSort));
      }.bind(this)
    );

    result.values = roots.sort(utils.numberSort).filter(function (v, idx) {
      return roots.indexOf(v) === idx;
    });

    return result;
  }

  bbox() {
    const extrema = this.extrema(),
      result = {};
    this.dims.forEach(
      function (d) {
        result[d] = utils.getminmax(this, d, extrema[d]);
      }.bind(this)
    );
    return result;
  }

  overlaps(curve) {
    const lbbox = this.bbox(),
      tbbox = curve.bbox();
    return utils.bboxoverlap(lbbox, tbbox);
  }

  offset(t, d) {
    if (typeof d !== "undefined") {
      const c = this.get(t),
        n = this.normal(t);
      const ret = {
        c: c,
        n: n,
        x: c.x + n.x * d,
        y: c.y + n.y * d,
      };
      if (this._3d) {
        ret.z = c.z + n.z * d;
      }
      return ret;
    }
    if (this._linear) {
      const nv = this.normal(0),
        coords = this.points.map(function (p) {
          const ret = {
            x: p.x + t * nv.x,
            y: p.y + t * nv.y,
          };
          if (p.z && nv.z) {
            ret.z = p.z + t * nv.z;
          }
          return ret;
        });
      return [new Bezier(coords)];
    }
    return this.reduce().map(function (s) {
      if (s._linear) {
        return s.offset(t)[0];
      }
      return s.scale(t);
    });
  }

  simple() {
    if (this.order === 3) {
      const a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
      const a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
      if ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0)) return false;
    }
    const n1 = this.normal(0);
    const n2 = this.normal(1);
    let s = n1.x * n2.x + n1.y * n2.y;
    if (this._3d) {
      s += n1.z * n2.z;
    }
    return bezier_abs(bezier_acos(s)) < bezier_pi / 3;
  }

  reduce() {
    // TODO: examine these var types in more detail...
    let i,
      t1 = 0,
      t2 = 0,
      step = 0.01,
      segment,
      pass1 = [],
      pass2 = [];
    // first pass: split on extrema
    let extrema = this.extrema().values;
    if (extrema.indexOf(0) === -1) {
      extrema = [0].concat(extrema);
    }
    if (extrema.indexOf(1) === -1) {
      extrema.push(1);
    }

    for (t1 = extrema[0], i = 1; i < extrema.length; i++) {
      t2 = extrema[i];
      segment = this.split(t1, t2);
      segment._t1 = t1;
      segment._t2 = t2;
      pass1.push(segment);
      t1 = t2;
    }

    // second pass: further reduce these segments to simple segments
    pass1.forEach(function (p1) {
      t1 = 0;
      t2 = 0;
      while (t2 <= 1) {
        for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
          segment = p1.split(t1, t2);
          if (!segment.simple()) {
            t2 -= step;
            if (bezier_abs(t1 - t2) < step) {
              // we can never form a reduction
              return [];
            }
            segment = p1.split(t1, t2);
            segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
            segment._t2 = utils.map(t2, 0, 1, p1._t1, p1._t2);
            pass2.push(segment);
            t1 = t2;
            break;
          }
        }
      }
      if (t1 < 1) {
        segment = p1.split(t1, 1);
        segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
        segment._t2 = p1._t2;
        pass2.push(segment);
      }
    });
    return pass2;
  }

  scale(d) {
    const order = this.order;
    let distanceFn = false;
    if (typeof d === "function") {
      distanceFn = d;
    }
    if (distanceFn && order === 2) {
      return this.raise().scale(distanceFn);
    }

    // TODO: add special handling for degenerate (=linear) curves.
    const clockwise = this.clockwise;
    const r1 = distanceFn ? distanceFn(0) : d;
    const r2 = distanceFn ? distanceFn(1) : d;
    const v = [this.offset(0, 10), this.offset(1, 10)];
    const points = this.points;
    const np = [];
    const o = utils.lli4(v[0], v[0].c, v[1], v[1].c);

    if (!o) {
      throw new Error("cannot scale this curve. Try reducing it first.");
    }
    // move all points by distance 'd' wrt the origin 'o'

    // move end points by fixed distance along normal.
    [0, 1].forEach(function (t) {
      const p = (np[t * order] = utils.copy(points[t * order]));
      p.x += (t ? r2 : r1) * v[t].n.x;
      p.y += (t ? r2 : r1) * v[t].n.y;
    });

    if (!distanceFn) {
      // move control points to lie on the intersection of the offset
      // derivative vector, and the origin-through-control vector
      [0, 1].forEach((t) => {
        if (order === 2 && !!t) return;
        const p = np[t * order];
        const d = this.derivative(t);
        const p2 = { x: p.x + d.x, y: p.y + d.y };
        np[t + 1] = utils.lli4(p, p2, o, points[t + 1]);
      });
      return new Bezier(np);
    }

    // move control points by "however much necessary to
    // ensure the correct tangent to endpoint".
    [0, 1].forEach(function (t) {
      if (order === 2 && !!t) return;
      var p = points[t + 1];
      var ov = {
        x: p.x - o.x,
        y: p.y - o.y,
      };
      var rc = distanceFn ? distanceFn((t + 1) / order) : d;
      if (distanceFn && !clockwise) rc = -rc;
      var m = bezier_sqrt(ov.x * ov.x + ov.y * ov.y);
      ov.x /= m;
      ov.y /= m;
      np[t + 1] = {
        x: p.x + rc * ov.x,
        y: p.y + rc * ov.y,
      };
    });
    return new Bezier(np);
  }

  outline(d1, d2, d3, d4) {
    d2 = typeof d2 === "undefined" ? d1 : d2;
    const reduced = this.reduce(),
      len = reduced.length,
      fcurves = [];

    let bcurves = [],
      p,
      alen = 0,
      tlen = this.length();

    const graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";

    function linearDistanceFunction(s, e, tlen, alen, slen) {
      return function (v) {
        const f1 = alen / tlen,
          f2 = (alen + slen) / tlen,
          d = e - s;
        return utils.map(v, 0, 1, s + f1 * d, s + f2 * d);
      };
    }

    // form curve oulines
    reduced.forEach(function (segment) {
      const slen = segment.length();
      if (graduated) {
        fcurves.push(
          segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
        );
        bcurves.push(
          segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
        );
      } else {
        fcurves.push(segment.scale(d1));
        bcurves.push(segment.scale(-d2));
      }
      alen += slen;
    });

    // reverse the "return" outline
    bcurves = bcurves
      .map(function (s) {
        p = s.points;
        if (p[3]) {
          s.points = [p[3], p[2], p[1], p[0]];
        } else {
          s.points = [p[2], p[1], p[0]];
        }
        return s;
      })
      .reverse();

    // form the endcaps as lines
    const fs = fcurves[0].points[0],
      fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1],
      bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1],
      be = bcurves[0].points[0],
      ls = utils.makeline(bs, fs),
      le = utils.makeline(fe, be),
      segments = [ls].concat(fcurves).concat([le]).concat(bcurves),
      slen = segments.length;

    return new PolyBezier(segments);
  }

  outlineshapes(d1, d2, curveIntersectionThreshold) {
    d2 = d2 || d1;
    const outline = this.outline(d1, d2).curves;
    const shapes = [];
    for (let i = 1, len = outline.length; i < len / 2; i++) {
      const shape = utils.makeshape(
        outline[i],
        outline[len - i],
        curveIntersectionThreshold
      );
      shape.startcap.virtual = i > 1;
      shape.endcap.virtual = i < len / 2 - 1;
      shapes.push(shape);
    }
    return shapes;
  }

  intersects(curve, curveIntersectionThreshold) {
    if (!curve) return this.selfintersects(curveIntersectionThreshold);
    if (curve.p1 && curve.p2) {
      return this.lineIntersects(curve);
    }
    if (curve instanceof Bezier) {
      curve = curve.reduce();
    }
    return this.curveintersects(
      this.reduce(),
      curve,
      curveIntersectionThreshold
    );
  }

  lineIntersects(line) {
    const mx = min(line.p1.x, line.p2.x),
      my = min(line.p1.y, line.p2.y),
      MX = max(line.p1.x, line.p2.x),
      MY = max(line.p1.y, line.p2.y);
    return utils.roots(this.points, line).filter((t) => {
      var p = this.get(t);
      return utils.between(p.x, mx, MX) && utils.between(p.y, my, MY);
    });
  }

  selfintersects(curveIntersectionThreshold) {
    // "simple" curves cannot intersect with their direct
    // neighbour, so for each segment X we check whether
    // it intersects [0:x-2][x+2:last].

    const reduced = this.reduce(),
      len = reduced.length - 2,
      results = [];

    for (let i = 0, result, left, right; i < len; i++) {
      left = reduced.slice(i, i + 1);
      right = reduced.slice(i + 2);
      result = this.curveintersects(left, right, curveIntersectionThreshold);
      results.push(...result);
    }
    return results;
  }

  curveintersects(c1, c2, curveIntersectionThreshold) {
    const pairs = [];
    // step 1: pair off any overlapping segments
    c1.forEach(function (l) {
      c2.forEach(function (r) {
        if (l.overlaps(r)) {
          pairs.push({ left: l, right: r });
        }
      });
    });
    // step 2: for each pairing, run through the convergence algorithm.
    let intersections = [];
    pairs.forEach(function (pair) {
      const result = utils.pairiteration(
        pair.left,
        pair.right,
        curveIntersectionThreshold
      );
      if (result.length > 0) {
        intersections = intersections.concat(result);
      }
    });
    return intersections;
  }

  arcs(errorThreshold) {
    errorThreshold = errorThreshold || 0.5;
    return this._iterate(errorThreshold, []);
  }

  _error(pc, np1, s, e) {
    const q = (e - s) / 4,
      c1 = this.get(s + q),
      c2 = this.get(e - q),
      ref = utils.dist(pc, np1),
      d1 = utils.dist(pc, c1),
      d2 = utils.dist(pc, c2);
    return bezier_abs(d1 - ref) + bezier_abs(d2 - ref);
  }

  _iterate(errorThreshold, circles) {
    let t_s = 0,
      t_e = 1,
      safety;
    // we do a binary search to find the "good \`t\` closest to no-longer-good"
    do {
      safety = 0;

      // step 1: start with the maximum possible arc
      t_e = 1;

      // points:
      let np1 = this.get(t_s),
        np2,
        np3,
        arc,
        prev_arc;

      // booleans:
      let curr_good = false,
        prev_good = false,
        done;

      // numbers:
      let t_m = t_e,
        prev_e = 1,
        step = 0;

      // step 2: find the best possible arc
      do {
        prev_good = curr_good;
        prev_arc = arc;
        t_m = (t_s + t_e) / 2;
        step++;

        np2 = this.get(t_m);
        np3 = this.get(t_e);

        arc = utils.getccenter(np1, np2, np3);

        //also save the t values
        arc.interval = {
          start: t_s,
          end: t_e,
        };

        let error = this._error(arc, np1, t_s, t_e);
        curr_good = error <= errorThreshold;

        done = prev_good && !curr_good;
        if (!done) prev_e = t_e;

        // this arc is fine: we can move 'e' up to see if we can find a wider arc
        if (curr_good) {
          // if e is already at max, then we're done for this arc.
          if (t_e >= 1) {
            // make sure we cap at t=1
            arc.interval.end = prev_e = 1;
            prev_arc = arc;
            // if we capped the arc segment to t=1 we also need to make sure that
            // the arc's end angle is correct with respect to the bezier end point.
            if (t_e > 1) {
              let d = {
                x: arc.x + arc.r * bezier_cos(arc.e),
                y: arc.y + arc.r * bezier_sin(arc.e),
              };
              arc.e += utils.angle({ x: arc.x, y: arc.y }, d, this.get(1));
            }
            break;
          }
          // if not, move it up by half the iteration distance
          t_e = t_e + (t_e - t_s) / 2;
        } else {
          // this is a bad arc: we need to move 'e' down to find a good arc
          t_e = t_m;
        }
      } while (!done && safety++ < 100);

      if (safety >= 100) {
        break;
      }

      // console.log("L835: [F] arc found", t_s, prev_e, prev_arc.x, prev_arc.y, prev_arc.s, prev_arc.e);

      prev_arc = prev_arc ? prev_arc : arc;
      circles.push(prev_arc);
      t_s = prev_e;
    } while (t_e < 1);
    return circles;
  }
}



;// CONCATENATED MODULE: ./src/core/utils/constance.js
/**
 * 方向
 * @readonly
 * @enum {number}
 */
var DIRECTION = {
  /** RIGHT */
  RIGHT: 0,
  /** BOTTOM */
  BOTTOM: 1,
  /** LEFT */
  LEFT: 2,
  /** TOP */
  TOP: 3,
  /** SELF */
  SELF: 100
};
function nextDirection(direction, clockwise) {
  var nextDir = (direction + (clockwise ? 1 : -1)) % 4;
  return nextDir;
}
function oppositeDirection(direction) {
  return (direction + 2) % 4;
}
var APPROXIMATE = 6;
var JFLOW_MODE = {
  DEFAULT: 'DEFAULT',
  LINKING: 'LINKING'
};
var LINE_DIR = {
  FROM: 'from',
  TO: 'to'
};
;// CONCATENATED MODULE: ./src/core/utils/functions.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/**
 * 根据点计算最小外接矩形
 * @param {number[][]} points - 点集合
 * @return {Object} demension 宽高，坐标
 */
function bounding_box(points) {
  if (points.length === 0) {
    return {
      width: 1,
      height: 1,
      x: 0,
      y: 0
    };
  }
  var min_x = Infinity;
  var min_y = Infinity;
  var max_x = -Infinity;
  var max_y = -Infinity;
  for (var idx in points) {
    var item = points[idx];
    if (item[0] < min_x) {
      min_x = item[0];
    }
    if (item[0] > max_x) {
      max_x = item[0];
    }
    if (item[1] < min_y) {
      min_y = item[1];
    }
    if (item[1] > max_y) {
      max_y = item[1];
    }
  }
  return {
    // points: [(min_x,min_y),(max_x,min_y),(max_x,max_y),(min_x,max_y)],
    width: Math.max(max_x - min_x, 10),
    height: Math.max(max_y - min_y, 10),
    x: min_x,
    y: min_y
  };
}
function sqr(x) {
  return x * x;
}
function dist2(v, w) {
  return sqr(v[0] - w[0]) + sqr(v[1] - w[1]);
}

// p - point
// v - start point of segment
// w - end point of segment
function distToSegmentSquared(p, v, w) {
  var l2 = dist2(v, w);
  if (l2 === 0) return dist2(p, v);
  var t = ((p[0] - v[0]) * (w[0] - v[0]) + (p[1] - v[1]) * (w[1] - v[1])) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, [v[0] + t * (w[0] - v[0]), v[1] + t * (w[1] - v[1])]);
}
function minIntersectionBetweenNodes(dmsfrom, dmsto) {
  var meta = {
    fromDir: null,
    fromP: null,
    toDir: null,
    toP: null,
    distMin: Infinity
  };
  Object.keys(dmsfrom).forEach(function (df) {
    if (+df === DIRECTION.SELF) {
      return;
    }
    var pf = dmsfrom[df];
    Object.keys(dmsto).forEach(function (dt) {
      if (+dt === DIRECTION.SELF) {
        return;
      }
      var pt = dmsto[dt];
      var dist = dist2(pf, pt);
      if (dist < meta.distMin) {
        Object.assign(meta, {
          distMin: dist,
          fromDir: +df,
          fromP: pf,
          toDir: +dt,
          toP: pt
        });
      }
    });
  });
  return meta;
}

// export function bezierPoints(p1, p2, start_dir = DIRECTION.TOP, end_dir = DIRECTION.TOP, anticlock = false) {
//     const isSameDirection = start_dir === end_dir;
//     const isVerticalStart = [DIRECTION.TOP, DIRECTION.BOTTOM].includes(start_dir);   
//     const isVerticalEnd = [DIRECTION.TOP, DIRECTION.BOTTOM].includes(end_dir);
//     const arrowspan = [DIRECTION.TOP, DIRECTION.LEFT].includes(end_dir) ? -5 : 5;
//     const endX = isVerticalEnd ? p2[0] : p2[0] + arrowspan;
//     const endY = isVerticalEnd ? p2[1] + arrowspan : p2[1];
//     if(isSameDirection) {
//         let span = Math.abs(isVerticalStart ? (endY - p1[1]) : (endX - p1[0]))
//         span = Math.min(span, 50);
//         const symb = [DIRECTION.RIGHT, DIRECTION.BOTTOM].includes(end_dir)
//         span = symb ? span : - span;
//         const cp1 = isVerticalStart ? [p1[0], p1[1] + span] : [p1[0] + span, p1[1]];
//         const cp2 = isVerticalEnd ? [endX, endY + span] : [endX + span, endY];
//         return [ 
//             ...cp1,
//             ...cp2,
//             endX, endY ];
//     }
//     let spanStart = (anticlock ? -5 : 1) * (isVerticalStart ? (endY - p1[1]) / 2 : (endX - p1[0]) / 2)
//     let spanEnd = (anticlock ? -4 : 1) * (isVerticalEnd ? (p1[1] - endY) / 2 : (p1[0] - endX) / 2)
//     let u1 = spanStart / Math.abs(spanStart);
//     spanStart = u1 * Math.min(Math.abs(spanStart), 50);
//     let u2 = spanEnd / Math.abs(spanEnd);
//     spanEnd = u2 * Math.min(Math.abs(spanEnd), 50);
//     const cp1 = isVerticalStart ? [p1[0], p1[1] + spanStart] : [p1[0] + spanStart, p1[1]];
//     const cp2 = isVerticalEnd ? [endX, endY + spanEnd] : [endX + spanEnd, endY];
//     return [ 
//         ...cp1,
//         ...cp2,
//         endX, endY ];
// }
function _resolveControlPoint(p, dir, spanx, spany) {
  if (dir === DIRECTION.TOP) {
    return [p[0], p[1] - spany];
  }
  if (dir === DIRECTION.BOTTOM) {
    return [p[0], p[1] + spany];
  }
  if (dir === DIRECTION.LEFT) {
    return [p[0] - spanx, p[1]];
  }
  if (dir === DIRECTION.RIGHT) {
    return [p[0] + spanx, p[1]];
  }
}
function bezierPoints(p1, p2) {
  var start_dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DIRECTION.TOP;
  var end_dir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DIRECTION.TOP;
  var minSpanX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var minSpanY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var spanx = Math.max(Math.abs((p1[0] - p2[0]) / 2), minSpanX);
  var spany = Math.max(Math.abs((p1[1] - p2[1]) / 2), minSpanY);
  var cp1 = _resolveControlPoint(p1, start_dir, spanx, spany);
  var cp2 = _resolveControlPoint(p2, end_dir, spanx, spany);
  var arrowspan = [DIRECTION.TOP, DIRECTION.LEFT].includes(end_dir) ? -5 : 5;
  var isVerticalEnd = [DIRECTION.TOP, DIRECTION.BOTTOM].includes(end_dir);
  var endX = isVerticalEnd ? p2[0] : p2[0] + arrowspan;
  var endY = isVerticalEnd ? p2[1] + arrowspan : p2[1];
  return [].concat(_toConsumableArray(cp1), _toConsumableArray(cp2), [endX, endY]);
}
function bezierPoint(t, P) {
  var q = 1 - t;
  var x = q * q * q * P[0] + 3 * q * q * t * P[2] + 3 * q * t * t * P[4] + t * t * t * P[6];
  var y = q * q * q * P[1] + 3 * q * q * t * P[3] + 3 * q * t * t * P[5] + t * t * t * P[7];
  var u = q * q * (P[2] - P[0]) + 2 * t * q * (P[4] - P[2]) + t * t * (P[6] - P[4]);
  var v = q * q * (P[3] - P[1]) + 2 * t * q * (P[5] - P[3]) + t * t * (P[7] - P[5]);
  var angle = Math.atan2(v, u);
  // console.log(angle * 180)
  // if(angle < 0) {
  //     angle = Math.PI + angle;
  // }
  return [x, y, angle];
}

// export function bezierPoints(p1, p2, start_vec, end_vec) {

// }

function distToBezierSegmentSquared(p, points) {
  var b = _construct(Bezier, _toConsumableArray(points));
  var point = b.project({
    x: p[0],
    y: p[1]
  });
  var d = dist2(p, [point.x, point.y]);
  return d;
}
function getBezierAngle(t, sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey) {
  var dx = Math.pow(1 - t, 2) * (cp1x - sx) + 2 * t * (1 - t) * (cp2x - cp1x) + t * t * (ex - cp2x);
  var dy = Math.pow(1 - t, 2) * (cp1y - sy) + 2 * t * (1 - t) * (cp2y - cp1y) + t * t * (ey - cp2y);
  return -Math.atan2(dx, dy) + 0.5 * Math.PI;
}
function getInstanceHeight(instance) {
  var rect = instance.getBoundingRect();
  // let min_y = Infinity;
  // let max_y = -Infinity;
  // let min_x = Infinity;
  // let max_x = -Infinity;
  // rect.forEach(point => {
  //     max_y = Math.max(max_y, point[1]);
  //     min_y = Math.min(min_y, point[1]);
  //     max_x = Math.max(max_x, point[0]);
  //     min_x = Math.min(min_x, point[0]);
  // });
  return {
    height: rect[3] - rect[1],
    width: rect[2] - rect[0]
  };
}
function polylinePoints(points, p1, p2) {
  var start_dir = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DIRECTION.TOP;
  var end_dir = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DIRECTION.TOP;
  var minSpanX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10;
  var minSpanY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 10;
  var isSelf = arguments.length > 7 ? arguments[7] : undefined;
  var dirSpan = Math.abs(start_dir - end_dir);
  // const spanx = Math.max(Math.abs((p1[0] - p2[0])/2), minSpanX);
  // const spany = Math.max(Math.abs((p1[1] - p2[1])/2), minSpanY);
  var isVerticalStart = start_dir === DIRECTION.TOP || start_dir === DIRECTION.BOTTOM;
  points.length = 0;
  switch (dirSpan) {
    case 0:
      // 都按向右好了
      if (start_dir === DIRECTION.TOP) {
        var y = Math.min(p1[1], p2[1]);
        var yp = y - minSpanY;
        points.push([p1[0], yp]);
        points.push([p2[0], yp]);
      }
      if (start_dir === DIRECTION.BOTTOM) {
        var _y = Math.max(p1[1], p2[1]);
        var _yp = _y + minSpanY;
        points.push([p1[0], _yp]);
        points.push([p2[0], _yp]);
      }
      if (start_dir === DIRECTION.LEFT) {
        var x = Math.min(p1[0], p2[0]);
        var xp = x - minSpanX;
        points.push([xp, p1[1]]);
        points.push([xp, p2[1]]);
      }
      if (start_dir === DIRECTION.RIGHT) {
        var _x = Math.max(p1[0], p2[0]);
        var _xp = _x + minSpanX;
        points.push([_xp, p1[1]]);
        points.push([_xp, p2[1]]);
      }
      break;
    case 1:
    case 3:
      if (isSelf) {
        if (!isVerticalStart) {
          points.push([p1[0] + minSpanX, p1[1]]);
          points.push([p1[0] + minSpanX, p2[1] + minSpanY]);
          points.push([p2[0], p2[1] + minSpanY]);
        } else {
          points.push([p1[0], p1[1] + minSpanY]);
          points.push([p2[0] + minSpanX, p1[1] + minSpanY]);
          points.push([p2[0] + minSpanX, p2[1]]);
        }
      } else {
        var point = isVerticalStart ? [p1[0], p2[1]] : [p2[0], p1[1]];
        points.push(point);
      }
      break;
    case 2:
      var pmiddle = [(p1[0] - p2[0]) / 2 + p2[0], (p1[1] - p2[1]) / 2 + p2[1]];
      if (isVerticalStart) {
        points.push([p1[0], pmiddle[1]]);
        points.push([p2[0], pmiddle[1]]);
      } else {
        points.push([pmiddle[0], p1[1]]);
        points.push([pmiddle[0], p2[1]]);
      }
      break;
    default:
      break;
  }
  points.unshift(p1);
  points.push(p2);
}
function minusVec(p1, p2) {
  return [p1[0] - p2[0], p1[1] - p2[1]];
}
function absVec(vec) {
  return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
}
function scaleVec(vec, scale) {
  return [vec[0] * scale, vec[1] * scale];
}
function makeRadiusFromVector(pbefore, p, pnext, radius) {
  var vec1 = minusVec(p, pbefore);
  var vec2 = minusVec(p, pnext);
  var absVec1 = absVec(vec1);
  var absVec2 = absVec(vec2);
  if (!absVec1 || !absVec2) {
    return {
      p1: null,
      p2: null
    };
  }
  var r1 = scaleVec(vec1, radius / absVec1);
  var r2 = scaleVec(vec2, radius / absVec2);
  return {
    p1: minusVec(p, r1),
    p2: minusVec(p, r2)
  };
}
// 矩形重叠计算
function doOverlap(rec1, rec2) {
  if (rec1[0] == rec1[2] || rec1[1] == rec1[3] || rec2[0] == rec2[2] || rec2[1] == rec2[3]) {
    // the line cannot have positive overlap
    return false;
  }
  return !(rec1[2] <= rec2[0] ||
  // left
  rec1[3] <= rec2[1] ||
  // bottom
  rec1[0] >= rec2[2] ||
  // right
  rec1[1] >= rec2[3]); // top
}

function isPolyLineIntersectionRectange(polyline, rect) {
  var p = polyline[0];
  var l = polyline.length;
  var i = 1;
  var _rect = _slicedToArray(rect, 4),
    l0 = _rect[0],
    l1 = _rect[1],
    r0 = _rect[2],
    r1 = _rect[3];
  while (i < l) {
    var cp = polyline[i];
    if (p[0] === cp[0]) {
      // vertical
      if (p[0] < r0 && p[0] > l0 && !(p[1] > r1 && cp[1] > r1 || p[1] < l1 && cp[1] < l1)) {
        return true;
      }
    } else {
      // horizontal
      if (p[1] < r1 && p[1] > l1 && !(p[0] > r0 && cp[0] > r0 || p[0] < l0 && cp[0] < l0)) {
        return true;
      }
    }
    p = cp;
    i++;
  }
  return false;
}
function debounce(func) {
  var _this = this;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.call(_this);
    }, timeout);
  };
}
function compareBoundingbox(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function copyBoundingbox(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  a[3] = b[3];
}
;// CONCATENATED MODULE: ./src/core/instance/instance.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) instance_setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = instance_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return instance_construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return instance_setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function instance_construct(Parent, args, Class) { if (instance_isNativeReflectConstruct()) { instance_construct = Reflect.construct.bind(); } else { instance_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) instance_setPrototypeOf(instance, Class.prototype); return instance; }; } return instance_construct.apply(null, arguments); }
function instance_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function instance_setPrototypeOf(o, p) { instance_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return instance_setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// import { setUniqueId, getUniqueId } from '../utils/functions';
// import { nextDirection } from '../utils/constance';
// const margin = 5;
var ishitKey = Symbol('ishit');
var isInViewBox = Symbol('isInViewBox');
/**
 * @typedef Instance~Configs
 * @type {object}
 * @property {number} borderWidth      - 边的宽度 默认是 2
 * @property {string} borderColor      - 边框颜色 默认 black
 * @property {string} color            - 填充颜色 默认 white
 * @property {string} shadowColor      - 阴影颜色
 * @property {string} shadowBlur       - 阴影扩散范围
 * @property {string} shadowOffsetX    - 阴影偏移 X
 * @property {string} shadowOffsetX    - 阴影偏移 Y
 */

/** 
 * 图中的最小单元
 * @constructor Instance
 * @extends EventTarget
 * @param {Instance~Configs} configs - 最小单元的一些通用属性配置
 */
var Instance = /*#__PURE__*/function (_EventTarget) {
  _inherits(Instance, _EventTarget);
  var _super = _createSuper(Instance);
  function Instance() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Instance);
    _this = _super.call(this);
    Object.assign(_assertThisInitialized(_this), configs);
    // this.anchor = configs.anchor || [0, 0];
    // this.belongs = undefined;
    /** @member {boolean}      - 元素可见 默认 true */
    _this.visible = true;
    // this._jflow = undefined;
    _this._belongs = undefined;
    _this[ishitKey] = false;

    /** @member {number}      - 边的宽度 默认是 0 */
    _this.borderWidth = configs.borderWidth || 0;
    /** @member {string}     - 边框颜色 默认 transparent */
    _this.borderColor = configs.borderColor || 'transparent';
    /** @member {string}     - 填充颜色 默认 transparent */
    _this.backgroundColor = configs.backgroundColor || 'transparent';
    /** @member {string}     - 阴影颜色 空就不显示阴影 */
    _this.shadowColor = configs.shadowColor;
    /** @member {string}     - 阴影扩散范围 默认 5 */
    _this.shadowBlur = configs.shadowBlur || 5;
    /** @member {string}     - 阴影偏移 X */
    _this.shadowOffsetX = configs.shadowOffsetX || 0;
    /** @member {string}     - 阴影偏移 Y */
    _this.shadowOffsetY = configs.shadowOffsetY || 0;
    /** @member {number}     - 透明度 */
    _this.opacity = configs.opacity || 1;
    _this._boundingrect = [0, 0, 0, 0];
    return _this;
  }
  /**
   * @member {boolean} - 当前单元选中状态
   */
  _createClass(Instance, [{
    key: "_isTargeting",
    get: function get() {
      return this === (this._jflow._target.instance || this._jflow._target.link);
    }
    /**
     * @member {boolean} - 当前单元移动状态
     */
  }, {
    key: "_isMoving",
    get: function get() {
      return this === this._jflow._getMovingTarget() && this._jflow._target.status.movingState; // 移动了之后才能被当做移动状态
    }
    /**
     * @member {boolean}  - 当前单元碰撞检测状态
     */
  }, {
    key: "_isHit",
    get: function get() {
      return this[ishitKey];
    }
    /**
     * @member {JFlow}  - canvas上 jflow 实体
     */,
    set: function set(ishit) {
      if (this[ishitKey] !== ishit) {
        /**
         * 鼠标移入事件
         *
         * @event Instance#mouseenter
         * @type {object}
         * @property {Instance} instance      - 移入的对象 
         */
        /**
         * 鼠标移出事件
         *
         * @event Instance#mouseleave
         * @type {object}
         * @property {Instance} instance      - 移入的对象 
         */
        this.dispatchEvent(new CustomEvent(ishit ? 'mouseenter' : 'mouseleave', {
          detail: {
            instance: this,
            jflow: this._jflow
          }
        }));
      }
      this[ishitKey] = ishit; // validation could be checked here such as only allowing non numerical values
    }
  }, {
    key: "_jflow",
    get: function get() {
      if (!this._belongs) {
        return undefined;
      }
      return this._belongs.uniqueName === 'jflow' ? this._belongs : this._belongs._jflow;
    }
  }, {
    key: "isInViewBox",
    get: function get() {
      return this[isInViewBox];
    }
  }, {
    key: "_isInViewBox",
    set: function set(val) {
      var oldval = this[isInViewBox];
      if (val !== oldval) {
        if (val) {
          this.onEnterViewbox();
        } else {
          this.onLeaveViewbox();
        }
      }
      this[isInViewBox] = val;
    }

    /**
     * 当节点离开可视区域的回调
     */
  }, {
    key: "onEnterViewbox",
    value: function onEnterViewbox() {
      return;
    }

    /**
     * 当节点离开可视区域的回调
     */
  }, {
    key: "onLeaveViewbox",
    value: function onLeaveViewbox() {
      return;
    }

    /**
     * 改变当前配置
     * @param {Configs} configs - The string containing two comma-separated numbers.
     */
  }, {
    key: "setConfig",
    value: function setConfig(configs) {
      var _this2 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this2[k] = configs[k];
        }
      });
    }
    /**
     * 绘制单元
     * @param {Context2d} ctx 
     */
  }, {
    key: "render",
    value: function render(ctx) {
      throw 'require render implement';
    }
    /**
     * 判断当前单元是否被命中
     * @param {number[]} point 
     * @return {Boolean}
     */
  }, {
    key: "isHit",
    value: function isHit(point) {
      throw 'require isHit implement';
    }
    /**
     * 计算当前的最大外接矩形的
     * @return {number[]} [leftx, lefty, rightx, righty]
     */
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      throw 'require getBoundingRect implement';
    }
  }, {
    key: "calculateIntersection",
    value: function calculateIntersection() {
      throw 'require calculateIntersection implement';
    }
    /**
     * 计算当前连线接入点的位置
     * @return {Object} intersection 交叉点
     * @return {number} intersection[DIRECTION.TOP] 上
     * @return {number} intersection[DIRECTION.BOTTOM] 下
     * @return {number} intersection[DIRECTION.LEFT] 上
     * @return {number} intersection[DIRECTION.RIGHT] 右
     */
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      throw 'require getIntersectionsInFourDimension implement';
    }

    /**
     * 获取当前所在层级的坐标
     * @return {Number[]} 坐标
     */
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.anchor;
    }
    /**
     * 获取宽高
     * @return {Object} demension 宽高
     * @return {number} demension.width 宽
     * @return {number} demension.height 高
     */
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      var rect = instance.getBoundingRect();
      var min_y = Infinity;
      var max_y = -Infinity;
      var min_x = Infinity;
      var max_x = -Infinity;
      rect.forEach(function (point) {
        max_y = Math.max(max_y, point[1]);
        min_y = Math.min(min_y, point[1]);
        max_x = Math.max(max_x, point[0]);
        min_x = Math.min(min_x, point[0]);
      });
      return {
        height: max_y - min_y,
        width: max_x - min_x
      };
    }
    /**
     * 冒泡事件
     * @param {JFlowEvent} customEvent 自定义事件
     */
  }, {
    key: "bubbleEvent",
    value: function bubbleEvent(customEvent) {
      customEvent.detail.currentTarget = this;
      this.dispatchEvent(customEvent);
      if (customEvent.detail.bubbles) {
        if (this._belongs.bubbleEvent) {
          this._belongs.bubbleEvent(customEvent);
        } else {
          this._belongs.dispatchEvent(customEvent);
        }
      }
    }
    /**
     * 反算回页面的像素坐标
     * @param {Number[]} point
     * @return {Number[]} 世界坐标
     */
  }, {
    key: "calculateToRealWorld",
    value: function calculateToRealWorld(point) {
      if (this._belongs && this._belongs.calculateToRealWorld) {
        return this._belongs.calculateToRealWorld(point);
      } else {
        return point;
      }
    }
  }, {
    key: "calculateToRealWorldWithPointer",
    value: function calculateToRealWorldWithPointer(outpoint, inpoint) {
      if (this._belongs && this._belongs.calculateToRealWorldWithPointer) {
        this._belongs.calculateToRealWorldWithPointer(outpoint, inpoint);
      }
    }
  }, {
    key: "calculateToRealWorldWithScalar",
    value: function calculateToRealWorldWithScalar(length) {
      return this._jflow.scale * length;
    }

    /**
     * 从当前布局中删除虚拟布局节点
     */
    // removeFromLayoutSource() {
    //     if(this._layoutNode) {
    //         this._layoutNode.remove();
    //     }
    // }
  }, {
    key: "recalculateUp",
    value: function recalculateUp() {
      if (this._belongs) {
        this._belongs.recalculateUp();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // this._belongs = undefined;
      // this.removeEventListener();
    }
  }]);
  return Instance;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));
/* harmony default export */ const instance_instance = (Instance);
;// CONCATENATED MODULE: ./src/core/instance/node.js
function node_typeof(obj) { "@babel/helpers - typeof"; return node_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, node_typeof(obj); }
function node_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function node_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, node_toPropertyKey(descriptor.key), descriptor); } }
function node_createClass(Constructor, protoProps, staticProps) { if (protoProps) node_defineProperties(Constructor.prototype, protoProps); if (staticProps) node_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function node_toPropertyKey(arg) { var key = node_toPrimitive(arg, "string"); return node_typeof(key) === "symbol" ? key : String(key); }
function node_toPrimitive(input, hint) { if (node_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (node_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function node_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) node_setPrototypeOf(subClass, superClass); }
function node_setPrototypeOf(o, p) { node_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return node_setPrototypeOf(o, p); }
function node_createSuper(Derived) { var hasNativeReflectConstruct = node_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = node_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = node_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return node_possibleConstructorReturn(this, result); }; }
function node_possibleConstructorReturn(self, call) { if (call && (node_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return node_assertThisInitialized(self); }
function node_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function node_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function node_getPrototypeOf(o) { node_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return node_getPrototypeOf(o); }



/**
 * 绝对定位 配置， 绝对定位不受布局影响，相对于当前组来定位
 * @typedef {object} Node~AbsolutePosition 
 * @property {number} top       - 上距离
 * @property {number} bottom    - 下距离
 * @property {number} right     - 右距离
 * @property {number} left      - 左距离
 */
/**
 * Node 配置
 * @typedef {Instance~Configs} Node~Configs 
 * @property {number[]} anchor - 坐标
 * @property {Node~AbsolutePosition} absolutePosition - 绝对定位位置
 */
/**
 * 节点基类
 * @constructor Node
 * @extends Instance
 * @param {Node~Configs} configs - 节点配置
 */
var Node = /*#__PURE__*/function (_Instance) {
  node_inherits(Node, _Instance);
  var _super = node_createSuper(Node);
  function Node() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    node_classCallCheck(this, Node);
    _this = _super.call(this, configs);
    _this._rawConfigs = configs;
    // for layout
    /** @member {number[]} */
    _this.anchor = configs.anchor || [0, 0];
    /** @member {Node~AbsolutePosition} */
    _this.absolutePosition = configs.absolutePosition;
    return _this;
  }
  node_createClass(Node, [{
    key: "setConfig",
    value: function setConfig(configs) {
      var _this2 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this2[k] = configs[k];
          _this2._rawConfigs[k] = configs[k];
        }
      });
    }
  }, {
    key: "setAnchorX",
    value: function setAnchorX(x) {
      this.anchor[0] = x;
    }
  }, {
    key: "setAnchorY",
    value: function setAnchorY(y) {
      this.anchor[1] = y;
    }
  }, {
    key: "setAnchor",
    value: function setAnchor(x, y) {
      this.anchor[0] = x;
      this.anchor[1] = y;
    }
  }, {
    key: "beforeRender",
    value: function beforeRender() {
      return doOverlap(this._belongs._getViewBox(), this.getBoundingRect());
    }

    /**
     * 克隆当前节点.
     * @return {Node} 当前节点的副本
     */
  }, {
    key: "clone",
    value: function clone() {
      var C = this.constructor;
      var t = new C(this._rawConfigs);
      t.visible = this.visible;
      return t;
    }
  }]);
  return Node;
}(instance_instance);
/* harmony default export */ const node = (Node);
;// CONCATENATED MODULE: ./src/core/instance/ghostNode.js
function ghostNode_typeof(obj) { "@babel/helpers - typeof"; return ghostNode_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ghostNode_typeof(obj); }
function _defineProperty(obj, key, value) { key = ghostNode_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ghostNode_slicedToArray(arr, i) { return ghostNode_arrayWithHoles(arr) || ghostNode_iterableToArrayLimit(arr, i) || ghostNode_unsupportedIterableToArray(arr, i) || ghostNode_nonIterableRest(); }
function ghostNode_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ghostNode_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ghostNode_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ghostNode_arrayLikeToArray(o, minLen); }
function ghostNode_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ghostNode_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ghostNode_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ghostNode_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ghostNode_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ghostNode_toPropertyKey(descriptor.key), descriptor); } }
function ghostNode_createClass(Constructor, protoProps, staticProps) { if (protoProps) ghostNode_defineProperties(Constructor.prototype, protoProps); if (staticProps) ghostNode_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ghostNode_toPropertyKey(arg) { var key = ghostNode_toPrimitive(arg, "string"); return ghostNode_typeof(key) === "symbol" ? key : String(key); }
function ghostNode_toPrimitive(input, hint) { if (ghostNode_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ghostNode_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ghostNode_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ghostNode_setPrototypeOf(subClass, superClass); }
function ghostNode_setPrototypeOf(o, p) { ghostNode_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ghostNode_setPrototypeOf(o, p); }
function ghostNode_createSuper(Derived) { var hasNativeReflectConstruct = ghostNode_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ghostNode_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ghostNode_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ghostNode_possibleConstructorReturn(this, result); }; }
function ghostNode_possibleConstructorReturn(self, call) { if (call && (ghostNode_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ghostNode_assertThisInitialized(self); }
function ghostNode_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ghostNode_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ghostNode_getPrototypeOf(o) { ghostNode_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ghostNode_getPrototypeOf(o); }


var GhostNode = /*#__PURE__*/function (_Node) {
  ghostNode_inherits(GhostNode, _Node);
  var _super = ghostNode_createSuper(GhostNode);
  function GhostNode(configs) {
    ghostNode_classCallCheck(this, GhostNode);
    return _super.call(this, configs);
  }
  ghostNode_createClass(GhostNode, [{
    key: "render",
    value: function render(ctx) {}
  }, {
    key: "isHit",
    value: function isHit(point) {
      return false;
    }
  }, {
    key: "calculateIntersection",
    value: function calculateIntersection(point) {
      return this.anchor;
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var _this$anchor = ghostNode_slicedToArray(this.anchor, 2),
        x2 = _this$anchor[0],
        y2 = _this$anchor[1];
      return [x2, y2, x2, y2];
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var _this$anchor2 = ghostNode_slicedToArray(this.anchor, 2),
        x2 = _this$anchor2[0],
        y2 = _this$anchor2[1];
      return _ref = {}, _defineProperty(_ref, DIRECTION.RIGHT, [x2 + 1, y2]), _defineProperty(_ref, DIRECTION.LEFT, [x2 - 1, y2]), _defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + 1]), _defineProperty(_ref, DIRECTION.TOP, [x2, y2 - 1]), _ref;
    }
  }]);
  return GhostNode;
}(node);
/* harmony default export */ const ghostNode = (GhostNode);
;// CONCATENATED MODULE: ./src/core/instance/nodeWeakMap.js
function nodeWeakMap_typeof(obj) { "@babel/helpers - typeof"; return nodeWeakMap_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, nodeWeakMap_typeof(obj); }
function nodeWeakMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function nodeWeakMap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, nodeWeakMap_toPropertyKey(descriptor.key), descriptor); } }
function nodeWeakMap_createClass(Constructor, protoProps, staticProps) { if (protoProps) nodeWeakMap_defineProperties(Constructor.prototype, protoProps); if (staticProps) nodeWeakMap_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function nodeWeakMap_toPropertyKey(arg) { var key = nodeWeakMap_toPrimitive(arg, "string"); return nodeWeakMap_typeof(key) === "symbol" ? key : String(key); }
function nodeWeakMap_toPrimitive(input, hint) { if (nodeWeakMap_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (nodeWeakMap_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getMapObject() {
  return {
    layoutNode: undefined,
    jflowNode: undefined,
    jflowlinks: [],
    jflowFromLinks: [],
    jflowToLinks: []
  };
}
var NodeWeakMap = /*#__PURE__*/function () {
  function NodeWeakMap() {
    nodeWeakMap_classCallCheck(this, NodeWeakMap);
    this._map = new Map();
  }
  nodeWeakMap_createClass(NodeWeakMap, [{
    key: "get",
    value: function get(source) {
      return this._map.get(source);
    }
  }, {
    key: "set",
    value: function set(source) {
      var obj = getMapObject();
      this._map.set(source, obj);
      return obj;
    }
  }, {
    key: "has",
    value: function has(source) {
      return this._map.has(source);
    }
  }, {
    key: "delete",
    value: function _delete(source) {
      this._map["delete"](source);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._map.clear();
    }
  }]);
  return NodeWeakMap;
}();
var NodeWeakMapMixin = {
  initNodeWeakMap: function initNodeWeakMap() {
    this.source_Layout_Render_NodeMap = new NodeWeakMap();
  },
  getRenderNodeBySource: function getRenderNodeBySource(source) {
    var mapping = this.source_Layout_Render_NodeMap.get(source);
    if (mapping) {
      return mapping.jflowNode;
    }
    return undefined;
  },
  getLayoutNodeBySource: function getLayoutNodeBySource(source) {
    var mapping = this.source_Layout_Render_NodeMap.get(source);
    if (mapping) {
      return mapping.layoutNode;
    }
    return undefined;
  },
  getSourceRenderMeta: function getSourceRenderMeta(source) {
    var map = this.source_Layout_Render_NodeMap;
    return map.get(source);
  },
  _getMap: function _getMap(source) {
    var map = this.source_Layout_Render_NodeMap;
    var obj;
    if (map.has(source)) {
      obj = map.get(source);
    } else {
      obj = map.set(source);
    }
    return obj;
  },
  setLayoutNodeBySource: function setLayoutNodeBySource(source, layoutNode) {
    var obj = this._getMap(source);
    obj.layoutNode = layoutNode;
  },
  setRenderNodeBySource: function setRenderNodeBySource(source, instance) {
    var obj = this._getMap(source);
    obj.jflowNode = instance;
  },
  addLinkNodeBySource: function addLinkNodeBySource(sourceFrom, sourceTo, link) {
    var obj = this._getMap(sourceFrom);
    obj.jflowFromLinks.push(link);
    obj = this._getMap(sourceTo);
    obj.jflowToLinks.push(link);
  },
  removeLinkNodeBySource: function removeLinkNodeBySource(sourceFrom, sourceTo, link) {
    var map = this.source_Layout_Render_NodeMap;
    var obj = map.get(sourceFrom);
    if (obj) {
      var idx = obj.jflowFromLinks.findIndex(function (l) {
        return l === link;
      });
      if (idx !== -1) {
        obj.jflowFromLinks.splice(idx, 1);
      }
    }
    obj = map.get(sourceTo);
    if (obj) {
      var _idx = obj.jflowToLinks.findIndex(function (l) {
        return l === link;
      });
      if (_idx !== -1) {
        obj.jflowToLinks.splice(_idx, 1);
      }
    }
  }
};
/* harmony default export */ const nodeWeakMap = ((/* unused pure expression or super */ null && (NodeWeakMap)));
;// CONCATENATED MODULE: ./src/core/instance/stack.js
function stack_typeof(obj) { "@babel/helpers - typeof"; return stack_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, stack_typeof(obj); }
function stack_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function stack_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, stack_toPropertyKey(descriptor.key), descriptor); } }
function stack_createClass(Constructor, protoProps, staticProps) { if (protoProps) stack_defineProperties(Constructor.prototype, protoProps); if (staticProps) stack_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function stack_toPropertyKey(arg) { var key = stack_toPrimitive(arg, "string"); return stack_typeof(key) === "symbol" ? key : String(key); }
function stack_toPrimitive(input, hint) { if (stack_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (stack_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function stack_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) stack_setPrototypeOf(subClass, superClass); }
function stack_createSuper(Derived) { var hasNativeReflectConstruct = stack_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = stack_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = stack_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return stack_possibleConstructorReturn(this, result); }; }
function stack_possibleConstructorReturn(self, call) { if (call && (stack_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return stack_assertThisInitialized(self); }
function stack_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function stack_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; stack_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !stack_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return stack_construct(Class, arguments, stack_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return stack_setPrototypeOf(Wrapper, Class); }; return stack_wrapNativeSuper(Class); }
function stack_construct(Parent, args, Class) { if (stack_isNativeReflectConstruct()) { stack_construct = Reflect.construct.bind(); } else { stack_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) stack_setPrototypeOf(instance, Class.prototype); return instance; }; } return stack_construct.apply(null, arguments); }
function stack_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function stack_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function stack_setPrototypeOf(o, p) { stack_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return stack_setPrototypeOf(o, p); }
function stack_getPrototypeOf(o) { stack_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return stack_getPrototypeOf(o); }
/**
 * 绘图栈
 * @extends Array
 */
var InstanceStack = /*#__PURE__*/function (_Array) {
  stack_inherits(InstanceStack, _Array);
  var _super = stack_createSuper(InstanceStack);
  function InstanceStack() {
    var _this;
    stack_classCallCheck(this, InstanceStack);
    _this = _super.call(this);
    _this._currentHit = null;
    return _this;
  }
  /**
   * 绘制当前栈
   * @param {Context2d} ctx - canvas context2d
   */
  stack_createClass(InstanceStack, [{
    key: "render",
    value: function render(ctx, condition) {
      var movingTarget;
      this.forEach(function (instance) {
        if (instance._isMoving) {
          movingTarget = instance;
          return;
        }
        if (instance.visible && (!condition || condition(instance))) {
          if (instance.beforeRender) {
            if (!instance.beforeRender(ctx)) {
              return;
            }
          }
          ctx.save();
          instance.render(ctx);
          ctx.restore();
        }
      });
      if (movingTarget) {
        ctx.save();
        // if(movingTarget.reflow && !movingTarget._reflowed) {
        //     movingTarget.reflow();
        //     movingTarget._reflowed = true;
        // }
        movingTarget.render(ctx);
        ctx.restore();
      }
    }
  }, {
    key: "resetHitStatus",
    value: function resetHitStatus() {
      this._currentHit = null;
      this.forEach(function (i) {
        if (i._stack) {
          i._stack.resetHitStatus();
        }
        i._isHit = false;
      });
    }

    /**
     * 碰撞对象过滤条件
     * @name InstanceStack~InstanceFilter
     * @function
     * @param {Instance} instance - 当前对象
    */
    /**
     * 碰撞检测
     * @param {number[]} point - 碰撞点
     * @param {InstanceStack~InstanceFilter} condition - 碰撞对象过滤条件
     * @return {Instance}
     */
  }, {
    key: "checkHit",
    value: function checkHit(point, condition, currentConstraint) {
      var i = this.length - 1;
      while (i >= 0) {
        var instance = this[i];
        if (instance.visible && !instance.ignoreHit) {
          if (condition && condition(instance)) {
            i--;
            continue;
          }
          if (currentConstraint && !currentConstraint(instance)) {
            i--;
            continue;
          }
          var ishit = instance.isHit(point, condition);
          if (ishit) {
            if (this._currentHit !== instance) {
              if (this._currentHit) {
                this._currentHit._isHit = false;
              }
              instance._isHit = true;
              this._currentHit = instance;
            }
            if (typeof ishit !== 'boolean') {
              return ishit;
            }
            return instance;
          } else {
            instance._isHit = false;
          }
        }
        i--;
      }
      if (this._currentHit) {
        this._currentHit._isHit = false;
      }
      this._currentHit = null;
      return null;
    }
    /**
     * 获取当前层栈的最小外接矩形
     * @return {number[][]} - 外接矩形坐标
     */
  }, {
    key: "getBoundingRectPoints",
    value: function getBoundingRectPoints() {
      var points = [];
      this.forEach(function (instance) {
        if (instance.visible && !instance.absolutePosition) {
          var rect = instance.getBoundingRect();
          points.push([rect[0], rect[1]]);
          points.push([rect[2], rect[3]]);
        }
      });
      return points;
    }

    /**
     * 获取当前层栈的锚点矩形
     * @return {number[][]} - 锚点矩形坐标
     */
  }, {
    key: "getAnchorRectPoints",
    value: function getAnchorRectPoints() {
      var points = [];
      this.forEach(function (instance) {
        if (instance.visible && !instance.absolutePosition) {
          points.push(instance.anchor);
        }
      });
      return points;
    }
  }]);
  return InstanceStack;
}( /*#__PURE__*/stack_wrapNativeSuper(Array));
/* harmony default export */ const stack = (InstanceStack);
;// CONCATENATED MODULE: ./src/core/instance/stackMixin.js

// import { setUniqueId, getUniqueId } from '../utils/functions';
/**
 * 对象栈 mixin 用于方便控制节点栈和连线栈
 *
 * @mixin
 */
var StackMixin = {
  /** @property {Node[]}          - 对象数组 */
  instances: [],
  /** @property {BaseLink[]}      - 连线数组 */
  links: [],
  /** @property {InstanceStack}       - 对象栈 */
  _stack: null,
  /** @property {InstanceStack}       - 连线栈 */
  _linkStack: null,
  /**
   * 初始化对象栈
   * @param {JflowConfigs} configs - 配置
   */
  initStack: function initStack(_ref) {
    var _this = this;
    var data = _ref.data;
    this._stack = new stack();
    this._linkStack = new stack();
    if (!data) return;
    this.instances = data.instances;
    this.links = data.links;
    this.instances.forEach(function (i) {
      _this._stack.push(i);
      i._belongs = _this;
    });
    this.links.forEach(function (link) {
      _this._linkStack.push(link);
      link._belongs = _this;
    });
  },
  /**
   * 加入节点对象
   * @param {Node} instance - 节点对象
   */
  addToStack: function addToStack(instance) {
    instance._belongs = this;
    this._stack.push(instance);
    // this.recalculate()
  },
  /**
   * 替换对象
   * @param {Instance} target - 被替换的对象
   * @param {Instance} instance - 替换对象
   */
  replaceFromStack: function replaceFromStack(target, instance) {
    var index = this._stack.findIndex(function (i) {
      return i === target;
    });
    this._stack.splice(index, 1, instance);
    target._belongs = null;
    instance._belongs = this;
    // this.recalculate()
  },
  /**
   * 加入连线对象
   * @param {BaseLink} instance - 连线对象
   */
  addToLinkStack: function addToLinkStack(link) {
    link._belongs = this;
    this._linkStack.push(link);
  },
  /**
   * 删除节点对象
   * @param {Node} target - 节点对象
   */
  removeFromStack: function removeFromStack(target) {
    // this.removeLinkOnInstance(target);
    var index = this._stack.findIndex(function (i) {
      return i === target;
    });
    if (index !== -1) {
      this._stack.splice(index, 1);
    }
    // this.recalculate()
  },
  /**
   * 删除连线对象
   * @param {Node} target - 连线对象
   */
  removeFromLinkStack: function removeFromLinkStack(target) {
    var index = this._linkStack.findIndex(function (i) {
      return i === target;
    });
    if (index !== -1) {
      this._linkStack.splice(index, 1);
    }
  },
  emptyLink: function emptyLink() {
    this._linkStack = new stack();
  },
  /**
   * 重置当前栈中对象的位置
   */
  resetChildrenPosition: function resetChildrenPosition() {
    this._stack.forEach(function (i) {
      i.anchor = [0, 0];
    });
  },
  addInstanceToLink: function addInstanceToLink(targetLink, instance) {
    this.addToStack(instance);
    var from = targetLink.from,
      to = targetLink.to;
    var index = this._linkStack.findIndex(function (l) {
      return l === targetLink;
    });
    var _constuctor = targetLink.__proto__.constructor;
    var l1 = new _constuctor({
      from: from,
      to: instance
    });
    l1._belongs = this;
    var l2 = new _constuctor({
      from: instance,
      to: to
    });
    l2._belongs = this;
    this._linkStack.splice(index, 1, l1, l2);
  },
  /**
   * 循环当前栈中节点
   * @property {stackIteratorCallback} 循环访问栈中每个节点
   */
  interateNodeStack: function interateNodeStack(callback) {
    this._stack.forEach(function (instance) {
      callback(instance);
    });
  }
  /**
  * 循环访问栈中每个节点
  * @callback stackIteratorCallback
  * @param {Node} instance 栈中节点
  */
};
/* harmony default export */ const stackMixin = (StackMixin);
;// CONCATENATED MODULE: ./src/core/instance/layoutMixin.js
/**
 * Layout mixin 配置
 * @typedef {Object} LayoutMixin~LayoutConfigs
 * @property {Layout} layout             - 布局对象 
 */
/**
 * 布局 mixin 用于注册和方便控制布局
 *
 * @mixin
 */
var LayoutMixin = {
  /** @property {Layout}      - 布局对象 */
  _layout: null,
  /**
   * 初始化布局
   * @param {LayoutMixin~LayoutConfigs} configs - 配置
   */
  initLayout: function initLayout(configs) {
    this._layout = configs.layout;
  },
  /**
   * 从当前层出发，向上层递归重排
   */
  recalculateUp: function recalculateUp() {
    var _this$_belongs;
    var dirty = true;
    if (this.getBoundingDimension) {
      var _this$getBoundingDime = this.getBoundingDimension(),
        wold = _this$getBoundingDime.width,
        hold = _this$getBoundingDime.height;
      if (this.resetChildrenPosition) {
        this.resetChildrenPosition();
      }
      if (this._getBoundingGroupRect) {
        this._getBoundingGroupRect();
      }
      this.reflow();
      if (this._getBoundingGroupRect) {
        this._getBoundingGroupRect();
      }
      var _this$getBoundingDime2 = this.getBoundingDimension(),
        wnow = _this$getBoundingDime2.width,
        hnow = _this$getBoundingDime2.height;
      dirty = wold !== wnow || hold !== hnow;
    } else {
      this.reflow();
    }
    if (this._belongs && dirty) {
      this._belongs.recalculateUp();
    }
    if (!dirty || ((_this$_belongs = this._belongs) === null || _this$_belongs === void 0 ? void 0 : _this$_belongs.uniqueName) === 'jflow') {
      this.recalculateDown();
    }
  },
  recalculateDown: function recalculateDown() {
    if (this._layout && this._layout.reflowAfter) {
      this._layout.reflowAfter(this);
    }
    this._stack.forEach(function (instance) {
      if (instance.recalculateDown) {
        instance.recalculateDown();
      }
    });
  },
  /**
   * 重新计算布局，相当于浏览器里面重排，并重算当前布局下的最小外接矩形
   */
  recalculate: function recalculate() {
    this.reflow();
    if (this._getBoundingGroupRect) {
      this._getBoundingGroupRect();
    }
  },
  /**
   * 布局静态检查
   * @param {Instance} instance - 检查单元
   * @return {Boolean} - 检查结果 
   */
  staticCheck: function staticCheck(instance) {
    if (this._layout) {
      return this._layout.staticCheck(instance, this);
    }
    return false;
  },
  /**
   * 重新计算布局，相当于浏览器里面重排
   */
  reflow: function reflow() {
    if (this._layout) {
      this._layout.reflow(this);
    }
  }
};
/* harmony default export */ const layoutMixin = (LayoutMixin);
;// CONCATENATED MODULE: ./src/core/instance/messageMixin.js
/**
 * 消息 mixin 用于给Jflow传递消息
 *
 * @mixin
 */
var MessageMixin = {
  _message: null,
  /**
   * 发送消息
   * @param {Object} msg - 消息体
   */
  sendMessage: function sendMessage(msg) {
    this._message = msg;
  },
  /**
   * 接收消息
   * @return {Object} msg - 消息体
   */
  consumeMessage: function consumeMessage() {
    var msg = this._message;
    this._message = null;
    return msg;
  },
  readMessage: function readMessage() {
    return this._message;
  }
};
/* harmony default export */ const messageMixin = (MessageMixin);
;// CONCATENATED MODULE: ./src/core/anime/animeMixin.js
/* harmony default export */ const animeMixin = ({
  initAnime: function initAnime() {
    this.anime_queue = [];
    this.__animeClock__ = undefined;
    // this.animeclock = undefined;
    // this.frameRendered = false;
  },
  // setAnimeClock(time) {
  //     if(time !== this.animeclock) {
  //         this.frameRendered = false;
  //         this.animeclock = time;
  //     }
  // },
  // hasAnimeAndFrameRendered() {
  //     return this.anime_queue.length && this.frameRendered;
  // },
  // setFrameRendered() {
  //     if(this.anime_queue.length) {
  //         this.frameRendered = true;
  //     }
  // },
  requestJFlowAnime: function requestJFlowAnime(frameCallBack) {
    var meta = this.enqueueAnime(frameCallBack);
    this._runAnime();
    return meta;
  },
  enqueueAnime: function enqueueAnime(callback) {
    var _this = this;
    var animeMeta = {
      start: undefined,
      callback: callback,
      cancel: function cancel() {
        _this._cancelAnime(animeMeta);
        _this._render();
      }
    };
    this.anime_queue.push(animeMeta);
    return animeMeta;
  },
  _cancelAnime: function _cancelAnime(meta) {
    var idx = this.anime_queue.findIndex(function (m) {
      return m === meta;
    });
    ~idx && this.anime_queue.splice(idx, 1);
  },
  runAnime: function runAnime() {
    this._runAnime();
    // requestAnimationFrame(this._runAnime.bind(this));
  },
  _runAnime: function _runAnime() {
    var _this2 = this;
    if (this.anime_queue.length) {
      requestAnimationFrame(function () {
        _this2.scheduleRender();
        _this2._runAnime();
      });
      // requestAnimationFrame(this._runAnime.bind(this))
    }
  },
  runAnimeFrame: function runAnimeFrame() {
    this.anime_queue.forEach(function (meta) {
      var timestamp = Date.now();
      if (!meta.start) {
        meta.start = timestamp;
      }
      var elapsed = timestamp - meta.start;
      meta.callback(elapsed);
    });
  }
});
;// CONCATENATED MODULE: ./src/core/miniMap/minimap-mixin.js
function minimap_mixin_slicedToArray(arr, i) { return minimap_mixin_arrayWithHoles(arr) || minimap_mixin_iterableToArrayLimit(arr, i) || minimap_mixin_unsupportedIterableToArray(arr, i) || minimap_mixin_nonIterableRest(); }
function minimap_mixin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function minimap_mixin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return minimap_mixin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return minimap_mixin_arrayLikeToArray(o, minLen); }
function minimap_mixin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function minimap_mixin_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function minimap_mixin_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* harmony default export */ const minimap_mixin = ({
  // 传入一个别的 context2d 来绘制
  captureMap: function captureMap(wrapper, _ref) {
    var _this = this;
    var _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'normal' : _ref$placement;
    this._getBoundingGroupRect();
    var _this$bounding_box = this.bounding_box,
      p_width = _this$bounding_box.width,
      p_height = _this$bounding_box.height,
      p_x = _this$bounding_box.x,
      p_y = _this$bounding_box.y;
    var miniMap = this.miniMap;
    if (!miniMap) {
      this.miniMap = createCanvas(wrapper);
      var _this$miniMap = this.miniMap,
        _width = _this$miniMap.width,
        _height = _this$miniMap.height,
        _raw_width = _this$miniMap.raw_width,
        _raw_height = _this$miniMap.raw_height;
      this.addEventListener('zoompan', function () {
        _this._renderMap && _this._renderMap();
      });
      var pressDown = false;
      this.miniMap.canvas.addEventListener('pointerdown', function (event) {
        var offsetX = event.offsetX,
          offsetY = event.offsetY,
          deltaX = event.deltaX,
          deltaY = event.deltaY;
        pressDown = true;
        _this._onMoveMap && _this._onMoveMap(offsetX, offsetY);
      });
      this.miniMap.canvas.addEventListener('pointermove', function (event) {
        var offsetX = event.offsetX,
          offsetY = event.offsetY,
          deltaX = event.deltaX,
          deltaY = event.deltaY;
        if (pressDown) {
          _this._onMoveMap && _this._onMoveMap(offsetX, offsetY);
        }
        if (offsetY < 5 || offsetX < 5 || offsetX > _width - 5 || offsetY > _height - 5) {
          pressDown = false;
        }
      });
      this.miniMap.canvas.addEventListener('pointerup', function () {
        pressDown = false;
      });
      var caheCanvas = document.createElement('canvas');
      caheCanvas.width = _raw_width;
      caheCanvas.height = _raw_height;
      this.cacheMinimapCtx = caheCanvas.getContext('2d');
    }
    var _this$miniMap2 = this.miniMap,
      width = _this$miniMap2.width,
      height = _this$miniMap2.height,
      raw_width = _this$miniMap2.raw_width,
      raw_height = _this$miniMap2.raw_height,
      left = _this$miniMap2.left,
      top = _this$miniMap2.top,
      scale = _this$miniMap2.scale,
      ctx = _this$miniMap2.ctx;
    var pad2 = padding * 2;
    var pad = padding;
    var r1 = (width - pad2) / p_width;
    var r2 = (height - pad2) / p_height;
    var r = Math.min(r1, r2);
    var m_x = 0;
    var m_y = 0;
    if (placement === 'center') {
      m_y = (height - p_height * r) / 2 - p_y * r;
      m_x = (width - p_width * r) / 2 - p_x * r;
    } else {
      if (r1 < r2) {
        m_y = (height - p_height * r) / 2 - p_y * r;
        m_x = pad;
      } else {
        m_x = (width - p_width * r) / 2 - p_x * r;
        m_y = pad;
      }
    }
    var cachectx = this.cacheMinimapCtx;
    cachectx.setTransform();
    cachectx.clearRect(0, 0, raw_width, raw_height);
    cachectx.scale(scale, scale);
    cachectx.transform(r, 0, 0, r, m_x, m_y);
    // ctx.fillStyle = 'red';
    // ctx.arc( 30, 30, 100, 0, 2*Math.PI);
    // ctx.fill()
    // debugger
    var br = [0, 0, 0, 0];
    if (this.NodeRenderTop) {
      this._linkStack.render(cachectx, function (link) {
        link.isInViewBox(br);
        return true;
      });
      // this._linkStack.render(cachectx);
      this._stack.render(cachectx);
    } else {
      this._stack.render(cachectx);
      this._linkStack.render(cachectx, function (link) {
        link.isInViewBox(br);
        return true;
      });
    }
    var _cacheMapImageData = cachectx.getImageData(0, 0, raw_width, raw_height);
    this._renderMap = function () {
      ctx.save();
      ctx.setTransform();
      ctx.clearRect(0, 0, raw_width, raw_height);
      // if(!i) {
      ctx.scale(scale, scale);
      ctx.putImageData(_cacheMapImageData, 0, 0);
      ctx.transform(r, 0, 0, r, m_x, m_y);
      var _this$_getViewBox = _this._getViewBox(),
        _this$_getViewBox2 = minimap_mixin_slicedToArray(_this$_getViewBox, 4),
        x = _this$_getViewBox2[0],
        y = _this$_getViewBox2[1],
        t = _this$_getViewBox2[2],
        d = _this$_getViewBox2[3];
      ctx.beginPath();
      ctx.rect(x, y, t - x, d - y);
      ctx.setTransform();
      ctx.rect(0, 0, raw_width, raw_height);
      ctx.clip("evenodd");
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(0, 0, raw_width, raw_height);
      ctx.restore();
      // }
    };

    this._renderMap();
    this._onMoveMap = function (offsetX, offsetY) {
      var _this$_getViewBox3 = _this._getViewBox(),
        _this$_getViewBox4 = minimap_mixin_slicedToArray(_this$_getViewBox3, 4),
        x = _this$_getViewBox4[0],
        y = _this$_getViewBox4[1],
        t = _this$_getViewBox4[2],
        d = _this$_getViewBox4[3];
      // const w = t-x;
      var a = (t - x) / 2 + x;
      var b = (d - y) / 2 + y;
      var p = [a * r + m_x, b * r + m_y];
      _this._recalculatePosition((p[0] - offsetX) / r * _this.scale, (p[1] - offsetY) / r * _this.scale);
      _this._render();
      _this._renderMap();
    };
    // this._render(ctx);
  }
});
;// CONCATENATED MODULE: ./src/core/events/index.js
function events_typeof(obj) { "@babel/helpers - typeof"; return events_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, events_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { events_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function events_defineProperty(obj, key, value) { key = events_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function events_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, events_toPropertyKey(descriptor.key), descriptor); } }
function events_createClass(Constructor, protoProps, staticProps) { if (protoProps) events_defineProperties(Constructor.prototype, protoProps); if (staticProps) events_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function events_toPropertyKey(arg) { var key = events_toPrimitive(arg, "string"); return events_typeof(key) === "symbol" ? key : String(key); }
function events_toPrimitive(input, hint) { if (events_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (events_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function events_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function events_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) events_setPrototypeOf(subClass, superClass); }
function events_createSuper(Derived) { var hasNativeReflectConstruct = events_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = events_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = events_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return events_possibleConstructorReturn(this, result); }; }
function events_possibleConstructorReturn(self, call) { if (call && (events_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return events_assertThisInitialized(self); }
function events_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function events_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; events_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !events_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return events_construct(Class, arguments, events_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return events_setPrototypeOf(Wrapper, Class); }; return events_wrapNativeSuper(Class); }
function events_construct(Parent, args, Class) { if (events_isNativeReflectConstruct()) { events_construct = Reflect.construct.bind(); } else { events_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) events_setPrototypeOf(instance, Class.prototype); return instance; }; } return events_construct.apply(null, arguments); }
function events_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function events_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function events_setPrototypeOf(o, p) { events_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return events_setPrototypeOf(o, p); }
function events_getPrototypeOf(o) { events_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return events_getPrototypeOf(o); }
/**
 * JFlow 抛出事件
 * @extends CustomEvent
 * @property {Event}  originEvent      - 原始事件
 * @property {Instance} target         - 事件触发对象
 * @property {JFlow} jflow             - JFlow 对象
 * @property {boolean} bubbles         - 冒泡标识
 */
var JFlowEvent = /*#__PURE__*/function (_CustomEvent) {
  events_inherits(JFlowEvent, _CustomEvent);
  var _super = events_createSuper(JFlowEvent);
  function JFlowEvent(event) {
    var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    events_classCallCheck(this, JFlowEvent);
    var detail = _objectSpread(_objectSpread({}, configs), {}, {
      originEvent: configs.event,
      target: configs.target,
      jflow: configs.jflow,
      bubbles: configs.bubbles || false
    });
    return _super.call(this, event, {
      detail: detail
    });
  }
  return events_createClass(JFlowEvent);
}( /*#__PURE__*/events_wrapNativeSuper(CustomEvent));
/* harmony default export */ const events = (JFlowEvent);
;// CONCATENATED MODULE: ./src/core/scrollbar/scrollbarMixin.js
function scrollbarMixin_typeof(obj) { "@babel/helpers - typeof"; return scrollbarMixin_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, scrollbarMixin_typeof(obj); }
function scrollbarMixin_slicedToArray(arr, i) { return scrollbarMixin_arrayWithHoles(arr) || scrollbarMixin_iterableToArrayLimit(arr, i) || scrollbarMixin_unsupportedIterableToArray(arr, i) || scrollbarMixin_nonIterableRest(); }
function scrollbarMixin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function scrollbarMixin_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return scrollbarMixin_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return scrollbarMixin_arrayLikeToArray(o, minLen); }
function scrollbarMixin_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function scrollbarMixin_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function scrollbarMixin_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function scrollbarMixin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function scrollbarMixin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, scrollbarMixin_toPropertyKey(descriptor.key), descriptor); } }
function scrollbarMixin_createClass(Constructor, protoProps, staticProps) { if (protoProps) scrollbarMixin_defineProperties(Constructor.prototype, protoProps); if (staticProps) scrollbarMixin_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function scrollbarMixin_toPropertyKey(arg) { var key = scrollbarMixin_toPrimitive(arg, "string"); return scrollbarMixin_typeof(key) === "symbol" ? key : String(key); }
function scrollbarMixin_toPrimitive(input, hint) { if (scrollbarMixin_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (scrollbarMixin_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ScrollBar = /*#__PURE__*/function () {
  function ScrollBar(dir) {
    var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    scrollbarMixin_classCallCheck(this, ScrollBar);
    this.anchor = [0, 0];
    this.width = configs.barWidth || 4;
    this.height = configs.barWidth || 4;
    this.barMarginX = 0;
    this.barMarginY = 0;
    this.dir = dir;
    this.plainColor = configs.plainColor || 'rgba(0, 0, 0, 0.15)';
    this.focusColor = configs.focusColor || 'rgba(0, 0, 0, 0.25)';
    this.isFocus = false;
  }
  scrollbarMixin_createClass(ScrollBar, [{
    key: "render",
    value: function render(ctx) {
      var _this$anchor = scrollbarMixin_slicedToArray(this.anchor, 2),
        x = _this$anchor[0],
        y = _this$anchor[1];
      ctx.save();
      ctx.beginPath();
      if (this.dir === 'x') {
        var radius = this.height / 2;
        var cy = y + radius;
        var by = y + this.height;
        var rc = x + this.width - this.barMarginX * 2 - radius;
        var lc = x + this.barMarginX + radius;
        ctx.moveTo(lc, by);
        ctx.arc(lc, cy, radius, Math.PI / 2, Math.PI / 2 * 3);
        ctx.lineTo(rc, y);
        ctx.arc(rc, cy, radius, -Math.PI / 2, Math.PI / 2);
        ctx.closePath();
      } else {
        var _radius = this.width / 2;
        var tc = y + this.barMarginY + _radius;
        var bc = y + this.height - this.barMarginY * 2 - _radius;
        var cx = x + _radius;
        var rx = x + this.width;
        ctx.moveTo(x, tc);
        ctx.arc(cx, tc, _radius, -Math.PI, 0);
        ctx.lineTo(rx, bc);
        ctx.arc(cx, bc, _radius, 0, Math.PI);
        ctx.closePath();
      }
      //   ctx.rect(
      // x + this.barMarginX,
      // y + this.barMarginY,
      // this.width - this.barMarginX*2,
      // this.height - this.barMarginY*2);

      ctx.fillStyle = this.isFocus ? this.focusColor : this.plainColor;
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      var anchor = this.anchor;
      var w = this.width;
      var h = this.height;
      return point[0] > anchor[0] - 5 && point[0] < anchor[0] + w + 5 && point[1] > anchor[1] - 5 && point[1] < anchor[1] + h + 5;
    }
  }]);
  return ScrollBar;
}();
/* harmony default export */ const scrollbarMixin = ({
  initScrollBar: function initScrollBar() {
    var _this = this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var barColor = configs.barColor,
      barFocusColor = configs.barFocusColor,
      barMarginX = configs.barMarginX,
      barMarginY = configs.barMarginY,
      barWidth = configs.barWidth;
    this._scrollbarEnable = true;
    this._scrollbarX = new ScrollBar('x', {
      plainColor: barColor,
      focusColor: barFocusColor,
      barWidth: barWidth
    });
    this._scrollbarX.barMarginX = barMarginX || 5;
    this._scrollbarY = new ScrollBar('y', {
      plainColor: barColor,
      focusColor: barFocusColor,
      barWidth: barWidth
    });
    this._scrollbarY.barMarginY = barMarginY || 5;
    this._scrollBarStatus = {
      dragging: false,
      target: null,
      xscale: undefined,
      yscale: undefined,
      barInitX: 0,
      barInitY: 0
    };
    this.stopZoompanWatch = false;
    this.addEventListener('zoompan', function () {
      if (!_this.stopZoompanWatch) {
        _this.scrollBarOnPanAndZoom();
      }
    });
    this.scrollBarOnPanAndZoom();
    this.canvas.addEventListener('pointerdown', function (e) {
      var offsetX = e.offsetX,
        offsetY = e.offsetY,
        clientX = e.clientX,
        clientY = e.clientY;
      _this.onScrollbarPressStart(offsetX, offsetY, clientX, clientY);
    });
  },
  checkScrollDragging: function checkScrollDragging() {
    return this._scrollBarStatus && this._scrollBarStatus.dragging;
  },
  onScrollbarPressStart: function onScrollbarPressStart(offsetX, offsetY, clientX, clientY) {
    var _this2 = this;
    this.stopZoompanWatch = true;
    var xhit = this._scrollbarX.isHit([offsetX, offsetY]);
    if (xhit) {
      Object.assign(this._scrollBarStatus, {
        dragging: true,
        target: this._scrollbarX,
        barStartX: this._scrollbarX.anchor[0],
        barInitX: clientX
      });
    }
    var yhit = this._scrollbarY.isHit([offsetX, offsetY]);
    if (yhit) {
      Object.assign(this._scrollBarStatus, {
        dragging: true,
        target: this._scrollbarY,
        barStartY: this._scrollbarY.anchor[1],
        barInitY: clientY
      });
    }
    var f = function (e) {
      var offsetX = e.offsetX,
        offsetY = e.offsetY,
        clientX = e.clientX,
        clientY = e.clientY;
      _this2.onDraggingScrollbar(offsetX, offsetY, clientX, clientY);
    }.bind(this);
    document.addEventListener('pointermove', f);
    var t = function (e) {
      Object.assign(_this2._scrollBarStatus, {
        dragging: false,
        target: null,
        x: undefined,
        y: undefined
      });
      document.removeEventListener('pointermove', f);
      document.removeEventListener('pointerup', t);
      _this2.canvas.removeEventListener('pointerup', t);
      _this2.stopZoompanWatch = false;
    }.bind(this);
    this.canvas.addEventListener('pointerup', t, {
      once: true
    });
    document.addEventListener('pointerup', t, {
      once: true
    });
  },
  onDraggingScrollbar: function onDraggingScrollbar(offsetX, offsetY, clientX, clientY) {
    if (this._scrollbarEnable && this._scrollBarStatus.dragging) {
      var _this$_scrollBarStatu = this._scrollBarStatus,
        target = _this$_scrollBarStatu.target,
        barInitX = _this$_scrollBarStatu.barInitX,
        barStartX = _this$_scrollBarStatu.barStartX,
        barInitY = _this$_scrollBarStatu.barInitY,
        barStartY = _this$_scrollBarStatu.barStartY,
        xscale = _this$_scrollBarStatu.xscale,
        yscale = _this$_scrollBarStatu.yscale,
        scollbarHeight = _this$_scrollBarStatu.scollbarHeight,
        scollbarWidth = _this$_scrollBarStatu.scollbarWidth,
        realR = _this$_scrollBarStatu.realR,
        realL = _this$_scrollBarStatu.realL,
        realT = _this$_scrollBarStatu.realT,
        realB = _this$_scrollBarStatu.realB;
      var _this$canvasMeta = this.canvasMeta,
        actual_width = _this$canvasMeta.actual_width,
        actual_height = _this$canvasMeta.actual_height;
      var _this$bounding_box = this.bounding_box,
        p_x = _this$bounding_box.x,
        p_y = _this$bounding_box.y;
      // console.log(target.dir, realT, realB)
      var deltaX = 0,
        deltaY = 0;
      if (target.dir === 'x') {
        deltaX = clientX - barInitX;
        var xnew = barStartX + deltaX;
        var q = target.anchor[0] = Math.max(Math.min(xnew, actual_width - scollbarWidth), 0);
        var ratioInX = q / actual_width;
        // const y = (realB - (realB - realT) * ratioInY) * this.scale
        var ratioX = (realR - realL) * ratioInX + realL;
        var x = (p_x - ratioX) * this.scale;
        Object.assign(this.position, {
          offsetX: x - p_x * this.scale,
          x: x
        });
      }
      if (target.dir === 'y') {
        deltaY = clientY - barInitY;
        var ynew = barStartY + deltaY;
        var _q = target.anchor[1] = Math.max(Math.min(ynew, actual_height - scollbarHeight), 0);
        ;
        var ratioInY = _q / actual_height;
        // const y = (realB - (realB - realT) * ratioInY) * this.scale
        var ratioY = (realB - realT) * ratioInY + realT;
        var y = (p_y - ratioY) * this.scale;
        Object.assign(this.position, {
          offsetY: y - p_y * this.scale,
          y: y
        });
      }
      this.dispatchEvent(new events('zoompan', {
        deltaX: deltaX,
        deltaY: deltaY
      }));
      this.scheduleRender();
      return true;
    }
    return false;
  },
  checkScrollBarHover: function checkScrollBarHover(offsetX, offsetY) {
    if (this._scrollbarEnable) {
      var xhit = this._scrollbarX.isHit([offsetX, offsetY]);
      if (xhit) {
        // this._scrollBarStatus.hoverTarget = this._scrollbarX;
        if (!this._scrollbarX.isFocus) {
          this._scrollbarX.isFocus = true;
          this.scheduleRender();
        }
        this.canvas.style.cursor = 'default';
        return true;
      }
      var yhit = this._scrollbarY.isHit([offsetX, offsetY]);
      if (yhit) {
        // this._scrollBarStatus.hoverTarget = this._scrollbarY;
        if (!this._scrollbarY.isFocus) {
          this._scrollbarY.isFocus = true;
          this.scheduleRender();
        }
        this.canvas.style.cursor = 'default';
        return true;
      }
    }
    return false;
  },
  resetScrollBarHover: function resetScrollBarHover() {
    if (this._scrollbarEnable) {
      if (this._scrollbarY.isFocus || this._scrollbarX.isFocus) {
        this._scrollbarY.isFocus = false;
        this._scrollbarX.isFocus = false;
        this.scheduleRender();
      }
    }
  },
  _getScrollViewBoundingbox: function _getScrollViewBoundingbox() {
    var padding = 120;
    var _this$bounding_box2 = this.bounding_box,
      p_width = _this$bounding_box2.width,
      p_height = _this$bounding_box2.height,
      p_x = _this$bounding_box2.x,
      p_y = _this$bounding_box2.y;
    var p = padding;
    var p2 = padding * 2;
    return {
      width: p_width + p2,
      height: p_height + p2,
      x: p_x - p,
      y: p_y - p
    };
  },
  scrollBarOnPanAndZoom: function scrollBarOnPanAndZoom() {
    if (!this._scrollbarEnable || this._scrollBarStatus.dragging) {
      return;
    }
    var _this$_getScrollViewB = this._getScrollViewBoundingbox(),
      p_width = _this$_getScrollViewB.width,
      p_height = _this$_getScrollViewB.height,
      p_x = _this$_getScrollViewB.x,
      p_y = _this$_getScrollViewB.y;
    var _this$_getViewBox = this._getViewBox(),
      _this$_getViewBox2 = scrollbarMixin_slicedToArray(_this$_getViewBox, 4),
      x = _this$_getViewBox2[0],
      y = _this$_getViewBox2[1],
      r = _this$_getViewBox2[2],
      b = _this$_getViewBox2[3];
    var realR = Math.max(r, p_x + p_width);
    var realL = Math.min(x, p_x);
    var realT = Math.min(y, p_y);
    var realB = Math.max(b, p_y + p_height);
    var vw = r - x;
    var vh = b - y;
    var _this$canvasMeta2 = this.canvasMeta,
      actual_width = _this$canvasMeta2.actual_width,
      actual_height = _this$canvasMeta2.actual_height;
    var xscale = vw / (realR - realL);
    if (xscale < 1) {
      var scollbarWidth = actual_width * xscale;
      var anchorX = (x - realL) * xscale * this.scale;
      this._scrollbarX.anchor = [anchorX, actual_height - 10];
      this._scrollbarX.width = scollbarWidth;
      this._scrollBarStatus.scollbarWidth = scollbarWidth;
    }
    var yscale = vh / (realB - realT);
    if (yscale < 1) {
      var scollbarHeight = actual_height * yscale;
      var anchorY = (y - realT) * yscale * this.scale;
      this._scrollbarY.anchor = [actual_width - 10, anchorY];
      this._scrollbarY.height = scollbarHeight;
      this._scrollBarStatus.scollbarHeight = scollbarHeight;
    }
    Object.assign(this._scrollBarStatus, {
      yscale: yscale,
      xscale: xscale,
      realR: realR,
      realL: realL,
      realT: realT,
      realB: realB
    });
  },
  resetScollBarStatus: function resetScollBarStatus() {
    if (this._scrollbarEnable) {
      Object.assign(this._scrollBarStatus, {
        dragging: false,
        target: null,
        x: undefined,
        y: undefined
      });
    }
  },
  renderScrollBar: function renderScrollBar(ctx) {
    if (this._scrollbarEnable) {
      ctx.setTransform();
      ctx.scale(this.dpr, this.dpr);
      var _this$_scrollBarStatu2 = this._scrollBarStatus,
        xscale = _this$_scrollBarStatu2.xscale,
        yscale = _this$_scrollBarStatu2.yscale;
      if (xscale < 1) {
        this._scrollbarX.render(ctx);
      }
      if (yscale < 1) {
        this._scrollbarY.render(ctx);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/core/flow/schedule.js
/* harmony default export */ const schedule = ({
  initSchedule: function initSchedule() {
    this.__clock__ = undefined;
  },
  scheduleRender: function scheduleRender(callback) {
    var _this = this;
    requestAnimationFrame(function (timestamp) {
      var isFirstTime = _this.__clock__ !== timestamp;
      if (isFirstTime) {
        _this.__render();
      }
      if (callback) {
        callback(timestamp);
      }
      _this.__clock__ = timestamp;
    });
  }
});
;// CONCATENATED MODULE: ./src/core/events/adapter.js
function adapter_typeof(obj) { "@babel/helpers - typeof"; return adapter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, adapter_typeof(obj); }
function adapter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function adapter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, adapter_toPropertyKey(descriptor.key), descriptor); } }
function adapter_createClass(Constructor, protoProps, staticProps) { if (protoProps) adapter_defineProperties(Constructor.prototype, protoProps); if (staticProps) adapter_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function adapter_toPropertyKey(arg) { var key = adapter_toPrimitive(arg, "string"); return adapter_typeof(key) === "symbol" ? key : String(key); }
function adapter_toPrimitive(input, hint) { if (adapter_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (adapter_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 事件处理函数
 * @name EventAdapter~Handler
 * @function
 * @param {Event} event - 原生事件
 * @param {JFlow} jflow - 当前jflow 对象
 */

/**
 * EventAdapter 对象 plugin 配置
 * @typedef {Object} EventAdapter~pluginDef
 * @property {Object} canvas - canvas 相关的事件
 * @property {EventAdapter~Handler} canvas.eventName - 注册 canvas 上的事件处理
 * @property {Object} document - document 相关的事件
 * @property {EventAdapter~Handler} document.eventName - 注册 document 上的事件处理
 */

function getDefaultPlugin() {
  var _mouseStatus = {
    // x: undefined,
    // y: undefined,
    // enableClick: false,
    pointerDown: false,
    dirty: false
  };
  return {
    canvas: {
      wheel: function wheel(event, jflow) {
        event.preventDefault();
        var offsetX = event.offsetX,
          offsetY = event.offsetY,
          deltaX = event.deltaX,
          deltaY = event.deltaY;
        if (event.ctrlKey) {
          deltaY = -deltaY;
          jflow.zoomHandler(offsetX, offsetY, deltaX, deltaY, event);
        } else {
          jflow.panHandler(-deltaX, -deltaY, event);
        }
      },
      pointerdown: function pointerdown(event, jflow) {
        var offsetX = event.offsetX,
          offsetY = event.offsetY,
          deltaY = event.deltaY,
          button = event.button;
        if (button !== 0) return;
        _mouseStatus.pointerDown = true;
        jflow.pressStartHandler(offsetX, offsetY, event);
      },
      pointermove: function pointermove(event, jflow) {
        var offsetX = event.offsetX,
          offsetY = event.offsetY;
        if (_mouseStatus.pointerDown) {
          _mouseStatus.dirty = true;
        }
        jflow.pressMoveHandler(offsetX, offsetY, event);
      },
      pointerup: function pointerup(event, jflow) {
        event.preventDefault();
        // event.stopPropagation(); ALWAYS ENABLE PROPAGATION 
        var offsetX = event.offsetX,
          offsetY = event.offsetY,
          button = event.button;
        if (button !== 0) return;
        if (_mouseStatus.pointerDown && _mouseStatus.dirty) {
          _mouseStatus.pointerDown = false;
          _mouseStatus.dirty = false;
          jflow.pressUpHanlder(false, event);
        }
      },
      contextmenu: function contextmenu(event, jflow) {
        event.preventDefault();
        event.stopPropagation();
        var offsetX = event.offsetX,
          offsetY = event.offsetY;
        jflow.contextMenuHanlder(offsetX, offsetY, event);
      },
      dblclick: function dblclick(event, jflow) {
        event.preventDefault();
        event.stopPropagation();
        var offsetX = event.offsetX,
          offsetY = event.offsetY;
        jflow.dblclickHandler(offsetX, offsetY, event);
      },
      click: function click(event, jflow) {
        event.preventDefault();
        event.stopPropagation();
        var offsetX = event.offsetX,
          offsetY = event.offsetY;
        if (!_mouseStatus.dirty) {
          _mouseStatus.pointerDown = false;
          _mouseStatus.dirty = false;
          jflow.clickHanlder(offsetX, offsetY, event);
        }
      }
    },
    document: {
      pointerup: function pointerup(event, jflow) {
        jflow.pressUpHanlder(true, event);
      }
    }
  };
}

/** 
 * EventAdapter 对象
 * EventAdapter 通过 plugin 的形式实现多种交互方式的映射
 * @constructor EventAdapter
 */
var EventAdapter = /*#__PURE__*/function () {
  function EventAdapter() {
    var plugin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    adapter_classCallCheck(this, EventAdapter);
    this.plugin = getDefaultPlugin();
    this.use(plugin);
    this.canvasHandlers = [];
    this.documentHandlers = [];
  }
  adapter_createClass(EventAdapter, [{
    key: "use",
    value: function use() {
      var plugin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var ca = plugin.canvas,
        docObj = plugin.document;
      if (ca) {
        for (var eventName in ca) {
          if (ca.hasOwnProperty(eventName)) {
            this.plugin.canvas[eventName] = ca[eventName];
          }
        }
      }
      if (docObj) {
        for (var _eventName in docObj) {
          if (docObj.hasOwnProperty(_eventName)) {
            this.plugin.document[_eventName] = docObj[_eventName];
          }
        }
      }
    }
  }, {
    key: "apply",
    value: function apply(jflow) {
      var _this = this;
      var _this$plugin = this.plugin,
        ca = _this$plugin.canvas,
        docObj = _this$plugin.document;
      var canvas = jflow.canvas;
      var _loop = function _loop() {
        var handler = ca[eventName];
        function handlerWrapperd(e) {
          handler(e, jflow);
        }
        canvas.addEventListener(eventName, handlerWrapperd);
        _this.canvasHandlers.push({
          eventName: eventName,
          handlerWrapperd: handlerWrapperd
        });
      };
      for (var eventName in ca) {
        _loop();
      }
      var _loop2 = function _loop2() {
        var handler;
        var options = {};
        if (typeof docObj[_eventName2] === 'function') {
          handler = docObj[_eventName2];
        } else {
          handler = docObj[_eventName2].handler;
          Object.assign(options, docObj[_eventName2].options);
        }
        function handlerWrapperd(e) {
          handler(e, jflow);
        }
        document.addEventListener(_eventName2, handlerWrapperd, options);
        _this.documentHandlers.push({
          eventName: _eventName2,
          handlerWrapperd: handlerWrapperd,
          options: options
        });
      };
      for (var _eventName2 in docObj) {
        _loop2();
      }
    }
  }, {
    key: "unload",
    value: function unload(jflow) {
      var canvas = jflow.canvas;
      this.canvasHandlers.forEach(function (_ref) {
        var eventName = _ref.eventName,
          handlerWrapperd = _ref.handlerWrapperd;
        canvas.removeEventListener(eventName, handlerWrapperd);
      });
      this.documentHandlers.forEach(function (_ref2) {
        var eventName = _ref2.eventName,
          handlerWrapperd = _ref2.handlerWrapperd,
          options = _ref2.options;
        console.log('unload', eventName);
        document.removeEventListener(eventName, handlerWrapperd, options);
      });
    }
  }]);
  return EventAdapter;
}();
/* harmony default export */ const adapter = (EventAdapter);
;// CONCATENATED MODULE: ./src/core/instance/groupFactory.js
function groupFactory_typeof(obj) { "@babel/helpers - typeof"; return groupFactory_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, groupFactory_typeof(obj); }
function groupFactory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, groupFactory_toPropertyKey(descriptor.key), descriptor); } }
function groupFactory_createClass(Constructor, protoProps, staticProps) { if (protoProps) groupFactory_defineProperties(Constructor.prototype, protoProps); if (staticProps) groupFactory_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function groupFactory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function groupFactory_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) groupFactory_setPrototypeOf(subClass, superClass); }
function groupFactory_setPrototypeOf(o, p) { groupFactory_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return groupFactory_setPrototypeOf(o, p); }
function groupFactory_createSuper(Derived) { var hasNativeReflectConstruct = groupFactory_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = groupFactory_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = groupFactory_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return groupFactory_possibleConstructorReturn(this, result); }; }
function groupFactory_possibleConstructorReturn(self, call) { if (call && (groupFactory_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return groupFactory_assertThisInitialized(self); }
function groupFactory_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function groupFactory_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function groupFactory_getPrototypeOf(o) { groupFactory_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return groupFactory_getPrototypeOf(o); }
function groupFactory_slicedToArray(arr, i) { return groupFactory_arrayWithHoles(arr) || groupFactory_iterableToArrayLimit(arr, i) || groupFactory_unsupportedIterableToArray(arr, i) || groupFactory_nonIterableRest(); }
function groupFactory_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function groupFactory_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return groupFactory_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return groupFactory_arrayLikeToArray(o, minLen); }
function groupFactory_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function groupFactory_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function groupFactory_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function groupFactory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function groupFactory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? groupFactory_ownKeys(Object(source), !0).forEach(function (key) { groupFactory_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : groupFactory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function groupFactory_defineProperty(obj, key, value) { key = groupFactory_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function groupFactory_toPropertyKey(arg) { var key = groupFactory_toPrimitive(arg, "string"); return groupFactory_typeof(key) === "symbol" ? key : String(key); }
function groupFactory_toPrimitive(input, hint) { if (groupFactory_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (groupFactory_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var GroupMixin = groupFactory_objectSpread(groupFactory_objectSpread(groupFactory_objectSpread({}, stackMixin), layoutMixin), {}, {
  _setPadding: function _setPadding(configs) {
    this.padding = {
      top: configs.paddingTop || configs.padding || 0,
      right: configs.paddingRight || configs.padding || 0,
      bottom: configs.paddingBottom || configs.padding || 0,
      left: configs.paddingLeft || configs.padding || 0
    };
  },
  _setMargin: function _setMargin(configs) {
    this.margin = {
      top: configs.marginTop || configs.margin || 0,
      right: configs.marginRight || configs.margin || 0,
      bottom: configs.marginBottom || configs.margin || 0,
      left: configs.marginLeft || configs.margin || 0
    };
  },
  _getCenter: function _getCenter() {
    var anchor = this.anchor;
    var padding = this.padding;
    var margin = this.margin;
    var mx = (margin.left - margin.right) / 2;
    var my = (margin.top - margin.bottom) / 2;
    var centerX = (padding.left - padding.right) / 2 + mx;
    var centerY = (padding.top - padding.bottom) / 2 + my;
    this._shape.anchor = [anchor[0] + mx, anchor[1] + my];
    this._center[0] = anchor[0] + centerX;
    this._center[1] = anchor[1] + centerY;
    return this._center;
  },
  setAnchorX: function setAnchorX(x) {
    this.anchor[0] = x;
    this._getCenter();
  },
  setAnchorY: function setAnchorY(y) {
    this.anchor[1] = y;
    this._getCenter();
  },
  setAnchor: function setAnchor(x, y) {
    this.anchor[0] = x;
    this.anchor[1] = y;
    this._getCenter();
  },
  _calculatePointBack: function _calculatePointBack(point) {
    var _point = groupFactory_slicedToArray(point, 2),
      gx = _point[0],
      gy = _point[1];
    var _this$_getCenter = this._getCenter(),
      _this$_getCenter2 = groupFactory_slicedToArray(_this$_getCenter, 2),
      cx = _this$_getCenter2[0],
      cy = _this$_getCenter2[1];
    var p = [gx - cx, gy - cy];
    return p;
  },
  _calculatePointBackWithPoint: function _calculatePointBackWithPoint(a, b, arr, idx1, idx2) {
    var anchor = this.anchor;
    var padding = this.padding;
    var margin = this.margin;
    arr[idx1] = a - (anchor[0] + (padding.left - padding.right) / 2 + (margin.left - margin.right) / 2);
    arr[idx2] = b - (anchor[1] + (padding.top - padding.bottom) / 2 + (margin.top - margin.bottom) / 2);
  },
  /**
   * 反算回 canvas 顶层坐标
   * @param {Number[]} point
   * @return {Number[]} 世界坐标
   */
  calculateToCoordination: function calculateToCoordination(point) {
    var _point2 = groupFactory_slicedToArray(point, 2),
      gx = _point2[0],
      gy = _point2[1];
    var _this$_getCenter3 = this._getCenter(),
      _this$_getCenter4 = groupFactory_slicedToArray(_this$_getCenter3, 2),
      cx = _this$_getCenter4[0],
      cy = _this$_getCenter4[1];
    // const p = [cx + anchor[0] - spanH, cy + anchor[1] - spanV];
    var p = [gx + cx, gy + cy];
    if (this._belongs && this._belongs.calculateToCoordination) {
      return this._belongs.calculateToCoordination(p);
    } else {
      return p;
    }
  },
  /**
   * 反算回页面的像素坐标，重载 {@link Instance#calculateToRealWorld}
   * @param {Number[]} point
   * @return {Number[]} 世界坐标
   */
  calculateToRealWorld: function calculateToRealWorld(point) {
    var _point3 = groupFactory_slicedToArray(point, 2),
      gx = _point3[0],
      gy = _point3[1];
    var _this$_getCenter5 = this._getCenter(),
      _this$_getCenter6 = groupFactory_slicedToArray(_this$_getCenter5, 2),
      cx = _this$_getCenter6[0],
      cy = _this$_getCenter6[1];
    var p = [gx + cx, gy + cy];
    if (this._belongs && this._belongs.calculateToRealWorld) {
      return this._belongs.calculateToRealWorld(p);
    }
  },
  calculateToRealWorldWithPointer: function calculateToRealWorldWithPointer(outpoint, inpoint) {
    outpoint[0] = inpoint[0] + this._center[0];
    outpoint[1] = inpoint[1] + this._center[1];
    if (this._belongs && this._belongs.calculateToRealWorldWithPointer) {
      return this._belongs.calculateToRealWorldWithPointer(outpoint, outpoint);
    }
  },
  clone: function clone() {
    var C = this.constructor;
    var configs = Object.assign({}, this._rawConfigs, {
      layout: this._layout && this._layout.clone()
    });
    var t = new C(configs);
    this.interateNodeStack(function (instance) {
      t.addToStack(instance.clone());
    });
    t.recalculate();
    t.visible = this.visible;
    return t;
  },
  getBoundingDimension: function getBoundingDimension() {
    return {
      width: this.width,
      height: this.height
    };
  },
  getBoundingRect: function getBoundingRect() {
    var anchor = this.anchor;
    var w = this.width / 2;
    var h = this.height / 2;
    var ltx = anchor[0] - w;
    var lty = anchor[1] - h;
    var rbx = anchor[0] + w;
    var rby = anchor[1] + h;
    var br = this._boundingrect;
    br[0] = ltx;
    br[1] = lty;
    br[2] = rbx;
    br[3] = rby;
    return br;
  },
  getIntersectionsInFourDimension: function getIntersectionsInFourDimension() {
    var _ref;
    var p2 = this.anchor;
    if (this._belongs && this._belongs.calculateToCoordination) {
      p2 = this._belongs.calculateToCoordination(p2);
    }
    var _p = p2,
      _p2 = groupFactory_slicedToArray(_p, 2),
      x2 = _p2[0],
      y2 = _p2[1];
    var w = this.width / 2;
    var h = this.height / 2;
    return _ref = {}, groupFactory_defineProperty(_ref, DIRECTION.RIGHT, [x2 + w, y2]), groupFactory_defineProperty(_ref, DIRECTION.LEFT, [x2 - w, y2]), groupFactory_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + h]), groupFactory_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - h]), groupFactory_defineProperty(_ref, DIRECTION.SELF, [x2 + w * 0.618, y2 + h * 0.618]), _ref;
  },
  calculateIntersection: function calculateIntersection(point) {
    var _point4 = groupFactory_slicedToArray(point, 2),
      x1 = _point4[0],
      y1 = _point4[1];
    var _this$anchor = groupFactory_slicedToArray(this.anchor, 2),
      x2 = _this$anchor[0],
      y2 = _this$anchor[1];
    var w = this.width / 2;
    var h = this.height / 2;
    var vecx = x2 - x1;
    var vecy = y2 - y1;
    var theta1 = h / w;
    var theta2 = Math.abs(vecy / vecx);
    var dirx = x1 > x2;
    var diry = y1 > y2;
    var x, y;
    if (theta2 < theta1) {
      x = x2 + (dirx ? w : -w);
      y = w * (diry ? theta2 : -theta2) + y2;
    } else {
      y = y2 + (diry ? h : -h);
      x = h / (dirx ? theta2 : -theta2) + x2;
    }
    return [x, y];
  },
  onEnterViewbox: function onEnterViewbox() {
    this.interateNodeStack(function (instance) {
      instance.onEnterViewbox();
    });
  },
  onLeaveViewbox: function onLeaveViewbox() {
    this.interateNodeStack(function (instance) {
      instance.onLeaveViewbox();
    });
  },
  destroy: function destroy() {
    this._shape.destroy();
    this.interateNodeStack(function (instance) {
      instance.destroy();
    });
  }
});
function defaultShift(width, height) {
  return [width, height];
}

/**
 * 根据paddingbox宽高来计算shapeshiftbox的宽高
 * @function shapeShift
 * @param {number} width            - paddingBox宽
 * @param {number} height           - paddingBox高
 * @return {number[]}
 */

/**
 * 组工厂函数，用于通过JFlow 绘图节点来创建不同的组
 * @global 
 * @function GroupFactory
 * @param {Node} jflowNodeConstructor - 绘图节点构造器
 * @param {object} options            - 配置项
 * @param {shapeShift} options.shapeShift - shift层适配方法
 * @return {Group} - 绘图节点构造器
 */
function GroupFactory(jflowNodeConstructor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var shapeShift = typeof options.shapeShift === 'function' ? options.shapeShift : defaultShift;

  /**
   * Group 配置
   * @typedef {Object} GroupTemplate~GroupConfigs
   * @property {number} width             - 设定宽度
   * @property {number} minWidth          - 最小宽度
   * @property {number} height            - 设定高度
   * @property {number} padding          - 内边距
   * @property {number} paddingTop          - 内上边距
   * @property {number} paddingRight         - 内右边距
   * @property {number} paddingBottom        - 内下边距
   * @property {number} paddingLeft          - 内左边距
   * @property {number} margin            - 外边距
   * @property {number} marginTop          - 外上边距
   * @property {number} marginRight         - 外右边距
   * @property {number} marginBottom        - 外下边距
   * @property {number} marginLeft          - 外左边距
   * @property {boolean} lock            - 布局锁定状态 默认 true
   */
  var t = /*#__PURE__*/function (_Node) {
    groupFactory_inherits(t, _Node);
    var _super = groupFactory_createSuper(t);
    /**
    * @constructs GroupTemplate
    * @param {GroupTemplate~GroupConfigs} configs - 组配置
    * @mixes LayoutMixin
    * @mixes StackMixin 
    */
    function t(configs) {
      var _configs$lock, _configs$transparent;
      var _this;
      groupFactory_classCallCheck(this, t);
      _this = _super.call(this, configs);
      _this.initStack(configs);
      _this.initLayout(configs);
      /** @member {Node}      - 壳绘图单元 */
      _this._shape = new jflowNodeConstructor(configs);
      _this._shape.anchor = [0, 0];
      _this._shape._belongs = groupFactory_assertThisInitialized(_this);
      _this._center = [0, 0];
      _this._setPadding(configs);
      _this._setMargin(configs);
      /** @member {Number}      - 设定宽度 */
      _this.definedWidth = configs.width;
      /** @member {Number}      - 最小宽度 */
      _this.minWidth = configs.minWidth;
      /** @member {Number}      - 设定的高度 */
      _this.definedHeight = configs.height;
      /** @member {Boolean}      - 组内元素是否锁定， 默认true */
      _this.lock = (_configs$lock = configs.lock) !== null && _configs$lock !== void 0 ? _configs$lock : true;
      _this.display = configs.display || 'default';
      /** @member {Boolean}      - 组本身是否进入形状判定范围 */
      _this.transparent = (_configs$transparent = configs.transparent) !== null && _configs$transparent !== void 0 ? _configs$transparent : false;
      _this._getBoundingGroupRect();
      _this.reflow();
      _this._getBoundingGroupRect();
      _this._cacheViewBox = [];
      return _this;
    }
    return groupFactory_createClass(t);
  }(node);
  Object.assign(t.prototype, GroupMixin);
  Object.assign(t.prototype, {
    reflow: function reflow() {
      GroupMixin.reflow.call(this);
      var margin = this.margin;
      var _shapeShift = shapeShift(this.width - margin.left - margin.right, this.height - margin.top - margin.bottom, this._shape),
        _shapeShift2 = groupFactory_slicedToArray(_shapeShift, 2),
        shapeWidth = _shapeShift2[0],
        shapeHeight = _shapeShift2[1];
      this._shape.width = shapeWidth;
      this._shape.height = shapeHeight;
    },
    setConfig: function setConfig(configs) {
      this._shape.setConfig(configs);
      this._setPadding(configs);
      this._setMargin(configs);
      if ('opacity' in configs) {
        this.opacity = configs.opacity;
      }
      if (configs.layout && this._layout !== configs.layout) {
        this._layout = configs.layout;
      }
    },
    _getBoundingGroupRect: function _getBoundingGroupRect() {
      var points = this._stack.getBoundingRectPoints();
      // content box 
      var bbox = bounding_box(points);

      // padding box 
      var padding = this.padding;
      var minWidth = this.minWidth; // - padding.left - padding.right;
      var definedWidth = this.definedWidth; // - padding.left - padding.right;
      var w = bbox.width + padding.left + padding.right;
      var h = bbox.height + padding.top + padding.bottom;
      var paddingWidth = minWidth ? Math.max(minWidth, w) : definedWidth || w;
      var paddingHeight = this.definedHeight || h;
      this._paddingWidth = paddingWidth;
      this._paddingHeight = paddingHeight;

      // shapeBox
      var _shapeShift3 = shapeShift(paddingWidth, paddingHeight, this._shape),
        _shapeShift4 = groupFactory_slicedToArray(_shapeShift3, 2),
        shapeWidth = _shapeShift4[0],
        shapeHeight = _shapeShift4[1];
      this._shape.width = shapeWidth;
      this._shape.height = shapeHeight;
      // marginBox
      var margin = this.margin;
      this.width = shapeWidth + margin.left + margin.right;
      this.height = shapeHeight + margin.top + margin.bottom;
    },
    _getViewBox: function _getViewBox() {
      var belongs_vbox = this._belongs.getCacheViewBox();
      var cacheViewBox = this._cacheViewBox;
      this._calculatePointBackWithPoint(belongs_vbox[0], belongs_vbox[1], cacheViewBox, 0, 1);
      this._calculatePointBackWithPoint(belongs_vbox[2], belongs_vbox[3], cacheViewBox, 2, 3);
      return this._cacheViewBox;
    },
    getCacheViewBox: function getCacheViewBox() {
      return this._cacheViewBox;
    },
    render: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      } else if (this.opacity !== 1) {
        ctx.globalAlpha = this.opacity;
      }
      var _this$_getCenter7 = this._getCenter(),
        _this$_getCenter8 = groupFactory_slicedToArray(_this$_getCenter7, 2),
        cx = _this$_getCenter8[0],
        cy = _this$_getCenter8[1];
      this._shape.render(ctx);
      ctx.translate(cx, cy);
      this._stack.render(ctx);
      // this._linkStack.render(ctx);    
      ctx.translate(-cx, -cy);
      ctx.restore();

      // ctx.save();
      // ctx.beginPath();
      // ctx.arc(cx, cy, 5, 0, Math.PI*2);
      // ctx.fillStyle = 'rgb(0,0,0)'
      // ctx.fill();
      // ctx.restore();
    },
    isHit: function isHit(point, condition) {
      var p = this._calculatePointBack(point);
      this._currentp = p; // 暂存，为了后续计算别的位置
      var target = this._stack.checkHit(p, condition);
      if (target) return target;
      if (!this.transparent) {
        return this._shape.isHit(point);
      }
      return false;
    }
  });
  return t;
}
/* harmony default export */ const groupFactory = (GroupFactory);
;// CONCATENATED MODULE: ./src/core/instance/shapes/point.js
function point_typeof(obj) { "@babel/helpers - typeof"; return point_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, point_typeof(obj); }
function point_defineProperty(obj, key, value) { key = point_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function point_slicedToArray(arr, i) { return point_arrayWithHoles(arr) || point_iterableToArrayLimit(arr, i) || point_unsupportedIterableToArray(arr, i) || point_nonIterableRest(); }
function point_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function point_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return point_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return point_arrayLikeToArray(o, minLen); }
function point_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function point_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function point_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function point_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function point_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, point_toPropertyKey(descriptor.key), descriptor); } }
function point_createClass(Constructor, protoProps, staticProps) { if (protoProps) point_defineProperties(Constructor.prototype, protoProps); if (staticProps) point_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function point_toPropertyKey(arg) { var key = point_toPrimitive(arg, "string"); return point_typeof(key) === "symbol" ? key : String(key); }
function point_toPrimitive(input, hint) { if (point_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (point_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function point_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) point_setPrototypeOf(subClass, superClass); }
function point_setPrototypeOf(o, p) { point_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return point_setPrototypeOf(o, p); }
function point_createSuper(Derived) { var hasNativeReflectConstruct = point_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = point_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = point_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return point_possibleConstructorReturn(this, result); }; }
function point_possibleConstructorReturn(self, call) { if (call && (point_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return point_assertThisInitialized(self); }
function point_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function point_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function point_getPrototypeOf(o) { point_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return point_getPrototypeOf(o); }


/**
 * 圆形单元 配置
 * @typedef {Node~Configs} Point~PointConfigs
 * @property {number} radius  - 半径
 */
/**
 * 圆形节点
 * @constructor Point
 * @extends Node
 * @param {Point~PointConfigs} configs - 配置
 */
var Point = /*#__PURE__*/function (_Node) {
  point_inherits(Point, _Node);
  var _super = point_createSuper(Point);
  function Point(configs) {
    var _this;
    point_classCallCheck(this, Point);
    _this = _super.call(this, configs);
    _this.type = 'Point';
    /** @member {Number}      - 半径 */
    _this.radius = configs.radius || 10;
    _this._doCache();
    return _this;
  }
  point_createClass(Point, [{
    key: "setConfig",
    value: function setConfig(configs) {
      var _this2 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this2[k] = configs[k];
          _this2._rawConfigs[k] = configs[k];
        }
      });
      this._doCache();
    }
  }, {
    key: "_doCache",
    value: function _doCache() {
      this.width = this.radius * 2;
      this.height = this.radius * 2;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      ctx.beginPath();
      ctx.arc(this.anchor[0], this.anchor[1], this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.backgroundColor;
      ctx.fill();
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
      }
      // if(this._isTargeting) {
      //     this.renderFocus(ctx);
      // }
      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      var anchor = this.anchor;
      return Math.pow(point[0] - anchor[0], 2) + Math.pow(point[1] - anchor[1], 2) < this.radius * this.radius;
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var r = this.radius;
      var ltx = anchor[0] - r;
      var lty = anchor[1] - r;
      var rbx = anchor[0] + r;
      var rby = anchor[1] + r;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "calculateIntersection",
    value: function calculateIntersection(point) {
      var _point = point_slicedToArray(point, 2),
        x1 = _point[0],
        y1 = _point[1];
      var _this$anchor = point_slicedToArray(this.anchor, 2),
        x2 = _this$anchor[0],
        y2 = _this$anchor[1];
      var vecx = x2 - x1;
      var vecy = y2 - y1;
      var dist = Math.sqrt(vecx * vecx + vecy * vecy);
      var ratio = this.radius / dist;
      return [x2 - ratio * vecx, y2 - ratio * vecy];
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var _this$anchor2 = point_slicedToArray(this.anchor, 2),
        x2 = _this$anchor2[0],
        y2 = _this$anchor2[1];
      var r = this.radius;
      return _ref = {}, point_defineProperty(_ref, DIRECTION.RIGHT, [x2 + r, y2]), point_defineProperty(_ref, DIRECTION.LEFT, [x2 - r, y2]), point_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + r]), point_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - r]), _ref;
    }
  }, {
    key: "calculateIntersectionInFourDimension",
    value: function calculateIntersectionInFourDimension(point, end) {
      var _allIntersections;
      var _point2 = point_slicedToArray(point, 2),
        x1 = _point2[0],
        y1 = _point2[1];
      var _this$anchor3 = point_slicedToArray(this.anchor, 2),
        x2 = _this$anchor3[0],
        y2 = _this$anchor3[1];
      var r = this.radius;
      var vecx = x2 - x1;
      var vecy = y2 - y1;
      var allIntersections = (_allIntersections = {}, point_defineProperty(_allIntersections, DIRECTION.RIGHT, [x2 + r, y2]), point_defineProperty(_allIntersections, DIRECTION.LEFT, [x2 - r, y2]), point_defineProperty(_allIntersections, DIRECTION.BOTTOM, [x2, y2 + r]), point_defineProperty(_allIntersections, DIRECTION.TOP, [x2, y2 - r]), _allIntersections);
      // console.log(Math.abs(vecx) > Math.abs(vecy), vecx, r)
      // if() {
      //     return {
      //         p: [x2 + (vecx<0?r:-r), y2],
      //         dir: vecx<0 ? DIRECTION.RIGHT : DIRECTION.LEFT,
      //     }
      // } else {
      //     return {
      //         p: [x2, y2+(vecy<0?r:-r)],
      //         dir: vecy<0 ? DIRECTION.BOTTOM : DIRECTION.TOP,
      //     }
      // }
      var interDir = Math.abs(vecy) > Math.abs(vecx) ? vecy < 0 ? DIRECTION.BOTTOM : DIRECTION.TOP : vecx < 0 ? DIRECTION.RIGHT : DIRECTION.LEFT;

      // interDir = this.checkLinked(interDir, end);
      return {
        p: allIntersections[interDir],
        dir: interDir
      };
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        width: this.width,
        height: this.height
      };
    }
  }]);
  return Point;
}(node);
/* harmony default export */ const point = (Point);
;// CONCATENATED MODULE: ./src/core/instance/shapes/rectangle.js
function rectangle_typeof(obj) { "@babel/helpers - typeof"; return rectangle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, rectangle_typeof(obj); }
function rectangle_defineProperty(obj, key, value) { key = rectangle_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function rectangle_slicedToArray(arr, i) { return rectangle_arrayWithHoles(arr) || rectangle_iterableToArrayLimit(arr, i) || rectangle_unsupportedIterableToArray(arr, i) || rectangle_nonIterableRest(); }
function rectangle_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function rectangle_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return rectangle_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rectangle_arrayLikeToArray(o, minLen); }
function rectangle_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function rectangle_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function rectangle_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function rectangle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function rectangle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, rectangle_toPropertyKey(descriptor.key), descriptor); } }
function rectangle_createClass(Constructor, protoProps, staticProps) { if (protoProps) rectangle_defineProperties(Constructor.prototype, protoProps); if (staticProps) rectangle_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function rectangle_toPropertyKey(arg) { var key = rectangle_toPrimitive(arg, "string"); return rectangle_typeof(key) === "symbol" ? key : String(key); }
function rectangle_toPrimitive(input, hint) { if (rectangle_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (rectangle_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function rectangle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) rectangle_setPrototypeOf(subClass, superClass); }
function rectangle_setPrototypeOf(o, p) { rectangle_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rectangle_setPrototypeOf(o, p); }
function rectangle_createSuper(Derived) { var hasNativeReflectConstruct = rectangle_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = rectangle_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = rectangle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return rectangle_possibleConstructorReturn(this, result); }; }
function rectangle_possibleConstructorReturn(self, call) { if (call && (rectangle_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return rectangle_assertThisInitialized(self); }
function rectangle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function rectangle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function rectangle_getPrototypeOf(o) { rectangle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rectangle_getPrototypeOf(o); }


/**
 * @typedef Rectangle~border
 * @type {object}
 * @property {number} borderColor      - 边框宽度, 默认 0
 * @property {number} borderWidth      - 边框颜色, 默认 transparent
 */
/**
 * @typedef Rectangle~borders
 * @type {object}
 * @property {Rectangle~border} top      - 上边框
 * @property {Rectangle~border} right      - 右边框
 * @property {Rectangle~border} bottom      - 下边框
 * @property {Rectangle~border} left      - 左边框
 */

/**
 * 矩形单元 配置
 * @typedef {Node~Configs} Rectangle~RectangleConfigs
 * @property {number} width - 宽
 * @property {number} height - 高
 * @property {number} borderRadius - 圆角矩形半径
 * @property {string} borderColor - 边框颜色, 默认 transparent
 * @property {string} borderWidth - 边框宽度, 默认 0
 * @property {Rectangle~borders} border      - 边框设置
 */
/**
 * 矩形单元
 * @constructor Rectangle
 * @extends Node
 * @param {Rectangle~RectangleConfigs} configs
 */
var Rectangle = /*#__PURE__*/function (_Node) {
  rectangle_inherits(Rectangle, _Node);
  var _super = rectangle_createSuper(Rectangle);
  function Rectangle() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    rectangle_classCallCheck(this, Rectangle);
    _this = _super.call(this, configs);
    _this.type = 'Rectangle';
    /** @member {Number}      - 宽 */
    _this.width = configs.width || 10;
    /** @member {Number}      - 高 */
    _this.height = configs.height || 10;
    /** @member {Number}      - 圆角矩形半径 */
    _this.borderRadius = configs.borderRadius || 0;
    _this._setBorder(configs);
    return _this;
  }
  rectangle_createClass(Rectangle, [{
    key: "_setBorder",
    value: function _setBorder(configs) {
      var _configs$border, _configs$border2, _configs$border3, _configs$border4, _configs$border5, _configs$border6, _configs$border7, _configs$border8, _configs$border9, _configs$border10, _configs$border11, _configs$border12;
      /** @member {Rectangle~borders}      - 边框设置，优先级高于 borderWidth，borderColor */
      this.border = {
        top: {
          color: ((_configs$border = configs.border) === null || _configs$border === void 0 || (_configs$border = _configs$border.top) === null || _configs$border === void 0 ? void 0 : _configs$border.borderColor) || configs.borderColor || 'transparent',
          width: ((_configs$border2 = configs.border) === null || _configs$border2 === void 0 || (_configs$border2 = _configs$border2.top) === null || _configs$border2 === void 0 ? void 0 : _configs$border2.borderWidth) || configs.borderWidth || 0,
          enable: (_configs$border3 = configs.border) === null || _configs$border3 === void 0 || (_configs$border3 = _configs$border3.top) === null || _configs$border3 === void 0 ? void 0 : _configs$border3.borderWidth
        },
        right: {
          color: ((_configs$border4 = configs.border) === null || _configs$border4 === void 0 || (_configs$border4 = _configs$border4.right) === null || _configs$border4 === void 0 ? void 0 : _configs$border4.borderColor) || configs.borderColor || 'transparent',
          width: ((_configs$border5 = configs.border) === null || _configs$border5 === void 0 || (_configs$border5 = _configs$border5.right) === null || _configs$border5 === void 0 ? void 0 : _configs$border5.borderWidth) || configs.borderWidth || 0,
          enable: (_configs$border6 = configs.border) === null || _configs$border6 === void 0 || (_configs$border6 = _configs$border6.right) === null || _configs$border6 === void 0 ? void 0 : _configs$border6.borderWidth
        },
        bottom: {
          color: ((_configs$border7 = configs.border) === null || _configs$border7 === void 0 || (_configs$border7 = _configs$border7.bottom) === null || _configs$border7 === void 0 ? void 0 : _configs$border7.borderColor) || configs.borderColor || 'transparent',
          width: ((_configs$border8 = configs.border) === null || _configs$border8 === void 0 || (_configs$border8 = _configs$border8.bottom) === null || _configs$border8 === void 0 ? void 0 : _configs$border8.borderWidth) || configs.borderWidth || 0,
          enable: (_configs$border9 = configs.border) === null || _configs$border9 === void 0 || (_configs$border9 = _configs$border9.bottom) === null || _configs$border9 === void 0 ? void 0 : _configs$border9.borderWidth
        },
        left: {
          color: ((_configs$border10 = configs.border) === null || _configs$border10 === void 0 || (_configs$border10 = _configs$border10.left) === null || _configs$border10 === void 0 ? void 0 : _configs$border10.borderColor) || configs.borderColor || 'transparent',
          width: ((_configs$border11 = configs.border) === null || _configs$border11 === void 0 || (_configs$border11 = _configs$border11.left) === null || _configs$border11 === void 0 ? void 0 : _configs$border11.borderWidth) || configs.borderWidth || 0,
          enable: (_configs$border12 = configs.border) === null || _configs$border12 === void 0 || (_configs$border12 = _configs$border12.left) === null || _configs$border12 === void 0 ? void 0 : _configs$border12.borderWidth
        }
      };
      this.borderColor = configs.borderColor || 'transparent';
      this.borderWidth = configs.borderWidth || 0;
    }
  }, {
    key: "setConfig",
    value: function setConfig(configs) {
      var _this2 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this2[k] = configs[k];
          _this2._rawConfigs[k] = configs[k];
        }
      });
      this._setBorder(configs);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      var radius = this.borderRadius,
        anchor = this.anchor,
        width = this.width,
        height = this.height;
      var x = this.anchor[0] - this.width / 2;
      var y = this.anchor[1] - this.height / 2;
      var xt = this.anchor[0] + this.width / 2;
      var yt = this.anchor[1] + this.height / 2;
      if (this.borderRadius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      } else {
        ctx.beginPath();
        ctx.rect(this.anchor[0] - this.width / 2, this.anchor[1] - this.height / 2, this.width, this.height);
      }
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
      }
      if (this.shadowColor && this.shadowColor !== 'transparent') {
        ctx.shadowColor = this.shadowColor;
        var scale = this._jflow.scale;
        ctx.shadowBlur = this.shadowBlur * scale;
        ctx.shadowOffsetX = this.shadowOffsetX * scale;
        ctx.shadowOffsetY = this.shadowOffsetY * scale;
        var switchPath = new Path2D();
        if (this.borderRadius) {
          switchPath.moveTo(x + radius, y);
          switchPath.lineTo(x + width - radius, y);
          switchPath.quadraticCurveTo(x + width, y, x + width, y + radius);
          switchPath.lineTo(x + width, y + height - radius);
          switchPath.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
          switchPath.lineTo(x + radius, y + height);
          switchPath.quadraticCurveTo(x, y + height, x, y + height - radius);
          switchPath.lineTo(x, y + radius);
          switchPath.quadraticCurveTo(x, y, x + radius, y);
          switchPath.closePath();
        } else {
          switchPath.rect(this.anchor[0] - this.width / 2, this.anchor[1] - this.height / 2, this.width, this.height);
        }
        switchPath.rect(x - 10, y - 10, this.width + 20, this.height + 20);
        ctx.save();
        ctx.clip(switchPath, "evenodd");
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = this.backgroundColor;
      ctx.fill();
      if (this.borderRadius && this.borderWidth) {
        ctx.shadowColor = 'transparent';
        ctx.stroke();
      }
      if (this.borderRadius) {
        if (this.border.top.enable) {
          var ty = y - this.border.top.width / 2;
          // console.log(this.border.top.width)
          ctx.beginPath();
          var topPath = new Path2D();
          topPath.moveTo(x, ty + radius);
          topPath.quadraticCurveTo(x, ty, x + radius, ty);
          topPath.lineTo(x + width - radius, ty);
          topPath.quadraticCurveTo(x + width, ty, x + width, ty + radius);
          topPath.closePath();
          ctx.clip(topPath);
          ctx.save();
          ctx.shadowColor = 'transparent';
          ctx.fillStyle = this.border.top.color;
          ctx.rect(x, ty, this.width, this.border.top.width);
          ctx.fill();
          ctx.restore();

          // ctx.stroke();
          // ctx.save();
          // ctx.beginPath();
          // ctx.moveTo(x, ty + radius);
          // ctx.quadraticCurveTo(x, ty, x + radius, ty);
          // ctx.lineTo(x + width - radius, ty);
          // ctx.quadraticCurveTo(x + width, ty, x + width, ty + radius);
          // ctx.closePath();

          // // ctx.fill();
          // ctx.clip();

          // ctx.beginPath();
          // ctx.rect(x, ty, this.width, this.border.top.width);
          // ctx.fillStyle = this.border.top.color;
          // ctx.shadowColor = 'transparent';
          // ctx.fill();
          // ctx.restore();
        }
      } else {
        if (this.border.top.width) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(xt, y);
          ctx.strokeStyle = this.border.top.color;
          ctx.lineWidth = this.border.top.width;
          ctx.stroke();
        }
        if (this.border.right.width) {
          ctx.beginPath();
          ctx.moveTo(xt, y);
          ctx.lineTo(xt, yt);
          ctx.strokeStyle = this.border.right.color;
          ctx.lineWidth = this.border.right.width;
          ctx.stroke();
        }
        if (this.border.bottom.width) {
          ctx.beginPath();
          ctx.moveTo(xt, yt);
          ctx.lineTo(x, yt);
          ctx.strokeStyle = this.border.bottom.color;
          ctx.lineWidth = this.border.bottom.width;
          ctx.stroke();
        }
        if (this.border.left.width) {
          ctx.beginPath();
          ctx.moveTo(x, yt);
          ctx.lineTo(x, y);
          ctx.strokeStyle = this.border.left.color;
          ctx.lineWidth = this.border.left.width;
          ctx.stroke();
        }
      }
      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      return point[0] > anchor[0] - w && point[0] < anchor[0] + w && point[1] > anchor[1] - h && point[1] < anchor[1] + h;
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        height: this.height,
        width: this.width
      };
    }
  }, {
    key: "calculateIntersection",
    value: function calculateIntersection(point) {
      var _point = rectangle_slicedToArray(point, 2),
        x1 = _point[0],
        y1 = _point[1];
      var _this$anchor = rectangle_slicedToArray(this.anchor, 2),
        x2 = _this$anchor[0],
        y2 = _this$anchor[1];
      var w = this.width / 2;
      var h = this.height / 2;
      var vecx = x2 - x1;
      var vecy = y2 - y1;
      var theta1 = h / w;
      var theta2 = Math.abs(vecy / vecx);
      var dirx = x1 > x2;
      var diry = y1 > y2;
      var x, y;
      if (theta2 < theta1) {
        x = x2 + (dirx ? w : -w);
        y = w * (diry ? theta2 : -theta2) + y2;
      } else {
        y = y2 + (diry ? h : -h);
        x = h / (dirx ? theta2 : -theta2) + x2;
      }
      return [x, y];
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var p2 = this.anchor;
      if (this._belongs && this._belongs.calculateToCoordination) {
        p2 = this._belongs.calculateToCoordination(p2);
      }
      var _p = p2,
        _p2 = rectangle_slicedToArray(_p, 2),
        x2 = _p2[0],
        y2 = _p2[1];
      var w = this.width / 2;
      var h = this.height / 2;
      return _ref = {}, rectangle_defineProperty(_ref, DIRECTION.RIGHT, [x2 + w, y2]), rectangle_defineProperty(_ref, DIRECTION.LEFT, [x2 - w, y2]), rectangle_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + h]), rectangle_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - h]), _ref;
    }
  }, {
    key: "calculateIntersectionInFourDimension",
    value: function calculateIntersectionInFourDimension(point, end) {
      var _allIntersections;
      var _point2 = rectangle_slicedToArray(point, 2),
        x1 = _point2[0],
        y1 = _point2[1];
      var p2 = this.anchor;
      if (this._belongs && this._belongs.calculateToCoordination) {
        p2 = this._belongs.calculateToCoordination(p2);
      }
      var _p3 = p2,
        _p4 = rectangle_slicedToArray(_p3, 2),
        x2 = _p4[0],
        y2 = _p4[1];
      var w = this.width / 2;
      var h = this.height / 2;
      var allIntersections = (_allIntersections = {}, rectangle_defineProperty(_allIntersections, DIRECTION.RIGHT, [x2 + w, y2]), rectangle_defineProperty(_allIntersections, DIRECTION.LEFT, [x2 - w, y2]), rectangle_defineProperty(_allIntersections, DIRECTION.BOTTOM, [x2, y2 + h]), rectangle_defineProperty(_allIntersections, DIRECTION.TOP, [x2, y2 - h]), _allIntersections);
      var vecx = x2 - x1;
      var vecy = y2 - y1;
      var theta1 = h / w;
      var theta2 = Math.abs(vecy / vecx);
      var dirx = x1 > x2;
      var diry = y1 > y2;
      var interDir = theta2 > theta1 ? diry ? DIRECTION.BOTTOM : DIRECTION.TOP : dirx ? DIRECTION.RIGHT : DIRECTION.LEFT;

      // if(this._belongs && this._belongs.calculateToCoordination) {
      //     console.log(JSON.stringify(this._intersections));
      //     console.log(interDir)
      // }
      // interDir = this.checkLinked(interDir, end);
      // if(this._belongs && this._belongs.calculateToCoordination) {
      //     console.log(interDir)
      // }

      // if(!interDir) {
      //     debugger
      // }
      // let endDir = interDir;
      // if(end === 'to') {
      //     endDir = oppositeDirection(endDir)
      // }
      return {
        p: allIntersections[interDir],
        dir: interDir
      };
    }
  }]);
  return Rectangle;
}(node);
/* harmony default export */ const rectangle = (Rectangle);
;// CONCATENATED MODULE: ./src/core/instance/shapes/capsule.js
function capsule_typeof(obj) { "@babel/helpers - typeof"; return capsule_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, capsule_typeof(obj); }
function capsule_defineProperty(obj, key, value) { key = capsule_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function capsule_slicedToArray(arr, i) { return capsule_arrayWithHoles(arr) || capsule_iterableToArrayLimit(arr, i) || capsule_unsupportedIterableToArray(arr, i) || capsule_nonIterableRest(); }
function capsule_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function capsule_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return capsule_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return capsule_arrayLikeToArray(o, minLen); }
function capsule_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function capsule_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function capsule_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function capsule_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function capsule_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, capsule_toPropertyKey(descriptor.key), descriptor); } }
function capsule_createClass(Constructor, protoProps, staticProps) { if (protoProps) capsule_defineProperties(Constructor.prototype, protoProps); if (staticProps) capsule_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function capsule_toPropertyKey(arg) { var key = capsule_toPrimitive(arg, "string"); return capsule_typeof(key) === "symbol" ? key : String(key); }
function capsule_toPrimitive(input, hint) { if (capsule_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (capsule_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function capsule_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) capsule_setPrototypeOf(subClass, superClass); }
function capsule_setPrototypeOf(o, p) { capsule_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return capsule_setPrototypeOf(o, p); }
function capsule_createSuper(Derived) { var hasNativeReflectConstruct = capsule_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = capsule_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = capsule_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return capsule_possibleConstructorReturn(this, result); }; }
function capsule_possibleConstructorReturn(self, call) { if (call && (capsule_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return capsule_assertThisInitialized(self); }
function capsule_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function capsule_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function capsule_getPrototypeOf(o) { capsule_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return capsule_getPrototypeOf(o); }


/**
 * 胶囊单元 配置
 * @typedef {Node~Configs} Capsule~CapsuleConfigs
 * @property {number} width  - 内部矩形宽
 * @property {number} height - 内部矩形高
 */
/**
 * 胶囊单元
 * @constructor Capsule
 * @extends Node
 * @param {Capsule~CapsuleConfigs} configs - 配置
 */
var Capsule = /*#__PURE__*/function (_Node) {
  capsule_inherits(Capsule, _Node);
  var _super = capsule_createSuper(Capsule);
  function Capsule() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    capsule_classCallCheck(this, Capsule);
    _this = _super.call(this, configs);
    _this.type = 'Capsule';
    /** @member {Number}      - 内部矩形宽 */
    _this.width = configs.width || 20;
    /** @member {Number}      - 内部矩形高 */
    _this.height = configs.height || 10;
    return _this;
  }
  capsule_createClass(Capsule, [{
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      ctx.beginPath();
      var _this$anchor = capsule_slicedToArray(this.anchor, 2),
        x = _this$anchor[0],
        y = _this$anchor[1];
      var hw = this.width / 2;
      var hh = this.height / 2;
      var leftCenter = x - hw + hh;
      var rightCenter = x + hw - hh;
      var top = y - hh;
      var bottom = y + hh;
      ctx.moveTo(leftCenter, top);
      ctx.lineTo(rightCenter, top);
      ctx.arc(rightCenter, y, hh, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(leftCenter, bottom);
      ctx.arc(leftCenter, y, hh, Math.PI / 2, Math.PI / 2 * 3);
      ctx.fillStyle = this.backgroundColor;
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowOffsetX = this.shadowOffsetX;
        ctx.shadowOffsetY = this.shadowOffsetY;
      }
      ctx.fill();
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
      }
      // ctx.fillStyle = 'rgba(0,0,0,0.3)';
      // ctx.fillRect(x-hw, y-hh, this.width, this.height)

      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      var anchor = this.anchor;
      var hw = this.width / 2;
      var hh = this.height / 2;
      var ww = Math.abs(hw - hh);
      var leftCenter = anchor[0] - hw + hh;
      var rightCenter = anchor[0] + hw - hh;
      var rr = hh * hh;
      return point[0] > anchor[0] - ww && point[0] < anchor[0] + ww && point[1] > anchor[1] - hh && point[1] < anchor[1] + hh || Math.pow(point[0] - leftCenter, 2) + Math.pow(point[1] - anchor[1], 2) < rr || Math.pow(point[0] - rightCenter, 2) + Math.pow(point[1] - anchor[1], 2) < rr;
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        height: this.height,
        width: this.width
      };
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var p2 = this.anchor;
      if (this._belongs && this._belongs.calculateToCoordination) {
        p2 = this._belongs.calculateToCoordination(p2);
      }
      var _p = p2,
        _p2 = capsule_slicedToArray(_p, 2),
        x2 = _p2[0],
        y2 = _p2[1];
      var w = this.width / 2;
      var h = this.height / 2;
      return _ref = {}, capsule_defineProperty(_ref, DIRECTION.RIGHT, [x2 + w, y2]), capsule_defineProperty(_ref, DIRECTION.LEFT, [x2 - w, y2]), capsule_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + h]), capsule_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - h]), _ref;
    }
  }]);
  return Capsule;
}(node);
/* harmony default export */ const capsule = (Capsule);
;// CONCATENATED MODULE: ./src/core/instance/shapes/capsule-vertical.js
function capsule_vertical_typeof(obj) { "@babel/helpers - typeof"; return capsule_vertical_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, capsule_vertical_typeof(obj); }
function capsule_vertical_slicedToArray(arr, i) { return capsule_vertical_arrayWithHoles(arr) || capsule_vertical_iterableToArrayLimit(arr, i) || capsule_vertical_unsupportedIterableToArray(arr, i) || capsule_vertical_nonIterableRest(); }
function capsule_vertical_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function capsule_vertical_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return capsule_vertical_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return capsule_vertical_arrayLikeToArray(o, minLen); }
function capsule_vertical_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function capsule_vertical_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function capsule_vertical_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function capsule_vertical_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function capsule_vertical_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, capsule_vertical_toPropertyKey(descriptor.key), descriptor); } }
function capsule_vertical_createClass(Constructor, protoProps, staticProps) { if (protoProps) capsule_vertical_defineProperties(Constructor.prototype, protoProps); if (staticProps) capsule_vertical_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function capsule_vertical_toPropertyKey(arg) { var key = capsule_vertical_toPrimitive(arg, "string"); return capsule_vertical_typeof(key) === "symbol" ? key : String(key); }
function capsule_vertical_toPrimitive(input, hint) { if (capsule_vertical_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (capsule_vertical_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function capsule_vertical_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) capsule_vertical_setPrototypeOf(subClass, superClass); }
function capsule_vertical_setPrototypeOf(o, p) { capsule_vertical_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return capsule_vertical_setPrototypeOf(o, p); }
function capsule_vertical_createSuper(Derived) { var hasNativeReflectConstruct = capsule_vertical_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = capsule_vertical_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = capsule_vertical_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return capsule_vertical_possibleConstructorReturn(this, result); }; }
function capsule_vertical_possibleConstructorReturn(self, call) { if (call && (capsule_vertical_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return capsule_vertical_assertThisInitialized(self); }
function capsule_vertical_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function capsule_vertical_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function capsule_vertical_getPrototypeOf(o) { capsule_vertical_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return capsule_vertical_getPrototypeOf(o); }

/**
 * 垂直胶囊单元
 * @constructor CapsuleVertical
 * @extends Capsule
 * @param {Capsule~CapsuleConfigs} configs - 配置
 */
var CapsuleVertical = /*#__PURE__*/function (_Capsule) {
  capsule_vertical_inherits(CapsuleVertical, _Capsule);
  var _super = capsule_vertical_createSuper(CapsuleVertical);
  function CapsuleVertical() {
    capsule_vertical_classCallCheck(this, CapsuleVertical);
    return _super.apply(this, arguments);
  }
  capsule_vertical_createClass(CapsuleVertical, [{
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      ctx.beginPath();
      var _this$anchor = capsule_vertical_slicedToArray(this.anchor, 2),
        x = _this$anchor[0],
        y = _this$anchor[1];
      var hw = this.width / 2;
      var hh = this.height / 2;
      var topCenter = y - hh + hw;
      var bottomCenter = y + hh - hw;
      var left = x - hw;
      var right = x + hw;
      ctx.moveTo(left, topCenter);
      ctx.arc(x, topCenter, hw, -Math.PI, 0);
      ctx.lineTo(right, bottomCenter);
      ctx.arc(x, bottomCenter, hw, 0, Math.PI);
      ctx.closePath();
      ctx.fillStyle = this.backgroundColor;
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowOffsetX = this.shadowOffsetX;
        ctx.shadowOffsetY = this.shadowOffsetY;
      }
      ctx.fill();
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
      }
      // ctx.fillStyle = 'rgba(0,0,0,0.3)';
      // ctx.fillRect(x-hw, y-hh, this.width, this.height)

      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point, condition) {
      var _this$anchor2 = capsule_vertical_slicedToArray(this.anchor, 2),
        x = _this$anchor2[0],
        y = _this$anchor2[1];
      var hw = this.width / 2;
      var hh = this.height / 2;
      var yy = Math.abs(hh - hw);
      var topCenter = y - hh + hw;
      var bottomCenter = y + hh - hw;
      var rr = hw * hw;
      return point[0] > x - hw && point[0] < x + hw && point[1] > y - yy && point[1] < y + yy || Math.pow(point[0] - x, 2) + Math.pow(point[1] - topCenter, 2) < rr || Math.pow(point[0] - x, 2) + Math.pow(point[1] - bottomCenter, 2) < rr;
    }
  }]);
  return CapsuleVertical;
}(capsule);
/* harmony default export */ const capsule_vertical = (CapsuleVertical);
;// CONCATENATED MODULE: ./src/core/instance/shapes/rhombus.js
function rhombus_typeof(obj) { "@babel/helpers - typeof"; return rhombus_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, rhombus_typeof(obj); }
function rhombus_defineProperty(obj, key, value) { key = rhombus_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function rhombus_slicedToArray(arr, i) { return rhombus_arrayWithHoles(arr) || rhombus_iterableToArrayLimit(arr, i) || rhombus_unsupportedIterableToArray(arr, i) || rhombus_nonIterableRest(); }
function rhombus_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function rhombus_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return rhombus_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rhombus_arrayLikeToArray(o, minLen); }
function rhombus_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function rhombus_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function rhombus_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function rhombus_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function rhombus_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, rhombus_toPropertyKey(descriptor.key), descriptor); } }
function rhombus_createClass(Constructor, protoProps, staticProps) { if (protoProps) rhombus_defineProperties(Constructor.prototype, protoProps); if (staticProps) rhombus_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function rhombus_toPropertyKey(arg) { var key = rhombus_toPrimitive(arg, "string"); return rhombus_typeof(key) === "symbol" ? key : String(key); }
function rhombus_toPrimitive(input, hint) { if (rhombus_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (rhombus_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function rhombus_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) rhombus_setPrototypeOf(subClass, superClass); }
function rhombus_setPrototypeOf(o, p) { rhombus_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return rhombus_setPrototypeOf(o, p); }
function rhombus_createSuper(Derived) { var hasNativeReflectConstruct = rhombus_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = rhombus_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = rhombus_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return rhombus_possibleConstructorReturn(this, result); }; }
function rhombus_possibleConstructorReturn(self, call) { if (call && (rhombus_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return rhombus_assertThisInitialized(self); }
function rhombus_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function rhombus_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function rhombus_getPrototypeOf(o) { rhombus_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return rhombus_getPrototypeOf(o); }


/**
 * 菱形单元 配置
 * @typedef {Node~Configs} Rhombus~RhombusConfigs
 * @property {number} diagonalsV  - 内十字高度
 * @property {number} diagonalsH  - 内十字宽度
 */
/**
 * 菱形单元
 * @constructor Rhombus
 * @param {Rhombus~RhombusConfigs} configs - 配置
 * @extends Node
 */
var Rhombus = /*#__PURE__*/function (_Node) {
  rhombus_inherits(Rhombus, _Node);
  var _super = rhombus_createSuper(Rhombus);
  function Rhombus() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    rhombus_classCallCheck(this, Rhombus);
    _this = _super.call(this, configs);
    _this.type = 'Rhombus';
    /** @member {Number}      - 内十字高度 */
    _this.height = configs.diagonalsV || 10;
    /** @member {Number}      - 内十字宽度 */
    _this.width = configs.diagonalsH || 20;
    return _this;
  }
  rhombus_createClass(Rhombus, [{
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      var w = this.width / 2;
      var h = this.height / 2;
      var center = this.anchor;
      ctx.translate(center[0], center[1]);
      ctx.beginPath();
      ctx.moveTo(0, -h);
      ctx.lineTo(w, 0);
      ctx.lineTo(0, h);
      ctx.lineTo(-w, 0);
      ctx.closePath();
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
      }
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        var scale = this._jflow.scale;
        ctx.shadowBlur = this.shadowBlur * scale;
        ctx.shadowOffsetX = this.shadowOffsetX * scale;
        ctx.shadowOffsetY = this.shadowOffsetY * scale;
        var switchPath = new Path2D();
        switchPath.moveTo(0, -h);
        switchPath.lineTo(w, 0);
        switchPath.lineTo(0, h);
        switchPath.lineTo(-w, 0);
        switchPath.closePath();
        switchPath.rect(-w - 10, -h - 10, this.width + 20, this.height + 20);
        // switchPath.moveTo(x, y-h);
        // switchPath.lineTo(x + w, y);
        // switchPath.lineTo(x, y + h);
        // switchPath.lineTo(x-w, y);
        // switchPath.closePath();
        // switchPath.rect(x - w - 10, y - h - 10, this.width+ 20, this.height+ 20);
        ctx.save();
        ctx.clip(switchPath, "evenodd");
        ctx.stroke();
        ctx.restore();
      }
      ctx.fillStyle = this.backgroundColor;
      ctx.fill();
      if (this.borderWidth) {
        ctx.shadowColor = 'transparent';
        ctx.stroke();
      }
      ctx.translate(-center[0], -center[1]);
      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      var v = this.height / 2;
      var h = this.width / 2;
      var anchor = this.anchor;
      var x = Math.abs(point[0] - anchor[0]);
      var y = Math.abs(point[1] - anchor[1]);
      return x / h + y / v <= 1;
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        height: this.height,
        width: this.width
      };
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var p2 = this.anchor;
      if (this._belongs && this._belongs.calculateToCoordination) {
        p2 = this._belongs.calculateToCoordination(p2);
      }
      var _p = p2,
        _p2 = rhombus_slicedToArray(_p, 2),
        x2 = _p2[0],
        y2 = _p2[1];
      var w = this.width / 2;
      var h = this.height / 2;
      return _ref = {}, rhombus_defineProperty(_ref, DIRECTION.RIGHT, [x2 + w, y2]), rhombus_defineProperty(_ref, DIRECTION.LEFT, [x2 - w, y2]), rhombus_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + h]), rhombus_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - h]), rhombus_defineProperty(_ref, DIRECTION.SELF, [x2 + w * 0.618, y2 + h * 0.618]), _ref;
    }
  }]);
  return Rhombus;
}(node);
/* harmony default export */ const rhombus = (Rhombus);
;// CONCATENATED MODULE: ./src/core/instance/shapes/diamond.js
function diamond_typeof(obj) { "@babel/helpers - typeof"; return diamond_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, diamond_typeof(obj); }
function diamond_defineProperty(obj, key, value) { key = diamond_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function diamond_slicedToArray(arr, i) { return diamond_arrayWithHoles(arr) || diamond_iterableToArrayLimit(arr, i) || diamond_unsupportedIterableToArray(arr, i) || diamond_nonIterableRest(); }
function diamond_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function diamond_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return diamond_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return diamond_arrayLikeToArray(o, minLen); }
function diamond_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function diamond_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function diamond_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function diamond_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function diamond_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, diamond_toPropertyKey(descriptor.key), descriptor); } }
function diamond_createClass(Constructor, protoProps, staticProps) { if (protoProps) diamond_defineProperties(Constructor.prototype, protoProps); if (staticProps) diamond_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function diamond_toPropertyKey(arg) { var key = diamond_toPrimitive(arg, "string"); return diamond_typeof(key) === "symbol" ? key : String(key); }
function diamond_toPrimitive(input, hint) { if (diamond_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (diamond_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function diamond_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) diamond_setPrototypeOf(subClass, superClass); }
function diamond_setPrototypeOf(o, p) { diamond_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return diamond_setPrototypeOf(o, p); }
function diamond_createSuper(Derived) { var hasNativeReflectConstruct = diamond_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = diamond_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = diamond_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return diamond_possibleConstructorReturn(this, result); }; }
function diamond_possibleConstructorReturn(self, call) { if (call && (diamond_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return diamond_assertThisInitialized(self); }
function diamond_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function diamond_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function diamond_getPrototypeOf(o) { diamond_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return diamond_getPrototypeOf(o); }


// import { makeBezierPoints } from '../../utils/functions';
/**
 * 钻石形单元 配置
 * @typedef {Node~Configs} Diamond~DiamondConfigs
 * @property {number} width  - 内部矩形宽
 * @property {number} height - 内部矩形高
 * @property {number} side   - 两侧三角形的宽
 */
/**
 * 钻石形单元
 * @constructor Diamond
 * @param {Diamond~DiamondConfigs} configs - 配置
 * @extends Node
 */
var Diamond = /*#__PURE__*/function (_Node) {
  diamond_inherits(Diamond, _Node);
  var _super = diamond_createSuper(Diamond);
  function Diamond() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    diamond_classCallCheck(this, Diamond);
    _this = _super.call(this, configs);
    _this.type = 'Diamond';
    /** @member {Number}      - 内部矩形宽 */
    _this.width = configs.width || 20;
    /** @member {Number}      - 内部矩形高 */
    _this.height = configs.height || 10;
    /** @member {Number}      - 两侧三角形的宽 */
    _this.side = configs.side || 6;
    _this._doCache();
    return _this;
  }
  diamond_createClass(Diamond, [{
    key: "setConfig",
    value: function setConfig(configs) {
      var _this2 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this2[k] = configs[k];
          _this2._rawConfigs[k] = configs[k];
        }
      });
      this._doCache();
    }
  }, {
    key: "_doCache",
    value: function _doCache() {
      this.sinSIDE = Math.sin(Math.PI / 3) * this.side;
      this.cosSIDE = Math.cos(Math.PI / 3) * this.side;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      var _this$anchor = diamond_slicedToArray(this.anchor, 2),
        x = _this$anchor[0],
        y = _this$anchor[1];
      var hw = this.width / 2;
      var hh = this.height / 2;
      var xx = hh / 1.732;
      var leftCenter = x - hw + xx;
      var rightCenter = x + hw - xx;
      var right = x + hw;
      var left = x - hw;
      var top = y - hh;
      var bottom = y + hh;
      this._cachePoints = [[rightCenter, top], [right, y], [rightCenter, bottom], [leftCenter, bottom], [left, y], [leftCenter, top]];
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      ctx.beginPath();
      var side = this.side,
        sinSIDE = this.sinSIDE,
        cosSIDE = this.cosSIDE;
      ctx.moveTo(x, top);
      ctx.lineTo(rightCenter - side, top);
      ctx.quadraticCurveTo(rightCenter, top, rightCenter + cosSIDE, top + sinSIDE);
      ctx.lineTo(right - cosSIDE, y - sinSIDE);
      ctx.quadraticCurveTo(right, y, right - cosSIDE, y + sinSIDE);
      ctx.lineTo(rightCenter + cosSIDE, bottom - sinSIDE);
      ctx.quadraticCurveTo(rightCenter, bottom, rightCenter - side, bottom);
      ctx.lineTo(leftCenter + side, bottom);
      ctx.quadraticCurveTo(leftCenter, bottom, leftCenter - cosSIDE, bottom - sinSIDE);
      ctx.lineTo(left + cosSIDE, y + sinSIDE);
      ctx.quadraticCurveTo(left, y, left + cosSIDE, y - sinSIDE);
      ctx.lineTo(leftCenter - cosSIDE, top + sinSIDE);
      ctx.quadraticCurveTo(leftCenter, top, leftCenter + side, top);
      ctx.closePath();
      ctx.fillStyle = this.backgroundColor;
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowOffsetX = this.shadowOffsetX;
        ctx.shadowOffsetY = this.shadowOffsetY;
      }
      ctx.fill();
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
      }

      // if(this._isTargeting) {
      //     this.renderFocus(ctx);
      // }
      // ctx.fillStyle = 'rgba(0,0,0,0.3)';
      // ctx.fillRect(x-hw, y-hh, this.width, this.height)

      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      if (!this._cachePoints) return false;
      var polygon = this._cachePoints;
      var odd = false;
      // For each edge (In this case for each point of the polygon and the previous one)
      for (var i = 0, j = polygon.length - 1; i < polygon.length; i++) {
        // If a line from the point into infinity crosses this edge
        if (polygon[i][1] > point[1] !== polygon[j][1] > point[1] // One point needs to be above, one below our y coordinate
        // ...and the edge doesn't cross our Y corrdinate before our x coordinate (but between our x coordinate and infinity)
        && point[0] < (polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]) {
          // Invert odd
          odd = !odd;
        }
        j = i;
      }
      return odd;
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        height: this.height,
        width: this.width
      };
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var p2 = this.anchor;
      if (this._belongs && this._belongs.calculateToCoordination) {
        p2 = this._belongs.calculateToCoordination(p2);
      }
      var _p = p2,
        _p2 = diamond_slicedToArray(_p, 2),
        x2 = _p2[0],
        y2 = _p2[1];
      var w = this.width / 2;
      var h = this.height / 2;
      return _ref = {}, diamond_defineProperty(_ref, DIRECTION.RIGHT, [x2 + w, y2]), diamond_defineProperty(_ref, DIRECTION.LEFT, [x2 - w, y2]), diamond_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + h]), diamond_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - h]), _ref;
    }
  }]);
  return Diamond;
}(node);
/* harmony default export */ const diamond = (Diamond);
;// CONCATENATED MODULE: ./src/core/instance/shapes/diamond-vertical.js
function diamond_vertical_typeof(obj) { "@babel/helpers - typeof"; return diamond_vertical_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, diamond_vertical_typeof(obj); }
function diamond_vertical_slicedToArray(arr, i) { return diamond_vertical_arrayWithHoles(arr) || diamond_vertical_iterableToArrayLimit(arr, i) || diamond_vertical_unsupportedIterableToArray(arr, i) || diamond_vertical_nonIterableRest(); }
function diamond_vertical_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function diamond_vertical_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return diamond_vertical_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return diamond_vertical_arrayLikeToArray(o, minLen); }
function diamond_vertical_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function diamond_vertical_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function diamond_vertical_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function diamond_vertical_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function diamond_vertical_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, diamond_vertical_toPropertyKey(descriptor.key), descriptor); } }
function diamond_vertical_createClass(Constructor, protoProps, staticProps) { if (protoProps) diamond_vertical_defineProperties(Constructor.prototype, protoProps); if (staticProps) diamond_vertical_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function diamond_vertical_toPropertyKey(arg) { var key = diamond_vertical_toPrimitive(arg, "string"); return diamond_vertical_typeof(key) === "symbol" ? key : String(key); }
function diamond_vertical_toPrimitive(input, hint) { if (diamond_vertical_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (diamond_vertical_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function diamond_vertical_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) diamond_vertical_setPrototypeOf(subClass, superClass); }
function diamond_vertical_setPrototypeOf(o, p) { diamond_vertical_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return diamond_vertical_setPrototypeOf(o, p); }
function diamond_vertical_createSuper(Derived) { var hasNativeReflectConstruct = diamond_vertical_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = diamond_vertical_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = diamond_vertical_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return diamond_vertical_possibleConstructorReturn(this, result); }; }
function diamond_vertical_possibleConstructorReturn(self, call) { if (call && (diamond_vertical_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return diamond_vertical_assertThisInitialized(self); }
function diamond_vertical_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function diamond_vertical_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function diamond_vertical_getPrototypeOf(o) { diamond_vertical_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return diamond_vertical_getPrototypeOf(o); }

var backsqrt3 = 1 / Math.sqrt(3);

/**
 * 垂直钻石形单元
 * @constructor DiamondVertical
 * @param {Diamond~DiamondConfigs} configs - 配置
 * @extends Diamond
 */
var DiamondVertical = /*#__PURE__*/function (_Diamond) {
  diamond_vertical_inherits(DiamondVertical, _Diamond);
  var _super = diamond_vertical_createSuper(DiamondVertical);
  function DiamondVertical(configs) {
    diamond_vertical_classCallCheck(this, DiamondVertical);
    return _super.call(this, configs);
  }
  diamond_vertical_createClass(DiamondVertical, [{
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      ctx.beginPath();
      var _this$anchor = diamond_vertical_slicedToArray(this.anchor, 2),
        x = _this$anchor[0],
        y = _this$anchor[1];
      var hw = this.width / 2;
      var hh = this.height / 2;
      var yy = hw / 1.732;
      var top = y - hh;
      var bottom = y + hh;
      var topmiddle = y - hh + yy;
      var bottommiddle = y + hh - yy;
      var xleft = x - hw;
      var xright = x + hw;
      ctx.moveTo(x, top);
      ctx.lineTo(xright, topmiddle);
      ctx.lineTo(xright, bottommiddle);
      ctx.lineTo(x, bottom);
      ctx.lineTo(xleft, bottommiddle);
      ctx.lineTo(xleft, topmiddle);
      ctx.closePath();
      ctx.fillStyle = this.backgroundColor;
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowOffsetX = this.shadowOffsetX;
        ctx.shadowOffsetY = this.shadowOffsetY;
      }
      ctx.fill();
      if (this.borderWidth) {
        ctx.lineWidth = this.borderWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
      }
      ctx.restore();
      this._cachePoints = [[x, top], [xright, topmiddle], [xright, bottommiddle], [x, bottom], [xleft, bottommiddle], [xleft, topmiddle]];
    }
  }]);
  return DiamondVertical;
}(diamond);
/* harmony default export */ const diamond_vertical = (DiamondVertical);
;// CONCATENATED MODULE: ./src/core/instance/groups/scroll-group.js
function scroll_group_typeof(obj) { "@babel/helpers - typeof"; return scroll_group_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, scroll_group_typeof(obj); }
function scroll_group_defineProperty(obj, key, value) { key = scroll_group_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function scroll_group_slicedToArray(arr, i) { return scroll_group_arrayWithHoles(arr) || scroll_group_iterableToArrayLimit(arr, i) || scroll_group_unsupportedIterableToArray(arr, i) || scroll_group_nonIterableRest(); }
function scroll_group_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function scroll_group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return scroll_group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return scroll_group_arrayLikeToArray(o, minLen); }
function scroll_group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function scroll_group_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function scroll_group_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function scroll_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function scroll_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, scroll_group_toPropertyKey(descriptor.key), descriptor); } }
function scroll_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) scroll_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) scroll_group_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function scroll_group_toPropertyKey(arg) { var key = scroll_group_toPrimitive(arg, "string"); return scroll_group_typeof(key) === "symbol" ? key : String(key); }
function scroll_group_toPrimitive(input, hint) { if (scroll_group_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (scroll_group_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = scroll_group_getPrototypeOf(object); if (object === null) break; } return object; }
function scroll_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) scroll_group_setPrototypeOf(subClass, superClass); }
function scroll_group_setPrototypeOf(o, p) { scroll_group_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return scroll_group_setPrototypeOf(o, p); }
function scroll_group_createSuper(Derived) { var hasNativeReflectConstruct = scroll_group_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = scroll_group_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = scroll_group_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return scroll_group_possibleConstructorReturn(this, result); }; }
function scroll_group_possibleConstructorReturn(self, call) { if (call && (scroll_group_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return scroll_group_assertThisInitialized(self); }
function scroll_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function scroll_group_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function scroll_group_getPrototypeOf(o) { scroll_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return scroll_group_getPrototypeOf(o); }







var scroll_group_ishitKey = Symbol('ishit');
var InnerScrollBar = /*#__PURE__*/function (_ScrollBar) {
  scroll_group_inherits(InnerScrollBar, _ScrollBar);
  var _super = scroll_group_createSuper(InnerScrollBar);
  function InnerScrollBar(dir) {
    var _this;
    var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    scroll_group_classCallCheck(this, InnerScrollBar);
    _this = _super.call(this, dir, configs);
    _this.visible = false;
    return _this;
  }
  scroll_group_createClass(InnerScrollBar, [{
    key: "render",
    value: function render(ctx) {
      if (this.visible) {
        _get(scroll_group_getPrototypeOf(InnerScrollBar.prototype), "render", this).call(this, ctx);
      }
    }
  }, {
    key: "setHit",
    value: function setHit(ishit) {
      if (this[scroll_group_ishitKey] !== ishit) {
        this.isFocus = ishit;
        this.onHit();
      }
      this[scroll_group_ishitKey] = ishit;
    }
  }]);
  return InnerScrollBar;
}(ScrollBar);
var ScrollGroup = /*#__PURE__*/function (_Node) {
  scroll_group_inherits(ScrollGroup, _Node);
  var _super2 = scroll_group_createSuper(ScrollGroup);
  function ScrollGroup(configs) {
    var _configs$lock;
    var _this2;
    scroll_group_classCallCheck(this, ScrollGroup);
    _this2 = _super2.call(this, configs);
    _this2.type = 'ScrollGroup';
    _this2.initStack(configs);
    _this2.initLayout(configs);
    _this2.initScrollBar(configs);
    _this2._shape = new rectangle(configs);
    _this2._shape.anchor = [0, 0];
    _this2._shape._belongs = scroll_group_assertThisInitialized(_this2);
    _this2.maxWidth = configs.maxWidth || Infinity;
    _this2.definedWidth = configs.definedWidth;
    _this2.maxHeight = configs.maxHeight || Infinity;
    _this2.definedHeight = configs.definedHeight;
    _this2.lock = (_configs$lock = configs.lock) !== null && _configs$lock !== void 0 ? _configs$lock : true;
    _this2._offset = [0, 0];
    _this2._getBoundingGroupRect();
    _this2.reflow();
    _this2._getBoundingGroupRect();
    _this2._resetOffset();
    _this2._cacheViewBox = [];
    return _this2;
  }
  scroll_group_createClass(ScrollGroup, [{
    key: "initScrollBar",
    value: function initScrollBar(configs) {
      var _this3 = this;
      var barColor = configs.barColor,
        barFocusColor = configs.barFocusColor,
        barMarginX = configs.barMarginX,
        barMarginY = configs.barMarginY,
        barWidth = configs.barWidth;
      this._scrollbarX = new InnerScrollBar('x', {
        plainColor: barColor,
        focusColor: barFocusColor,
        barWidth: barWidth
      });
      this._scrollbarY = new InnerScrollBar('y', {
        plainColor: barColor,
        focusColor: barFocusColor,
        barWidth: barWidth
      });
      this._scrollbarX.barMarginX = barMarginX || 1;
      this._scrollbarY.barMarginY = barMarginY || 1;
      var _f = function _f() {
        _this3._jflow.scheduleRender();
      };
      this._scrollbarX.onHit = _f;
      this._scrollbarY.onHit = _f;
      this._scrollBarStatus = {
        dragging: false,
        target: null,
        barInitX: 0,
        barInitY: 0,
        barStartX: 0,
        barStartY: 0,
        hitScrollX: false,
        hitScrollY: false
      };
      // // const jflowInstance = this._jflow;
      // this.addEventListener('instancemousemove', e => {
      //     if(this._scrollBarStatus.hitScrollX) {
      //         if(!this._scrollbarX.isFocus) {
      //             this._scrollbarX.isFocus = true;
      //             e.detail.jflow.scheduleRender();
      //         }
      //         return;
      //     }
      //     if(this._scrollbarX.isFocus) {
      //         this._scrollbarX.isFocus = false;
      //         e.detail.jflow.scheduleRender();
      //     }

      // })
      this.addEventListener('instancePressStart', function (e) {
        if (_this3._scrollBarStatus.hitScrollX) {
          e.detail.preventDefault();
          e.detail.bubbles = false;
          var clientX = e.detail.event.clientX;
          Object.assign(_this3._scrollBarStatus, {
            dragging: true,
            target: _this3._scrollbarX,
            barStartX: _this3._scrollbarX.anchor[0],
            barInitX: clientX
          });
          _this3.onScrollbarPressStart();
        }
        if (_this3._scrollBarStatus.hitScrollY) {
          e.detail.preventDefault();
          e.detail.bubbles = false;
          var clientY = e.detail.event.clientY;
          Object.assign(_this3._scrollBarStatus, {
            dragging: true,
            target: _this3._scrollbarY,
            barStartY: _this3._scrollbarY.anchor[1],
            barInitY: clientY
          });
          _this3.onScrollbarPressStart();
        }
      });
    }
  }, {
    key: "onScrollbarPressStart",
    value: function onScrollbarPressStart() {
      var _this4 = this;
      var jflowInstance = this._jflow;
      var canvas = jflowInstance.canvas;
      var f = function (e) {
        var clientX = e.clientX,
          clientY = e.clientY;
        _this4.onDraggingScrollbar(clientX, clientY);
      }.bind(this);
      document.addEventListener('pointermove', f);
      var t = function (e) {
        Object.assign(_this4._scrollBarStatus, {
          dragging: false,
          target: null,
          barInitX: 0,
          barInitY: 0,
          barStartX: 0,
          barStartY: 0,
          hitScrollX: false,
          hitScrollY: false
        });
        document.removeEventListener('pointermove', f);
        document.removeEventListener('pointerup', t);
        canvas.removeEventListener('pointerup', t);
      }.bind(this);
      canvas.addEventListener('pointerup', t, {
        once: true
      });
      document.addEventListener('pointerup', t, {
        once: true
      });
    }
  }, {
    key: "onDraggingScrollbar",
    value: function onDraggingScrollbar(clientX, clientY) {
      if (this._scrollbarX.visible && this._scrollBarStatus.dragging) {
        var JFLOW = this._jflow;
        var scale = JFLOW.scale;
        var _this$_scrollBarStatu = this._scrollBarStatus,
          target = _this$_scrollBarStatu.target,
          barInitX = _this$_scrollBarStatu.barInitX,
          barStartX = _this$_scrollBarStatu.barStartX,
          barInitY = _this$_scrollBarStatu.barInitY,
          barStartY = _this$_scrollBarStatu.barStartY;
        if (target.dir === 'x') {
          var _scrollWidth = this._scrollbarX.width;
          var _outerWidth = this._outerWidth;
          var deltaX = clientX - barInitX;
          var xnew = barStartX + deltaX / scale;
          var q = target.anchor[0] = Math.max(Math.min(xnew, _outerWidth - _scrollWidth), 0);
          var ratioInX = q / (_outerWidth - _scrollWidth);
          var s = (this._innerWidth - _outerWidth) / 2;
          this._offset[0] = s - (this._innerWidth - _outerWidth) * ratioInX;
          JFLOW.scheduleRender();
        }
        if (target.dir === 'y') {
          var _scrollHeight = this._scrollbarY.height;
          var _outerHeight = this._outerHeight;
          var deltaY = clientY - barInitY;
          var ynew = barStartY + deltaY / scale;
          var _q = target.anchor[1] = Math.max(Math.min(ynew, _outerHeight - _scrollHeight), 0);
          var ratio = _q / (_outerHeight - _scrollHeight);
          var _s = (this._innerHeight - _outerHeight) / 2;
          this._offset[1] = _s - (this._innerHeight - _outerHeight) * ratio;
          JFLOW.scheduleRender();
        }
      }
    }
  }, {
    key: "setConfig",
    value: function setConfig(configs) {
      this._shape.setConfig(configs);
    }
  }, {
    key: "_getBoundingGroupRect",
    value: function _getBoundingGroupRect() {
      var points = this._stack.getBoundingRectPoints();
      // content box 
      var bbox = bounding_box(points);
      var w = bbox.width;
      var h = bbox.height;
      var outerWidth = this.definedWidth || Math.min(w, this.maxWidth);
      var outerHeight = this.definedHeight || Math.min(h, this.maxHeight);
      this._innerWidth = w;
      this._outerWidth = outerWidth;
      this._innerHeight = h;
      this._outerHeight = outerHeight;
      this._shape.width = outerWidth;
      this._shape.height = outerHeight;
      this.width = outerWidth;
      this.height = outerHeight;
    }
  }, {
    key: "_calculatePointBack",
    value: function _calculatePointBack(point) {
      var _point = scroll_group_slicedToArray(point, 2),
        gx = _point[0],
        gy = _point[1];
      var _this$_offset = scroll_group_slicedToArray(this._offset, 2),
        tx = _this$_offset[0],
        ty = _this$_offset[1];
      var _this$anchor = scroll_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor[0],
        cy = _this$anchor[1];
      var p = [gx - cx - tx, gy - cy - ty];
      return p;
    }
  }, {
    key: "_calculatePointBackWithPoint",
    value: function _calculatePointBackWithPoint(a, b, arr, idx1, idx2) {
      var anchor = this.anchor;
      var offset = this._offset;
      arr[idx1] = a - anchor[0] - offset[0];
      arr[idx2] = b - anchor[1] - offset[1];
    }
  }, {
    key: "calculateToCoordination",
    value: function calculateToCoordination(point) {
      var _point2 = scroll_group_slicedToArray(point, 2),
        gx = _point2[0],
        gy = _point2[1];
      var _this$anchor2 = scroll_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor2[0],
        cy = _this$anchor2[1];
      var _this$_offset2 = scroll_group_slicedToArray(this._offset, 2),
        tx = _this$_offset2[0],
        ty = _this$_offset2[1];
      var p = [gx + cx - tx, gy + cy - ty];
      if (this._belongs && this._belongs.calculateToCoordination) {
        return this._belongs.calculateToCoordination(p);
      } else {
        return p;
      }
    }
  }, {
    key: "calculateToRealWorld",
    value: function calculateToRealWorld(point) {
      var _point3 = scroll_group_slicedToArray(point, 2),
        gx = _point3[0],
        gy = _point3[1];
      var _this$anchor3 = scroll_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor3[0],
        cy = _this$anchor3[1];
      var _this$_offset3 = scroll_group_slicedToArray(this._offset, 2),
        tx = _this$_offset3[0],
        ty = _this$_offset3[1];
      var p = [gx + cx - tx, gy + cy - ty];
      if (this._belongs && this._belongs.calculateToRealWorld) {
        return this._belongs.calculateToRealWorld(p);
      }
    }
  }, {
    key: "calculateToRealWorldWithPointer",
    value: function calculateToRealWorldWithPointer(outpoint, inpoint) {
      outpoint[0] = inpoint[0] + this.anchor[0] - this.offset[0];
      outpoint[1] = inpoint[1] + this.anchor[1] - this.offset[1];
      if (this._belongs && this._belongs.calculateToRealWorldWithPointer) {
        return this._belongs.calculateToRealWorldWithPointer(outpoint, outpoint);
      }
    }
  }, {
    key: "_getViewBox",
    value: function _getViewBox() {
      var belongs_vbox = this._belongs.getCacheViewBox();
      var cacheViewBox = this._cacheViewBox;
      this._calculatePointBackWithPoint(belongs_vbox[0], belongs_vbox[1], cacheViewBox, 0, 1);
      this._calculatePointBackWithPoint(belongs_vbox[2], belongs_vbox[3], cacheViewBox, 2, 3);
      return this._cacheViewBox;
    }
  }, {
    key: "getCacheViewBox",
    value: function getCacheViewBox() {
      return this._cacheViewBox;
    }
  }, {
    key: "_resetOffset",
    value: function _resetOffset() {
      this._offset = [Math.max((this._innerWidth - this._outerWidth) / 2, 0), Math.max((this._innerHeight - this._outerHeight) / 2, 0)];
      if (this._innerWidth > this._outerWidth) {
        this._scrollbarX.visible = true;
        this._scrollbarX.width = this._outerWidth * this._outerWidth / this._innerWidth;
        this._scrollbarX.anchor = [0, this._outerHeight - 4];
      } else {
        this._scrollbarX.visible = false;
      }
      if (this._innerHeight > this._outerHeight) {
        this._scrollbarY.visible = true;
        this._scrollbarY.height = this._outerHeight * this._outerHeight / this._innerHeight;
        this._scrollbarY.anchor = [this._outerWidth - 4, 0];
      } else {
        this._scrollbarY.visible = false;
      }
    }
  }, {
    key: "render",
    value: function render(ctx) {
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      } else if (this.opacity !== 1) {
        ctx.globalAlpha = this.opacity;
      }
      var _this$anchor4 = scroll_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor4[0],
        cy = _this$anchor4[1];
      var w = this.width;
      var h = this.height;
      var w2 = w / 2;
      var h2 = h / 2;
      // if((this.width * this.height) * this._jflow.scale < 144) {
      //     ctx.restore();
      //     return;
      // }
      var _this$_offset4 = scroll_group_slicedToArray(this._offset, 2),
        tx = _this$_offset4[0],
        ty = _this$_offset4[1];
      ctx.translate(cx, cy);
      this._shape.render(ctx);
      ctx.translate(-w2, -h2);
      if (this._scrollbarX.visible) {
        this._scrollbarX.render(ctx);
      }
      if (this._scrollbarY.visible) {
        this._scrollbarY.render(ctx);
      }
      ctx.translate(w2, h2);
      ctx.save();
      ctx.beginPath();
      ctx.rect(-w2, -h2, w, h);
      ctx.clip();
      ctx.translate(tx, ty);
      this._stack.render(ctx);
      this._linkStack.render(ctx);
      ctx.translate(-cx - tx, -cy - ty);
      ctx.restore();
    }
  }, {
    key: "isHit",
    value: function isHit(point, condition) {
      var _point4 = scroll_group_slicedToArray(point, 2),
        gx = _point4[0],
        gy = _point4[1];
      var _this$anchor5 = scroll_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor5[0],
        cy = _this$anchor5[1];
      var w = this.width / 2;
      var h = this.height / 2;
      var sp = [gx - cx + w, gy - cy + h];
      this._scrollBarStatus.hitScrollX = false;
      this._scrollBarStatus.hitScrollY = false;
      if (this._scrollbarX.visible) {
        var xhit = this._scrollbarX.isHit(sp);
        if (xhit) {
          this._scrollBarStatus.hitScrollX = true;
          this._scrollbarX.setHit(true);
          return true;
        }
      }
      this._scrollbarX.setHit(false);
      if (this._scrollbarY.visible) {
        var yhit = this._scrollbarY.isHit(sp);
        if (yhit) {
          this._scrollBarStatus.hitScrollY = true;
          this._scrollbarY.setHit(true);
          return true;
        }
      }
      this._scrollbarY.setHit(false);

      // const br = this._getViewBox();
      var isInBound = this._shape.isHit([gx - cx, gy - cy]);
      if (isInBound) {
        var _this$_offset5 = scroll_group_slicedToArray(this._offset, 2),
          tx = _this$_offset5[0],
          ty = _this$_offset5[1];
        var p = [gx - cx - tx, gy - cy - ty];
        this._currentp = p; // 暂存，为了后续计算别的位置
        var target = this._stack.checkHit(p, condition);
        if (target) return target;
      } else {
        this._stack.resetHitStatus();
      }
      return false;
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        width: this.width,
        height: this.height
      };
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "getIntersectionsInFourDimension",
    value: function getIntersectionsInFourDimension() {
      var _ref;
      var p2 = this.anchor;
      if (this._belongs && this._belongs.calculateToCoordination) {
        p2 = this._belongs.calculateToCoordination(p2);
      }
      var _p = p2,
        _p2 = scroll_group_slicedToArray(_p, 2),
        x2 = _p2[0],
        y2 = _p2[1];
      var w = this.width / 2;
      var h = this.height / 2;
      return _ref = {}, scroll_group_defineProperty(_ref, DIRECTION.RIGHT, [x2 + w, y2]), scroll_group_defineProperty(_ref, DIRECTION.LEFT, [x2 - w, y2]), scroll_group_defineProperty(_ref, DIRECTION.BOTTOM, [x2, y2 + h]), scroll_group_defineProperty(_ref, DIRECTION.TOP, [x2, y2 - h]), scroll_group_defineProperty(_ref, DIRECTION.SELF, [x2 + w * 0.618, y2 + h * 0.618]), _ref;
    }
  }, {
    key: "onEnterViewbox",
    value: function onEnterViewbox() {
      this.interateNodeStack(function (instance) {
        instance.onEnterViewbox();
      });
    }
  }, {
    key: "onLeaveViewbox",
    value: function onLeaveViewbox() {
      this.interateNodeStack(function (instance) {
        instance.onLeaveViewbox();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._shape.destroy();
      this.interateNodeStack(function (instance) {
        instance.destroy();
      });
    }
  }, {
    key: "clone",
    value: function clone() {
      var C = this.constructor;
      var configs = Object.assign({}, this._rawConfigs, {
        layout: this._layout && this._layout.clone()
      });
      var t = new C(configs);
      this.interateNodeStack(function (instance) {
        t.addToStack(instance.clone());
      });
      t.recalculate();
      t.visible = this.visible;
      return t;
    }
  }]);
  return ScrollGroup;
}(node);
Object.assign(ScrollGroup.prototype, stackMixin);
Object.assign(ScrollGroup.prototype, layoutMixin);
Object.assign(ScrollGroup.prototype, {
  recalculateUp: function recalculateUp() {
    var dirty = true;
    if (this.getBoundingDimension) {
      // const { width: wold, height: hold } = this.getBoundingDimension();
      var wold = this._innerWidth;
      var hold = this._innerHeight;
      if (this.resetChildrenPosition) {
        this.resetChildrenPosition();
      }
      if (this._getBoundingGroupRect) {
        this._getBoundingGroupRect();
      }
      this.reflow();
      if (this._getBoundingGroupRect) {
        this._getBoundingGroupRect();
      }
      var wnow = this._innerWidth;
      var hnow = this._innerHeight;
      // const { width: wnow, height: hnow } = this.getBoundingDimension();
      dirty = wold !== wnow || hold !== hnow;
    } else {
      this.reflow();
    }
    if (this._belongs && dirty) {
      this._resetOffset();
      this._belongs.recalculateUp();
    }
  },
  recalculate: function recalculate() {
    var _this$getBoundingDime = this.getBoundingDimension(),
      wold = _this$getBoundingDime.width,
      hold = _this$getBoundingDime.height;
    this.reflow();
    if (this._getBoundingGroupRect) {
      this._getBoundingGroupRect();
    }
    var _this$getBoundingDime2 = this.getBoundingDimension(),
      wnow = _this$getBoundingDime2.width,
      hnow = _this$getBoundingDime2.height;
    if (wold !== wnow || hold !== hnow) {
      this._resetOffset();
    }
  }
});
/* harmony default export */ const scroll_group = (ScrollGroup);
;// CONCATENATED MODULE: ./src/core/events/commonAdapter.js
/* harmony default export */ const commonAdapter = ({
  canvas: {
    wheel: function wheel(event, jflow) {
      event.preventDefault();
      var offsetX = event.offsetX,
        offsetY = event.offsetY,
        deltaX = event.deltaX,
        deltaY = event.deltaY;
      if (event.ctrlKey) {
        deltaY = -deltaY;
      }
      jflow.zoomHandler(offsetX, offsetY, deltaX, deltaY, event);
    }
  }
});
;// CONCATENATED MODULE: ./src/core/instance/base-link.js
function base_link_typeof(obj) { "@babel/helpers - typeof"; return base_link_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, base_link_typeof(obj); }
function base_link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function base_link_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, base_link_toPropertyKey(descriptor.key), descriptor); } }
function base_link_createClass(Constructor, protoProps, staticProps) { if (protoProps) base_link_defineProperties(Constructor.prototype, protoProps); if (staticProps) base_link_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function base_link_toPropertyKey(arg) { var key = base_link_toPrimitive(arg, "string"); return base_link_typeof(key) === "symbol" ? key : String(key); }
function base_link_toPrimitive(input, hint) { if (base_link_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (base_link_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function base_link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) base_link_setPrototypeOf(subClass, superClass); }
function base_link_setPrototypeOf(o, p) { base_link_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return base_link_setPrototypeOf(o, p); }
function base_link_createSuper(Derived) { var hasNativeReflectConstruct = base_link_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = base_link_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = base_link_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return base_link_possibleConstructorReturn(this, result); }; }
function base_link_possibleConstructorReturn(self, call) { if (call && (base_link_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return base_link_assertThisInitialized(self); }
function base_link_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function base_link_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function base_link_getPrototypeOf(o) { base_link_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return base_link_getPrototypeOf(o); }


/**
 * @typedef {Instance~Configs} BaseLink~Configs
 * @property {Instance} from   - 起始单元
 * @property {Instance} to     - 终止单元
 * @property {String} fromDir  - 起始方向 
 * @property {String} toDir    - 终止方向 
 * @property {String} key      - 连线唯一键值
 * @property {String} backgroundColor    - 线条颜色 
 */
/**
 * 连线基类
 * @constructor BaseLink
 * @extends Instance
 * @param {BaseLink~Configs} configs - 配置
 */
var BaseLink = /*#__PURE__*/function (_Instance) {
  base_link_inherits(BaseLink, _Instance);
  var _super = base_link_createSuper(BaseLink);
  function BaseLink() {
    var _this;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    base_link_classCallCheck(this, BaseLink);
    _this = _super.call(this);
    /** @member {Instance}      - 起始单元 */
    _this.from = configs.from;
    /** @member {Instance}      - 终止单元 */
    _this.to = configs.to;
    /** @member {DIRECTION}      - 起始方向 */
    _this.fromDir = configs.fromDir;
    /** @member {DIRECTION}      - 终止方向 */
    _this.toDir = configs.toDir;
    /** @member {number[][]}     - 连线控制点缓存 */
    _this._cachePoints = null;
    /** @member {string}     - 连线颜色，默认为 #000 */
    _this.backgroundColor = configs.backgroundColor || '#000';
    _this.isSelf = !!configs.isSelf;
    return _this;
  }

  /**
   * 是否出现在当前视窗内
   * @param {number[]} viewbox
   */
  base_link_createClass(BaseLink, [{
    key: "isInViewBox",
    value: function isInViewBox(viewbox) {
      return true;
    }
  }, {
    key: "bringToTop",
    value: function bringToTop() {
      var _this2 = this;
      var linkStack = this._jflow._linkStack;
      var index = linkStack.findIndex(function (l) {
        return l === _this2;
      });
      linkStack.splice(index, 1);
      linkStack.push(this);
      this._jflow._render();
    }
  }]);
  return BaseLink;
}(instance_instance);
/* harmony default export */ const base_link = (BaseLink);
;// CONCATENATED MODULE: ./src/core/instance/shapes/shadow-cache.js
function shadow_cache_typeof(obj) { "@babel/helpers - typeof"; return shadow_cache_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, shadow_cache_typeof(obj); }
function shadow_cache_slicedToArray(arr, i) { return shadow_cache_arrayWithHoles(arr) || shadow_cache_iterableToArrayLimit(arr, i) || shadow_cache_unsupportedIterableToArray(arr, i) || shadow_cache_nonIterableRest(); }
function shadow_cache_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function shadow_cache_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return shadow_cache_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return shadow_cache_arrayLikeToArray(o, minLen); }
function shadow_cache_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function shadow_cache_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function shadow_cache_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function shadow_cache_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function shadow_cache_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, shadow_cache_toPropertyKey(descriptor.key), descriptor); } }
function shadow_cache_createClass(Constructor, protoProps, staticProps) { if (protoProps) shadow_cache_defineProperties(Constructor.prototype, protoProps); if (staticProps) shadow_cache_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function shadow_cache_toPropertyKey(arg) { var key = shadow_cache_toPrimitive(arg, "string"); return shadow_cache_typeof(key) === "symbol" ? key : String(key); }
function shadow_cache_toPrimitive(input, hint) { if (shadow_cache_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (shadow_cache_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function shadow_cache_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) shadow_cache_setPrototypeOf(subClass, superClass); }
function shadow_cache_setPrototypeOf(o, p) { shadow_cache_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shadow_cache_setPrototypeOf(o, p); }
function shadow_cache_createSuper(Derived) { var hasNativeReflectConstruct = shadow_cache_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = shadow_cache_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = shadow_cache_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return shadow_cache_possibleConstructorReturn(this, result); }; }
function shadow_cache_possibleConstructorReturn(self, call) { if (call && (shadow_cache_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return shadow_cache_assertThisInitialized(self); }
function shadow_cache_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function shadow_cache_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function shadow_cache_getPrototypeOf(o) { shadow_cache_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shadow_cache_getPrototypeOf(o); }

var ShadowCache = /*#__PURE__*/function (_Node) {
  shadow_cache_inherits(ShadowCache, _Node);
  var _super = shadow_cache_createSuper(ShadowCache);
  function ShadowCache(configs) {
    var _this;
    shadow_cache_classCallCheck(this, ShadowCache);
    _this = _super.call(this, configs);
    // this.imageData = configs.imageData;
    _this.width = configs.width;
    _this.height = configs.height;
    _this.imageBuffer = document.createElement('canvas');
    _this.imageBuffer.width = _this.width + 2;
    _this.imageBuffer.height = _this.height + 2;
    configs.cache(_this.imageBuffer.getContext('2d'));
    return _this;
  }
  shadow_cache_createClass(ShadowCache, [{
    key: "render",
    value: function render(ctx) {
      var _this$anchor = shadow_cache_slicedToArray(this.anchor, 2),
        cx = _this$anchor[0],
        cy = _this$anchor[1];
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.drawImage(this.imageBuffer, -this.width / 2, -this.height / 2);
      ctx.translate(-cx, -cy);
      ctx.restore();
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        height: this.height,
        width: this.width
      };
    }
  }, {
    key: "recalculate",
    value: function recalculate() {}
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }]);
  return ShadowCache;
}(node);
/* harmony default export */ const shadow_cache = (ShadowCache);
;// CONCATENATED MODULE: ./src/core/instance/elements/text.js
function text_typeof(obj) { "@babel/helpers - typeof"; return text_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, text_typeof(obj); }
function text_slicedToArray(arr, i) { return text_arrayWithHoles(arr) || text_iterableToArrayLimit(arr, i) || text_unsupportedIterableToArray(arr, i) || text_nonIterableRest(); }
function text_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function text_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return text_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return text_arrayLikeToArray(o, minLen); }
function text_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function text_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function text_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function text_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function text_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, text_toPropertyKey(descriptor.key), descriptor); } }
function text_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function text_toPropertyKey(arg) { var key = text_toPrimitive(arg, "string"); return text_typeof(key) === "symbol" ? key : String(key); }
function text_toPrimitive(input, hint) { if (text_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (text_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function text_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) text_setPrototypeOf(subClass, superClass); }
function text_setPrototypeOf(o, p) { text_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return text_setPrototypeOf(o, p); }
function text_createSuper(Derived) { var hasNativeReflectConstruct = text_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = text_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = text_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return text_possibleConstructorReturn(this, result); }; }
function text_possibleConstructorReturn(self, call) { if (call && (text_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return text_assertThisInitialized(self); }
function text_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function text_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function text_getPrototypeOf(o) { text_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return text_getPrototypeOf(o); }




var TEXT_ALIGN = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right'
};
var SPACE_REG = /\\s/g;
var Text = /*#__PURE__*/function (_Rectangle) {
  text_inherits(Text, _Rectangle);
  var _super = text_createSuper(Text);
  function Text(configs) {
    var _this;
    text_classCallCheck(this, Text);
    _this = _super.call(this, configs);
    _this.type = 'Text';
    _this.content = configs.content || '';
    _this.fontFamily = configs.fontFamily || '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,Noto Sans,PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
    _this.fontSize = configs.fontSize || '14px';
    _this.fontWeight = configs.fontWeight || '';
    _this.textColor = configs.textColor || 'white';
    _this.placeholderColor = configs.placeholderColor || configs.textColor || 'white';
    _this.textAlign = configs.textAlign || TEXT_ALIGN.CENTER;
    _this.textBaseline = configs.textBaseline || 'middle';
    _this.lineHeight = configs.lineHeight;
    _this.indent = configs.indent || 0;
    _this.backgroundColor = configs.backgroundColor;
    _this.editable = configs.editable;
    _this.definedWidth = configs.definedWidth;
    _this.minWidth = configs.minWidth || 0;
    _this.maxWidth = configs.maxWidth;
    _this.ellipsis = configs.ellipsis;
    _this.placeholder = configs.placeholder || '';
    _this.emptyWhenInput = configs.emptyWhenInput || false;
    _this.editting = false;
    _this.disabled = configs.disabled;
    _this.cursorColor = configs.cursorColor || '#60CFC4';
    _this.textRangeColor = configs.textRangeColor || '#4E75EC1A';
    _this.spacePlaceholder = configs.spacePlaceholder;
    _this.spacePlaceholderColor = configs.spacePlaceholderColor;
    _this.spaceRecords = [];
    _this._spacedContentSegmnent = [];
    _this._status = {
      editing: false,
      cursorshow: true,
      cursoranime: null,
      lastElapsed: 0,
      refreshElapsed: false,
      cursorDragging: false,
      shiftOn: false,
      oldVal: '',
      inputElement: null
    };
    _this._cursorOffset = 0;
    _this._textRange = {
      enable: false,
      rangefrom: null,
      // offsetfrom
      rangeTo: null,
      // offsetto
      initialRange: null // offset
    };

    if (_this.editable) {
      _this._makeFunctional();
    }
    _this.preCalculateText();
    _this.shadowCache();
    return _this;
  }
  text_createClass(Text, [{
    key: "replaceSpaceHolder",
    value: function replaceSpaceHolder(content) {
      var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (useCache) {
        return content.replace(/\\s/g, this.spacePlaceholder);
      }
      var r = this.spaceRecords;
      var p = this.spacePlaceholder;
      r.length = 0;
      var lastOffset;
      var c = content.replace(/\\s/g, function (_, offset) {
        if (lastOffset === undefined) {
          lastOffset = offset;
          r.push(offset);
        }
        if (offset - lastOffset > 1) {
          r.push(lastOffset);
          r.push(offset);
        }
        lastOffset = offset;
        return p;
      });
      if (lastOffset !== undefined) {
        r.push(lastOffset);
      }
      return c;
    }
  }, {
    key: "currentContent",
    get: function get() {
      return this.content || this.placeholder || '';
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return !this.content;
    }
  }, {
    key: "preCalculateText",
    value: function preCalculateText() {
      var _this2 = this;
      requestCacheCanvas(function (ctx) {
        ctx.beginPath();
        ctx.font = "".concat(_this2.fontWeight, " ").concat(_this2.fontSize, " ").concat(_this2.fontFamily);
        ctx.textAlign = _this2.textAlign;
        ctx.textBaseline = _this2.textBaseline;
        var t_h = parseInt(_this2.fontSize);
        var content = _this2.currentContent;
        if (_this2.spacePlaceholder) {
          content = _this2.replaceSpaceHolder(content);
        }
        var _ctx$measureText = ctx.measureText(content),
          fontBoundingBoxAscent = _ctx$measureText.fontBoundingBoxAscent,
          fontBoundingBoxDescent = _ctx$measureText.fontBoundingBoxDescent,
          width = _ctx$measureText.width;
        _this2._textWidth = _this2.indent + width;
        if (_this2.definedWidth) {
          if (_this2.ellipsis && _this2._textWidth > _this2.definedWidth) {
            var offset = _this2._calculateOffset(_this2.definedWidth - 12);
            _this2.ellipsisContent = content.substring(0, offset) + '...';
          } else {
            _this2.ellipsisContent = content;
          }
          _this2.width = _this2.definedWidth;
        } else if (_this2.maxWidth && _this2.ellipsis) {
          if (_this2._textWidth > _this2.maxWidth) {
            var ratio = _this2.maxWidth / _this2._textWidth;
            var l = Math.floor(content.length * ratio - 3);
            _this2.ellipsisContent = content.substring(0, l) + '...';
          } else {
            _this2.ellipsisContent = content;
          }
          _this2.width = Math.min(_this2.maxWidth, _this2._textWidth);
        } else {
          _this2.width = Math.max(_this2.minWidth, _this2._textWidth);
        }
        if (_this2.spacePlaceholder) {
          var _ctx$measureText2 = ctx.measureText(_this2.spacePlaceholder),
            s_width = _ctx$measureText2.width;
          var r2 = _this2._spacedContentSegmnent;
          var textColor = _this2.textColor;
          var lastOffset = 0;
          r2.length = 0;
          if (_this2.spaceRecords.length) {
            var r = _this2.spaceRecords;
            var pcolor = _this2.spacePlaceholderColor;
            var _l = r.length;
            var i = 0;
            while (i < _l) {
              var f = r[i++];
              var t = r[i++];
              var q = content.substring(lastOffset, f);
              r2.push([q, ctx.measureText(q).width, textColor]);
              r2.push([content.substring(f, t + 1), (t - f + 1) * s_width, pcolor]);
              lastOffset = t + 1;
            }
          }
          if (lastOffset < content.length) {
            var _q = content.substring(lastOffset);
            r2.push([_q, ctx.measureText(_q).width, textColor]);
          }
        }
        var height = Math.abs(fontBoundingBoxAscent) + Math.abs(fontBoundingBoxDescent) || t_h;
        _this2._textHeight = height;
        if (_this2.lineHeight) {
          _this2.height = _this2.lineHeight;
        } else {
          _this2.height = height;
        }
      });
    }
  }, {
    key: "shadowCache",
    value: function shadowCache() {
      var _this3 = this;
      var scale = window.devicePixelRatio;
      var w = this.width * scale;
      var h = this.height * scale;
      var i = this.indent * scale;
      var size = parseInt(this.fontSize) * scale;
      this._shadowCache = new shadow_cache({
        width: w,
        height: h,
        cache: function cache(ctx) {
          // const [cx, cy] = this.anchor;
          // ctx.scale(4, 4)
          ctx.translate(w / 2, h / 2);
          var font = "".concat(_this3.fontWeight, " ").concat(size, "px ").concat(_this3.fontFamily);
          ctx.font = font;
          ctx.textAlign = _this3.textAlign;
          ctx.textBaseline = _this3.textBaseline;
          ctx.fillStyle = _this3.isEmpty ? _this3.placeholderColor : _this3.textColor;
          var content = _this3.currentContent;
          if (_this3.spacePlaceholder) {
            if (_this3.textAlign === TEXT_ALIGN.LEFT) {
              var hw = w / 2;
              var _w = -hw + i / 2;
              _this3._spacedContentSegmnent.forEach(function (seg) {
                ctx.fillStyle = seg[2];
                ctx.fillText(seg[0], _w, 0);
                _w += seg[1] * scale;
              });
            }
          } else {
            if (_this3.ellipsisContent) {
              content = _this3.ellipsisContent;
            }
            if (content) {
              if (_this3.textAlign === TEXT_ALIGN.LEFT) {
                var _hw = w / 2;
                ctx.fillText(content, -_hw + i / 2, 0);
              } else if (_this3.textAlign === TEXT_ALIGN.RIGHT) {
                var _hw2 = w / 2;
                ctx.fillText(content, _hw2, 0);
              } else {
                ctx.fillText(content, i / 2, 0);
              }
            }
          }
        }
      });
    }
  }, {
    key: "setConfig",
    value: function setConfig(configs) {
      var _this4 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this4[k] = configs[k];
          _this4._rawConfigs[k] = configs[k];
        }
      });
      this.preCalculateText();
      this.shadowCache();
    }
  }, {
    key: "click",
    value: function click() {
      var _this5 = this;
      if (!this._status.editing) {
        var flag = true;
        this.dispatchEvent(new events('edit', {
          target: this,
          preventDefault: function preventDefault() {
            flag = false;
          }
        }));
        if (!flag) {
          return;
        }
        var point = this._belongs._currentp;
        var jflow = this._jflow;
        if (point) {
          this._cursorOffset = this._positionToCursorOffset(point);
        } else {
          this._cursorOffset = 0;
        }
        var inputElement = createInputElement(this._controlCallback.bind(this), this._defaultCallback.bind(this));
        var wrapper = jflow.DOMwrapper;
        wrapper.append(inputElement);
        inputElement.focus({
          preventScroll: true
        });
        jflow.setFocusInstance(this);
        Object.assign(this._status, {
          editing: true,
          oldVal: this.content,
          inputElement: inputElement,
          cursoranime: jflow.requestJFlowAnime(function (elapsed) {
            var lastElapsed = _this5._status.lastElapsed;
            if (_this5._status.refreshElapsed) {
              _this5._status.lastElapsed = elapsed;
              _this5._status.refreshElapsed = false;
            }
            if (elapsed - lastElapsed > 500) {
              _this5._status.cursorshow = !_this5._status.cursorshow;
              _this5._status.lastElapsed = elapsed;
            }
          })
        });
        if (this.emptyWhenInput) {
          this.content = '';
        }
        this.syncShadowInputPosition();
      }
    }
  }, {
    key: "_makeFunctional",
    value: function _makeFunctional() {
      var _this6 = this;
      var blurHandler = function blurHandler(event) {
        _this6._status.editing = false;
        if (_this6._status.inputElement) {
          _this6._status.inputElement.remove();
        }
        if (_this6._belongs) {
          _this6._jflow.scheduleRender();
        }
      };
      this.addEventListener('dblclick', function (event) {
        if (event.currentTarget !== _this6) {
          return;
        }
        if (_this6._status.editing) {
          _this6._selectFullRange();
        }
      });
      this.addEventListener('click', function (event) {
        if (event.currentTarget !== _this6) {
          return;
        }
        // event.detail.bubbles = false;
        if (_this6._status.editing) {
          var point = _this6._belongs._currentp;
          var offset = _this6._positionToCursorOffset(point);
          if (_this6._status.shiftOn) {
            var initialRange = _this6._textRange.initialRange;
            Object.assign(_this6._textRange, {
              rangefrom: Math.min(offset, initialRange),
              rangeTo: Math.max(offset, initialRange),
              enable: true
            });
            _this6._cursorOffset = _this6._textRange.rangeTo;
            _this6._status.inputElement.focus({
              preventScroll: true
            });
            // this._refreshCursor();  
          } else {
            _this6._cursorOffset = offset;
            _this6._status.inputElement.focus({
              preventScroll: true
            });
            _this6._refreshCursor();
            _this6.syncShadowInputPosition();
          }
        }
        _this6.click();
      });
      this.addEventListener('blur', function (event) {
        var _this6$_status$cursor;
        blurHandler(event);
        _this6.dispatchEvent(new events('change', {
          target: _this6,
          oldVal: _this6._status.oldVal,
          val: _this6.content
        }));
        _this6._textRange.enable = false;
        (_this6$_status$cursor = _this6._status.cursoranime) === null || _this6$_status$cursor === void 0 ? void 0 : _this6$_status$cursor.cancel();
        Object.assign(_this6._status, {
          editing: false,
          cursorshow: true,
          cursoranime: null,
          lastElapsed: 0,
          refreshElapsed: false,
          cursorDragging: false,
          shiftOn: false,
          oldVal: '',
          inputElement: null
        });
      });
      this.addEventListener('instancePressStart', function (event) {
        if (_this6._status.editing && !_this6._status.shiftOn) {
          event.detail.bubbles = false;
          event.detail.preventDefault();
          var point = _this6._belongs._currentp;
          var c = _this6._positionToCursorOffset(point);
          _this6._textRange.initialRange = c;
          var jflow = event.detail.jflow;
          var moved = false;
          var t = function (e) {
            moved = true;
            var offsetX = e.offsetX,
              offsetY = e.offsetY;
            var p = jflow._calculatePointBack([offsetX, offsetY]);
            jflow._stack.checkHit(p);
            var point = _this6._belongs._currentp;
            var c = _this6._positionToCursorOffset(point);
            var initialRange = _this6._textRange.initialRange;
            _this6._status.editing = false;
            Object.assign(_this6._textRange, {
              rangefrom: Math.min(c, initialRange),
              rangeTo: Math.max(c, initialRange),
              enable: true
            });
          }.bind(_this6);
          document.addEventListener('pointermove', t);
          document.addEventListener('pointerup', function (e) {
            document.removeEventListener('pointermove', t);
            if (!moved) {
              _this6._textRange.initialRange = null;
              return;
            }
            var rangeTo = _this6._textRange.rangeTo;
            _this6._cursorOffset = rangeTo;
            _this6._status.editing = true;
            _this6._status.inputElement.focus({
              preventScroll: true
            });
            _this6._textRange.initialRange = null;
          }, {
            once: true
          });
        }
      });
    }
  }, {
    key: "_positionToCursorOffset",
    value: function _positionToCursorOffset(point) {
      var _point = text_slicedToArray(point, 1),
        x = _point[0];
      var w = this.width / 2;
      var _this$anchor = text_slicedToArray(this.anchor, 1),
        ox = _this$anchor[0];
      var offsetX = x - (ox - w);
      var cursorOffset = 0;
      if (offsetX >= this._textWidth) {
        cursorOffset = this.content.length;
      } else {
        cursorOffset = this._calculateOffset(offsetX);
      }
      return cursorOffset;
    }
  }, {
    key: "_calculateOffset",
    value: function _calculateOffset(offx) {
      var _this7 = this;
      var content = this.content;
      if (this.spacePlaceholder) {
        content = this.replaceSpaceHolder(content, true);
      }
      var maxL = content.length - 1;
      var contentWidth = this._textWidth;
      if (contentWidth === 0) {
        return 0;
      }
      var allwidth = contentWidth;
      var idx = Math.floor(offx / allwidth * maxL);
      requestCacheCanvas(function (ctx) {
        ctx.font = "".concat(_this7.fontSize, " ").concat(_this7.fontFamily);
        var g1, g2;
        var lastidx;
        var c = content.substring(0, idx);
        var c1 = content.substring(idx - 1, idx);
        var c2 = content.substring(idx, idx + 1);
        var w = ctx.measureText(c).width;
        var w1 = ctx.measureText(c1).width;
        var w2 = ctx.measureText(c2).width;
        g1 = w - w1 / 2;
        g2 = w + w2 / 2;
        do {
          if (g1 <= offx && g2 >= offx) {
            break;
          }
          if (g1 > offx) {
            // 左侧少了
            var spanw = g2 - offx;
            lastidx = idx;
            if (spanw < 100) {
              idx -= 1;
            } else {
              idx -= Math.floor(spanw / g2 * lastidx);
            }
            c = content.substring(idx, lastidx);
            w -= ctx.measureText(c).width;
          } else if (g2 < offx) {
            // 右侧少了
            var _spanw = offx - g1;
            lastidx = idx;
            if (_spanw < 100) {
              idx += 1;
            } else {
              idx += Math.floor(_spanw / (allwidth - g1) * (maxL - lastidx));
            }
            c = content.substring(lastidx, idx);
            w += ctx.measureText(c).width;
          }
          c1 = content.substring(idx - 1, idx);
          c2 = content.substring(idx, idx + 1);
          w1 = ctx.measureText(c1).width;
          w2 = ctx.measureText(c2).width;
          g1 = w - w1 / 2;
          g2 = w + w2 / 2;
        } while (idx >= 0 && idx <= maxL);
      });
      return idx;
    }
  }, {
    key: "_refreshCursor",
    value: function _refreshCursor() {
      if (this._status.editing) {
        Object.assign(this._status, {
          cursorshow: true,
          refreshElapsed: true
        });
      }
      if (this._textRange.enable) {
        this._textRange.enable = false;
      }
    }
  }, {
    key: "render",
    value: function render(ctx) {
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      if (!ctx.disableCache && !this._status.editing && this._jflow.scale * parseInt(this.fontSize) < 8) {
        var _this$anchor2 = text_slicedToArray(this.anchor, 2),
          cx = _this$anchor2[0],
          cy = _this$anchor2[1];
        // this._shadowCache.render(ctx);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.beginPath();
        ctx.drawImage(this._shadowCache.imageBuffer, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.translate(-cx, -cy);
        ctx.restore();
        return;
      }
      var font = "".concat(this.fontWeight, " ").concat(this.fontSize, " ").concat(this.fontFamily);
      if (ctx.font !== font) {
        ctx.font = font;
      }
      if (ctx.textAlign !== this.textAlign) {
        ctx.textAlign = this.textAlign;
      }
      if (ctx.textBaseline !== this.textBaseline) {
        ctx.textBaseline = this.textBaseline;
      }
      ctx.fillStyle = this.isEmpty ? this.placeholderColor : this.textColor;
      var content = this.currentContent;
      if (this.spacePlaceholder) {
        if (this.textAlign === TEXT_ALIGN.LEFT) {
          var _hw3 = this.width / 2;
          var w = this.anchor[0] - _hw3 + this.indent / 2;
          var _y = this.anchor[1];
          this._spacedContentSegmnent.forEach(function (seg) {
            ctx.fillStyle = seg[2];
            ctx.fillText(seg[0], w, _y);
            w += seg[1];
          });
        }
      } else {
        if (this.ellipsisContent) {
          content = this.ellipsisContent;
        }
        if (content) {
          if (this.textAlign === TEXT_ALIGN.LEFT) {
            var _hw4 = this.width / 2;
            ctx.fillText(content, this.anchor[0] - _hw4 + this.indent / 2, this.anchor[1]);
          } else if (this.textAlign === TEXT_ALIGN.RIGHT) {
            var _hw5 = this.width / 2;
            ctx.fillText(content, this.anchor[0] + _hw5, this.anchor[1]);
          } else {
            ctx.fillText(content, this.anchor[0] + this.indent / 2, this.anchor[1]);
          }
        }
      }
      var hw = this.width / 2;
      var textheight = this._textHeight;
      var _this$anchor3 = text_slicedToArray(this.anchor, 2),
        x = _this$anchor3[0],
        y = _this$anchor3[1];
      var lx = x - hw;
      var ly = y - textheight / 2;
      if (this._status.cursorshow && this._status.editing) {
        var offset = this._cursorOffset;
        var c = content.substring(0, offset);
        if (this.spacePlaceholder) {
          c = this.replaceSpaceHolder(c, true);
        }
        var cw = lx + ctx.measureText(c).width;
        var c_len = this._textHeight / 2;
        ctx.beginPath();
        ctx.moveTo(cw, y - c_len);
        ctx.lineTo(cw, y + c_len);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.cursorColor;
        ctx.stroke();
      }
      if (this._textRange.enable) {
        var _this$_textRange = this._textRange,
          rangefrom = _this$_textRange.rangefrom,
          rangeTo = _this$_textRange.rangeTo;
        var _c = this.content.substring(0, rangefrom);
        var range = this.content.substring(rangefrom, rangeTo);
        var _x2 = lx + ctx.measureText(_c).width;
        var _w2 = ctx.measureText(range).width;
        ctx.beginPath();
        ctx.rect(_x2, ly, _w2, textheight);
        ctx.fillStyle = this.textRangeColor;
        ctx.fill();
      }
    }
  }, {
    key: "_inputControl",
    value: function _inputControl(op, data) {
      if (this._textRange.enable) {
        this._clearTextRange();
        if (op === 'Backspace') {
          this.dispatchEvent(new events('input', {
            target: this,
            oldVal: this._status.oldVal,
            val: this.content
          }));
          this.refresh();
          this.syncShadowInputPosition();
          return;
        }
      }
      var offset = this._cursorOffset;
      var content = this.content;
      var preContent = content.substring(0, offset);
      var afterContent;
      if (this.cacheIdx) {
        afterContent = content.substring(this.cacheIdx[1]);
      } else {
        afterContent = content.substring(offset);
      }
      var stopInputEvent = false;
      switch (op) {
        case "Input":
          preContent += data;
          this._cursorOffset += data.length;
          this.content = preContent + afterContent;
          break;
        case "compositionstart":
          this.cacheIdx = [preContent.length, preContent.length];
          break;
        case "compositionupdate":
          preContent = preContent.substring(0, this.cacheIdx[0]);
          preContent += data;
          this.content = preContent + afterContent;
          this._cursorOffset = this.cacheIdx[0] + data.length;
          this.cacheIdx[1] = this.cacheIdx[0] + data.length;
          break;
        case "compositionend":
          preContent = preContent.substring(0, this.cacheIdx[0]);
          this._cursorOffset = this.cacheIdx[0] + data.length;
          this.cacheIdx = null;
          preContent += data;
          this.content = preContent + afterContent;
          break;
        case "Enter":
          if (this.cacheIdx) {
            return;
          }
          var defaultAct = true;
          this.dispatchEvent(new events('enterkeypressed', {
            target: this,
            handler: function handler(val) {
              defaultAct = val;
            },
            stopInput: function stopInput() {
              stopInputEvent = true;
            }
          }));
          if (defaultAct) {
            this._jflow.blur();
          }
          break;
        case "Backspace":
          if (this.cacheIdx) {
            return;
          }
          preContent = preContent.substring(0, preContent.length - 1);
          this._cursorOffset = Math.max(0, this._cursorOffset - 1);
          this.content = preContent + afterContent;
          break;
      }
      if (!stopInputEvent) {
        this.dispatchEvent(new events('input', {
          target: this,
          oldVal: this._status.oldVal,
          val: this.content
        }));
      }
      this.refresh();
      this.syncShadowInputPosition();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.preCalculateText();
      this._belongs.recalculateUp();
      this._jflow.scheduleRender();
    }
  }, {
    key: "syncShadowInputPosition",
    value: function syncShadowInputPosition() {
      var _this8 = this;
      if (this._status.editing) {
        var hw = this.width / 2;
        var hh = this.height / 2;
        var lx = this.anchor[0] - hw;
        var offset = this._cursorOffset;
        requestCacheCanvas(function (ctx) {
          ctx.beginPath();
          ctx.font = "".concat(_this8.fontSize, " ").concat(_this8.fontFamily);
          var c = _this8.content.substring(0, offset);
          lx += ctx.measureText(c).width;
        });
        var point = this.calculateToRealWorld([lx, hh]);
        var canvasMeta = this._jflow.canvasMeta;
        var px = Math.min(canvasMeta.actual_width - 120, point[0]);
        this._status.inputElement.style.transform = "translate(".concat(px, "px, ").concat(point[1], "px)");
      }
    }
  }, {
    key: "_controlCallback",
    value: function _controlCallback(op, data, e) {
      if (this._status.editing) {
        Object.assign(this._status, {
          cursorshow: true,
          refreshElapsed: true
        });
      }
      switch (op) {
        case "Input":
        case "compositionstart":
        case "compositionupdate":
        case "compositionend":
        case "Enter":
        case "Backspace":
          this._inputControl(op, data);
          break;
        case "ArrowLeft":
          if (this._textRange.enable) {
            this._textRange.enable = false;
          }
          this._onArrowLeft();
          break;
        case "ArrowRight":
          if (this._textRange.enable) {
            this._textRange.enable = false;
          }
          this._onArrowRight();
          break;
        case "Shift":
          this._onShiftToggle(data);
          break;
        case "CtrlA":
          this._selectFullRange();
          break;
        case "COPY":
          this._copy(e);
          break;
        case "CUT":
          this._cut(e);
          break;
        case "PASTE":
          this._paste(e);
          break;
      }
    }
  }, {
    key: "_onArrowLeft",
    value: function _onArrowLeft() {
      this._cursorOffset = Math.max(0, this._cursorOffset - 1);
      this._jflow.scheduleRender();
      this.syncShadowInputPosition();
    }
  }, {
    key: "_onArrowRight",
    value: function _onArrowRight() {
      this._cursorOffset = Math.min(this.content.length, this._cursorOffset + 1);
      this._jflow.scheduleRender();
      this.syncShadowInputPosition();
    }
  }, {
    key: "_onShiftToggle",
    value: function _onShiftToggle(val) {
      this._status.shiftOn = val;
      if (val) {
        this._textRange.initialRange = this._cursorOffset;
      } else {
        this._textRange.initialRange = null;
      }
    }
  }, {
    key: "_selectFullRange",
    value: function _selectFullRange() {
      this._textRange = {
        enable: true,
        rangefrom: 0,
        rangeTo: this.content.length
      };
      this._cursorOffset = this.content.length;
    }
  }, {
    key: "_clearTextRange",
    value: function _clearTextRange() {
      if (this._textRange.enable) {
        var _this$_textRange2 = this._textRange,
          rangefrom = _this$_textRange2.rangefrom,
          rangeTo = _this$_textRange2.rangeTo;
        var content = this.content;
        var preContent = content.substring(0, rangefrom);
        var afterContent = content.substring(rangeTo);
        this.content = preContent + afterContent;
        this._cursorOffset = preContent.length;
        this._textRange.enable = false;
      }
    }
  }, {
    key: "_getSelection",
    value: function _getSelection() {
      if (this._textRange.enable) {
        var _this$_textRange3 = this._textRange,
          rangefrom = _this$_textRange3.rangefrom,
          rangeTo = _this$_textRange3.rangeTo;
        var content = this.content;
        return content.substring(rangefrom, rangeTo);
      }
      return null;
    }
  }, {
    key: "_copy",
    value: function _copy(event) {
      var selection = this._getSelection();
      if (selection) {
        event.clipboardData.setData("text/plain", selection);
      }
    }
  }, {
    key: "_cut",
    value: function _cut(event) {
      var selection = this._getSelection();
      if (selection) {
        event.clipboardData.setData("text/plain", selection);
        this._clearTextRange();
        this.refresh();
      }
    }
  }, {
    key: "_paste",
    value: function _paste(event) {
      var pasteContent = (event.clipboardData || window.clipboardData).getData("text");
      var flag = false;
      this.dispatchEvent(new events('paste', {
        target: this,
        content: pasteContent,
        preventDefault: function preventDefault() {
          flag = true;
        },
        resolvePasteContent: function resolvePasteContent(callback) {
          pasteContent = callback(pasteContent);
        }
      }));
      if (flag) {
        return;
      }
      this._clearTextRange();
      var offset = this._cursorOffset;
      var content = this.content;
      var preContent = content.substring(0, offset);
      var afterContent = content.substring(offset);
      this.content = preContent + pasteContent + afterContent;
      this._cursorOffset = (preContent + pasteContent).length;
      this.refresh();
    }
  }, {
    key: "_defaultCallback",
    value: function _defaultCallback(op, e) {
      switch (op) {
        case 'KeyDown':
          this.dispatchEvent(new events('keydown', {
            target: this,
            key: e.key,
            code: e.code,
            rawEvent: e
          }));
          break;
        case 'KeyUp':
          this.dispatchEvent(new events('keyup', {
            target: this,
            key: e.key,
            code: e.code,
            rawEvent: e
          }));
          break;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._jflow._focus.instance === this) {
        this._jflow.blur();
      }
    }
  }]);
  return Text;
}(rectangle);
/* harmony default export */ const elements_text = (Text);
function createInputElement(controlCallback, defaultCallback) {
  var input = document.createElement('input');
  input.setAttribute('style', "\\n        width: 100px;\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        border:none;\\n        opacity: 0;\\n        z-index: -1;\\n        contain: strict;");
  input.setAttribute('tabindex', -1);
  input.setAttribute('aria-hidden', true);
  input.setAttribute('spellcheck', false);
  input.setAttribute('autocorrect', 'off');

  // let content = configs.content;
  // let startidx = 0;

  // function renderContent() {
  //     configs.callback(content)
  // }
  var stopInput = false;
  var status = {
    ctrlOn: false
  };
  input.addEventListener('beforeinput', function (e) {
    e.preventDefault();
    if (e.data) {
      // content += e.data;
      // renderContent();
      if (!stopInput) {
        controlCallback('Input', e.data);
      }
    }
  });
  input.addEventListener('compositionstart', function (e) {
    // cache composition start offset
    // startidx = content.length;
    controlCallback('compositionstart');
    stopInput = true;
  });
  input.addEventListener('compositionupdate', function (e) {
    // update content
    // content = content.substring(0, startidx);
    // content += e.data;
    // renderContent();
    controlCallback('compositionupdate', e.data);
  });
  input.addEventListener('compositionend', function (e) {
    // replace text at start offset
    // content = content.substring(0, startidx);
    // startidx = 0;
    // content += e.data;
    // renderContent();
    controlCallback('compositionend', e.data);
    input.value = '';
    stopInput = false;
  });
  input.addEventListener('keyup', function (event) {
    switch (event.key) {
      case "Shift":
        controlCallback("Shift", false);
        break;
      case "Meta":
      case "Control":
        status.ctrlOn = false;
        break;
    }
  });
  input.addEventListener('keydown', function (event) {
    switch (event.code) {
      case "Enter":
        // content = content + '\\n';
        // renderContent();
        controlCallback('Enter');
        break;
      case "Backspace":
        // content = content.substring(0, content.length - 1);
        // renderContent();
        controlCallback('Backspace');
        break;
      case "ArrowLeft":
        controlCallback("ArrowLeft");
        break;
      case "ArrowRight":
        controlCallback("ArrowRight");
        break;
      case "ArrowDown":
        controlCallback("ArrowDown");
        break;
      case "ArrowUp":
        controlCallback("ArrowUp");
        break;
    }
    switch (event.key) {
      case "Shift":
        controlCallback("Shift", true);
        break;
      case "Meta":
      case "Control":
        status.ctrlOn = true;
        break;
      case 'a':
        if (status.ctrlOn) {
          controlCallback('CtrlA');
        }
        break;
    }
  });
  input.addEventListener('keyup', function (event) {
    defaultCallback('KeyUp', event);
  });
  input.addEventListener('keydown', function (event) {
    defaultCallback('KeyDown', event);
  });
  input.addEventListener('copy', function (event) {
    event.preventDefault();
    event.stopPropagation();
    controlCallback('COPY', null, event);
  });
  input.addEventListener('cut', function (event) {
    event.preventDefault();
    event.stopPropagation();
    controlCallback('CUT', null, event);
  });
  input.addEventListener('paste', function (event) {
    event.preventDefault();
    event.stopPropagation();
    controlCallback('PASTE', null, event);
  });
  return input;
}
;// CONCATENATED MODULE: ./src/core/instance/image.js
function image_typeof(obj) { "@babel/helpers - typeof"; return image_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, image_typeof(obj); }
function image_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function image_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, image_toPropertyKey(descriptor.key), descriptor); } }
function image_createClass(Constructor, protoProps, staticProps) { if (protoProps) image_defineProperties(Constructor.prototype, protoProps); if (staticProps) image_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function image_toPropertyKey(arg) { var key = image_toPrimitive(arg, "string"); return image_typeof(key) === "symbol" ? key : String(key); }
function image_toPrimitive(input, hint) { if (image_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (image_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function image_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) image_setPrototypeOf(subClass, superClass); }
function image_setPrototypeOf(o, p) { image_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return image_setPrototypeOf(o, p); }
function image_createSuper(Derived) { var hasNativeReflectConstruct = image_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = image_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = image_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return image_possibleConstructorReturn(this, result); }; }
function image_possibleConstructorReturn(self, call) { if (call && (image_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return image_assertThisInitialized(self); }
function image_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function image_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function image_getPrototypeOf(o) { image_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return image_getPrototypeOf(o); }






/**
 * @typedef {Object} Icon~ImageBounding
 * @property {number} width   - 图片宽度
 * @property {number} height   - 图片高度 
 */
/**
 * 图片单元 配置
 * @typedef {Rectangle~RectangleConfigs} Icon~IconConfigs
 * @property {number} image   - 图片地址
 * @property {number} imageWidth   - 图片宽度
 * @property {number} imageHeight   - 图片高度
 */

/**
 * 图片单元
 * @description 图片单元可以绘制图片，图片加载后会自动重新绘制
 * @constructor Icon
 * @extends Rectangle
 * @param {Icon~IconConfigs} configs - 配置
 */
var Icon = /*#__PURE__*/function (_Rectangle) {
  image_inherits(Icon, _Rectangle);
  var _super = image_createSuper(Icon);
  function Icon(configs) {
    var _this;
    image_classCallCheck(this, Icon);
    _this = _super.call(this, configs);
    /** @member {CanvasImageSource}      - 图片 */
    _this.image = configs.image;
    _this.image.onload = function () {
      _this._jflow._render();
      // requestAnimationFrame(() => {

      // })
    };
    /** @member {Icon~ImageBounding}      - 图片维度 */
    _this.imageBounding = {
      width: configs.imageWidth || configs.width,
      height: configs.imageHeight || configs.height
    };
    return _this;
  }
  image_createClass(Icon, [{
    key: "setConfig",
    value: function setConfig(configs) {
      var _this2 = this;
      Object.keys(configs).forEach(function (k) {
        if (configs[k] !== undefined && configs[k] !== null) {
          _this2[k] = configs[k];
          _this2._rawConfigs[k] = configs[k];
        }
      });
      if (configs.image && !configs.image.complete) {
        this.image.onload = function () {
          _this2._jflow._render();
          // requestAnimationFrame(() => {
          //     this._jflow._render();
          // })
        };
      }

      this.imageBounding = {
        width: configs.imageWidth || configs.width || this.imageBounding.width,
        height: configs.imageHeight || configs.height || this.imageBounding.height
      };
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      }
      rectangle.prototype.render.call(this, ctx);
      var x = this.anchor[0] - this.width / 2;
      var y = this.anchor[1] - this.height / 2;
      if (this.opacity < 1) {
        ctx.globalAlpha = this.opacity;
      }
      if (this.image.complete) {
        ctx.drawImage(this.image, x, y, this.imageBounding.width, this.imageBounding.height);
      }
      ctx.restore();
    }
  }]);
  return Icon;
}(rectangle);
/* harmony default export */ const instance_image = (Icon);
;// CONCATENATED MODULE: ./src/core/instance/shadowDom.js
function shadowDom_typeof(obj) { "@babel/helpers - typeof"; return shadowDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, shadowDom_typeof(obj); }
function shadowDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function shadowDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, shadowDom_toPropertyKey(descriptor.key), descriptor); } }
function shadowDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) shadowDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) shadowDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function shadowDom_toPropertyKey(arg) { var key = shadowDom_toPrimitive(arg, "string"); return shadowDom_typeof(key) === "symbol" ? key : String(key); }
function shadowDom_toPrimitive(input, hint) { if (shadowDom_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (shadowDom_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function shadowDom_get() { if (typeof Reflect !== "undefined" && Reflect.get) { shadowDom_get = Reflect.get.bind(); } else { shadowDom_get = function _get(target, property, receiver) { var base = shadowDom_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return shadowDom_get.apply(this, arguments); }
function shadowDom_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = shadowDom_getPrototypeOf(object); if (object === null) break; } return object; }
function shadowDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) shadowDom_setPrototypeOf(subClass, superClass); }
function shadowDom_setPrototypeOf(o, p) { shadowDom_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shadowDom_setPrototypeOf(o, p); }
function shadowDom_createSuper(Derived) { var hasNativeReflectConstruct = shadowDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = shadowDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = shadowDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return shadowDom_possibleConstructorReturn(this, result); }; }
function shadowDom_possibleConstructorReturn(self, call) { if (call && (shadowDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return shadowDom_assertThisInitialized(self); }
function shadowDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function shadowDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function shadowDom_getPrototypeOf(o) { shadowDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shadowDom_getPrototypeOf(o); }

/**
 * @funtion domFactory
 * @param {Element} container - DOM容器
 */
/**
 * DOM元素容器 配置
 * @typedef {Rectangle~Configs} ShadowDom~RectangleConfigs
 * @property {domFactory} createDocument - 宽
 */
/**
 * DOM元素容器 内容可贴 DOM 元素，支持缩放平移
 * @constructor ShadowDom
 * @extends Rectangle
 * @param {ShadowDom~RectangleConfigs} configs
 */
var ShadowDom = /*#__PURE__*/function (_Rectangle) {
  shadowDom_inherits(ShadowDom, _Rectangle);
  var _super = shadowDom_createSuper(ShadowDom);
  function ShadowDom(configs) {
    var _this;
    shadowDom_classCallCheck(this, ShadowDom);
    _this = _super.call(this, configs);
    _this.domFactory = configs.createDocument;
    _this._dom = null;
    return _this;
  }
  shadowDom_createClass(ShadowDom, [{
    key: "getRealWorldPosition",
    value: function getRealWorldPosition() {
      var b = this.getBoundingRect();
      return this.calculateToRealWorld(b.slice(0, 2));
    }
  }, {
    key: "render",
    value: function render(ctx) {
      var _this2 = this;
      if (!this._dom && this.domFactory) {
        requestAnimationFrame(function () {
          if (!_this2._dom) {
            var container = document.createElement('div');
            var pos = _this2.getRealWorldPosition();
            var scale = _this2._jflow.scale;
            container.setAttribute('style', "\\n                        position: absolute;\\n                        width: ".concat(_this2.width, "px;\\n                        height: ").concat(_this2.height, "px;\\n                        transform-origin: left top;\\n                        top: 0;\\n                        left: 0;\\n                        transform: translate(").concat(pos[0], "px, ").concat(pos[1], "px) scale(").concat(scale, ");"));
            _this2._dom = container;
            _this2._jflow.DOMwrapper.appendChild(container);
            _this2.domFactory(container);
          }
        });
      } else {
        var pos = this.getRealWorldPosition();
        var scale = this._jflow.scale;
        this._dom.style.transform = "translate(".concat(pos[0], "px, ").concat(pos[1], "px) scale(").concat(scale, ")");
      }
      shadowDom_get(shadowDom_getPrototypeOf(ShadowDom.prototype), "render", this).call(this, ctx);
    }
  }, {
    key: "onEnterViewbox",
    value: function onEnterViewbox() {
      if (this._dom) {
        this._dom.style.display = 'block';
      }
    }
  }, {
    key: "onLeaveViewbox",
    value: function onLeaveViewbox() {
      if (this._dom) {
        this._dom.style.display = 'none';
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._dom) {
        this._jflow.DOMwrapper.removeChild(this._dom);
      }
      shadowDom_get(shadowDom_getPrototypeOf(ShadowDom.prototype), "destroy", this).call(this);
    }
  }]);
  return ShadowDom;
}(rectangle);
/* harmony default export */ const shadowDom = (ShadowDom);
;// CONCATENATED MODULE: ./src/core/instance/link.js
function link_typeof(obj) { "@babel/helpers - typeof"; return link_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, link_typeof(obj); }
function link_slicedToArray(arr, i) { return link_arrayWithHoles(arr) || link_iterableToArrayLimit(arr, i) || link_unsupportedIterableToArray(arr, i) || link_nonIterableRest(); }
function link_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function link_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return link_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return link_arrayLikeToArray(o, minLen); }
function link_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function link_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function link_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function link_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, link_toPropertyKey(descriptor.key), descriptor); } }
function link_createClass(Constructor, protoProps, staticProps) { if (protoProps) link_defineProperties(Constructor.prototype, protoProps); if (staticProps) link_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function link_toPropertyKey(arg) { var key = link_toPrimitive(arg, "string"); return link_typeof(key) === "symbol" ? key : String(key); }
function link_toPrimitive(input, hint) { if (link_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (link_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) link_setPrototypeOf(subClass, superClass); }
function link_setPrototypeOf(o, p) { link_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return link_setPrototypeOf(o, p); }
function link_createSuper(Derived) { var hasNativeReflectConstruct = link_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = link_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = link_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return link_possibleConstructorReturn(this, result); }; }
function link_possibleConstructorReturn(self, call) { if (call && (link_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return link_assertThisInitialized(self); }
function link_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function link_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function link_getPrototypeOf(o) { link_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return link_getPrototypeOf(o); }



/**
 * @typedef {BaseLink~Configs} Link~Configs
 * @property {Number} approximate   - 点击响应范围
 * @property {Number[]} lineDash    - 虚线数组
 * @property {Boolean} doubleLink   - 双向箭头
 * @property {String} fontFamily    - 连线上的文字字体
 * @property {Number} fontSize      - 连线上的文字大小
 * @property {String} content       - 连线上的文字
 */
/**
 * 直线
 * @constructor Link
 * @extends BaseLink
 * @param {Link~Configs} configs - 配置
 */
var Link = /*#__PURE__*/function (_BaseLink) {
  link_inherits(Link, _BaseLink);
  var _super = link_createSuper(Link);
  function Link(configs) {
    var _this;
    link_classCallCheck(this, Link);
    _this = _super.call(this, configs);
    _this.fontFamily = configs.fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,Noto Sans,PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
    _this.fontSize = configs.fontSize || '12px';
    _this.content = configs.content || '';
    _this.lineDash = configs.lineDash;
    _this.approximate = configs.approximate || APPROXIMATE;
    _this._cacheAngle = undefined;
    _this._cachePoints = [];
    _this._cacheBoundingbox = {
      from: [],
      to: []
    };
    return _this;
  }
  link_createClass(Link, [{
    key: "_calculateAnchorPoints",
    value: function _calculateAnchorPoints() {
      var p0 = this.from.calculateIntersection(this.to.getCenter());
      var p1 = this.to.calculateIntersection(this.from.getCenter());
      this._cachePoints[0] = p0;
      this._cachePoints[1] = p1;
      var dx = p1[0] - p0[0];
      var dy = p1[1] - p0[1];
      var angle = Math.atan2(dy, dx);
      this._cacheAngle = angle;
    }
  }, {
    key: "isInViewBox",
    value: function isInViewBox(br) {
      var frombox = this.from.getBoundingRect();
      var tobox = this.to.getBoundingRect();
      var _box = this._cacheBoundingbox;
      if (!compareBoundingbox(_box.from, frombox) || compareBoundingbox(_box.to, tobox)) {
        copyBoundingbox(_box.from, frombox);
        copyBoundingbox(_box.to, tobox);
        this._calculateAnchorPoints();
      }
      return true;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      var _this$_cachePoints = link_slicedToArray(this._cachePoints, 2),
        p0 = _this$_cachePoints[0],
        p1 = _this$_cachePoints[1];
      var angle = this._cacheAngle;
      var dx = p1[0] - p0[0];
      var dy = p1[1] - p0[1];
      ctx.fillStyle = ctx.strokeStyle = this.backgroundColor;
      ctx.beginPath();
      if (this.content) {
        ctx.textAlign = 'center';
        ctx.font = "".concat(this.fontSize, " ").concat(this.fontFamily);
        ctx.textBaseline = 'middle';
        var _ctx$measureText = ctx.measureText(this.content),
          actualBoundingBoxLeft = _ctx$measureText.actualBoundingBoxLeft,
          actualBoundingBoxRight = _ctx$measureText.actualBoundingBoxRight,
          fontBoundingBoxAscent = _ctx$measureText.fontBoundingBoxAscent,
          fontBoundingBoxDescent = _ctx$measureText.fontBoundingBoxDescent;
        var x = dx / 2 + p0[0];
        var y = dy / 2 + p0[1];
        ctx.fillText(this.content, x, y);
        var width = Math.abs(actualBoundingBoxLeft) + Math.abs(actualBoundingBoxRight) + 20;
        var height = (Math.abs(fontBoundingBoxAscent) + Math.abs(fontBoundingBoxDescent)) * 1.5;
        ctx.beginPath();
        var region = new Path2D();
        region.rect(x - width / 2, y - height / 2, width, height);
        var rx = Math.min(p1[0], p0[0]) - 10;
        var ry = Math.min(p1[1], p0[1]) - 10;
        var rw = Math.abs(dx) + 20;
        var rh = Math.abs(dy) + 20;
        region.rect(rx, ry, rw, rh);
        ctx.clip(region, "evenodd");
      }
      ctx.moveTo(p0[0], p0[1]);
      ctx.lineTo(p1[0], p1[1]);
      if (this.lineDash) {
        ctx.save();
        ctx.setLineDash(this.lineDash);
      }
      ctx.stroke();
      if (this.lineDash) {
        ctx.restore();
      }
      ctx.translate(p1[0], p1[1]);
      ctx.rotate(angle);
      ctx.moveTo(0, 0);
      ctx.lineTo(-5, -4);
      ctx.lineTo(-5, 4);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.rotate(-angle);
      ctx.translate(-p1[0], -p1[1]);
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      if (!this._cachePoints) return false;
      var _this$_cachePoints2 = link_slicedToArray(this._cachePoints, 2),
        start = _this$_cachePoints2[0],
        end = _this$_cachePoints2[1];
      var dist = distToSegmentSquared(point, start, end);
      return dist < this.approximate;
    }
  }]);
  return Link;
}(base_link);
/* harmony default export */ const instance_link = (Link);
;// CONCATENATED MODULE: ./src/core/instance/poly-link.js
function poly_link_typeof(obj) { "@babel/helpers - typeof"; return poly_link_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, poly_link_typeof(obj); }
function poly_link_defineProperty(obj, key, value) { key = poly_link_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function poly_link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function poly_link_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, poly_link_toPropertyKey(descriptor.key), descriptor); } }
function poly_link_createClass(Constructor, protoProps, staticProps) { if (protoProps) poly_link_defineProperties(Constructor.prototype, protoProps); if (staticProps) poly_link_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function poly_link_toPropertyKey(arg) { var key = poly_link_toPrimitive(arg, "string"); return poly_link_typeof(key) === "symbol" ? key : String(key); }
function poly_link_toPrimitive(input, hint) { if (poly_link_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (poly_link_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function poly_link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) poly_link_setPrototypeOf(subClass, superClass); }
function poly_link_setPrototypeOf(o, p) { poly_link_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return poly_link_setPrototypeOf(o, p); }
function poly_link_createSuper(Derived) { var hasNativeReflectConstruct = poly_link_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = poly_link_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = poly_link_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return poly_link_possibleConstructorReturn(this, result); }; }
function poly_link_possibleConstructorReturn(self, call) { if (call && (poly_link_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return poly_link_assertThisInitialized(self); }
function poly_link_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function poly_link_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function poly_link_getPrototypeOf(o) { poly_link_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return poly_link_getPrototypeOf(o); }



// import { dist2, bezierPoint } from '../utils/functions';
var PIINRATIO = Math.PI / 180;
/**
 * @typedef {BaseLink~Configs} PolyLink~Configs
 * @property {Number} approximate   - 点击响应范围
 * @property {Number} radius        - 拐角弧度
 * @property {Number} minSpanX      - 起点终点在 x 方向最小的跨度
 * @property {Number} minSpanY      - 起点终点在 y 方向最小的跨度
 * @property {number[]} lineDash    - 虚线数组
 * @property {Boolean} doubleLink   - 双向箭头
 * @property {String} fontFamily    - 连线上的文字字体
 * @property {Number} fontSize      - 连线上的文字大小
 * @property {String} content       - 连线上的文字
 * @property {String} isSelf        - 是否为自连接
 */
/**
 * 方形折线
 * @constructor PolyLink
 * @extends BaseLink
 * @param {PolyLink~Configs} configs - 配置
 */
var PolyLink = /*#__PURE__*/function (_BaseLink) {
  poly_link_inherits(PolyLink, _BaseLink);
  var _super = poly_link_createSuper(PolyLink);
  /**
  * 创建方形折线
  * @param {PolyLink~Configs} configs - 配置
  **/
  function PolyLink(configs) {
    var _this;
    poly_link_classCallCheck(this, PolyLink);
    _this = _super.call(this, configs);
    /** @member {Number}   - 点击响应范围 */
    _this.approximate = configs.approximate || APPROXIMATE;
    /** @member {Number}   - 拐角弧度 */
    _this.radius = configs.radius || 0;
    /** @member {Number}   - 起点终点在 x 方向最小的跨度 */
    _this.minSpanX = configs.minSpanX || 10;
    /** @member {Number}   - 起点终点在 y 方向最小的跨度 */
    _this.minSpanY = configs.minSpanY || 10;
    /** @member {Number}    - 虚线数组 */
    _this.lineDash = configs.lineDash;
    /** @member {Number}    - 双向箭头 */
    _this.doubleLink = configs.doubleLink;
    /** @member {Number}    - 连线上的文字字体 */
    _this.fontFamily = configs.fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,Noto Sans,PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
    /** @member {Number}    - 连线上的文字大小 */
    _this.fontSize = configs.fontSize || '12px';
    /** @member {Number}    - 连线上的文字 */
    _this.content = configs.content || '';
    /** @member {Number}    - 是否为自连接 */
    _this.isSelf = !!configs.isSelf;
    _this.noArrow = !!configs.noArrow;
    _this._cacheAngle = [];
    _this._cachePoints = [];
    _this._cacheBoundingbox = {
      from: [],
      to: []
    };
    return _this;
  }
  poly_link_createClass(PolyLink, [{
    key: "_calculateAnchorPoints",
    value: function _calculateAnchorPoints() {
      var dmsfrom = this.from.getIntersectionsInFourDimension();
      var dmsto = this.to.getIntersectionsInFourDimension();
      var _cacheAngle = this._cacheAngle;
      if (this.isSelf) {
        polylinePoints(this._cachePoints, dmsfrom[this.fromDir], dmsto[DIRECTION.SELF], this.fromDir, this.toDir, this.minSpanX, this.minSpanY, true);
        _cacheAngle[0] = this.fromDir;
        _cacheAngle[1] = this.toDir;
      } else if (this.fromDir !== undefined && this.toDir !== undefined) {
        polylinePoints(this._cachePoints, dmsfrom[this.fromDir], dmsto[this.toDir], this.fromDir, this.toDir, this.minSpanX, this.minSpanY);
        _cacheAngle[0] = this.fromDir;
        _cacheAngle[1] = this.toDir;
      } else {
        var meta = minIntersectionBetweenNodes(dmsfrom, dmsto);
        polylinePoints(this._cachePoints, meta.fromP, meta.toP, meta.fromDir, meta.toDir, this.minSpanX, this.minSpanY);
        _cacheAngle[0] = meta.fromDir;
        _cacheAngle[1] = meta.toDir;
      }
    }
  }, {
    key: "isInViewBox",
    value: function isInViewBox(br) {
      if (this._static) {
        return true;
      }
      this._calculateAnchorPoints();
      return isPolyLineIntersectionRectange(this._cachePoints, br);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      var _this2 = this;
      // this._calculateAnchorPoints();
      var radius = this.radius;
      var points = this._cachePoints;
      var p = points[0];
      var pEnd = points[points.length - 1];
      var angleEnd = (this._cacheAngle[1] + 2) % 4 * 90 * PIINRATIO;
      ctx.fillStyle = ctx.strokeStyle = this.backgroundColor;
      if (this.doubleLink) {
        var beginAngle = (this._cacheAngle[0] + 2) % 4 * 90 * PIINRATIO;
        ctx.beginPath();
        ctx.translate(p[0], p[1]);
        ctx.rotate(beginAngle);
        ctx.moveTo(5, 0);
        ctx.lineTo(0, -4);
        ctx.lineTo(0, 4);
        ctx.lineTo(5, 0);
        ctx.fill();
        ctx.rotate(-beginAngle);
        ctx.translate(-p[0], -p[1]);
      }
      ctx.beginPath();
      ctx.moveTo(p[0], p[1]);
      points.slice(1, points.length - 1).forEach(function (p, idx) {
        if (_this2.radius) {
          var pLast = points[idx];
          var pNext = points[idx + 2];
          var _makeRadiusFromVector = makeRadiusFromVector(pLast, p, pNext, radius),
            p1 = _makeRadiusFromVector.p1,
            p2 = _makeRadiusFromVector.p2;
          if (p1 && p2) {
            ctx.lineTo(p1[0], p1[1]);
            ctx.quadraticCurveTo(p[0], p[1], p2[0], p2[1]);
          } else {
            ctx.lineTo(p[0], p[1]);
          }
        } else {
          ctx.lineTo(p[0], p[1]);
        }
      });
      ctx.lineTo(pEnd[0], pEnd[1]);
      if (this.lineDash) {
        ctx.save();
        ctx.setLineDash(this.lineDash);
      }
      ctx.stroke();
      if (this.lineDash) {
        ctx.restore();
      }
      if (!this.noArrow) {
        ctx.beginPath();
        ctx.translate(pEnd[0], pEnd[1]);
        ctx.rotate(angleEnd);
        ctx.moveTo(0, 0);
        ctx.lineTo(-5, -4);
        ctx.lineTo(-5, 4);
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.rotate(-angleEnd);
        ctx.translate(-pEnd[0], -pEnd[1]);
      }
      if (this.content) {
        ctx.beginPath();
        ctx.font = "".concat(this.fontSize, " ").concat(this.fontFamily);
        switch (this.fromDir) {
          case DIRECTION.BOTTOM:
            ctx.textAlign = 'left';
            ctx.fillText(this.content, p[0] + 2, p[1] + 10);
            break;
          case DIRECTION.RIGHT:
            ctx.textAlign = 'left';
            ctx.fillText(this.content, p[0] + 10, p[1] - 2);
            break;
          default:
            break;
        }
      }
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      if (this._static) {
        return false;
      }
      if (!this._cachePoints) {
        return false;
      }
      var points = this._cachePoints;
      var lastP = points[0];
      var remainPoints = points.slice(1);
      do {
        var currentP = remainPoints.shift();
        if (currentP) {
          var dist = distToSegmentSquared(point, lastP, currentP);
          if (dist < this.approximate) {
            return true;
          }
        }
        lastP = currentP;
      } while (lastP);
      return false;
    }
  }, {
    key: "cloneStatic",
    value: function cloneStatic() {
      var _Object$assign;
      var t = new PolyLink({});
      Object.assign(t, (_Object$assign = {
        radius: this.radius,
        _cachePoints: this._cachePoints,
        _cacheAngle: this._cacheAngle,
        backgroundColor: this.backgroundColor,
        doubleLink: this.doubleLink
      }, poly_link_defineProperty(_Object$assign, "radius", this.radius), poly_link_defineProperty(_Object$assign, "lineDash", this.lineDash), poly_link_defineProperty(_Object$assign, "noArrow", this.noArrow), poly_link_defineProperty(_Object$assign, "content", this.content), poly_link_defineProperty(_Object$assign, "fontSize", this.fontSize), poly_link_defineProperty(_Object$assign, "fontFamily", this.fontFamily), poly_link_defineProperty(_Object$assign, "fromDir", this.fromDir), poly_link_defineProperty(_Object$assign, "_static", true), _Object$assign));
      return t;
    }
  }]);
  return PolyLink;
}(base_link);
/* harmony default export */ const poly_link = (PolyLink);
;// CONCATENATED MODULE: ./src/core/instance/bezier-link.js
function bezier_link_typeof(obj) { "@babel/helpers - typeof"; return bezier_link_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, bezier_link_typeof(obj); }
function bezier_link_slicedToArray(arr, i) { return bezier_link_arrayWithHoles(arr) || bezier_link_iterableToArrayLimit(arr, i) || bezier_link_unsupportedIterableToArray(arr, i) || bezier_link_nonIterableRest(); }
function bezier_link_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function bezier_link_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function bezier_link_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function bezier_link_toConsumableArray(arr) { return bezier_link_arrayWithoutHoles(arr) || bezier_link_iterableToArray(arr) || bezier_link_unsupportedIterableToArray(arr) || bezier_link_nonIterableSpread(); }
function bezier_link_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function bezier_link_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return bezier_link_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bezier_link_arrayLikeToArray(o, minLen); }
function bezier_link_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function bezier_link_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return bezier_link_arrayLikeToArray(arr); }
function bezier_link_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function bezier_link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function bezier_link_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, bezier_link_toPropertyKey(descriptor.key), descriptor); } }
function bezier_link_createClass(Constructor, protoProps, staticProps) { if (protoProps) bezier_link_defineProperties(Constructor.prototype, protoProps); if (staticProps) bezier_link_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function bezier_link_toPropertyKey(arg) { var key = bezier_link_toPrimitive(arg, "string"); return bezier_link_typeof(key) === "symbol" ? key : String(key); }
function bezier_link_toPrimitive(input, hint) { if (bezier_link_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (bezier_link_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function bezier_link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) bezier_link_setPrototypeOf(subClass, superClass); }
function bezier_link_setPrototypeOf(o, p) { bezier_link_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bezier_link_setPrototypeOf(o, p); }
function bezier_link_createSuper(Derived) { var hasNativeReflectConstruct = bezier_link_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = bezier_link_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = bezier_link_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return bezier_link_possibleConstructorReturn(this, result); }; }
function bezier_link_possibleConstructorReturn(self, call) { if (call && (bezier_link_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return bezier_link_assertThisInitialized(self); }
function bezier_link_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function bezier_link_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function bezier_link_getPrototypeOf(o) { bezier_link_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return bezier_link_getPrototypeOf(o); }




var bezier_link_PIINRATIO = Math.PI / 180;
/**
 * @typedef {BaseLink~Configs} BezierLink~Configs
 * @property {Number} approximate   - 点击响应范围
 * @property {Number} minSpanX      - 起点终点在 x 方向最小的跨度
 * @property {Number} minSpanY      - 起点终点在 y 方向最小的跨度
 * @property {Number[]} lineDash    - 虚线数组
 * @property {Boolean} doubleLink   - 双向箭头
 * @property {String} fontFamily    - 连线上的文字字体
 * @property {Number} fontSize      - 连线上的文字大小
 * @property {String} content       - 连线上的文字
 * @property {Boolean} isSelf        - 是否为自连接
 */
/**
 * 贝塞尔曲线
 * @constructor BezierLink
 * @extends BaseLink
 * @param {BezierLink~Configs} configs - 配置
 */
var BezierLink = /*#__PURE__*/function (_BaseLink) {
  bezier_link_inherits(BezierLink, _BaseLink);
  var _super = bezier_link_createSuper(BezierLink);
  /**
  * 创建贝塞尔曲线.
  * @param {BezierLink~Configs} configs - 配置
  **/
  function BezierLink(configs) {
    var _this;
    bezier_link_classCallCheck(this, BezierLink);
    _this = _super.call(this, configs);
    /** @member {Number}      - 点击响应范围 */
    _this.approximate = configs.approximate || APPROXIMATE;
    /** @member {Number}      - 起点终点在 x 方向最小的跨度 */
    _this.minSpanX = configs.minSpanX || 0;
    /** @member {Number}      - 起点终点在 y 方向最小的跨度 */
    _this.minSpanY = configs.minSpanY || 0;
    /** @member {Number[]}      - 虚线数组 */
    _this.lineDash = configs.lineDash;
    _this.lineWidth = configs.lineWidth || 1;
    /** @member {Boolean}      - 双向箭头 */
    _this.doubleLink = configs.doubleLink;
    /** @member {String}      - 连线上的文字字体 */
    _this.fontFamily = configs.fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,Noto Sans,PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
    /** @member {Number}      - 连线上的文字大小 */
    _this.fontSize = configs.fontSize || '12px';
    /** @member {String}      - 连线上的文字 */
    _this.content = configs.content || '';
    /** @member {Boolean}      - 是否为自连接 */
    _this.isSelf = !!configs.isSelf;
    return _this;
  }

  // getColor() {
  //     if(this._isTargeting) {
  //         return this.hoverStyle;
  //     }
  //     return this.defaultStyle;
  // }

  // _calculateAnchorPoints() {
  //     let start;
  //     let end;
  //     if(this.fromDir !== undefined) {
  //         start = {
  //             dir: this.fromDir,
  //             p: this.from.getIntersectionsInFourDimension()[this.fromDir],
  //         }
  //     } else {
  //         start = this.from.calculateIntersectionInFourDimension(this.to.getCenter(), 'from');
  //     }
  //     if(this.toDir !== undefined) {
  //         end = {
  //             dir: this.toDir,
  //             p: this.to.getIntersectionsInFourDimension()[this.toDir],
  //         }
  //     } else {
  //         end = this.to.calculateIntersectionInFourDimension(this.from.getCenter(), 'to');
  //     }

  //     // const start = this.from.calculateIntersectionInFourDimension(this.to.getCenter(), 'from');
  //     // const end = this.to.calculateIntersectionInFourDimension(this.from.getCenter(), 'to');
  //     const p1 = start.p;
  //     const p2 = end.p;
  //     const points = bezierPoints(p1, p2, start.dir, end.dir, this.anticlock);

  //     this._cachePoints = [...p1, ...points]
  // }
  bezier_link_createClass(BezierLink, [{
    key: "_calculateAnchorPoints",
    value: function _calculateAnchorPoints() {
      var dmsfrom = this.from.getIntersectionsInFourDimension();
      var dmsto = this.to.getIntersectionsInFourDimension();
      if (this.isSelf) {
        var points = bezierPoints(dmsfrom[this.fromDir], dmsto[DIRECTION.SELF], this.fromDir, DIRECTION.BOTTOM, this.minSpanX, this.minSpanY);
        this._cachePoints = [].concat(bezier_link_toConsumableArray(dmsfrom[this.fromDir]), bezier_link_toConsumableArray(points));
        this._cacheAngle = [this.fromDir, DIRECTION.BOTTOM];
      } else if (this.fromDir !== undefined && this.toDir !== undefined) {
        var _points = bezierPoints(dmsfrom[this.fromDir], dmsto[this.toDir], this.fromDir, this.toDir, this.minSpanX, this.minSpanY);
        this._cachePoints = [].concat(bezier_link_toConsumableArray(dmsfrom[this.fromDir]), bezier_link_toConsumableArray(_points));
        this._cacheAngle = [this.fromDir, this.toDir];
      } else {
        var meta = minIntersectionBetweenNodes(dmsfrom, dmsto);
        var _points2 = bezierPoints(meta.fromP, meta.toP, meta.fromDir, meta.toDir);
        this._cachePoints = [].concat(bezier_link_toConsumableArray(meta.fromP), bezier_link_toConsumableArray(_points2));
        this._cacheAngle = [meta.fromDir, meta.toDir];
      }
    }
  }, {
    key: "render",
    value: function render(ctx) {
      this._calculateAnchorPoints();
      var points = this._cachePoints;
      var angle = getBezierAngle.apply(null, [1].concat(bezier_link_toConsumableArray(points)));
      ctx.fillStyle = ctx.strokeStyle = this.backgroundColor;
      ctx.lineWidth = this.lineWidth;
      if (this.doubleLink) {
        var beginAngle = (this._cacheAngle[0] + 2) % 4 * 90 * bezier_link_PIINRATIO;
        ctx.beginPath();
        ctx.translate(points[0], points[1]);
        ctx.rotate(beginAngle);
        ctx.moveTo(5, 0);
        ctx.lineTo(0, -4);
        ctx.lineTo(0, 4);
        ctx.lineTo(5, 0);
        ctx.fill();
        ctx.rotate(-beginAngle);
        ctx.translate(-points[0], -points[1]);
      }
      ctx.beginPath();
      ctx.moveTo(points[0], points[1]);
      ctx.bezierCurveTo.apply(ctx, bezier_link_toConsumableArray(points.slice(2)));
      if (this.lineDash) {
        ctx.save();
        ctx.setLineDash(this.lineDash);
      }
      ctx.stroke();
      if (this.lineDash) {
        ctx.restore();
      }
      ctx.beginPath();
      ctx.translate(points[6], points[7]);
      ctx.rotate(angle);
      ctx.moveTo(5, 0);
      ctx.lineTo(0, -4);
      ctx.lineTo(0, 4);
      ctx.lineTo(5, 0);
      ctx.fill();
      ctx.rotate(-angle);
      ctx.translate(-points[6], -points[7]);
      if (this.content) {
        ctx.beginPath();
        var hasFlip = points[0] > points[6];
        var _bezierPoint = bezierPoint(0.5, points),
          _bezierPoint2 = bezier_link_slicedToArray(_bezierPoint, 3),
          x = _bezierPoint2[0],
          y = _bezierPoint2[1],
          _angle = _bezierPoint2[2];
        ctx.translate(x, y);
        ctx.rotate(_angle);
        if (hasFlip) {
          ctx.rotate(Math.PI);
        }
        ctx.font = "".concat(this.fontSize, " ").concat(this.fontFamily);
        ctx.textAlign = 'center';
        ctx.fillText(this.content, 0, -(parseInt(this.fontSize) || 12) / 4);
        if (hasFlip) {
          ctx.rotate(Math.PI);
        }
        ctx.rotate(-_angle);
        ctx.translate(-x, -y);
      }
    }
  }, {
    key: "isHit",
    value: function isHit(point) {
      if (!this._cachePoints) return false;
      var points = this._cachePoints;
      var dist = distToBezierSegmentSquared(point, points);
      return dist < this.approximate;
    }
  }]);
  return BezierLink;
}(base_link);
/* harmony default export */ const bezier_link = (BezierLink);
;// CONCATENATED MODULE: ./src/core/layout/linear-layout.js
function linear_layout_typeof(obj) { "@babel/helpers - typeof"; return linear_layout_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, linear_layout_typeof(obj); }
function linear_layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function linear_layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, linear_layout_toPropertyKey(descriptor.key), descriptor); } }
function linear_layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) linear_layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) linear_layout_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function linear_layout_toPropertyKey(arg) { var key = linear_layout_toPrimitive(arg, "string"); return linear_layout_typeof(key) === "symbol" ? key : String(key); }
function linear_layout_toPrimitive(input, hint) { if (linear_layout_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (linear_layout_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 线性布局配置
 * @typedef {Object} LinearLayout~Configs
 * @property {string} direction     - 排列方向 默认 vertical
 * @property {number} gap           - 边距, 默认是 5
 * @property {string} alignment     - 垂直排列方向对齐方式 默认 center
 * @property {string} justify       - 排列方向对齐方式 默认 center
 */
/**
    线性布局

    排列方向
    direction:
        + vertical 从上至下排布
        + horizontal 从左至右排布
    
    不重叠，中线对齐
    只针对当前的 group

    对齐方式
    alignment: 
        + start 主轴左侧对齐
        + center 主轴对齐
        + end   主轴右侧对齐
    justify: 
        + start 开始时对齐
        + center 居中对齐
        + end   末尾对齐
        + space-between 平均分配空间对齐

 * @constructor LinearLayout
 * @implements {Layout}
 * @param {LinearLayout~Configs} configs - 配置
 */
var LinearLayout = /*#__PURE__*/function () {
  function LinearLayout() {
    var _configs$gap;
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    linear_layout_classCallCheck(this, LinearLayout);
    /** @member {string}  - 排列方向 默认 vertical */
    this.direction = configs.direction || 'vertical';
    /** @member {number}  - 边距, 默认是 5 */
    this.gap = (_configs$gap = configs.gap) !== null && _configs$gap !== void 0 ? _configs$gap : 5;
    /** @member {string}  - 垂直排列方向对齐方式 默认 center */
    this.alignment = configs.alignment || 'center';
    /** @member {string}  - 排列方向对齐方式 默认 center */
    this.justify = configs.justify || 'center';
    // this.widthSetByParent =  configs.width === '100%'
    this._rawConfigs = configs;
  }
  linear_layout_createClass(LinearLayout, [{
    key: "reflow",
    value: function reflow(group) {
      var _this = this;
      var stack = group._stack.filter(function (instance) {
        return instance.visible && !instance.absolutePosition;
      });
      var absoluteStack = group._stack.filter(function (instance) {
        return instance.visible && instance.absolutePosition;
      });
      var groupWidth = group.width - group.padding.left - group.padding.right;
      if (this.direction === 'vertical') {
        var reduceHeight = 0;
        var lastInstanceHeight = 0;
        var maxWidth = 0;
        var allHeight = 0;
        var childAll = stack.concat(absoluteStack);
        childAll.forEach(function (instance, idx) {
          if (instance.display === 'block') {
            instance.width = 0;
            // instance.definedWidth = maxWidth;
            instance.resetChildrenPosition();
            instance.reflow();
            instance._getBoundingGroupRect();
          }
        });
        stack.forEach(function (instance, idx) {
          var _instance$getBounding = instance.getBoundingDimension(),
            width = _instance$getBounding.width,
            height = _instance$getBounding.height;
          // console.log(height, instance.type);
          var gap = idx > 0 ? _this.gap : 0;
          if (instance.display !== 'outstretch') {
            maxWidth = Math.max(width, maxWidth);
          }
          allHeight += height + gap;
          reduceHeight += height / 2 + gap + lastInstanceHeight;
          lastInstanceHeight = height / 2;
          instance.anchor = [0, reduceHeight];
        });
        childAll.forEach(function (instance, idx) {
          if (instance.display === 'block') {
            // instance.definedWidth = maxWidth;
            instance.resetChildrenPosition();
            instance.width = maxWidth;
            instance.reflow();
            // instance._getBoundingGroupRect();
          } else if (instance.display === 'outstretch') {
            var w = group._belongs.width - group._belongs.padding.left - group._belongs.padding.right;
            instance.resetChildrenPosition();
            instance.width = Math.max(w, maxWidth);
            instance.reflow();
          }
        });
        maxWidth = Math.max(groupWidth, maxWidth);
        allHeight = allHeight / 2;
        if (this.alignment === 'start') {
          stack.forEach(function (instance, idx) {
            var _instance$getBounding2 = instance.getBoundingDimension(),
              width = _instance$getBounding2.width;
            instance.anchor[0] = -(maxWidth - width) / 2;
            instance.anchor[1] -= allHeight;
            // console.log(maxWidth, width, instance.anchor[0])
          });
        }

        if (this.alignment === 'end') {
          stack.forEach(function (instance, idx) {
            var _instance$getBounding3 = instance.getBoundingDimension(),
              width = _instance$getBounding3.width;
            instance.anchor[0] = (maxWidth - width) / 2;
            instance.anchor[1] -= allHeight;
          });
        }
        if (this.alignment === 'center') {
          stack.forEach(function (instance, idx) {
            var _instance$getBounding4 = instance.getBoundingDimension(),
              width = _instance$getBounding4.width;
            instance.anchor[1] -= allHeight;
          });
        }
      }
      if (this.direction === 'horizontal') {
        var reduceWidth = 0;
        var lastInstanceWidth = 0;
        var maxHeight = 0;
        var allWidth = 0;
        var allPureWidth = 0;
        stack.forEach(function (instance, idx) {
          var _instance$getBounding5 = instance.getBoundingDimension(),
            width = _instance$getBounding5.width,
            height = _instance$getBounding5.height;
          var gap = idx > 0 ? _this.gap : 0;
          maxHeight = Math.max(height, maxHeight);
          allWidth += width + gap;
          allPureWidth += width;
          reduceWidth += width / 2 + gap + lastInstanceWidth;
          lastInstanceWidth = width / 2;
          instance.anchor = [reduceWidth, 0];
        });
        if (this.justify === 'start') {
          var withdraw = groupWidth / 2;
          stack.forEach(function (instance, idx) {
            instance.anchor[0] -= withdraw;
          });
        }
        if (this.justify === 'end') {
          var _withdraw = groupWidth / 2 - allWidth;
          stack.forEach(function (instance, idx) {
            instance.anchor[0] += _withdraw;
          });
        }
        if (this.justify === 'center') {
          var _withdraw2 = allWidth / 2;
          stack.forEach(function (instance, idx) {
            instance.anchor[0] -= _withdraw2;
          });
        }
        if (this.justify === 'space-between' && stack.length > 1) {
          var width = Math.max(groupWidth, allWidth);
          var gapAverage = (width - allWidth) / (stack.length - 1);
          var _withdraw3 = width / 2;
          stack.forEach(function (instance, idx) {
            instance.anchor[0] += gapAverage * idx - _withdraw3;
          });
        }
        if (this.alignment === 'start') {
          stack.forEach(function (instance, idx) {
            var _instance$getBounding6 = instance.getBoundingDimension(),
              height = _instance$getBounding6.height;
            instance.anchor[1] = -(maxHeight - height) / 2;
          });
        }
        if (this.alignment === 'end') {
          stack.forEach(function (instance, idx) {
            var _instance$getBounding7 = instance.getBoundingDimension(),
              height = _instance$getBounding7.height;
            instance.anchor[1] = (maxHeight - height) / 2;
          });
        }
      }
      if (absoluteStack.length) {
        if (group.display === 'block') {
          group.getBoundingDimension();
        } else {
          group._getBoundingGroupRect();
        }
        var WIDTH = group.width / 2;
        var HEIGHT = group.height / 2;
        var shifty = (group.padding.top - group.padding.bottom) / 2;
        var shiftx = (group.padding.left - group.padding.right) / 2;
        absoluteStack.forEach(function (instance) {
          instance.anchor = _this._resolveAbsoluteAnchor(instance.absolutePosition, instance, WIDTH, HEIGHT, shiftx, shifty);
        });
      }
    }
  }, {
    key: "_resolveAbsoluteAnchor",
    value: function _resolveAbsoluteAnchor(config, instance, w, h, shiftx, shifty) {
      var top = config.top,
        right = config.right,
        bottom = config.bottom,
        left = config.left,
        centerX = config.centerX,
        centerY = config.centerY;
      var _instance$getBounding8 = instance.getBoundingDimension(),
        width = _instance$getBounding8.width,
        height = _instance$getBounding8.height;
      var hw = width / 2;
      var hh = height / 2;
      var y = 0;
      var x = 0;
      if (typeof top === 'number') {
        y = top + hh - h - shifty;
      }
      if (typeof right === 'number') {
        x = w - right - hw - shiftx;
      }
      if (typeof bottom === 'number') {
        y = h - bottom - hh - shifty;
      }
      if (typeof left === 'number') {
        x = left + hw - w - shiftx;
      }
      if (typeof centerX === 'number') {
        x = centerX;
      }
      if (typeof centerY === 'number') {
        y = centerY;
      }
      return [x, y];
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LinearLayout(this._rawConfigs);
    }
  }]);
  return LinearLayout;
}();
/* harmony default export */ const linear_layout = (LinearLayout);
;// CONCATENATED MODULE: ./src/core/instance/text-group/base/constants.js
var EDITOR_EVENTS = {
  INPUT: 'input',
  CONTROL_CMD: 'control'
};
var KEYBOARD_INPUT = {
  INPUT: 'input',
  COMPOSITION_START: 'compositionstart',
  COMPOSITION_UPDATE: 'compositionupdate',
  COMPOSITION_END: 'compositionend',
  ENTER: 'enter',
  DELETE: 'delete',
  BACKSPACE: 'backspace'
};
var KEYBOARD_COMMANDS = {
  ARROW_LEFT: 'arrowLeft',
  ARROW_RIGHT: 'arrowRight',
  ARROW_UP: 'arrowUp',
  ARROW_DOWN: 'arrowDown',
  UNDO: 'undo',
  REDO: 'redo',
  SHIFT_DOWN: 'shift_down',
  SHIFT_UP: 'shift_up',
  CTRLA: 'ctrla',
  COPY: 'copy',
  CUT: 'cut',
  PASTE: 'paste'
};
var MOUSE_COMMANDS = {
  START_EDIT: 'startedit',
  EDIT_CLICK: 'editclick',
  SHIFT_ON_CLICK: 'shiftonclick',
  DOUBLE_CLICK: 'doubleclick'
};
var OPERRATION = {
  PLAININPUT: 'plaininput',
  SPACEINPUT: 'spaceinput',
  RETURNINPUT: 'returninput',
  CARETMOVEMENT: 'caretmovement',
  DELETE_IN_LINE: 'deleteinline',
  DELETE_IN_EDITAREA: 'deleteineditarea',
  ENSURE_DELETE: 'ensuredelete',
  SELECTION_DELETE: 'selectiondelete',
  SELECTION_INPUT: 'selectioninput',
  COMPOSITE_INSERT: 'compositeinsert'
};
;// CONCATENATED MODULE: ./src/core/instance/text-group/base/shadow-input.js
function shadow_input_typeof(obj) { "@babel/helpers - typeof"; return shadow_input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, shadow_input_typeof(obj); }
function shadow_input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function shadow_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, shadow_input_toPropertyKey(descriptor.key), descriptor); } }
function shadow_input_createClass(Constructor, protoProps, staticProps) { if (protoProps) shadow_input_defineProperties(Constructor.prototype, protoProps); if (staticProps) shadow_input_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function shadow_input_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) shadow_input_setPrototypeOf(subClass, superClass); }
function shadow_input_createSuper(Derived) { var hasNativeReflectConstruct = shadow_input_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = shadow_input_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = shadow_input_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return shadow_input_possibleConstructorReturn(this, result); }; }
function shadow_input_possibleConstructorReturn(self, call) { if (call && (shadow_input_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return shadow_input_assertThisInitialized(self); }
function shadow_input_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function shadow_input_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; shadow_input_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !shadow_input_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return shadow_input_construct(Class, arguments, shadow_input_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return shadow_input_setPrototypeOf(Wrapper, Class); }; return shadow_input_wrapNativeSuper(Class); }
function shadow_input_construct(Parent, args, Class) { if (shadow_input_isNativeReflectConstruct()) { shadow_input_construct = Reflect.construct.bind(); } else { shadow_input_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) shadow_input_setPrototypeOf(instance, Class.prototype); return instance; }; } return shadow_input_construct.apply(null, arguments); }
function shadow_input_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function shadow_input_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function shadow_input_setPrototypeOf(o, p) { shadow_input_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shadow_input_setPrototypeOf(o, p); }
function shadow_input_getPrototypeOf(o) { shadow_input_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shadow_input_getPrototypeOf(o); }
function shadow_input_defineProperty(obj, key, value) { key = shadow_input_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function shadow_input_toPropertyKey(arg) { var key = shadow_input_toPrimitive(arg, "string"); return shadow_input_typeof(key) === "symbol" ? key : String(key); }
function shadow_input_toPrimitive(input, hint) { if (shadow_input_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (shadow_input_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ShadowInput = /*#__PURE__*/function (_EventTarget) {
  shadow_input_inherits(ShadowInput, _EventTarget);
  var _super = shadow_input_createSuper(ShadowInput);
  function ShadowInput(wrapper) {
    var _this;
    shadow_input_classCallCheck(this, ShadowInput);
    _this = _super.call(this);
    shadow_input_defineProperty(shadow_input_assertThisInitialized(_this), "_inputElement", null);
    _this._inputElement = shadow_input_createInputElement(_this.controlCallback.bind(shadow_input_assertThisInitialized(_this)));
    wrapper.append(_this._inputElement);
    _this._inputElement.focus();
    return _this;
  }
  shadow_input_createClass(ShadowInput, [{
    key: "controlCallback",
    value: function controlCallback(kind, data) {
      switch (kind) {
        case KEYBOARD_INPUT.INPUT:
        case KEYBOARD_INPUT.COMPOSITION_START:
        case KEYBOARD_INPUT.COMPOSITION_UPDATE:
        case KEYBOARD_INPUT.COMPOSITION_END:
        case KEYBOARD_INPUT.ENTER:
        case KEYBOARD_INPUT.BACKSPACE:
        case KEYBOARD_INPUT.DELETE:
          this.dispatchEvent(new CustomEvent(EDITOR_EVENTS.INPUT, {
            detail: {
              kind: kind,
              data: data
            }
          }));
          break;
        case KEYBOARD_COMMANDS.ARROW_LEFT:
        case KEYBOARD_COMMANDS.ARROW_RIGHT:
        case KEYBOARD_COMMANDS.ARROW_UP:
        case KEYBOARD_COMMANDS.ARROW_DOWN:
        case KEYBOARD_COMMANDS.CTRLA:
        case KEYBOARD_COMMANDS.SHIFT_DOWN:
        case KEYBOARD_COMMANDS.SHIFT_UP:
        case KEYBOARD_COMMANDS.UNDO:
        case KEYBOARD_COMMANDS.REDO:
        case KEYBOARD_COMMANDS.COPY:
        case KEYBOARD_COMMANDS.CUT:
        case KEYBOARD_COMMANDS.PASTE:
          this.dispatchEvent(new CustomEvent(EDITOR_EVENTS.CONTROL_CMD, {
            detail: {
              kind: kind,
              data: data
            }
          }));
          break;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this._inputElement.focus({
        preventScroll: true
      });
    }
  }, {
    key: "syncPosition",
    value: function syncPosition(x, y) {
      this._inputElement.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.removeLisenter) {
        this.removeLisenter();
      }
      this._inputElement.remove();
    }
  }]);
  return ShadowInput;
}( /*#__PURE__*/shadow_input_wrapNativeSuper(EventTarget));
/* harmony default export */ const shadow_input = (ShadowInput);
function shadow_input_createInputElement(controlCallback) {
  var input = document.createElement('input');
  input.setAttribute('style', "\\n        width: 100px;\\n        position: absolute;\\n        left: 0;\\n        top: 0;\\n        border:none;\\n        opacity: 0;\\n        z-index: -1;\\n        contain: strict;");
  input.setAttribute('tabindex', -1);
  // input.setAttribute('aria-hidden', true);
  input.setAttribute('spellcheck', false);
  input.setAttribute('autocorrect', 'off');
  var stopInput = false;
  var status = {
    ctrlOn: false,
    shiftOn: false
  };
  input.addEventListener('beforeinput', function (e) {
    e.preventDefault();
    if (e.data) {
      // content += e.data;
      // renderContent();
      if (!stopInput) {
        controlCallback(KEYBOARD_INPUT.INPUT, e.data);
      }
    }
  });
  input.addEventListener('paste', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var pasteContent = (e.clipboardData || window.clipboardData).getData("text");
    controlCallback(KEYBOARD_COMMANDS.PASTE, pasteContent);
  });
  input.addEventListener('copy', function (e) {
    e.preventDefault();
    e.stopPropagation();
    controlCallback(KEYBOARD_COMMANDS.COPY, e);
  });
  input.addEventListener('cut', function (e) {
    e.preventDefault();
    e.stopPropagation();
    controlCallback(KEYBOARD_COMMANDS.CUT, e);
  });
  input.addEventListener('compositionstart', function (e) {
    controlCallback(KEYBOARD_INPUT.COMPOSITION_START);
    stopInput = true;
  });
  input.addEventListener('compositionupdate', function (e) {
    controlCallback(KEYBOARD_INPUT.COMPOSITION_UPDATE, e.data);
  });
  input.addEventListener('compositionend', function (e) {
    controlCallback(KEYBOARD_INPUT.COMPOSITION_END, e.data);
    input.value = '';
    stopInput = false;
  });
  input.addEventListener('keyup', function (event) {
    if (stopInput) {
      return;
    }
    switch (event.key) {
      case "Shift":
        controlCallback(KEYBOARD_COMMANDS.SHIFT_UP);
        status.shiftOn = false;
        break;
      case "Meta":
      case "Control":
        status.ctrlOn = false;
        break;
    }
  });
  input.addEventListener('keydown', function (event) {
    if (stopInput) {
      return;
    }
    switch (event.code) {
      case "Enter":
        controlCallback(KEYBOARD_INPUT.ENTER);
        break;
      case "Backspace":
        controlCallback(KEYBOARD_INPUT.BACKSPACE);
        break;
      case "Delete":
        controlCallback(KEYBOARD_INPUT.DELETE);
        break;
      case "ArrowLeft":
        controlCallback(KEYBOARD_COMMANDS.ARROW_LEFT);
        break;
      case "ArrowRight":
        controlCallback(KEYBOARD_COMMANDS.ARROW_RIGHT);
        break;
      case "ArrowDown":
        controlCallback(KEYBOARD_COMMANDS.ARROW_DOWN);
        break;
      case "ArrowUp":
        controlCallback(KEYBOARD_COMMANDS.ARROW_UP);
        break;
    }
    switch (event.key) {
      case "Shift":
        controlCallback(KEYBOARD_COMMANDS.SHIFT_DOWN);
        status.shiftOn = true;
        break;
      case "Meta":
      case "Control":
        status.ctrlOn = true;
        break;
      case 'a':
        if (status.ctrlOn) {
          controlCallback(KEYBOARD_COMMANDS.CTRLA);
        }
        break;
      // case 'c':
      //     if(status.ctrlOn) {
      //         controlCallback(KEYBOARD_COMMANDS.CTRLC);
      //     }
      //     break; 
      // case 'v':
      //     if(status.ctrlOn) {
      //         controlCallback(KEYBOARD_COMMANDS.CTRLV);
      //     }
      //     break;   
      // case 'x':
      //     if(status.ctrlOn) {
      //         controlCallback(KEYBOARD_COMMANDS.CTRLX);
      //     }
      //     break;
      case 'y':
        if (status.ctrlOn) {
          event.preventDefault();
          controlCallback(KEYBOARD_COMMANDS.REDO);
        }
        break;
      case 'z':
        if (status.ctrlOn && status.shiftOn) {
          controlCallback(KEYBOARD_COMMANDS.REDO);
        } else if (status.ctrlOn) {
          controlCallback(KEYBOARD_COMMANDS.UNDO);
        }
        break;
    }
  });
  return input;
}
;// CONCATENATED MODULE: ./src/core/instance/text-group/base/caret.js
function caret_typeof(obj) { "@babel/helpers - typeof"; return caret_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, caret_typeof(obj); }
function caret_toConsumableArray(arr) { return caret_arrayWithoutHoles(arr) || caret_iterableToArray(arr) || caret_unsupportedIterableToArray(arr) || caret_nonIterableSpread(); }
function caret_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function caret_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return caret_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return caret_arrayLikeToArray(o, minLen); }
function caret_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function caret_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return caret_arrayLikeToArray(arr); }
function caret_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function caret_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function caret_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, caret_toPropertyKey(descriptor.key), descriptor); } }
function caret_createClass(Constructor, protoProps, staticProps) { if (protoProps) caret_defineProperties(Constructor.prototype, protoProps); if (staticProps) caret_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function caret_defineProperty(obj, key, value) { key = caret_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function caret_toPropertyKey(arg) { var key = caret_toPrimitive(arg, "string"); return caret_typeof(key) === "symbol" ? key : String(key); }
function caret_toPrimitive(input, hint) { if (caret_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (caret_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Caret = /*#__PURE__*/function () {
  function Caret() {
    caret_classCallCheck(this, Caret);
    caret_defineProperty(this, "_row", 0);
    caret_defineProperty(this, "_column", [0, 0]);
    caret_defineProperty(this, "_status", {
      show: true,
      anime: null,
      lastElapsed: 0,
      refreshElapsed: false
    });
  }
  caret_createClass(Caret, [{
    key: "setRow",
    value: function setRow(row) {
      this._row = row;
    }
  }, {
    key: "setColumn",
    value: function setColumn(columnoridx, column) {
      if (column !== undefined) {
        this._column[columnoridx] = column;
      } else {
        this._column = columnoridx;
      }
    }
  }, {
    key: "getRow",
    value: function getRow() {
      return this._row;
    }
  }, {
    key: "getColumn",
    value: function getColumn(idx) {
      if (idx !== undefined) {
        return this._column[idx];
      }
      return this._column;
    }
  }, {
    key: "animate",
    value: function animate(jflow) {
      var _this = this;
      this._status.anime = jflow.requestJFlowAnime(function (elapsed) {
        var lastElapsed = _this._status.lastElapsed;
        if (_this._status.refreshElapsed) {
          _this._status.lastElapsed = elapsed;
          _this._status.refreshElapsed = false;
        }
        if (elapsed - lastElapsed > 500) {
          _this._status.show = !_this._status.show;
          _this._status.lastElapsed = elapsed;
        }
      });
    }
  }, {
    key: "cancelAnimate",
    value: function cancelAnimate() {
      this._status.anime.cancel();
      Object.assign(this._status, {
        show: true,
        anime: null,
        lastElapsed: 0
      });
    }
  }, {
    key: "isShow",
    value: function isShow() {
      return this._status.show;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      Object.assign(this._status, {
        show: true,
        refreshElapsed: true
      });
    }
  }, {
    key: "toRange",
    value: function toRange() {
      return [this._row].concat(caret_toConsumableArray(this._column));
    }
  }, {
    key: "fromRange",
    value: function fromRange(range) {
      this._row = range[0];
      this._column = range.slice(1);
    }
  }]);
  return Caret;
}();
/* harmony default export */ const caret = (Caret);
;// CONCATENATED MODULE: ./src/core/instance/text-group/utils.js

function calculateOffsetByWidth(offx, textmeta, fontSize, fontFamily, spaceHolder) {
  var content = textmeta.getRenderSource(spaceHolder);
  var maxL = content.length - 1;
  if (textmeta.width === 0) {
    return 0;
  }
  var allwidth = textmeta.width;
  var idx = Math.floor(offx / allwidth * maxL);
  requestCacheCanvas(function (ctx) {
    ctx.font = "".concat(fontSize, " ").concat(fontFamily);
    var g1, g2;
    var lastidx;
    var c = content.substring(0, idx);
    var c1 = content.substring(idx - 1, idx);
    var c2 = content.substring(idx, idx + 1);
    var w = ctx.measureText(c).width;
    var w1 = ctx.measureText(c1).width;
    var w2 = ctx.measureText(c2).width;
    g1 = w - w1 / 2;
    g2 = w + w2 / 2;
    do {
      if (g1 <= offx && g2 >= offx) {
        break;
      }
      if (g1 > offx) {
        // 左侧少了
        var spanw = g2 - offx;
        lastidx = idx;
        if (spanw < 100) {
          idx -= 1;
        } else {
          idx -= Math.floor(spanw / g2 * lastidx);
        }
        c = content.substring(idx, lastidx);
        w -= ctx.measureText(c).width;
      } else if (g2 < offx) {
        // 右侧少了
        var _spanw = offx - g1;
        lastidx = idx;
        if (_spanw < 100) {
          idx += 1;
        } else {
          idx += Math.floor(_spanw / (allwidth - g1) * (maxL - lastidx));
        }
        c = content.substring(lastidx, idx);
        w += ctx.measureText(c).width;
      }
      c1 = content.substring(idx - 1, idx);
      c2 = content.substring(idx, idx + 1);
      w1 = ctx.measureText(c1).width;
      w2 = ctx.measureText(c2).width;
      g1 = w - w1 / 2;
      g2 = w + w2 / 2;
    } while (idx >= 0 && idx <= maxL);
  });
  return idx;
}
;// CONCATENATED MODULE: ./src/core/instance/text-group/storage/index.js
function storage_typeof(obj) { "@babel/helpers - typeof"; return storage_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, storage_typeof(obj); }
function storage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function storage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, storage_toPropertyKey(descriptor.key), descriptor); } }
function storage_createClass(Constructor, protoProps, staticProps) { if (protoProps) storage_defineProperties(Constructor.prototype, protoProps); if (staticProps) storage_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function storage_defineProperty(obj, key, value) { key = storage_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function storage_toPropertyKey(arg) { var key = storage_toPrimitive(arg, "string"); return storage_typeof(key) === "symbol" ? key : String(key); }
function storage_toPrimitive(input, hint) { if (storage_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (storage_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Area = /*#__PURE__*/function () {
  function Area() {
    storage_classCallCheck(this, Area);
    storage_defineProperty(this, "_lines", []);
  }
  storage_createClass(Area, [{
    key: "get",
    value: function get(idx) {
      return this._lines[idx];
    }
  }, {
    key: "getLineAbove",
    value: function getLineAbove(offsetY) {
      var row = 0;
      var lines = this._lines;
      while (row < lines.length) {
        if (lines[row].reduceHeight > offsetY) {
          break;
        }
        row++;
      }
      return Math.min(row, lines.length - 1);
    }
  }, {
    key: "truncate",
    value: function truncate(configs) {
      var l = Line.create(configs);
      this._lines = [l];
      return l;
    }
  }, {
    key: "push",
    value: function push(line) {
      this._lines.push(line);
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this._lines.forEach(callback);
    }
  }, {
    key: "length",
    value: function length() {
      return this._lines.length;
    }
  }]);
  return Area;
}();
var Line = /*#__PURE__*/function () {
  function Line() {
    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    storage_classCallCheck(this, Line);
    storage_defineProperty(this, "width", 0);
    storage_defineProperty(this, "anchorY", 0);
    storage_defineProperty(this, "height", 0);
    storage_defineProperty(this, "reduceHeight", 0);
    storage_defineProperty(this, "_elements", []);
    storage_defineProperty(this, "_elements", []);
    Object.assign(this, configs);
  }
  storage_createClass(Line, [{
    key: "get",
    value: function get(idx) {
      return this._elements[idx];
    }
  }, {
    key: "length",
    value: function length() {
      return this._elements.length;
    }
  }, {
    key: "insert",
    value: function insert(idx, elem) {
      this._elements.splice(idx, 0, elem);
    }
  }, {
    key: "push",
    value: function push(elem) {
      this._elements.push(elem);
    }
  }, {
    key: "tail",
    value: function tail() {
      return this._elements[this._elements.length - 1];
    }
  }, {
    key: "copy",
    value: function copy() {
      return this._elements.slice();
    }
  }, {
    key: "getColumnNearest",
    value: function getColumnNearest(offsetX, elementSpace, fontSize, fontFamily, editor) {
      var elements = this._elements;
      if (offsetX >= this.width) {
        var c = elements.length - 1;
        var elem = elements[c];
        var q = 0;
        if (elem.type === 'text') {
          q = elem.source.length;
        }
        return [c, q];
      } else {
        var elem_idx = 0;
        var last_c = 0;
        var _c = 0;
        var lastel = null;
        while (elem_idx < elements.length - 1) {
          last_c = _c;
          var el = elements[elem_idx];
          if (el.type !== 'text') {
            var doubleMargin = lastel && lastel.type === 'text';
            var margin = doubleMargin ? elementSpace * 2 : elementSpace;
            _c += el.width + margin;
          } else {
            _c += el.width;
          }
          if (_c > offsetX) {
            lastel = el;
            break;
          }
          lastel = el;
          elem_idx++;
        }
        if (_c <= offsetX) {
          last_c = _c;
        }
        var textmeta = elements[elem_idx];
        if (textmeta.type === 'text') {
          var offx = offsetX - last_c;
          var idx = calculateOffsetByWidth(offx, textmeta, fontSize, fontFamily, editor.spaceHolder);
          return [elem_idx, idx];
        } else {
          var _offx = offsetX - last_c;
          if (_offx > lastel.width / 2) {
            return [elem_idx + 1, 0];
          } else {
            return [elem_idx, 0];
          }
        }
      }
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this._elements.forEach(callback);
    }
  }], [{
    key: "create",
    value: function create(configs) {
      var l = new Line(configs);
      return l;
    }
  }]);
  return Line;
}();
var FlattenTextElements = /*#__PURE__*/function () {
  function FlattenTextElements() {
    storage_classCallCheck(this, FlattenTextElements);
    storage_defineProperty(this, "_textElements", []);
    storage_defineProperty(this, "_records", []);
    storage_defineProperty(this, "_caretRecord", null);
  }
  storage_createClass(FlattenTextElements, [{
    key: "insertBefore",
    value: function insertBefore(anchor, elem) {
      var idx = this.findIndex(anchor);
      this.inersetAt(idx, elem);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(anchor, elem, needWrap) {
      var idx = this.findIndex(anchor);
      // const next = this.get(idx+1);
      if (needWrap) {
        elem.setNeedWrap(true);
      }
      this.inersetAt(idx + 1, elem);
    }
  }, {
    key: "findIndex",
    value: function findIndex(elem) {
      return this._textElements.findIndex(function (el) {
        return el === elem;
      });
    }
  }, {
    key: "get",
    value: function get(idx) {
      return this._textElements[idx];
    }
  }, {
    key: "from",
    value: function from(elements) {
      this._textElements = elements;
    }
  }, {
    key: "inersetAt",
    value: function inersetAt(idx, elem) {
      this.splice(idx, 0, elem);
    }
  }, {
    key: "push",
    value: function push(elem) {
      this.splice(this.length(), 0, elem);
    }
  }, {
    key: "remove",
    value: function remove(idx) {
      this.splice(idx, 1);
    }
  }, {
    key: "splice",
    value: function splice() {
      var _this$_textElements;
      var removed = (_this$_textElements = this._textElements).splice.apply(_this$_textElements, arguments);
      this._records.push({
        op: 'splice',
        args: arguments,
        removed: removed
      });
    }
  }, {
    key: "slice",
    value: function slice() {
      var _this$_textElements2;
      return (_this$_textElements2 = this._textElements).slice.apply(_this$_textElements2, arguments);
    }
  }, {
    key: "copy",
    value: function copy() {
      return this._textElements.slice();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._textElements.length === 1 && this._textElements[0].source === '';
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this._textElements.forEach(callback);
    }
  }, {
    key: "tail",
    value: function tail() {
      return this._textElements[this._textElements.length - 1];
    }
  }, {
    key: "filter",
    value: function filter(callback) {
      return this._textElements.filter(callback);
    }
  }, {
    key: "length",
    value: function length() {
      return this._textElements.length;
    }
  }, {
    key: "startRecord",
    value: function startRecord() {
      this._caretRecord = {
        before: null,
        after: null
      };
      this._records = [];
      return this._records;
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return this._records;
    }
  }, {
    key: "recordBeforeCaret",
    value: function recordBeforeCaret(caret) {
      this._caretRecord.before = caret.toRange();
    }
  }, {
    key: "recordAfterCaret",
    value: function recordAfterCaret(caret) {
      this._caretRecord.after = caret.toRange();
    }
  }, {
    key: "getCaretRecord",
    value: function getCaretRecord() {
      return this._caretRecord;
    }
  }, {
    key: "collectRecords",
    value: function collectRecords() {
      return this._records;
    }
  }], [{
    key: "create",
    value: function create(elements) {
      var _e = new FlattenTextElements();
      _e.from(elements);
      return _e;
    }
  }]);
  return FlattenTextElements;
}();
var TextElement = /*#__PURE__*/function () {
  function TextElement(type, source) {
    storage_classCallCheck(this, TextElement);
    storage_defineProperty(this, "needWrap", false);
    storage_defineProperty(this, "width", 0);
    storage_defineProperty(this, "reduceWidth", 0);
    storage_defineProperty(this, "height", 0);
    storage_defineProperty(this, "anchorX", 0);
    storage_defineProperty(this, "anchorY", 0);
    storage_defineProperty(this, "dirty", true);
    storage_defineProperty(this, "isTail", false);
    storage_defineProperty(this, "_spaceRecords", []);
    storage_defineProperty(this, "_spacedContentSegmnent", []);
    storage_defineProperty(this, "_returnSymbol", {
      symbol: '↲',
      width: 0
    });
    this.type = type;
    this.source = source;
  }
  storage_createClass(TextElement, [{
    key: "getRenderSource",
    value: function getRenderSource(spaceHolder) {
      var content = this.source;
      if (spaceHolder.enable) {
        return content.replace(/\\s/g, spaceHolder.spacePlaceholder);
      }
      return content;
    }
  }, {
    key: "setSourceWithRecord",
    value: function setSourceWithRecord(source, spaceHolder, records) {
      var lastSource = this.source;
      this.setSource(source, spaceHolder);
      if (records) {
        records.push({
          op: 'setSource',
          args: [this, source, lastSource]
        });
      }
    }
  }, {
    key: "setSource",
    value: function setSource(source, spaceHolder) {
      this.source = source;
      this.dirty = true;
      if (spaceHolder.enable) {
        var r = this._spaceRecords;
        var p = spaceHolder.spacePlaceholder;
        r.length = 0;
        var lastOffset;
        source.replace(/\\s/g, function (_, offset) {
          if (lastOffset === undefined) {
            lastOffset = offset;
            r.push(offset);
          }
          if (offset - lastOffset > 1) {
            r.push(lastOffset);
            r.push(offset);
          }
          lastOffset = offset;
          return p;
        });
        if (lastOffset !== undefined) {
          r.push(lastOffset);
        }
      }
    }
  }, {
    key: "setNeedWrap",
    value: function setNeedWrap(needWrap, records) {
      var lastWrap = this.needWrap;
      this.needWrap = needWrap;
      if (lastWrap !== needWrap && records) {
        records.push({
          op: 'setNeedWrap',
          args: [this, needWrap, lastWrap]
        });
      }
    }
  }, {
    key: "shift",
    value: function shift(offset, step) {
      if (this.type === 'text') {
        var content = this.source;
        var l = content.length;
        var nextOffset = offset + step;
        if (nextOffset < 0) {
          return 'prev';
        }
        if (nextOffset > l) {
          //- ((isTail || this.needWrap) ? 0 : 1)) {
          return 'next';
        }
        return 'self';
      } else {
        if (step > 0) {
          return 'next';
        }
        if (step < 0) {
          return 'prev';
        }
      }
    }
  }, {
    key: "tailOffset",
    value: function tailOffset() {
      if (this.type === 'text') {
        if (this.needWrap || this.isTail) {
          return this.source.length;
        } else {
          return Math.max(0, this.source.length - 1);
        }
      } else {
        return 0;
      }
    }
  }, {
    key: "headOffset",
    value: function headOffset() {
      return 0;
    }
  }, {
    key: "preCalculateText",
    value: function preCalculateText(ctx, spaceHolder) {
      var content = this.getRenderSource(spaceHolder);
      this.width = ctx.measureText(content).width;
      this.dirty = false;
      if (spaceHolder.enable) {
        var s_width = ctx.measureText(spaceHolder.spacePlaceholder).width;
        this._returnSymbol.width = ctx.measureText(this._returnSymbol.symbol).width;
        var r2 = this._spacedContentSegmnent;
        var lastOffset = 0;
        r2.length = 0;
        if (this._spaceRecords.length) {
          var r = this._spaceRecords;
          var l = r.length;
          var i = 0;
          while (i < l) {
            var f = r[i++];
            var t = r[i++];
            var q = content.substring(lastOffset, f);
            r2.push([q, ctx.measureText(q).width, 'text']);
            r2.push([content.substring(f, t + 1), (t - f + 1) * s_width, 'placeholder']);
            lastOffset = t + 1;
          }
        }
        if (lastOffset < content.length) {
          var _q = content.substring(lastOffset);
          r2.push([_q, ctx.measureText(_q).width, 'text']);
        }
        if (this.needWrap) {
          this.width += this._returnSymbol.width;
        }
      }
    }
  }, {
    key: "render",
    value: function render(ctx, spaceHolder, textColor) {
      var _this = this;
      if (spaceHolder.enable) {
        var hw = this.width / 2;
        var _w = -hw + this.anchorX;
        var spacePlaceholderColor = spaceHolder.spacePlaceholderColor;
        this._spacedContentSegmnent.forEach(function (seg) {
          ctx.fillStyle = seg[2] === 'text' ? textColor : spacePlaceholderColor;
          var t = seg[1] / 2;
          _w += t;
          ctx.fillText(seg[0], _w, _this.anchorY);
          _w += t;
        });
        if (this.needWrap) {
          ctx.save();
          ctx.font = spaceHolder.returnFont;
          ctx.fillStyle = spacePlaceholderColor;
          ctx.fillText(this._returnSymbol.symbol, _w + this._returnSymbol.width / 2, this.anchorY);
          ctx.restore();
        }
        return;
      }
      ctx.fillText(this.source, this.anchorX, this.anchorY);
    }
  }]);
  return TextElement;
}();
;// CONCATENATED MODULE: ./src/core/instance/text-group/base/range.js
function range_typeof(obj) { "@babel/helpers - typeof"; return range_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, range_typeof(obj); }
function range_slicedToArray(arr, i) { return range_arrayWithHoles(arr) || range_iterableToArrayLimit(arr, i) || range_unsupportedIterableToArray(arr, i) || range_nonIterableRest(); }
function range_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function range_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return range_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return range_arrayLikeToArray(o, minLen); }
function range_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function range_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function range_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function range_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function range_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, range_toPropertyKey(descriptor.key), descriptor); } }
function range_createClass(Constructor, protoProps, staticProps) { if (protoProps) range_defineProperties(Constructor.prototype, protoProps); if (staticProps) range_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function range_defineProperty(obj, key, value) { key = range_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function range_toPropertyKey(arg) { var key = range_toPrimitive(arg, "string"); return range_typeof(key) === "symbol" ? key : String(key); }
function range_toPrimitive(input, hint) { if (range_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (range_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Range = /*#__PURE__*/function () {
  function Range() {
    range_classCallCheck(this, Range);
    range_defineProperty(this, "_enable", false);
    range_defineProperty(this, "_rangeFrom", null);
    // [row, elem_idx, offset]
    range_defineProperty(this, "_rangeTo", null);
    // [row, elem_idx, offset]
    range_defineProperty(this, "_initialRange", null);
  }
  range_createClass(Range, [{
    key: "setInitialRange",
    value: function setInitialRange(initialRange) {
      this._initialRange = initialRange;
    }
  }, {
    key: "getRangeFrom",
    value: function getRangeFrom() {
      return this._rangeFrom;
    }
  }, {
    key: "getRangeTo",
    value: function getRangeTo() {
      return this._rangeTo;
    }
  }, {
    key: "isEnable",
    value: function isEnable() {
      return this._enable;
    }
  }, {
    key: "enable",
    value: function enable() {
      this._enable = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._enable = false;
    }
  }, {
    key: "handleCaret",
    value: function handleCaret(caret) {
      var _this$_rangeTo = range_slicedToArray(this._rangeTo, 3),
        a = _this$_rangeTo[0],
        b = _this$_rangeTo[1],
        c = _this$_rangeTo[2];
      caret.setRow(a);
      caret.setColumn([b, c]);
    }
  }, {
    key: "setRange",
    value: function setRange(another) {
      var a = this._initialRange;
      if (this._compareRange(a, another)) {
        this._rangeFrom = a;
        this._rangeTo = another;
      } else {
        this._rangeFrom = another;
        this._rangeTo = a;
      }
    }
  }, {
    key: "_compareRange",
    value: function _compareRange(r1, r2) {
      if (r1[0] > r2[0]) {
        return false;
      }
      if (r1[0] === r2[0] && r1[1] > r2[1]) {
        return false;
      }
      if (r1[0] === r2[0] && r1[1] === r2[1] && r1[2] > r2[2]) {
        return false;
      }
      return true;
    }

    // TODO 
  }, {
    key: "getRangeCopy",
    value: function getRangeCopy(editor) {
      if (this._enable) {
        var area = editor._area;
        var caret = editor._caret;
        var rangeFrom = this._rangeFrom;
        var rangeTo = this._rangeTo;
        var elemFrom = area.get(rangeFrom[0]).get(rangeFrom[1]);
        var elemTo = area.get(rangeTo[0]).get(rangeTo[1]);
        if (elemFrom === elemTo) {
          var c = elemFrom.source;
          return c.substring(rangeFrom[2], rangeTo[2]);
        }
        var flattenTxtElem = editor._flattenTxtElem;
        var preContent = '';
        var afterContent = '';
        var fromIdx = flattenTxtElem.findIndex(elemFrom);
        var toIdx = flattenTxtElem.findIndex(elemTo);
        var elems = flattenTxtElem.slice(fromIdx, toIdx + 1);
        var elements = elems.slice(1, elems.length - 1).filter(function (el) {
          return el.type === 'text';
        });
        preContent = elemFrom.source.substring(rangeFrom[2]);
        afterContent = elemTo.source.substring(0, rangeTo[2]);
        var content = preContent;
        if (elemFrom.needWrap) {
          content += '\\n';
        }
        elements.forEach(function (el) {
          content += el.source;
          if (el.needWrap) {
            content += '\\n';
          }
        });
        return content + afterContent;
      }
    }
  }, {
    key: "delete",
    value: function _delete(editor, records) {
      if (this._enable) {
        var area = editor._area;
        var caret = editor._caret;
        var rangeFrom = this._rangeFrom;
        var rangeTo = this._rangeTo;
        var elemFrom = area.get(rangeFrom[0]).get(rangeFrom[1]);
        var elemTo = area.get(rangeTo[0]).get(rangeTo[1]);
        var _rangeFrom = range_slicedToArray(rangeFrom, 3),
          row = _rangeFrom[0],
          elem_idx = _rangeFrom[1],
          offset = _rangeFrom[2];
        records.push({
          op: 'range',
          args: [rangeFrom.slice(), rangeTo.slice()]
        });
        if (elemFrom === elemTo) {
          var c = elemFrom.source;
          elemFrom.setSourceWithRecord(c.substring(0, rangeFrom[2]) + c.substring(rangeTo[2]), editor.spaceHolder, records);
        } else {
          var flattenTxtElem = editor._flattenTxtElem;
          var preContent = '';
          var afterContent = '';
          var preElement;
          var afterElement;
          var fromIdx = flattenTxtElem.findIndex(elemFrom);
          var toIdx = flattenTxtElem.findIndex(elemTo);
          var endTextNeedWrap = false;
          if (elemFrom.type === 'text') {
            preContent = elemFrom.source.substring(0, rangeFrom[2]);
          } else {
            preElement = flattenTxtElem.get(fromIdx - 1);
          }
          if (elemTo.type === 'text') {
            afterContent = elemTo.source.substring(rangeTo[2]);
            endTextNeedWrap = elemTo.needWrap;
          } else {
            afterElement = flattenTxtElem.get(toIdx - 1);
          }
          if (preElement) {
            flattenTxtElem.splice(fromIdx, toIdx - fromIdx + 1);
            if (preElement.type === 'text') {
              if (preElement.needWrap) {
                row -= 1;
              } else {
                elem_idx -= 1;
              }
              offset = preElement.source.length;
              preElement.setSourceWithRecord(preElement.source + afterContent, editor.spaceHolder, records);
              preElement.setNeedWrap(endTextNeedWrap, records);
            } else {
              var t = new TextElement('text', preContent + afterContent);
              t.setNeedWrap(endTextNeedWrap, records);
              flattenTxtElem.splice(fromIdx, 0, t);
            }
          } else {
            flattenTxtElem.splice(fromIdx, toIdx - fromIdx);
            if (afterElement) {
              var _t = new TextElement('text', preContent);
              flattenTxtElem.splice(fromIdx, 0, _t);
            } else {
              elemTo.setSourceWithRecord(preContent + afterContent, editor.spaceHolder, records);
            }
          }
          if (flattenTxtElem.length() === 0) {
            // elem_idx = 0;
            flattenTxtElem.push(new TextElement('text', ''));
          }
        }
        this.disable();
        caret.setRow(row);
        caret.setColumn([elem_idx, offset]);
      }
    }
  }]);
  return Range;
}();
/* harmony default export */ const range = (Range);
;// CONCATENATED MODULE: ./src/core/instance/text-group/undoredo.js
function undoredo_toConsumableArray(arr) { return undoredo_arrayWithoutHoles(arr) || undoredo_iterableToArray(arr) || undoredo_unsupportedIterableToArray(arr) || undoredo_nonIterableSpread(); }
function undoredo_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function undoredo_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return undoredo_arrayLikeToArray(arr); }
function _toArray(arr) { return undoredo_arrayWithHoles(arr) || undoredo_iterableToArray(arr) || undoredo_unsupportedIterableToArray(arr) || undoredo_nonIterableRest(); }
function undoredo_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function undoredo_slicedToArray(arr, i) { return undoredo_arrayWithHoles(arr) || undoredo_iterableToArrayLimit(arr, i) || undoredo_unsupportedIterableToArray(arr, i) || undoredo_nonIterableRest(); }
function undoredo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function undoredo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return undoredo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return undoredo_arrayLikeToArray(o, minLen); }
function undoredo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function undoredo_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function undoredo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function undoredo_typeof(obj) { "@babel/helpers - typeof"; return undoredo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, undoredo_typeof(obj); }
function undoredo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function undoredo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, undoredo_toPropertyKey(descriptor.key), descriptor); } }
function undoredo_createClass(Constructor, protoProps, staticProps) { if (protoProps) undoredo_defineProperties(Constructor.prototype, protoProps); if (staticProps) undoredo_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function undoredo_defineProperty(obj, key, value) { key = undoredo_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function undoredo_toPropertyKey(arg) { var key = undoredo_toPrimitive(arg, "string"); return undoredo_typeof(key) === "symbol" ? key : String(key); }
function undoredo_toPrimitive(input, hint) { if (undoredo_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (undoredo_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function isSetSourceBatch(x) {
  return x.length === 1 && x[0].op === 'setSource';
}
var UndoRedo = /*#__PURE__*/function () {
  function UndoRedo() {
    undoredo_classCallCheck(this, UndoRedo);
    undoredo_defineProperty(this, "_undo", []);
    undoredo_defineProperty(this, "_redo", []);
    undoredo_defineProperty(this, "_editor", null);
  }
  undoredo_createClass(UndoRedo, [{
    key: "write",
    value: function write(x, caretRecord) {
      if (x.length === 0) {
        return;
      }
      if (isSetSourceBatch(x)) {
        var t = x[0];
        var lastUndo = this.getLastUndo();
        if (lastUndo && isSetSourceBatch(lastUndo._batch)) {
          var q = lastUndo._batch[0];
          if (q.args[0] === t.args[0]) {
            q.args[1] = t.args[1];
            lastUndo._caretMetaTo = caretRecord.after;
            return;
          }
        }
      }
      var r = new BatchAction(x);
      r._caretMetaFrom = caretRecord.before;
      r._caretMetaTo = caretRecord.after;
      this._undo.push(r);
      if (this._undo.length > UndoRedo.length) {
        this._undo.splice(0, 1);
      }
      if (this._redo.length) {
        this._redo = [];
      }
    }
  }, {
    key: "getLastUndo",
    value: function getLastUndo() {
      return this._undo[this._undo.length - 1];
    }
  }, {
    key: "undo",
    value: function undo() {
      var x = this._undo.pop();
      if (x) {
        x.undo(this._editor);
        this._redo.push(x);
      }
      return x;
    }
  }, {
    key: "redo",
    value: function redo() {
      var x = this._redo.pop();
      while (x && x.SKIP_REDO) {
        x = this._redo.pop();
      }
      if (x) {
        x.redo(this._editor);
        this._undo.push(x);
      }
      return x;
    }
  }]);
  return UndoRedo;
}();
undoredo_defineProperty(UndoRedo, "length", 50);

var BatchAction = /*#__PURE__*/function () {
  function BatchAction(batch) {
    undoredo_classCallCheck(this, BatchAction);
    undoredo_defineProperty(this, "_batch", []);
    undoredo_defineProperty(this, "_caretMetaFrom", null);
    undoredo_defineProperty(this, "_caretMetaTo", null);
    this._batch = batch;
  }
  undoredo_createClass(BatchAction, [{
    key: "updateCaretMetaTo",
    value: function updateCaretMetaTo(meta) {
      this._caretMetaTo = meta;
    }
  }, {
    key: "undo",
    value: function undo(editor) {
      this._batch.slice().reverse().forEach(function (action) {
        switch (action.op) {
          case 'range':
            var _action$args = undoredo_slicedToArray(action.args, 2),
              rangeFrom = _action$args[0],
              rangeTo = _action$args[1];
            var range = editor._range;
            range.setInitialRange(rangeFrom);
            range.setRange(rangeTo);
            range.enable();
            break;
          case 'setSource':
            var _action$args2 = undoredo_slicedToArray(action.args, 3),
              elem = _action$args2[0],
              s = _action$args2[1],
              ls = _action$args2[2];
            elem.setSource(ls, editor.spaceHolder);
            break;
          case 'setNeedWrap':
            var _action$args3 = undoredo_slicedToArray(action.args, 3),
              o = _action$args3[0],
              p = _action$args3[1],
              q = _action$args3[2];
            o.needWrap = q;
            o.dirty = true;
            break;
          case 'splice':
            var flattenTxtElem = editor._flattenTxtElem;
            var _action$args4 = _toArray(action.args),
              a = _action$args4[0],
              b = _action$args4[1],
              c = _action$args4.slice(2);
            var removed = action.removed;
            var i = 0;
            if (c) {
              i = c.length;
            }
            flattenTxtElem.splice.apply(flattenTxtElem, [a, i].concat(undoredo_toConsumableArray(removed)));
            break;
        }
      });
      editor._caret.fromRange(this._caretMetaFrom);
    }
  }, {
    key: "redo",
    value: function redo(editor) {
      this._batch.forEach(function (action) {
        switch (action.op) {
          case 'setSource':
            var _action$args5 = undoredo_slicedToArray(action.args, 3),
              elem = _action$args5[0],
              s = _action$args5[1],
              ls = _action$args5[2];
            elem.setSource(s, editor.spaceHolder);
            break;
          case 'setNeedWrap':
            var _action$args6 = undoredo_slicedToArray(action.args, 3),
              o = _action$args6[0],
              p = _action$args6[1],
              q = _action$args6[2];
            o.needWrap = p;
            o.dirty = true;
            break;
          case 'splice':
            var flattenTxtElem = editor._flattenTxtElem;
            flattenTxtElem.splice.apply(flattenTxtElem, undoredo_toConsumableArray(action.args));
            break;
        }
      });
      editor._caret.fromRange(this._caretMetaTo);
    }
  }]);
  return BatchAction;
}();
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/base.js
function base_typeof(obj) { "@babel/helpers - typeof"; return base_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, base_typeof(obj); }
function base_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function base_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, base_toPropertyKey(descriptor.key), descriptor); } }
function base_createClass(Constructor, protoProps, staticProps) { if (protoProps) base_defineProperties(Constructor.prototype, protoProps); if (staticProps) base_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function base_toPropertyKey(arg) { var key = base_toPrimitive(arg, "string"); return base_typeof(key) === "symbol" ? key : String(key); }
function base_toPrimitive(input, hint) { if (base_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (base_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Command = /*#__PURE__*/function () {
  function Command(editor) {
    base_classCallCheck(this, Command);
    this._editor = editor;
  }
  base_createClass(Command, [{
    key: "exec",
    value: function exec() {}
  }], [{
    key: "create",
    value: function create(editor) {
      return new this(editor);
    }
  }]);
  return Command;
}();
/* harmony default export */ const base = (Command);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/movement.js
function movement_typeof(obj) { "@babel/helpers - typeof"; return movement_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, movement_typeof(obj); }
function movement_slicedToArray(arr, i) { return movement_arrayWithHoles(arr) || movement_iterableToArrayLimit(arr, i) || movement_unsupportedIterableToArray(arr, i) || movement_nonIterableRest(); }
function movement_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function movement_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return movement_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return movement_arrayLikeToArray(o, minLen); }
function movement_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function movement_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function movement_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function movement_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function movement_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, movement_toPropertyKey(descriptor.key), descriptor); } }
function movement_createClass(Constructor, protoProps, staticProps) { if (protoProps) movement_defineProperties(Constructor.prototype, protoProps); if (staticProps) movement_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function movement_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) movement_setPrototypeOf(subClass, superClass); }
function movement_setPrototypeOf(o, p) { movement_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return movement_setPrototypeOf(o, p); }
function movement_createSuper(Derived) { var hasNativeReflectConstruct = movement_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = movement_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = movement_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return movement_possibleConstructorReturn(this, result); }; }
function movement_possibleConstructorReturn(self, call) { if (call && (movement_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return movement_assertThisInitialized(self); }
function movement_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function movement_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function movement_getPrototypeOf(o) { movement_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return movement_getPrototypeOf(o); }
function movement_defineProperty(obj, key, value) { key = movement_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function movement_toPropertyKey(arg) { var key = movement_toPrimitive(arg, "string"); return movement_typeof(key) === "symbol" ? key : String(key); }
function movement_toPrimitive(input, hint) { if (movement_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (movement_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ArrowLeftCommand = /*#__PURE__*/function (_Command) {
  movement_inherits(ArrowLeftCommand, _Command);
  var _super = movement_createSuper(ArrowLeftCommand);
  function ArrowLeftCommand() {
    movement_classCallCheck(this, ArrowLeftCommand);
    return _super.apply(this, arguments);
  }
  movement_createClass(ArrowLeftCommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      editor._range.disable();
      var flattenTxtElem = editor._flattenTxtElem;
      var caret = editor._caret;
      var row = caret.getRow();
      var column = caret.getColumn();
      var _column = movement_slicedToArray(column, 2),
        elemidx = _column[0],
        offset = _column[1];
      var line = editor._area.get(row);
      var element = line.get(elemidx);
      var idx = flattenTxtElem.findIndex(element);
      var result = element.shift(offset, -1);
      switch (result) {
        case 'prev':
          if (elemidx > 0) {
            var el = line.get(elemidx - 1);
            caret.setColumn([elemidx - 1, el.tailOffset()]);
          } else if (idx > 0) {
            var preRow = row - 1;
            var preElemidx = editor._area.get(preRow).length() - 1;
            var _offset = flattenTxtElem.get(idx - 1).tailOffset();
            caret.setRow(preRow);
            caret.setColumn([preElemidx, _offset]);
          }
          break;
        case 'self':
          caret.setColumn(1, offset - 1);
          break;
      }
      caret.refresh();
      editor.syncShadowInputPosition();
      editor._jflow._render();
    }
  }]);
  return ArrowLeftCommand;
}(base);
movement_defineProperty(ArrowLeftCommand, "name", KEYBOARD_COMMANDS.ARROW_LEFT);
var ArrowRightCommand = /*#__PURE__*/function (_Command2) {
  movement_inherits(ArrowRightCommand, _Command2);
  var _super2 = movement_createSuper(ArrowRightCommand);
  function ArrowRightCommand() {
    movement_classCallCheck(this, ArrowRightCommand);
    return _super2.apply(this, arguments);
  }
  movement_createClass(ArrowRightCommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      editor._range.disable();
      var flattenTxtElem = editor._flattenTxtElem;
      var caret = editor._caret;
      var row = caret.getRow();
      var column = caret.getColumn();
      var _column2 = movement_slicedToArray(column, 2),
        elemidx = _column2[0],
        offset = _column2[1];
      var line = editor._area.get(row);
      var element = line.get(elemidx);
      var idx = flattenTxtElem.findIndex(element);
      var result = element.shift(offset, 1, idx === flattenTxtElem.length() - 1);
      switch (result) {
        case 'next':
          if (elemidx < line.length() - 1) {
            var el = line.get(elemidx + 1);
            if (element.type === 'text' && el.type !== 'text') {
              caret.setColumn([elemidx + 2, el.headOffset()]);
            } else {
              caret.setColumn([elemidx + 1, el.headOffset()]);
            }
          } else if (idx < flattenTxtElem.length() - 1) {
            var afterRow = row + 1;
            var _offset2 = flattenTxtElem.get(idx + 1).headOffset();
            caret.setRow(afterRow);
            caret.setColumn([0, _offset2]);
          }
          break;
        case 'self':
          caret.setColumn(1, offset + 1);
          break;
      }
      caret.refresh();
      editor.syncShadowInputPosition();
      editor._jflow._render();
    }
  }]);
  return ArrowRightCommand;
}(base);
movement_defineProperty(ArrowRightCommand, "name", KEYBOARD_COMMANDS.ARROW_RIGHT);
var ArrowUpCommand = /*#__PURE__*/function (_Command3) {
  movement_inherits(ArrowUpCommand, _Command3);
  var _super3 = movement_createSuper(ArrowUpCommand);
  function ArrowUpCommand() {
    movement_classCallCheck(this, ArrowUpCommand);
    return _super3.apply(this, arguments);
  }
  movement_createClass(ArrowUpCommand, [{
    key: "exec",
    value: function exec() {
      this._editor._range.disable();
      var nextRow = this._editor._caret.getRow() - 1;
      if (nextRow > -1) {
        this._handler(nextRow);
      }
    }
  }]);
  return ArrowUpCommand;
}(base);
movement_defineProperty(ArrowUpCommand, "name", KEYBOARD_COMMANDS.ARROW_UP);
var ArrowDownCommand = /*#__PURE__*/function (_Command4) {
  movement_inherits(ArrowDownCommand, _Command4);
  var _super4 = movement_createSuper(ArrowDownCommand);
  function ArrowDownCommand() {
    movement_classCallCheck(this, ArrowDownCommand);
    return _super4.apply(this, arguments);
  }
  movement_createClass(ArrowDownCommand, [{
    key: "exec",
    value: function exec() {
      this._editor._range.disable();
      var nextRow = this._editor._caret.getRow() + 1;
      if (nextRow < this._editor._area.length()) {
        this._handler(nextRow);
      }
    }
  }]);
  return ArrowDownCommand;
}(base);
movement_defineProperty(ArrowDownCommand, "name", KEYBOARD_COMMANDS.ARROW_DOWN);
var _mixin = {
  _handler: function _handler(nextRow) {
    var editor = this._editor;
    var caret = editor._caret;
    var row = caret.getRow();
    var column = caret.getColumn();
    var _column3 = movement_slicedToArray(column, 2),
      elemidx = _column3[0],
      offset = _column3[1];
    var area = editor._area;
    var line = area.get(row);
    var currElem = line.get(elemidx);
    var currElemReduceWidth = currElem.reduceWidth;
    if (offset > 0) {
      currElemReduceWidth += editor.measureTextWidth(currElem.getRenderSource(editor.spaceHolder).substring(0, offset));
    }
    var nextLine = area.get(nextRow);
    var nextColumn = nextLine.getColumnNearest(currElemReduceWidth, editor.elementSpace, editor.fontSize, editor.fontFamily, editor);
    caret.setRow(nextRow);
    caret.setColumn(nextColumn);
    caret.refresh();
    editor.syncShadowInputPosition();
    editor._jflow._render();
  }
};
Object.assign(ArrowUpCommand.prototype, _mixin);
Object.assign(ArrowDownCommand.prototype, _mixin);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/input.js
function input_typeof(obj) { "@babel/helpers - typeof"; return input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, input_typeof(obj); }
function input_slicedToArray(arr, i) { return input_arrayWithHoles(arr) || input_iterableToArrayLimit(arr, i) || input_unsupportedIterableToArray(arr, i) || input_nonIterableRest(); }
function input_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function input_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return input_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return input_arrayLikeToArray(o, minLen); }
function input_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function input_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function input_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function input_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, input_toPropertyKey(descriptor.key), descriptor); } }
function input_createClass(Constructor, protoProps, staticProps) { if (protoProps) input_defineProperties(Constructor.prototype, protoProps); if (staticProps) input_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function input_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) input_setPrototypeOf(subClass, superClass); }
function input_setPrototypeOf(o, p) { input_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return input_setPrototypeOf(o, p); }
function input_createSuper(Derived) { var hasNativeReflectConstruct = input_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = input_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = input_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return input_possibleConstructorReturn(this, result); }; }
function input_possibleConstructorReturn(self, call) { if (call && (input_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return input_assertThisInitialized(self); }
function input_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function input_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function input_getPrototypeOf(o) { input_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return input_getPrototypeOf(o); }
function input_defineProperty(obj, key, value) { key = input_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function input_toPropertyKey(arg) { var key = input_toPrimitive(arg, "string"); return input_typeof(key) === "symbol" ? key : String(key); }
function input_toPrimitive(input, hint) { if (input_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (input_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function _blandAdjacentElement(editor, elem1, elem2, defaultOffset, records) {
  if (!elem1) {
    return [defaultOffset, false];
  }
  if (elem1.type === 'text' && elem2.type === 'text') {
    var offset = elem1.source.length;
    elem1.setSourceWithRecord(elem1.source + elem2.source, editor.spaceHolder, records);
    elem1.setNeedWrap(elem2.needWrap, records);
    return [offset, true];
  }
  return [defaultOffset, false];
}
var Input = /*#__PURE__*/function (_Command) {
  input_inherits(Input, _Command);
  var _super = input_createSuper(Input);
  function Input() {
    var _this;
    input_classCallCheck(this, Input);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    input_defineProperty(input_assertThisInitialized(_this), "cacheIdx", null);
    return _this;
  }
  input_createClass(Input, [{
    key: "exec",
    value: function exec(kind, data) {
      var editor = this._editor;
      var range = editor._range;
      var caret = editor._caret;
      var flattenTxtElem = editor._flattenTxtElem;
      var undoredo = editor._undoredo;
      var records = flattenTxtElem.startRecord();
      flattenTxtElem.recordBeforeCaret(caret);
      // let _afterRangeDelete = false;
      if (range.isEnable()) {
        range["delete"](editor, records);
        if (kind === KEYBOARD_INPUT.BACKSPACE || kind === KEYBOARD_INPUT.DELETE) {
          flattenTxtElem.collectRecords();
          flattenTxtElem.recordAfterCaret(caret);
          this._editor.refresh();
          undoredo.write(records, flattenTxtElem.getCaretRecord());
          return;
        } else {
          this._editor.refresh();
          // _afterRangeDelete = true;
        }
      }

      var row = caret.getRow();
      var _caret$getColumn = caret.getColumn(),
        _caret$getColumn2 = input_slicedToArray(_caret$getColumn, 2),
        elem_idx = _caret$getColumn2[0],
        offset = _caret$getColumn2[1];
      var area = editor._area;
      var line = area.get(row);
      var element = line.get(elem_idx);
      var preElem = line.get(elem_idx - 1);
      var content = '';
      if (element.type === 'text') {
        content = element.source;
      } else if ((preElem === null || preElem === void 0 ? void 0 : preElem.type) === 'text') {
        content = preElem.source;
        element = preElem;
        offset = content.length;
        elem_idx -= 1;
        caret.setColumn([elem_idx, content.length]);
      } else {
        var newElement = new TextElement('text', '');
        flattenTxtElem.insertBefore(element, newElement);
        element = newElement;
      }
      var preContent = content.substring(0, offset);
      var afterContent;
      if (this.cacheIdx) {
        afterContent = content.substring(this.cacheIdx[1]);
      } else {
        afterContent = content.substring(offset);
      }
      switch (kind) {
        case KEYBOARD_INPUT.INPUT:
          // if(_afterRangeDelete) {
          //     element = flattenTxtElem.get(0);
          //     afterContent = '';
          //     preContent = '';
          // }
          if (/\\r?[\\n\\t]/.test(data)) {
            var rows = data.split(/\\r?[\\n\\t]/) || '';
            // source = source.replace(/\\t/, '');
            var idx = flattenTxtElem.findIndex(element);
            var _lastNeedWrap = element.needWrap;
            element.setSourceWithRecord(preContent + rows.shift(), editor.spaceHolder, records);
            element.setNeedWrap(true, records);
            var temp = [];
            var tn;
            var _row = row;
            var col;
            while (rows.length) {
              tn = new TextElement('text', rows.shift());
              tn.needWrap = true;
              temp.push(tn);
              _row++;
            }
            col = tn.source.length;
            tn.source += afterContent;
            tn.needWrap = _lastNeedWrap;
            temp.forEach(function (t, i) {
              flattenTxtElem.inersetAt(idx + 1 + i, t);
            });
            caret.setRow(_row);
            caret.setColumn([0, col]);
          } else {
            preContent += data;
            caret.setColumn(1, caret.getColumn(1) + data.length);
            element.setSourceWithRecord(preContent + afterContent, editor.spaceHolder, records);
          }
          break;
        case KEYBOARD_INPUT.COMPOSITION_START:
          this.cacheIdx = [preContent.length, preContent.length];
          break;
        case KEYBOARD_INPUT.COMPOSITION_UPDATE:
          preContent = preContent.substring(0, this.cacheIdx[0]);
          preContent += data;
          element.setSourceWithRecord(preContent + afterContent, editor.spaceHolder, records);
          var _t = this.cacheIdx[0] + data.length;
          caret.setColumn(1, _t);
          this.cacheIdx[1] = _t;
          break;
        case KEYBOARD_INPUT.COMPOSITION_END:
          preContent = preContent.substring(0, this.cacheIdx[0]);
          caret.setColumn(1, this.cacheIdx[0] + data.length);
          this.cacheIdx = null;
          preContent += data;
          element.setSourceWithRecord(preContent + afterContent, editor.spaceHolder, records);
          break;
        case KEYBOARD_INPUT.ENTER:
          var lastNeedWrap = element.needWrap;
          element.setSourceWithRecord(preContent, editor.spaceHolder, records);
          element.setNeedWrap(true, records);
          var t = new TextElement('text', afterContent);
          flattenTxtElem.insertAfter(element, t, lastNeedWrap);
          caret.setRow(row + 1);
          caret.setColumn([0, 0]);
          break;
        case KEYBOARD_INPUT.BACKSPACE:
          var result = element.shift(offset, -1);
          switch (result) {
            case 'prev':
              var _idx = flattenTxtElem.findIndex(element);
              if (elem_idx > 0) {
                // 行内
                flattenTxtElem.splice(_idx - 1, 1);
                _idx -= 1;
                // element.setSource(afterContent, records);
                // element.dirty = true;
                var _blandAdjacentElement2 = _blandAdjacentElement(editor, flattenTxtElem.get(_idx - 1), element, 0, records),
                  _blandAdjacentElement3 = input_slicedToArray(_blandAdjacentElement2, 2),
                  _offset = _blandAdjacentElement3[0],
                  deleteop = _blandAdjacentElement3[1];
                if (deleteop) {
                  flattenTxtElem.remove(_idx);
                }
                caret.setColumn([elem_idx - (_offset > 0 ? 2 : 1), _offset]);
              } else if (_idx > 0) {
                // 换行了
                var preRow = row - 1;
                var preElemidx = area.get(preRow).length() - 1;
                var _blandAdjacentElement4 = _blandAdjacentElement(editor, flattenTxtElem.get(_idx - 1), element, 0, records),
                  _blandAdjacentElement5 = input_slicedToArray(_blandAdjacentElement4, 2),
                  _offset2 = _blandAdjacentElement5[0],
                  _deleteop = _blandAdjacentElement5[1];
                if (_deleteop) {
                  flattenTxtElem.remove(_idx);
                }
                caret.setRow(preRow);
                caret.setColumn([preElemidx, _offset2]);
              }
              break;
            case 'self':
              preContent = preContent.substring(0, preContent.length - 1);
              caret.setColumn(1, caret.getColumn(1) - 1);
              element.setSourceWithRecord(preContent + afterContent, editor.spaceHolder, records);
              break;
          }
          break;
        case KEYBOARD_INPUT.DELETE:
          var shiftresult = element.shift(offset, 1);
          switch (shiftresult) {
            case 'next':
              var _idx2 = flattenTxtElem.findIndex(element);
              if (elem_idx < line.length() - 1) {
                // 行内
                flattenTxtElem.splice(_idx2 + 1, 1);
                var nextElem = flattenTxtElem.get(_idx2 + 1);
                var _blandAdjacentElement6 = _blandAdjacentElement(element, nextElem, element.source.length, records),
                  _blandAdjacentElement7 = input_slicedToArray(_blandAdjacentElement6, 2),
                  _offset3 = _blandAdjacentElement7[0],
                  _deleteop2 = _blandAdjacentElement7[1];
                if (_deleteop2) {
                  flattenTxtElem.remove(_idx2 + 1);
                }
                caret.setColumn([elem_idx, _offset3]);
              } else if (_idx2 < flattenTxtElem.length() - 1) {
                // 换行了
                var _nextElem = flattenTxtElem.get(_idx2 + 1);
                var _blandAdjacentElement8 = _blandAdjacentElement(element, _nextElem, element.source.length, records),
                  _blandAdjacentElement9 = input_slicedToArray(_blandAdjacentElement8, 2),
                  _offset4 = _blandAdjacentElement9[0],
                  _deleteop3 = _blandAdjacentElement9[1];
                if (_deleteop3) {
                  flattenTxtElem.remove(_idx2 + 1);
                }
                caret.setColumn([elem_idx, _offset4]);
              }
              break;
            case 'self':
              afterContent = afterContent.substring(1);
              element.setSourceWithRecord(preContent + afterContent, editor.spaceHolder, records);
              break;
          }
          break;
      }
      flattenTxtElem.collectRecords();
      flattenTxtElem.recordAfterCaret(caret);
      undoredo.write(records, flattenTxtElem.getCaretRecord());
      this._editor.refresh();
    }
  }]);
  return Input;
}(base);
input_defineProperty(Input, "name", EDITOR_EVENTS.INPUT);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/mouse.js
function mouse_typeof(obj) { "@babel/helpers - typeof"; return mouse_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, mouse_typeof(obj); }
function mouse_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function mouse_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, mouse_toPropertyKey(descriptor.key), descriptor); } }
function mouse_createClass(Constructor, protoProps, staticProps) { if (protoProps) mouse_defineProperties(Constructor.prototype, protoProps); if (staticProps) mouse_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function mouse_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) mouse_setPrototypeOf(subClass, superClass); }
function mouse_setPrototypeOf(o, p) { mouse_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return mouse_setPrototypeOf(o, p); }
function mouse_createSuper(Derived) { var hasNativeReflectConstruct = mouse_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = mouse_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = mouse_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return mouse_possibleConstructorReturn(this, result); }; }
function mouse_possibleConstructorReturn(self, call) { if (call && (mouse_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return mouse_assertThisInitialized(self); }
function mouse_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function mouse_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function mouse_getPrototypeOf(o) { mouse_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return mouse_getPrototypeOf(o); }
function mouse_defineProperty(obj, key, value) { key = mouse_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function mouse_toPropertyKey(arg) { var key = mouse_toPrimitive(arg, "string"); return mouse_typeof(key) === "symbol" ? key : String(key); }
function mouse_toPrimitive(input, hint) { if (mouse_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (mouse_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var StartEditCommand = /*#__PURE__*/function (_Command) {
  mouse_inherits(StartEditCommand, _Command);
  var _super = mouse_createSuper(StartEditCommand);
  function StartEditCommand() {
    mouse_classCallCheck(this, StartEditCommand);
    return _super.apply(this, arguments);
  }
  mouse_createClass(StartEditCommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      if (!this._startEdit()) {
        return;
      }
      var jflow = editor._jflow;
      editor.moveCaretByHitPoint();
      editor.createShadowInput();
      editor._caret.animate(jflow);
      editor.syncShadowInputPosition();
    }
  }, {
    key: "_startEdit",
    value: function _startEdit() {
      var flag = true;
      var editor = this._editor;
      editor.dispatchEvent(new events('edit', {
        target: editor,
        preventDefault: function preventDefault() {
          flag = false;
        }
      }));
      return flag;
    }
  }]);
  return StartEditCommand;
}(base);
mouse_defineProperty(StartEditCommand, "name", MOUSE_COMMANDS.START_EDIT);
var EditClickCommand = /*#__PURE__*/function (_Command2) {
  mouse_inherits(EditClickCommand, _Command2);
  var _super2 = mouse_createSuper(EditClickCommand);
  function EditClickCommand() {
    mouse_classCallCheck(this, EditClickCommand);
    return _super2.apply(this, arguments);
  }
  mouse_createClass(EditClickCommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      editor.moveCaretByHitPoint();
      editor._caret.refresh();
      editor.syncShadowInputPosition();
      editor._range.disable();
    }
  }]);
  return EditClickCommand;
}(base);
mouse_defineProperty(EditClickCommand, "name", MOUSE_COMMANDS.EDIT_CLICK);
var DoubleClickCommand = /*#__PURE__*/function (_Command3) {
  mouse_inherits(DoubleClickCommand, _Command3);
  var _super3 = mouse_createSuper(DoubleClickCommand);
  function DoubleClickCommand() {
    mouse_classCallCheck(this, DoubleClickCommand);
    return _super3.apply(this, arguments);
  }
  mouse_createClass(DoubleClickCommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      editor.moveCaretByHitPoint();
      var caret = editor._caret;
      var range = editor._range;
      var area = editor._area;
      var row = caret.getRow();
      var line = area.get(row);
      var elem_idx = line.length() - 1;
      range.setInitialRange([row, 0, 0]);
      range.setRange([row, elem_idx, line.tail().tailOffset()]);
      range.handleCaret(caret);
      range.enable();
      editor.syncShadowInputPosition();
    }
  }]);
  return DoubleClickCommand;
}(base);
mouse_defineProperty(DoubleClickCommand, "name", MOUSE_COMMANDS.DOUBLE_CLICK);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/shift.js
function shift_typeof(obj) { "@babel/helpers - typeof"; return shift_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, shift_typeof(obj); }
function shift_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function shift_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, shift_toPropertyKey(descriptor.key), descriptor); } }
function shift_createClass(Constructor, protoProps, staticProps) { if (protoProps) shift_defineProperties(Constructor.prototype, protoProps); if (staticProps) shift_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function shift_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) shift_setPrototypeOf(subClass, superClass); }
function shift_setPrototypeOf(o, p) { shift_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shift_setPrototypeOf(o, p); }
function shift_createSuper(Derived) { var hasNativeReflectConstruct = shift_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = shift_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = shift_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return shift_possibleConstructorReturn(this, result); }; }
function shift_possibleConstructorReturn(self, call) { if (call && (shift_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return shift_assertThisInitialized(self); }
function shift_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function shift_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function shift_getPrototypeOf(o) { shift_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shift_getPrototypeOf(o); }
function shift_defineProperty(obj, key, value) { key = shift_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function shift_toPropertyKey(arg) { var key = shift_toPrimitive(arg, "string"); return shift_typeof(key) === "symbol" ? key : String(key); }
function shift_toPrimitive(input, hint) { if (shift_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (shift_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ShiftUpCommand = /*#__PURE__*/function (_Command) {
  shift_inherits(ShiftUpCommand, _Command);
  var _super = shift_createSuper(ShiftUpCommand);
  function ShiftUpCommand() {
    shift_classCallCheck(this, ShiftUpCommand);
    return _super.apply(this, arguments);
  }
  shift_createClass(ShiftUpCommand, [{
    key: "exec",
    value: function exec() {
      var range = this._editor._range;
      range.setInitialRange(null);
      this._editor.toggleShift(false);
    }
  }]);
  return ShiftUpCommand;
}(base);
shift_defineProperty(ShiftUpCommand, "name", KEYBOARD_COMMANDS.SHIFT_UP);
var ShiftDownCommand = /*#__PURE__*/function (_Command2) {
  shift_inherits(ShiftDownCommand, _Command2);
  var _super2 = shift_createSuper(ShiftDownCommand);
  function ShiftDownCommand() {
    shift_classCallCheck(this, ShiftDownCommand);
    return _super2.apply(this, arguments);
  }
  shift_createClass(ShiftDownCommand, [{
    key: "exec",
    value: function exec() {
      var range = this._editor._range;
      var caret = this._editor._caret;
      range.setInitialRange(caret.toRange());
      this._editor.toggleShift(true);
    }
  }]);
  return ShiftDownCommand;
}(base);
shift_defineProperty(ShiftDownCommand, "name", KEYBOARD_COMMANDS.SHIFT_DOWN);
var ShiftOnClickCommand = /*#__PURE__*/function (_Command3) {
  shift_inherits(ShiftOnClickCommand, _Command3);
  var _super3 = shift_createSuper(ShiftOnClickCommand);
  function ShiftOnClickCommand() {
    shift_classCallCheck(this, ShiftOnClickCommand);
    return _super3.apply(this, arguments);
  }
  shift_createClass(ShiftOnClickCommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      editor.moveCaretByHitPoint();
      var caret = this._editor._caret;
      var range = this._editor._range;
      range.setRange(caret.toRange());
      range.enable();
      range.handleCaret(caret);
      caret.refresh();
      editor.syncShadowInputPosition();
    }
  }]);
  return ShiftOnClickCommand;
}(base);
shift_defineProperty(ShiftOnClickCommand, "name", MOUSE_COMMANDS.SHIFT_ON_CLICK);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/ctrl.js
function ctrl_typeof(obj) { "@babel/helpers - typeof"; return ctrl_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ctrl_typeof(obj); }
function ctrl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ctrl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ctrl_toPropertyKey(descriptor.key), descriptor); } }
function ctrl_createClass(Constructor, protoProps, staticProps) { if (protoProps) ctrl_defineProperties(Constructor.prototype, protoProps); if (staticProps) ctrl_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ctrl_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ctrl_setPrototypeOf(subClass, superClass); }
function ctrl_setPrototypeOf(o, p) { ctrl_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ctrl_setPrototypeOf(o, p); }
function ctrl_createSuper(Derived) { var hasNativeReflectConstruct = ctrl_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ctrl_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ctrl_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ctrl_possibleConstructorReturn(this, result); }; }
function ctrl_possibleConstructorReturn(self, call) { if (call && (ctrl_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ctrl_assertThisInitialized(self); }
function ctrl_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ctrl_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ctrl_getPrototypeOf(o) { ctrl_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ctrl_getPrototypeOf(o); }
function ctrl_defineProperty(obj, key, value) { key = ctrl_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ctrl_toPropertyKey(arg) { var key = ctrl_toPrimitive(arg, "string"); return ctrl_typeof(key) === "symbol" ? key : String(key); }
function ctrl_toPrimitive(input, hint) { if (ctrl_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ctrl_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var CtrlACommand = /*#__PURE__*/function (_Command) {
  ctrl_inherits(CtrlACommand, _Command);
  var _super = ctrl_createSuper(CtrlACommand);
  function CtrlACommand() {
    ctrl_classCallCheck(this, CtrlACommand);
    return _super.apply(this, arguments);
  }
  ctrl_createClass(CtrlACommand, [{
    key: "exec",
    value: function exec() {
      var editor = this._editor;
      var caret = editor._caret;
      var range = editor._range;
      var area = editor._area;
      var row = area.length() - 1;
      var line = area.get(row);
      var elem_idx = line.length() - 1;
      range.setInitialRange([0, 0, 0]);
      range.setRange([row, elem_idx, line.tail().tailOffset()]);
      range.handleCaret(caret);
      range.enable();
      editor.syncShadowInputPosition();
    }
  }]);
  return CtrlACommand;
}(base);
ctrl_defineProperty(CtrlACommand, "name", KEYBOARD_COMMANDS.CTRLA);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/undoredo.js
function command_undoredo_typeof(obj) { "@babel/helpers - typeof"; return command_undoredo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, command_undoredo_typeof(obj); }
function command_undoredo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function command_undoredo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, command_undoredo_toPropertyKey(descriptor.key), descriptor); } }
function command_undoredo_createClass(Constructor, protoProps, staticProps) { if (protoProps) command_undoredo_defineProperties(Constructor.prototype, protoProps); if (staticProps) command_undoredo_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function undoredo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) undoredo_setPrototypeOf(subClass, superClass); }
function undoredo_setPrototypeOf(o, p) { undoredo_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return undoredo_setPrototypeOf(o, p); }
function undoredo_createSuper(Derived) { var hasNativeReflectConstruct = undoredo_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = undoredo_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = undoredo_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return undoredo_possibleConstructorReturn(this, result); }; }
function undoredo_possibleConstructorReturn(self, call) { if (call && (command_undoredo_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return undoredo_assertThisInitialized(self); }
function undoredo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function undoredo_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function undoredo_getPrototypeOf(o) { undoredo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return undoredo_getPrototypeOf(o); }
function command_undoredo_defineProperty(obj, key, value) { key = command_undoredo_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function command_undoredo_toPropertyKey(arg) { var key = command_undoredo_toPrimitive(arg, "string"); return command_undoredo_typeof(key) === "symbol" ? key : String(key); }
function command_undoredo_toPrimitive(input, hint) { if (command_undoredo_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (command_undoredo_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var UndoCommand = /*#__PURE__*/function (_Command) {
  undoredo_inherits(UndoCommand, _Command);
  var _super = undoredo_createSuper(UndoCommand);
  function UndoCommand() {
    command_undoredo_classCallCheck(this, UndoCommand);
    return _super.apply(this, arguments);
  }
  command_undoredo_createClass(UndoCommand, [{
    key: "exec",
    value: function exec() {
      this._editor._range.disable();
      this._editor._undoredo.undo();
      this._editor.refresh();
    }
  }]);
  return UndoCommand;
}(base);
command_undoredo_defineProperty(UndoCommand, "name", KEYBOARD_COMMANDS.UNDO);
var RedoCommand = /*#__PURE__*/function (_Command2) {
  undoredo_inherits(RedoCommand, _Command2);
  var _super2 = undoredo_createSuper(RedoCommand);
  function RedoCommand() {
    command_undoredo_classCallCheck(this, RedoCommand);
    return _super2.apply(this, arguments);
  }
  command_undoredo_createClass(RedoCommand, [{
    key: "exec",
    value: function exec() {
      this._editor._range.disable();
      this._editor._undoredo.redo();
      this._editor.refresh();
    }
  }]);
  return RedoCommand;
}(base);
command_undoredo_defineProperty(RedoCommand, "name", KEYBOARD_COMMANDS.REDO);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; return clipboard_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, clipboard_typeof(obj); }
function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, clipboard_toPropertyKey(descriptor.key), descriptor); } }
function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function clipboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) clipboard_setPrototypeOf(subClass, superClass); }
function clipboard_setPrototypeOf(o, p) { clipboard_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return clipboard_setPrototypeOf(o, p); }
function clipboard_createSuper(Derived) { var hasNativeReflectConstruct = clipboard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = clipboard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = clipboard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return clipboard_possibleConstructorReturn(this, result); }; }
function clipboard_possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return clipboard_assertThisInitialized(self); }
function clipboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function clipboard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function clipboard_getPrototypeOf(o) { clipboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return clipboard_getPrototypeOf(o); }
function clipboard_defineProperty(obj, key, value) { key = clipboard_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function clipboard_toPropertyKey(arg) { var key = clipboard_toPrimitive(arg, "string"); return clipboard_typeof(key) === "symbol" ? key : String(key); }
function clipboard_toPrimitive(input, hint) { if (clipboard_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (clipboard_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var CopyCommand = /*#__PURE__*/function (_Command) {
  clipboard_inherits(CopyCommand, _Command);
  var _super = clipboard_createSuper(CopyCommand);
  function CopyCommand() {
    clipboard_classCallCheck(this, CopyCommand);
    return _super.apply(this, arguments);
  }
  clipboard_createClass(CopyCommand, [{
    key: "exec",
    value: function exec(event) {
      var editor = this._editor;
      var range = editor._range;
      var content = range.getRangeCopy(editor);
      if (content) {
        event.clipboardData.setData("text/plain", content);
      }
    }
  }]);
  return CopyCommand;
}(base);
clipboard_defineProperty(CopyCommand, "name", KEYBOARD_COMMANDS.COPY);
var CutCommand = /*#__PURE__*/function (_Command2) {
  clipboard_inherits(CutCommand, _Command2);
  var _super2 = clipboard_createSuper(CutCommand);
  function CutCommand() {
    clipboard_classCallCheck(this, CutCommand);
    return _super2.apply(this, arguments);
  }
  clipboard_createClass(CutCommand, [{
    key: "exec",
    value: function exec(event) {
      var editor = this._editor;
      var range = editor._range;
      var content = range.getRangeCopy(editor);
      if (content) {
        event.clipboardData.setData("text/plain", content);
      }
      if (range.isEnable()) {
        var cmd = editor.commands.get(EDITOR_EVENTS.INPUT);
        cmd.exec(KEYBOARD_INPUT.BACKSPACE);
      }
    }
  }]);
  return CutCommand;
}(base);
clipboard_defineProperty(CutCommand, "name", KEYBOARD_COMMANDS.CUT);
var PasteCommand = /*#__PURE__*/function (_Command3) {
  clipboard_inherits(PasteCommand, _Command3);
  var _super3 = clipboard_createSuper(PasteCommand);
  function PasteCommand() {
    clipboard_classCallCheck(this, PasteCommand);
    return _super3.apply(this, arguments);
  }
  clipboard_createClass(PasteCommand, [{
    key: "exec",
    value: function exec(pasteContent) {
      var editor = this._editor;
      if (pasteContent) {
        var cmd = editor.commands.get(EDITOR_EVENTS.INPUT);
        cmd.exec(KEYBOARD_INPUT.INPUT, pasteContent);
      }
      // editor.dispatchEvent(new JFlowEvent('paste', {
      //     textElements: flattenTxtElem.copy(),
      //     idx, offset,
      //     pasteContent,
      // }));
    }
  }]);
  return PasteCommand;
}(base);
clipboard_defineProperty(PasteCommand, "name", KEYBOARD_COMMANDS.PASTE);
;// CONCATENATED MODULE: ./src/core/instance/text-group/command/index.js







;// CONCATENATED MODULE: ./src/core/instance/text-group/text-group.js
function text_group_typeof(obj) { "@babel/helpers - typeof"; return text_group_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, text_group_typeof(obj); }
function text_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function text_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? text_group_ownKeys(Object(source), !0).forEach(function (key) { text_group_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : text_group_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function text_group_defineProperty(obj, key, value) { key = text_group_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function text_group_slicedToArray(arr, i) { return text_group_arrayWithHoles(arr) || text_group_iterableToArrayLimit(arr, i) || text_group_unsupportedIterableToArray(arr, i) || text_group_nonIterableRest(); }
function text_group_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function text_group_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function text_group_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function text_group_toConsumableArray(arr) { return text_group_arrayWithoutHoles(arr) || text_group_iterableToArray(arr) || text_group_unsupportedIterableToArray(arr) || text_group_nonIterableSpread(); }
function text_group_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function text_group_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return text_group_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return text_group_arrayLikeToArray(o, minLen); }
function text_group_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function text_group_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return text_group_arrayLikeToArray(arr); }
function text_group_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function text_group_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function text_group_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, text_group_toPropertyKey(descriptor.key), descriptor); } }
function text_group_createClass(Constructor, protoProps, staticProps) { if (protoProps) text_group_defineProperties(Constructor.prototype, protoProps); if (staticProps) text_group_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function text_group_toPropertyKey(arg) { var key = text_group_toPrimitive(arg, "string"); return text_group_typeof(key) === "symbol" ? key : String(key); }
function text_group_toPrimitive(input, hint) { if (text_group_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (text_group_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function text_group_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) text_group_setPrototypeOf(subClass, superClass); }
function text_group_setPrototypeOf(o, p) { text_group_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return text_group_setPrototypeOf(o, p); }
function text_group_createSuper(Derived) { var hasNativeReflectConstruct = text_group_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = text_group_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = text_group_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return text_group_possibleConstructorReturn(this, result); }; }
function text_group_possibleConstructorReturn(self, call) { if (call && (text_group_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return text_group_assertThisInitialized(self); }
function text_group_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function text_group_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function text_group_getPrototypeOf(o) { text_group_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return text_group_getPrototypeOf(o); }













var TextGroup = /*#__PURE__*/function (_Node) {
  text_group_inherits(TextGroup, _Node);
  var _super = text_group_createSuper(TextGroup);
  function TextGroup(configs) {
    var _this;
    text_group_classCallCheck(this, TextGroup);
    _this = _super.call(this, configs);
    _this.type = 'TextGroup';
    _this.initStack(configs);
    _this.initLayout(configs);
    _this._undoredo = new UndoRedo();
    _this._undoredo._editor = text_group_assertThisInitialized(_this);
    _this._caret = new caret();
    _this._range = new range();
    _this._shadowInput = undefined;
    _this.textColor = configs.textColor || 'transparent';
    _this.fontFamily = configs.fontFamily || '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,Noto Sans,PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
    _this.fontSize = configs.fontSize || '28px';
    _this.fontWeight = configs.fontWeight || '';
    _this.elementSpace = configs.elementSpace || 5;
    _this.lineSpace = configs.lineSpace || 5;
    _this.placeholder = configs.placeholder || '请输入';
    _this.placeholderColor = configs.placeholderColor || '#eee';
    _this.cursorColor = configs.cursorColor || '#60CFC4';
    _this.textRangeColor = configs.textRangeColor || '#4E75EC1A';
    _this.minWidth = configs.minWidth || 0;
    _this.spaceHolder = {
      enable: false
    };
    if (configs.spacePlaceholder) {
      Object.assign(_this.spaceHolder, {
        enable: true,
        spacePlaceholder: configs.spacePlaceholder,
        spacePlaceholderColor: configs.spacePlaceholderColor,
        returnFont: configs.returnFont
      });
    }
    _this.resolver = function () {
      var elements = configs.resolver();
      if (elements.length === 0 || elements[elements.length - 1].type !== 'text') {
        elements.push(new TextElement('text', ''));
      }
      elements.forEach(function (el) {
        if (el.type === 'text') {
          el.setSource(el.source, _this.spaceHolder);
        }
      });
      return elements;
    };

    // this._lines = [];
    _this._area = new Area();
    _this._flattenTxtElem = FlattenTextElements.create(_this.resolver());
    _this._status = {
      editing: false,
      dragover: false
    };
    _this.commands = new Map();
    _this.registCommand(StartEditCommand);
    _this.registCommand(EditClickCommand);
    _this.registCommand(ShiftUpCommand);
    _this.registCommand(ShiftDownCommand);
    _this.registCommand(ShiftOnClickCommand);
    _this.registCommand(Input);
    _this.registCommand(ArrowLeftCommand);
    _this.registCommand(ArrowRightCommand);
    _this.registCommand(ArrowUpCommand);
    _this.registCommand(ArrowDownCommand);
    _this.registCommand(CtrlACommand);
    _this.registCommand(DoubleClickCommand);
    // this.registCommand(ReturnCommand);
    // this.registCommand(DeleteCommand);
    _this.registCommand(UndoCommand);
    _this.registCommand(RedoCommand);
    _this.registCommand(CopyCommand);
    _this.registCommand(CutCommand);
    _this.registCommand(PasteCommand);
    _this._makeFunctional();
    _this._cacheViewBox = [];
    return _this;
  }
  text_group_createClass(TextGroup, [{
    key: "currentLineHeight",
    get: function get() {
      return this.lineHeight || parseInt(this.fontSize);
    }
  }, {
    key: "registCommand",
    value: function registCommand(cmd) {
      if (!this.commands.has(cmd.name)) {
        this.commands.set(cmd.name, cmd.create(this));
      }
    }
  }, {
    key: "_makeFunctional",
    value: function _makeFunctional() {
      var _this2 = this;
      this.addEventListener('dblclick', function (event) {
        if (event.currentTarget !== _this2) {
          return;
        }
        event.detail.bubbles = false;
        if (_this2._status.editing) {
          _this2.execCommand(MOUSE_COMMANDS.DOUBLE_CLICK);
        }
      });
      this.addEventListener('click', function (event) {
        if (event.currentTarget !== _this2) {
          return;
        }
        event.detail.bubbles = false;
        var commnd;
        if (_this2._status.editing) {
          if (_this2._status.shiftOn) {
            commnd = MOUSE_COMMANDS.SHIFT_ON_CLICK;
          } else {
            commnd = MOUSE_COMMANDS.EDIT_CLICK;
          }
        } else {
          commnd = MOUSE_COMMANDS.START_EDIT;
        }
        _this2.execCommand(commnd);
      });
      this.addEventListener('blur', function (event) {
        _this2._status.editing = false;
        if (_this2._shadowInput) {
          // this._shadowInput.releaseEventListenr();
          _this2._shadowInput.destroy();
          _this2._shadowInput = undefined;
        }
        if (_this2._belongs) {
          _this2._jflow._render();
        }
        _this2.dispatchEvent(new events('change', {
          target: _this2,
          textElements: _this2._flattenTxtElem.copy()
        }));
        _this2._range.disable();
        _this2._caret.cancelAnimate();
      });
      this.addEventListener('instancePressStart', function (event) {
        if (_this2._status.editing && !_this2._status.shiftOn) {
          event.detail.bubbles = false;
          event.detail.preventDefault();
          // event.detail.jflow.setMovingTargets(null);
          var point = _this2._currentp;
          var c = _this2._positionToCursorOffset(point);
          // this._cursor = c;
          var range = _this2._range;
          range.setInitialRange([c.row].concat(text_group_toConsumableArray(c.column)));
          var jflow = event.detail.jflow;
          var moved = false;
          var t = function (e) {
            _this2._status.editing = false;
            moved = true;
            var offsetX = e.offsetX,
              offsetY = e.offsetY;
            var p = jflow._calculatePointBack([offsetX, offsetY]);
            jflow._stack.checkHit(p);
            var point = _this2._currentp;
            var c = _this2._positionToCursorOffset(point);
            // this._cursor = c;
            range.setRange([c.row].concat(text_group_toConsumableArray(c.column)));
            range.enable();
          }.bind(_this2);
          document.addEventListener('pointermove', t);
          document.addEventListener('pointerup', function (e) {
            document.removeEventListener('pointermove', t);
            range.setInitialRange(null);
            if (!moved) {
              return;
            }
            range.handleCaret(_this2._caret);
            _this2._status.editing = true;
            _this2._shadowInput.focus();
          }, {
            once: true
          });
        }
      });
      this.addEventListener('dragenter', function () {
        _this2.moveCaretByHitPoint();
        _this2._status.dragover = true;
      });
      this.addEventListener('dragover', function () {
        _this2.moveCaretByHitPoint();
      });
      this.addEventListener('dragleave', function () {
        _this2._status.dragover = false;
      });
      var onDrop = function (event) {
        if (!_this2._status.dragover) {
          return;
        }
        event.detail.bubbles = false;
        _this2._status.dragover = false;
        var caret = _this2._caret;
        var row = caret.getRow();
        var column = caret.getColumn();
        var line = _this2._area.get(row);
        var _column = text_group_slicedToArray(column, 2),
          elemidx = _column[0],
          offset = _column[1];
        var element = line.get(elemidx);
        var preElem = line.get(elemidx - 1);
        var flattenTxtElem = _this2._flattenTxtElem;
        var idx = flattenTxtElem.findIndex(element);
        if (element.type !== 'text' && (preElem === null || preElem === void 0 ? void 0 : preElem.type) === 'text') {
          offset = preElem.source.length;
          idx = flattenTxtElem.findIndex(preElem);
        }
        var lastLength = flattenTxtElem.length();
        _this2.dispatchEvent(new events('insert', text_group_objectSpread(text_group_objectSpread({}, event.detail), {}, {
          type: event.type,
          textElements: flattenTxtElem.copy(),
          idx: idx,
          offset: offset
        })));
        // after insert
        flattenTxtElem = _this2._flattenTxtElem;
        if (_this2._status.editing) {
          if (flattenTxtElem.length() > lastLength) {
            caret.setColumn([elemidx + flattenTxtElem.length() - lastLength, 0]);
          }
          _this2._shadowInput.focus();
        }
        if (_this2._status.editing) {
          _this2._caret.refresh();
        }
        _this2.syncShadowInputPosition();
        _this2._range.disable();
      }.bind(this);
      this.addEventListener('pressEnd', onDrop);
      this.addEventListener('drop', onDrop);
    }
  }, {
    key: "toggleShift",
    value: function toggleShift(val) {
      this._status.shiftOn = val;
    }
  }, {
    key: "execCommand",
    value: function execCommand(kind, data) {
      var cmd = this.commands.get(kind);
      cmd.exec(data);
    }
  }, {
    key: "createShadowInput",
    value: function createShadowInput() {
      var _this3 = this;
      var jflow = this._jflow;
      var shadowInput = new shadow_input(jflow.DOMwrapper);
      var _a = function _a(e) {
        var kind = e.detail.kind;
        var data = e.detail.data;
        _this3.execCommand(kind, data);
      };
      var _b = function _b(e) {
        var kind = e.detail.kind;
        var data = e.detail.data;
        var cmd = _this3.commands.get(EDITOR_EVENTS.INPUT);
        cmd.exec(kind, data);
      };
      shadowInput.addEventListener(EDITOR_EVENTS.CONTROL_CMD, _a);
      shadowInput.addEventListener(EDITOR_EVENTS.INPUT, _b);
      shadowInput.removeLisenter = function () {
        shadowInput.removeEventListener(EDITOR_EVENTS.CONTROL_CMD, _a);
        shadowInput.removeEventListener(EDITOR_EVENTS.INPUT, _b);
        shadowInput.removeLisenter = null;
      };
      this._shadowInput = shadowInput;
      this._status.editing = true;
      jflow.setFocusInstance(this);
    }
  }, {
    key: "moveCaretByHitPoint",
    value: function moveCaretByHitPoint() {
      var point = this._currentp;
      var caret = this._caret;
      var _this$_positionToCurs = this._positionToCursorOffset(point),
        row = _this$_positionToCurs.row,
        column = _this$_positionToCurs.column;
      caret.setRow(row);
      caret.setColumn(column);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.recalculateUp();
      this.syncShadowInputPosition();
      this._jflow._render();
    }
  }, {
    key: "refreshTextElements",
    value: function refreshTextElements() {
      this._flattenTxtElem = FlattenTextElements.create(this.resolver());
    }
  }, {
    key: "_positionToCursorOffset",
    value: function _positionToCursorOffset(point) {
      var _point = text_group_slicedToArray(point, 2),
        x = _point[0],
        y = _point[1];
      // const [x0, y0] = this.anchor;
      var area = this._area;
      var w = this.width / 2;
      var h = this.height / 2;
      var offsetX = x + w;
      var offsetY = y + h;
      var row = area.getLineAbove(offsetY);
      var currLine = area.get(row);
      var column = currLine.getColumnNearest(offsetX, this.elementSpace, this.fontSize, this.fontFamily, this);
      return {
        row: row,
        column: column
      };
    }
  }, {
    key: "_caretToPosition",
    value: function _caretToPosition() {
      var _this4 = this;
      var row = this._caret.getRow();
      var column = this._caret.getColumn();
      var line = this._area.get(row);
      var _column2 = text_group_slicedToArray(column, 2),
        elemidx = _column2[0],
        offset = _column2[1];
      var meta = line.get(elemidx);
      var idx = this._flattenTxtElem.findIndex(meta);
      var preElem = this._flattenTxtElem.get(idx - 1);
      var cw;
      var c_len = this.currentLineHeight / 2;
      if (meta.type === 'text') {
        var c = meta.getRenderSource(this.spaceHolder).substring(0, offset);
        requestCacheCanvas(function (ctx) {
          ctx.beginPath();
          ctx.font = "".concat(_this4.fontSize, " ").concat(_this4.fontFamily);
          cw = meta.anchorX - meta.width / 2 + ctx.measureText(c).width;
        });
      } else {
        cw = meta.anchorX - meta.width / 2;
        c_len = Math.max(c_len, meta.height / 2);
      }
      if (offset === 0 && preElem && preElem.type !== 'text') {
        c_len = Math.max(c_len, preElem.height / 2);
      }
      return [cw, c_len, line.anchorY, preElem, meta];
    }
  }, {
    key: "syncShadowInputPosition",
    value: function syncShadowInputPosition() {
      if (this._status.editing) {
        var _this$_caretToPositio = this._caretToPosition(),
          _this$_caretToPositio2 = text_group_slicedToArray(_this$_caretToPositio, 3),
          cw = _this$_caretToPositio2[0],
          c_len = _this$_caretToPositio2[1],
          anchorY = _this$_caretToPositio2[2];
        var point = this.calculateToRealWorld([cw, anchorY + c_len]);
        var canvasMeta = this._jflow.canvasMeta;
        var px = Math.min(canvasMeta.actual_width - 120, point[0]);
        // return [px, point[1]];
        this._shadowInput.syncPosition(px, point[1]);
        this._shadowInput.focus();
      }
    }
  }, {
    key: "render",
    value: function render(ctx) {
      var _this5 = this;
      ctx.save();
      if (this._isMoving) {
        ctx.globalAlpha = 0.6;
      } else if (this.opacity !== 1) {
        ctx.globalAlpha = this.opacity;
      }
      var _this$anchor = text_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor[0],
        cy = _this$anchor[1];
      var jflow = this._jflow;
      var area = this._area;
      ctx.translate(cx, cy);
      // ctx.beginPath();
      // ctx.rect(-width/2, -height/2, width, height);
      // ctx.stroke();
      var flattenTxtElem = this._flattenTxtElem;
      if (flattenTxtElem.isEmpty()) {
        ctx.beginPath();
        ctx.font = "".concat(this.fontWeight, " ").concat(this.fontSize, " ").concat(this.fontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.placeholderColor;
        ctx.fillText(this.placeholder, 0, 0);
        this._randerCursor(ctx);
        ctx.translate(-cx, -cy);
        ctx.restore();
        return;
      }
      ctx.beginPath();
      ctx.font = "".concat(this.fontWeight, " ").concat(this.fontSize, " ").concat(this.fontFamily);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = this.textColor;
      area.forEach(function (line) {
        line.forEach(function (el) {
          if (el.type === 'text') {
            el.render(ctx, _this5.spaceHolder, _this5.textColor);
            // ctx.fillText(el.source, el.anchorX, el.anchorY)
          }
        });
      });

      flattenTxtElem.forEach(function (elem) {
        if (elem.type !== 'text') {
          var instance = jflow.getRenderNodeBySource(elem.source);
          if (instance.visible) {
            ctx.save();
            instance.render(ctx);
            ctx.restore();
          }
        }
      });
      this._randerCursor(ctx);
      this._renderRange(ctx);
      ctx.translate(-cx, -cy);
      ctx.restore();
    }
  }, {
    key: "_randerCursor",
    value: function _randerCursor(ctx) {
      if (this._caret.isShow() && (this._status.editing || this._status.dragover)) {
        var _this$_caretToPositio3 = this._caretToPosition(),
          _this$_caretToPositio4 = text_group_slicedToArray(_this$_caretToPositio3, 3),
          cw = _this$_caretToPositio4[0],
          c_len = _this$_caretToPositio4[1],
          anchorY = _this$_caretToPositio4[2];
        ctx.beginPath();
        ctx.moveTo(cw, anchorY - c_len);
        ctx.lineTo(cw, anchorY + c_len);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.cursorColor;
        ctx.stroke();
      }
    }
  }, {
    key: "_renderRange",
    value: function _renderRange(ctx) {
      var range = this._range;
      if (range.isEnable()) {
        var area = this._area;
        var textRangeColor = this.textRangeColor;
        var blockheight = this.height;
        var blockwidth = this.width;
        var lineSpace = this.lineSpace;
        var _range$getRangeFrom = range.getRangeFrom(),
          _range$getRangeFrom2 = text_group_slicedToArray(_range$getRangeFrom, 3),
          r_f = _range$getRangeFrom2[0],
          idx_f = _range$getRangeFrom2[1],
          offset_f = _range$getRangeFrom2[2];
        var _range$getRangeTo = range.getRangeTo(),
          _range$getRangeTo2 = text_group_slicedToArray(_range$getRangeTo, 3),
          r_t = _range$getRangeTo2[0],
          idx_t = _range$getRangeTo2[1],
          offset_t = _range$getRangeTo2[2];
        if (r_f === r_t) {
          if (idx_f === idx_t && offset_f == offset_t) {
            return;
          }
          var line = area.get(r_f);
          var space = r_f === area.length() - 1 ? 0 : lineSpace;
          var lty = line.reduceHeight - space - line.height - blockheight / 2;
          var height = line.height;
          var x1 = this._measureElementOffsetX(line.get(idx_f), offset_f, ctx);
          var x2 = this._measureElementOffsetX(line.get(idx_t), offset_t, ctx);
          ctx.beginPath();
          ctx.rect(x1, lty, x2 - x1, height);
          ctx.fillStyle = textRangeColor;
          ctx.fill();
        } else {
          var _r = r_f;
          var beginning = true;
          while (_r <= r_t) {
            var _line = area.get(_r);
            var _space = _r === area.length() - 1 ? 0 : lineSpace;
            var _lty = _line.reduceHeight - _space - _line.height - blockheight / 2;
            var _height = _line.height;
            if (beginning) {
              var elem = _line.get(idx_f);
              var x = this._measureElementOffsetX(elem, offset_f, ctx);
              var lastElem = _line.tail();
              var t = lastElem.anchorX + lastElem.width / 2;
              ctx.beginPath();
              ctx.rect(x, _lty, t - x, _height);
              ctx.fillStyle = textRangeColor;
              ctx.fill();
            } else if (_r === r_t) {
              var _elem = _line.get(idx_t);
              var _x2 = this._measureElementOffsetX(_elem, offset_t, ctx);
              ctx.beginPath();
              ctx.rect(-blockwidth / 2, _lty, _elem.reduceWidth + (_x2 - _elem.anchorX + _elem.width / 2), _height);
              ctx.fillStyle = textRangeColor;
              ctx.fill();
            } else {
              ctx.beginPath();
              ctx.rect(-blockwidth / 2, _lty, _line.width, _height);
              ctx.fillStyle = textRangeColor;
              ctx.fill();
            }
            beginning = false;
            _r++;
          }
        }
      }
    }
  }, {
    key: "_measureElementOffsetX",
    value: function _measureElementOffsetX(element, offset, ctx) {
      if (element.type !== 'text' || offset === 0) {
        return element.anchorX - element.width / 2;
      }
      return element.anchorX - element.width / 2 + ctx.measureText(element.getRenderSource(this.spaceHolder).substring(0, offset)).width;
    }
  }, {
    key: "measureTextWidth",
    value: function measureTextWidth(content) {
      var _this6 = this;
      var t;
      requestCacheCanvas(function (ctx) {
        ctx.font = "".concat(_this6.fontSize, " ").concat(_this6.fontFamily);
        t = ctx.measureText(content).width;
      });
      return t;
    }
  }, {
    key: "getBoundingDimension",
    value: function getBoundingDimension() {
      return {
        width: this.width,
        height: this.height
      };
    }
  }, {
    key: "getBoundingRect",
    value: function getBoundingRect() {
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      var ltx = anchor[0] - w;
      var lty = anchor[1] - h;
      var rbx = anchor[0] + w;
      var rby = anchor[1] + h;
      var br = this._boundingrect;
      br[0] = ltx;
      br[1] = lty;
      br[2] = rbx;
      br[3] = rby;
      return br;
    }
  }, {
    key: "_getViewBox",
    value: function _getViewBox() {
      var belongs_vbox = this._belongs.getCacheViewBox();
      var cacheViewBox = this._cacheViewBox;
      this._calculatePointBackWithPoint(belongs_vbox[0], belongs_vbox[1], cacheViewBox, 0, 1);
      this._calculatePointBackWithPoint(belongs_vbox[2], belongs_vbox[3], cacheViewBox, 2, 3);
      return this._cacheViewBox;
    }
  }, {
    key: "getCacheViewBox",
    value: function getCacheViewBox() {
      return this._cacheViewBox;
    }
  }, {
    key: "calculateToCoordination",
    value: function calculateToCoordination(point) {
      var _point2 = text_group_slicedToArray(point, 2),
        gx = _point2[0],
        gy = _point2[1];
      var _this$anchor2 = text_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor2[0],
        cy = _this$anchor2[1];
      // const p = [cx + anchor[0] - spanH, cy + anchor[1] - spanV];
      var p = [gx + cx, gy + cy];
      if (this._belongs && this._belongs.calculateToCoordination) {
        return this._belongs.calculateToCoordination(p);
      } else {
        return p;
      }
    }
  }, {
    key: "calculateToRealWorld",
    value: function calculateToRealWorld(point) {
      var _point3 = text_group_slicedToArray(point, 2),
        gx = _point3[0],
        gy = _point3[1];
      var _this$anchor3 = text_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor3[0],
        cy = _this$anchor3[1];
      var p = [gx + cx, gy + cy];
      if (this._belongs && this._belongs.calculateToRealWorld) {
        return this._belongs.calculateToRealWorld(p);
      }
    }
  }, {
    key: "calculateToRealWorldWithPointer",
    value: function calculateToRealWorldWithPointer(outpoint, inpoint) {
      outpoint[0] = inpoint[0] + this.anchor[0];
      outpoint[1] = inpoint[1] + this.anchor[1];
      if (this._belongs && this._belongs.calculateToRealWorldWithPointer) {
        return this._belongs.calculateToRealWorldWithPointer(outpoint, outpoint);
      }
    }
  }, {
    key: "_calculatePointBack",
    value: function _calculatePointBack(point) {
      var _point4 = text_group_slicedToArray(point, 2),
        gx = _point4[0],
        gy = _point4[1];
      var _this$anchor4 = text_group_slicedToArray(this.anchor, 2),
        cx = _this$anchor4[0],
        cy = _this$anchor4[1];
      var p = [gx - cx, gy - cy];
      return p;
    }
  }, {
    key: "_calculatePointBackWithPoint",
    value: function _calculatePointBackWithPoint(a, b, arr, idx1, idx2) {
      arr[idx1] = a - this.anchor[0];
      arr[idx2] = b - this.anchor[1];
    }
  }, {
    key: "isHit",
    value: function isHit(point, condition) {
      var p = this._calculatePointBack(point);
      var jflow = this._jflow;
      this._currentp = p; // 暂存，为了后续计算别的位置
      var validInstance = [];
      var flattenTxtElem = this._flattenTxtElem;
      flattenTxtElem.forEach(function (elem) {
        if (elem.type !== 'text') {
          var instance = jflow.getRenderNodeBySource(elem.source);
          if (instance.visible) {
            validInstance.push(instance);
          }
        }
      });
      var target = this._stack.checkHit(p, condition, function (i) {
        return validInstance.includes(i);
      });
      if (target) return target;
      var anchor = this.anchor;
      var w = this.width / 2;
      var h = this.height / 2;
      return point[0] > anchor[0] - w && point[0] < anchor[0] + w && point[1] > anchor[1] - h && point[1] < anchor[1] + h;
    }
  }, {
    key: "clone",
    value: function clone() {
      var _this7 = this;
      var t = new shadow_cache({
        width: this.width,
        height: this.height,
        cache: function cache(ctx) {
          var _this7$anchor = text_group_slicedToArray(_this7.anchor, 2),
            cx = _this7$anchor[0],
            cy = _this7$anchor[1];
          ctx.translate(-cx + _this7.width / 2, -cy + _this7.height / 2);
          _this7.render(ctx);
        }
      });
      return t;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._jflow._focus.instance === this) {
        this._jflow.blur();
      }
    }
  }]);
  return TextGroup;
}(node);
Object.assign(TextGroup.prototype, stackMixin);
Object.assign(TextGroup.prototype, layoutMixin);
Object.assign(TextGroup.prototype, {
  // 屏蔽这两个方法，只根据reflow重算
  _getBoundingGroupRect: function _getBoundingGroupRect() {},
  resetChildrenPosition: function resetChildrenPosition() {},
  reflow: function reflow() {
    var _this8 = this;
    var lineHeight = this.currentLineHeight;
    var flattenTxtElem = this._flattenTxtElem;
    var area = this._area;
    if (flattenTxtElem.isEmpty()) {
      var width = 0;
      var t = flattenTxtElem.get(0);
      requestCacheCanvas(function (ctx) {
        ctx.font = "".concat(_this8.fontSize, " ").concat(_this8.fontFamily);
        width = ctx.measureText(_this8.placeholder).width;
      });
      var _line2 = area.truncate({
        height: lineHeight,
        reduceHeight: lineHeight
      });
      _line2.insert(0, t);
      Object.assign(t, {
        anchorX: -width / 2,
        height: lineHeight,
        isTail: true
      });
      this.width = width;
      this.height = lineHeight;
      return;
    }
    var jflow = this._jflow;
    var spaceHolder = this.spaceHolder;
    requestCacheCanvas(function (ctx) {
      ctx.font = "".concat(_this8.fontSize, " ").concat(_this8.fontFamily);
      flattenTxtElem.forEach(function (element) {
        if (element.type === 'text' && element.dirty) {
          element.preCalculateText(ctx, spaceHolder);
        }
      });
    });
    var nextArea = new Area();
    nextArea.truncate({
      height: lineHeight
    });
    var line = nextArea.get(0);
    var allHeight = 0;
    var allWidth = 0;
    var lastElem = null;
    var lineSpace = this.lineSpace;
    var elementSpace = this.elementSpace;
    flattenTxtElem.forEach(function (element) {
      line.push(element);
      element.reduceWidth = line.width;
      if (element.type === 'text') {
        element.height = lineHeight;
        line.width += element.width;
        if (element.needWrap) {
          allHeight += line.height + lineSpace;
          line.reduceHeight = allHeight;
          allWidth = Math.max(line.width, allWidth);
          line = Line.create({
            height: lineHeight
          });
          nextArea.push(line);
        }
      } else {
        var node = jflow.getRenderNodeBySource(element.source);
        element.height = node.height;
        line.height = Math.max(line.height, node.height);
        var margin = !lastElem || lastElem.type === 'text' ? elementSpace * 2 : elementSpace;
        line.width += node.width + margin;
      }
      lastElem = element;
    });
    flattenTxtElem.tail().isTail = true;
    allHeight += line.height;
    line.reduceHeight = allHeight;
    allWidth = Math.max(this.minWidth, Math.max(line.width, allWidth));
    var hh = allHeight / 2;
    var hw = allWidth / 2;
    var ty = -hh;
    var lastReduceY = 0;
    nextArea.forEach(function (l) {
      var height = l.height,
        reduceHeight = l.reduceHeight;
      var anchorY = ty + lastReduceY + height / 2;
      l.anchorY = anchorY;
      var reduceX = -hw;
      var lastel = null;
      l.forEach(function (el) {
        if (el.type === 'text') {
          el.anchorY = anchorY;
          el.anchorX = reduceX + el.width / 2;
          reduceX += el.width;
        } else {
          var renderNode = jflow.getRenderNodeBySource(el.source);
          var doubleMargin = !lastel || lastel.type === 'text';
          var margin = doubleMargin ? elementSpace * 2 : elementSpace;
          el.width = renderNode.width;
          el.anchorY = anchorY;
          el.anchorX = reduceX + el.width / 2 + (doubleMargin ? margin / 2 : 0);
          renderNode.anchor = [el.anchorX, el.anchorY];
          reduceX += el.width + margin;
        }
        lastel = el;
      });
      lastReduceY = reduceHeight;
    });
    this._area = nextArea;
    this.width = allWidth;
    this.height = allHeight;
  }
});
/* harmony default export */ const text_group = (TextGroup);
;// CONCATENATED MODULE: ./src/core/flow/index.js
function flow_typeof(obj) { "@babel/helpers - typeof"; return flow_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, flow_typeof(obj); }
function flow_slicedToArray(arr, i) { return flow_arrayWithHoles(arr) || flow_iterableToArrayLimit(arr, i) || flow_unsupportedIterableToArray(arr, i) || flow_nonIterableRest(); }
function flow_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function flow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return flow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return flow_arrayLikeToArray(o, minLen); }
function flow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function flow_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function flow_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function flow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function flow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, flow_toPropertyKey(descriptor.key), descriptor); } }
function flow_createClass(Constructor, protoProps, staticProps) { if (protoProps) flow_defineProperties(Constructor.prototype, protoProps); if (staticProps) flow_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function flow_toPropertyKey(arg) { var key = flow_toPrimitive(arg, "string"); return flow_typeof(key) === "symbol" ? key : String(key); }
function flow_toPrimitive(input, hint) { if (flow_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (flow_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function flow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) flow_setPrototypeOf(subClass, superClass); }
function flow_createSuper(Derived) { var hasNativeReflectConstruct = flow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = flow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = flow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return flow_possibleConstructorReturn(this, result); }; }
function flow_possibleConstructorReturn(self, call) { if (call && (flow_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return flow_assertThisInitialized(self); }
function flow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function flow_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; flow_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !flow_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return flow_construct(Class, arguments, flow_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return flow_setPrototypeOf(Wrapper, Class); }; return flow_wrapNativeSuper(Class); }
function flow_construct(Parent, args, Class) { if (flow_isNativeReflectConstruct()) { flow_construct = Reflect.construct.bind(); } else { flow_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) flow_setPrototypeOf(instance, Class.prototype); return instance; }; } return flow_construct.apply(null, arguments); }
function flow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function flow_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function flow_setPrototypeOf(o, p) { flow_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return flow_setPrototypeOf(o, p); }
function flow_getPrototypeOf(o) { flow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return flow_getPrototypeOf(o); }












// import { setUniqueId, getUniqueId } from '../utils/functions';










// import { createInputTextStyle } from '../instance/text';
// createInputTextStyle();
/**
 * @funtion setInitialPosition
 * @param {Number} RealboxX - 内容映射到canvas上的 X
 * @param {Number} RealboxY - 内容映射到canvas上的 Y 
 * @param {Number} RealboxW - 内容映射到canvas上的宽度
 * @param {Number} RealboxH - 内容映射到canvas上的高度 
 * @param {Number} CanvasWidth  - 视窗宽度
 * @param {Number} CanvasHeight  - 视窗高度
 * @return {Object} - 初始位置 { x, y }
 */

/**
 * @funtion linkGen
 * @param {Node} from - 出发绘图节点
 * @param {Node} to - 临时节点，当前鼠标指的地方
 * @return {BaseeLink} - 连线对象
 */

/** 
 * @class Group
 * @classdesc 矩形组单元 由 {@link GroupFactory} 通过 {@link Rectangle} 生成
 * @groupfrom Rectangle
 * @augments GroupTemplate
 * @augments Rectangle
 * @param {(Rectangle~RectangleConfigs|GroupTemplate~GroupConfigs)} configs - 配置
 */
var Group = groupFactory(rectangle);
/** 
 * @class CapsuleGroup
 * @classdesc 胶囊组单元 由 {@link GroupFactory} 通过 {@link Capsule} 生成
 * @groupfrom Capsule
 * @augments GroupTemplate
 * @augments Capsule
 * @param {(Capsule~CapsuleConfigs|GroupTemplate~GroupConfigs)} configs - 配置
 */
var CapsuleGroup = groupFactory(capsule);
/** 
 * @class RhombusGroup
 * @classdesc 菱形组单元 由 {@link GroupFactory} 通过 {@link Rhombus} 生成
 * @augments GroupTemplate
 * @augments Rhombus
 * @groupfrom Rhombus
 * @param {(Rhombus~RhombusConfigs|GroupTemplate~GroupConfigs)} configs - 配置
 */
var RhombusGroup = groupFactory(rhombus);
/** 
 * @class DiamondGroup
 * @classdesc 钻石形组单元 由 {@link GroupFactory} 通过 {@link Diamond} 生成
 * @groupfrom Diamond
 * @augments GroupTemplate
 * @augments Diamond
 * @param {(Diamond~DiamondConfigs|GroupTemplate~GroupConfigs)} configs - 配置
 */
var DiamondGroup = groupFactory(diamond, {
  shapeShift: function shapeShift(width, height) {
    return [width + height * 0.28865, height];
  }
});
/** 
 * @class DiamondVerticalGroup
 * @classdesc 垂直钻石形组单元 由 {@link GroupFactory} 通过 {@link DiamondVertical} 生成
 * @groupfrom DiamondVertical
 * @augments GroupTemplate
 * @augments DiamondVertical
 * @param {(Diamond~DiamondConfigs|GroupTemplate~GroupConfigs)} configs - 配置
 */
var DiamondVerticalGroup = groupFactory(diamond_vertical, {
  shapeShift: function shapeShift(width, height) {
    return [width, height + width * 0.5773];
  }
});
/** 
 * @class CapsuleVerticalGroup
 * @classdesc 垂直钻石形组单元 由 {@link GroupFactory} 通过 {@link CapsuleVertical} 生成
 * @groupfrom CapsuleVertical
 * @augments GroupTemplate
 * @augments CapsuleVertical
 * @param {(Capsule~CapsuleConfigs|GroupTemplate~GroupConfigs)} configs - 配置
 */
var CapsuleVerticalGroup = groupFactory(capsule_vertical);
var PointGroup = groupFactory(point, {
  shapeShift: function shapeShift(width, height, p) {
    var r = Math.ceil(Math.sqrt(width * width + height * height) / 2);
    p.radius = r;
    var w = r * 2;
    return [w, w];
  }
});

/**
 * @typedef JFlow~JFlowConfigs
 * @type {object}
 * @property {Boolean} allowDrop      - 是否允许 dragdrop
 * @property {Number} maxZoom         - 最大缩放
 * @property {Number} minZoom         - 最小缩放
 * @property {number} initialZoom     - 初始缩放比
 * @property {EventAdapter~pluginDef} eventAdapter
 */

/**
 * @typedef {JFlow~JFlowConfigs | LayoutMixin~LayoutConfigs} JFlow~JFlowLayoutConfigs
 */
/** 
 * JFlow 对象
 * JFlow 是 canvas 上面封装的一个顶层对象，具有处理事件和绘制的功能
 * @constructor JFlow
 * @param {JFlow~JFlowLayoutConfigs} configs - 配置项
 * @mixes LayoutMixin
 * @mixes StackMixin
 * @mixes MessageMixin
 */
var JFlow = /*#__PURE__*/function (_EventTarget) {
  flow_inherits(JFlow, _EventTarget);
  var _super = flow_createSuper(JFlow);
  function JFlow(configs) {
    var _this;
    flow_classCallCheck(this, JFlow);
    _this = _super.call(this);
    _this.uniqueName = 'jflow';
    /**
     * @member {EventAdapter} eventAdapter    - eventAdapter 对象
     **/
    _this.eventAdapter = new adapter(configs.eventAdapter);
    _this.initNodeWeakMap();
    _this.initAnime();
    _this.initStack(configs);
    _this.initLayout(configs);
    /** @member {Context2d}     - Context2d 对象 */
    _this.ctx = null;
    /** @member {Element}       - canvas 元素 */
    _this.canvas = null;
    /** @member {number}       - 设备DPR */
    _this.dpr = 1;
    /** @member {number}       - 内边距 */
    _this.padding = 20;
    _this.position = null;
    /** @member {number}     - 缩放 */
    _this.scale = null;
    /** @member {number}     - 初始缩放 */
    _this.initialZoom = configs.initialZoom;
    /** @member {setInitialPosition} - 初始位置计算 */
    _this.initialPosition = configs.setInitialPosition;
    /** @member {number}     - 最大缩放 */
    _this.maxZoom = configs.maxZoom || 3;
    /** @member {number}     - 最小缩放 */
    _this.minZoom = configs.minZoom || .5;
    _this.NodeRenderTop = !!configs.NodeRenderTop;
    _this.worldMargin = configs.worldMargin;
    _this.draggingbehavior = Object.assign({
      panInBorder: {
        enable: true,
        padding: 20,
        deltamovement: 8,
        allowMovingTargetInPan: true
      }
    }, configs.draggingbehavior || {});
    _this.scrollBarBehavior = Object.assign({
      enable: true
    }, configs.scrollBarBehavior || {});
    // this.initScale = 1;
    // this.initPosition = null
    _this.offeset = null;
    _this._lastState = {
      x: null,
      y: null,
      dragging: false,
      processing: false
    };
    _this._lastDragState = {
      target: null,
      targetLink: null,
      processing: false
    };
    _this._target = {
      instance: null,
      link: null,
      moving: null,
      isInstanceDirty: false,
      isLinkDirty: false,
      // isMovingDirty: false, 
      cache: {
        stack: null,
        belongs: null,
        point: null
      },
      meta: {
        x: undefined,
        y: undefined,
        initialX: undefined,
        initialY: undefined
      },
      status: {
        dragovering: false,
        dragging: false,
        processing: false,
        movingState: false
      }
    };
    _this._focus = {
      instance: null
    };
    _this._dragOverTarget = null;
    // this.lock = configs.lock;

    _this.allowDrop = configs.allowDrop;
    // 临时绘制的对象
    _this._tempNode = null;
    _this._tempLink = null;
    _this.mode = JFLOW_MODE.DEFAULT;
    _this._allowMovingTarget = true;
    _this.canvasMeta = {};
    _this._cacheViewBox = [];

    // this._allowZoom = true;
    return _this;
  }

  // allowZoom() {
  //     this._allowZoom = true;
  // }

  // abandonZoom() {
  //     this._allowZoom = false;
  // }
  /**
   * 设置当前拖动的 JFlow 对象
   * @param {Object[]} targets - 具有 anchor 属性的对象
   */
  flow_createClass(JFlow, [{
    key: "setMovingTargets",
    value: function setMovingTargets(targets) {
      Object.assign(this._target, {
        moving: targets
      });
    }

    /**
     * 设置当前拖动的 JFlow 对象
     * @param {Instance} instance - JFlow 对象
     */
  }, {
    key: "setTempDraggingInstance",
    value: function setTempDraggingInstance(instance) {
      instance._belongs = this;
      this._tempNode = instance;
      Object.assign(this._target, {
        moving: [this._tempNode],
        dragging: true
      });
    }

    /**
     * 取消当前拖动的 JFlow 对象
     * @return {number[]} point - JFlow 坐标
     */
  }, {
    key: "removeTempDraggingInstance",
    value: function removeTempDraggingInstance() {
      if (this._tempNode) {
        // this.removeFromStack(this._tempNode);
        var anchor = this._tempNode.anchor;
        this._tempNode = null;
        return anchor;
      }
    }
    /**
     * 关闭默认对象拖动效果
     */
  }, {
    key: "preventDefaultDragging",
    value: function preventDefaultDragging() {
      this._allowMovingTarget = false;
    }
    /**
     * 开启默认对象拖动效果
     */
  }, {
    key: "allowDefaultDragging",
    value: function allowDefaultDragging() {
      this._allowMovingTarget = true;
    }
    /**
     * 在 Document 元素上初始化实例
     * @param {Element} dom 
     */
  }, {
    key: "$mount",
    value: function $mount(dom) {
      var _this2 = this;
      var _createCanvas = createCanvas(dom),
        canvas = _createCanvas.canvas,
        ctx = _createCanvas.ctx,
        dpr = _createCanvas.scale,
        c_width = _createCanvas.width,
        c_height = _createCanvas.height,
        raw_width = _createCanvas.raw_width,
        raw_height = _createCanvas.raw_height,
        left = _createCanvas.left,
        top = _createCanvas.top;
      this.reflow();
      this.ctx = ctx; //new CanvasContext2d(ctx, dpr);
      this.DOMwrapper = dom;
      this.canvas = canvas;
      this.canvas.setAttribute('data-jflow', true);
      this.canvas.$jflow = this;
      this.canvasMeta = {
        width: raw_width,
        height: raw_height,
        actual_width: c_width,
        actual_height: c_height
      };
      this.dpr = dpr;
      this._getBoundingGroupRect();
      var padding = this.padding;
      var _this$bounding_box = this.bounding_box,
        p_width = _this$bounding_box.width,
        p_height = _this$bounding_box.height,
        p_x = _this$bounding_box.x,
        p_y = _this$bounding_box.y;
      var contentBox = {
        x: padding,
        y: padding,
        width: c_width - padding * 2,
        height: c_height - padding * 2
      };
      var position = {
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0
      };
      var w_ratio = contentBox.width / p_width;
      var h_ratio = contentBox.height / p_height;
      var align = w_ratio <= h_ratio ? 'x' : 'y';
      var scaleRatio;
      if (this.initialZoom) {
        scaleRatio = this.initialZoom;
      } else {
        scaleRatio = Math.min(w_ratio, h_ratio);
      }
      this.scale = scaleRatio;
      if (scaleRatio > this.maxZoom) {
        this.maxZoom = scaleRatio;
      }
      if (scaleRatio < this.minZoom) {
        this.minZoom = scaleRatio;
      }
      var realboxX = p_x * scaleRatio;
      var realboxY = p_y * scaleRatio;
      var realboxW = contentBox.width;
      var realboxH = contentBox.height;
      if (this.initialPosition) {
        var _this$initialPosition = this.initialPosition(realboxX, realboxY, realboxW, realboxH, contentBox.x, contentBox.y, c_width, c_height, p_x, p_y, p_width, p_height),
          x = _this$initialPosition.x,
          y = _this$initialPosition.y;
        position.x = x;
        position.y = y;
      } else {
        position.x = align === 'x' ? contentBox.x : (realboxW - p_width * scaleRatio) / 2 + padding;
        position.y = align === 'y' ? contentBox.y : (realboxH - p_height * scaleRatio) / 2 + padding;
      }
      position.offsetX = position.x - realboxX;
      position.offsetY = position.y - realboxY;
      this.position = position;
      this._readyToRender = true;
      if (this.scrollBarBehavior.enable) {
        this.initScrollBar(this.scrollBarBehavior);
      }
      // this.initSchedule();
      // this.scheduleRender(() => {
      //     this._createEventHandler();
      // });
      this.__render();
      this._createEventHandler();
      listenOnDevicePixelRatio(function (dpr) {
        _this2.dpr = dpr;
        // this.ctx.setDPR(dpr)
        _this2.resizeCanvas();
        _this2.scheduleRender();
      }, function (handler) {
        _this2.destroyDprListener = handler;
      });
    }

    /**
     * 设置Jflow进入连线模式
     * @param {Object} source - 当前连线的出发原始数据
     * @param {linkGen} linkGen - 生成连线单元的方法
     */
  }, {
    key: "setLinkingMode",
    value: function setLinkingMode(source, linkGen, isTail) {
      var renderNode = this.getRenderNodeBySource(source);
      this._tempNode = new ghostNode();
      if (isTail) {
        this._tempLink = linkGen({
          from: this._tempNode,
          to: renderNode
        });
      } else {
        this._tempLink = linkGen({
          from: renderNode,
          to: this._tempNode
        });
      }
      this.sendMessage({
        instance: source
      });
      this.mode = JFLOW_MODE.LINKING;
    }
  }, {
    key: "isInLinkingMode",
    value: function isInLinkingMode() {
      return this.mode === JFLOW_MODE.LINKING;
    }

    /**
     * 连线模式下，设置当前临时连线的属性
     * @param {BaseLink~Configs} configs - 当前连线的出发原始数据
     */
  }, {
    key: "setLinkingLink",
    value: function setLinkingLink(configs) {
      if (this.mode === JFLOW_MODE.LINKING) {
        this._tempLink.setConfig(configs);
      }
    }
    /**
     * 连线模式下，重连回临时鼠标节点
     */
  }, {
    key: "resetLinkingLink",
    value: function resetLinkingLink() {
      if (this.mode === JFLOW_MODE.LINKING) {
        this._tempLink.setConfig({
          to: this._tempNode
        });
      }
    }
  }, {
    key: "clearTemp",
    value: function clearTemp() {
      if (this._tempNode) {
        this._tempNode.destroy();
        this._tempNode = null;
      }
      if (this._tempLink) {
        this._tempLink.destroy();
        this._tempLink = null;
      }
      this._render();
    }
  }, {
    key: "preventClearTemp",
    value: function preventClearTemp() {
      this._preventClearTemp = true;
    }

    /**
     * 外层容器大小变化后，调用此方法可以改变当前canvas的状态
     */
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas() {
      if (this.canvas && this.DOMwrapper) {
        var _resizeCanvas2 = canvas_resizeCanvas(this.canvas, this.DOMwrapper),
          c_width = _resizeCanvas2.width,
          c_height = _resizeCanvas2.height,
          raw_width = _resizeCanvas2.raw_width,
          raw_height = _resizeCanvas2.raw_height;
        this.canvasMeta = {
          width: raw_width,
          height: raw_height,
          actual_width: c_width,
          actual_height: c_height
        };
      }
    }
  }, {
    key: "setFocusInstance",
    value: function setFocusInstance(node) {
      this._focus.instance = node;
    }

    /**
     * 移动画布到以目标绘图节点为中心的位置上
     * @param {Node} node - 绘图节点
     */
  }, {
    key: "focusOn",
    value: function focusOn(node) {
      var center = this._calculatePointBack([this.canvasMeta.actual_width / 2, this.canvasMeta.actual_height / 2]);
      var offset = node.anchor;
      if (node._belongs.calculateToCoordination) {
        offset = node._belongs.calculateToCoordination(offset);
      }
      var deltaX = (center[0] - offset[0]) * this.scale;
      var deltaY = (center[1] - offset[1]) * this.scale;
      this._recalculatePosition(deltaX, deltaY);
      this._render();
    }
  }, {
    key: "_getBoundingGroupRect",
    value: function _getBoundingGroupRect() {
      var points = this._stack.getBoundingRectPoints();
      if (this.bounding_box) {
        this.bounding_box = bounding_box(points);
        var _this$bounding_box2 = this.bounding_box,
          nowx = _this$bounding_box2.x,
          nowy = _this$bounding_box2.y;
        var scale = this.scale;
        this.position.x = this.position.offsetX + nowx * scale;
        this.position.y = this.position.offsetY + nowy * scale;
      } else {
        this.bounding_box = bounding_box(points);
      }
    }
  }, {
    key: "_createEventHandler",
    value: function _createEventHandler() {
      var _this3 = this;
      var canvas = this.canvas;
      var destroyListener;
      this.eventAdapter.apply(this);
      var destroyPlainEventListener = function destroyPlainEventListener() {
        _this3.eventAdapter.unload(_this3);
        _this3.destroyDprListener();
      };
      destroyListener = destroyPlainEventListener;
      if (this.allowDrop) {
        var dragoverHandler = this._onDragover.bind(this);
        var dropHandler = this._onDrop.bind(this);
        var dragleaveHanlder = this._onDragLeave.bind(this);
        canvas.addEventListener('dragstart', function (e) {
          e.preventDefault();
        });
        canvas.addEventListener('dragover', dragoverHandler);
        canvas.addEventListener('drop', dropHandler);
        canvas.addEventListener('dragleave', dragleaveHanlder);
        destroyListener = function destroyListener() {
          destroyPlainEventListener();
          canvas.removeEventListener('dragover', dragoverHandler);
          canvas.removeEventListener('drop', dropHandler);
          canvas.removeEventListener('dragleave', dragleaveHanlder);
        };
      }
      this.destroy = destroyListener;
    }
  }, {
    key: "_targetLockOn",
    value: function _targetLockOn(offsetPoint, event) {
      var _this4 = this;
      var point = this._calculatePointBack(offsetPoint);
      var topLayerPoint = point;
      this._currentp = point;
      var stack = this._stack;
      var br = this._getViewBox();
      var target = stack.checkHit(point,
      // 应用于所有
      function (instance) {
        return _this4._target.status.dragging && instance === _this4._getMovingTarget();
      },
      // 仅对于本层过滤
      function (instance) {
        return doOverlap(br, instance.getBoundingRect());
      });
      var linkStack = this._linkStack;
      var belongs = this;
      /*
      if(target) {
          linkStack = target._belongs._linkStack;
          point = target._belongs._currentp;
          stack = target._belongs._stack;
          belongs = target._belongs
      }*/
      // 暂时设定只有顶层有连线
      var targetLink;
      if (!target || target._belongs === this) {
        targetLink = linkStack.checkHit(point, function (link) {
          if (!_this4._target.status.dragging) {
            return false;
          }
          var movingtarget = _this4._getMovingTarget();
          return link.from === movingtarget || link.to === movingtarget;
        });
      }
      if (!targetLink) {
        targetLink = linkStack.checkHit(point, function (link) {
          return !link.ON_TOP;
        });
      }
      Object.assign(this._target, {
        instance: target,
        link: targetLink,
        isInstanceDirty: target === this._target.instance,
        isLinkDirty: targetLink === this._target.link
      });
      Object.assign(this._target.cache, {
        stack: stack,
        belongs: belongs,
        point: point,
        topLayerPoint: topLayerPoint
      });
      Object.assign(this._target.meta, {
        x: offsetPoint[0],
        y: offsetPoint[1]
      });
      if (event === 'pressStart' && !this._target.status.dragging && !this._target.status.dragovering) {
        var movingtarget = target;
        while (movingtarget && movingtarget._belongs.lock && movingtarget !== this) {
          movingtarget = movingtarget._belongs;
        }
        this.setMovingTargets(movingtarget && [movingtarget]);
        if (movingtarget) {
          /**
           * 
           * 开始拖拽时，拖拽对象设置之前
           * @event Node#afterResolveMovingTarget
           * @type {object}
           * @property {Event} event           - 原始事件 
           * @property {JFlow} jflow           - 当前JFlow对象 
           * @property {Node} target           - 目标节点
           */
          target.bubbleEvent(new events('afterResolveMovingTarget', {
            event: event,
            target: movingtarget,
            jflow: this,
            bubbles: true
          }));
        }
      }
      if (['pressStart', 'click', 'dblclick', 'contextclick'].includes(event)) {
        if (this._focus.instance && this._focus.instance !== target) {
          this._focus.instance.dispatchEvent(new events('blur', {
            relatedTarget: target
          }));
          this._focus.instance = null;
        }
      }
      return this._target;
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this._focus.instance) {
        this._focus.instance.dispatchEvent(new events('blur', {
          relatedTarget: null
        }));
        this._focus.instance = null;
      }
    }
  }, {
    key: "_getMovingTarget",
    value: function _getMovingTarget() {
      return this._target.moving && this._target.moving[0];
    }
  }, {
    key: "_processDragOver",
    value: function _processDragOver(instance, event) {
      if (this._dragOverTarget !== instance) {
        var _this$readMessage;
        var target = (_this$readMessage = this.readMessage()) === null || _this$readMessage === void 0 ? void 0 : _this$readMessage.instance;
        this._dragCurrentData = target;
        var point = this._target.cache.point;
        // console.log('_processDragOver', this._dragOverTarget)
        if (this._dragOverTarget) {
          var oldIns = this._dragOverTarget;
          /**
          * dragleave 退出事件
          * @event Instance#dragleave
          * @type {object}
          * @property {Event} event           - 原始事件 
          * @property {Object} instance       - dragleave的对象 
          * @property {target} target         - drag 携带的对象（特指从外面拖进canvas的对象） 
          */
          oldIns.dispatchEvent(new events('dragleave', {
            event: event,
            instance: oldIns,
            target: target,
            jflow: this,
            point: point
          }));
        }
        if (instance) {
          /**
          * dragenter 进入事件
          * @event Instance#dragenter
          * @type {object}
          * @property {Event} event           - 原始事件 
          * @property {Object} instance       - dragenter的对象 
          * @property {target} target         - drag 携带的对象（特指从外面拖进canvas的对象） 
          */
          instance.dispatchEvent(new events('dragenter', {
            event: event,
            instance: instance,
            target: target,
            jflow: this,
            point: point
          }));
        }
        this._dragOverTarget = instance;
      } else if (this._dragOverTarget) {
        /**
        * dragover 进入事件
        * @event Instance#dragover
        * @type {object}
        * @property {Event} event           - 原始事件 
        * @property {Object} instance       - dragover的对象 
        * @property {target} target         - drag 携带的对象（特指从外面拖进canvas的对象） 
        */
        this._dragOverTarget.dispatchEvent(new events('dragover', {
          event: event,
          instance: instance,
          jflow: this,
          target: this._dragCurrentData
        }));
      }
      this._processPanInBorder();
    }
  }, {
    key: "_processPanInBorder",
    value: function _processPanInBorder() {
      var _this$draggingbehavio,
        _this5 = this;
      if ((_this$draggingbehavio = this.draggingbehavior) !== null && _this$draggingbehavio !== void 0 && (_this$draggingbehavio = _this$draggingbehavio.panInBorder) !== null && _this$draggingbehavio !== void 0 && _this$draggingbehavio.enable) {
        if (!this.draggingbehavior.panInBorder.timer) {
          this.draggingbehavior.panInBorder.timer = Date.now();
        }
        if (Date.now() - this.draggingbehavior.panInBorder.timer > 500) {
          var _this$_cacheViewBox = flow_slicedToArray(this._cacheViewBox, 4),
            x = _this$_cacheViewBox[0],
            y = _this$_cacheViewBox[1],
            w = _this$_cacheViewBox[2],
            h = _this$_cacheViewBox[3];
          var _this$_currentp = flow_slicedToArray(this._currentp, 2),
            px = _this$_currentp[0],
            py = _this$_currentp[1];
          var _this$draggingbehavio2 = this.draggingbehavior.panInBorder,
            padding = _this$draggingbehavio2.padding,
            deltamovement = _this$draggingbehavio2.deltamovement;
          var deltaX = 0;
          var deltaY = 0;
          if (px < x + padding) {
            deltaX = deltamovement;
          }
          if (px > w - padding) {
            deltaX = -deltamovement;
          }
          if (py < y + padding) {
            deltaY = deltamovement;
          }
          if (py > h - padding) {
            deltaY = -deltamovement;
          }
          if (this.__processOverAnime) {
            this.__processOverAnime.cancel();
          }
          if (deltaX || deltaY) {
            this.__processOverAnime = this.requestJFlowAnime(function () {
              _this5.panHandler(deltaX, deltaY);
            });
          } else {
            this.draggingbehavior.panInBorder.timer = null;
          }
        }
      }
    }
  }, {
    key: "_onDragover",
    value: function _onDragover(event) {
      var _this6 = this;
      event.preventDefault();
      event.stopPropagation();
      if (this._lastDragState.processing) return;
      this._lastDragState.processing = true;
      var offsetX = event.offsetX,
        offsetY = event.offsetY;
      Object.assign(this._target.status, {
        dragovering: true
      });
      this._targetLockOn([offsetX, offsetY]);
      var instance = this._target.instance || this._target.link;
      this._processDragOver(instance, event);
      if (this._target.isLinkDirty || this._target.isInstanceDirty) {
        Promise.resolve().then(function () {
          _this6._render();
          _this6._target.isLinkDirty = false;
          _this6._target.isInstanceDirty = false;
          _this6._lastDragState.processing = false;
        });
      } else {
        this._lastDragState.processing = false;
      }
    }
  }, {
    key: "_cancelPanInBorder",
    value: function _cancelPanInBorder() {
      var _this$draggingbehavio3;
      if (this.__processOverAnime) {
        this.__processOverAnime.cancel();
      }
      if ((_this$draggingbehavio3 = this.draggingbehavior) !== null && _this$draggingbehavio3 !== void 0 && _this$draggingbehavio3.panInBorder) {
        this.draggingbehavior.panInBorder.timer = null;
      }
    }
  }, {
    key: "_onDragLeave",
    value: function _onDragLeave() {
      this._cancelPanInBorder();
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(event) {
      var _this7 = this;
      this._cancelPanInBorder();
      var payload = this.consumeMessage();
      var instance = payload === null || payload === void 0 ? void 0 : payload.instance;
      if (this._dragOverTarget) {
        var oldIns = this._dragOverTarget;
        oldIns.dispatchEvent(new events('dragoverend', {
          event: event,
          instance: oldIns
        }));
        this._dragOverTarget = null;
      }
      var _this$_target = this._target,
        link = _this$_target.link,
        target = _this$_target.instance;
      var _this$_target$cache = this._target.cache,
        point = _this$_target$cache.point,
        belongs = _this$_target$cache.belongs;
      if (link) {
        /**
         * 丢在线上事件
         *
         * @event BaseLink#drop
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {Object} instance       - 拖动的对象 
         * @property {BaseLink} link         - 目标连线 
         * @property {JFlow} jflow           - 当前JFlow对象 
         * @property {Group|JFlow} belongs   - 连线所在的绘图栈的对象
         * @property {number[]} point        - 已经计算到绘图栈对应坐标系下的坐标
         */
        // instance.anchor = point;
        link.dispatchEvent(new events('drop', {
          event: event,
          instance: instance,
          link: link,
          jflow: this,
          belongs: belongs,
          point: point
        }));
      } else if (target) {
        /**
         * 丢在节点上事件
         *
         * @event Node#drop
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {Object} instance       - 拖动的对象 
         * @property {JFlow} jflow           - 当前JFlow对象 
         * @property {Node} target           - 目标节点
         * @property {number[]} point        - 已经计算到绘图栈对应坐标系下的坐标
         */
        target.bubbleEvent(new events('drop', {
          event: event,
          instance: instance,
          jflow: this,
          target: target,
          point: point,
          bubbles: true
        }));
      } else {
        /**
        * 丢在主图上事件
        *
        * @event JFlow#drop
        * @type {object}
        * @property {Event} event           - 原始事件 
        * @property {Object} instance       - 拖动的对象 
        * @property {JFlow} jflow           - 当前JFlow对象 
        * @property {number[]} point        - 已经计算到绘图栈对应坐标系下的坐标
        */
        this.dispatchEvent(new events('drop', {
          event: event,
          instance: instance,
          jflow: this,
          target: target,
          point: point
        }));
      }
      requestAnimationFrame(function () {
        _this7.cancelDrop();
      });
    }
  }, {
    key: "cancelDrop",
    value: function cancelDrop() {
      this._target.instance = null;
      this._target.link = null;
      Object.assign(this._target.status, {
        dragovering: false
      });
    }

    /**
     * 缩放操作处理函数
     * @param {Number} offsetX - 事件对象与canvas的内填充边（padding edge）在 X 轴方向上的偏移量。
     * @param {Number} offsetY - 事件对象与canvas的内填充边（padding edge）在 Y 轴方向上的偏移量。 
     * @param {Number} deltaX  - 水平滚动量
     * @param {Number} deltaY  - 垂直滚动量
     * @param {Number} event - 原生事件
     */
  }, {
    key: "zoomHandler",
    value: function zoomHandler(offsetX, offsetY, deltaX, deltaY, event) {
      var _this8 = this;
      // if(!this._allowZoom) return;
      if (this._zooming) return;
      this._zooming = true;
      var _this$bounding_box3 = this.bounding_box,
        p_width = _this$bounding_box3.width,
        p_height = _this$bounding_box3.height,
        x = _this$bounding_box3.x,
        y = _this$bounding_box3.y;
      var _this$canvasMeta = this.canvasMeta,
        cw = _this$canvasMeta.actual_width,
        ch = _this$canvasMeta.actual_height;
      var minZoom = this.minZoom;
      if (this.worldMargin) {
        var m = this.worldMargin;
        var maxWidth = p_width + m * 2;
        var maxHeight = p_height + m * 2;
        minZoom = Math.max(minZoom, Math.max(cw / maxWidth, ch / maxHeight));
      }
      var newScale = this.scale;
      var amount = deltaY > 0 ? 1.05 : 1 / 1.05;
      newScale *= amount;
      newScale = Math.min(this.maxZoom, Math.max(minZoom, newScale));
      // console.log(newScale);
      // if (this.maxZoom && newScale > this.maxZoom){
      //     // could just return but then won't stop exactly at maxZoom
      //     newScale = this.maxZoom;
      // }

      // if(this.minZoom && newScale < this.minZoom) {
      //     newScale = this.minZoom;
      // }

      var deltaScale = newScale - this.scale;
      var currentWidth = p_width * this.scale;
      var currentHeight = p_height * this.scale;
      var deltaWidth = p_width * deltaScale;
      var deltaHeight = p_height * deltaScale;
      var tX = offsetX - this.position.x;
      var tY = offsetY - this.position.y;
      var pX = -tX / currentWidth;
      var pY = -tY / currentHeight;
      this.scale = newScale;
      this._recalculatePosition(pX * deltaWidth, pY * deltaHeight);

      // this.position.x += pX * deltaWidth;
      // this.position.y += pY * deltaHeight;
      // this.position.offsetX = this.position.x - x * newScale;
      // this.position.offsetY = this.position.y - y * newScale;
      this.dispatchEvent(new events('zoompan', {
        deltaX: 0,
        deltaY: 0
      }));
      // this.setAnimeClock()
      this.scheduleRender(function () {
        _this8._zooming = false;
      });
      // requestAnimationFrame((timestamp) => {
      //     this.setAnimeClock(timestamp);
      //     this._render();
      //     this._zooming = false;
      // })
    }
    /**
     * 平移画布操作处理函数
     * @param {Number} deltaX  - 水平滚动量
     * @param {Number} deltaY  - 垂直滚动量
     * @param {Number} event - 原生事件
     */
  }, {
    key: "panHandler",
    value: function panHandler(deltaX, deltaY, event) {
      var _this9 = this;
      if (this._panning) return;
      this._panning = true;
      var dragging = this._target.status.dragging;
      if (dragging) {
        var movingtarget = this._target.moving;
        if (movingtarget) {
          if (this.draggingbehavior.panInBorder.allowMovingTargetInPan) {
            movingtarget.forEach(function (t) {
              t.anchor[0] += -deltaX / _this9.scale;
              t.anchor[1] += -deltaY / _this9.scale;
            });
          }
        }
      }
      this._recalculatePosition(deltaX, deltaY);
      /**
       * 缩放平移事件
       *
       * @event JFlow#zoompan
      */
      this.dispatchEvent(new events('zoompan', {
        deltaX: deltaX,
        deltaY: deltaY
      }));
      this.scheduleRender(function () {
        _this9._panning = false;
      });
      // requestAnimationFrame((timestamp) => {
      //     this.setAnimeClock(timestamp);
      //     this._render();
      //     this._panning = false;
      // })
    }
    /**
     * 开始按压处理函数
     * @param {Number} offsetX - 事件对象与canvas的内填充边（padding edge）在 X 轴方向上的偏移量。
     * @param {Number} offsetY - 事件对象与canvas的内填充边（padding edge）在 Y 轴方向上的偏移量。 
     * @param {Number} event - 原生事件
     */
  }, {
    key: "pressStartHandler",
    value: function pressStartHandler(offsetX, offsetY, event) {
      var _this10 = this;
      if (this.checkScrollDragging()) {
        return;
      }
      Object.assign(this._target.meta, {
        initialX: offsetX,
        initialY: offsetY
      });
      var _this$_targetLockOn = this._targetLockOn([offsetX, offsetY], 'pressStart'),
        link = _this$_targetLockOn.link,
        instance = _this$_targetLockOn.instance;
      // 后续只支持 click 动作
      if (this.mode === JFLOW_MODE.LINKING) return;
      Object.assign(this._target.status, {
        dragging: true,
        processing: false
      });
      if (this._target.moving) {
        var moving = this._getMovingTarget();
        /**
         * 开始拖动组的事件（特指lock的顶层组）
         *
         * @event Node#pressStart
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {Node} instance       - 拖动的对象 
         * @property {JFlow} jflow           - 当前JFlow对象 
         */
        moving.dispatchEvent(new events('pressStart', {
          event: event,
          instance: moving,
          jflow: this
        }));
      }
      var t = this._resolveLockOnTarget(link, instance);
      if (t) {
        /**
         * 开始拖动对象事件（就是目标对象的拖动事件，事件支持冒泡）
         *
         * @event Node#instancePressStart
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {Node} instance     - 拖动的对象 
         * @property {JFlow} jflow           - 当前JFlow对象 
         * @property {Boolean} bubbles       - 冒泡
         */
        // const t = this._target.instance;
        t.bubbleEvent(new events('instancePressStart', {
          event: event,
          target: t,
          jflow: this,
          bubbles: true,
          preventDefault: function preventDefault() {
            _this10._preventPressSequeence = true;
            _this10._clearTarget();
            document.addEventListener('pointerup', function (e) {
              e.preventDefault();
              e.stopPropagation();
              _this10._preventPressSequeence = false;
            }, {
              once: true
            });
          }
        }));
      }
      if (!this._preventPressSequeence) {
        this.dispatchEvent(new events('jflowPressStart', {
          event: event,
          jflow: this
        }));
      }
    }
    /**
     * 按压中处理函数
     * @param {Number} offsetX - 事件对象与canvas的内填充边（padding edge）在 X 轴方向上的偏移量。
     * @param {Number} offsetY - 事件对象与canvas的内填充边（padding edge）在 Y 轴方向上的偏移量。 
     * @param {Number} event - 原生事件
     */
  }, {
    key: "pressMoveHandler",
    value: function pressMoveHandler(offsetX, offsetY, event) {
      var _this11 = this;
      if (this._preventPressSequeence) {
        return;
      }
      if (this.checkScrollDragging()) {
        return;
      }
      var _this$_target$status = this._target.status,
        dragging = _this$_target$status.dragging,
        processing = _this$_target$status.processing;
      var _this$_target$meta = this._target.meta,
        x = _this$_target$meta.x,
        y = _this$_target$meta.y;
      // this.canvas.style.cursor = 'default';
      if (!dragging) {
        if (this.checkScrollBarHover(offsetX, offsetY)) {
          return;
        } else {
          this.resetScrollBarHover();
        }
      }
      if (!dragging && !processing) {
        var _this$_targetLockOn2 = this._targetLockOn([offsetX, offsetY]),
          _link = _this$_targetLockOn2.link,
          _instance = _this$_targetLockOn2.instance;
        var t = this._resolveLockOnTarget(_link, _instance);
        if (t) {
          /**
          * instance mousemove 原生事件，仅在无拖拽时触发
          *
          * @event Node#instancemousemove
          * @type {object}
          * @property {Event} event           - 原始事件
          * @property {Node} instance           - 原始事件
          * @property {JFlow} jflow           - 当前JFlow对象 
          */
          // instance.dispatchEvent(new JFlowEvent('instancemousemove', {
          //     event,
          //     instance,
          //     jflow: this,
          // }))
          t.bubbleEvent(new events('instancemousemove', {
            event: event,
            instance: t,
            jflow: this,
            bubbles: true
          }));
        } else {
          this.dispatchEvent(new events('instancemousemove', {
            event: event,
            instance: null,
            jflow: this
          }));
        }
        if (this.mode === JFLOW_MODE.LINKING) {
          // if(instance) {
          //     instance.bubbleEvent(new JFlowEvent('linking', {
          //         event,
          //         target: instance,
          //         jflow: this,
          //         bubbles: true,
          //         callback: (p) => {
          //             this._currentp = p;
          //         }
          //     }))
          // }

          this._tempNode.anchor = this._currentp;
          this.scheduleRender(function () {
            _this11._target.isLinkDirty = false;
            _this11._target.isInstanceDirty = false;
            _this11._target.status.processing = false;
          });
          this._processPanInBorder();
          // requestAnimationFrame((timestamp) => {
          //     this.setAnimeClock(timestamp);
          //     this._render();
          //     this._target.isLinkDirty = false; 
          //     this._target.isInstanceDirty = false;
          //     this._target.status.processing = false;
          // })
          return;
        }
      }

      /**
       * canvas mousemove 原生事件
       *
       * @event JFlow#canvasmousemove
       * @type {object}
       * @property {Event} event           - 原始事件
       * @property {JFlow} jflow           - 当前JFlow对象 
       */
      this.dispatchEvent(new events('canvasmousemove', {
        event: event,
        jflow: this
      }));
      if (!dragging) return;
      // this.canvas.style.cursor = 'grabbing';
      if (processing) return;
      var movingtarget = this._target.moving; // this._tempNode ? [this._tempNode] : this._target.moving;
      this._target.status.movingState = true;
      this._target.status.processing = true;
      var deltaX = offsetX - x;
      var deltaY = offsetY - y;
      if (movingtarget) {
        if (this._allowMovingTarget) {
          movingtarget.forEach(function (t) {
            t.anchor[0] += deltaX / _this11.scale;
            t.anchor[1] += deltaY / _this11.scale;
          });
        }
      } else {
        this._recalculatePosition(deltaX, deltaY);
        this.dispatchEvent(new events('zoompan', {
          deltaX: deltaX,
          deltaY: deltaY
        }));
      }
      var _this$_targetLockOn3 = this._targetLockOn([offsetX, offsetY]),
        instance = _this$_targetLockOn3.instance,
        link = _this$_targetLockOn3.link;
      this._processDragOver(instance || link, event);
      this.scheduleRender(function () {
        _this11._target.isLinkDirty = false;
        _this11._target.isInstanceDirty = false;
        _this11._target.status.processing = false;
      });
      // requestAnimationFrame((timestamp) => {
      //     this._render();
      //     this._target.isLinkDirty = false; 
      //     this._target.isInstanceDirty = false;
      //     this._target.status.processing = false;
      // })
    }
    /**
     * 按压结束处理函数
     * @param {Boolean} isDocument - 是否为 document 触发
     * @param {Number} event - 原生事件
     */
  }, {
    key: "pressUpHanlder",
    value: function pressUpHanlder(isDocument, event) {
      if (this._preventPressSequeence) {
        return;
      }
      if (this.__processOverAnime) {
        this.__processOverAnime.cancel();
      }
      this._dragOverTarget = null;
      this._cancelPanInBorder();
      // this.resetScollBarStatus();
      var meta = this._target.meta;
      if (this.mode === JFLOW_MODE.LINKING) {
        var t = this._target.instance;
        var payload = this.consumeMessage();
        // console.log(payload)
        var _preventDefault = false;
        var preventDefault = function preventDefault() {
          _preventDefault = true;
        };
        if (t) {
          /**
           * canvas mousemove 原生事件
           *
           * @event Node#link
           * @type {object}
           * @property {Event} event           - 原始事件
           * @property {Node} target           - 原始事件
           * @property {object} payload        - 传入的消息
           * @property {JFlow} jflow           - 当前JFlow对象       - 当前JFlow对象 
           */
          t.bubbleEvent(new events('link', {
            event: event,
            target: t,
            jflow: this,
            payload: payload,
            bubbles: true,
            link: this._tempLink,
            preventDefault: preventDefault
          }));
        } else {
          var offsetX = event.offsetX,
            offsetY = event.offsetY;
          this.dispatchEvent(new events('link', {
            event: event,
            jflow: this,
            payload: payload,
            anchor: this._calculatePointBack([offsetX, offsetY]),
            link: this._tempLink,
            preventDefault: preventDefault
          }));
        }
        if (_preventDefault) {
          return;
        }
        this._clearTarget();
        if (!this._preventClearTemp) {
          if (this._tempNode) {
            this._tempNode.destroy();
            this._tempNode = null;
          }
          if (this._tempLink) {
            this._tempLink.destroy();
            this._tempLink = null;
          }
        }
        this._preventClearTemp = false;
        this.mode = JFLOW_MODE.DEFAULT;
        this._render();
        return;
      }
      if (this._target.moving) {
        var checkresult = false;
        if (this._layout["static"]) {
          checkresult = this.staticCheck(this._getMovingTarget());
        }
        if (!checkresult && this._target.link) {
          var _this$_target$cache2 = this._target.cache,
            point = _this$_target$cache2.point,
            belongs = _this$_target$cache2.belongs;
          var link = this._target.link;
          var instance = this._getMovingTarget();
          /**
           * 拖动到线上事件
           *
           * @event BaseLink#drop
           * @type {object}
           * @property {Event} event           - 原始事件 
           * @property {Object} instance     - 拖动的对象 
           * @property {BaseLink} link         - 目标连线 
           * @property {JFlow} jflow           - 当前JFlow对象 
           * @property {Group|JFlow} belongs   - 连线所在的绘图栈的对象
           */
          link.dispatchEvent(new events('drop', {
            event: event,
            instance: instance,
            link: link,
            jflow: this,
            belongs: belongs
          }));
          this._target.link = null;
          this._target.instance = null;
        } else if (this._target.moving) {
          if (this._target.instance) {
            /**
             * 拖动后放置到 Instance 上的事件，由被拖动到的对象触发
             *
             * @event Node#pressEnd
             * @type {object}
             * @property {Event} event           - 原始事件 
             * @property {Node} instance         - 拖动的对象 
             * @property {JFlow} jflow           - 当前JFlow对象 
             * @property {Instance} target       - 拖动到的对象
             * @property {boolean} bubbles       - 冒泡
             */
            //  console.log('pressEnd', this._target.instance)
            this._target.instance.bubbleEvent(new events('pressEnd', {
              event: event,
              instance: this._getMovingTarget(),
              jflow: this,
              target: this._target.instance,
              bubbles: true
            }));
          } else {
            /**
             * 拖动后放置到主图上的事件
             *
             * @event JFlow#pressEnd
             * @type {object}
             * @property {Event} event           - 原始事件 
             * @property {Instance} instance       - 拖动的对象 
             * @property {JFlow} jflow           - 当前JFlow对象 
             */
            this.dispatchEvent(new events('pressEnd', {
              event: event,
              instance: this._getMovingTarget(),
              jflow: this
            }));
          }
        }
        this._target.moving = null;
        this.removeTempDraggingInstance();
        // this._target.isMovingDirty = false;
        this._render();
      }
      this._clearTarget();
    }
    /**
    * 菜单弹出处理函数
    * @param {Number} offsetX - 事件对象与canvas的内填充边（padding edge）在 X 轴方向上的偏移量。
    * @param {Number} offsetY - 事件对象与canvas的内填充边（padding edge）在 Y 轴方向上的偏移量。 
    * @param {Number} event - 原生事件
    */
  }, {
    key: "clickHanlder",
    value: function clickHanlder(offsetX, offsetY, event) {
      var _this$_targetLockOn4 = this._targetLockOn([offsetX, offsetY], 'click'),
        link = _this$_targetLockOn4.link,
        instance = _this$_targetLockOn4.instance,
        meta = _this$_targetLockOn4.meta;
      if (Math.abs(meta.initialX - meta.x) < 1 && Math.abs(meta.initialY - meta.y) < 1) {
        if (event.target !== this.canvas) {
          this._clearTarget();
          Object.assign(this._target.meta, {
            initialX: undefined,
            initialY: undefined
          });
          return;
        }
        var topLayerPoint = this._target.cache.topLayerPoint;
        var t = this._resolveLockOnTarget(link, instance);
        if (t) {
          var target = t;
          /**
           * 点击事件（冒泡）
           *
           * @event Instance#contextclick
           * @type {object}
           * @property {Event} event           - 原始事件 
           * @property {Instance} target       - 右键对象 
           * @property {JFlow} jflow           - 当前JFlow对象
           * @property {number[]} topLayerPoint  - jflow坐标系上的位置
           * @property {Boolean} bubbles       - 冒泡
           */
          target.bubbleEvent(new events('click', {
            event: event,
            jflow: this,
            target: target,
            topLayerPoint: topLayerPoint,
            bubbles: true
          }));
        } else {
          /**
           * 点击事件
           *
           * @event JFlow#contextclick
           * @type {object}
           * @property {Event} event           - 原始事件 
           * @property {JFlow} jflow           - 当前JFlow对象
           * @property {number[]} topLayerPoint  - jflow坐标系上的位置
           */
          this.dispatchEvent(new events('click', {
            event: event,
            jflow: this,
            topLayerPoint: topLayerPoint
          }));
        }
        this._clearTarget();
        Object.assign(this._target.meta, {
          initialX: undefined,
          initialY: undefined
        });
      }
    }
    /**
     * 菜单弹出处理函数
     * @param {Number} offsetX - 事件对象与canvas的内填充边（padding edge）在 X 轴方向上的偏移量。
     * @param {Number} offsetY - 事件对象与canvas的内填充边（padding edge）在 Y 轴方向上的偏移量。 
     * @param {Number} event - 原生事件
     */
  }, {
    key: "contextMenuHanlder",
    value: function contextMenuHanlder(offsetX, offsetY, event) {
      var _this$_targetLockOn5 = this._targetLockOn([offsetX, offsetY], 'contextclick'),
        link = _this$_targetLockOn5.link,
        instance = _this$_targetLockOn5.instance;
      var topLayerPoint = this._target.cache.topLayerPoint;
      var t = this._resolveLockOnTarget(link, instance);
      if (t) {
        var target = t;
        /**
         * 右键事件（冒泡）
         *
         * @event Instance#contextclick
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {Instance} target       - 右键对象 
         * @property {JFlow} jflow           - 当前JFlow对象
         * @property {number[]} topLayerPoint  - jflow坐标系上的位置
         * @property {Boolean} bubbles       - 冒泡
         */
        target.bubbleEvent(new events('contextclick', {
          event: event,
          jflow: this,
          target: target,
          topLayerPoint: topLayerPoint,
          bubbles: true
        }));
      } else {
        /**
         * 右键事件
         *
         * @event JFlow#contextclick
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {JFlow} jflow           - 当前JFlow对象
         * @property {number[]} topLayerPoint  - jflow坐标系上的位置
         */
        this.dispatchEvent(new events('contextclick', {
          event: event,
          jflow: this,
          topLayerPoint: topLayerPoint
        }));
      }
    }
  }, {
    key: "dblclickHandler",
    value: function dblclickHandler(offsetX, offsetY, event) {
      var _this$_targetLockOn6 = this._targetLockOn([offsetX, offsetY], 'dblclick'),
        link = _this$_targetLockOn6.link,
        instance = _this$_targetLockOn6.instance;
      var topLayerPoint = this._target.cache.topLayerPoint;
      var t = this._resolveLockOnTarget(link, instance);
      if (t) {
        var target = t;
        /**
         * 右键事件
         *
         * @event Instance#dblclick
         * @type {object}
         * @property {Event} event           - 原始事件 
         * @property {Instance} target       - 右键对象 
         * @property {JFlow} jflow           - 当前JFlow对象
         * @property {number[]} topLayerPoint  - jflow坐标系上的位置
         * @property {Boolean} bubbles       - 冒泡
         */
        target.bubbleEvent(new events('dblclick', {
          event: event,
          jflow: this,
          target: target,
          topLayerPoint: topLayerPoint,
          bubbles: true
        }));
      } else {
        this.dispatchEvent(new events('dblclick', {
          event: event,
          jflow: this,
          topLayerPoint: topLayerPoint
        }));
      }
    }

    /*_onZoom(event) {
        event.preventDefault();
        let { offsetX, offsetY, deltaX, deltaY } = event
        if(event.ctrlKey) { 
            deltaY = -deltaY;
            this.zoomHandler(offsetX, offsetY, deltaX, deltaY);
        } else {
            this.panHandler(-deltaX, -deltaY);
        }
    }
     _onPressStart(event) { 
        const { offsetX, offsetY, deltaY, button } = event
        if(button !== 0) return;
        this.pressStartHandler(offsetX, offsetY);
    }
     _onPressMove(event) {
        const { offsetX, offsetY } = event
        this.pressMoveHandler(offsetX, offsetY);
    }
     _onPressUp(event, isDocument) {
        event.preventDefault();
        event.stopPropagation();
        const { button } = event
        if(button !== 0) return;
        this.pressUpHanlder(isDocument)
    }
     _onPressUpDocument(event) {
        this._onPressUp(event, true);
    }
     _onContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const { offsetX, offsetY } = event;
        this.contextMenuHanlder(offsetX, offsetY);
    }*/
  }, {
    key: "_resolveLockOnTarget",
    value: function _resolveLockOnTarget(link, instance) {
      return link !== null && link !== void 0 && link.ON_TOP ? link : instance || link;
    }
  }, {
    key: "_clearTarget",
    value: function _clearTarget() {
      Object.assign(this._target.meta, {
        x: undefined,
        y: undefined
        // initialX: undefined,
        // initialY: undefined, 
      });

      Object.assign(this._target.status, {
        dragging: false,
        processing: false,
        movingState: false
      });
      Object.assign(this._target, {
        instance: null,
        link: null,
        moving: null
      });
    }
  }, {
    key: "_recalculatePosition",
    value: function _recalculatePosition(deltaX, deltaY, scale) {
      var _this$bounding_box4 = this.bounding_box,
        x = _this$bounding_box4.x,
        y = _this$bounding_box4.y,
        width = _this$bounding_box4.width,
        height = _this$bounding_box4.height;
      var _this$canvasMeta2 = this.canvasMeta,
        cw = _this$canvasMeta2.actual_width,
        ch = _this$canvasMeta2.actual_height;
      if (scale === undefined) {
        scale = this.scale;
      }
      if (this.worldMargin) {
        // console.log(scale)
        var m = this.worldMargin;
        var bx1 = (x + width + m) * scale - cw;
        var bx2 = (x - m) * scale;
        // console.log(bx1, bx2)
        var sx = x * scale;
        var px = this.position.x + deltaX;
        var cx = px - sx;
        this.position.offsetX = Math.min(Math.max(-bx1, cx), -bx2);
        // console.log(this.position.offsetX)
        // this.position.offsetX = Math.max(Math.min(-bx2, cx), -bx1);
        this.position.x = this.position.offsetX + sx;
        // console.log(this.position.x, deltaX)
        // console.log(this.position.offsetX)

        var by1 = (y + height + m) * scale - ch;
        var by2 = (y - m) * scale;
        // console.log(by1, by2)
        var sy = y * scale;
        var py = this.position.y + deltaY;
        var cy = py - sy;
        this.position.offsetY = Math.min(Math.max(-by1, cy), -by2);
        // this.position.offsetY = Math.max(Math.min(-by2, cy), -by1);
        this.position.y = this.position.offsetY + sy;
      } else {
        this.position.x += deltaX;
        this.position.y += deltaY;
        this.position.offsetX = this.position.x - x * scale;
        this.position.offsetY = this.position.y - y * scale;
      }
    }
  }, {
    key: "calculateToRealWorld",
    value: function calculateToRealWorld(p) {
      var scale = this.scale;
      var position = this.position;
      return [p[0] * scale + position.offsetX, p[1] * scale + position.offsetY];
    }
  }, {
    key: "_calculatePointBack",
    value: function _calculatePointBack(p) {
      var scale = this.scale;
      var position = this.position;
      return [(p[0] - position.offsetX) / scale, (p[1] - position.offsetY) / scale];
    }
  }, {
    key: "_calculatePointBackWithPoint",
    value: function _calculatePointBackWithPoint(a, b, arr, idx1, idx2) {
      var scale = this.scale;
      var position = this.position;
      arr[idx1] = (a - position.offsetX) / scale;
      arr[idx2] = (b - position.offsetY) / scale;
    }
  }, {
    key: "_calculateDistance",
    value: function _calculateDistance(l) {
      return this.scale * l;
    }
  }, {
    key: "_resetTransform",
    value: function _resetTransform() {
      var _this$canvasMeta3 = this.canvasMeta,
        c_width = _this$canvasMeta3.width,
        c_height = _this$canvasMeta3.height;
      var position = this.position;
      var scale = this.scale;
      var ctx = this.ctx;
      ctx.setTransform();
      ctx.clearRect(0, 0, c_width, c_height);
      ctx.scale(this.dpr, this.dpr);
      ctx.transform(scale, 0, 0, scale, position.offsetX, position.offsetY);
      // ctx._ctx.setTransform();
      // ctx._ctx.clearRect(0, 0, c_width, c_height);
      // ctx._ctx.scale(this.dpr, this.dpr);
      // ctx.transform(scale, position.offsetX, position.offsetY);
    }
  }, {
    key: "resetTransform",
    value: function resetTransform(ctx) {
      var position = this.position;
      var scale = this.scale;
      ctx.setTransform();
      ctx.scale(this.dpr, this.dpr);
      ctx.transform(scale, 0, 0, scale, position.offsetX, position.offsetY);
    }
  }, {
    key: "_getViewBox",
    value: function _getViewBox() {
      // const cacheViewBox = [
      //     ...this._calculatePointBack([0,0]),
      //     ...this._calculatePointBack([this.canvasMeta.actual_width,this.canvasMeta.actual_height]),
      // ];
      var cacheViewBox = this._cacheViewBox;
      this._calculatePointBackWithPoint(0, 0, cacheViewBox, 0, 1);
      this._calculatePointBackWithPoint(this.canvasMeta.actual_width, this.canvasMeta.actual_height, cacheViewBox, 2, 3);
      return cacheViewBox;
    }
  }, {
    key: "setNodeToTopLayer",
    value: function setNodeToTopLayer(node) {
      var index = this._stack.findIndex(function (n) {
        return n === node;
      });
      if (index !== -1) {
        var _this$_stack$splice = this._stack.splice(index, 1),
          _this$_stack$splice2 = flow_slicedToArray(_this$_stack$splice, 1),
          renderNode = _this$_stack$splice2[0];
        this._stack.push(renderNode);
      }
    }
  }, {
    key: "getCacheViewBox",
    value: function getCacheViewBox() {
      return this._cacheViewBox;
    }
  }, {
    key: "_render",
    value: function _render() {
      this.scheduleRender();
    }

    /**
    * 绘制画布
    */
  }, {
    key: "__render",
    value: function __render() {
      if (!this._readyToRender) return;
      // if(this.hasAnimeAndFrameRendered()) return;
      this.runAnimeFrame();
      this._resetTransform();
      var ctx = this.ctx;
      this.dispatchEvent(new events('beforeJflowRender', {
        ctx: ctx
      }));
      var br = this._getViewBox();
      if (this.NodeRenderTop) {
        this._linkStack.render(ctx, function (link) {
          return !link.ON_TOP && link.isInViewBox(br);
        });
        this._stack.render(ctx, function (instance) {
          var result = doOverlap(br, instance.getBoundingRect());
          instance._isInViewBox = result;
          return result;
        });
        this._linkStack.render(ctx, function (link) {
          return link.ON_TOP && link.isInViewBox(br);
        });
      } else {
        this._stack.render(ctx, function (instance) {
          var result = doOverlap(br, instance.getBoundingRect());
          // console.log(instance._layoutNode.type, result)
          instance._isInViewBox = result;
          return result;
        });
        this._linkStack.render(ctx, function (link) {
          return link.isInViewBox(br);
        });
      }
      // ctx.save();
      // for(let i =0;i<2000;i++) {
      //     ctx.beginPath();
      //     ctx.fillStyle = \`rgb(\${parseInt(Math.random()*255)},\${parseInt(Math.random()*255)},\${parseInt(Math.random()*255)})\`
      //     ctx.fillRect(
      //         Math.random()*250, 
      //         Math.random()*240, 
      //         Math.random()*200, 
      //         Math.random()*300)
      // }

      // ctx.restore();

      if (this._tempNode) {
        ctx.save();
        this._tempNode.render(ctx);
        ctx.restore();
      }
      if (this._tempLink) {
        ctx.save();
        this._tempLink.isInViewBox(br);
        this._tempLink.render(ctx);
        ctx.restore();
      }
      this.dispatchEvent(new events('afterJflowRender', {
        ctx: ctx
      }));
      this.renderScrollBar(ctx);
      // this.setFrameRendered();
    }
  }]);
  return JFlow;
}( /*#__PURE__*/flow_wrapNativeSuper(EventTarget));
Object.assign(JFlow.prototype, messageMixin);
Object.assign(JFlow.prototype, stackMixin);
Object.assign(JFlow.prototype, layoutMixin);
Object.assign(JFlow.prototype, NodeWeakMapMixin);
Object.assign(JFlow.prototype, animeMixin);
Object.assign(JFlow.prototype, minimap_mixin);
Object.assign(JFlow.prototype, schedule);
Object.assign(JFlow.prototype, scrollbarMixin);
/* harmony default export */ const flow = (JFlow);








// export { default as Group } from '../instance/shapes/rectangle-group';


// export { default as CapsuleGroup } from '../instance/shapes/capsule-group';
// export { default as CapsuleVerticalGroup } from '../instance/shapes/capsule-vertical-group';

// export { default as DiamondGroup } from '../instance/shapes/diamond-group';
// export { default as DiamondVerticalGroup } from '../instance/shapes/diamond-vertical-group';

// export { default as RhombusGroup } from '../instance/shapes/rhombus-group';








// export { default as TreeLayout } from '../ler-layouta;yout/tree-layout';
// export { default as Lowcodelayout } from '../layout/low-code-layout';
// export { default as ERLayout } from '../layout/er-layout/er-layout';
// export { default as Orange } from '../instance/nodeWrapper/orange/orange'
// export { default as TextEditor } from '../instance/text-editor';
// export { default as TextGroup} from '../instance/text-group';


// export { JFlowPath2D } from '../utils/path-2d';
;// CONCATENATED MODULE: ./src/index.js
// import packageJson from '../package.json';

/* harmony default export */ const src = (flow);

// export { default as JFlowVuePlugin, JFlowLinkGroup } from './vue-plugin/JFlowPlugin.js';
// window.$jflow_version = packageJson.version;
// console.log(\`jflow version@\${packageJson.version}\`)//# sourceURL=[module]
//# sourceURL=webpack-internal:///633
`)}},__webpack_require__={d:(Q,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(Q,t)&&Object.defineProperty(Q,t,{enumerable:!0,get:e[t]})},o:(Q,e)=>Object.prototype.hasOwnProperty.call(Q,e),r:Q=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})}},__webpack_exports__={};return __webpack_modules__[633](0,__webpack_exports__,__webpack_require__),__webpack_exports__})()})})(jflow_bundle);var jflow_bundleExports=jflow_bundle.exports;const JFlow=getDefaultExportFromCjs(jflow_bundleExports),JFlowInstance$1=_mergeNamespaces({__proto__:null,default:JFlow},[jflow_bundleExports]),JFlowComponent={props:{configs:{type:Object,default:function(){return{}}},setInitialPosition:{type:Function},loading:Boolean,genVueComponentKey:{type:Function},jflowMixin:{type:Object,default:function(){return{}}}},inheritAttrs:!1,setup(Q,{slots:e,attrs:t,emit:s,expose:n}){const{genVueComponentKey:i,setInitialPosition:U}=Q,g=Z=>{const v=i(Z.from.source),S=i(Z.to.source),H=Z.part;return`${v}-${S}-${H}`},F=t.class,B=t.style,r=ref();let I=!1;const C=ref([]),o=ref([]),l=toRaw(Q.configs),A=new JFlow({...l,setInitialPosition:U});window._jflowInstance=A,A.source_Layout_Render_NodeMap._map=new Map;const f=A.source_Layout_Render_NodeMap.set;A.source_Layout_Render_NodeMap.set=function(Z){return f.call(A.source_Layout_Render_NodeMap,Z)};let d=!1;A.recalculateUp=function(){d&&A.reflow()},A.removeLinkNodeBySource=function(Z,v,S){let H=this.source_Layout_Render_NodeMap.get(Z);if(H){const T=H.jflowFromLinks.findIndex(w=>w===S);T!==-1&&H.jflowFromLinks.splice(T,1)}if(H=this.source_Layout_Render_NodeMap.get(v),H){const T=H.jflowToLinks.findIndex(w=>w===S);T!==-1&&H.jflowToLinks.splice(T,1)}},Object.assign(A,toRaw(Q.jflowMixin)),useStack(A),useLinkStack(A);const N=()=>{const Z=A._layout.flowStack.map(S=>{const{type:H,layoutNode:T,source:w}=S,z=A.source_Layout_Render_NodeMap;let O;const Y=toRaw(w),st=toRaw(T);return z.has(Y)?O=z.get(Y):O=z.set(Y),O.layoutNode=st,S}),v=A._layout.flowLinkStack.slice();return[Z,v]},y=(Z,v)=>{s("update:loading",!0);let S=0;const H=()=>{if(I)return;const w=S+100,z=v.slice(S,w);z.length?(o.value=o.value.concat(z),S=w,requestAnimationFrame(H)):requestAnimationFrame(R.bind(this))},T=()=>{if(I)return;const w=S+100,z=Z.slice(S,w);z.length?(C.value=C.value.concat(z),S=w,requestAnimationFrame(T)):(S=0,requestAnimationFrame(H))};requestAnimationFrame(T)};onBeforeMount(()=>{y(...N())});const R=()=>{I||(d=!0,A.$mount(r.value),bindEvent(A,t),s("update:loading",!1))};onUnmounted(()=>{A.destroy&&(A.source_Layout_Render_NodeMap.clear(),A.anime_queue.length=0,A.destroy(),A.initialPosition=null),I=!0});const k=(Z,v)=>{C.value=Z.slice(),o.value=v.slice()},_=(Z,v)=>{k(...N()),nextTick(()=>{Z&&Z(),A.recalculate(),A.scheduleRender(()=>{v&&v()})})},q=()=>{k(...N())},et=()=>A,J=(()=>{let Z=!1;return()=>{Z||(Z=!0,nextTick(()=>{A._render(),Z=!1}))}})();return provide("getJFlow",et),provide("renderJFlow",J),n({reflow:_,renderJFlow:J,getInstance:et,syncLayout:q}),()=>h("div",{class:F,style:B},[h("div",[...C.value.map(Z=>{if(!Z)return null;let{type:v,source:S,layoutNode:H}=Z;if(!e[v])if(e.jflowcommon)v="jflowcommon";else return null;const[T]=e[v]({source:S,layoutNode:H});return T.key=i(S),T}).filter(Z=>!!Z),...o.value.map(Z=>{let v=Z.type||"plainlink";if(!e[v])return null;const[S]=e[v]({configs:Z});return S.key=g(Z),S})]),h("div",{style:{width:"100%",height:"100%"},ref:r})])}};function diff(Q,e){return Object.keys(e).some(t=>e[t]!==Q[t])||Object.keys(Q).some(t=>e[t]!==Q[t])}function JFlowInstance(Q){const e=typeof Q=="string"?JFlowInstance$1[Q]:Q;return{inheritAttrs:!1,props:{configs:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:!0},source:{type:Object}},setup(t,{attrs:s,expose:n}){const i=inject("addToStack"),U=inject("removeFromStack"),g=inject("renderJFlow"),F=inject("getJFlow"),B=new e(toRaw(t.configs)),r=bindEvent(B,s);i(B,toRaw(t.source));const I=watch(()=>t.configs,(A,f)=>{diff(A,f)&&(B.setConfig(A),g())}),C=A=>{B.visible=A,g()},o=watch(()=>t.visible,C),l=watch(()=>t.source,(A,f)=>{const d=F();d.source_Layout_Render_NodeMap.delete(toRaw(f)),d.setRenderNodeBySource(toRaw(A),B)});return C(t.visible),onBeforeUnmount(()=>{if(t.source){const A=toRaw(t.source),f=F();f.source_Layout_Render_NodeMap.get(A).jflowNode===B&&f.source_Layout_Render_NodeMap.delete(A)}}),onUnmounted(()=>{I(),o(),l(),r(),B.destroy(),U(B),B._belongs=null}),n({_jflowInstance:B}),()=>null}}}function JFlowLink(Q){const e=typeof Q=="string"?JFlowInstance$1[Q]:Q;return{inheritAttrs:!1,props:{configs:{type:Object,default:function(){return{}}},from:Object,to:Object},setup(t,{attrs:s,expose:n}){const i=inject("addToLinkStack"),U=inject("addToLinkGroupStack"),g=inject("removeFromLinkStack"),F=inject("removeFromLinkGroupStack"),B=inject("getJFlow"),r=inject("renderJFlow"),I=B(),C={_jflowInstance:null};let o;const l=(d,N)=>{if(d&&N){const y=new e({...t.configs,from:d,to:N});o&&o(),o=bindEvent(y,s),i(y,toRaw(t.from),toRaw(t.to)),U&&U(y),C._jflowInstance=y}},A=()=>{const d=I.getRenderNodeBySource(toRaw(t.from)),N=I.getRenderNodeBySource(toRaw(t.to));console.log(d,N),C._jflowInstance?C._jflowInstance.setConfig({...t.configs,from:d,to:N}):l(d,N),r()};A();const f=watchEffect(()=>{A()},{flush:"post"});return onUnmounted(()=>{f(),C._jflowInstance&&(o&&o(),C._jflowInstance.destroy(),g(C._jflowInstance,toRaw(t.from),toRaw(t.to)),F&&F(C._jflowInstance),C._jflowInstance._belongs=null,C._jflowInstance.from=void 0,C._jflowInstance.to=void 0)}),n(C),()=>null}}}function JFlowGroup(Q){const e=typeof Q=="string"?JFlowInstance$1[Q]:Q;return{inheritAttrs:!1,props:{configs:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:!0},source:{type:Object}},setup(t,{slots:s,attrs:n,expose:i}){var f;const U=inject("addToStack"),g=inject("removeFromStack"),F=inject("renderJFlow"),B=inject("getJFlow");let r=new e(toRaw(t.configs));useStack(r);const I=bindEvent(r,n);U(r,toRaw(t.source)),(f=r==null?void 0:r.created)==null||f.call(r);const C=d=>{r.visible=d,F()},o=watch(()=>t.configs,(d,N)=>{JSON.stringify(d)!==JSON.stringify(N)&&(r.setConfig(d),F())}),l=watch(()=>t.visible,C),A=watch(()=>t.source,(d,N)=>{if(d){const y=B();y.source_Layout_Render_NodeMap.delete(toRaw(N)),y.setRenderNodeBySource(toRaw(d),r)}});return C(t.visible),onMounted(()=>{r.recalculate()}),onUpdated(()=>{r.recalculateUp()}),onUnmounted(()=>{if(o(),l(),A(),t.source){const d=toRaw(t.source),N=B(),y=N.source_Layout_Render_NodeMap.get(d);(y==null?void 0:y.jflowNode)===r&&(y.jflowToLinks.forEach(R=>R.visible=!1),y.jflowFromLinks.forEach(R=>R.visible=!1),N.source_Layout_Render_NodeMap.delete(d))}I(),r.destroy(),g(r),r._belongs=null,r=null}),i({_jflowInstance:r}),()=>h("jflow-group",s.default())}}}const JFlowTextGroup={props:{configs:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:!0},source:{type:Object},genVueComponentKey:{type:Function},resolver:{type:Function}},inheritAttrs:!1,setup(Q,{slots:e,attrs:t,emit:s,expose:n}){const{genVueComponentKey:i,resolver:U}=Q,g=inject("addToStack"),F=inject("removeFromStack"),B=inject("renderJFlow"),r=ref([]),I=new jflow_bundleExports.TextGroup({...toRaw(Q.configs),resolver:U});useStack(I);const C=bindEvent(I,t);g(I,toRaw(Q.source));const o=y=>{I.visible=y,B()},l=watch(()=>Q.configs,(y,R)=>{JSON.stringify(y)!==JSON.stringify(R)&&(I.setConfig(y),B())}),A=watch(()=>Q.visible,o),f=watch(()=>Q.source,y=>{I._jflow.setRenderNodeBySource(toRaw(y),I)});o(Q.visible);const d=()=>{r.value=I._flattenTxtElem.filter(y=>y.type!=="text")};d();const N=()=>{I.refreshTextElements(),d(),nextTick(()=>{I.refresh()})};return onMounted(()=>{I.recalculate()}),onUpdated(()=>{I.recalculateUp()}),onUnmounted(()=>{l(),A(),f(),C(),I.destroy(),F(I),I._belongs=null}),n({_jflowInstance:I,reflow:N}),()=>r.value.length===0?h("jflow-group"):h("div",r.value.map(y=>{let{type:R,source:k}=y;if(!e[R])if(e.jflowcommon)R="jflowcommon";else return null;const[_]=e[R]({source:k,textElement:y});return _.key=i(k),_}).filter(y=>!!y))}},JFLOW_NODES=["Point","Rectangle","Capsule","Diamond","Rhombus","Text","Icon","ShadowDom","TextEditor"],JFLOW_LINKS=["Link","PolyLink","BezierLink"],JFLOW_GROUPS=["CapsuleGroup","CapsuleVerticalGroup","DiamondGroup","DiamondVerticalGroup","RhombusGroup","PointGroup","ScrollGroup"],components=[{name:"Jflow",component:JFlowComponent},{name:"Group",component:JFlowGroup("Group")},...JFLOW_GROUPS.map(Q=>({name:Q,component:JFlowGroup(Q)})),...JFLOW_NODES.map(Q=>({name:Q,component:JFlowInstance(Q)})),...JFLOW_LINKS.map(Q=>({name:Q,component:JFlowLink(Q)})),{name:"TextGroup",component:JFlowTextGroup}],componentPrefix="j";customElements.define("jflow-group",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}});const JFlowVuePlugin={install:(Q,e={})=>{let t=componentPrefix;e&&e.prefix&&(t=e.prefix),components.forEach(s=>{Q.component(`${t}${s.name}`,s.component)}),e.customInstance&&Object.keys(e.customInstance).forEach(s=>{Q.component(`${t}${s}`,JFlowInstance(e.customInstance[s]))}),e.customGroups&&Object.keys(e.customGroups).forEach(s=>{Q.component(`${t}${s}`,JFlowGroup(e.customGroups[s]))}),e.customLink&&Object.keys(e.customLink).forEach(s=>{Q.component(`${t}${s}`,JFlowLink(e.customLink[s]))})}},_sfc_main$b={__name:"program-link",props:{configs:Object},setup(Q){const e=Q,t=inject("resetFocus"),s=inject("isOnFocus"),n=computed(()=>s(e.configs.source)),i=computed(()=>{let g="#ADC2E2";return n.value&&(g="#4E75EC"),{backgroundColor:g,showclose:n.value}}),U=g=>{g.detail.bubbles=!1,t(e.configs.source)};return(g,F)=>{const B=resolveComponent("jBezierLink");return openBlock(),createBlock(B,{configs:i.value,from:Q.configs.from.source,to:Q.configs.to.source,onClick:U},null,8,["configs","from","to"])}}},_sfc_main$a={__name:"program-node",props:{node:Object},setup(Q){const e=new jflow_bundleExports.LinearLayout({direction:"horizontal",gap:4}),t=new jflow_bundleExports.LinearLayout({direction:"vertical",gap:4}),s=Q,n=inject("resetFocus"),i=inject("isOnFocus"),U=inject("onLinkingEnter"),g=inject("onLinkingLeave"),F=inject("startLink"),B=inject("startLinkOutput"),r=inject("onLink"),I=inject("isLinking"),C=inject("clearLinkState"),o=inject("startDrag"),l=inject("openNodePopper");function A(){const T=s.node.operator.output.getValue(),w=typeof T;return["number","string","boolean"].includes(w)?T:"对象"}const f=ref(A()),d=ref({layout:t,padding:5}),N=ref({layout:t,backgroundColor:"#000",padding:5}),y=ref({layout:t,backgroundColor:"#A9CCFE",padding:5}),R=computed(()=>i(s.node)),k=computed(()=>({layout:e,borderColor:R.value?"#4E75EC":"#ACB2BF",borderWidth:2,padding:12})),_=ref(s.node.operator.declaration.getArguments()),q=()=>{f.value=A()},et=T=>{T.detail.bubbles=!1,n(s.node),l(s.node,"program")},J=(T,w)=>{if(I()){C();return}T.detail.bubbles=!1,F(T,w,w.keyword)},Z=T=>{if(I()){C();return}T.detail.bubbles=!1,B(T,s.node,s.node.operator.output)},v=(T,w)=>{T.detail.bubbles=!1,r(s.node,w.keyword)},S=T=>{o(T.detail.event,s.node)},H=()=>{_.value=s.node.operator.declaration.getArguments()};return onMounted(()=>{console.log("programNode mounted!");const T=toRaw(s.node);T.addEventListener("output",q),T.addEventListener("expressionchange",H)}),onBeforeUnmount(()=>{const T=toRaw(s.node);T.addEventListener("output",q),T.addEventListener("expressionchange",H)}),(T,w)=>{const z=resolveComponent("j-text"),O=resolveComponent("j-group");return openBlock(),createBlock(O,{configs:k.value,source:Q.node,onClick:et,onInstancePressStart:S},{default:withCtx(()=>[createVNode(O,{configs:d.value},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(_.value,Y=>(openBlock(),createBlock(O,{configs:N.value,source:Y,key:Y.keyword+Y.uuid,onMouseenter:st=>unref(U)(Y),onMouseleave:unref(g),onClick:st=>J(st,Y),onLink:st=>v(st,Y)},{default:withCtx(()=>[createVNode(z,{configs:{fontSize:"14px",textColor:"#fff",content:Y.keyword}},null,8,["configs"])]),_:2},1032,["configs","source","onMouseenter","onMouseleave","onClick","onLink"]))),128))]),_:1},8,["configs"]),createVNode(O,{configs:y.value,source:Q.node.operator.output,onClick:Z,onMouseenter:w[0]||(w[0]=Y=>unref(U)(Q.node.operator.output)),onMouseleave:unref(g)},{default:withCtx(()=>[createVNode(z,{configs:{fontSize:"14px",textColor:"#000",content:f.value||"-"}},null,8,["configs"])]),_:1},8,["configs","source","onMouseleave"])]),_:1},8,["configs","source"])}}},_sfc_main$9={__name:"numeric-node",props:{node:Object},setup(Q){const e=inject("startLink"),t=new jflow_bundleExports.LinearLayout({direction:"horizontal",gap:4}),s=inject("resetFocus"),n=inject("isOnFocus"),i=inject("onLinkingEnter"),U=inject("onLinkingLeave"),g=inject("openNodePopper"),F=inject("startDrag"),B=Q,r=ref(B.node.getValue()),I=computed(()=>n(B.node)),C=computed(()=>({layout:t,borderColor:I.value?"#4E75EC":"#ACB2BF",borderWidth:2,padding:12})),o=computed(()=>B.node.variable),l=computed(()=>(console.log(o.value),`${r.value}`)),A=y=>{y.detail.bubbles=!1,s(B.node),g(B.node,"Numeric")},f=y=>{y.detail.bubbles=!1,e(y,B.node)},d=y=>{F(y.detail.event,B.node)},N=()=>{r.value=B.node.getValue()};return onMounted(()=>{toRaw(B.node.signal).addEventListener("update",N)}),onBeforeUnmount(()=>{toRaw(B.node.signal).addEventListener("update",N)}),(y,R)=>{const k=resolveComponent("j-text"),_=resolveComponent("j-point"),q=resolveComponent("j-group");return openBlock(),createBlock(q,{configs:C.value,source:Q.node,onClick:A,onMouseenter:R[0]||(R[0]=et=>unref(i)(Q.node)),onMouseleave:unref(U),onInstancePressStart:d},{default:withCtx(()=>[createVNode(k,{configs:{fontSize:"14px",textColor:"#000",content:l.value}},null,8,["configs"]),createVNode(_,{configs:{radius:4,backgroundColor:"#4E75EC"},onClick:f})]),_:1},8,["configs","source","onMouseleave"])}}},_sfc_main$8={__name:"string-node",props:{node:Object},setup(Q){const e=inject("startLink"),t=new jflow_bundleExports.LinearLayout({direction:"horizontal",gap:4}),s=inject("resetFocus"),n=inject("isOnFocus"),i=inject("onLinkingEnter"),U=inject("onLinkingLeave"),g=inject("openNodePopper"),F=inject("startDrag"),B=Q,r=ref(B.node.getValue()),I=computed(()=>n(B.node)),C=computed(()=>({layout:t,borderColor:I.value?"#4E75EC":"#ACB2BF",borderWidth:2,padding:12})),o=computed(()=>B.node.variable),l=computed(()=>(console.log(o.value),`${r.value}`)),A=y=>{y.detail.bubbles=!1,s(B.node),g(B.node,"String")},f=y=>{y.detail.bubbles=!1,e(y,B.node)},d=y=>{F(y.detail.event,B.node)},N=()=>{r.value=B.node.getValue()};return onMounted(()=>{console.log("stringNode mounted!"),toRaw(B.node.signal).addEventListener("update",N)}),onBeforeUnmount(()=>{toRaw(B.node.signal).addEventListener("update",N)}),(y,R)=>{const k=resolveComponent("j-text"),_=resolveComponent("j-point"),q=resolveComponent("j-group");return openBlock(),createBlock(q,{configs:C.value,source:Q.node,onClick:A,onMouseenter:R[0]||(R[0]=et=>unref(i)(Q.node)),onMouseleave:unref(U),onInstancePressStart:d},{default:withCtx(()=>[createVNode(k,{configs:{fontSize:"14px",textColor:"#000",content:l.value}},null,8,["configs"]),createVNode(_,{configs:{radius:4,backgroundColor:"#4E75EC"},onClick:f})]),_:1},8,["configs","source","onMouseleave"])}}},_sfc_main$7={__name:"api-node",props:{node:Object},setup(Q){const e=inject("startLink"),t=new jflow_bundleExports.LinearLayout({direction:"horizontal",gap:4}),s=inject("resetFocus"),n=inject("isOnFocus"),i=inject("onLinkingEnter"),U=inject("onLinkingLeave"),g=inject("openNodePopper"),F=inject("startDrag"),B=Q,r=ref(B.node.signal.url),I=computed(()=>n(B.node)),C=computed(()=>({layout:t,borderColor:I.value?"#4E75EC":"#ACB2BF",borderWidth:2,padding:12}));computed(()=>B.node.variable);const o=d=>{d.detail.bubbles=!1,s(B.node),g(B.node,"API")},l=d=>{d.detail.bubbles=!1,e(d,B.node)},A=d=>{F(d.detail.event,B.node)},f=()=>{r.value=B.node.signal.url};return onMounted(()=>{toRaw(B.node.signal).addEventListener("update",f)}),onBeforeUnmount(()=>{toRaw(B.node.signal).addEventListener("update",f)}),(d,N)=>{const y=resolveComponent("j-text"),R=resolveComponent("j-point"),k=resolveComponent("j-group");return openBlock(),createBlock(k,{configs:C.value,source:Q.node,onClick:o,onMouseenter:N[0]||(N[0]=_=>unref(i)(Q.node)),onMouseleave:unref(U),onInstancePressStart:A},{default:withCtx(()=>[createVNode(y,{configs:{fontSize:"14px",textColor:"#000",content:r.value}},null,8,["configs"]),createVNode(R,{configs:{radius:4,backgroundColor:"#4E75EC"},onClick:l})]),_:1},8,["configs","source","onMouseleave"])}}};function getComponent$1(Q){switch(Q){case"Numeric":return _sfc_main$9;case"String":return _sfc_main$8;case"API":return _sfc_main$7}return null}function SignalInNode$1(Q){var s;const e=(s=Q.node)==null?void 0:s.type,t=getComponent$1(e);return console.log(e,t),t?h(t,{node:Q.node}):null}SignalInNode$1.props={node:Object};const root$5="_root_sumeu_2",style0$6={root:root$5},_export_sfc=(Q,e)=>{const t=Q.__vccOpts||Q;for(const[s,n]of e)t[s]=n;return t},_sfc_main$6={__name:"popper-wrapper",props:{active:Boolean,x:Number,y:Number},setup(Q){const e=Q,t=computed(()=>`transform: translate(${e.x}px, ${e.y}px)`);return(s,n)=>(openBlock(),createBlock(Transition,{name:"fade"},{default:withCtx(()=>[withDirectives(createBaseVNode("div",{class:normalizeClass(s.$style.root),ref:"root",style:normalizeStyle(t.value)},[renderSlot(s.$slots,"default")],6),[[vShow,Q.active]])]),_:3}))}},cssModules$6={$style:style0$6},popperWrapper=_export_sfc(_sfc_main$6,[["__cssModules",cssModules$6]]),root$4="_root_1e0k9_2",value$3="_value_1e0k9_23",style0$5={root:root$4,value:value$3},_hoisted_1$4=["value"],_sfc_main$5={__name:"numeric-popper",props:{source:Object},setup(Q){inject("reOrderAndReflow");const e=Q,t=ref(e.source.getValue()),s=i=>{const U=i.target.value;toRaw(e.source.signal).setValue(+U)},n=()=>{t.value=e.source.getValue()};return onMounted(()=>{toRaw(e.source.signal).addEventListener("update",n)}),onBeforeUnmount(()=>{toRaw(e.source.signal).addEventListener("update",n)}),(i,U)=>(openBlock(),createElementBlock("div",{class:normalizeClass(i.$style.root)},[createBaseVNode("div",{class:normalizeClass(i.$style.value)},[U[0]||(U[0]=createTextVNode("值：")),createBaseVNode("input",{value:t.value,onChange:s},null,40,_hoisted_1$4)],2)],2))}},cssModules$5={$style:style0$5},numericPopper=_export_sfc(_sfc_main$5,[["__cssModules",cssModules$5]]),root$3="_root_1e0k9_2",value$2="_value_1e0k9_23",style0$4={root:root$3,value:value$2},_hoisted_1$3=["value"],_sfc_main$4={__name:"string-popper",props:{source:Object},setup(Q){inject("reOrderAndReflow");const e=Q,t=ref(e.source.getValue()),s=i=>{const U=i.target.value;toRaw(e.source.signal).setValue(U)},n=()=>{t.value=e.source.getValue()};return onMounted(()=>{toRaw(e.source.signal).addEventListener("update",n)}),onBeforeUnmount(()=>{toRaw(e.source.signal).addEventListener("update",n)}),(i,U)=>(openBlock(),createElementBlock("div",{class:normalizeClass(i.$style.root)},[createBaseVNode("div",{class:normalizeClass(i.$style.value)},[U[0]||(U[0]=createTextVNode("值：")),createBaseVNode("input",{value:t.value,onChange:s},null,40,_hoisted_1$3)],2)],2))}},cssModules$4={$style:style0$4},stringPopper=_export_sfc(_sfc_main$4,[["__cssModules",cssModules$4]]),root$2="_root_1e0k9_2",value$1="_value_1e0k9_23",style0$3={root:root$2,value:value$1},_hoisted_1$2=["value"],_hoisted_2$2={rows:"4",cols:"50",readonly:""},_sfc_main$3={__name:"api-poppover",props:{source:Object},setup(Q){inject("reOrderAndReflow");const e=Q,t=ref(e.source.getValue()),s=ref(e.source.signal.url),n=U=>{const g=U.target.value;toRaw(e.source.signal).setURL(g),s.value=g},i=()=>{t.value=e.source.getValue()};return onMounted(()=>{toRaw(e.source.signal).addEventListener("update",i)}),onBeforeUnmount(()=>{toRaw(e.source.signal).addEventListener("update",i)}),(U,g)=>(openBlock(),createElementBlock("div",{class:normalizeClass(U.$style.root)},[createBaseVNode("div",{class:normalizeClass(U.$style.value)},[g[0]||(g[0]=createTextVNode("URL：")),createBaseVNode("input",{value:s.value,onChange:n},null,40,_hoisted_1$2)],2),createBaseVNode("div",null,[g[1]||(g[1]=createTextVNode("Response:")),createBaseVNode("textarea",_hoisted_2$2,toDisplayString(t.value),1)])],2))}},cssModules$3={$style:style0$3},APIPopper=_export_sfc(_sfc_main$3,[["__cssModules",cssModules$3]]),root$1="_root_1u17d_2",value="_value_1u17d_24",style0$2={root:root$1,value},_hoisted_1$1={rows:"4",cols:"50",readonly:""},_hoisted_2$1=["value"],_sfc_main$2={__name:"program-popper",props:{source:Object},setup(Q){inject("reOrderAndReflow");const e=inject("getProgram"),t=Q,s=ref(""),n=ref(""),i=ref(""),U=F=>{const B=e(),r=toRaw(t.source);toRaw(t.source.operator),r.setExpression(F.target.value,B),r.processLocal()},g=()=>{const F=toRaw(t.source.operator);let B=[];for(let r in F.input){const I=F.input[r];B.push(`${r}=${I}`)}i.value=F.output.getValue(),n.value=F.expression,s.value=B.join(", ")};return onMounted(()=>{const F=toRaw(t.source);g(),F.addEventListener("output",g)}),onBeforeUnmount(()=>{toRaw(t.source).addEventListener("output",g)}),(F,B)=>(openBlock(),createElementBlock("div",{class:normalizeClass(F.$style.root)},[createBaseVNode("div",null,"输入："+toDisplayString(s.value),1),createBaseVNode("div",null,[B[0]||(B[0]=createTextVNode("输出：")),createBaseVNode("textarea",_hoisted_1$1,toDisplayString(i.value),1)]),createBaseVNode("div",null,[B[1]||(B[1]=createTextVNode("函数：")),createBaseVNode("textarea",{rows:"8",cols:"50",value:n.value,onChange:U},null,40,_hoisted_2$1)])],2))}},cssModules$2={$style:style0$2},programPopper=_export_sfc(_sfc_main$2,[["__cssModules",cssModules$2]]),root="_root_17b87_2",item="_item_17b87_10",style0$1={root,item},_sfc_main$1={__name:"create-popper",props:{source:Object,x:Number,y:Number},setup(Q){const e=inject("reOrderAndReflow"),t=Q,s=inject("getProgram"),n=inject("claseNodePopper"),i=B=>{s().addNode({type:"Numeric",value:1,position:[t.x,t.y]}),e(),n()},U=B=>{s().addNode({type:"String",value:"文本",position:[t.x,t.y]}),e(),n()},g=B=>{s().addNode({type:"API",URL:"http://nmc.cn/rest/province",position:[t.x,t.y]}),e(),n()},F=B=>{s().addNode({type:"Function",expression:`({a}) => {
            return a
        }`,position:[t.x,t.y]}),e(),n()};return(B,r)=>(openBlock(),createElementBlock("div",{class:normalizeClass(B.$style.root)},[createBaseVNode("div",{class:normalizeClass(B.$style.item),onClick:i},"数字信号源",2),createBaseVNode("div",{class:normalizeClass(B.$style.item),onClick:U},"文本信号源",2),createBaseVNode("div",{class:normalizeClass(B.$style.item),onClick:g},"API信号源",2),createBaseVNode("div",{class:normalizeClass(B.$style.item),onClick:F},"算子",2)],2))}},cssModules$1={$style:style0$1},createPopper=_export_sfc(_sfc_main$1,[["__cssModules",cssModules$1]]);function getComponent(Q){switch(Q){case"Numeric":return numericPopper;case"String":return stringPopper;case"API":return APIPopper;case"program":return programPopper;case"create":return createPopper}return null}function Popper(Q,{attrs:e}){var i;const t=(i=Q.meta)==null?void 0:i.type,s=getComponent(t);let n=[];return s&&(n=[h(s,Q.meta)]),h(popperWrapper,Q.meta,n)}Popper.props={meta:Object};const useFocus=Q=>{const e=ref(new Set),t=i=>{i=toRaw(i),e.value=new Set(i?Array.isArray(i)?i.filter(U=>U):[i]:[])},s=i=>(i=toRaw(i),e.value.has(i)),n=()=>{toRaw(e.value).forEach(i=>{const U=i.delete();Q.delete(i),U&&U.forEach(g=>Q.deleteLinkByKey(g))})};return provide("resetFocus",t),provide("isOnFocus",s),{resetFocus:t,doDelete:n}},useLink=(Q,e,t)=>{const s=ref({node:null,key:void 0,active:!1,output:void 0}),n=(C,o,l)=>{i(C,l),Object.assign(s.value,{node:o})},i=(C,o,l)=>{Object.assign(s.value,{node:o,key:l,active:!0});const A=e(),{offsetX:f,offsetY:d}=C.detail.event,N=A._calculatePointBack([f,d]);A.setLinkingMode(toRaw(o),y=>new jflow_bundleExports.BezierLink({...y,backgroundColor:"#4E75EC"}),!!l),A._tempNode.anchor=N},U=C=>toRaw(C)===toRaw(s.value.node),g=()=>s.value.active,F=(C,o)=>{C&&(!s.value.key&&o&&(Q.linkNode(toRaw(s.value.node),toRaw(C),o),t(),Q.run()),s.value.key&&!o&&(Q.linkNode(toRaw(C),toRaw(s.value.node),o),t(),Q.run()))},B=C=>{const o=e(),l=o.getRenderNodeBySource(toRaw(C));!!s.value.key?o.setLinkingLink({from:l}):o.setLinkingLink({to:l})},r=()=>{const C=e();!!s.value.key?C.setLinkingLink({from:C._tempNode}):C.setLinkingLink({to:C._tempNode})},I=()=>{Object.assign(s.value,{node:null,key:void 0,active:!1,output:void 0})};return provide("startLink",i),provide("startLinkOutput",n),provide("isLinking",g),provide("isFromNode",U),provide("onLinkingEnter",B),provide("onLinkingLeave",r),provide("onLink",F),provide("clearLinkState",I),{startLink:i,link:F}},useDrag=()=>{const Q={target:null,x:0,y:0},e=(s,n)=>{n=toRaw(n),Object.assign(Q,{target:n,x:s.clientX,y:s.clientY})},t=(s,n)=>{(Q.x!==s.clientX||Q.y!==s.clientY)&&n(Q),Object.assign(Q,{target:null,x:0,y:0})};return provide("startDrag",e),provide("endDrag",t),{startDrag:e,endDrag:t}},usePopper=(Q,e)=>{const t=ref({type:void 0,active:!1,source:null,x:0,y:0,coord:[0,0]}),s=(F,B)=>{const r=F.calculateToRealWorld([0,0]);if(B.style.transform=`translate(${r[0]}px, ${r[1]}px)`,t.value.active){const I=t.value;Object.assign(I,{x:I.coord[0]*F.scale,y:I.coord[1]*F.scale})}},n=()=>{const F=Q(),B=e.value;s(F,B),F.addEventListener("zoompan",r=>{s(F,B)})},i=(F,B)=>{var f,d;const r=Q(),I=r.getRenderNodeBySource(toRaw(F));let C;C=[I.anchor[0],I.anchor[1]-I.height/2];const o=((d=(f=I._belongs).calculateToCoordination)==null?void 0:d.call(f,C))||C,l=o[0]*r.scale,A=o[1]*r.scale;Object.assign(t.value,{type:B,source:F,active:!0,coord:o,x:l,y:A})},U=F=>{const{topLayerPoint:B}=F.detail,r=Q(),I=B[0]*r.scale,C=B[1]*r.scale;Object.assign(t.value,{type:"create",active:!0,coord:B.slice(),x:I,y:C})},g=()=>{Object.assign(t.value,{type:void 0,active:!1,source:null,x:0,y:0,coord:[0,0]})};return provide("openNodePopper",i),provide("claseNodePopper",g),{popper:t,mountPopper:n,openNodePopper:i,closeNodePopper:g,openCreatePopper:U}},adapter={enableWheelMove:!0,canvas:{wheel(Q,e){if(Q.preventDefault(),!adapter.enableWheelMove)return;let{offsetX:t,offsetY:s,deltaX:n,deltaY:i}=Q;Q.ctrlKey?(i=-i,e.zoomHandler(t,s,n,i,Q)):Q.shiftKey?e.panHandler(-i,0,Q):e.panHandler(-n,-i,Q)}}},nodes=[{name:"a",value:1,type:"Numeric",position:[224.1413116455078,228.49908447265625]},{name:"getProvinces",URL:"https://api.allorigins.win/get?url=http%3A%2F%2Fnmc.cn%2Frest%2Fprovince",type:"API",position:[67.24758911132812,279.8070983886719]},{name:"getCityCode",expression:`async ({ province }) => {
                const res = await fetch('https://api.allorigins.win/get?url=http%3A%2F%2Fnmc.cn%2Frest%2Fprovince%2F'+ province);
                const citys = await res.json();
                const q = JSON.parse(citys.contents);
                return q[0].code
            }`,type:"Function",position:[653.6106669108071,156.22573997860857]},{name:"getWeather",expression:`async ({ stationid }) => {
                const res = await fetch('https://api.allorigins.win/get?url=http%3A%2F%2Fnmc.cn%2Frest%2Fweather%3Fstationid%3D'+ stationid);
                const weather = await res.json();
                return weather
            }`,type:"Function",position:[878.4952915736609,154.53509812127973]},{name:"Function8",expression:`({list, idx}) => {
            return JSON.parse(list.contents)[idx].code
        }`,type:"Function",position:[438.09979248046875,159.19390869140625]}],links=[["getProvinces","Function8","list"],["a","Function8","idx"],["Function8","getCityCode","province"],["getCityCode","getWeather","stationid"]],data={nodes,links};var lib={};Object.defineProperty(lib,"__esModule",{value:!0});function _objectWithoutPropertiesLoose(Q,e){if(Q==null)return{};var t={};for(var s in Q)if({}.hasOwnProperty.call(Q,s)){if(e.includes(s))continue;t[s]=Q[s]}return t}class Position{constructor(e,t,s){this.line=void 0,this.column=void 0,this.index=void 0,this.line=e,this.column=t,this.index=s}}class SourceLocation{constructor(e,t){this.start=void 0,this.end=void 0,this.filename=void 0,this.identifierName=void 0,this.start=e,this.end=t}}function createPositionWithColumnOffset(Q,e){const{line:t,column:s,index:n}=Q;return new Position(t,s+e,n+e)}const code="BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";var ModuleErrors={ImportMetaOutsideModule:{message:`import.meta may appear only with 'sourceType: "module"'`,code},ImportOutsideModule:{message:`'import' and 'export' may appear only with 'sourceType: "module"'`,code}};const NodeDescriptions={ArrayPattern:"array destructuring pattern",AssignmentExpression:"assignment expression",AssignmentPattern:"assignment expression",ArrowFunctionExpression:"arrow function expression",ConditionalExpression:"conditional expression",CatchClause:"catch clause",ForOfStatement:"for-of statement",ForInStatement:"for-in statement",ForStatement:"for-loop",FormalParameters:"function parameter list",Identifier:"identifier",ImportSpecifier:"import specifier",ImportDefaultSpecifier:"import default specifier",ImportNamespaceSpecifier:"import namespace specifier",ObjectPattern:"object destructuring pattern",ParenthesizedExpression:"parenthesized expression",RestElement:"rest element",UpdateExpression:{true:"prefix operation",false:"postfix operation"},VariableDeclarator:"variable declaration",YieldExpression:"yield expression"},toNodeDescription=Q=>Q.type==="UpdateExpression"?NodeDescriptions.UpdateExpression[`${Q.prefix}`]:NodeDescriptions[Q.type];var StandardErrors={AccessorIsGenerator:({kind:Q})=>`A ${Q}ter cannot be a generator.`,ArgumentsInClass:"'arguments' is only allowed in functions and class methods.",AsyncFunctionInSingleStatementContext:"Async functions can only be declared at the top level or inside a block.",AwaitBindingIdentifier:"Can not use 'await' as identifier inside an async function.",AwaitBindingIdentifierInStaticBlock:"Can not use 'await' as identifier inside a static block.",AwaitExpressionFormalParameter:"'await' is not allowed in async function parameters.",AwaitUsingNotInAsyncContext:"'await using' is only allowed within async functions and at the top levels of modules.",AwaitNotInAsyncContext:"'await' is only allowed within async functions and at the top levels of modules.",AwaitNotInAsyncFunction:"'await' is only allowed within async functions.",BadGetterArity:"A 'get' accessor must not have any formal parameters.",BadSetterArity:"A 'set' accessor must have exactly one formal parameter.",BadSetterRestParameter:"A 'set' accessor function argument must not be a rest parameter.",ConstructorClassField:"Classes may not have a field named 'constructor'.",ConstructorClassPrivateField:"Classes may not have a private field named '#constructor'.",ConstructorIsAccessor:"Class constructor may not be an accessor.",ConstructorIsAsync:"Constructor can't be an async function.",ConstructorIsGenerator:"Constructor can't be a generator.",DeclarationMissingInitializer:({kind:Q})=>`Missing initializer in ${Q} declaration.`,DecoratorArgumentsOutsideParentheses:"Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",DecoratorBeforeExport:"Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",DecoratorsBeforeAfterExport:"Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",DecoratorConstructor:"Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",DecoratorExportClass:"Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",DecoratorSemicolon:"Decorators must not be followed by a semicolon.",DecoratorStaticBlock:"Decorators can't be used with a static block.",DeferImportRequiresNamespace:'Only `import defer * as x from "./module"` is valid.',DeletePrivateField:"Deleting a private field is not allowed.",DestructureNamedImport:"ES2015 named imports do not destructure. Use another statement for destructuring after the import.",DuplicateConstructor:"Duplicate constructor in the same class.",DuplicateDefaultExport:"Only one default export allowed per module.",DuplicateExport:({exportName:Q})=>`\`${Q}\` has already been exported. Exported identifiers must be unique.`,DuplicateProto:"Redefinition of __proto__ property.",DuplicateRegExpFlags:"Duplicate regular expression flag.",DynamicImportPhaseRequiresImportExpressions:({phase:Q})=>`'import.${Q}(...)' can only be parsed when using the 'createImportExpressions' option.`,ElementAfterRest:"Rest element must be last element.",EscapedCharNotAnIdentifier:"Invalid Unicode escape.",ExportBindingIsString:({localName:Q,exportName:e})=>`A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${Q}' as '${e}' } from 'some-module'\`?`,ExportDefaultFromAsIdentifier:"'from' is not allowed as an identifier after 'export default'.",ForInOfLoopInitializer:({type:Q})=>`'${Q==="ForInStatement"?"for-in":"for-of"}' loop variable declaration may not have an initializer.`,ForInUsing:"For-in loop may not start with 'using' declaration.",ForOfAsync:"The left-hand side of a for-of loop may not be 'async'.",ForOfLet:"The left-hand side of a for-of loop may not start with 'let'.",GeneratorInSingleStatementContext:"Generators can only be declared at the top level or inside a block.",IllegalBreakContinue:({type:Q})=>`Unsyntactic ${Q==="BreakStatement"?"break":"continue"}.`,IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list.",IllegalReturn:"'return' outside of function.",ImportAttributesUseAssert:"The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",ImportBindingIsString:({importName:Q})=>`A string literal cannot be used as an imported binding.
- Did you mean \`import { "${Q}" as foo }\`?`,ImportCallArity:"`import()` requires exactly one or two arguments.",ImportCallNotNewExpression:"Cannot use new with import(...).",ImportCallSpreadArgument:"`...` is not allowed in `import()`.",ImportJSONBindingNotDefault:"A JSON module can only be imported with `default`.",ImportReflectionHasAssertion:"`import module x` cannot have assertions.",ImportReflectionNotBinding:'Only `import module x from "./module"` is valid.',IncompatibleRegExpUVFlags:"The 'u' and 'v' regular expression flags cannot be enabled at the same time.",InvalidBigIntLiteral:"Invalid BigIntLiteral.",InvalidCodePoint:"Code point out of bounds.",InvalidCoverInitializedName:"Invalid shorthand property initializer.",InvalidDecimal:"Invalid decimal.",InvalidDigit:({radix:Q})=>`Expected number in radix ${Q}.`,InvalidEscapeSequence:"Bad character escape sequence.",InvalidEscapeSequenceTemplate:"Invalid escape sequence in template.",InvalidEscapedReservedWord:({reservedWord:Q})=>`Escape sequence in keyword ${Q}.`,InvalidIdentifier:({identifierName:Q})=>`Invalid identifier ${Q}.`,InvalidLhs:({ancestor:Q})=>`Invalid left-hand side in ${toNodeDescription(Q)}.`,InvalidLhsBinding:({ancestor:Q})=>`Binding invalid left-hand side in ${toNodeDescription(Q)}.`,InvalidLhsOptionalChaining:({ancestor:Q})=>`Invalid optional chaining in the left-hand side of ${toNodeDescription(Q)}.`,InvalidNumber:"Invalid number.",InvalidOrMissingExponent:"Floating-point numbers require a valid exponent after the 'e'.",InvalidOrUnexpectedToken:({unexpected:Q})=>`Unexpected character '${Q}'.`,InvalidParenthesizedAssignment:"Invalid parenthesized assignment pattern.",InvalidPrivateFieldResolution:({identifierName:Q})=>`Private name #${Q} is not defined.`,InvalidPropertyBindingPattern:"Binding member expression.",InvalidRecordProperty:"Only properties and spread elements are allowed in record definitions.",InvalidRestAssignmentPattern:"Invalid rest operator's argument.",LabelRedeclaration:({labelName:Q})=>`Label '${Q}' is already declared.`,LetInLexicalBinding:"'let' is disallowed as a lexically bound name.",LineTerminatorBeforeArrow:"No line break is allowed before '=>'.",MalformedRegExpFlags:"Invalid regular expression flag.",MissingClassName:"A class name is required.",MissingEqInAssignment:"Only '=' operator can be used for specifying default value.",MissingSemicolon:"Missing semicolon.",MissingPlugin:({missingPlugin:Q})=>`This experimental syntax requires enabling the parser plugin: ${Q.map(e=>JSON.stringify(e)).join(", ")}.`,MissingOneOfPlugins:({missingPlugin:Q})=>`This experimental syntax requires enabling one of the following parser plugin(s): ${Q.map(e=>JSON.stringify(e)).join(", ")}.`,MissingUnicodeEscape:"Expecting Unicode escape sequence \\uXXXX.",MixingCoalesceWithLogical:"Nullish coalescing operator(??) requires parens when mixing with logical operators.",ModuleAttributeDifferentFromType:"The only accepted module attribute is `type`.",ModuleAttributeInvalidValue:"Only string literals are allowed as module attribute values.",ModuleAttributesWithDuplicateKeys:({key:Q})=>`Duplicate key "${Q}" is not allowed in module attributes.`,ModuleExportNameHasLoneSurrogate:({surrogateCharCode:Q})=>`An export name cannot include a lone surrogate, found '\\u${Q.toString(16)}'.`,ModuleExportUndefined:({localName:Q})=>`Export '${Q}' is not defined.`,MultipleDefaultsInSwitch:"Multiple default clauses.",NewlineAfterThrow:"Illegal newline after throw.",NoCatchOrFinally:"Missing catch or finally clause.",NumberIdentifier:"Identifier directly after number.",NumericSeparatorInEscapeSequence:"Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",ObsoleteAwaitStar:"'await*' has been removed from the async functions proposal. Use Promise.all() instead.",OptionalChainingNoNew:"Constructors in/after an Optional Chain are not allowed.",OptionalChainingNoTemplate:"Tagged Template Literals are not allowed in optionalChain.",OverrideOnConstructor:"'override' modifier cannot appear on a constructor declaration.",ParamDupe:"Argument name clash.",PatternHasAccessor:"Object pattern can't contain getter or setter.",PatternHasMethod:"Object pattern can't contain methods.",PrivateInExpectedIn:({identifierName:Q})=>`Private names are only allowed in property accesses (\`obj.#${Q}\`) or in \`in\` expressions (\`#${Q} in obj\`).`,PrivateNameRedeclaration:({identifierName:Q})=>`Duplicate private name #${Q}.`,RecordExpressionBarIncorrectEndSyntaxType:"Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",RecordExpressionBarIncorrectStartSyntaxType:"Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",RecordExpressionHashIncorrectStartSyntaxType:"Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",RecordNoProto:"'__proto__' is not allowed in Record expressions.",RestTrailingComma:"Unexpected trailing comma after rest element.",SloppyFunction:"In non-strict mode code, functions can only be declared at top level or inside a block.",SloppyFunctionAnnexB:"In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",SourcePhaseImportRequiresDefault:'Only `import source x from "./module"` is valid.',StaticPrototype:"Classes may not have static property named prototype.",SuperNotAllowed:"`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",SuperPrivateField:"Private fields can't be accessed on super.",TrailingDecorator:"Decorators must be attached to a class element.",TupleExpressionBarIncorrectEndSyntaxType:"Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",TupleExpressionBarIncorrectStartSyntaxType:"Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",TupleExpressionHashIncorrectStartSyntaxType:"Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",UnexpectedArgumentPlaceholder:"Unexpected argument placeholder.",UnexpectedAwaitAfterPipelineBody:'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',UnexpectedDigitAfterHash:"Unexpected digit after hash token.",UnexpectedImportExport:"'import' and 'export' may only appear at the top level.",UnexpectedKeyword:({keyword:Q})=>`Unexpected keyword '${Q}'.`,UnexpectedLeadingDecorator:"Leading decorators must be attached to a class declaration.",UnexpectedLexicalDeclaration:"Lexical declaration cannot appear in a single-statement context.",UnexpectedNewTarget:"`new.target` can only be used in functions or class properties.",UnexpectedNumericSeparator:"A numeric separator is only allowed between two digits.",UnexpectedPrivateField:"Unexpected private name.",UnexpectedReservedWord:({reservedWord:Q})=>`Unexpected reserved word '${Q}'.`,UnexpectedSuper:"'super' is only allowed in object methods and classes.",UnexpectedToken:({expected:Q,unexpected:e})=>`Unexpected token${e?` '${e}'.`:""}${Q?`, expected "${Q}"`:""}`,UnexpectedTokenUnaryExponentiation:"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",UnexpectedUsingDeclaration:"Using declaration cannot appear in the top level when source type is `script`.",UnsupportedBind:"Binding should be performed on object property.",UnsupportedDecoratorExport:"A decorated export must export a class declaration.",UnsupportedDefaultExport:"Only expressions, functions or classes are allowed as the `default` export.",UnsupportedImport:"`import` can only be used in `import()` or `import.meta`.",UnsupportedMetaProperty:({target:Q,onlyValidPropertyName:e})=>`The only valid meta property for ${Q} is ${Q}.${e}.`,UnsupportedParameterDecorator:"Decorators cannot be used to decorate parameters.",UnsupportedPropertyDecorator:"Decorators cannot be used to decorate object literal properties.",UnsupportedSuper:"'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",UnterminatedComment:"Unterminated comment.",UnterminatedRegExp:"Unterminated regular expression.",UnterminatedString:"Unterminated string constant.",UnterminatedTemplate:"Unterminated template.",UsingDeclarationExport:"Using declaration cannot be exported.",UsingDeclarationHasBindingPattern:"Using declaration cannot have destructuring patterns.",VarRedeclaration:({identifierName:Q})=>`Identifier '${Q}' has already been declared.`,YieldBindingIdentifier:"Can not use 'yield' as identifier inside a generator.",YieldInParameter:"Yield expression is not allowed in formal parameters.",ZeroDigitNumericSeparator:"Numeric separator can not be used after leading 0."},StrictModeErrors={StrictDelete:"Deleting local variable in strict mode.",StrictEvalArguments:({referenceName:Q})=>`Assigning to '${Q}' in strict mode.`,StrictEvalArgumentsBinding:({bindingName:Q})=>`Binding '${Q}' in strict mode.`,StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block.",StrictNumericEscape:"The only valid numeric escape in strict mode is '\\0'.",StrictOctalLiteral:"Legacy octal literals are not allowed in strict mode.",StrictWith:"'with' in strict mode."};const UnparenthesizedPipeBodyDescriptions=new Set(["ArrowFunctionExpression","AssignmentExpression","ConditionalExpression","YieldExpression"]);var PipelineOperatorErrors={PipeBodyIsTighter:"Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",PipeTopicRequiresHackPipes:'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',PipeTopicUnbound:"Topic reference is unbound; it must be inside a pipe body.",PipeTopicUnconfiguredToken:({token:Q})=>`Invalid topic token ${Q}. In order to use ${Q} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${Q}" }.`,PipeTopicUnused:"Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",PipeUnparenthesizedBody:({type:Q})=>`Hack-style pipe body cannot be an unparenthesized ${toNodeDescription({type:Q})}; please wrap it in parentheses.`,PipelineBodyNoArrow:'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',PipelineBodySequenceExpression:"Pipeline body may not be a comma-separated sequence expression.",PipelineHeadSequenceExpression:"Pipeline head should not be a comma-separated sequence expression.",PipelineTopicUnused:"Pipeline is in topic style but does not use topic reference.",PrimaryTopicNotAllowed:"Topic reference was used in a lexical context without topic binding.",PrimaryTopicRequiresSmartPipeline:'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'};const _excluded=["message"];function defineHidden(Q,e,t){Object.defineProperty(Q,e,{enumerable:!1,configurable:!0,value:t})}function toParseErrorConstructor({toMessage:Q,code:e,reasonCode:t,syntaxPlugin:s}){const n=t==="MissingPlugin"||t==="MissingOneOfPlugins";{const i={AccessorCannotDeclareThisParameter:"AccesorCannotDeclareThisParameter",AccessorCannotHaveTypeParameters:"AccesorCannotHaveTypeParameters",ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:"ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",SetAccessorCannotHaveOptionalParameter:"SetAccesorCannotHaveOptionalParameter",SetAccessorCannotHaveRestParameter:"SetAccesorCannotHaveRestParameter",SetAccessorCannotHaveReturnType:"SetAccesorCannotHaveReturnType"};i[t]&&(t=i[t])}return function i(U,g){const F=new SyntaxError;return F.code=e,F.reasonCode=t,F.loc=U,F.pos=U.index,F.syntaxPlugin=s,n&&(F.missingPlugin=g.missingPlugin),defineHidden(F,"clone",function(r={}){var I;const{line:C,column:o,index:l}=(I=r.loc)!=null?I:U;return i(new Position(C,o,l),Object.assign({},g,r.details))}),defineHidden(F,"details",g),Object.defineProperty(F,"message",{configurable:!0,get(){const B=`${Q(g)} (${U.line}:${U.column})`;return this.message=B,B},set(B){Object.defineProperty(this,"message",{value:B,writable:!0})}}),F}}function ParseErrorEnum(Q,e){if(Array.isArray(Q))return s=>ParseErrorEnum(s,Q[0]);const t={};for(const s of Object.keys(Q)){const n=Q[s],i=typeof n=="string"?{message:()=>n}:typeof n=="function"?{message:n}:n,{message:U}=i,g=_objectWithoutPropertiesLoose(i,_excluded),F=typeof U=="string"?()=>U:U;t[s]=toParseErrorConstructor(Object.assign({code:"BABEL_PARSER_SYNTAX_ERROR",reasonCode:s,toMessage:F},e?{syntaxPlugin:e}:{},g))}return t}const Errors=Object.assign({},ParseErrorEnum(ModuleErrors),ParseErrorEnum(StandardErrors),ParseErrorEnum(StrictModeErrors),ParseErrorEnum`pipelineOperator`(PipelineOperatorErrors)),{defineProperty}=Object,toUnenumerable=(Q,e)=>{Q&&defineProperty(Q,e,{enumerable:!1,value:Q[e]})};function toESTreeLocation(Q){return toUnenumerable(Q.loc.start,"index"),toUnenumerable(Q.loc.end,"index"),Q}var estree=Q=>class extends Q{parse(){const t=toESTreeLocation(super.parse());return this.options.tokens&&(t.tokens=t.tokens.map(toESTreeLocation)),t}parseRegExpLiteral({pattern:t,flags:s}){let n=null;try{n=new RegExp(t,s)}catch{}const i=this.estreeParseLiteral(n);return i.regex={pattern:t,flags:s},i}parseBigIntLiteral(t){let s;try{s=BigInt(t)}catch{s=null}const n=this.estreeParseLiteral(s);return n.bigint=String(n.value||t),n}parseDecimalLiteral(t){const n=this.estreeParseLiteral(null);return n.decimal=String(n.value||t),n}estreeParseLiteral(t){return this.parseLiteral(t,"Literal")}parseStringLiteral(t){return this.estreeParseLiteral(t)}parseNumericLiteral(t){return this.estreeParseLiteral(t)}parseNullLiteral(){return this.estreeParseLiteral(null)}parseBooleanLiteral(t){return this.estreeParseLiteral(t)}directiveToStmt(t){const s=t.value;delete t.value,s.type="Literal",s.raw=s.extra.raw,s.value=s.extra.expressionValue;const n=t;return n.type="ExpressionStatement",n.expression=s,n.directive=s.extra.rawValue,delete s.extra,n}initFunction(t,s){super.initFunction(t,s),t.expression=!1}checkDeclaration(t){t!=null&&this.isObjectProperty(t)?this.checkDeclaration(t.value):super.checkDeclaration(t)}getObjectOrClassMethodParams(t){return t.value.params}isValidDirective(t){var s;return t.type==="ExpressionStatement"&&t.expression.type==="Literal"&&typeof t.expression.value=="string"&&!((s=t.expression.extra)!=null&&s.parenthesized)}parseBlockBody(t,s,n,i,U){super.parseBlockBody(t,s,n,i,U);const g=t.directives.map(F=>this.directiveToStmt(F));t.body=g.concat(t.body),delete t.directives}pushClassMethod(t,s,n,i,U,g){this.parseMethod(s,n,i,U,g,"ClassMethod",!0),s.typeParameters&&(s.value.typeParameters=s.typeParameters,delete s.typeParameters),t.body.push(s)}parsePrivateName(){const t=super.parsePrivateName();return this.getPluginOption("estree","classFeatures")?this.convertPrivateNameToPrivateIdentifier(t):t}convertPrivateNameToPrivateIdentifier(t){const s=super.getPrivateNameSV(t);return t=t,delete t.id,t.name=s,t.type="PrivateIdentifier",t}isPrivateName(t){return this.getPluginOption("estree","classFeatures")?t.type==="PrivateIdentifier":super.isPrivateName(t)}getPrivateNameSV(t){return this.getPluginOption("estree","classFeatures")?t.name:super.getPrivateNameSV(t)}parseLiteral(t,s){const n=super.parseLiteral(t,s);return n.raw=n.extra.raw,delete n.extra,n}parseFunctionBody(t,s,n=!1){super.parseFunctionBody(t,s,n),t.expression=t.body.type!=="BlockStatement"}parseMethod(t,s,n,i,U,g,F=!1){let B=this.startNode();return B.kind=t.kind,B=super.parseMethod(B,s,n,i,U,g,F),B.type="FunctionExpression",delete B.kind,t.value=B,g==="ClassPrivateMethod"&&(t.computed=!1),this.finishNode(t,"MethodDefinition")}nameIsConstructor(t){return t.type==="Literal"?t.value==="constructor":super.nameIsConstructor(t)}parseClassProperty(...t){const s=super.parseClassProperty(...t);return this.getPluginOption("estree","classFeatures")&&(s.type="PropertyDefinition"),s}parseClassPrivateProperty(...t){const s=super.parseClassPrivateProperty(...t);return this.getPluginOption("estree","classFeatures")&&(s.type="PropertyDefinition",s.computed=!1),s}parseObjectMethod(t,s,n,i,U){const g=super.parseObjectMethod(t,s,n,i,U);return g&&(g.type="Property",g.kind==="method"&&(g.kind="init"),g.shorthand=!1),g}parseObjectProperty(t,s,n,i){const U=super.parseObjectProperty(t,s,n,i);return U&&(U.kind="init",U.type="Property"),U}isValidLVal(t,s,n){return t==="Property"?"value":super.isValidLVal(t,s,n)}isAssignable(t,s){return t!=null&&this.isObjectProperty(t)?this.isAssignable(t.value,s):super.isAssignable(t,s)}toAssignable(t,s=!1){if(t!=null&&this.isObjectProperty(t)){const{key:n,value:i}=t;this.isPrivateName(n)&&this.classScope.usePrivateName(this.getPrivateNameSV(n),n.loc.start),this.toAssignable(i,s)}else super.toAssignable(t,s)}toAssignableObjectExpressionProp(t,s,n){t.type==="Property"&&(t.kind==="get"||t.kind==="set")?this.raise(Errors.PatternHasAccessor,t.key):t.type==="Property"&&t.method?this.raise(Errors.PatternHasMethod,t.key):super.toAssignableObjectExpressionProp(t,s,n)}finishCallExpression(t,s){const n=super.finishCallExpression(t,s);if(n.callee.type==="Import"){var i,U;n.type="ImportExpression",n.source=n.arguments[0],n.options=(i=n.arguments[1])!=null?i:null,n.attributes=(U=n.arguments[1])!=null?U:null,delete n.arguments,delete n.callee}return n}toReferencedArguments(t){t.type!=="ImportExpression"&&super.toReferencedArguments(t)}parseExport(t,s){const n=this.state.lastTokStartLoc,i=super.parseExport(t,s);switch(i.type){case"ExportAllDeclaration":i.exported=null;break;case"ExportNamedDeclaration":i.specifiers.length===1&&i.specifiers[0].type==="ExportNamespaceSpecifier"&&(i.type="ExportAllDeclaration",i.exported=i.specifiers[0].exported,delete i.specifiers);case"ExportDefaultDeclaration":{var U;const{declaration:g}=i;(g==null?void 0:g.type)==="ClassDeclaration"&&((U=g.decorators)==null?void 0:U.length)>0&&g.start===i.start&&this.resetStartLocation(i,n)}break}return i}parseSubscript(t,s,n,i){const U=super.parseSubscript(t,s,n,i);if(i.optionalChainMember){if((U.type==="OptionalMemberExpression"||U.type==="OptionalCallExpression")&&(U.type=U.type.substring(8)),i.stop){const g=this.startNodeAtNode(U);return g.expression=U,this.finishNode(g,"ChainExpression")}}else(U.type==="MemberExpression"||U.type==="CallExpression")&&(U.optional=!1);return U}isOptionalMemberExpression(t){return t.type==="ChainExpression"?t.expression.type==="MemberExpression":super.isOptionalMemberExpression(t)}hasPropertyAsPrivateName(t){return t.type==="ChainExpression"&&(t=t.expression),super.hasPropertyAsPrivateName(t)}isObjectProperty(t){return t.type==="Property"&&t.kind==="init"&&!t.method}isObjectMethod(t){return t.type==="Property"&&(t.method||t.kind==="get"||t.kind==="set")}finishNodeAt(t,s,n){return toESTreeLocation(super.finishNodeAt(t,s,n))}resetStartLocation(t,s){super.resetStartLocation(t,s),toESTreeLocation(t)}resetEndLocation(t,s=this.state.lastTokEndLoc){super.resetEndLocation(t,s),toESTreeLocation(t)}};class TokContext{constructor(e,t){this.token=void 0,this.preserveSpace=void 0,this.token=e,this.preserveSpace=!!t}}const types={brace:new TokContext("{"),j_oTag:new TokContext("<tag"),j_cTag:new TokContext("</tag"),j_expr:new TokContext("<tag>...</tag>",!0)};types.template=new TokContext("`",!0);const beforeExpr=!0,startsExpr=!0,isLoop=!0,isAssign=!0,prefix=!0,postfix=!0;class ExportedTokenType{constructor(e,t={}){this.label=void 0,this.keyword=void 0,this.beforeExpr=void 0,this.startsExpr=void 0,this.rightAssociative=void 0,this.isLoop=void 0,this.isAssign=void 0,this.prefix=void 0,this.postfix=void 0,this.binop=void 0,this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.rightAssociative=!!t.rightAssociative,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop!=null?t.binop:null,this.updateContext=null}}const keywords$1=new Map;function createKeyword(Q,e={}){e.keyword=Q;const t=createToken(Q,e);return keywords$1.set(Q,t),t}function createBinop(Q,e){return createToken(Q,{beforeExpr,binop:e})}let tokenTypeCounter=-1;const tokenTypes=[],tokenLabels=[],tokenBinops=[],tokenBeforeExprs=[],tokenStartsExprs=[],tokenPrefixes=[];function createToken(Q,e={}){var t,s,n,i;return++tokenTypeCounter,tokenLabels.push(Q),tokenBinops.push((t=e.binop)!=null?t:-1),tokenBeforeExprs.push((s=e.beforeExpr)!=null?s:!1),tokenStartsExprs.push((n=e.startsExpr)!=null?n:!1),tokenPrefixes.push((i=e.prefix)!=null?i:!1),tokenTypes.push(new ExportedTokenType(Q,e)),tokenTypeCounter}function createKeywordLike(Q,e={}){var t,s,n,i;return++tokenTypeCounter,keywords$1.set(Q,tokenTypeCounter),tokenLabels.push(Q),tokenBinops.push((t=e.binop)!=null?t:-1),tokenBeforeExprs.push((s=e.beforeExpr)!=null?s:!1),tokenStartsExprs.push((n=e.startsExpr)!=null?n:!1),tokenPrefixes.push((i=e.prefix)!=null?i:!1),tokenTypes.push(new ExportedTokenType("name",e)),tokenTypeCounter}const tt={bracketL:createToken("[",{beforeExpr,startsExpr}),bracketHashL:createToken("#[",{beforeExpr,startsExpr}),bracketBarL:createToken("[|",{beforeExpr,startsExpr}),bracketR:createToken("]"),bracketBarR:createToken("|]"),braceL:createToken("{",{beforeExpr,startsExpr}),braceBarL:createToken("{|",{beforeExpr,startsExpr}),braceHashL:createToken("#{",{beforeExpr,startsExpr}),braceR:createToken("}"),braceBarR:createToken("|}"),parenL:createToken("(",{beforeExpr,startsExpr}),parenR:createToken(")"),comma:createToken(",",{beforeExpr}),semi:createToken(";",{beforeExpr}),colon:createToken(":",{beforeExpr}),doubleColon:createToken("::",{beforeExpr}),dot:createToken("."),question:createToken("?",{beforeExpr}),questionDot:createToken("?."),arrow:createToken("=>",{beforeExpr}),template:createToken("template"),ellipsis:createToken("...",{beforeExpr}),backQuote:createToken("`",{startsExpr}),dollarBraceL:createToken("${",{beforeExpr,startsExpr}),templateTail:createToken("...`",{startsExpr}),templateNonTail:createToken("...${",{beforeExpr,startsExpr}),at:createToken("@"),hash:createToken("#",{startsExpr}),interpreterDirective:createToken("#!..."),eq:createToken("=",{beforeExpr,isAssign}),assign:createToken("_=",{beforeExpr,isAssign}),slashAssign:createToken("_=",{beforeExpr,isAssign}),xorAssign:createToken("_=",{beforeExpr,isAssign}),moduloAssign:createToken("_=",{beforeExpr,isAssign}),incDec:createToken("++/--",{prefix,postfix,startsExpr}),bang:createToken("!",{beforeExpr,prefix,startsExpr}),tilde:createToken("~",{beforeExpr,prefix,startsExpr}),doubleCaret:createToken("^^",{startsExpr}),doubleAt:createToken("@@",{startsExpr}),pipeline:createBinop("|>",0),nullishCoalescing:createBinop("??",1),logicalOR:createBinop("||",1),logicalAND:createBinop("&&",2),bitwiseOR:createBinop("|",3),bitwiseXOR:createBinop("^",4),bitwiseAND:createBinop("&",5),equality:createBinop("==/!=/===/!==",6),lt:createBinop("</>/<=/>=",7),gt:createBinop("</>/<=/>=",7),relational:createBinop("</>/<=/>=",7),bitShift:createBinop("<</>>/>>>",8),bitShiftL:createBinop("<</>>/>>>",8),bitShiftR:createBinop("<</>>/>>>",8),plusMin:createToken("+/-",{beforeExpr,binop:9,prefix,startsExpr}),modulo:createToken("%",{binop:10,startsExpr}),star:createToken("*",{binop:10}),slash:createBinop("/",10),exponent:createToken("**",{beforeExpr,binop:11,rightAssociative:!0}),_in:createKeyword("in",{beforeExpr,binop:7}),_instanceof:createKeyword("instanceof",{beforeExpr,binop:7}),_break:createKeyword("break"),_case:createKeyword("case",{beforeExpr}),_catch:createKeyword("catch"),_continue:createKeyword("continue"),_debugger:createKeyword("debugger"),_default:createKeyword("default",{beforeExpr}),_else:createKeyword("else",{beforeExpr}),_finally:createKeyword("finally"),_function:createKeyword("function",{startsExpr}),_if:createKeyword("if"),_return:createKeyword("return",{beforeExpr}),_switch:createKeyword("switch"),_throw:createKeyword("throw",{beforeExpr,prefix,startsExpr}),_try:createKeyword("try"),_var:createKeyword("var"),_const:createKeyword("const"),_with:createKeyword("with"),_new:createKeyword("new",{beforeExpr,startsExpr}),_this:createKeyword("this",{startsExpr}),_super:createKeyword("super",{startsExpr}),_class:createKeyword("class",{startsExpr}),_extends:createKeyword("extends",{beforeExpr}),_export:createKeyword("export"),_import:createKeyword("import",{startsExpr}),_null:createKeyword("null",{startsExpr}),_true:createKeyword("true",{startsExpr}),_false:createKeyword("false",{startsExpr}),_typeof:createKeyword("typeof",{beforeExpr,prefix,startsExpr}),_void:createKeyword("void",{beforeExpr,prefix,startsExpr}),_delete:createKeyword("delete",{beforeExpr,prefix,startsExpr}),_do:createKeyword("do",{isLoop,beforeExpr}),_for:createKeyword("for",{isLoop}),_while:createKeyword("while",{isLoop}),_as:createKeywordLike("as",{startsExpr}),_assert:createKeywordLike("assert",{startsExpr}),_async:createKeywordLike("async",{startsExpr}),_await:createKeywordLike("await",{startsExpr}),_defer:createKeywordLike("defer",{startsExpr}),_from:createKeywordLike("from",{startsExpr}),_get:createKeywordLike("get",{startsExpr}),_let:createKeywordLike("let",{startsExpr}),_meta:createKeywordLike("meta",{startsExpr}),_of:createKeywordLike("of",{startsExpr}),_sent:createKeywordLike("sent",{startsExpr}),_set:createKeywordLike("set",{startsExpr}),_source:createKeywordLike("source",{startsExpr}),_static:createKeywordLike("static",{startsExpr}),_using:createKeywordLike("using",{startsExpr}),_yield:createKeywordLike("yield",{startsExpr}),_asserts:createKeywordLike("asserts",{startsExpr}),_checks:createKeywordLike("checks",{startsExpr}),_exports:createKeywordLike("exports",{startsExpr}),_global:createKeywordLike("global",{startsExpr}),_implements:createKeywordLike("implements",{startsExpr}),_intrinsic:createKeywordLike("intrinsic",{startsExpr}),_infer:createKeywordLike("infer",{startsExpr}),_is:createKeywordLike("is",{startsExpr}),_mixins:createKeywordLike("mixins",{startsExpr}),_proto:createKeywordLike("proto",{startsExpr}),_require:createKeywordLike("require",{startsExpr}),_satisfies:createKeywordLike("satisfies",{startsExpr}),_keyof:createKeywordLike("keyof",{startsExpr}),_readonly:createKeywordLike("readonly",{startsExpr}),_unique:createKeywordLike("unique",{startsExpr}),_abstract:createKeywordLike("abstract",{startsExpr}),_declare:createKeywordLike("declare",{startsExpr}),_enum:createKeywordLike("enum",{startsExpr}),_module:createKeywordLike("module",{startsExpr}),_namespace:createKeywordLike("namespace",{startsExpr}),_interface:createKeywordLike("interface",{startsExpr}),_type:createKeywordLike("type",{startsExpr}),_opaque:createKeywordLike("opaque",{startsExpr}),name:createToken("name",{startsExpr}),placeholder:createToken("%%",{startsExpr:!0}),string:createToken("string",{startsExpr}),num:createToken("num",{startsExpr}),bigint:createToken("bigint",{startsExpr}),decimal:createToken("decimal",{startsExpr}),regexp:createToken("regexp",{startsExpr}),privateName:createToken("#name",{startsExpr}),eof:createToken("eof"),jsxName:createToken("jsxName"),jsxText:createToken("jsxText",{beforeExpr:!0}),jsxTagStart:createToken("jsxTagStart",{startsExpr:!0}),jsxTagEnd:createToken("jsxTagEnd")};function tokenIsIdentifier(Q){return Q>=93&&Q<=133}function tokenKeywordOrIdentifierIsKeyword(Q){return Q<=92}function tokenIsKeywordOrIdentifier(Q){return Q>=58&&Q<=133}function tokenIsLiteralPropertyName(Q){return Q>=58&&Q<=137}function tokenComesBeforeExpression(Q){return tokenBeforeExprs[Q]}function tokenCanStartExpression(Q){return tokenStartsExprs[Q]}function tokenIsAssignment(Q){return Q>=29&&Q<=33}function tokenIsFlowInterfaceOrTypeOrOpaque(Q){return Q>=129&&Q<=131}function tokenIsLoop(Q){return Q>=90&&Q<=92}function tokenIsKeyword(Q){return Q>=58&&Q<=92}function tokenIsOperator(Q){return Q>=39&&Q<=59}function tokenIsPostfix(Q){return Q===34}function tokenIsPrefix(Q){return tokenPrefixes[Q]}function tokenIsTSTypeOperator(Q){return Q>=121&&Q<=123}function tokenIsTSDeclarationStart(Q){return Q>=124&&Q<=130}function tokenLabelName(Q){return tokenLabels[Q]}function tokenOperatorPrecedence(Q){return tokenBinops[Q]}function tokenIsRightAssociative(Q){return Q===57}function tokenIsTemplate(Q){return Q>=24&&Q<=25}function getExportedToken(Q){return tokenTypes[Q]}tokenTypes[8].updateContext=Q=>{Q.pop()},tokenTypes[5].updateContext=tokenTypes[7].updateContext=tokenTypes[23].updateContext=Q=>{Q.push(types.brace)},tokenTypes[22].updateContext=Q=>{Q[Q.length-1]===types.template?Q.pop():Q.push(types.template)},tokenTypes[143].updateContext=Q=>{Q.push(types.j_expr,types.j_oTag)};let nonASCIIidentifierStartChars="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",nonASCIIidentifierChars="·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";const nonASCIIidentifierStart=new RegExp("["+nonASCIIidentifierStartChars+"]"),nonASCIIidentifier=new RegExp("["+nonASCIIidentifierStartChars+nonASCIIidentifierChars+"]");nonASCIIidentifierStartChars=nonASCIIidentifierChars=null;const astralIdentifierStartCodes=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,4,51,13,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,39,27,10,22,251,41,7,1,17,2,60,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,20,1,64,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,31,9,2,0,3,0,2,37,2,0,26,0,2,0,45,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,200,32,32,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,16,0,2,12,2,33,125,0,80,921,103,110,18,195,2637,96,16,1071,18,5,26,3994,6,582,6842,29,1763,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,433,44,212,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,42,9,8936,3,2,6,2,1,2,290,16,0,30,2,3,0,15,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,7,5,262,61,147,44,11,6,17,0,322,29,19,43,485,27,229,29,3,0,496,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4153,7,221,3,5761,15,7472,16,621,2467,541,1507,4938,6,4191],astralIdentifierCodes=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,7,9,32,4,318,1,80,3,71,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,3,0,158,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,68,8,2,0,3,0,2,3,2,4,2,0,15,1,83,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,7,19,58,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,343,9,54,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,10,1,2,0,49,6,4,4,14,10,5350,0,7,14,11465,27,2343,9,87,9,39,4,60,6,26,9,535,9,470,0,2,54,8,3,82,0,12,1,19628,1,4178,9,519,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,101,0,161,6,10,9,357,0,62,13,499,13,245,1,2,9,726,6,110,6,6,9,4759,9,787719,239];function isInAstralSet(Q,e){let t=65536;for(let s=0,n=e.length;s<n;s+=2){if(t+=e[s],t>Q)return!1;if(t+=e[s+1],t>=Q)return!0}return!1}function isIdentifierStart(Q){return Q<65?Q===36:Q<=90?!0:Q<97?Q===95:Q<=122?!0:Q<=65535?Q>=170&&nonASCIIidentifierStart.test(String.fromCharCode(Q)):isInAstralSet(Q,astralIdentifierStartCodes)}function isIdentifierChar(Q){return Q<48?Q===36:Q<58?!0:Q<65?!1:Q<=90?!0:Q<97?Q===95:Q<=122?!0:Q<=65535?Q>=170&&nonASCIIidentifier.test(String.fromCharCode(Q)):isInAstralSet(Q,astralIdentifierStartCodes)||isInAstralSet(Q,astralIdentifierCodes)}const reservedWords={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]},keywords=new Set(reservedWords.keyword),reservedWordsStrictSet=new Set(reservedWords.strict),reservedWordsStrictBindSet=new Set(reservedWords.strictBind);function isReservedWord(Q,e){return e&&Q==="await"||Q==="enum"}function isStrictReservedWord(Q,e){return isReservedWord(Q,e)||reservedWordsStrictSet.has(Q)}function isStrictBindOnlyReservedWord(Q){return reservedWordsStrictBindSet.has(Q)}function isStrictBindReservedWord(Q,e){return isStrictReservedWord(Q,e)||isStrictBindOnlyReservedWord(Q)}function isKeyword(Q){return keywords.has(Q)}function isIteratorStart(Q,e,t){return Q===64&&e===64&&isIdentifierStart(t)}const reservedWordLikeSet=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete","implements","interface","let","package","private","protected","public","static","yield","eval","arguments","enum","await"]);function canBeReservedWord(Q){return reservedWordLikeSet.has(Q)}class Scope{constructor(e){this.flags=0,this.names=new Map,this.firstLexicalName="",this.flags=e}}class ScopeHandler{constructor(e,t){this.parser=void 0,this.scopeStack=[],this.inModule=void 0,this.undefinedExports=new Map,this.parser=e,this.inModule=t}get inTopLevel(){return(this.currentScope().flags&1)>0}get inFunction(){return(this.currentVarScopeFlags()&2)>0}get allowSuper(){return(this.currentThisScopeFlags()&16)>0}get allowDirectSuper(){return(this.currentThisScopeFlags()&32)>0}get inClass(){return(this.currentThisScopeFlags()&64)>0}get inClassAndNotInNonArrowFunction(){const e=this.currentThisScopeFlags();return(e&64)>0&&(e&2)===0}get inStaticBlock(){for(let e=this.scopeStack.length-1;;e--){const{flags:t}=this.scopeStack[e];if(t&128)return!0;if(t&451)return!1}}get inNonArrowFunction(){return(this.currentThisScopeFlags()&2)>0}get treatFunctionsAsVar(){return this.treatFunctionsAsVarInScope(this.currentScope())}createScope(e){return new Scope(e)}enter(e){this.scopeStack.push(this.createScope(e))}exit(){return this.scopeStack.pop().flags}treatFunctionsAsVarInScope(e){return!!(e.flags&130||!this.parser.inModule&&e.flags&1)}declareName(e,t,s){let n=this.currentScope();if(t&8||t&16){this.checkRedeclarationInScope(n,e,t,s);let i=n.names.get(e)||0;t&16?i=i|4:(n.firstLexicalName||(n.firstLexicalName=e),i=i|2),n.names.set(e,i),t&8&&this.maybeExportDefined(n,e)}else if(t&4)for(let i=this.scopeStack.length-1;i>=0&&(n=this.scopeStack[i],this.checkRedeclarationInScope(n,e,t,s),n.names.set(e,(n.names.get(e)||0)|1),this.maybeExportDefined(n,e),!(n.flags&387));--i);this.parser.inModule&&n.flags&1&&this.undefinedExports.delete(e)}maybeExportDefined(e,t){this.parser.inModule&&e.flags&1&&this.undefinedExports.delete(t)}checkRedeclarationInScope(e,t,s,n){this.isRedeclaredInScope(e,t,s)&&this.parser.raise(Errors.VarRedeclaration,n,{identifierName:t})}isRedeclaredInScope(e,t,s){if(!(s&1))return!1;if(s&8)return e.names.has(t);const n=e.names.get(t);return s&16?(n&2)>0||!this.treatFunctionsAsVarInScope(e)&&(n&1)>0:(n&2)>0&&!(e.flags&8&&e.firstLexicalName===t)||!this.treatFunctionsAsVarInScope(e)&&(n&4)>0}checkLocalExport(e){const{name:t}=e;this.scopeStack[0].names.has(t)||this.undefinedExports.set(t,e.loc.start)}currentScope(){return this.scopeStack[this.scopeStack.length-1]}currentVarScopeFlags(){for(let e=this.scopeStack.length-1;;e--){const{flags:t}=this.scopeStack[e];if(t&387)return t}}currentThisScopeFlags(){for(let e=this.scopeStack.length-1;;e--){const{flags:t}=this.scopeStack[e];if(t&451&&!(t&4))return t}}}class FlowScope extends Scope{constructor(...e){super(...e),this.declareFunctions=new Set}}class FlowScopeHandler extends ScopeHandler{createScope(e){return new FlowScope(e)}declareName(e,t,s){const n=this.currentScope();if(t&2048){this.checkRedeclarationInScope(n,e,t,s),this.maybeExportDefined(n,e),n.declareFunctions.add(e);return}super.declareName(e,t,s)}isRedeclaredInScope(e,t,s){if(super.isRedeclaredInScope(e,t,s))return!0;if(s&2048&&!e.declareFunctions.has(t)){const n=e.names.get(t);return(n&4)>0||(n&2)>0}return!1}checkLocalExport(e){this.scopeStack[0].declareFunctions.has(e.name)||super.checkLocalExport(e)}}class BaseParser{constructor(){this.sawUnambiguousESM=!1,this.ambiguousScriptDifferentAst=!1}sourceToOffsetPos(e){return e+this.startIndex}offsetToSourcePos(e){return e-this.startIndex}hasPlugin(e){if(typeof e=="string")return this.plugins.has(e);{const[t,s]=e;if(!this.hasPlugin(t))return!1;const n=this.plugins.get(t);for(const i of Object.keys(s))if((n==null?void 0:n[i])!==s[i])return!1;return!0}}getPluginOption(e,t){var s;return(s=this.plugins.get(e))==null?void 0:s[t]}}function setTrailingComments(Q,e){Q.trailingComments===void 0?Q.trailingComments=e:Q.trailingComments.unshift(...e)}function setLeadingComments(Q,e){Q.leadingComments===void 0?Q.leadingComments=e:Q.leadingComments.unshift(...e)}function setInnerComments(Q,e){Q.innerComments===void 0?Q.innerComments=e:Q.innerComments.unshift(...e)}function adjustInnerComments(Q,e,t){let s=null,n=e.length;for(;s===null&&n>0;)s=e[--n];s===null||s.start>t.start?setInnerComments(Q,t.comments):setTrailingComments(s,t.comments)}class CommentsParser extends BaseParser{addComment(e){this.filename&&(e.loc.filename=this.filename);const{commentsLen:t}=this.state;this.comments.length!==t&&(this.comments.length=t),this.comments.push(e),this.state.commentsLen++}processComment(e){const{commentStack:t}=this.state,s=t.length;if(s===0)return;let n=s-1;const i=t[n];i.start===e.end&&(i.leadingNode=e,n--);const{start:U}=e;for(;n>=0;n--){const g=t[n],F=g.end;if(F>U)g.containingNode=e,this.finalizeComment(g),t.splice(n,1);else{F===U&&(g.trailingNode=e);break}}}finalizeComment(e){const{comments:t}=e;if(e.leadingNode!==null||e.trailingNode!==null)e.leadingNode!==null&&setTrailingComments(e.leadingNode,t),e.trailingNode!==null&&setLeadingComments(e.trailingNode,t);else{const{containingNode:s,start:n}=e;if(this.input.charCodeAt(this.offsetToSourcePos(n)-1)===44)switch(s.type){case"ObjectExpression":case"ObjectPattern":case"RecordExpression":adjustInnerComments(s,s.properties,e);break;case"CallExpression":case"OptionalCallExpression":adjustInnerComments(s,s.arguments,e);break;case"FunctionDeclaration":case"FunctionExpression":case"ArrowFunctionExpression":case"ObjectMethod":case"ClassMethod":case"ClassPrivateMethod":adjustInnerComments(s,s.params,e);break;case"ArrayExpression":case"ArrayPattern":case"TupleExpression":adjustInnerComments(s,s.elements,e);break;case"ExportNamedDeclaration":case"ImportDeclaration":adjustInnerComments(s,s.specifiers,e);break;default:setInnerComments(s,t)}else setInnerComments(s,t)}}finalizeRemainingComments(){const{commentStack:e}=this.state;for(let t=e.length-1;t>=0;t--)this.finalizeComment(e[t]);this.state.commentStack=[]}resetPreviousNodeTrailingComments(e){const{commentStack:t}=this.state,{length:s}=t;if(s===0)return;const n=t[s-1];n.leadingNode===e&&(n.leadingNode=null)}resetPreviousIdentifierLeadingComments(e){const{commentStack:t}=this.state,{length:s}=t;s!==0&&(t[s-1].trailingNode===e?t[s-1].trailingNode=null:s>=2&&t[s-2].trailingNode===e&&(t[s-2].trailingNode=null))}takeSurroundingComments(e,t,s){const{commentStack:n}=this.state,i=n.length;if(i===0)return;let U=i-1;for(;U>=0;U--){const g=n[U],F=g.end;if(g.start===s)g.leadingNode=e;else if(F===t)g.trailingNode=e;else if(F<t)break}}}const lineBreak=/\r\n|[\r\n\u2028\u2029]/,lineBreakG=new RegExp(lineBreak.source,"g");function isNewLine(Q){switch(Q){case 10:case 13:case 8232:case 8233:return!0;default:return!1}}function hasNewLine(Q,e,t){for(let s=e;s<t;s++)if(isNewLine(Q.charCodeAt(s)))return!0;return!1}const skipWhiteSpace=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,skipWhiteSpaceInLine=/(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;function isWhitespace(Q){switch(Q){case 9:case 11:case 12:case 32:case 160:case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8239:case 8287:case 12288:case 65279:return!0;default:return!1}}class State{constructor(){this.flags=1024,this.startIndex=void 0,this.curLine=void 0,this.lineStart=void 0,this.startLoc=void 0,this.endLoc=void 0,this.errors=[],this.potentialArrowAt=-1,this.noArrowAt=[],this.noArrowParamsConversionAt=[],this.topicContext={maxNumOfResolvableTopics:0,maxTopicIndex:null},this.labels=[],this.commentsLen=0,this.commentStack=[],this.pos=0,this.type=140,this.value=null,this.start=0,this.end=0,this.lastTokEndLoc=null,this.lastTokStartLoc=null,this.context=[types.brace],this.firstInvalidTemplateEscapePos=null,this.strictErrors=new Map,this.tokensLength=0}get strict(){return(this.flags&1)>0}set strict(e){e?this.flags|=1:this.flags&=-2}init({strictMode:e,sourceType:t,startIndex:s,startLine:n,startColumn:i}){this.strict=e===!1?!1:e===!0?!0:t==="module",this.startIndex=s,this.curLine=n,this.lineStart=-i,this.startLoc=this.endLoc=new Position(n,i,s)}get maybeInArrowParameters(){return(this.flags&2)>0}set maybeInArrowParameters(e){e?this.flags|=2:this.flags&=-3}get inType(){return(this.flags&4)>0}set inType(e){e?this.flags|=4:this.flags&=-5}get noAnonFunctionType(){return(this.flags&8)>0}set noAnonFunctionType(e){e?this.flags|=8:this.flags&=-9}get hasFlowComment(){return(this.flags&16)>0}set hasFlowComment(e){e?this.flags|=16:this.flags&=-17}get isAmbientContext(){return(this.flags&32)>0}set isAmbientContext(e){e?this.flags|=32:this.flags&=-33}get inAbstractClass(){return(this.flags&64)>0}set inAbstractClass(e){e?this.flags|=64:this.flags&=-65}get inDisallowConditionalTypesContext(){return(this.flags&128)>0}set inDisallowConditionalTypesContext(e){e?this.flags|=128:this.flags&=-129}get soloAwait(){return(this.flags&256)>0}set soloAwait(e){e?this.flags|=256:this.flags&=-257}get inFSharpPipelineDirectBody(){return(this.flags&512)>0}set inFSharpPipelineDirectBody(e){e?this.flags|=512:this.flags&=-513}get canStartJSXElement(){return(this.flags&1024)>0}set canStartJSXElement(e){e?this.flags|=1024:this.flags&=-1025}get containsEsc(){return(this.flags&2048)>0}set containsEsc(e){e?this.flags|=2048:this.flags&=-2049}get hasTopLevelAwait(){return(this.flags&4096)>0}set hasTopLevelAwait(e){e?this.flags|=4096:this.flags&=-4097}curPosition(){return new Position(this.curLine,this.pos-this.lineStart,this.pos+this.startIndex)}clone(){const e=new State;return e.flags=this.flags,e.startIndex=this.startIndex,e.curLine=this.curLine,e.lineStart=this.lineStart,e.startLoc=this.startLoc,e.endLoc=this.endLoc,e.errors=this.errors.slice(),e.potentialArrowAt=this.potentialArrowAt,e.noArrowAt=this.noArrowAt.slice(),e.noArrowParamsConversionAt=this.noArrowParamsConversionAt.slice(),e.topicContext=this.topicContext,e.labels=this.labels.slice(),e.commentsLen=this.commentsLen,e.commentStack=this.commentStack.slice(),e.pos=this.pos,e.type=this.type,e.value=this.value,e.start=this.start,e.end=this.end,e.lastTokEndLoc=this.lastTokEndLoc,e.lastTokStartLoc=this.lastTokStartLoc,e.context=this.context.slice(),e.firstInvalidTemplateEscapePos=this.firstInvalidTemplateEscapePos,e.strictErrors=this.strictErrors,e.tokensLength=this.tokensLength,e}}var _isDigit=function Q(e){return e>=48&&e<=57};const forbiddenNumericSeparatorSiblings={decBinOct:new Set([46,66,69,79,95,98,101,111]),hex:new Set([46,88,95,120])},isAllowedNumericSeparatorSibling={bin:Q=>Q===48||Q===49,oct:Q=>Q>=48&&Q<=55,dec:Q=>Q>=48&&Q<=57,hex:Q=>Q>=48&&Q<=57||Q>=65&&Q<=70||Q>=97&&Q<=102};function readStringContents(Q,e,t,s,n,i){const U=t,g=s,F=n;let B="",r=null,I=t;const{length:C}=e;for(;;){if(t>=C){i.unterminated(U,g,F),B+=e.slice(I,t);break}const o=e.charCodeAt(t);if(isStringEnd(Q,o,e,t)){B+=e.slice(I,t);break}if(o===92){B+=e.slice(I,t);const l=readEscapedChar(e,t,s,n,Q==="template",i);l.ch===null&&!r?r={pos:t,lineStart:s,curLine:n}:B+=l.ch,{pos:t,lineStart:s,curLine:n}=l,I=t}else o===8232||o===8233?(++t,++n,s=t):o===10||o===13?Q==="template"?(B+=e.slice(I,t)+`
`,++t,o===13&&e.charCodeAt(t)===10&&++t,++n,I=s=t):i.unterminated(U,g,F):++t}return{pos:t,str:B,firstInvalidLoc:r,lineStart:s,curLine:n,containsInvalid:!!r}}function isStringEnd(Q,e,t,s){return Q==="template"?e===96||e===36&&t.charCodeAt(s+1)===123:e===(Q==="double"?34:39)}function readEscapedChar(Q,e,t,s,n,i){const U=!n;e++;const g=B=>({pos:e,ch:B,lineStart:t,curLine:s}),F=Q.charCodeAt(e++);switch(F){case 110:return g(`
`);case 114:return g("\r");case 120:{let B;return{code:B,pos:e}=readHexChar(Q,e,t,s,2,!1,U,i),g(B===null?null:String.fromCharCode(B))}case 117:{let B;return{code:B,pos:e}=readCodePoint(Q,e,t,s,U,i),g(B===null?null:String.fromCodePoint(B))}case 116:return g("	");case 98:return g("\b");case 118:return g("\v");case 102:return g("\f");case 13:Q.charCodeAt(e)===10&&++e;case 10:t=e,++s;case 8232:case 8233:return g("");case 56:case 57:if(n)return g(null);i.strictNumericEscape(e-1,t,s);default:if(F>=48&&F<=55){const B=e-1;let I=/^[0-7]+/.exec(Q.slice(B,e+2))[0],C=parseInt(I,8);C>255&&(I=I.slice(0,-1),C=parseInt(I,8)),e+=I.length-1;const o=Q.charCodeAt(e);if(I!=="0"||o===56||o===57){if(n)return g(null);i.strictNumericEscape(B,t,s)}return g(String.fromCharCode(C))}return g(String.fromCharCode(F))}}function readHexChar(Q,e,t,s,n,i,U,g){const F=e;let B;return{n:B,pos:e}=readInt(Q,e,t,s,16,n,i,!1,g,!U),B===null&&(U?g.invalidEscapeSequence(F,t,s):e=F-1),{code:B,pos:e}}function readInt(Q,e,t,s,n,i,U,g,F,B){const r=e,I=n===16?forbiddenNumericSeparatorSiblings.hex:forbiddenNumericSeparatorSiblings.decBinOct,C=n===16?isAllowedNumericSeparatorSibling.hex:n===10?isAllowedNumericSeparatorSibling.dec:n===8?isAllowedNumericSeparatorSibling.oct:isAllowedNumericSeparatorSibling.bin;let o=!1,l=0;for(let A=0,f=i??1/0;A<f;++A){const d=Q.charCodeAt(e);let N;if(d===95&&g!=="bail"){const y=Q.charCodeAt(e-1),R=Q.charCodeAt(e+1);if(g){if(Number.isNaN(R)||!C(R)||I.has(y)||I.has(R)){if(B)return{n:null,pos:e};F.unexpectedNumericSeparator(e,t,s)}}else{if(B)return{n:null,pos:e};F.numericSeparatorInEscapeSequence(e,t,s)}++e;continue}if(d>=97?N=d-97+10:d>=65?N=d-65+10:_isDigit(d)?N=d-48:N=1/0,N>=n){if(N<=9&&B)return{n:null,pos:e};if(N<=9&&F.invalidDigit(e,t,s,n))N=0;else if(U)N=0,o=!0;else break}++e,l=l*n+N}return e===r||i!=null&&e-r!==i||o?{n:null,pos:e}:{n:l,pos:e}}function readCodePoint(Q,e,t,s,n,i){const U=Q.charCodeAt(e);let g;if(U===123){if(++e,{code:g,pos:e}=readHexChar(Q,e,t,s,Q.indexOf("}",e)-e,!0,n,i),++e,g!==null&&g>1114111)if(n)i.invalidCodePoint(e,t,s);else return{code:null,pos:e}}else({code:g,pos:e}=readHexChar(Q,e,t,s,4,!1,n,i));return{code:g,pos:e}}function buildPosition(Q,e,t){return new Position(t,Q-e,Q)}const VALID_REGEX_FLAGS=new Set([103,109,115,105,121,117,100,118]);class Token{constructor(e){const t=e.startIndex||0;this.type=e.type,this.value=e.value,this.start=t+e.start,this.end=t+e.end,this.loc=new SourceLocation(e.startLoc,e.endLoc)}}class Tokenizer extends CommentsParser{constructor(e,t){super(),this.isLookahead=void 0,this.tokens=[],this.errorHandlers_readInt={invalidDigit:(s,n,i,U)=>this.options.errorRecovery?(this.raise(Errors.InvalidDigit,buildPosition(s,n,i),{radix:U}),!0):!1,numericSeparatorInEscapeSequence:this.errorBuilder(Errors.NumericSeparatorInEscapeSequence),unexpectedNumericSeparator:this.errorBuilder(Errors.UnexpectedNumericSeparator)},this.errorHandlers_readCodePoint=Object.assign({},this.errorHandlers_readInt,{invalidEscapeSequence:this.errorBuilder(Errors.InvalidEscapeSequence),invalidCodePoint:this.errorBuilder(Errors.InvalidCodePoint)}),this.errorHandlers_readStringContents_string=Object.assign({},this.errorHandlers_readCodePoint,{strictNumericEscape:(s,n,i)=>{this.recordStrictModeErrors(Errors.StrictNumericEscape,buildPosition(s,n,i))},unterminated:(s,n,i)=>{throw this.raise(Errors.UnterminatedString,buildPosition(s-1,n,i))}}),this.errorHandlers_readStringContents_template=Object.assign({},this.errorHandlers_readCodePoint,{strictNumericEscape:this.errorBuilder(Errors.StrictNumericEscape),unterminated:(s,n,i)=>{throw this.raise(Errors.UnterminatedTemplate,buildPosition(s,n,i))}}),this.state=new State,this.state.init(e),this.input=t,this.length=t.length,this.comments=[],this.isLookahead=!1}pushToken(e){this.tokens.length=this.state.tokensLength,this.tokens.push(e),++this.state.tokensLength}next(){this.checkKeywordEscapes(),this.options.tokens&&this.pushToken(new Token(this.state)),this.state.lastTokEndLoc=this.state.endLoc,this.state.lastTokStartLoc=this.state.startLoc,this.nextToken()}eat(e){return this.match(e)?(this.next(),!0):!1}match(e){return this.state.type===e}createLookaheadState(e){return{pos:e.pos,value:null,type:e.type,start:e.start,end:e.end,context:[this.curContext()],inType:e.inType,startLoc:e.startLoc,lastTokEndLoc:e.lastTokEndLoc,curLine:e.curLine,lineStart:e.lineStart,curPosition:e.curPosition}}lookahead(){const e=this.state;this.state=this.createLookaheadState(e),this.isLookahead=!0,this.nextToken(),this.isLookahead=!1;const t=this.state;return this.state=e,t}nextTokenStart(){return this.nextTokenStartSince(this.state.pos)}nextTokenStartSince(e){return skipWhiteSpace.lastIndex=e,skipWhiteSpace.test(this.input)?skipWhiteSpace.lastIndex:e}lookaheadCharCode(){return this.input.charCodeAt(this.nextTokenStart())}nextTokenInLineStart(){return this.nextTokenInLineStartSince(this.state.pos)}nextTokenInLineStartSince(e){return skipWhiteSpaceInLine.lastIndex=e,skipWhiteSpaceInLine.test(this.input)?skipWhiteSpaceInLine.lastIndex:e}lookaheadInLineCharCode(){return this.input.charCodeAt(this.nextTokenInLineStart())}codePointAtPos(e){let t=this.input.charCodeAt(e);if((t&64512)===55296&&++e<this.input.length){const s=this.input.charCodeAt(e);(s&64512)===56320&&(t=65536+((t&1023)<<10)+(s&1023))}return t}setStrict(e){this.state.strict=e,e&&(this.state.strictErrors.forEach(([t,s])=>this.raise(t,s)),this.state.strictErrors.clear())}curContext(){return this.state.context[this.state.context.length-1]}nextToken(){if(this.skipSpace(),this.state.start=this.state.pos,this.isLookahead||(this.state.startLoc=this.state.curPosition()),this.state.pos>=this.length){this.finishToken(140);return}this.getTokenFromCode(this.codePointAtPos(this.state.pos))}skipBlockComment(e){let t;this.isLookahead||(t=this.state.curPosition());const s=this.state.pos,n=this.input.indexOf(e,s+2);if(n===-1)throw this.raise(Errors.UnterminatedComment,this.state.curPosition());for(this.state.pos=n+e.length,lineBreakG.lastIndex=s+2;lineBreakG.test(this.input)&&lineBreakG.lastIndex<=n;)++this.state.curLine,this.state.lineStart=lineBreakG.lastIndex;if(this.isLookahead)return;const i={type:"CommentBlock",value:this.input.slice(s+2,n),start:this.sourceToOffsetPos(s),end:this.sourceToOffsetPos(n+e.length),loc:new SourceLocation(t,this.state.curPosition())};return this.options.tokens&&this.pushToken(i),i}skipLineComment(e){const t=this.state.pos;let s;this.isLookahead||(s=this.state.curPosition());let n=this.input.charCodeAt(this.state.pos+=e);if(this.state.pos<this.length)for(;!isNewLine(n)&&++this.state.pos<this.length;)n=this.input.charCodeAt(this.state.pos);if(this.isLookahead)return;const i=this.state.pos,g={type:"CommentLine",value:this.input.slice(t+e,i),start:this.sourceToOffsetPos(t),end:this.sourceToOffsetPos(i),loc:new SourceLocation(s,this.state.curPosition())};return this.options.tokens&&this.pushToken(g),g}skipSpace(){const e=this.state.pos,t=[];t:for(;this.state.pos<this.length;){const s=this.input.charCodeAt(this.state.pos);switch(s){case 32:case 160:case 9:++this.state.pos;break;case 13:this.input.charCodeAt(this.state.pos+1)===10&&++this.state.pos;case 10:case 8232:case 8233:++this.state.pos,++this.state.curLine,this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:{const n=this.skipBlockComment("*/");n!==void 0&&(this.addComment(n),this.options.attachComment&&t.push(n));break}case 47:{const n=this.skipLineComment(2);n!==void 0&&(this.addComment(n),this.options.attachComment&&t.push(n));break}default:break t}break;default:if(isWhitespace(s))++this.state.pos;else if(s===45&&!this.inModule&&this.options.annexB){const n=this.state.pos;if(this.input.charCodeAt(n+1)===45&&this.input.charCodeAt(n+2)===62&&(e===0||this.state.lineStart>e)){const i=this.skipLineComment(3);i!==void 0&&(this.addComment(i),this.options.attachComment&&t.push(i))}else break t}else if(s===60&&!this.inModule&&this.options.annexB){const n=this.state.pos;if(this.input.charCodeAt(n+1)===33&&this.input.charCodeAt(n+2)===45&&this.input.charCodeAt(n+3)===45){const i=this.skipLineComment(4);i!==void 0&&(this.addComment(i),this.options.attachComment&&t.push(i))}else break t}else break t}}if(t.length>0){const s=this.state.pos,n={start:this.sourceToOffsetPos(e),end:this.sourceToOffsetPos(s),comments:t,leadingNode:null,trailingNode:null,containingNode:null};this.state.commentStack.push(n)}}finishToken(e,t){this.state.end=this.state.pos,this.state.endLoc=this.state.curPosition();const s=this.state.type;this.state.type=e,this.state.value=t,this.isLookahead||this.updateContext(s)}replaceToken(e){this.state.type=e,this.updateContext()}readToken_numberSign(){if(this.state.pos===0&&this.readToken_interpreter())return;const e=this.state.pos+1,t=this.codePointAtPos(e);if(t>=48&&t<=57)throw this.raise(Errors.UnexpectedDigitAfterHash,this.state.curPosition());if(t===123||t===91&&this.hasPlugin("recordAndTuple")){if(this.expectPlugin("recordAndTuple"),this.getPluginOption("recordAndTuple","syntaxType")==="bar")throw this.raise(t===123?Errors.RecordExpressionHashIncorrectStartSyntaxType:Errors.TupleExpressionHashIncorrectStartSyntaxType,this.state.curPosition());this.state.pos+=2,t===123?this.finishToken(7):this.finishToken(1)}else isIdentifierStart(t)?(++this.state.pos,this.finishToken(139,this.readWord1(t))):t===92?(++this.state.pos,this.finishToken(139,this.readWord1())):this.finishOp(27,1)}readToken_dot(){const e=this.input.charCodeAt(this.state.pos+1);if(e>=48&&e<=57){this.readNumber(!0);return}e===46&&this.input.charCodeAt(this.state.pos+2)===46?(this.state.pos+=3,this.finishToken(21)):(++this.state.pos,this.finishToken(16))}readToken_slash(){this.input.charCodeAt(this.state.pos+1)===61?this.finishOp(31,2):this.finishOp(56,1)}readToken_interpreter(){if(this.state.pos!==0||this.length<2)return!1;let e=this.input.charCodeAt(this.state.pos+1);if(e!==33)return!1;const t=this.state.pos;for(this.state.pos+=1;!isNewLine(e)&&++this.state.pos<this.length;)e=this.input.charCodeAt(this.state.pos);const s=this.input.slice(t+2,this.state.pos);return this.finishToken(28,s),!0}readToken_mult_modulo(e){let t=e===42?55:54,s=1,n=this.input.charCodeAt(this.state.pos+1);e===42&&n===42&&(s++,n=this.input.charCodeAt(this.state.pos+2),t=57),n===61&&!this.state.inType&&(s++,t=e===37?33:30),this.finishOp(t,s)}readToken_pipe_amp(e){const t=this.input.charCodeAt(this.state.pos+1);if(t===e){this.input.charCodeAt(this.state.pos+2)===61?this.finishOp(30,3):this.finishOp(e===124?41:42,2);return}if(e===124){if(t===62){this.finishOp(39,2);return}if(this.hasPlugin("recordAndTuple")&&t===125){if(this.getPluginOption("recordAndTuple","syntaxType")!=="bar")throw this.raise(Errors.RecordExpressionBarIncorrectEndSyntaxType,this.state.curPosition());this.state.pos+=2,this.finishToken(9);return}if(this.hasPlugin("recordAndTuple")&&t===93){if(this.getPluginOption("recordAndTuple","syntaxType")!=="bar")throw this.raise(Errors.TupleExpressionBarIncorrectEndSyntaxType,this.state.curPosition());this.state.pos+=2,this.finishToken(4);return}}if(t===61){this.finishOp(30,2);return}this.finishOp(e===124?43:45,1)}readToken_caret(){const e=this.input.charCodeAt(this.state.pos+1);e===61&&!this.state.inType?this.finishOp(32,2):e===94&&this.hasPlugin(["pipelineOperator",{proposal:"hack",topicToken:"^^"}])?(this.finishOp(37,2),this.input.codePointAt(this.state.pos)===94&&this.unexpected()):this.finishOp(44,1)}readToken_atSign(){this.input.charCodeAt(this.state.pos+1)===64&&this.hasPlugin(["pipelineOperator",{proposal:"hack",topicToken:"@@"}])?this.finishOp(38,2):this.finishOp(26,1)}readToken_plus_min(e){const t=this.input.charCodeAt(this.state.pos+1);if(t===e){this.finishOp(34,2);return}t===61?this.finishOp(30,2):this.finishOp(53,1)}readToken_lt(){const{pos:e}=this.state,t=this.input.charCodeAt(e+1);if(t===60){if(this.input.charCodeAt(e+2)===61){this.finishOp(30,3);return}this.finishOp(51,2);return}if(t===61){this.finishOp(49,2);return}this.finishOp(47,1)}readToken_gt(){const{pos:e}=this.state,t=this.input.charCodeAt(e+1);if(t===62){const s=this.input.charCodeAt(e+2)===62?3:2;if(this.input.charCodeAt(e+s)===61){this.finishOp(30,s+1);return}this.finishOp(52,s);return}if(t===61){this.finishOp(49,2);return}this.finishOp(48,1)}readToken_eq_excl(e){const t=this.input.charCodeAt(this.state.pos+1);if(t===61){this.finishOp(46,this.input.charCodeAt(this.state.pos+2)===61?3:2);return}if(e===61&&t===62){this.state.pos+=2,this.finishToken(19);return}this.finishOp(e===61?29:35,1)}readToken_question(){const e=this.input.charCodeAt(this.state.pos+1),t=this.input.charCodeAt(this.state.pos+2);e===63?t===61?this.finishOp(30,3):this.finishOp(40,2):e===46&&!(t>=48&&t<=57)?(this.state.pos+=2,this.finishToken(18)):(++this.state.pos,this.finishToken(17))}getTokenFromCode(e){switch(e){case 46:this.readToken_dot();return;case 40:++this.state.pos,this.finishToken(10);return;case 41:++this.state.pos,this.finishToken(11);return;case 59:++this.state.pos,this.finishToken(13);return;case 44:++this.state.pos,this.finishToken(12);return;case 91:if(this.hasPlugin("recordAndTuple")&&this.input.charCodeAt(this.state.pos+1)===124){if(this.getPluginOption("recordAndTuple","syntaxType")!=="bar")throw this.raise(Errors.TupleExpressionBarIncorrectStartSyntaxType,this.state.curPosition());this.state.pos+=2,this.finishToken(2)}else++this.state.pos,this.finishToken(0);return;case 93:++this.state.pos,this.finishToken(3);return;case 123:if(this.hasPlugin("recordAndTuple")&&this.input.charCodeAt(this.state.pos+1)===124){if(this.getPluginOption("recordAndTuple","syntaxType")!=="bar")throw this.raise(Errors.RecordExpressionBarIncorrectStartSyntaxType,this.state.curPosition());this.state.pos+=2,this.finishToken(6)}else++this.state.pos,this.finishToken(5);return;case 125:++this.state.pos,this.finishToken(8);return;case 58:this.hasPlugin("functionBind")&&this.input.charCodeAt(this.state.pos+1)===58?this.finishOp(15,2):(++this.state.pos,this.finishToken(14));return;case 63:this.readToken_question();return;case 96:this.readTemplateToken();return;case 48:{const t=this.input.charCodeAt(this.state.pos+1);if(t===120||t===88){this.readRadixNumber(16);return}if(t===111||t===79){this.readRadixNumber(8);return}if(t===98||t===66){this.readRadixNumber(2);return}}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:this.readNumber(!1);return;case 34:case 39:this.readString(e);return;case 47:this.readToken_slash();return;case 37:case 42:this.readToken_mult_modulo(e);return;case 124:case 38:this.readToken_pipe_amp(e);return;case 94:this.readToken_caret();return;case 43:case 45:this.readToken_plus_min(e);return;case 60:this.readToken_lt();return;case 62:this.readToken_gt();return;case 61:case 33:this.readToken_eq_excl(e);return;case 126:this.finishOp(36,1);return;case 64:this.readToken_atSign();return;case 35:this.readToken_numberSign();return;case 92:this.readWord();return;default:if(isIdentifierStart(e)){this.readWord(e);return}}throw this.raise(Errors.InvalidOrUnexpectedToken,this.state.curPosition(),{unexpected:String.fromCodePoint(e)})}finishOp(e,t){const s=this.input.slice(this.state.pos,this.state.pos+t);this.state.pos+=t,this.finishToken(e,s)}readRegexp(){const e=this.state.startLoc,t=this.state.start+1;let s,n,{pos:i}=this.state;for(;;++i){if(i>=this.length)throw this.raise(Errors.UnterminatedRegExp,createPositionWithColumnOffset(e,1));const B=this.input.charCodeAt(i);if(isNewLine(B))throw this.raise(Errors.UnterminatedRegExp,createPositionWithColumnOffset(e,1));if(s)s=!1;else{if(B===91)n=!0;else if(B===93&&n)n=!1;else if(B===47&&!n)break;s=B===92}}const U=this.input.slice(t,i);++i;let g="";const F=()=>createPositionWithColumnOffset(e,i+2-t);for(;i<this.length;){const B=this.codePointAtPos(i),r=String.fromCharCode(B);if(VALID_REGEX_FLAGS.has(B))B===118?g.includes("u")&&this.raise(Errors.IncompatibleRegExpUVFlags,F()):B===117&&g.includes("v")&&this.raise(Errors.IncompatibleRegExpUVFlags,F()),g.includes(r)&&this.raise(Errors.DuplicateRegExpFlags,F());else if(isIdentifierChar(B)||B===92)this.raise(Errors.MalformedRegExpFlags,F());else break;++i,g+=r}this.state.pos=i,this.finishToken(138,{pattern:U,flags:g})}readInt(e,t,s=!1,n=!0){const{n:i,pos:U}=readInt(this.input,this.state.pos,this.state.lineStart,this.state.curLine,e,t,s,n,this.errorHandlers_readInt,!1);return this.state.pos=U,i}readRadixNumber(e){const t=this.state.pos,s=this.state.curPosition();let n=!1;this.state.pos+=2;const i=this.readInt(e);i==null&&this.raise(Errors.InvalidDigit,createPositionWithColumnOffset(s,2),{radix:e});const U=this.input.charCodeAt(this.state.pos);if(U===110)++this.state.pos,n=!0;else if(U===109)throw this.raise(Errors.InvalidDecimal,s);if(isIdentifierStart(this.codePointAtPos(this.state.pos)))throw this.raise(Errors.NumberIdentifier,this.state.curPosition());if(n){const g=this.input.slice(t,this.state.pos).replace(/[_n]/g,"");this.finishToken(136,g);return}this.finishToken(135,i)}readNumber(e){const t=this.state.pos,s=this.state.curPosition();let n=!1,i=!1,U=!1,g=!1;!e&&this.readInt(10)===null&&this.raise(Errors.InvalidNumber,this.state.curPosition());const F=this.state.pos-t>=2&&this.input.charCodeAt(t)===48;if(F){const o=this.input.slice(t,this.state.pos);if(this.recordStrictModeErrors(Errors.StrictOctalLiteral,s),!this.state.strict){const l=o.indexOf("_");l>0&&this.raise(Errors.ZeroDigitNumericSeparator,createPositionWithColumnOffset(s,l))}g=F&&!/[89]/.test(o)}let B=this.input.charCodeAt(this.state.pos);if(B===46&&!g&&(++this.state.pos,this.readInt(10),n=!0,B=this.input.charCodeAt(this.state.pos)),(B===69||B===101)&&!g&&(B=this.input.charCodeAt(++this.state.pos),(B===43||B===45)&&++this.state.pos,this.readInt(10)===null&&this.raise(Errors.InvalidOrMissingExponent,s),n=!0,U=!0,B=this.input.charCodeAt(this.state.pos)),B===110&&((n||F)&&this.raise(Errors.InvalidBigIntLiteral,s),++this.state.pos,i=!0),B===109){this.expectPlugin("decimal",this.state.curPosition()),(U||F)&&this.raise(Errors.InvalidDecimal,s),++this.state.pos;var r=!0}if(isIdentifierStart(this.codePointAtPos(this.state.pos)))throw this.raise(Errors.NumberIdentifier,this.state.curPosition());const I=this.input.slice(t,this.state.pos).replace(/[_mn]/g,"");if(i){this.finishToken(136,I);return}if(r){this.finishToken(137,I);return}const C=g?parseInt(I,8):parseFloat(I);this.finishToken(135,C)}readCodePoint(e){const{code:t,pos:s}=readCodePoint(this.input,this.state.pos,this.state.lineStart,this.state.curLine,e,this.errorHandlers_readCodePoint);return this.state.pos=s,t}readString(e){const{str:t,pos:s,curLine:n,lineStart:i}=readStringContents(e===34?"double":"single",this.input,this.state.pos+1,this.state.lineStart,this.state.curLine,this.errorHandlers_readStringContents_string);this.state.pos=s+1,this.state.lineStart=i,this.state.curLine=n,this.finishToken(134,t)}readTemplateContinuation(){this.match(8)||this.unexpected(null,8),this.state.pos--,this.readTemplateToken()}readTemplateToken(){const e=this.input[this.state.pos],{str:t,firstInvalidLoc:s,pos:n,curLine:i,lineStart:U}=readStringContents("template",this.input,this.state.pos+1,this.state.lineStart,this.state.curLine,this.errorHandlers_readStringContents_template);this.state.pos=n+1,this.state.lineStart=U,this.state.curLine=i,s&&(this.state.firstInvalidTemplateEscapePos=new Position(s.curLine,s.pos-s.lineStart,this.sourceToOffsetPos(s.pos))),this.input.codePointAt(n)===96?this.finishToken(24,s?null:e+t+"`"):(this.state.pos++,this.finishToken(25,s?null:e+t+"${"))}recordStrictModeErrors(e,t){const s=t.index;this.state.strict&&!this.state.strictErrors.has(s)?this.raise(e,t):this.state.strictErrors.set(s,[e,t])}readWord1(e){this.state.containsEsc=!1;let t="";const s=this.state.pos;let n=this.state.pos;for(e!==void 0&&(this.state.pos+=e<=65535?1:2);this.state.pos<this.length;){const i=this.codePointAtPos(this.state.pos);if(isIdentifierChar(i))this.state.pos+=i<=65535?1:2;else if(i===92){this.state.containsEsc=!0,t+=this.input.slice(n,this.state.pos);const U=this.state.curPosition(),g=this.state.pos===s?isIdentifierStart:isIdentifierChar;if(this.input.charCodeAt(++this.state.pos)!==117){this.raise(Errors.MissingUnicodeEscape,this.state.curPosition()),n=this.state.pos-1;continue}++this.state.pos;const F=this.readCodePoint(!0);F!==null&&(g(F)||this.raise(Errors.EscapedCharNotAnIdentifier,U),t+=String.fromCodePoint(F)),n=this.state.pos}else break}return t+this.input.slice(n,this.state.pos)}readWord(e){const t=this.readWord1(e),s=keywords$1.get(t);s!==void 0?this.finishToken(s,tokenLabelName(s)):this.finishToken(132,t)}checkKeywordEscapes(){const{type:e}=this.state;tokenIsKeyword(e)&&this.state.containsEsc&&this.raise(Errors.InvalidEscapedReservedWord,this.state.startLoc,{reservedWord:tokenLabelName(e)})}raise(e,t,s={}){const n=t instanceof Position?t:t.loc.start,i=e(n,s);if(!this.options.errorRecovery)throw i;return this.isLookahead||this.state.errors.push(i),i}raiseOverwrite(e,t,s={}){const n=t instanceof Position?t:t.loc.start,i=n.index,U=this.state.errors;for(let g=U.length-1;g>=0;g--){const F=U[g];if(F.loc.index===i)return U[g]=e(n,s);if(F.loc.index<i)break}return this.raise(e,t,s)}updateContext(e){}unexpected(e,t){throw this.raise(Errors.UnexpectedToken,e??this.state.startLoc,{expected:t?tokenLabelName(t):null})}expectPlugin(e,t){if(this.hasPlugin(e))return!0;throw this.raise(Errors.MissingPlugin,t??this.state.startLoc,{missingPlugin:[e]})}expectOnePlugin(e){if(!e.some(t=>this.hasPlugin(t)))throw this.raise(Errors.MissingOneOfPlugins,this.state.startLoc,{missingPlugin:e})}errorBuilder(e){return(t,s,n)=>{this.raise(e,buildPosition(t,s,n))}}}class ClassScope{constructor(){this.privateNames=new Set,this.loneAccessors=new Map,this.undefinedPrivateNames=new Map}}class ClassScopeHandler{constructor(e){this.parser=void 0,this.stack=[],this.undefinedPrivateNames=new Map,this.parser=e}current(){return this.stack[this.stack.length-1]}enter(){this.stack.push(new ClassScope)}exit(){const e=this.stack.pop(),t=this.current();for(const[s,n]of Array.from(e.undefinedPrivateNames))t?t.undefinedPrivateNames.has(s)||t.undefinedPrivateNames.set(s,n):this.parser.raise(Errors.InvalidPrivateFieldResolution,n,{identifierName:s})}declarePrivateName(e,t,s){const{privateNames:n,loneAccessors:i,undefinedPrivateNames:U}=this.current();let g=n.has(e);if(t&3){const F=g&&i.get(e);if(F){const B=F&4,r=t&4,I=F&3,C=t&3;g=I===C||B!==r,g||i.delete(e)}else g||i.set(e,t)}g&&this.parser.raise(Errors.PrivateNameRedeclaration,s,{identifierName:e}),n.add(e),U.delete(e)}usePrivateName(e,t){let s;for(s of this.stack)if(s.privateNames.has(e))return;s?s.undefinedPrivateNames.set(e,t):this.parser.raise(Errors.InvalidPrivateFieldResolution,t,{identifierName:e})}}class ExpressionScope{constructor(e=0){this.type=e}canBeArrowParameterDeclaration(){return this.type===2||this.type===1}isCertainlyParameterDeclaration(){return this.type===3}}class ArrowHeadParsingScope extends ExpressionScope{constructor(e){super(e),this.declarationErrors=new Map}recordDeclarationError(e,t){const s=t.index;this.declarationErrors.set(s,[e,t])}clearDeclarationError(e){this.declarationErrors.delete(e)}iterateErrors(e){this.declarationErrors.forEach(e)}}class ExpressionScopeHandler{constructor(e){this.parser=void 0,this.stack=[new ExpressionScope],this.parser=e}enter(e){this.stack.push(e)}exit(){this.stack.pop()}recordParameterInitializerError(e,t){const s=t.loc.start,{stack:n}=this;let i=n.length-1,U=n[i];for(;!U.isCertainlyParameterDeclaration();){if(U.canBeArrowParameterDeclaration())U.recordDeclarationError(e,s);else return;U=n[--i]}this.parser.raise(e,s)}recordArrowParameterBindingError(e,t){const{stack:s}=this,n=s[s.length-1],i=t.loc.start;if(n.isCertainlyParameterDeclaration())this.parser.raise(e,i);else if(n.canBeArrowParameterDeclaration())n.recordDeclarationError(e,i);else return}recordAsyncArrowParametersError(e){const{stack:t}=this;let s=t.length-1,n=t[s];for(;n.canBeArrowParameterDeclaration();)n.type===2&&n.recordDeclarationError(Errors.AwaitBindingIdentifier,e),n=t[--s]}validateAsPattern(){const{stack:e}=this,t=e[e.length-1];t.canBeArrowParameterDeclaration()&&t.iterateErrors(([s,n])=>{this.parser.raise(s,n);let i=e.length-2,U=e[i];for(;U.canBeArrowParameterDeclaration();)U.clearDeclarationError(n.index),U=e[--i]})}}function newParameterDeclarationScope(){return new ExpressionScope(3)}function newArrowHeadScope(){return new ArrowHeadParsingScope(1)}function newAsyncArrowScope(){return new ArrowHeadParsingScope(2)}function newExpressionScope(){return new ExpressionScope}class ProductionParameterHandler{constructor(){this.stacks=[]}enter(e){this.stacks.push(e)}exit(){this.stacks.pop()}currentFlags(){return this.stacks[this.stacks.length-1]}get hasAwait(){return(this.currentFlags()&2)>0}get hasYield(){return(this.currentFlags()&1)>0}get hasReturn(){return(this.currentFlags()&4)>0}get hasIn(){return(this.currentFlags()&8)>0}}function functionFlags(Q,e){return(Q?2:0)|(e?1:0)}class UtilParser extends Tokenizer{addExtra(e,t,s,n=!0){if(!e)return;let{extra:i}=e;i==null&&(i={},e.extra=i),n?i[t]=s:Object.defineProperty(i,t,{enumerable:n,value:s})}isContextual(e){return this.state.type===e&&!this.state.containsEsc}isUnparsedContextual(e,t){const s=e+t.length;if(this.input.slice(e,s)===t){const n=this.input.charCodeAt(s);return!(isIdentifierChar(n)||(n&64512)===55296)}return!1}isLookaheadContextual(e){const t=this.nextTokenStart();return this.isUnparsedContextual(t,e)}eatContextual(e){return this.isContextual(e)?(this.next(),!0):!1}expectContextual(e,t){if(!this.eatContextual(e)){if(t!=null)throw this.raise(t,this.state.startLoc);this.unexpected(null,e)}}canInsertSemicolon(){return this.match(140)||this.match(8)||this.hasPrecedingLineBreak()}hasPrecedingLineBreak(){return hasNewLine(this.input,this.offsetToSourcePos(this.state.lastTokEndLoc.index),this.state.start)}hasFollowingLineBreak(){return hasNewLine(this.input,this.state.end,this.nextTokenStart())}isLineTerminator(){return this.eat(13)||this.canInsertSemicolon()}semicolon(e=!0){(e?this.isLineTerminator():this.eat(13))||this.raise(Errors.MissingSemicolon,this.state.lastTokEndLoc)}expect(e,t){this.eat(e)||this.unexpected(t,e)}tryParse(e,t=this.state.clone()){const s={node:null};try{const n=e((i=null)=>{throw s.node=i,s});if(this.state.errors.length>t.errors.length){const i=this.state;return this.state=t,this.state.tokensLength=i.tokensLength,{node:n,error:i.errors[t.errors.length],thrown:!1,aborted:!1,failState:i}}return{node:n,error:null,thrown:!1,aborted:!1,failState:null}}catch(n){const i=this.state;if(this.state=t,n instanceof SyntaxError)return{node:null,error:n,thrown:!0,aborted:!1,failState:i};if(n===s)return{node:s.node,error:null,thrown:!1,aborted:!0,failState:i};throw n}}checkExpressionErrors(e,t){if(!e)return!1;const{shorthandAssignLoc:s,doubleProtoLoc:n,privateKeyLoc:i,optionalParametersLoc:U}=e,g=!!s||!!n||!!U||!!i;if(!t)return g;s!=null&&this.raise(Errors.InvalidCoverInitializedName,s),n!=null&&this.raise(Errors.DuplicateProto,n),i!=null&&this.raise(Errors.UnexpectedPrivateField,i),U!=null&&this.unexpected(U)}isLiteralPropertyName(){return tokenIsLiteralPropertyName(this.state.type)}isPrivateName(e){return e.type==="PrivateName"}getPrivateNameSV(e){return e.id.name}hasPropertyAsPrivateName(e){return(e.type==="MemberExpression"||e.type==="OptionalMemberExpression")&&this.isPrivateName(e.property)}isObjectProperty(e){return e.type==="ObjectProperty"}isObjectMethod(e){return e.type==="ObjectMethod"}initializeScopes(e=this.options.sourceType==="module"){const t=this.state.labels;this.state.labels=[];const s=this.exportedIdentifiers;this.exportedIdentifiers=new Set;const n=this.inModule;this.inModule=e;const i=this.scope,U=this.getScopeHandler();this.scope=new U(this,e);const g=this.prodParam;this.prodParam=new ProductionParameterHandler;const F=this.classScope;this.classScope=new ClassScopeHandler(this);const B=this.expressionScope;return this.expressionScope=new ExpressionScopeHandler(this),()=>{this.state.labels=t,this.exportedIdentifiers=s,this.inModule=n,this.scope=i,this.prodParam=g,this.classScope=F,this.expressionScope=B}}enterInitialScopes(){let e=0;this.inModule&&(e|=2),this.scope.enter(1),this.prodParam.enter(e)}checkDestructuringPrivate(e){const{privateKeyLoc:t}=e;t!==null&&this.expectPlugin("destructuringPrivate",t)}}class ExpressionErrors{constructor(){this.shorthandAssignLoc=null,this.doubleProtoLoc=null,this.privateKeyLoc=null,this.optionalParametersLoc=null}}let Node$1=class{constructor(e,t,s){this.type="",this.start=t,this.end=0,this.loc=new SourceLocation(s),e!=null&&e.options.ranges&&(this.range=[t,0]),e!=null&&e.filename&&(this.loc.filename=e.filename)}};const NodePrototype=Node$1.prototype;NodePrototype.__clone=function(){const Q=new Node$1(void 0,this.start,this.loc.start),e=Object.keys(this);for(let t=0,s=e.length;t<s;t++){const n=e[t];n!=="leadingComments"&&n!=="trailingComments"&&n!=="innerComments"&&(Q[n]=this[n])}return Q};function clonePlaceholder(Q){return cloneIdentifier(Q)}function cloneIdentifier(Q){const{type:e,start:t,end:s,loc:n,range:i,extra:U,name:g}=Q,F=Object.create(NodePrototype);return F.type=e,F.start=t,F.end=s,F.loc=n,F.range=i,F.extra=U,F.name=g,e==="Placeholder"&&(F.expectedNode=Q.expectedNode),F}function cloneStringLiteral(Q){const{type:e,start:t,end:s,loc:n,range:i,extra:U}=Q;if(e==="Placeholder")return clonePlaceholder(Q);const g=Object.create(NodePrototype);return g.type=e,g.start=t,g.end=s,g.loc=n,g.range=i,Q.raw!==void 0?g.raw=Q.raw:g.extra=U,g.value=Q.value,g}class NodeUtils extends UtilParser{startNode(){const e=this.state.startLoc;return new Node$1(this,e.index,e)}startNodeAt(e){return new Node$1(this,e.index,e)}startNodeAtNode(e){return this.startNodeAt(e.loc.start)}finishNode(e,t){return this.finishNodeAt(e,t,this.state.lastTokEndLoc)}finishNodeAt(e,t,s){return e.type=t,e.end=s.index,e.loc.end=s,this.options.ranges&&(e.range[1]=s.index),this.options.attachComment&&this.processComment(e),e}resetStartLocation(e,t){e.start=t.index,e.loc.start=t,this.options.ranges&&(e.range[0]=t.index)}resetEndLocation(e,t=this.state.lastTokEndLoc){e.end=t.index,e.loc.end=t,this.options.ranges&&(e.range[1]=t.index)}resetStartLocationFromNode(e,t){this.resetStartLocation(e,t.loc.start)}}const reservedTypes=new Set(["_","any","bool","boolean","empty","extends","false","interface","mixed","null","number","static","string","true","typeof","void"]),FlowErrors=ParseErrorEnum`flow`({AmbiguousConditionalArrow:"Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",AmbiguousDeclareModuleKind:"Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",AssignReservedType:({reservedType:Q})=>`Cannot overwrite reserved type ${Q}.`,DeclareClassElement:"The `declare` modifier can only appear on class fields.",DeclareClassFieldInitializer:"Initializers are not allowed in fields with the `declare` modifier.",DuplicateDeclareModuleExports:"Duplicate `declare module.exports` statement.",EnumBooleanMemberNotInitialized:({memberName:Q,enumName:e})=>`Boolean enum members need to be initialized. Use either \`${Q} = true,\` or \`${Q} = false,\` in enum \`${e}\`.`,EnumDuplicateMemberName:({memberName:Q,enumName:e})=>`Enum member names need to be unique, but the name \`${Q}\` has already been used before in enum \`${e}\`.`,EnumInconsistentMemberValues:({enumName:Q})=>`Enum \`${Q}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,EnumInvalidExplicitType:({invalidEnumType:Q,enumName:e})=>`Enum type \`${Q}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`,EnumInvalidExplicitTypeUnknownSupplied:({enumName:Q})=>`Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${Q}\`.`,EnumInvalidMemberInitializerPrimaryType:({enumName:Q,memberName:e,explicitType:t})=>`Enum \`${Q}\` has type \`${t}\`, so the initializer of \`${e}\` needs to be a ${t} literal.`,EnumInvalidMemberInitializerSymbolType:({enumName:Q,memberName:e})=>`Symbol enum members cannot be initialized. Use \`${e},\` in enum \`${Q}\`.`,EnumInvalidMemberInitializerUnknownType:({enumName:Q,memberName:e})=>`The enum member initializer for \`${e}\` needs to be a literal (either a boolean, number, or string) in enum \`${Q}\`.`,EnumInvalidMemberName:({enumName:Q,memberName:e,suggestion:t})=>`Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${e}\`, consider using \`${t}\`, in enum \`${Q}\`.`,EnumNumberMemberNotInitialized:({enumName:Q,memberName:e})=>`Number enum members need to be initialized, e.g. \`${e} = 1\` in enum \`${Q}\`.`,EnumStringMemberInconsistentlyInitialized:({enumName:Q})=>`String enum members need to consistently either all use initializers, or use no initializers, in enum \`${Q}\`.`,GetterMayNotHaveThisParam:"A getter cannot have a `this` parameter.",ImportReflectionHasImportType:"An `import module` declaration can not use `type` or `typeof` keyword.",ImportTypeShorthandOnlyInPureImport:"The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",InexactInsideExact:"Explicit inexact syntax cannot appear inside an explicit exact object type.",InexactInsideNonObject:"Explicit inexact syntax cannot appear in class or interface definitions.",InexactVariance:"Explicit inexact syntax cannot have variance.",InvalidNonTypeImportInDeclareModule:"Imports within a `declare module` body must always be `import type` or `import typeof`.",MissingTypeParamDefault:"Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",NestedDeclareModule:"`declare module` cannot be used inside another `declare module`.",NestedFlowComment:"Cannot have a flow comment inside another flow comment.",PatternIsOptional:Object.assign({message:"A binding pattern parameter cannot be optional in an implementation signature."},{reasonCode:"OptionalBindingPattern"}),SetterMayNotHaveThisParam:"A setter cannot have a `this` parameter.",SpreadVariance:"Spread properties cannot have variance.",ThisParamAnnotationRequired:"A type annotation is required for the `this` parameter.",ThisParamBannedInConstructor:"Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",ThisParamMayNotBeOptional:"The `this` parameter cannot be optional.",ThisParamMustBeFirst:"The `this` parameter must be the first function parameter.",ThisParamNoDefault:"The `this` parameter may not have a default value.",TypeBeforeInitializer:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeCastInPattern:"The type cast expression is expected to be wrapped with parenthesis.",UnexpectedExplicitInexactInObject:"Explicit inexact syntax must appear at the end of an inexact object.",UnexpectedReservedType:({reservedType:Q})=>`Unexpected reserved type ${Q}.`,UnexpectedReservedUnderscore:"`_` is only allowed as a type argument to call or new.",UnexpectedSpaceBetweenModuloChecks:"Spaces between `%` and `checks` are not allowed here.",UnexpectedSpreadType:"Spread operator cannot appear in class or interface definitions.",UnexpectedSubtractionOperand:'Unexpected token, expected "number" or "bigint".',UnexpectedTokenAfterTypeParameter:"Expected an arrow function after this type parameter declaration.",UnexpectedTypeParameterBeforeAsyncArrowFunction:"Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",UnsupportedDeclareExportKind:({unsupportedExportKind:Q,suggestion:e})=>`\`declare export ${Q}\` is not supported. Use \`${e}\` instead.`,UnsupportedStatementInDeclareModule:"Only declares and type imports are allowed inside declare module.",UnterminatedFlowComment:"Unterminated flow-comment."});function isEsModuleType(Q){return Q.type==="DeclareExportAllDeclaration"||Q.type==="DeclareExportDeclaration"&&(!Q.declaration||Q.declaration.type!=="TypeAlias"&&Q.declaration.type!=="InterfaceDeclaration")}function hasTypeImportKind(Q){return Q.importKind==="type"||Q.importKind==="typeof"}const exportSuggestions={const:"declare export var",let:"declare export var",type:"export type",interface:"export interface"};function partition(Q,e){const t=[],s=[];for(let n=0;n<Q.length;n++)(e(Q[n],n,Q)?t:s).push(Q[n]);return[t,s]}const FLOW_PRAGMA_REGEX=/\*?\s*@((?:no)?flow)\b/;var flow=Q=>class extends Q{constructor(...t){super(...t),this.flowPragma=void 0}getScopeHandler(){return FlowScopeHandler}shouldParseTypes(){return this.getPluginOption("flow","all")||this.flowPragma==="flow"}finishToken(t,s){t!==134&&t!==13&&t!==28&&this.flowPragma===void 0&&(this.flowPragma=null),super.finishToken(t,s)}addComment(t){if(this.flowPragma===void 0){const s=FLOW_PRAGMA_REGEX.exec(t.value);if(s)if(s[1]==="flow")this.flowPragma="flow";else if(s[1]==="noflow")this.flowPragma="noflow";else throw new Error("Unexpected flow pragma")}super.addComment(t)}flowParseTypeInitialiser(t){const s=this.state.inType;this.state.inType=!0,this.expect(t||14);const n=this.flowParseType();return this.state.inType=s,n}flowParsePredicate(){const t=this.startNode(),s=this.state.startLoc;return this.next(),this.expectContextual(110),this.state.lastTokStartLoc.index>s.index+1&&this.raise(FlowErrors.UnexpectedSpaceBetweenModuloChecks,s),this.eat(10)?(t.value=super.parseExpression(),this.expect(11),this.finishNode(t,"DeclaredPredicate")):this.finishNode(t,"InferredPredicate")}flowParseTypeAndPredicateInitialiser(){const t=this.state.inType;this.state.inType=!0,this.expect(14);let s=null,n=null;return this.match(54)?(this.state.inType=t,n=this.flowParsePredicate()):(s=this.flowParseType(),this.state.inType=t,this.match(54)&&(n=this.flowParsePredicate())),[s,n]}flowParseDeclareClass(t){return this.next(),this.flowParseInterfaceish(t,!0),this.finishNode(t,"DeclareClass")}flowParseDeclareFunction(t){this.next();const s=t.id=this.parseIdentifier(),n=this.startNode(),i=this.startNode();this.match(47)?n.typeParameters=this.flowParseTypeParameterDeclaration():n.typeParameters=null,this.expect(10);const U=this.flowParseFunctionTypeParams();return n.params=U.params,n.rest=U.rest,n.this=U._this,this.expect(11),[n.returnType,t.predicate]=this.flowParseTypeAndPredicateInitialiser(),i.typeAnnotation=this.finishNode(n,"FunctionTypeAnnotation"),s.typeAnnotation=this.finishNode(i,"TypeAnnotation"),this.resetEndLocation(s),this.semicolon(),this.scope.declareName(t.id.name,2048,t.id.loc.start),this.finishNode(t,"DeclareFunction")}flowParseDeclare(t,s){if(this.match(80))return this.flowParseDeclareClass(t);if(this.match(68))return this.flowParseDeclareFunction(t);if(this.match(74))return this.flowParseDeclareVariable(t);if(this.eatContextual(127))return this.match(16)?this.flowParseDeclareModuleExports(t):(s&&this.raise(FlowErrors.NestedDeclareModule,this.state.lastTokStartLoc),this.flowParseDeclareModule(t));if(this.isContextual(130))return this.flowParseDeclareTypeAlias(t);if(this.isContextual(131))return this.flowParseDeclareOpaqueType(t);if(this.isContextual(129))return this.flowParseDeclareInterface(t);if(this.match(82))return this.flowParseDeclareExportDeclaration(t,s);this.unexpected()}flowParseDeclareVariable(t){return this.next(),t.id=this.flowParseTypeAnnotatableIdentifier(!0),this.scope.declareName(t.id.name,5,t.id.loc.start),this.semicolon(),this.finishNode(t,"DeclareVariable")}flowParseDeclareModule(t){this.scope.enter(0),this.match(134)?t.id=super.parseExprAtom():t.id=this.parseIdentifier();const s=t.body=this.startNode(),n=s.body=[];for(this.expect(5);!this.match(8);){let g=this.startNode();this.match(83)?(this.next(),!this.isContextual(130)&&!this.match(87)&&this.raise(FlowErrors.InvalidNonTypeImportInDeclareModule,this.state.lastTokStartLoc),super.parseImport(g)):(this.expectContextual(125,FlowErrors.UnsupportedStatementInDeclareModule),g=this.flowParseDeclare(g,!0)),n.push(g)}this.scope.exit(),this.expect(8),this.finishNode(s,"BlockStatement");let i=null,U=!1;return n.forEach(g=>{isEsModuleType(g)?(i==="CommonJS"&&this.raise(FlowErrors.AmbiguousDeclareModuleKind,g),i="ES"):g.type==="DeclareModuleExports"&&(U&&this.raise(FlowErrors.DuplicateDeclareModuleExports,g),i==="ES"&&this.raise(FlowErrors.AmbiguousDeclareModuleKind,g),i="CommonJS",U=!0)}),t.kind=i||"CommonJS",this.finishNode(t,"DeclareModule")}flowParseDeclareExportDeclaration(t,s){if(this.expect(82),this.eat(65))return this.match(68)||this.match(80)?t.declaration=this.flowParseDeclare(this.startNode()):(t.declaration=this.flowParseType(),this.semicolon()),t.default=!0,this.finishNode(t,"DeclareExportDeclaration");if(this.match(75)||this.isLet()||(this.isContextual(130)||this.isContextual(129))&&!s){const n=this.state.value;throw this.raise(FlowErrors.UnsupportedDeclareExportKind,this.state.startLoc,{unsupportedExportKind:n,suggestion:exportSuggestions[n]})}if(this.match(74)||this.match(68)||this.match(80)||this.isContextual(131))return t.declaration=this.flowParseDeclare(this.startNode()),t.default=!1,this.finishNode(t,"DeclareExportDeclaration");if(this.match(55)||this.match(5)||this.isContextual(129)||this.isContextual(130)||this.isContextual(131))return t=this.parseExport(t,null),t.type==="ExportNamedDeclaration"&&(t.type="ExportDeclaration",t.default=!1,delete t.exportKind),t.type="Declare"+t.type,t;this.unexpected()}flowParseDeclareModuleExports(t){return this.next(),this.expectContextual(111),t.typeAnnotation=this.flowParseTypeAnnotation(),this.semicolon(),this.finishNode(t,"DeclareModuleExports")}flowParseDeclareTypeAlias(t){this.next();const s=this.flowParseTypeAlias(t);return s.type="DeclareTypeAlias",s}flowParseDeclareOpaqueType(t){this.next();const s=this.flowParseOpaqueType(t,!0);return s.type="DeclareOpaqueType",s}flowParseDeclareInterface(t){return this.next(),this.flowParseInterfaceish(t,!1),this.finishNode(t,"DeclareInterface")}flowParseInterfaceish(t,s){if(t.id=this.flowParseRestrictedIdentifier(!s,!0),this.scope.declareName(t.id.name,s?17:8201,t.id.loc.start),this.match(47)?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.extends=[],this.eat(81))do t.extends.push(this.flowParseInterfaceExtends());while(!s&&this.eat(12));if(s){if(t.implements=[],t.mixins=[],this.eatContextual(117))do t.mixins.push(this.flowParseInterfaceExtends());while(this.eat(12));if(this.eatContextual(113))do t.implements.push(this.flowParseInterfaceExtends());while(this.eat(12))}t.body=this.flowParseObjectType({allowStatic:s,allowExact:!1,allowSpread:!1,allowProto:s,allowInexact:!1})}flowParseInterfaceExtends(){const t=this.startNode();return t.id=this.flowParseQualifiedTypeIdentifier(),this.match(47)?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"InterfaceExtends")}flowParseInterface(t){return this.flowParseInterfaceish(t,!1),this.finishNode(t,"InterfaceDeclaration")}checkNotUnderscore(t){t==="_"&&this.raise(FlowErrors.UnexpectedReservedUnderscore,this.state.startLoc)}checkReservedType(t,s,n){reservedTypes.has(t)&&this.raise(n?FlowErrors.AssignReservedType:FlowErrors.UnexpectedReservedType,s,{reservedType:t})}flowParseRestrictedIdentifier(t,s){return this.checkReservedType(this.state.value,this.state.startLoc,s),this.parseIdentifier(t)}flowParseTypeAlias(t){return t.id=this.flowParseRestrictedIdentifier(!1,!0),this.scope.declareName(t.id.name,8201,t.id.loc.start),this.match(47)?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.right=this.flowParseTypeInitialiser(29),this.semicolon(),this.finishNode(t,"TypeAlias")}flowParseOpaqueType(t,s){return this.expectContextual(130),t.id=this.flowParseRestrictedIdentifier(!0,!0),this.scope.declareName(t.id.name,8201,t.id.loc.start),this.match(47)?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.supertype=null,this.match(14)&&(t.supertype=this.flowParseTypeInitialiser(14)),t.impltype=null,s||(t.impltype=this.flowParseTypeInitialiser(29)),this.semicolon(),this.finishNode(t,"OpaqueType")}flowParseTypeParameter(t=!1){const s=this.state.startLoc,n=this.startNode(),i=this.flowParseVariance(),U=this.flowParseTypeAnnotatableIdentifier();return n.name=U.name,n.variance=i,n.bound=U.typeAnnotation,this.match(29)?(this.eat(29),n.default=this.flowParseType()):t&&this.raise(FlowErrors.MissingTypeParamDefault,s),this.finishNode(n,"TypeParameter")}flowParseTypeParameterDeclaration(){const t=this.state.inType,s=this.startNode();s.params=[],this.state.inType=!0,this.match(47)||this.match(143)?this.next():this.unexpected();let n=!1;do{const i=this.flowParseTypeParameter(n);s.params.push(i),i.default&&(n=!0),this.match(48)||this.expect(12)}while(!this.match(48));return this.expect(48),this.state.inType=t,this.finishNode(s,"TypeParameterDeclaration")}flowParseTypeParameterInstantiation(){const t=this.startNode(),s=this.state.inType;t.params=[],this.state.inType=!0,this.expect(47);const n=this.state.noAnonFunctionType;for(this.state.noAnonFunctionType=!1;!this.match(48);)t.params.push(this.flowParseType()),this.match(48)||this.expect(12);return this.state.noAnonFunctionType=n,this.expect(48),this.state.inType=s,this.finishNode(t,"TypeParameterInstantiation")}flowParseTypeParameterInstantiationCallOrNew(){const t=this.startNode(),s=this.state.inType;for(t.params=[],this.state.inType=!0,this.expect(47);!this.match(48);)t.params.push(this.flowParseTypeOrImplicitInstantiation()),this.match(48)||this.expect(12);return this.expect(48),this.state.inType=s,this.finishNode(t,"TypeParameterInstantiation")}flowParseInterfaceType(){const t=this.startNode();if(this.expectContextual(129),t.extends=[],this.eat(81))do t.extends.push(this.flowParseInterfaceExtends());while(this.eat(12));return t.body=this.flowParseObjectType({allowStatic:!1,allowExact:!1,allowSpread:!1,allowProto:!1,allowInexact:!1}),this.finishNode(t,"InterfaceTypeAnnotation")}flowParseObjectPropertyKey(){return this.match(135)||this.match(134)?super.parseExprAtom():this.parseIdentifier(!0)}flowParseObjectTypeIndexer(t,s,n){return t.static=s,this.lookahead().type===14?(t.id=this.flowParseObjectPropertyKey(),t.key=this.flowParseTypeInitialiser()):(t.id=null,t.key=this.flowParseType()),this.expect(3),t.value=this.flowParseTypeInitialiser(),t.variance=n,this.finishNode(t,"ObjectTypeIndexer")}flowParseObjectTypeInternalSlot(t,s){return t.static=s,t.id=this.flowParseObjectPropertyKey(),this.expect(3),this.expect(3),this.match(47)||this.match(10)?(t.method=!0,t.optional=!1,t.value=this.flowParseObjectTypeMethodish(this.startNodeAt(t.loc.start))):(t.method=!1,this.eat(17)&&(t.optional=!0),t.value=this.flowParseTypeInitialiser()),this.finishNode(t,"ObjectTypeInternalSlot")}flowParseObjectTypeMethodish(t){for(t.params=[],t.rest=null,t.typeParameters=null,t.this=null,this.match(47)&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),this.expect(10),this.match(78)&&(t.this=this.flowParseFunctionTypeParam(!0),t.this.name=null,this.match(11)||this.expect(12));!this.match(11)&&!this.match(21);)t.params.push(this.flowParseFunctionTypeParam(!1)),this.match(11)||this.expect(12);return this.eat(21)&&(t.rest=this.flowParseFunctionTypeParam(!1)),this.expect(11),t.returnType=this.flowParseTypeInitialiser(),this.finishNode(t,"FunctionTypeAnnotation")}flowParseObjectTypeCallProperty(t,s){const n=this.startNode();return t.static=s,t.value=this.flowParseObjectTypeMethodish(n),this.finishNode(t,"ObjectTypeCallProperty")}flowParseObjectType({allowStatic:t,allowExact:s,allowSpread:n,allowProto:i,allowInexact:U}){const g=this.state.inType;this.state.inType=!0;const F=this.startNode();F.callProperties=[],F.properties=[],F.indexers=[],F.internalSlots=[];let B,r,I=!1;for(s&&this.match(6)?(this.expect(6),B=9,r=!0):(this.expect(5),B=8,r=!1),F.exact=r;!this.match(B);){let o=!1,l=null,A=null;const f=this.startNode();if(i&&this.isContextual(118)){const N=this.lookahead();N.type!==14&&N.type!==17&&(this.next(),l=this.state.startLoc,t=!1)}if(t&&this.isContextual(106)){const N=this.lookahead();N.type!==14&&N.type!==17&&(this.next(),o=!0)}const d=this.flowParseVariance();if(this.eat(0))l!=null&&this.unexpected(l),this.eat(0)?(d&&this.unexpected(d.loc.start),F.internalSlots.push(this.flowParseObjectTypeInternalSlot(f,o))):F.indexers.push(this.flowParseObjectTypeIndexer(f,o,d));else if(this.match(10)||this.match(47))l!=null&&this.unexpected(l),d&&this.unexpected(d.loc.start),F.callProperties.push(this.flowParseObjectTypeCallProperty(f,o));else{let N="init";if(this.isContextual(99)||this.isContextual(104)){const R=this.lookahead();tokenIsLiteralPropertyName(R.type)&&(N=this.state.value,this.next())}const y=this.flowParseObjectTypeProperty(f,o,l,d,N,n,U??!r);y===null?(I=!0,A=this.state.lastTokStartLoc):F.properties.push(y)}this.flowObjectTypeSemicolon(),A&&!this.match(8)&&!this.match(9)&&this.raise(FlowErrors.UnexpectedExplicitInexactInObject,A)}this.expect(B),n&&(F.inexact=I);const C=this.finishNode(F,"ObjectTypeAnnotation");return this.state.inType=g,C}flowParseObjectTypeProperty(t,s,n,i,U,g,F){if(this.eat(21))return this.match(12)||this.match(13)||this.match(8)||this.match(9)?(g?F||this.raise(FlowErrors.InexactInsideExact,this.state.lastTokStartLoc):this.raise(FlowErrors.InexactInsideNonObject,this.state.lastTokStartLoc),i&&this.raise(FlowErrors.InexactVariance,i),null):(g||this.raise(FlowErrors.UnexpectedSpreadType,this.state.lastTokStartLoc),n!=null&&this.unexpected(n),i&&this.raise(FlowErrors.SpreadVariance,i),t.argument=this.flowParseType(),this.finishNode(t,"ObjectTypeSpreadProperty"));{t.key=this.flowParseObjectPropertyKey(),t.static=s,t.proto=n!=null,t.kind=U;let B=!1;return this.match(47)||this.match(10)?(t.method=!0,n!=null&&this.unexpected(n),i&&this.unexpected(i.loc.start),t.value=this.flowParseObjectTypeMethodish(this.startNodeAt(t.loc.start)),(U==="get"||U==="set")&&this.flowCheckGetterSetterParams(t),!g&&t.key.name==="constructor"&&t.value.this&&this.raise(FlowErrors.ThisParamBannedInConstructor,t.value.this)):(U!=="init"&&this.unexpected(),t.method=!1,this.eat(17)&&(B=!0),t.value=this.flowParseTypeInitialiser(),t.variance=i),t.optional=B,this.finishNode(t,"ObjectTypeProperty")}}flowCheckGetterSetterParams(t){const s=t.kind==="get"?0:1,n=t.value.params.length+(t.value.rest?1:0);t.value.this&&this.raise(t.kind==="get"?FlowErrors.GetterMayNotHaveThisParam:FlowErrors.SetterMayNotHaveThisParam,t.value.this),n!==s&&this.raise(t.kind==="get"?Errors.BadGetterArity:Errors.BadSetterArity,t),t.kind==="set"&&t.value.rest&&this.raise(Errors.BadSetterRestParameter,t)}flowObjectTypeSemicolon(){!this.eat(13)&&!this.eat(12)&&!this.match(8)&&!this.match(9)&&this.unexpected()}flowParseQualifiedTypeIdentifier(t,s){var n;(n=t)!=null||(t=this.state.startLoc);let i=s||this.flowParseRestrictedIdentifier(!0);for(;this.eat(16);){const U=this.startNodeAt(t);U.qualification=i,U.id=this.flowParseRestrictedIdentifier(!0),i=this.finishNode(U,"QualifiedTypeIdentifier")}return i}flowParseGenericType(t,s){const n=this.startNodeAt(t);return n.typeParameters=null,n.id=this.flowParseQualifiedTypeIdentifier(t,s),this.match(47)&&(n.typeParameters=this.flowParseTypeParameterInstantiation()),this.finishNode(n,"GenericTypeAnnotation")}flowParseTypeofType(){const t=this.startNode();return this.expect(87),t.argument=this.flowParsePrimaryType(),this.finishNode(t,"TypeofTypeAnnotation")}flowParseTupleType(){const t=this.startNode();for(t.types=[],this.expect(0);this.state.pos<this.length&&!this.match(3)&&(t.types.push(this.flowParseType()),!this.match(3));)this.expect(12);return this.expect(3),this.finishNode(t,"TupleTypeAnnotation")}flowParseFunctionTypeParam(t){let s=null,n=!1,i=null;const U=this.startNode(),g=this.lookahead(),F=this.state.type===78;return g.type===14||g.type===17?(F&&!t&&this.raise(FlowErrors.ThisParamMustBeFirst,U),s=this.parseIdentifier(F),this.eat(17)&&(n=!0,F&&this.raise(FlowErrors.ThisParamMayNotBeOptional,U)),i=this.flowParseTypeInitialiser()):i=this.flowParseType(),U.name=s,U.optional=n,U.typeAnnotation=i,this.finishNode(U,"FunctionTypeParam")}reinterpretTypeAsFunctionTypeParam(t){const s=this.startNodeAt(t.loc.start);return s.name=null,s.optional=!1,s.typeAnnotation=t,this.finishNode(s,"FunctionTypeParam")}flowParseFunctionTypeParams(t=[]){let s=null,n=null;for(this.match(78)&&(n=this.flowParseFunctionTypeParam(!0),n.name=null,this.match(11)||this.expect(12));!this.match(11)&&!this.match(21);)t.push(this.flowParseFunctionTypeParam(!1)),this.match(11)||this.expect(12);return this.eat(21)&&(s=this.flowParseFunctionTypeParam(!1)),{params:t,rest:s,_this:n}}flowIdentToTypeAnnotation(t,s,n){switch(n.name){case"any":return this.finishNode(s,"AnyTypeAnnotation");case"bool":case"boolean":return this.finishNode(s,"BooleanTypeAnnotation");case"mixed":return this.finishNode(s,"MixedTypeAnnotation");case"empty":return this.finishNode(s,"EmptyTypeAnnotation");case"number":return this.finishNode(s,"NumberTypeAnnotation");case"string":return this.finishNode(s,"StringTypeAnnotation");case"symbol":return this.finishNode(s,"SymbolTypeAnnotation");default:return this.checkNotUnderscore(n.name),this.flowParseGenericType(t,n)}}flowParsePrimaryType(){const t=this.state.startLoc,s=this.startNode();let n,i,U=!1;const g=this.state.noAnonFunctionType;switch(this.state.type){case 5:return this.flowParseObjectType({allowStatic:!1,allowExact:!1,allowSpread:!0,allowProto:!1,allowInexact:!0});case 6:return this.flowParseObjectType({allowStatic:!1,allowExact:!0,allowSpread:!0,allowProto:!1,allowInexact:!1});case 0:return this.state.noAnonFunctionType=!1,i=this.flowParseTupleType(),this.state.noAnonFunctionType=g,i;case 47:{const F=this.startNode();return F.typeParameters=this.flowParseTypeParameterDeclaration(),this.expect(10),n=this.flowParseFunctionTypeParams(),F.params=n.params,F.rest=n.rest,F.this=n._this,this.expect(11),this.expect(19),F.returnType=this.flowParseType(),this.finishNode(F,"FunctionTypeAnnotation")}case 10:{const F=this.startNode();if(this.next(),!this.match(11)&&!this.match(21))if(tokenIsIdentifier(this.state.type)||this.match(78)){const B=this.lookahead().type;U=B!==17&&B!==14}else U=!0;if(U){if(this.state.noAnonFunctionType=!1,i=this.flowParseType(),this.state.noAnonFunctionType=g,this.state.noAnonFunctionType||!(this.match(12)||this.match(11)&&this.lookahead().type===19))return this.expect(11),i;this.eat(12)}return i?n=this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(i)]):n=this.flowParseFunctionTypeParams(),F.params=n.params,F.rest=n.rest,F.this=n._this,this.expect(11),this.expect(19),F.returnType=this.flowParseType(),F.typeParameters=null,this.finishNode(F,"FunctionTypeAnnotation")}case 134:return this.parseLiteral(this.state.value,"StringLiteralTypeAnnotation");case 85:case 86:return s.value=this.match(85),this.next(),this.finishNode(s,"BooleanLiteralTypeAnnotation");case 53:if(this.state.value==="-"){if(this.next(),this.match(135))return this.parseLiteralAtNode(-this.state.value,"NumberLiteralTypeAnnotation",s);if(this.match(136))return this.parseLiteralAtNode(-this.state.value,"BigIntLiteralTypeAnnotation",s);throw this.raise(FlowErrors.UnexpectedSubtractionOperand,this.state.startLoc)}this.unexpected();return;case 135:return this.parseLiteral(this.state.value,"NumberLiteralTypeAnnotation");case 136:return this.parseLiteral(this.state.value,"BigIntLiteralTypeAnnotation");case 88:return this.next(),this.finishNode(s,"VoidTypeAnnotation");case 84:return this.next(),this.finishNode(s,"NullLiteralTypeAnnotation");case 78:return this.next(),this.finishNode(s,"ThisTypeAnnotation");case 55:return this.next(),this.finishNode(s,"ExistsTypeAnnotation");case 87:return this.flowParseTypeofType();default:if(tokenIsKeyword(this.state.type)){const F=tokenLabelName(this.state.type);return this.next(),super.createIdentifier(s,F)}else if(tokenIsIdentifier(this.state.type))return this.isContextual(129)?this.flowParseInterfaceType():this.flowIdentToTypeAnnotation(t,s,this.parseIdentifier())}this.unexpected()}flowParsePostfixType(){const t=this.state.startLoc;let s=this.flowParsePrimaryType(),n=!1;for(;(this.match(0)||this.match(18))&&!this.canInsertSemicolon();){const i=this.startNodeAt(t),U=this.eat(18);n=n||U,this.expect(0),!U&&this.match(3)?(i.elementType=s,this.next(),s=this.finishNode(i,"ArrayTypeAnnotation")):(i.objectType=s,i.indexType=this.flowParseType(),this.expect(3),n?(i.optional=U,s=this.finishNode(i,"OptionalIndexedAccessType")):s=this.finishNode(i,"IndexedAccessType"))}return s}flowParsePrefixType(){const t=this.startNode();return this.eat(17)?(t.typeAnnotation=this.flowParsePrefixType(),this.finishNode(t,"NullableTypeAnnotation")):this.flowParsePostfixType()}flowParseAnonFunctionWithoutParens(){const t=this.flowParsePrefixType();if(!this.state.noAnonFunctionType&&this.eat(19)){const s=this.startNodeAt(t.loc.start);return s.params=[this.reinterpretTypeAsFunctionTypeParam(t)],s.rest=null,s.this=null,s.returnType=this.flowParseType(),s.typeParameters=null,this.finishNode(s,"FunctionTypeAnnotation")}return t}flowParseIntersectionType(){const t=this.startNode();this.eat(45);const s=this.flowParseAnonFunctionWithoutParens();for(t.types=[s];this.eat(45);)t.types.push(this.flowParseAnonFunctionWithoutParens());return t.types.length===1?s:this.finishNode(t,"IntersectionTypeAnnotation")}flowParseUnionType(){const t=this.startNode();this.eat(43);const s=this.flowParseIntersectionType();for(t.types=[s];this.eat(43);)t.types.push(this.flowParseIntersectionType());return t.types.length===1?s:this.finishNode(t,"UnionTypeAnnotation")}flowParseType(){const t=this.state.inType;this.state.inType=!0;const s=this.flowParseUnionType();return this.state.inType=t,s}flowParseTypeOrImplicitInstantiation(){if(this.state.type===132&&this.state.value==="_"){const t=this.state.startLoc,s=this.parseIdentifier();return this.flowParseGenericType(t,s)}else return this.flowParseType()}flowParseTypeAnnotation(){const t=this.startNode();return t.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(t,"TypeAnnotation")}flowParseTypeAnnotatableIdentifier(t){const s=t?this.parseIdentifier():this.flowParseRestrictedIdentifier();return this.match(14)&&(s.typeAnnotation=this.flowParseTypeAnnotation(),this.resetEndLocation(s)),s}typeCastToParameter(t){return t.expression.typeAnnotation=t.typeAnnotation,this.resetEndLocation(t.expression,t.typeAnnotation.loc.end),t.expression}flowParseVariance(){let t=null;return this.match(53)?(t=this.startNode(),this.state.value==="+"?t.kind="plus":t.kind="minus",this.next(),this.finishNode(t,"Variance")):t}parseFunctionBody(t,s,n=!1){if(s){this.forwardNoArrowParamsConversionAt(t,()=>super.parseFunctionBody(t,!0,n));return}super.parseFunctionBody(t,!1,n)}parseFunctionBodyAndFinish(t,s,n=!1){if(this.match(14)){const i=this.startNode();[i.typeAnnotation,t.predicate]=this.flowParseTypeAndPredicateInitialiser(),t.returnType=i.typeAnnotation?this.finishNode(i,"TypeAnnotation"):null}return super.parseFunctionBodyAndFinish(t,s,n)}parseStatementLike(t){if(this.state.strict&&this.isContextual(129)){const n=this.lookahead();if(tokenIsKeywordOrIdentifier(n.type)){const i=this.startNode();return this.next(),this.flowParseInterface(i)}}else if(this.isContextual(126)){const n=this.startNode();return this.next(),this.flowParseEnumDeclaration(n)}const s=super.parseStatementLike(t);return this.flowPragma===void 0&&!this.isValidDirective(s)&&(this.flowPragma=null),s}parseExpressionStatement(t,s,n){if(s.type==="Identifier"){if(s.name==="declare"){if(this.match(80)||tokenIsIdentifier(this.state.type)||this.match(68)||this.match(74)||this.match(82))return this.flowParseDeclare(t)}else if(tokenIsIdentifier(this.state.type)){if(s.name==="interface")return this.flowParseInterface(t);if(s.name==="type")return this.flowParseTypeAlias(t);if(s.name==="opaque")return this.flowParseOpaqueType(t,!1)}}return super.parseExpressionStatement(t,s,n)}shouldParseExportDeclaration(){const{type:t}=this.state;return t===126||tokenIsFlowInterfaceOrTypeOrOpaque(t)?!this.state.containsEsc:super.shouldParseExportDeclaration()}isExportDefaultSpecifier(){const{type:t}=this.state;return t===126||tokenIsFlowInterfaceOrTypeOrOpaque(t)?this.state.containsEsc:super.isExportDefaultSpecifier()}parseExportDefaultExpression(){if(this.isContextual(126)){const t=this.startNode();return this.next(),this.flowParseEnumDeclaration(t)}return super.parseExportDefaultExpression()}parseConditional(t,s,n){if(!this.match(17))return t;if(this.state.maybeInArrowParameters){const C=this.lookaheadCharCode();if(C===44||C===61||C===58||C===41)return this.setOptionalParametersError(n),t}this.expect(17);const i=this.state.clone(),U=this.state.noArrowAt,g=this.startNodeAt(s);let{consequent:F,failed:B}=this.tryParseConditionalConsequent(),[r,I]=this.getArrowLikeExpressions(F);if(B||I.length>0){const C=[...U];if(I.length>0){this.state=i,this.state.noArrowAt=C;for(let o=0;o<I.length;o++)C.push(I[o].start);({consequent:F,failed:B}=this.tryParseConditionalConsequent()),[r,I]=this.getArrowLikeExpressions(F)}B&&r.length>1&&this.raise(FlowErrors.AmbiguousConditionalArrow,i.startLoc),B&&r.length===1&&(this.state=i,C.push(r[0].start),this.state.noArrowAt=C,{consequent:F,failed:B}=this.tryParseConditionalConsequent())}return this.getArrowLikeExpressions(F,!0),this.state.noArrowAt=U,this.expect(14),g.test=t,g.consequent=F,g.alternate=this.forwardNoArrowParamsConversionAt(g,()=>this.parseMaybeAssign(void 0,void 0)),this.finishNode(g,"ConditionalExpression")}tryParseConditionalConsequent(){this.state.noArrowParamsConversionAt.push(this.state.start);const t=this.parseMaybeAssignAllowIn(),s=!this.match(14);return this.state.noArrowParamsConversionAt.pop(),{consequent:t,failed:s}}getArrowLikeExpressions(t,s){const n=[t],i=[];for(;n.length!==0;){const U=n.pop();U.type==="ArrowFunctionExpression"&&U.body.type!=="BlockStatement"?(U.typeParameters||!U.returnType?this.finishArrowValidation(U):i.push(U),n.push(U.body)):U.type==="ConditionalExpression"&&(n.push(U.consequent),n.push(U.alternate))}return s?(i.forEach(U=>this.finishArrowValidation(U)),[i,[]]):partition(i,U=>U.params.every(g=>this.isAssignable(g,!0)))}finishArrowValidation(t){var s;this.toAssignableList(t.params,(s=t.extra)==null?void 0:s.trailingCommaLoc,!1),this.scope.enter(6),super.checkParams(t,!1,!0),this.scope.exit()}forwardNoArrowParamsConversionAt(t,s){let n;return this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(t.start))?(this.state.noArrowParamsConversionAt.push(this.state.start),n=s(),this.state.noArrowParamsConversionAt.pop()):n=s(),n}parseParenItem(t,s){const n=super.parseParenItem(t,s);if(this.eat(17)&&(n.optional=!0,this.resetEndLocation(t)),this.match(14)){const i=this.startNodeAt(s);return i.expression=n,i.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(i,"TypeCastExpression")}return n}assertModuleNodeAllowed(t){t.type==="ImportDeclaration"&&(t.importKind==="type"||t.importKind==="typeof")||t.type==="ExportNamedDeclaration"&&t.exportKind==="type"||t.type==="ExportAllDeclaration"&&t.exportKind==="type"||super.assertModuleNodeAllowed(t)}parseExportDeclaration(t){if(this.isContextual(130)){t.exportKind="type";const s=this.startNode();return this.next(),this.match(5)?(t.specifiers=this.parseExportSpecifiers(!0),super.parseExportFrom(t),null):this.flowParseTypeAlias(s)}else if(this.isContextual(131)){t.exportKind="type";const s=this.startNode();return this.next(),this.flowParseOpaqueType(s,!1)}else if(this.isContextual(129)){t.exportKind="type";const s=this.startNode();return this.next(),this.flowParseInterface(s)}else if(this.isContextual(126)){t.exportKind="value";const s=this.startNode();return this.next(),this.flowParseEnumDeclaration(s)}else return super.parseExportDeclaration(t)}eatExportStar(t){return super.eatExportStar(t)?!0:this.isContextual(130)&&this.lookahead().type===55?(t.exportKind="type",this.next(),this.next(),!0):!1}maybeParseExportNamespaceSpecifier(t){const{startLoc:s}=this.state,n=super.maybeParseExportNamespaceSpecifier(t);return n&&t.exportKind==="type"&&this.unexpected(s),n}parseClassId(t,s,n){super.parseClassId(t,s,n),this.match(47)&&(t.typeParameters=this.flowParseTypeParameterDeclaration())}parseClassMember(t,s,n){const{startLoc:i}=this.state;if(this.isContextual(125)){if(super.parseClassMemberFromModifier(t,s))return;s.declare=!0}super.parseClassMember(t,s,n),s.declare&&(s.type!=="ClassProperty"&&s.type!=="ClassPrivateProperty"&&s.type!=="PropertyDefinition"?this.raise(FlowErrors.DeclareClassElement,i):s.value&&this.raise(FlowErrors.DeclareClassFieldInitializer,s.value))}isIterator(t){return t==="iterator"||t==="asyncIterator"}readIterator(){const t=super.readWord1(),s="@@"+t;(!this.isIterator(t)||!this.state.inType)&&this.raise(Errors.InvalidIdentifier,this.state.curPosition(),{identifierName:s}),this.finishToken(132,s)}getTokenFromCode(t){const s=this.input.charCodeAt(this.state.pos+1);t===123&&s===124?this.finishOp(6,2):this.state.inType&&(t===62||t===60)?this.finishOp(t===62?48:47,1):this.state.inType&&t===63?s===46?this.finishOp(18,2):this.finishOp(17,1):isIteratorStart(t,s,this.input.charCodeAt(this.state.pos+2))?(this.state.pos+=2,this.readIterator()):super.getTokenFromCode(t)}isAssignable(t,s){return t.type==="TypeCastExpression"?this.isAssignable(t.expression,s):super.isAssignable(t,s)}toAssignable(t,s=!1){!s&&t.type==="AssignmentExpression"&&t.left.type==="TypeCastExpression"&&(t.left=this.typeCastToParameter(t.left)),super.toAssignable(t,s)}toAssignableList(t,s,n){for(let i=0;i<t.length;i++){const U=t[i];(U==null?void 0:U.type)==="TypeCastExpression"&&(t[i]=this.typeCastToParameter(U))}super.toAssignableList(t,s,n)}toReferencedList(t,s){for(let i=0;i<t.length;i++){var n;const U=t[i];U&&U.type==="TypeCastExpression"&&!((n=U.extra)!=null&&n.parenthesized)&&(t.length>1||!s)&&this.raise(FlowErrors.TypeCastInPattern,U.typeAnnotation)}return t}parseArrayLike(t,s,n,i){const U=super.parseArrayLike(t,s,n,i);return s&&!this.state.maybeInArrowParameters&&this.toReferencedList(U.elements),U}isValidLVal(t,s,n){return t==="TypeCastExpression"||super.isValidLVal(t,s,n)}parseClassProperty(t){return this.match(14)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),super.parseClassProperty(t)}parseClassPrivateProperty(t){return this.match(14)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),super.parseClassPrivateProperty(t)}isClassMethod(){return this.match(47)||super.isClassMethod()}isClassProperty(){return this.match(14)||super.isClassProperty()}isNonstaticConstructor(t){return!this.match(14)&&super.isNonstaticConstructor(t)}pushClassMethod(t,s,n,i,U,g){if(s.variance&&this.unexpected(s.variance.loc.start),delete s.variance,this.match(47)&&(s.typeParameters=this.flowParseTypeParameterDeclaration()),super.pushClassMethod(t,s,n,i,U,g),s.params&&U){const F=s.params;F.length>0&&this.isThisParam(F[0])&&this.raise(FlowErrors.ThisParamBannedInConstructor,s)}else if(s.type==="MethodDefinition"&&U&&s.value.params){const F=s.value.params;F.length>0&&this.isThisParam(F[0])&&this.raise(FlowErrors.ThisParamBannedInConstructor,s)}}pushClassPrivateMethod(t,s,n,i){s.variance&&this.unexpected(s.variance.loc.start),delete s.variance,this.match(47)&&(s.typeParameters=this.flowParseTypeParameterDeclaration()),super.pushClassPrivateMethod(t,s,n,i)}parseClassSuper(t){if(super.parseClassSuper(t),t.superClass&&this.match(47)&&(t.superTypeParameters=this.flowParseTypeParameterInstantiation()),this.isContextual(113)){this.next();const s=t.implements=[];do{const n=this.startNode();n.id=this.flowParseRestrictedIdentifier(!0),this.match(47)?n.typeParameters=this.flowParseTypeParameterInstantiation():n.typeParameters=null,s.push(this.finishNode(n,"ClassImplements"))}while(this.eat(12))}}checkGetterSetterParams(t){super.checkGetterSetterParams(t);const s=this.getObjectOrClassMethodParams(t);if(s.length>0){const n=s[0];this.isThisParam(n)&&t.kind==="get"?this.raise(FlowErrors.GetterMayNotHaveThisParam,n):this.isThisParam(n)&&this.raise(FlowErrors.SetterMayNotHaveThisParam,n)}}parsePropertyNamePrefixOperator(t){t.variance=this.flowParseVariance()}parseObjPropValue(t,s,n,i,U,g,F){t.variance&&this.unexpected(t.variance.loc.start),delete t.variance;let B;this.match(47)&&!g&&(B=this.flowParseTypeParameterDeclaration(),this.match(10)||this.unexpected());const r=super.parseObjPropValue(t,s,n,i,U,g,F);return B&&((r.value||r).typeParameters=B),r}parseFunctionParamType(t){return this.eat(17)&&(t.type!=="Identifier"&&this.raise(FlowErrors.PatternIsOptional,t),this.isThisParam(t)&&this.raise(FlowErrors.ThisParamMayNotBeOptional,t),t.optional=!0),this.match(14)?t.typeAnnotation=this.flowParseTypeAnnotation():this.isThisParam(t)&&this.raise(FlowErrors.ThisParamAnnotationRequired,t),this.match(29)&&this.isThisParam(t)&&this.raise(FlowErrors.ThisParamNoDefault,t),this.resetEndLocation(t),t}parseMaybeDefault(t,s){const n=super.parseMaybeDefault(t,s);return n.type==="AssignmentPattern"&&n.typeAnnotation&&n.right.start<n.typeAnnotation.start&&this.raise(FlowErrors.TypeBeforeInitializer,n.typeAnnotation),n}checkImportReflection(t){super.checkImportReflection(t),t.module&&t.importKind!=="value"&&this.raise(FlowErrors.ImportReflectionHasImportType,t.specifiers[0].loc.start)}parseImportSpecifierLocal(t,s,n){s.local=hasTypeImportKind(t)?this.flowParseRestrictedIdentifier(!0,!0):this.parseIdentifier(),t.specifiers.push(this.finishImportSpecifier(s,n))}isPotentialImportPhase(t){if(super.isPotentialImportPhase(t))return!0;if(this.isContextual(130)){if(!t)return!0;const s=this.lookaheadCharCode();return s===123||s===42}return!t&&this.isContextual(87)}applyImportPhase(t,s,n,i){if(super.applyImportPhase(t,s,n,i),s){if(!n&&this.match(65))return;t.exportKind=n==="type"?n:"value"}else n==="type"&&this.match(55)&&this.unexpected(),t.importKind=n==="type"||n==="typeof"?n:"value"}parseImportSpecifier(t,s,n,i,U){const g=t.imported;let F=null;g.type==="Identifier"&&(g.name==="type"?F="type":g.name==="typeof"&&(F="typeof"));let B=!1;if(this.isContextual(93)&&!this.isLookaheadContextual("as")){const I=this.parseIdentifier(!0);F!==null&&!tokenIsKeywordOrIdentifier(this.state.type)?(t.imported=I,t.importKind=F,t.local=cloneIdentifier(I)):(t.imported=g,t.importKind=null,t.local=this.parseIdentifier())}else{if(F!==null&&tokenIsKeywordOrIdentifier(this.state.type))t.imported=this.parseIdentifier(!0),t.importKind=F;else{if(s)throw this.raise(Errors.ImportBindingIsString,t,{importName:g.value});t.imported=g,t.importKind=null}this.eatContextual(93)?t.local=this.parseIdentifier():(B=!0,t.local=cloneIdentifier(t.imported))}const r=hasTypeImportKind(t);return n&&r&&this.raise(FlowErrors.ImportTypeShorthandOnlyInPureImport,t),(n||r)&&this.checkReservedType(t.local.name,t.local.loc.start,!0),B&&!n&&!r&&this.checkReservedWord(t.local.name,t.loc.start,!0,!0),this.finishImportSpecifier(t,"ImportSpecifier")}parseBindingAtom(){switch(this.state.type){case 78:return this.parseIdentifier(!0);default:return super.parseBindingAtom()}}parseFunctionParams(t,s){const n=t.kind;n!=="get"&&n!=="set"&&this.match(47)&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),super.parseFunctionParams(t,s)}parseVarId(t,s){super.parseVarId(t,s),this.match(14)&&(t.id.typeAnnotation=this.flowParseTypeAnnotation(),this.resetEndLocation(t.id))}parseAsyncArrowFromCallExpression(t,s){if(this.match(14)){const n=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0,t.returnType=this.flowParseTypeAnnotation(),this.state.noAnonFunctionType=n}return super.parseAsyncArrowFromCallExpression(t,s)}shouldParseAsyncArrow(){return this.match(14)||super.shouldParseAsyncArrow()}parseMaybeAssign(t,s){var n;let i=null,U;if(this.hasPlugin("jsx")&&(this.match(143)||this.match(47))){if(i=this.state.clone(),U=this.tryParse(()=>super.parseMaybeAssign(t,s),i),!U.error)return U.node;const{context:B}=this.state,r=B[B.length-1];(r===types.j_oTag||r===types.j_expr)&&B.pop()}if((n=U)!=null&&n.error||this.match(47)){var g,F;i=i||this.state.clone();let B;const r=this.tryParse(C=>{var o;B=this.flowParseTypeParameterDeclaration();const l=this.forwardNoArrowParamsConversionAt(B,()=>{const f=super.parseMaybeAssign(t,s);return this.resetStartLocationFromNode(f,B),f});(o=l.extra)!=null&&o.parenthesized&&C();const A=this.maybeUnwrapTypeCastExpression(l);return A.type!=="ArrowFunctionExpression"&&C(),A.typeParameters=B,this.resetStartLocationFromNode(A,B),l},i);let I=null;if(r.node&&this.maybeUnwrapTypeCastExpression(r.node).type==="ArrowFunctionExpression"){if(!r.error&&!r.aborted)return r.node.async&&this.raise(FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction,B),r.node;I=r.node}if((g=U)!=null&&g.node)return this.state=U.failState,U.node;if(I)return this.state=r.failState,I;throw(F=U)!=null&&F.thrown?U.error:r.thrown?r.error:this.raise(FlowErrors.UnexpectedTokenAfterTypeParameter,B)}return super.parseMaybeAssign(t,s)}parseArrow(t){if(this.match(14)){const s=this.tryParse(()=>{const n=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0;const i=this.startNode();return[i.typeAnnotation,t.predicate]=this.flowParseTypeAndPredicateInitialiser(),this.state.noAnonFunctionType=n,this.canInsertSemicolon()&&this.unexpected(),this.match(19)||this.unexpected(),i});if(s.thrown)return null;s.error&&(this.state=s.failState),t.returnType=s.node.typeAnnotation?this.finishNode(s.node,"TypeAnnotation"):null}return super.parseArrow(t)}shouldParseArrow(t){return this.match(14)||super.shouldParseArrow(t)}setArrowFunctionParameters(t,s){this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(t.start))?t.params=s:super.setArrowFunctionParameters(t,s)}checkParams(t,s,n,i=!0){if(!(n&&this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(t.start)))){for(let U=0;U<t.params.length;U++)this.isThisParam(t.params[U])&&U>0&&this.raise(FlowErrors.ThisParamMustBeFirst,t.params[U]);super.checkParams(t,s,n,i)}}parseParenAndDistinguishExpression(t){return super.parseParenAndDistinguishExpression(t&&!this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)))}parseSubscripts(t,s,n){if(t.type==="Identifier"&&t.name==="async"&&this.state.noArrowAt.includes(s.index)){this.next();const i=this.startNodeAt(s);i.callee=t,i.arguments=super.parseCallExpressionArguments(11),t=this.finishNode(i,"CallExpression")}else if(t.type==="Identifier"&&t.name==="async"&&this.match(47)){const i=this.state.clone(),U=this.tryParse(F=>this.parseAsyncArrowWithTypeParameters(s)||F(),i);if(!U.error&&!U.aborted)return U.node;const g=this.tryParse(()=>super.parseSubscripts(t,s,n),i);if(g.node&&!g.error)return g.node;if(U.node)return this.state=U.failState,U.node;if(g.node)return this.state=g.failState,g.node;throw U.error||g.error}return super.parseSubscripts(t,s,n)}parseSubscript(t,s,n,i){if(this.match(18)&&this.isLookaheadToken_lt()){if(i.optionalChainMember=!0,n)return i.stop=!0,t;this.next();const U=this.startNodeAt(s);return U.callee=t,U.typeArguments=this.flowParseTypeParameterInstantiation(),this.expect(10),U.arguments=this.parseCallExpressionArguments(11),U.optional=!0,this.finishCallExpression(U,!0)}else if(!n&&this.shouldParseTypes()&&this.match(47)){const U=this.startNodeAt(s);U.callee=t;const g=this.tryParse(()=>(U.typeArguments=this.flowParseTypeParameterInstantiationCallOrNew(),this.expect(10),U.arguments=super.parseCallExpressionArguments(11),i.optionalChainMember&&(U.optional=!1),this.finishCallExpression(U,i.optionalChainMember)));if(g.node)return g.error&&(this.state=g.failState),g.node}return super.parseSubscript(t,s,n,i)}parseNewCallee(t){super.parseNewCallee(t);let s=null;this.shouldParseTypes()&&this.match(47)&&(s=this.tryParse(()=>this.flowParseTypeParameterInstantiationCallOrNew()).node),t.typeArguments=s}parseAsyncArrowWithTypeParameters(t){const s=this.startNodeAt(t);if(this.parseFunctionParams(s,!1),!!this.parseArrow(s))return super.parseArrowExpression(s,void 0,!0)}readToken_mult_modulo(t){const s=this.input.charCodeAt(this.state.pos+1);if(t===42&&s===47&&this.state.hasFlowComment){this.state.hasFlowComment=!1,this.state.pos+=2,this.nextToken();return}super.readToken_mult_modulo(t)}readToken_pipe_amp(t){const s=this.input.charCodeAt(this.state.pos+1);if(t===124&&s===125){this.finishOp(9,2);return}super.readToken_pipe_amp(t)}parseTopLevel(t,s){const n=super.parseTopLevel(t,s);return this.state.hasFlowComment&&this.raise(FlowErrors.UnterminatedFlowComment,this.state.curPosition()),n}skipBlockComment(){if(this.hasPlugin("flowComments")&&this.skipFlowComment()){if(this.state.hasFlowComment)throw this.raise(FlowErrors.NestedFlowComment,this.state.startLoc);this.hasFlowCommentCompletion();const t=this.skipFlowComment();t&&(this.state.pos+=t,this.state.hasFlowComment=!0);return}return super.skipBlockComment(this.state.hasFlowComment?"*-/":"*/")}skipFlowComment(){const{pos:t}=this.state;let s=2;for(;[32,9].includes(this.input.charCodeAt(t+s));)s++;const n=this.input.charCodeAt(s+t),i=this.input.charCodeAt(s+t+1);return n===58&&i===58?s+2:this.input.slice(s+t,s+t+12)==="flow-include"?s+12:n===58&&i!==58?s:!1}hasFlowCommentCompletion(){if(this.input.indexOf("*/",this.state.pos)===-1)throw this.raise(Errors.UnterminatedComment,this.state.curPosition())}flowEnumErrorBooleanMemberNotInitialized(t,{enumName:s,memberName:n}){this.raise(FlowErrors.EnumBooleanMemberNotInitialized,t,{memberName:n,enumName:s})}flowEnumErrorInvalidMemberInitializer(t,s){return this.raise(s.explicitType?s.explicitType==="symbol"?FlowErrors.EnumInvalidMemberInitializerSymbolType:FlowErrors.EnumInvalidMemberInitializerPrimaryType:FlowErrors.EnumInvalidMemberInitializerUnknownType,t,s)}flowEnumErrorNumberMemberNotInitialized(t,s){this.raise(FlowErrors.EnumNumberMemberNotInitialized,t,s)}flowEnumErrorStringMemberInconsistentlyInitialized(t,s){this.raise(FlowErrors.EnumStringMemberInconsistentlyInitialized,t,s)}flowEnumMemberInit(){const t=this.state.startLoc,s=()=>this.match(12)||this.match(8);switch(this.state.type){case 135:{const n=this.parseNumericLiteral(this.state.value);return s()?{type:"number",loc:n.loc.start,value:n}:{type:"invalid",loc:t}}case 134:{const n=this.parseStringLiteral(this.state.value);return s()?{type:"string",loc:n.loc.start,value:n}:{type:"invalid",loc:t}}case 85:case 86:{const n=this.parseBooleanLiteral(this.match(85));return s()?{type:"boolean",loc:n.loc.start,value:n}:{type:"invalid",loc:t}}default:return{type:"invalid",loc:t}}}flowEnumMemberRaw(){const t=this.state.startLoc,s=this.parseIdentifier(!0),n=this.eat(29)?this.flowEnumMemberInit():{type:"none",loc:t};return{id:s,init:n}}flowEnumCheckExplicitTypeMismatch(t,s,n){const{explicitType:i}=s;i!==null&&i!==n&&this.flowEnumErrorInvalidMemberInitializer(t,s)}flowEnumMembers({enumName:t,explicitType:s}){const n=new Set,i={booleanMembers:[],numberMembers:[],stringMembers:[],defaultedMembers:[]};let U=!1;for(;!this.match(8);){if(this.eat(21)){U=!0;break}const g=this.startNode(),{id:F,init:B}=this.flowEnumMemberRaw(),r=F.name;if(r==="")continue;/^[a-z]/.test(r)&&this.raise(FlowErrors.EnumInvalidMemberName,F,{memberName:r,suggestion:r[0].toUpperCase()+r.slice(1),enumName:t}),n.has(r)&&this.raise(FlowErrors.EnumDuplicateMemberName,F,{memberName:r,enumName:t}),n.add(r);const I={enumName:t,explicitType:s,memberName:r};switch(g.id=F,B.type){case"boolean":{this.flowEnumCheckExplicitTypeMismatch(B.loc,I,"boolean"),g.init=B.value,i.booleanMembers.push(this.finishNode(g,"EnumBooleanMember"));break}case"number":{this.flowEnumCheckExplicitTypeMismatch(B.loc,I,"number"),g.init=B.value,i.numberMembers.push(this.finishNode(g,"EnumNumberMember"));break}case"string":{this.flowEnumCheckExplicitTypeMismatch(B.loc,I,"string"),g.init=B.value,i.stringMembers.push(this.finishNode(g,"EnumStringMember"));break}case"invalid":throw this.flowEnumErrorInvalidMemberInitializer(B.loc,I);case"none":switch(s){case"boolean":this.flowEnumErrorBooleanMemberNotInitialized(B.loc,I);break;case"number":this.flowEnumErrorNumberMemberNotInitialized(B.loc,I);break;default:i.defaultedMembers.push(this.finishNode(g,"EnumDefaultedMember"))}}this.match(8)||this.expect(12)}return{members:i,hasUnknownMembers:U}}flowEnumStringMembers(t,s,{enumName:n}){if(t.length===0)return s;if(s.length===0)return t;if(s.length>t.length){for(const i of t)this.flowEnumErrorStringMemberInconsistentlyInitialized(i,{enumName:n});return s}else{for(const i of s)this.flowEnumErrorStringMemberInconsistentlyInitialized(i,{enumName:n});return t}}flowEnumParseExplicitType({enumName:t}){if(!this.eatContextual(102))return null;if(!tokenIsIdentifier(this.state.type))throw this.raise(FlowErrors.EnumInvalidExplicitTypeUnknownSupplied,this.state.startLoc,{enumName:t});const{value:s}=this.state;return this.next(),s!=="boolean"&&s!=="number"&&s!=="string"&&s!=="symbol"&&this.raise(FlowErrors.EnumInvalidExplicitType,this.state.startLoc,{enumName:t,invalidEnumType:s}),s}flowEnumBody(t,s){const n=s.name,i=s.loc.start,U=this.flowEnumParseExplicitType({enumName:n});this.expect(5);const{members:g,hasUnknownMembers:F}=this.flowEnumMembers({enumName:n,explicitType:U});switch(t.hasUnknownMembers=F,U){case"boolean":return t.explicitType=!0,t.members=g.booleanMembers,this.expect(8),this.finishNode(t,"EnumBooleanBody");case"number":return t.explicitType=!0,t.members=g.numberMembers,this.expect(8),this.finishNode(t,"EnumNumberBody");case"string":return t.explicitType=!0,t.members=this.flowEnumStringMembers(g.stringMembers,g.defaultedMembers,{enumName:n}),this.expect(8),this.finishNode(t,"EnumStringBody");case"symbol":return t.members=g.defaultedMembers,this.expect(8),this.finishNode(t,"EnumSymbolBody");default:{const B=()=>(t.members=[],this.expect(8),this.finishNode(t,"EnumStringBody"));t.explicitType=!1;const r=g.booleanMembers.length,I=g.numberMembers.length,C=g.stringMembers.length,o=g.defaultedMembers.length;if(!r&&!I&&!C&&!o)return B();if(!r&&!I)return t.members=this.flowEnumStringMembers(g.stringMembers,g.defaultedMembers,{enumName:n}),this.expect(8),this.finishNode(t,"EnumStringBody");if(!I&&!C&&r>=o){for(const l of g.defaultedMembers)this.flowEnumErrorBooleanMemberNotInitialized(l.loc.start,{enumName:n,memberName:l.id.name});return t.members=g.booleanMembers,this.expect(8),this.finishNode(t,"EnumBooleanBody")}else if(!r&&!C&&I>=o){for(const l of g.defaultedMembers)this.flowEnumErrorNumberMemberNotInitialized(l.loc.start,{enumName:n,memberName:l.id.name});return t.members=g.numberMembers,this.expect(8),this.finishNode(t,"EnumNumberBody")}else return this.raise(FlowErrors.EnumInconsistentMemberValues,i,{enumName:n}),B()}}}flowParseEnumDeclaration(t){const s=this.parseIdentifier();return t.id=s,t.body=this.flowEnumBody(this.startNode(),s),this.finishNode(t,"EnumDeclaration")}isLookaheadToken_lt(){const t=this.nextTokenStart();if(this.input.charCodeAt(t)===60){const s=this.input.charCodeAt(t+1);return s!==60&&s!==61}return!1}maybeUnwrapTypeCastExpression(t){return t.type==="TypeCastExpression"?t.expression:t}};const entities={__proto__:null,quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},JsxErrors=ParseErrorEnum`jsx`({AttributeIsEmpty:"JSX attributes must only be assigned a non-empty expression.",MissingClosingTagElement:({openingTagName:Q})=>`Expected corresponding JSX closing tag for <${Q}>.`,MissingClosingTagFragment:"Expected corresponding JSX closing tag for <>.",UnexpectedSequenceExpression:"Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",UnexpectedToken:({unexpected:Q,HTMLEntity:e})=>`Unexpected token \`${Q}\`. Did you mean \`${e}\` or \`{'${Q}'}\`?`,UnsupportedJsxValue:"JSX value should be either an expression or a quoted JSX text.",UnterminatedJsxContent:"Unterminated JSX contents.",UnwrappedAdjacentJSXElements:"Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"});function isFragment(Q){return Q?Q.type==="JSXOpeningFragment"||Q.type==="JSXClosingFragment":!1}function getQualifiedJSXName(Q){if(Q.type==="JSXIdentifier")return Q.name;if(Q.type==="JSXNamespacedName")return Q.namespace.name+":"+Q.name.name;if(Q.type==="JSXMemberExpression")return getQualifiedJSXName(Q.object)+"."+getQualifiedJSXName(Q.property);throw new Error("Node had unexpected type: "+Q.type)}var jsx=Q=>class extends Q{jsxReadToken(){let t="",s=this.state.pos;for(;;){if(this.state.pos>=this.length)throw this.raise(JsxErrors.UnterminatedJsxContent,this.state.startLoc);const n=this.input.charCodeAt(this.state.pos);switch(n){case 60:case 123:if(this.state.pos===this.state.start){n===60&&this.state.canStartJSXElement?(++this.state.pos,this.finishToken(143)):super.getTokenFromCode(n);return}t+=this.input.slice(s,this.state.pos),this.finishToken(142,t);return;case 38:t+=this.input.slice(s,this.state.pos),t+=this.jsxReadEntity(),s=this.state.pos;break;case 62:case 125:default:isNewLine(n)?(t+=this.input.slice(s,this.state.pos),t+=this.jsxReadNewLine(!0),s=this.state.pos):++this.state.pos}}}jsxReadNewLine(t){const s=this.input.charCodeAt(this.state.pos);let n;return++this.state.pos,s===13&&this.input.charCodeAt(this.state.pos)===10?(++this.state.pos,n=t?`
`:`\r
`):n=String.fromCharCode(s),++this.state.curLine,this.state.lineStart=this.state.pos,n}jsxReadString(t){let s="",n=++this.state.pos;for(;;){if(this.state.pos>=this.length)throw this.raise(Errors.UnterminatedString,this.state.startLoc);const i=this.input.charCodeAt(this.state.pos);if(i===t)break;i===38?(s+=this.input.slice(n,this.state.pos),s+=this.jsxReadEntity(),n=this.state.pos):isNewLine(i)?(s+=this.input.slice(n,this.state.pos),s+=this.jsxReadNewLine(!1),n=this.state.pos):++this.state.pos}s+=this.input.slice(n,this.state.pos++),this.finishToken(134,s)}jsxReadEntity(){const t=++this.state.pos;if(this.codePointAtPos(this.state.pos)===35){++this.state.pos;let s=10;this.codePointAtPos(this.state.pos)===120&&(s=16,++this.state.pos);const n=this.readInt(s,void 0,!1,"bail");if(n!==null&&this.codePointAtPos(this.state.pos)===59)return++this.state.pos,String.fromCodePoint(n)}else{let s=0,n=!1;for(;s++<10&&this.state.pos<this.length&&!(n=this.codePointAtPos(this.state.pos)===59);)++this.state.pos;if(n){const i=this.input.slice(t,this.state.pos),U=entities[i];if(++this.state.pos,U)return U}}return this.state.pos=t,"&"}jsxReadWord(){let t;const s=this.state.pos;do t=this.input.charCodeAt(++this.state.pos);while(isIdentifierChar(t)||t===45);this.finishToken(141,this.input.slice(s,this.state.pos))}jsxParseIdentifier(){const t=this.startNode();return this.match(141)?t.name=this.state.value:tokenIsKeyword(this.state.type)?t.name=tokenLabelName(this.state.type):this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")}jsxParseNamespacedName(){const t=this.state.startLoc,s=this.jsxParseIdentifier();if(!this.eat(14))return s;const n=this.startNodeAt(t);return n.namespace=s,n.name=this.jsxParseIdentifier(),this.finishNode(n,"JSXNamespacedName")}jsxParseElementName(){const t=this.state.startLoc;let s=this.jsxParseNamespacedName();if(s.type==="JSXNamespacedName")return s;for(;this.eat(16);){const n=this.startNodeAt(t);n.object=s,n.property=this.jsxParseIdentifier(),s=this.finishNode(n,"JSXMemberExpression")}return s}jsxParseAttributeValue(){let t;switch(this.state.type){case 5:return t=this.startNode(),this.setContext(types.brace),this.next(),t=this.jsxParseExpressionContainer(t,types.j_oTag),t.expression.type==="JSXEmptyExpression"&&this.raise(JsxErrors.AttributeIsEmpty,t),t;case 143:case 134:return this.parseExprAtom();default:throw this.raise(JsxErrors.UnsupportedJsxValue,this.state.startLoc)}}jsxParseEmptyExpression(){const t=this.startNodeAt(this.state.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.state.startLoc)}jsxParseSpreadChild(t){return this.next(),t.expression=this.parseExpression(),this.setContext(types.j_expr),this.state.canStartJSXElement=!0,this.expect(8),this.finishNode(t,"JSXSpreadChild")}jsxParseExpressionContainer(t,s){if(this.match(8))t.expression=this.jsxParseEmptyExpression();else{const n=this.parseExpression();t.expression=n}return this.setContext(s),this.state.canStartJSXElement=!0,this.expect(8),this.finishNode(t,"JSXExpressionContainer")}jsxParseAttribute(){const t=this.startNode();return this.match(5)?(this.setContext(types.brace),this.next(),this.expect(21),t.argument=this.parseMaybeAssignAllowIn(),this.setContext(types.j_oTag),this.state.canStartJSXElement=!0,this.expect(8),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsxParseNamespacedName(),t.value=this.eat(29)?this.jsxParseAttributeValue():null,this.finishNode(t,"JSXAttribute"))}jsxParseOpeningElementAt(t){const s=this.startNodeAt(t);return this.eat(144)?this.finishNode(s,"JSXOpeningFragment"):(s.name=this.jsxParseElementName(),this.jsxParseOpeningElementAfterName(s))}jsxParseOpeningElementAfterName(t){const s=[];for(;!this.match(56)&&!this.match(144);)s.push(this.jsxParseAttribute());return t.attributes=s,t.selfClosing=this.eat(56),this.expect(144),this.finishNode(t,"JSXOpeningElement")}jsxParseClosingElementAt(t){const s=this.startNodeAt(t);return this.eat(144)?this.finishNode(s,"JSXClosingFragment"):(s.name=this.jsxParseElementName(),this.expect(144),this.finishNode(s,"JSXClosingElement"))}jsxParseElementAt(t){const s=this.startNodeAt(t),n=[],i=this.jsxParseOpeningElementAt(t);let U=null;if(!i.selfClosing){t:for(;;)switch(this.state.type){case 143:if(t=this.state.startLoc,this.next(),this.eat(56)){U=this.jsxParseClosingElementAt(t);break t}n.push(this.jsxParseElementAt(t));break;case 142:n.push(this.parseLiteral(this.state.value,"JSXText"));break;case 5:{const g=this.startNode();this.setContext(types.brace),this.next(),this.match(21)?n.push(this.jsxParseSpreadChild(g)):n.push(this.jsxParseExpressionContainer(g,types.j_expr));break}default:this.unexpected()}isFragment(i)&&!isFragment(U)&&U!==null?this.raise(JsxErrors.MissingClosingTagFragment,U):!isFragment(i)&&isFragment(U)?this.raise(JsxErrors.MissingClosingTagElement,U,{openingTagName:getQualifiedJSXName(i.name)}):!isFragment(i)&&!isFragment(U)&&getQualifiedJSXName(U.name)!==getQualifiedJSXName(i.name)&&this.raise(JsxErrors.MissingClosingTagElement,U,{openingTagName:getQualifiedJSXName(i.name)})}if(isFragment(i)?(s.openingFragment=i,s.closingFragment=U):(s.openingElement=i,s.closingElement=U),s.children=n,this.match(47))throw this.raise(JsxErrors.UnwrappedAdjacentJSXElements,this.state.startLoc);return isFragment(i)?this.finishNode(s,"JSXFragment"):this.finishNode(s,"JSXElement")}jsxParseElement(){const t=this.state.startLoc;return this.next(),this.jsxParseElementAt(t)}setContext(t){const{context:s}=this.state;s[s.length-1]=t}parseExprAtom(t){return this.match(143)?this.jsxParseElement():this.match(47)&&this.input.charCodeAt(this.state.pos)!==33?(this.replaceToken(143),this.jsxParseElement()):super.parseExprAtom(t)}skipSpace(){this.curContext().preserveSpace||super.skipSpace()}getTokenFromCode(t){const s=this.curContext();if(s===types.j_expr){this.jsxReadToken();return}if(s===types.j_oTag||s===types.j_cTag){if(isIdentifierStart(t)){this.jsxReadWord();return}if(t===62){++this.state.pos,this.finishToken(144);return}if((t===34||t===39)&&s===types.j_oTag){this.jsxReadString(t);return}}if(t===60&&this.state.canStartJSXElement&&this.input.charCodeAt(this.state.pos+1)!==33){++this.state.pos,this.finishToken(143);return}super.getTokenFromCode(t)}updateContext(t){const{context:s,type:n}=this.state;if(n===56&&t===143)s.splice(-2,2,types.j_cTag),this.state.canStartJSXElement=!1;else if(n===143)s.push(types.j_oTag);else if(n===144){const i=s[s.length-1];i===types.j_oTag&&t===56||i===types.j_cTag?(s.pop(),this.state.canStartJSXElement=s[s.length-1]===types.j_expr):(this.setContext(types.j_expr),this.state.canStartJSXElement=!0)}else this.state.canStartJSXElement=tokenComesBeforeExpression(n)}};class TypeScriptScope extends Scope{constructor(...e){super(...e),this.tsNames=new Map}}class TypeScriptScopeHandler extends ScopeHandler{constructor(...e){super(...e),this.importsStack=[]}createScope(e){return this.importsStack.push(new Set),new TypeScriptScope(e)}enter(e){e===256&&this.importsStack.push(new Set),super.enter(e)}exit(){const e=super.exit();return e===256&&this.importsStack.pop(),e}hasImport(e,t){const s=this.importsStack.length;if(this.importsStack[s-1].has(e))return!0;if(!t&&s>1){for(let n=0;n<s-1;n++)if(this.importsStack[n].has(e))return!0}return!1}declareName(e,t,s){if(t&4096){this.hasImport(e,!0)&&this.parser.raise(Errors.VarRedeclaration,s,{identifierName:e}),this.importsStack[this.importsStack.length-1].add(e);return}const n=this.currentScope();let i=n.tsNames.get(e)||0;if(t&1024){this.maybeExportDefined(n,e),n.tsNames.set(e,i|16);return}super.declareName(e,t,s),t&2&&(t&1||(this.checkRedeclarationInScope(n,e,t,s),this.maybeExportDefined(n,e)),i=i|1),t&256&&(i=i|2),t&512&&(i=i|4),t&128&&(i=i|8),i&&n.tsNames.set(e,i)}isRedeclaredInScope(e,t,s){const n=e.tsNames.get(t);if((n&2)>0){if(s&256){const i=!!(s&512),U=(n&4)>0;return i!==U}return!0}return s&128&&(n&8)>0?e.names.get(t)&2?!!(s&1):!1:s&2&&(n&1)>0?!0:super.isRedeclaredInScope(e,t,s)}checkLocalExport(e){const{name:t}=e;if(this.hasImport(t))return;const s=this.scopeStack.length;for(let n=s-1;n>=0;n--){const U=this.scopeStack[n].tsNames.get(t);if((U&1)>0||(U&16)>0)return}super.checkLocalExport(e)}}const unwrapParenthesizedExpression=Q=>Q.type==="ParenthesizedExpression"?unwrapParenthesizedExpression(Q.expression):Q;class LValParser extends NodeUtils{toAssignable(e,t=!1){var s,n;let i;switch((e.type==="ParenthesizedExpression"||(s=e.extra)!=null&&s.parenthesized)&&(i=unwrapParenthesizedExpression(e),t?i.type==="Identifier"?this.expressionScope.recordArrowParameterBindingError(Errors.InvalidParenthesizedAssignment,e):i.type!=="MemberExpression"&&!this.isOptionalMemberExpression(i)&&this.raise(Errors.InvalidParenthesizedAssignment,e):this.raise(Errors.InvalidParenthesizedAssignment,e)),e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":break;case"ObjectExpression":e.type="ObjectPattern";for(let g=0,F=e.properties.length,B=F-1;g<F;g++){var U;const r=e.properties[g],I=g===B;this.toAssignableObjectExpressionProp(r,I,t),I&&r.type==="RestElement"&&(U=e.extra)!=null&&U.trailingCommaLoc&&this.raise(Errors.RestTrailingComma,e.extra.trailingCommaLoc)}break;case"ObjectProperty":{const{key:g,value:F}=e;this.isPrivateName(g)&&this.classScope.usePrivateName(this.getPrivateNameSV(g),g.loc.start),this.toAssignable(F,t);break}case"SpreadElement":throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");case"ArrayExpression":e.type="ArrayPattern",this.toAssignableList(e.elements,(n=e.extra)==null?void 0:n.trailingCommaLoc,t);break;case"AssignmentExpression":e.operator!=="="&&this.raise(Errors.MissingEqInAssignment,e.left.loc.end),e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);break;case"ParenthesizedExpression":this.toAssignable(i,t);break}}toAssignableObjectExpressionProp(e,t,s){if(e.type==="ObjectMethod")this.raise(e.kind==="get"||e.kind==="set"?Errors.PatternHasAccessor:Errors.PatternHasMethod,e.key);else if(e.type==="SpreadElement"){e.type="RestElement";const n=e.argument;this.checkToRestConversion(n,!1),this.toAssignable(n,s),t||this.raise(Errors.RestTrailingComma,e)}else this.toAssignable(e,s)}toAssignableList(e,t,s){const n=e.length-1;for(let i=0;i<=n;i++){const U=e[i];if(U){if(U.type==="SpreadElement"){U.type="RestElement";const g=U.argument;this.checkToRestConversion(g,!0),this.toAssignable(g,s)}else this.toAssignable(U,s);U.type==="RestElement"&&(i<n?this.raise(Errors.RestTrailingComma,U):t&&this.raise(Errors.RestTrailingComma,t))}}}isAssignable(e,t){switch(e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":return!0;case"ObjectExpression":{const s=e.properties.length-1;return e.properties.every((n,i)=>n.type!=="ObjectMethod"&&(i===s||n.type!=="SpreadElement")&&this.isAssignable(n))}case"ObjectProperty":return this.isAssignable(e.value);case"SpreadElement":return this.isAssignable(e.argument);case"ArrayExpression":return e.elements.every(s=>s===null||this.isAssignable(s));case"AssignmentExpression":return e.operator==="=";case"ParenthesizedExpression":return this.isAssignable(e.expression);case"MemberExpression":case"OptionalMemberExpression":return!t;default:return!1}}toReferencedList(e,t){return e}toReferencedListDeep(e,t){this.toReferencedList(e,t);for(const s of e)(s==null?void 0:s.type)==="ArrayExpression"&&this.toReferencedListDeep(s.elements)}parseSpread(e){const t=this.startNode();return this.next(),t.argument=this.parseMaybeAssignAllowIn(e,void 0),this.finishNode(t,"SpreadElement")}parseRestBinding(){const e=this.startNode();return this.next(),e.argument=this.parseBindingAtom(),this.finishNode(e,"RestElement")}parseBindingAtom(){switch(this.state.type){case 0:{const e=this.startNode();return this.next(),e.elements=this.parseBindingList(3,93,1),this.finishNode(e,"ArrayPattern")}case 5:return this.parseObjectLike(8,!0)}return this.parseIdentifier()}parseBindingList(e,t,s){const n=s&1,i=[];let U=!0;for(;!this.eat(e);)if(U?U=!1:this.expect(12),n&&this.match(12))i.push(null);else{if(this.eat(e))break;if(this.match(21)){let g=this.parseRestBinding();if((this.hasPlugin("flow")||s&2)&&(g=this.parseFunctionParamType(g)),i.push(g),!this.checkCommaAfterRest(t)){this.expect(e);break}}else{const g=[];for(this.match(26)&&this.hasPlugin("decorators")&&this.raise(Errors.UnsupportedParameterDecorator,this.state.startLoc);this.match(26);)g.push(this.parseDecorator());i.push(this.parseAssignableListItem(s,g))}}return i}parseBindingRestProperty(e){return this.next(),e.argument=this.parseIdentifier(),this.checkCommaAfterRest(125),this.finishNode(e,"RestElement")}parseBindingProperty(){const{type:e,startLoc:t}=this.state;if(e===21)return this.parseBindingRestProperty(this.startNode());const s=this.startNode();return e===139?(this.expectPlugin("destructuringPrivate",t),this.classScope.usePrivateName(this.state.value,t),s.key=this.parsePrivateName()):this.parsePropertyName(s),s.method=!1,this.parseObjPropValue(s,t,!1,!1,!0,!1)}parseAssignableListItem(e,t){const s=this.parseMaybeDefault();(this.hasPlugin("flow")||e&2)&&this.parseFunctionParamType(s);const n=this.parseMaybeDefault(s.loc.start,s);return t.length&&(s.decorators=t),n}parseFunctionParamType(e){return e}parseMaybeDefault(e,t){var s,n;if((s=e)!=null||(e=this.state.startLoc),t=(n=t)!=null?n:this.parseBindingAtom(),!this.eat(29))return t;const i=this.startNodeAt(e);return i.left=t,i.right=this.parseMaybeAssignAllowIn(),this.finishNode(i,"AssignmentPattern")}isValidLVal(e,t,s){switch(e){case"AssignmentPattern":return"left";case"RestElement":return"argument";case"ObjectProperty":return"value";case"ParenthesizedExpression":return"expression";case"ArrayPattern":return"elements";case"ObjectPattern":return"properties"}return!1}isOptionalMemberExpression(e){return e.type==="OptionalMemberExpression"}checkLVal(e,t,s=64,n=!1,i=!1,U=!1){var g;const F=e.type;if(this.isObjectMethod(e))return;const B=this.isOptionalMemberExpression(e);if(B||F==="MemberExpression"){B&&(this.expectPlugin("optionalChainingAssign",e.loc.start),t.type!=="AssignmentExpression"&&this.raise(Errors.InvalidLhsOptionalChaining,e,{ancestor:t})),s!==64&&this.raise(Errors.InvalidPropertyBindingPattern,e);return}if(F==="Identifier"){this.checkIdentifier(e,s,i);const{name:A}=e;n&&(n.has(A)?this.raise(Errors.ParamDupe,e):n.add(A));return}const r=this.isValidLVal(F,!(U||(g=e.extra)!=null&&g.parenthesized)&&t.type==="AssignmentExpression",s);if(r===!0)return;if(r===!1){const A=s===64?Errors.InvalidLhs:Errors.InvalidLhsBinding;this.raise(A,e,{ancestor:t});return}let I,C;typeof r=="string"?(I=r,C=F==="ParenthesizedExpression"):[I,C]=r;const o=F==="ArrayPattern"||F==="ObjectPattern"?{type:F}:t,l=e[I];if(Array.isArray(l))for(const A of l)A&&this.checkLVal(A,o,s,n,i,C);else l&&this.checkLVal(l,o,s,n,i,C)}checkIdentifier(e,t,s=!1){this.state.strict&&(s?isStrictBindReservedWord(e.name,this.inModule):isStrictBindOnlyReservedWord(e.name))&&(t===64?this.raise(Errors.StrictEvalArguments,e,{referenceName:e.name}):this.raise(Errors.StrictEvalArgumentsBinding,e,{bindingName:e.name})),t&8192&&e.name==="let"&&this.raise(Errors.LetInLexicalBinding,e),t&64||this.declareNameFromIdentifier(e,t)}declareNameFromIdentifier(e,t){this.scope.declareName(e.name,t,e.loc.start)}checkToRestConversion(e,t){switch(e.type){case"ParenthesizedExpression":this.checkToRestConversion(e.expression,t);break;case"Identifier":case"MemberExpression":break;case"ArrayExpression":case"ObjectExpression":if(t)break;default:this.raise(Errors.InvalidRestAssignmentPattern,e)}}checkCommaAfterRest(e){return this.match(12)?(this.raise(this.lookaheadCharCode()===e?Errors.RestTrailingComma:Errors.ElementAfterRest,this.state.startLoc),!0):!1}}function nonNull(Q){if(Q==null)throw new Error(`Unexpected ${Q} value.`);return Q}function assert(Q){if(!Q)throw new Error("Assert fail")}const TSErrors=ParseErrorEnum`typescript`({AbstractMethodHasImplementation:({methodName:Q})=>`Method '${Q}' cannot have an implementation because it is marked abstract.`,AbstractPropertyHasInitializer:({propertyName:Q})=>`Property '${Q}' cannot have an initializer because it is marked abstract.`,AccessorCannotBeOptional:"An 'accessor' property cannot be declared optional.",AccessorCannotDeclareThisParameter:"'get' and 'set' accessors cannot declare 'this' parameters.",AccessorCannotHaveTypeParameters:"An accessor cannot have type parameters.",ClassMethodHasDeclare:"Class methods cannot have the 'declare' modifier.",ClassMethodHasReadonly:"Class methods cannot have the 'readonly' modifier.",ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:"A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",ConstructorHasTypeParameters:"Type parameters cannot appear on a constructor declaration.",DeclareAccessor:({kind:Q})=>`'declare' is not allowed in ${Q}ters.`,DeclareClassFieldHasInitializer:"Initializers are not allowed in ambient contexts.",DeclareFunctionHasImplementation:"An implementation cannot be declared in ambient contexts.",DuplicateAccessibilityModifier:({modifier:Q})=>"Accessibility modifier already seen.",DuplicateModifier:({modifier:Q})=>`Duplicate modifier: '${Q}'.`,EmptyHeritageClauseType:({token:Q})=>`'${Q}' list cannot be empty.`,EmptyTypeArguments:"Type argument list cannot be empty.",EmptyTypeParameters:"Type parameter list cannot be empty.",ExpectedAmbientAfterExportDeclare:"'export declare' must be followed by an ambient declaration.",ImportAliasHasImportType:"An import alias can not use 'import type'.",ImportReflectionHasImportType:"An `import module` declaration can not use `type` modifier",IncompatibleModifiers:({modifiers:Q})=>`'${Q[0]}' modifier cannot be used with '${Q[1]}' modifier.`,IndexSignatureHasAbstract:"Index signatures cannot have the 'abstract' modifier.",IndexSignatureHasAccessibility:({modifier:Q})=>`Index signatures cannot have an accessibility modifier ('${Q}').`,IndexSignatureHasDeclare:"Index signatures cannot have the 'declare' modifier.",IndexSignatureHasOverride:"'override' modifier cannot appear on an index signature.",IndexSignatureHasStatic:"Index signatures cannot have the 'static' modifier.",InitializerNotAllowedInAmbientContext:"Initializers are not allowed in ambient contexts.",InvalidModifierOnTypeMember:({modifier:Q})=>`'${Q}' modifier cannot appear on a type member.`,InvalidModifierOnTypeParameter:({modifier:Q})=>`'${Q}' modifier cannot appear on a type parameter.`,InvalidModifierOnTypeParameterPositions:({modifier:Q})=>`'${Q}' modifier can only appear on a type parameter of a class, interface or type alias.`,InvalidModifiersOrder:({orderedModifiers:Q})=>`'${Q[0]}' modifier must precede '${Q[1]}' modifier.`,InvalidPropertyAccessAfterInstantiationExpression:"Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",InvalidTupleMemberLabel:"Tuple members must be labeled with a simple identifier.",MissingInterfaceName:"'interface' declarations must be followed by an identifier.",NonAbstractClassHasAbstractMethod:"Abstract methods can only appear within an abstract class.",NonClassMethodPropertyHasAbstractModifer:"'abstract' modifier can only appear on a class, method, or property declaration.",OptionalTypeBeforeRequired:"A required element cannot follow an optional element.",OverrideNotInSubClass:"This member cannot have an 'override' modifier because its containing class does not extend another class.",PatternIsOptional:"A binding pattern parameter cannot be optional in an implementation signature.",PrivateElementHasAbstract:"Private elements cannot have the 'abstract' modifier.",PrivateElementHasAccessibility:({modifier:Q})=>`Private elements cannot have an accessibility modifier ('${Q}').`,ReadonlyForMethodSignature:"'readonly' modifier can only appear on a property declaration or index signature.",ReservedArrowTypeParam:"This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",ReservedTypeAssertion:"This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",SetAccessorCannotHaveOptionalParameter:"A 'set' accessor cannot have an optional parameter.",SetAccessorCannotHaveRestParameter:"A 'set' accessor cannot have rest parameter.",SetAccessorCannotHaveReturnType:"A 'set' accessor cannot have a return type annotation.",SingleTypeParameterWithoutTrailingComma:({typeParameterName:Q})=>`Single type parameter ${Q} should have a trailing comma. Example usage: <${Q},>.`,StaticBlockCannotHaveModifier:"Static class blocks cannot have any modifier.",TupleOptionalAfterType:"A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",TypeAnnotationAfterAssign:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeImportCannotSpecifyDefaultAndNamed:"A type-only import can specify a default import or named bindings, but not both.",TypeModifierIsUsedInTypeExports:"The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",TypeModifierIsUsedInTypeImports:"The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",UnexpectedParameterModifier:"A parameter property is only allowed in a constructor implementation.",UnexpectedReadonly:"'readonly' type modifier is only permitted on array and tuple literal types.",UnexpectedTypeAnnotation:"Did not expect a type annotation here.",UnexpectedTypeCastInParameter:"Unexpected type cast in parameter position.",UnsupportedImportTypeArgument:"Argument in a type import must be a string literal.",UnsupportedParameterPropertyKind:"A parameter property may not be declared using a binding pattern.",UnsupportedSignatureParameterKind:({type:Q})=>`Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${Q}.`});function keywordTypeFromName(Q){switch(Q){case"any":return"TSAnyKeyword";case"boolean":return"TSBooleanKeyword";case"bigint":return"TSBigIntKeyword";case"never":return"TSNeverKeyword";case"number":return"TSNumberKeyword";case"object":return"TSObjectKeyword";case"string":return"TSStringKeyword";case"symbol":return"TSSymbolKeyword";case"undefined":return"TSUndefinedKeyword";case"unknown":return"TSUnknownKeyword";default:return}}function tsIsAccessModifier(Q){return Q==="private"||Q==="public"||Q==="protected"}function tsIsVarianceAnnotations(Q){return Q==="in"||Q==="out"}var typescript=Q=>class extends Q{constructor(...t){super(...t),this.tsParseInOutModifiers=this.tsParseModifiers.bind(this,{allowedModifiers:["in","out"],disallowedModifiers:["const","public","private","protected","readonly","declare","abstract","override"],errorTemplate:TSErrors.InvalidModifierOnTypeParameter}),this.tsParseConstModifier=this.tsParseModifiers.bind(this,{allowedModifiers:["const"],disallowedModifiers:["in","out"],errorTemplate:TSErrors.InvalidModifierOnTypeParameterPositions}),this.tsParseInOutConstModifiers=this.tsParseModifiers.bind(this,{allowedModifiers:["in","out","const"],disallowedModifiers:["public","private","protected","readonly","declare","abstract","override"],errorTemplate:TSErrors.InvalidModifierOnTypeParameter})}getScopeHandler(){return TypeScriptScopeHandler}tsIsIdentifier(){return tokenIsIdentifier(this.state.type)}tsTokenCanFollowModifier(){return this.match(0)||this.match(5)||this.match(55)||this.match(21)||this.match(139)||this.isLiteralPropertyName()}tsNextTokenOnSameLineAndCanFollowModifier(){return this.next(),this.hasPrecedingLineBreak()?!1:this.tsTokenCanFollowModifier()}tsNextTokenCanFollowModifier(){return this.match(106)?(this.next(),this.tsTokenCanFollowModifier()):this.tsNextTokenOnSameLineAndCanFollowModifier()}tsParseModifier(t,s){if(!tokenIsIdentifier(this.state.type)&&this.state.type!==58&&this.state.type!==75)return;const n=this.state.value;if(t.includes(n)){if(s&&this.tsIsStartOfStaticBlocks())return;if(this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))return n}}tsParseModifiers({allowedModifiers:t,disallowedModifiers:s,stopOnStartOfClassStaticBlock:n,errorTemplate:i=TSErrors.InvalidModifierOnTypeMember},U){const g=(B,r,I,C)=>{r===I&&U[C]&&this.raise(TSErrors.InvalidModifiersOrder,B,{orderedModifiers:[I,C]})},F=(B,r,I,C)=>{(U[I]&&r===C||U[C]&&r===I)&&this.raise(TSErrors.IncompatibleModifiers,B,{modifiers:[I,C]})};for(;;){const{startLoc:B}=this.state,r=this.tsParseModifier(t.concat(s??[]),n);if(!r)break;tsIsAccessModifier(r)?U.accessibility?this.raise(TSErrors.DuplicateAccessibilityModifier,B,{modifier:r}):(g(B,r,r,"override"),g(B,r,r,"static"),g(B,r,r,"readonly"),U.accessibility=r):tsIsVarianceAnnotations(r)?(U[r]&&this.raise(TSErrors.DuplicateModifier,B,{modifier:r}),U[r]=!0,g(B,r,"in","out")):(hasOwnProperty.call(U,r)?this.raise(TSErrors.DuplicateModifier,B,{modifier:r}):(g(B,r,"static","readonly"),g(B,r,"static","override"),g(B,r,"override","readonly"),g(B,r,"abstract","override"),F(B,r,"declare","override"),F(B,r,"static","abstract")),U[r]=!0),s!=null&&s.includes(r)&&this.raise(i,B,{modifier:r})}}tsIsListTerminator(t){switch(t){case"EnumMembers":case"TypeMembers":return this.match(8);case"HeritageClauseElement":return this.match(5);case"TupleElementTypes":return this.match(3);case"TypeParametersOrArguments":return this.match(48)}}tsParseList(t,s){const n=[];for(;!this.tsIsListTerminator(t);)n.push(s());return n}tsParseDelimitedList(t,s,n){return nonNull(this.tsParseDelimitedListWorker(t,s,!0,n))}tsParseDelimitedListWorker(t,s,n,i){const U=[];let g=-1;for(;!this.tsIsListTerminator(t);){g=-1;const F=s();if(F==null)return;if(U.push(F),this.eat(12)){g=this.state.lastTokStartLoc.index;continue}if(this.tsIsListTerminator(t))break;n&&this.expect(12);return}return i&&(i.value=g),U}tsParseBracketedList(t,s,n,i,U){i||(n?this.expect(0):this.expect(47));const g=this.tsParseDelimitedList(t,s,U);return n?this.expect(3):this.expect(48),g}tsParseImportType(){const t=this.startNode();return this.expect(83),this.expect(10),this.match(134)||this.raise(TSErrors.UnsupportedImportTypeArgument,this.state.startLoc),t.argument=super.parseExprAtom(),this.eat(12)&&!this.match(11)?(t.options=super.parseMaybeAssignAllowIn(),this.eat(12)):t.options=null,this.expect(11),this.eat(16)&&(t.qualifier=this.tsParseEntityName()),this.match(47)&&(t.typeParameters=this.tsParseTypeArguments()),this.finishNode(t,"TSImportType")}tsParseEntityName(t=!0){let s=this.parseIdentifier(t);for(;this.eat(16);){const n=this.startNodeAtNode(s);n.left=s,n.right=this.parseIdentifier(t),s=this.finishNode(n,"TSQualifiedName")}return s}tsParseTypeReference(){const t=this.startNode();return t.typeName=this.tsParseEntityName(),!this.hasPrecedingLineBreak()&&this.match(47)&&(t.typeParameters=this.tsParseTypeArguments()),this.finishNode(t,"TSTypeReference")}tsParseThisTypePredicate(t){this.next();const s=this.startNodeAtNode(t);return s.parameterName=t,s.typeAnnotation=this.tsParseTypeAnnotation(!1),s.asserts=!1,this.finishNode(s,"TSTypePredicate")}tsParseThisTypeNode(){const t=this.startNode();return this.next(),this.finishNode(t,"TSThisType")}tsParseTypeQuery(){const t=this.startNode();return this.expect(87),this.match(83)?t.exprName=this.tsParseImportType():t.exprName=this.tsParseEntityName(),!this.hasPrecedingLineBreak()&&this.match(47)&&(t.typeParameters=this.tsParseTypeArguments()),this.finishNode(t,"TSTypeQuery")}tsParseTypeParameter(t){const s=this.startNode();return t(s),s.name=this.tsParseTypeParameterName(),s.constraint=this.tsEatThenParseType(81),s.default=this.tsEatThenParseType(29),this.finishNode(s,"TSTypeParameter")}tsTryParseTypeParameters(t){if(this.match(47))return this.tsParseTypeParameters(t)}tsParseTypeParameters(t){const s=this.startNode();this.match(47)||this.match(143)?this.next():this.unexpected();const n={value:-1};return s.params=this.tsParseBracketedList("TypeParametersOrArguments",this.tsParseTypeParameter.bind(this,t),!1,!0,n),s.params.length===0&&this.raise(TSErrors.EmptyTypeParameters,s),n.value!==-1&&this.addExtra(s,"trailingComma",n.value),this.finishNode(s,"TSTypeParameterDeclaration")}tsFillSignature(t,s){const n=t===19,i="parameters",U="typeAnnotation";s.typeParameters=this.tsTryParseTypeParameters(this.tsParseConstModifier),this.expect(10),s[i]=this.tsParseBindingListForSignature(),n?s[U]=this.tsParseTypeOrTypePredicateAnnotation(t):this.match(t)&&(s[U]=this.tsParseTypeOrTypePredicateAnnotation(t))}tsParseBindingListForSignature(){const t=super.parseBindingList(11,41,2);for(const s of t){const{type:n}=s;(n==="AssignmentPattern"||n==="TSParameterProperty")&&this.raise(TSErrors.UnsupportedSignatureParameterKind,s,{type:n})}return t}tsParseTypeMemberSemicolon(){!this.eat(12)&&!this.isLineTerminator()&&this.expect(13)}tsParseSignatureMember(t,s){return this.tsFillSignature(14,s),this.tsParseTypeMemberSemicolon(),this.finishNode(s,t)}tsIsUnambiguouslyIndexSignature(){return this.next(),tokenIsIdentifier(this.state.type)?(this.next(),this.match(14)):!1}tsTryParseIndexSignature(t){if(!(this.match(0)&&this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))return;this.expect(0);const s=this.parseIdentifier();s.typeAnnotation=this.tsParseTypeAnnotation(),this.resetEndLocation(s),this.expect(3),t.parameters=[s];const n=this.tsTryParseTypeAnnotation();return n&&(t.typeAnnotation=n),this.tsParseTypeMemberSemicolon(),this.finishNode(t,"TSIndexSignature")}tsParsePropertyOrMethodSignature(t,s){this.eat(17)&&(t.optional=!0);const n=t;if(this.match(10)||this.match(47)){s&&this.raise(TSErrors.ReadonlyForMethodSignature,t);const i=n;i.kind&&this.match(47)&&this.raise(TSErrors.AccessorCannotHaveTypeParameters,this.state.curPosition()),this.tsFillSignature(14,i),this.tsParseTypeMemberSemicolon();const U="parameters",g="typeAnnotation";if(i.kind==="get")i[U].length>0&&(this.raise(Errors.BadGetterArity,this.state.curPosition()),this.isThisParam(i[U][0])&&this.raise(TSErrors.AccessorCannotDeclareThisParameter,this.state.curPosition()));else if(i.kind==="set"){if(i[U].length!==1)this.raise(Errors.BadSetterArity,this.state.curPosition());else{const F=i[U][0];this.isThisParam(F)&&this.raise(TSErrors.AccessorCannotDeclareThisParameter,this.state.curPosition()),F.type==="Identifier"&&F.optional&&this.raise(TSErrors.SetAccessorCannotHaveOptionalParameter,this.state.curPosition()),F.type==="RestElement"&&this.raise(TSErrors.SetAccessorCannotHaveRestParameter,this.state.curPosition())}i[g]&&this.raise(TSErrors.SetAccessorCannotHaveReturnType,i[g])}else i.kind="method";return this.finishNode(i,"TSMethodSignature")}else{const i=n;s&&(i.readonly=!0);const U=this.tsTryParseTypeAnnotation();return U&&(i.typeAnnotation=U),this.tsParseTypeMemberSemicolon(),this.finishNode(i,"TSPropertySignature")}}tsParseTypeMember(){const t=this.startNode();if(this.match(10)||this.match(47))return this.tsParseSignatureMember("TSCallSignatureDeclaration",t);if(this.match(77)){const n=this.startNode();return this.next(),this.match(10)||this.match(47)?this.tsParseSignatureMember("TSConstructSignatureDeclaration",t):(t.key=this.createIdentifier(n,"new"),this.tsParsePropertyOrMethodSignature(t,!1))}this.tsParseModifiers({allowedModifiers:["readonly"],disallowedModifiers:["declare","abstract","private","protected","public","static","override"]},t);const s=this.tsTryParseIndexSignature(t);return s||(super.parsePropertyName(t),!t.computed&&t.key.type==="Identifier"&&(t.key.name==="get"||t.key.name==="set")&&this.tsTokenCanFollowModifier()&&(t.kind=t.key.name,super.parsePropertyName(t)),this.tsParsePropertyOrMethodSignature(t,!!t.readonly))}tsParseTypeLiteral(){const t=this.startNode();return t.members=this.tsParseObjectTypeMembers(),this.finishNode(t,"TSTypeLiteral")}tsParseObjectTypeMembers(){this.expect(5);const t=this.tsParseList("TypeMembers",this.tsParseTypeMember.bind(this));return this.expect(8),t}tsIsStartOfMappedType(){return this.next(),this.eat(53)?this.isContextual(122):(this.isContextual(122)&&this.next(),!this.match(0)||(this.next(),!this.tsIsIdentifier())?!1:(this.next(),this.match(58)))}tsParseMappedType(){const t=this.startNode();this.expect(5),this.match(53)?(t.readonly=this.state.value,this.next(),this.expectContextual(122)):this.eatContextual(122)&&(t.readonly=!0),this.expect(0);{const s=this.startNode();s.name=this.tsParseTypeParameterName(),s.constraint=this.tsExpectThenParseType(58),t.typeParameter=this.finishNode(s,"TSTypeParameter")}return t.nameType=this.eatContextual(93)?this.tsParseType():null,this.expect(3),this.match(53)?(t.optional=this.state.value,this.next(),this.expect(17)):this.eat(17)&&(t.optional=!0),t.typeAnnotation=this.tsTryParseType(),this.semicolon(),this.expect(8),this.finishNode(t,"TSMappedType")}tsParseTupleType(){const t=this.startNode();t.elementTypes=this.tsParseBracketedList("TupleElementTypes",this.tsParseTupleElementType.bind(this),!0,!1);let s=!1;return t.elementTypes.forEach(n=>{const{type:i}=n;s&&i!=="TSRestType"&&i!=="TSOptionalType"&&!(i==="TSNamedTupleMember"&&n.optional)&&this.raise(TSErrors.OptionalTypeBeforeRequired,n),s||(s=i==="TSNamedTupleMember"&&n.optional||i==="TSOptionalType")}),this.finishNode(t,"TSTupleType")}tsParseTupleElementType(){const{startLoc:t}=this.state,s=this.eat(21);let n,i,U,g;const B=tokenIsKeywordOrIdentifier(this.state.type)?this.lookaheadCharCode():null;if(B===58)n=!0,U=!1,i=this.parseIdentifier(!0),this.expect(14),g=this.tsParseType();else if(B===63){U=!0;const r=this.state.startLoc,I=this.state.value,C=this.tsParseNonArrayType();this.lookaheadCharCode()===58?(n=!0,i=this.createIdentifier(this.startNodeAt(r),I),this.expect(17),this.expect(14),g=this.tsParseType()):(n=!1,g=C,this.expect(17))}else g=this.tsParseType(),U=this.eat(17),n=this.eat(14);if(n){let r;i?(r=this.startNodeAtNode(i),r.optional=U,r.label=i,r.elementType=g,this.eat(17)&&(r.optional=!0,this.raise(TSErrors.TupleOptionalAfterType,this.state.lastTokStartLoc))):(r=this.startNodeAtNode(g),r.optional=U,this.raise(TSErrors.InvalidTupleMemberLabel,g),r.label=g,r.elementType=this.tsParseType()),g=this.finishNode(r,"TSNamedTupleMember")}else if(U){const r=this.startNodeAtNode(g);r.typeAnnotation=g,g=this.finishNode(r,"TSOptionalType")}if(s){const r=this.startNodeAt(t);r.typeAnnotation=g,g=this.finishNode(r,"TSRestType")}return g}tsParseParenthesizedType(){const t=this.startNode();return this.expect(10),t.typeAnnotation=this.tsParseType(),this.expect(11),this.finishNode(t,"TSParenthesizedType")}tsParseFunctionOrConstructorType(t,s){const n=this.startNode();return t==="TSConstructorType"&&(n.abstract=!!s,s&&this.next(),this.next()),this.tsInAllowConditionalTypesContext(()=>this.tsFillSignature(19,n)),this.finishNode(n,t)}tsParseLiteralTypeNode(){const t=this.startNode();switch(this.state.type){case 135:case 136:case 134:case 85:case 86:t.literal=super.parseExprAtom();break;default:this.unexpected()}return this.finishNode(t,"TSLiteralType")}tsParseTemplateLiteralType(){const t=this.startNode();return t.literal=super.parseTemplate(!1),this.finishNode(t,"TSLiteralType")}parseTemplateSubstitution(){return this.state.inType?this.tsParseType():super.parseTemplateSubstitution()}tsParseThisTypeOrThisTypePredicate(){const t=this.tsParseThisTypeNode();return this.isContextual(116)&&!this.hasPrecedingLineBreak()?this.tsParseThisTypePredicate(t):t}tsParseNonArrayType(){switch(this.state.type){case 134:case 135:case 136:case 85:case 86:return this.tsParseLiteralTypeNode();case 53:if(this.state.value==="-"){const t=this.startNode(),s=this.lookahead();return s.type!==135&&s.type!==136&&this.unexpected(),t.literal=this.parseMaybeUnary(),this.finishNode(t,"TSLiteralType")}break;case 78:return this.tsParseThisTypeOrThisTypePredicate();case 87:return this.tsParseTypeQuery();case 83:return this.tsParseImportType();case 5:return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))?this.tsParseMappedType():this.tsParseTypeLiteral();case 0:return this.tsParseTupleType();case 10:return this.tsParseParenthesizedType();case 25:case 24:return this.tsParseTemplateLiteralType();default:{const{type:t}=this.state;if(tokenIsIdentifier(t)||t===88||t===84){const s=t===88?"TSVoidKeyword":t===84?"TSNullKeyword":keywordTypeFromName(this.state.value);if(s!==void 0&&this.lookaheadCharCode()!==46){const n=this.startNode();return this.next(),this.finishNode(n,s)}return this.tsParseTypeReference()}}}this.unexpected()}tsParseArrayTypeOrHigher(){let t=this.tsParseNonArrayType();for(;!this.hasPrecedingLineBreak()&&this.eat(0);)if(this.match(3)){const s=this.startNodeAtNode(t);s.elementType=t,this.expect(3),t=this.finishNode(s,"TSArrayType")}else{const s=this.startNodeAtNode(t);s.objectType=t,s.indexType=this.tsParseType(),this.expect(3),t=this.finishNode(s,"TSIndexedAccessType")}return t}tsParseTypeOperator(){const t=this.startNode(),s=this.state.value;return this.next(),t.operator=s,t.typeAnnotation=this.tsParseTypeOperatorOrHigher(),s==="readonly"&&this.tsCheckTypeAnnotationForReadOnly(t),this.finishNode(t,"TSTypeOperator")}tsCheckTypeAnnotationForReadOnly(t){switch(t.typeAnnotation.type){case"TSTupleType":case"TSArrayType":return;default:this.raise(TSErrors.UnexpectedReadonly,t)}}tsParseInferType(){const t=this.startNode();this.expectContextual(115);const s=this.startNode();return s.name=this.tsParseTypeParameterName(),s.constraint=this.tsTryParse(()=>this.tsParseConstraintForInferType()),t.typeParameter=this.finishNode(s,"TSTypeParameter"),this.finishNode(t,"TSInferType")}tsParseConstraintForInferType(){if(this.eat(81)){const t=this.tsInDisallowConditionalTypesContext(()=>this.tsParseType());if(this.state.inDisallowConditionalTypesContext||!this.match(17))return t}}tsParseTypeOperatorOrHigher(){return tokenIsTSTypeOperator(this.state.type)&&!this.state.containsEsc?this.tsParseTypeOperator():this.isContextual(115)?this.tsParseInferType():this.tsInAllowConditionalTypesContext(()=>this.tsParseArrayTypeOrHigher())}tsParseUnionOrIntersectionType(t,s,n){const i=this.startNode(),U=this.eat(n),g=[];do g.push(s());while(this.eat(n));return g.length===1&&!U?g[0]:(i.types=g,this.finishNode(i,t))}tsParseIntersectionTypeOrHigher(){return this.tsParseUnionOrIntersectionType("TSIntersectionType",this.tsParseTypeOperatorOrHigher.bind(this),45)}tsParseUnionTypeOrHigher(){return this.tsParseUnionOrIntersectionType("TSUnionType",this.tsParseIntersectionTypeOrHigher.bind(this),43)}tsIsStartOfFunctionType(){return this.match(47)?!0:this.match(10)&&this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))}tsSkipParameterStart(){if(tokenIsIdentifier(this.state.type)||this.match(78))return this.next(),!0;if(this.match(5)){const{errors:t}=this.state,s=t.length;try{return this.parseObjectLike(8,!0),t.length===s}catch{return!1}}if(this.match(0)){this.next();const{errors:t}=this.state,s=t.length;try{return super.parseBindingList(3,93,1),t.length===s}catch{return!1}}return!1}tsIsUnambiguouslyStartOfFunctionType(){return this.next(),!!(this.match(11)||this.match(21)||this.tsSkipParameterStart()&&(this.match(14)||this.match(12)||this.match(17)||this.match(29)||this.match(11)&&(this.next(),this.match(19))))}tsParseTypeOrTypePredicateAnnotation(t){return this.tsInType(()=>{const s=this.startNode();this.expect(t);const n=this.startNode(),i=!!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));if(i&&this.match(78)){let F=this.tsParseThisTypeOrThisTypePredicate();return F.type==="TSThisType"?(n.parameterName=F,n.asserts=!0,n.typeAnnotation=null,F=this.finishNode(n,"TSTypePredicate")):(this.resetStartLocationFromNode(F,n),F.asserts=!0),s.typeAnnotation=F,this.finishNode(s,"TSTypeAnnotation")}const U=this.tsIsIdentifier()&&this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));if(!U)return i?(n.parameterName=this.parseIdentifier(),n.asserts=i,n.typeAnnotation=null,s.typeAnnotation=this.finishNode(n,"TSTypePredicate"),this.finishNode(s,"TSTypeAnnotation")):this.tsParseTypeAnnotation(!1,s);const g=this.tsParseTypeAnnotation(!1);return n.parameterName=U,n.typeAnnotation=g,n.asserts=i,s.typeAnnotation=this.finishNode(n,"TSTypePredicate"),this.finishNode(s,"TSTypeAnnotation")})}tsTryParseTypeOrTypePredicateAnnotation(){if(this.match(14))return this.tsParseTypeOrTypePredicateAnnotation(14)}tsTryParseTypeAnnotation(){if(this.match(14))return this.tsParseTypeAnnotation()}tsTryParseType(){return this.tsEatThenParseType(14)}tsParseTypePredicatePrefix(){const t=this.parseIdentifier();if(this.isContextual(116)&&!this.hasPrecedingLineBreak())return this.next(),t}tsParseTypePredicateAsserts(){if(this.state.type!==109)return!1;const t=this.state.containsEsc;return this.next(),!tokenIsIdentifier(this.state.type)&&!this.match(78)?!1:(t&&this.raise(Errors.InvalidEscapedReservedWord,this.state.lastTokStartLoc,{reservedWord:"asserts"}),!0)}tsParseTypeAnnotation(t=!0,s=this.startNode()){return this.tsInType(()=>{t&&this.expect(14),s.typeAnnotation=this.tsParseType()}),this.finishNode(s,"TSTypeAnnotation")}tsParseType(){assert(this.state.inType);const t=this.tsParseNonConditionalType();if(this.state.inDisallowConditionalTypesContext||this.hasPrecedingLineBreak()||!this.eat(81))return t;const s=this.startNodeAtNode(t);return s.checkType=t,s.extendsType=this.tsInDisallowConditionalTypesContext(()=>this.tsParseNonConditionalType()),this.expect(17),s.trueType=this.tsInAllowConditionalTypesContext(()=>this.tsParseType()),this.expect(14),s.falseType=this.tsInAllowConditionalTypesContext(()=>this.tsParseType()),this.finishNode(s,"TSConditionalType")}isAbstractConstructorSignature(){return this.isContextual(124)&&this.lookahead().type===77}tsParseNonConditionalType(){return this.tsIsStartOfFunctionType()?this.tsParseFunctionOrConstructorType("TSFunctionType"):this.match(77)?this.tsParseFunctionOrConstructorType("TSConstructorType"):this.isAbstractConstructorSignature()?this.tsParseFunctionOrConstructorType("TSConstructorType",!0):this.tsParseUnionTypeOrHigher()}tsParseTypeAssertion(){this.getPluginOption("typescript","disallowAmbiguousJSXLike")&&this.raise(TSErrors.ReservedTypeAssertion,this.state.startLoc);const t=this.startNode();return t.typeAnnotation=this.tsInType(()=>(this.next(),this.match(75)?this.tsParseTypeReference():this.tsParseType())),this.expect(48),t.expression=this.parseMaybeUnary(),this.finishNode(t,"TSTypeAssertion")}tsParseHeritageClause(t){const s=this.state.startLoc,n=this.tsParseDelimitedList("HeritageClauseElement",()=>{const i=this.startNode();return i.expression=this.tsParseEntityName(),this.match(47)&&(i.typeParameters=this.tsParseTypeArguments()),this.finishNode(i,"TSExpressionWithTypeArguments")});return n.length||this.raise(TSErrors.EmptyHeritageClauseType,s,{token:t}),n}tsParseInterfaceDeclaration(t,s={}){if(this.hasFollowingLineBreak())return null;this.expectContextual(129),s.declare&&(t.declare=!0),tokenIsIdentifier(this.state.type)?(t.id=this.parseIdentifier(),this.checkIdentifier(t.id,130)):(t.id=null,this.raise(TSErrors.MissingInterfaceName,this.state.startLoc)),t.typeParameters=this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers),this.eat(81)&&(t.extends=this.tsParseHeritageClause("extends"));const n=this.startNode();return n.body=this.tsInType(this.tsParseObjectTypeMembers.bind(this)),t.body=this.finishNode(n,"TSInterfaceBody"),this.finishNode(t,"TSInterfaceDeclaration")}tsParseTypeAliasDeclaration(t){return t.id=this.parseIdentifier(),this.checkIdentifier(t.id,2),t.typeAnnotation=this.tsInType(()=>{if(t.typeParameters=this.tsTryParseTypeParameters(this.tsParseInOutModifiers),this.expect(29),this.isContextual(114)&&this.lookahead().type!==16){const s=this.startNode();return this.next(),this.finishNode(s,"TSIntrinsicKeyword")}return this.tsParseType()}),this.semicolon(),this.finishNode(t,"TSTypeAliasDeclaration")}tsInNoContext(t){const s=this.state.context;this.state.context=[s[0]];try{return t()}finally{this.state.context=s}}tsInType(t){const s=this.state.inType;this.state.inType=!0;try{return t()}finally{this.state.inType=s}}tsInDisallowConditionalTypesContext(t){const s=this.state.inDisallowConditionalTypesContext;this.state.inDisallowConditionalTypesContext=!0;try{return t()}finally{this.state.inDisallowConditionalTypesContext=s}}tsInAllowConditionalTypesContext(t){const s=this.state.inDisallowConditionalTypesContext;this.state.inDisallowConditionalTypesContext=!1;try{return t()}finally{this.state.inDisallowConditionalTypesContext=s}}tsEatThenParseType(t){if(this.match(t))return this.tsNextThenParseType()}tsExpectThenParseType(t){return this.tsInType(()=>(this.expect(t),this.tsParseType()))}tsNextThenParseType(){return this.tsInType(()=>(this.next(),this.tsParseType()))}tsParseEnumMember(){const t=this.startNode();return t.id=this.match(134)?super.parseStringLiteral(this.state.value):this.parseIdentifier(!0),this.eat(29)&&(t.initializer=super.parseMaybeAssignAllowIn()),this.finishNode(t,"TSEnumMember")}tsParseEnumDeclaration(t,s={}){return s.const&&(t.const=!0),s.declare&&(t.declare=!0),this.expectContextual(126),t.id=this.parseIdentifier(),this.checkIdentifier(t.id,t.const?8971:8459),this.expect(5),t.members=this.tsParseDelimitedList("EnumMembers",this.tsParseEnumMember.bind(this)),this.expect(8),this.finishNode(t,"TSEnumDeclaration")}tsParseModuleBlock(){const t=this.startNode();return this.scope.enter(0),this.expect(5),super.parseBlockOrModuleBlockBody(t.body=[],void 0,!0,8),this.scope.exit(),this.finishNode(t,"TSModuleBlock")}tsParseModuleOrNamespaceDeclaration(t,s=!1){if(t.id=this.parseIdentifier(),s||this.checkIdentifier(t.id,1024),this.eat(16)){const n=this.startNode();this.tsParseModuleOrNamespaceDeclaration(n,!0),t.body=n}else this.scope.enter(256),this.prodParam.enter(0),t.body=this.tsParseModuleBlock(),this.prodParam.exit(),this.scope.exit();return this.finishNode(t,"TSModuleDeclaration")}tsParseAmbientExternalModuleDeclaration(t){return this.isContextual(112)?(t.kind="global",t.global=!0,t.id=this.parseIdentifier()):this.match(134)?(t.kind="module",t.id=super.parseStringLiteral(this.state.value)):this.unexpected(),this.match(5)?(this.scope.enter(256),this.prodParam.enter(0),t.body=this.tsParseModuleBlock(),this.prodParam.exit(),this.scope.exit()):this.semicolon(),this.finishNode(t,"TSModuleDeclaration")}tsParseImportEqualsDeclaration(t,s,n){t.isExport=n||!1,t.id=s||this.parseIdentifier(),this.checkIdentifier(t.id,4096),this.expect(29);const i=this.tsParseModuleReference();return t.importKind==="type"&&i.type!=="TSExternalModuleReference"&&this.raise(TSErrors.ImportAliasHasImportType,i),t.moduleReference=i,this.semicolon(),this.finishNode(t,"TSImportEqualsDeclaration")}tsIsExternalModuleReference(){return this.isContextual(119)&&this.lookaheadCharCode()===40}tsParseModuleReference(){return this.tsIsExternalModuleReference()?this.tsParseExternalModuleReference():this.tsParseEntityName(!1)}tsParseExternalModuleReference(){const t=this.startNode();return this.expectContextual(119),this.expect(10),this.match(134)||this.unexpected(),t.expression=super.parseExprAtom(),this.expect(11),this.sawUnambiguousESM=!0,this.finishNode(t,"TSExternalModuleReference")}tsLookAhead(t){const s=this.state.clone(),n=t();return this.state=s,n}tsTryParseAndCatch(t){const s=this.tryParse(n=>t()||n());if(!(s.aborted||!s.node))return s.error&&(this.state=s.failState),s.node}tsTryParse(t){const s=this.state.clone(),n=t();if(n!==void 0&&n!==!1)return n;this.state=s}tsTryParseDeclare(t){if(this.isLineTerminator())return;let s=this.state.type,n;return this.isContextual(100)&&(s=74,n="let"),this.tsInAmbientContext(()=>{switch(s){case 68:return t.declare=!0,super.parseFunctionStatement(t,!1,!1);case 80:return t.declare=!0,this.parseClass(t,!0,!1);case 126:return this.tsParseEnumDeclaration(t,{declare:!0});case 112:return this.tsParseAmbientExternalModuleDeclaration(t);case 75:case 74:return!this.match(75)||!this.isLookaheadContextual("enum")?(t.declare=!0,this.parseVarStatement(t,n||this.state.value,!0)):(this.expect(75),this.tsParseEnumDeclaration(t,{const:!0,declare:!0}));case 129:{const i=this.tsParseInterfaceDeclaration(t,{declare:!0});if(i)return i}default:if(tokenIsIdentifier(s))return this.tsParseDeclaration(t,this.state.value,!0,null)}})}tsTryParseExportDeclaration(){return this.tsParseDeclaration(this.startNode(),this.state.value,!0,null)}tsParseExpressionStatement(t,s,n){switch(s.name){case"declare":{const i=this.tsTryParseDeclare(t);return i&&(i.declare=!0),i}case"global":if(this.match(5)){this.scope.enter(256),this.prodParam.enter(0);const i=t;return i.kind="global",i.global=!0,i.id=s,i.body=this.tsParseModuleBlock(),this.scope.exit(),this.prodParam.exit(),this.finishNode(i,"TSModuleDeclaration")}break;default:return this.tsParseDeclaration(t,s.name,!1,n)}}tsParseDeclaration(t,s,n,i){switch(s){case"abstract":if(this.tsCheckLineTerminator(n)&&(this.match(80)||tokenIsIdentifier(this.state.type)))return this.tsParseAbstractDeclaration(t,i);break;case"module":if(this.tsCheckLineTerminator(n)){if(this.match(134))return this.tsParseAmbientExternalModuleDeclaration(t);if(tokenIsIdentifier(this.state.type))return t.kind="module",this.tsParseModuleOrNamespaceDeclaration(t)}break;case"namespace":if(this.tsCheckLineTerminator(n)&&tokenIsIdentifier(this.state.type))return t.kind="namespace",this.tsParseModuleOrNamespaceDeclaration(t);break;case"type":if(this.tsCheckLineTerminator(n)&&tokenIsIdentifier(this.state.type))return this.tsParseTypeAliasDeclaration(t);break}}tsCheckLineTerminator(t){return t?this.hasFollowingLineBreak()?!1:(this.next(),!0):!this.isLineTerminator()}tsTryParseGenericAsyncArrowFunction(t){if(!this.match(47))return;const s=this.state.maybeInArrowParameters;this.state.maybeInArrowParameters=!0;const n=this.tsTryParseAndCatch(()=>{const i=this.startNodeAt(t);return i.typeParameters=this.tsParseTypeParameters(this.tsParseConstModifier),super.parseFunctionParams(i),i.returnType=this.tsTryParseTypeOrTypePredicateAnnotation(),this.expect(19),i});if(this.state.maybeInArrowParameters=s,!!n)return super.parseArrowExpression(n,null,!0)}tsParseTypeArgumentsInExpression(){if(this.reScan_lt()===47)return this.tsParseTypeArguments()}tsParseTypeArguments(){const t=this.startNode();return t.params=this.tsInType(()=>this.tsInNoContext(()=>(this.expect(47),this.tsParseDelimitedList("TypeParametersOrArguments",this.tsParseType.bind(this))))),t.params.length===0?this.raise(TSErrors.EmptyTypeArguments,t):!this.state.inType&&this.curContext()===types.brace&&this.reScan_lt_gt(),this.expect(48),this.finishNode(t,"TSTypeParameterInstantiation")}tsIsDeclarationStart(){return tokenIsTSDeclarationStart(this.state.type)}isExportDefaultSpecifier(){return this.tsIsDeclarationStart()?!1:super.isExportDefaultSpecifier()}parseAssignableListItem(t,s){const n=this.state.startLoc,i={};this.tsParseModifiers({allowedModifiers:["public","private","protected","override","readonly"]},i);const U=i.accessibility,g=i.override,F=i.readonly;!(t&4)&&(U||F||g)&&this.raise(TSErrors.UnexpectedParameterModifier,n);const B=this.parseMaybeDefault();t&2&&this.parseFunctionParamType(B);const r=this.parseMaybeDefault(B.loc.start,B);if(U||F||g){const I=this.startNodeAt(n);return s.length&&(I.decorators=s),U&&(I.accessibility=U),F&&(I.readonly=F),g&&(I.override=g),r.type!=="Identifier"&&r.type!=="AssignmentPattern"&&this.raise(TSErrors.UnsupportedParameterPropertyKind,I),I.parameter=r,this.finishNode(I,"TSParameterProperty")}return s.length&&(B.decorators=s),r}isSimpleParameter(t){return t.type==="TSParameterProperty"&&super.isSimpleParameter(t.parameter)||super.isSimpleParameter(t)}tsDisallowOptionalPattern(t){for(const s of t.params)s.type!=="Identifier"&&s.optional&&!this.state.isAmbientContext&&this.raise(TSErrors.PatternIsOptional,s)}setArrowFunctionParameters(t,s,n){super.setArrowFunctionParameters(t,s,n),this.tsDisallowOptionalPattern(t)}parseFunctionBodyAndFinish(t,s,n=!1){this.match(14)&&(t.returnType=this.tsParseTypeOrTypePredicateAnnotation(14));const i=s==="FunctionDeclaration"?"TSDeclareFunction":s==="ClassMethod"||s==="ClassPrivateMethod"?"TSDeclareMethod":void 0;return i&&!this.match(5)&&this.isLineTerminator()?this.finishNode(t,i):i==="TSDeclareFunction"&&this.state.isAmbientContext&&(this.raise(TSErrors.DeclareFunctionHasImplementation,t),t.declare)?super.parseFunctionBodyAndFinish(t,i,n):(this.tsDisallowOptionalPattern(t),super.parseFunctionBodyAndFinish(t,s,n))}registerFunctionStatementId(t){!t.body&&t.id?this.checkIdentifier(t.id,1024):super.registerFunctionStatementId(t)}tsCheckForInvalidTypeCasts(t){t.forEach(s=>{(s==null?void 0:s.type)==="TSTypeCastExpression"&&this.raise(TSErrors.UnexpectedTypeAnnotation,s.typeAnnotation)})}toReferencedList(t,s){return this.tsCheckForInvalidTypeCasts(t),t}parseArrayLike(t,s,n,i){const U=super.parseArrayLike(t,s,n,i);return U.type==="ArrayExpression"&&this.tsCheckForInvalidTypeCasts(U.elements),U}parseSubscript(t,s,n,i){if(!this.hasPrecedingLineBreak()&&this.match(35)){this.state.canStartJSXElement=!1,this.next();const g=this.startNodeAt(s);return g.expression=t,this.finishNode(g,"TSNonNullExpression")}let U=!1;if(this.match(18)&&this.lookaheadCharCode()===60){if(n)return i.stop=!0,t;i.optionalChainMember=U=!0,this.next()}if(this.match(47)||this.match(51)){let g;const F=this.tsTryParseAndCatch(()=>{if(!n&&this.atPossibleAsyncArrow(t)){const C=this.tsTryParseGenericAsyncArrowFunction(s);if(C)return C}const B=this.tsParseTypeArgumentsInExpression();if(!B)return;if(U&&!this.match(10)){g=this.state.curPosition();return}if(tokenIsTemplate(this.state.type)){const C=super.parseTaggedTemplateExpression(t,s,i);return C.typeParameters=B,C}if(!n&&this.eat(10)){const C=this.startNodeAt(s);return C.callee=t,C.arguments=this.parseCallExpressionArguments(11),this.tsCheckForInvalidTypeCasts(C.arguments),C.typeParameters=B,i.optionalChainMember&&(C.optional=U),this.finishCallExpression(C,i.optionalChainMember)}const r=this.state.type;if(r===48||r===52||r!==10&&tokenCanStartExpression(r)&&!this.hasPrecedingLineBreak())return;const I=this.startNodeAt(s);return I.expression=t,I.typeParameters=B,this.finishNode(I,"TSInstantiationExpression")});if(g&&this.unexpected(g,10),F)return F.type==="TSInstantiationExpression"&&(this.match(16)||this.match(18)&&this.lookaheadCharCode()!==40)&&this.raise(TSErrors.InvalidPropertyAccessAfterInstantiationExpression,this.state.startLoc),F}return super.parseSubscript(t,s,n,i)}parseNewCallee(t){var s;super.parseNewCallee(t);const{callee:n}=t;n.type==="TSInstantiationExpression"&&!((s=n.extra)!=null&&s.parenthesized)&&(t.typeParameters=n.typeParameters,t.callee=n.expression)}parseExprOp(t,s,n){let i;if(tokenOperatorPrecedence(58)>n&&!this.hasPrecedingLineBreak()&&(this.isContextual(93)||(i=this.isContextual(120)))){const U=this.startNodeAt(s);return U.expression=t,U.typeAnnotation=this.tsInType(()=>(this.next(),this.match(75)?(i&&this.raise(Errors.UnexpectedKeyword,this.state.startLoc,{keyword:"const"}),this.tsParseTypeReference()):this.tsParseType())),this.finishNode(U,i?"TSSatisfiesExpression":"TSAsExpression"),this.reScan_lt_gt(),this.parseExprOp(U,s,n)}return super.parseExprOp(t,s,n)}checkReservedWord(t,s,n,i){this.state.isAmbientContext||super.checkReservedWord(t,s,n,i)}checkImportReflection(t){super.checkImportReflection(t),t.module&&t.importKind!=="value"&&this.raise(TSErrors.ImportReflectionHasImportType,t.specifiers[0].loc.start)}checkDuplicateExports(){}isPotentialImportPhase(t){if(super.isPotentialImportPhase(t))return!0;if(this.isContextual(130)){const s=this.lookaheadCharCode();return t?s===123||s===42:s!==61}return!t&&this.isContextual(87)}applyImportPhase(t,s,n,i){super.applyImportPhase(t,s,n,i),s?t.exportKind=n==="type"?"type":"value":t.importKind=n==="type"||n==="typeof"?n:"value"}parseImport(t){if(this.match(134))return t.importKind="value",super.parseImport(t);let s;if(tokenIsIdentifier(this.state.type)&&this.lookaheadCharCode()===61)return t.importKind="value",this.tsParseImportEqualsDeclaration(t);if(this.isContextual(130)){const n=this.parseMaybeImportPhase(t,!1);if(this.lookaheadCharCode()===61)return this.tsParseImportEqualsDeclaration(t,n);s=super.parseImportSpecifiersAndAfter(t,n)}else s=super.parseImport(t);return s.importKind==="type"&&s.specifiers.length>1&&s.specifiers[0].type==="ImportDefaultSpecifier"&&this.raise(TSErrors.TypeImportCannotSpecifyDefaultAndNamed,s),s}parseExport(t,s){if(this.match(83)){this.next();const n=t;let i=null;return this.isContextual(130)&&this.isPotentialImportPhase(!1)?i=this.parseMaybeImportPhase(n,!1):n.importKind="value",this.tsParseImportEqualsDeclaration(n,i,!0)}else if(this.eat(29)){const n=t;return n.expression=super.parseExpression(),this.semicolon(),this.sawUnambiguousESM=!0,this.finishNode(n,"TSExportAssignment")}else if(this.eatContextual(93)){const n=t;return this.expectContextual(128),n.id=this.parseIdentifier(),this.semicolon(),this.finishNode(n,"TSNamespaceExportDeclaration")}else return super.parseExport(t,s)}isAbstractClass(){return this.isContextual(124)&&this.lookahead().type===80}parseExportDefaultExpression(){if(this.isAbstractClass()){const t=this.startNode();return this.next(),t.abstract=!0,this.parseClass(t,!0,!0)}if(this.match(129)){const t=this.tsParseInterfaceDeclaration(this.startNode());if(t)return t}return super.parseExportDefaultExpression()}parseVarStatement(t,s,n=!1){const{isAmbientContext:i}=this.state,U=super.parseVarStatement(t,s,n||i);if(!i)return U;for(const{id:g,init:F}of U.declarations)F&&(s!=="const"||g.typeAnnotation?this.raise(TSErrors.InitializerNotAllowedInAmbientContext,F):isValidAmbientConstInitializer(F,this.hasPlugin("estree"))||this.raise(TSErrors.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference,F));return U}parseStatementContent(t,s){if(this.match(75)&&this.isLookaheadContextual("enum")){const n=this.startNode();return this.expect(75),this.tsParseEnumDeclaration(n,{const:!0})}if(this.isContextual(126))return this.tsParseEnumDeclaration(this.startNode());if(this.isContextual(129)){const n=this.tsParseInterfaceDeclaration(this.startNode());if(n)return n}return super.parseStatementContent(t,s)}parseAccessModifier(){return this.tsParseModifier(["public","protected","private"])}tsHasSomeModifiers(t,s){return s.some(n=>tsIsAccessModifier(n)?t.accessibility===n:!!t[n])}tsIsStartOfStaticBlocks(){return this.isContextual(106)&&this.lookaheadCharCode()===123}parseClassMember(t,s,n){const i=["declare","private","public","protected","override","abstract","readonly","static"];this.tsParseModifiers({allowedModifiers:i,disallowedModifiers:["in","out"],stopOnStartOfClassStaticBlock:!0,errorTemplate:TSErrors.InvalidModifierOnTypeParameterPositions},s);const U=()=>{this.tsIsStartOfStaticBlocks()?(this.next(),this.next(),this.tsHasSomeModifiers(s,i)&&this.raise(TSErrors.StaticBlockCannotHaveModifier,this.state.curPosition()),super.parseClassStaticBlock(t,s)):this.parseClassMemberWithIsStatic(t,s,n,!!s.static)};s.declare?this.tsInAmbientContext(U):U()}parseClassMemberWithIsStatic(t,s,n,i){const U=this.tsTryParseIndexSignature(s);if(U){t.body.push(U),s.abstract&&this.raise(TSErrors.IndexSignatureHasAbstract,s),s.accessibility&&this.raise(TSErrors.IndexSignatureHasAccessibility,s,{modifier:s.accessibility}),s.declare&&this.raise(TSErrors.IndexSignatureHasDeclare,s),s.override&&this.raise(TSErrors.IndexSignatureHasOverride,s);return}!this.state.inAbstractClass&&s.abstract&&this.raise(TSErrors.NonAbstractClassHasAbstractMethod,s),s.override&&(n.hadSuperClass||this.raise(TSErrors.OverrideNotInSubClass,s)),super.parseClassMemberWithIsStatic(t,s,n,i)}parsePostMemberNameModifiers(t){this.eat(17)&&(t.optional=!0),t.readonly&&this.match(10)&&this.raise(TSErrors.ClassMethodHasReadonly,t),t.declare&&this.match(10)&&this.raise(TSErrors.ClassMethodHasDeclare,t)}parseExpressionStatement(t,s,n){return(s.type==="Identifier"?this.tsParseExpressionStatement(t,s,n):void 0)||super.parseExpressionStatement(t,s,n)}shouldParseExportDeclaration(){return this.tsIsDeclarationStart()?!0:super.shouldParseExportDeclaration()}parseConditional(t,s,n){if(!this.state.maybeInArrowParameters||!this.match(17))return super.parseConditional(t,s,n);const i=this.tryParse(()=>super.parseConditional(t,s));return i.node?(i.error&&(this.state=i.failState),i.node):(i.error&&super.setOptionalParametersError(n,i.error),t)}parseParenItem(t,s){const n=super.parseParenItem(t,s);if(this.eat(17)&&(n.optional=!0,this.resetEndLocation(t)),this.match(14)){const i=this.startNodeAt(s);return i.expression=t,i.typeAnnotation=this.tsParseTypeAnnotation(),this.finishNode(i,"TSTypeCastExpression")}return t}parseExportDeclaration(t){if(!this.state.isAmbientContext&&this.isContextual(125))return this.tsInAmbientContext(()=>this.parseExportDeclaration(t));const s=this.state.startLoc,n=this.eatContextual(125);if(n&&(this.isContextual(125)||!this.shouldParseExportDeclaration()))throw this.raise(TSErrors.ExpectedAmbientAfterExportDeclare,this.state.startLoc);const U=tokenIsIdentifier(this.state.type)&&this.tsTryParseExportDeclaration()||super.parseExportDeclaration(t);return U?((U.type==="TSInterfaceDeclaration"||U.type==="TSTypeAliasDeclaration"||n)&&(t.exportKind="type"),n&&(this.resetStartLocation(U,s),U.declare=!0),U):null}parseClassId(t,s,n,i){if((!s||n)&&this.isContextual(113))return;super.parseClassId(t,s,n,t.declare?1024:8331);const U=this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);U&&(t.typeParameters=U)}parseClassPropertyAnnotation(t){t.optional||(this.eat(35)?t.definite=!0:this.eat(17)&&(t.optional=!0));const s=this.tsTryParseTypeAnnotation();s&&(t.typeAnnotation=s)}parseClassProperty(t){if(this.parseClassPropertyAnnotation(t),this.state.isAmbientContext&&!(t.readonly&&!t.typeAnnotation)&&this.match(29)&&this.raise(TSErrors.DeclareClassFieldHasInitializer,this.state.startLoc),t.abstract&&this.match(29)){const{key:s}=t;this.raise(TSErrors.AbstractPropertyHasInitializer,this.state.startLoc,{propertyName:s.type==="Identifier"&&!t.computed?s.name:`[${this.input.slice(this.offsetToSourcePos(s.start),this.offsetToSourcePos(s.end))}]`})}return super.parseClassProperty(t)}parseClassPrivateProperty(t){return t.abstract&&this.raise(TSErrors.PrivateElementHasAbstract,t),t.accessibility&&this.raise(TSErrors.PrivateElementHasAccessibility,t,{modifier:t.accessibility}),this.parseClassPropertyAnnotation(t),super.parseClassPrivateProperty(t)}parseClassAccessorProperty(t){return this.parseClassPropertyAnnotation(t),t.optional&&this.raise(TSErrors.AccessorCannotBeOptional,t),super.parseClassAccessorProperty(t)}pushClassMethod(t,s,n,i,U,g){const F=this.tsTryParseTypeParameters(this.tsParseConstModifier);F&&U&&this.raise(TSErrors.ConstructorHasTypeParameters,F);const{declare:B=!1,kind:r}=s;B&&(r==="get"||r==="set")&&this.raise(TSErrors.DeclareAccessor,s,{kind:r}),F&&(s.typeParameters=F),super.pushClassMethod(t,s,n,i,U,g)}pushClassPrivateMethod(t,s,n,i){const U=this.tsTryParseTypeParameters(this.tsParseConstModifier);U&&(s.typeParameters=U),super.pushClassPrivateMethod(t,s,n,i)}declareClassPrivateMethodInScope(t,s){t.type!=="TSDeclareMethod"&&(t.type==="MethodDefinition"&&!hasOwnProperty.call(t.value,"body")||super.declareClassPrivateMethodInScope(t,s))}parseClassSuper(t){super.parseClassSuper(t),t.superClass&&(this.match(47)||this.match(51))&&(t.superTypeParameters=this.tsParseTypeArgumentsInExpression()),this.eatContextual(113)&&(t.implements=this.tsParseHeritageClause("implements"))}parseObjPropValue(t,s,n,i,U,g,F){const B=this.tsTryParseTypeParameters(this.tsParseConstModifier);return B&&(t.typeParameters=B),super.parseObjPropValue(t,s,n,i,U,g,F)}parseFunctionParams(t,s){const n=this.tsTryParseTypeParameters(this.tsParseConstModifier);n&&(t.typeParameters=n),super.parseFunctionParams(t,s)}parseVarId(t,s){super.parseVarId(t,s),t.id.type==="Identifier"&&!this.hasPrecedingLineBreak()&&this.eat(35)&&(t.definite=!0);const n=this.tsTryParseTypeAnnotation();n&&(t.id.typeAnnotation=n,this.resetEndLocation(t.id))}parseAsyncArrowFromCallExpression(t,s){return this.match(14)&&(t.returnType=this.tsParseTypeAnnotation()),super.parseAsyncArrowFromCallExpression(t,s)}parseMaybeAssign(t,s){var n,i,U,g,F;let B,r,I;if(this.hasPlugin("jsx")&&(this.match(143)||this.match(47))){if(B=this.state.clone(),r=this.tryParse(()=>super.parseMaybeAssign(t,s),B),!r.error)return r.node;const{context:l}=this.state,A=l[l.length-1];(A===types.j_oTag||A===types.j_expr)&&l.pop()}if(!((n=r)!=null&&n.error)&&!this.match(47))return super.parseMaybeAssign(t,s);(!B||B===this.state)&&(B=this.state.clone());let C;const o=this.tryParse(l=>{var A,f;C=this.tsParseTypeParameters(this.tsParseConstModifier);const d=super.parseMaybeAssign(t,s);return(d.type!=="ArrowFunctionExpression"||(A=d.extra)!=null&&A.parenthesized)&&l(),((f=C)==null?void 0:f.params.length)!==0&&this.resetStartLocationFromNode(d,C),d.typeParameters=C,d},B);if(!o.error&&!o.aborted)return C&&this.reportReservedArrowTypeParam(C),o.node;if(!r&&(assert(!this.hasPlugin("jsx")),I=this.tryParse(()=>super.parseMaybeAssign(t,s),B),!I.error))return I.node;if((i=r)!=null&&i.node)return this.state=r.failState,r.node;if(o.node)return this.state=o.failState,C&&this.reportReservedArrowTypeParam(C),o.node;if((U=I)!=null&&U.node)return this.state=I.failState,I.node;throw((g=r)==null?void 0:g.error)||o.error||((F=I)==null?void 0:F.error)}reportReservedArrowTypeParam(t){var s;t.params.length===1&&!t.params[0].constraint&&!((s=t.extra)!=null&&s.trailingComma)&&this.getPluginOption("typescript","disallowAmbiguousJSXLike")&&this.raise(TSErrors.ReservedArrowTypeParam,t)}parseMaybeUnary(t,s){return!this.hasPlugin("jsx")&&this.match(47)?this.tsParseTypeAssertion():super.parseMaybeUnary(t,s)}parseArrow(t){if(this.match(14)){const s=this.tryParse(n=>{const i=this.tsParseTypeOrTypePredicateAnnotation(14);return(this.canInsertSemicolon()||!this.match(19))&&n(),i});if(s.aborted)return;s.thrown||(s.error&&(this.state=s.failState),t.returnType=s.node)}return super.parseArrow(t)}parseFunctionParamType(t){this.eat(17)&&(t.optional=!0);const s=this.tsTryParseTypeAnnotation();return s&&(t.typeAnnotation=s),this.resetEndLocation(t),t}isAssignable(t,s){switch(t.type){case"TSTypeCastExpression":return this.isAssignable(t.expression,s);case"TSParameterProperty":return!0;default:return super.isAssignable(t,s)}}toAssignable(t,s=!1){switch(t.type){case"ParenthesizedExpression":this.toAssignableParenthesizedExpression(t,s);break;case"TSAsExpression":case"TSSatisfiesExpression":case"TSNonNullExpression":case"TSTypeAssertion":s?this.expressionScope.recordArrowParameterBindingError(TSErrors.UnexpectedTypeCastInParameter,t):this.raise(TSErrors.UnexpectedTypeCastInParameter,t),this.toAssignable(t.expression,s);break;case"AssignmentExpression":!s&&t.left.type==="TSTypeCastExpression"&&(t.left=this.typeCastToParameter(t.left));default:super.toAssignable(t,s)}}toAssignableParenthesizedExpression(t,s){switch(t.expression.type){case"TSAsExpression":case"TSSatisfiesExpression":case"TSNonNullExpression":case"TSTypeAssertion":case"ParenthesizedExpression":this.toAssignable(t.expression,s);break;default:super.toAssignable(t,s)}}checkToRestConversion(t,s){switch(t.type){case"TSAsExpression":case"TSSatisfiesExpression":case"TSTypeAssertion":case"TSNonNullExpression":this.checkToRestConversion(t.expression,!1);break;default:super.checkToRestConversion(t,s)}}isValidLVal(t,s,n){switch(t){case"TSTypeCastExpression":return!0;case"TSParameterProperty":return"parameter";case"TSNonNullExpression":case"TSInstantiationExpression":return"expression";case"TSAsExpression":case"TSSatisfiesExpression":case"TSTypeAssertion":return(n!==64||!s)&&["expression",!0];default:return super.isValidLVal(t,s,n)}}parseBindingAtom(){return this.state.type===78?this.parseIdentifier(!0):super.parseBindingAtom()}parseMaybeDecoratorArguments(t){if(this.match(47)||this.match(51)){const s=this.tsParseTypeArgumentsInExpression();if(this.match(10)){const n=super.parseMaybeDecoratorArguments(t);return n.typeParameters=s,n}this.unexpected(null,10)}return super.parseMaybeDecoratorArguments(t)}checkCommaAfterRest(t){return this.state.isAmbientContext&&this.match(12)&&this.lookaheadCharCode()===t?(this.next(),!1):super.checkCommaAfterRest(t)}isClassMethod(){return this.match(47)||super.isClassMethod()}isClassProperty(){return this.match(35)||this.match(14)||super.isClassProperty()}parseMaybeDefault(t,s){const n=super.parseMaybeDefault(t,s);return n.type==="AssignmentPattern"&&n.typeAnnotation&&n.right.start<n.typeAnnotation.start&&this.raise(TSErrors.TypeAnnotationAfterAssign,n.typeAnnotation),n}getTokenFromCode(t){if(this.state.inType){if(t===62){this.finishOp(48,1);return}if(t===60){this.finishOp(47,1);return}}super.getTokenFromCode(t)}reScan_lt_gt(){const{type:t}=this.state;t===47?(this.state.pos-=1,this.readToken_lt()):t===48&&(this.state.pos-=1,this.readToken_gt())}reScan_lt(){const{type:t}=this.state;return t===51?(this.state.pos-=2,this.finishOp(47,1),47):t}toAssignableList(t,s,n){for(let i=0;i<t.length;i++){const U=t[i];(U==null?void 0:U.type)==="TSTypeCastExpression"&&(t[i]=this.typeCastToParameter(U))}super.toAssignableList(t,s,n)}typeCastToParameter(t){return t.expression.typeAnnotation=t.typeAnnotation,this.resetEndLocation(t.expression,t.typeAnnotation.loc.end),t.expression}shouldParseArrow(t){return this.match(14)?t.every(s=>this.isAssignable(s,!0)):super.shouldParseArrow(t)}shouldParseAsyncArrow(){return this.match(14)||super.shouldParseAsyncArrow()}canHaveLeadingDecorator(){return super.canHaveLeadingDecorator()||this.isAbstractClass()}jsxParseOpeningElementAfterName(t){if(this.match(47)||this.match(51)){const s=this.tsTryParseAndCatch(()=>this.tsParseTypeArgumentsInExpression());s&&(t.typeParameters=s)}return super.jsxParseOpeningElementAfterName(t)}getGetterSetterExpectedParamCount(t){const s=super.getGetterSetterExpectedParamCount(t),i=this.getObjectOrClassMethodParams(t)[0];return i&&this.isThisParam(i)?s+1:s}parseCatchClauseParam(){const t=super.parseCatchClauseParam(),s=this.tsTryParseTypeAnnotation();return s&&(t.typeAnnotation=s,this.resetEndLocation(t)),t}tsInAmbientContext(t){const{isAmbientContext:s,strict:n}=this.state;this.state.isAmbientContext=!0,this.state.strict=!1;try{return t()}finally{this.state.isAmbientContext=s,this.state.strict=n}}parseClass(t,s,n){const i=this.state.inAbstractClass;this.state.inAbstractClass=!!t.abstract;try{return super.parseClass(t,s,n)}finally{this.state.inAbstractClass=i}}tsParseAbstractDeclaration(t,s){if(this.match(80))return t.abstract=!0,this.maybeTakeDecorators(s,this.parseClass(t,!0,!1));if(this.isContextual(129)){if(!this.hasFollowingLineBreak())return t.abstract=!0,this.raise(TSErrors.NonClassMethodPropertyHasAbstractModifer,t),this.tsParseInterfaceDeclaration(t)}else this.unexpected(null,80)}parseMethod(t,s,n,i,U,g,F){const B=super.parseMethod(t,s,n,i,U,g,F);if(B.abstract&&(this.hasPlugin("estree")?!!B.value.body:!!B.body)){const{key:I}=B;this.raise(TSErrors.AbstractMethodHasImplementation,B,{methodName:I.type==="Identifier"&&!B.computed?I.name:`[${this.input.slice(this.offsetToSourcePos(I.start),this.offsetToSourcePos(I.end))}]`})}return B}tsParseTypeParameterName(){return this.parseIdentifier().name}shouldParseAsAmbientContext(){return!!this.getPluginOption("typescript","dts")}parse(){return this.shouldParseAsAmbientContext()&&(this.state.isAmbientContext=!0),super.parse()}getExpression(){return this.shouldParseAsAmbientContext()&&(this.state.isAmbientContext=!0),super.getExpression()}parseExportSpecifier(t,s,n,i){return!s&&i?(this.parseTypeOnlyImportExportSpecifier(t,!1,n),this.finishNode(t,"ExportSpecifier")):(t.exportKind="value",super.parseExportSpecifier(t,s,n,i))}parseImportSpecifier(t,s,n,i,U){return!s&&i?(this.parseTypeOnlyImportExportSpecifier(t,!0,n),this.finishNode(t,"ImportSpecifier")):(t.importKind="value",super.parseImportSpecifier(t,s,n,i,n?4098:4096))}parseTypeOnlyImportExportSpecifier(t,s,n){const i=s?"imported":"local",U=s?"local":"exported";let g=t[i],F,B=!1,r=!0;const I=g.loc.start;if(this.isContextual(93)){const o=this.parseIdentifier();if(this.isContextual(93)){const l=this.parseIdentifier();tokenIsKeywordOrIdentifier(this.state.type)?(B=!0,g=o,F=s?this.parseIdentifier():this.parseModuleExportName(),r=!1):(F=l,r=!1)}else tokenIsKeywordOrIdentifier(this.state.type)?(r=!1,F=s?this.parseIdentifier():this.parseModuleExportName()):(B=!0,g=o)}else tokenIsKeywordOrIdentifier(this.state.type)&&(B=!0,s?(g=this.parseIdentifier(!0),this.isContextual(93)||this.checkReservedWord(g.name,g.loc.start,!0,!0)):g=this.parseModuleExportName());B&&n&&this.raise(s?TSErrors.TypeModifierIsUsedInTypeImports:TSErrors.TypeModifierIsUsedInTypeExports,I),t[i]=g,t[U]=F;const C=s?"importKind":"exportKind";t[C]=B?"type":"value",r&&this.eatContextual(93)&&(t[U]=s?this.parseIdentifier():this.parseModuleExportName()),t[U]||(t[U]=cloneIdentifier(t[i])),s&&this.checkIdentifier(t[U],B?4098:4096)}};function isPossiblyLiteralEnum(Q){if(Q.type!=="MemberExpression")return!1;const{computed:e,property:t}=Q;return e&&t.type!=="StringLiteral"&&(t.type!=="TemplateLiteral"||t.expressions.length>0)?!1:isUncomputedMemberExpressionChain(Q.object)}function isValidAmbientConstInitializer(Q,e){var t;const{type:s}=Q;if((t=Q.extra)!=null&&t.parenthesized)return!1;if(e){if(s==="Literal"){const{value:n}=Q;if(typeof n=="string"||typeof n=="boolean")return!0}}else if(s==="StringLiteral"||s==="BooleanLiteral")return!0;return!!(isNumber(Q,e)||isNegativeNumber(Q,e)||s==="TemplateLiteral"&&Q.expressions.length===0||isPossiblyLiteralEnum(Q))}function isNumber(Q,e){return e?Q.type==="Literal"&&(typeof Q.value=="number"||"bigint"in Q):Q.type==="NumericLiteral"||Q.type==="BigIntLiteral"}function isNegativeNumber(Q,e){if(Q.type==="UnaryExpression"){const{operator:t,argument:s}=Q;if(t==="-"&&isNumber(s,e))return!0}return!1}function isUncomputedMemberExpressionChain(Q){return Q.type==="Identifier"?!0:Q.type!=="MemberExpression"||Q.computed?!1:isUncomputedMemberExpressionChain(Q.object)}const PlaceholderErrors=ParseErrorEnum`placeholders`({ClassNameIsRequired:"A class name is required.",UnexpectedSpace:"Unexpected space in placeholder."});var placeholders=Q=>class extends Q{parsePlaceholder(t){if(this.match(133)){const s=this.startNode();return this.next(),this.assertNoSpace(),s.name=super.parseIdentifier(!0),this.assertNoSpace(),this.expect(133),this.finishPlaceholder(s,t)}}finishPlaceholder(t,s){let n=t;return(!n.expectedNode||!n.type)&&(n=this.finishNode(n,"Placeholder")),n.expectedNode=s,n}getTokenFromCode(t){t===37&&this.input.charCodeAt(this.state.pos+1)===37?this.finishOp(133,2):super.getTokenFromCode(t)}parseExprAtom(t){return this.parsePlaceholder("Expression")||super.parseExprAtom(t)}parseIdentifier(t){return this.parsePlaceholder("Identifier")||super.parseIdentifier(t)}checkReservedWord(t,s,n,i){t!==void 0&&super.checkReservedWord(t,s,n,i)}parseBindingAtom(){return this.parsePlaceholder("Pattern")||super.parseBindingAtom()}isValidLVal(t,s,n){return t==="Placeholder"||super.isValidLVal(t,s,n)}toAssignable(t,s){t&&t.type==="Placeholder"&&t.expectedNode==="Expression"?t.expectedNode="Pattern":super.toAssignable(t,s)}chStartsBindingIdentifier(t,s){return!!(super.chStartsBindingIdentifier(t,s)||this.lookahead().type===133)}verifyBreakContinue(t,s){t.label&&t.label.type==="Placeholder"||super.verifyBreakContinue(t,s)}parseExpressionStatement(t,s){var n;if(s.type!=="Placeholder"||(n=s.extra)!=null&&n.parenthesized)return super.parseExpressionStatement(t,s);if(this.match(14)){const U=t;return U.label=this.finishPlaceholder(s,"Identifier"),this.next(),U.body=super.parseStatementOrSloppyAnnexBFunctionDeclaration(),this.finishNode(U,"LabeledStatement")}this.semicolon();const i=t;return i.name=s.name,this.finishPlaceholder(i,"Statement")}parseBlock(t,s,n){return this.parsePlaceholder("BlockStatement")||super.parseBlock(t,s,n)}parseFunctionId(t){return this.parsePlaceholder("Identifier")||super.parseFunctionId(t)}parseClass(t,s,n){const i=s?"ClassDeclaration":"ClassExpression";this.next();const U=this.state.strict,g=this.parsePlaceholder("Identifier");if(g)if(this.match(81)||this.match(133)||this.match(5))t.id=g;else{if(n||!s)return t.id=null,t.body=this.finishPlaceholder(g,"ClassBody"),this.finishNode(t,i);throw this.raise(PlaceholderErrors.ClassNameIsRequired,this.state.startLoc)}else this.parseClassId(t,s,n);return super.parseClassSuper(t),t.body=this.parsePlaceholder("ClassBody")||super.parseClassBody(!!t.superClass,U),this.finishNode(t,i)}parseExport(t,s){const n=this.parsePlaceholder("Identifier");if(!n)return super.parseExport(t,s);const i=t;if(!this.isContextual(98)&&!this.match(12))return i.specifiers=[],i.source=null,i.declaration=this.finishPlaceholder(n,"Declaration"),this.finishNode(i,"ExportNamedDeclaration");this.expectPlugin("exportDefaultFrom");const U=this.startNode();return U.exported=n,i.specifiers=[this.finishNode(U,"ExportDefaultSpecifier")],super.parseExport(i,s)}isExportDefaultSpecifier(){if(this.match(65)){const t=this.nextTokenStart();if(this.isUnparsedContextual(t,"from")&&this.input.startsWith(tokenLabelName(133),this.nextTokenStartSince(t+4)))return!0}return super.isExportDefaultSpecifier()}maybeParseExportDefaultSpecifier(t,s){var n;return(n=t.specifiers)!=null&&n.length?!0:super.maybeParseExportDefaultSpecifier(t,s)}checkExport(t){const{specifiers:s}=t;s!=null&&s.length&&(t.specifiers=s.filter(n=>n.exported.type==="Placeholder")),super.checkExport(t),t.specifiers=s}parseImport(t){const s=this.parsePlaceholder("Identifier");if(!s)return super.parseImport(t);if(t.specifiers=[],!this.isContextual(98)&&!this.match(12))return t.source=this.finishPlaceholder(s,"StringLiteral"),this.semicolon(),this.finishNode(t,"ImportDeclaration");const n=this.startNodeAtNode(s);return n.local=s,t.specifiers.push(this.finishNode(n,"ImportDefaultSpecifier")),this.eat(12)&&(this.maybeParseStarImportSpecifier(t)||this.parseNamedImportSpecifiers(t)),this.expectContextual(98),t.source=this.parseImportSource(),this.semicolon(),this.finishNode(t,"ImportDeclaration")}parseImportSource(){return this.parsePlaceholder("StringLiteral")||super.parseImportSource()}assertNoSpace(){this.state.start>this.offsetToSourcePos(this.state.lastTokEndLoc.index)&&this.raise(PlaceholderErrors.UnexpectedSpace,this.state.lastTokEndLoc)}},v8intrinsic=Q=>class extends Q{parseV8Intrinsic(){if(this.match(54)){const t=this.state.startLoc,s=this.startNode();if(this.next(),tokenIsIdentifier(this.state.type)){const n=this.parseIdentifierName(),i=this.createIdentifier(s,n);if(i.type="V8IntrinsicIdentifier",this.match(10))return i}this.unexpected(t)}}parseExprAtom(t){return this.parseV8Intrinsic()||super.parseExprAtom(t)}};const PIPELINE_PROPOSALS=["minimal","fsharp","hack","smart"],TOPIC_TOKENS=["^^","@@","^","%","#"];function validatePlugins(Q){if(Q.has("decorators")){if(Q.has("decorators-legacy"))throw new Error("Cannot use the decorators and decorators-legacy plugin together");const t=Q.get("decorators").decoratorsBeforeExport;if(t!=null&&typeof t!="boolean")throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");const s=Q.get("decorators").allowCallParenthesized;if(s!=null&&typeof s!="boolean")throw new Error("'allowCallParenthesized' must be a boolean.")}if(Q.has("flow")&&Q.has("typescript"))throw new Error("Cannot combine flow and typescript plugins.");if(Q.has("placeholders")&&Q.has("v8intrinsic"))throw new Error("Cannot combine placeholders and v8intrinsic plugins.");if(Q.has("pipelineOperator")){var e;const t=Q.get("pipelineOperator").proposal;if(!PIPELINE_PROPOSALS.includes(t)){const n=PIPELINE_PROPOSALS.map(i=>`"${i}"`).join(", ");throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${n}.`)}const s=((e=Q.get("recordAndTuple"))==null?void 0:e.syntaxType)==="hash";if(t==="hack"){if(Q.has("placeholders"))throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");if(Q.has("v8intrinsic"))throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");const n=Q.get("pipelineOperator").topicToken;if(!TOPIC_TOKENS.includes(n)){const i=TOPIC_TOKENS.map(U=>`"${U}"`).join(", ");throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`)}if(n==="#"&&s)throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(["recordAndTuple",Q.get("recordAndTuple")])}\`.`)}else if(t==="smart"&&s)throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(["recordAndTuple",Q.get("recordAndTuple")])}\`.`)}if(Q.has("moduleAttributes")){if(Q.has("deprecatedImportAssert")||Q.has("importAssertions"))throw new Error("Cannot combine importAssertions, deprecatedImportAssert and moduleAttributes plugins.");if(Q.get("moduleAttributes").version!=="may-2020")throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.")}if(Q.has("importAssertions")&&Q.has("deprecatedImportAssert"))throw new Error("Cannot combine importAssertions and deprecatedImportAssert plugins.");if(!Q.has("deprecatedImportAssert")&&Q.has("importAttributes")&&Q.get("importAttributes").deprecatedAssertSyntax&&Q.set("deprecatedImportAssert",{}),Q.has("recordAndTuple")){const t=Q.get("recordAndTuple").syntaxType;if(t!=null){const s=["hash","bar"];if(!s.includes(t))throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: "+s.map(n=>`'${n}'`).join(", "))}}if(Q.has("asyncDoExpressions")&&!Q.has("doExpressions")){const t=new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");throw t.missingPlugins="doExpressions",t}if(Q.has("optionalChainingAssign")&&Q.get("optionalChainingAssign").version!=="2023-07")throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.")}const mixinPlugins={estree,jsx,flow,typescript,v8intrinsic,placeholders},mixinPluginNames=Object.keys(mixinPlugins);function createDefaultOptions(){return{sourceType:"script",sourceFilename:void 0,startIndex:0,startColumn:0,startLine:1,allowAwaitOutsideFunction:!1,allowReturnOutsideFunction:!1,allowNewTargetOutsideFunction:!1,allowImportExportEverywhere:!1,allowSuperOutsideMethod:!1,allowUndeclaredExports:!1,plugins:[],strictMode:null,ranges:!1,tokens:!1,createImportExpressions:!1,createParenthesizedExpressions:!1,errorRecovery:!1,attachComment:!0,annexB:!0}}function getOptions(Q){const e=createDefaultOptions();if(Q==null)return e;if(Q.annexB!=null&&Q.annexB!==!1)throw new Error("The `annexB` option can only be set to `false`.");for(const t of Object.keys(e))Q[t]!=null&&(e[t]=Q[t]);if(e.startLine===1)Q.startIndex==null&&e.startColumn>0?e.startIndex=e.startColumn:Q.startColumn==null&&e.startIndex>0&&(e.startColumn=e.startIndex);else if((Q.startColumn==null||Q.startIndex==null)&&Q.startIndex!=null)throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");return e}class ExpressionParser extends LValParser{checkProto(e,t,s,n){if(e.type==="SpreadElement"||this.isObjectMethod(e)||e.computed||e.shorthand)return;const i=e.key;if((i.type==="Identifier"?i.name:i.value)==="__proto__"){if(t){this.raise(Errors.RecordNoProto,i);return}s.used&&(n?n.doubleProtoLoc===null&&(n.doubleProtoLoc=i.loc.start):this.raise(Errors.DuplicateProto,i)),s.used=!0}}shouldExitDescending(e,t){return e.type==="ArrowFunctionExpression"&&this.offsetToSourcePos(e.start)===t}getExpression(){this.enterInitialScopes(),this.nextToken();const e=this.parseExpression();return this.match(140)||this.unexpected(),this.finalizeRemainingComments(),e.comments=this.comments,e.errors=this.state.errors,this.options.tokens&&(e.tokens=this.tokens),e}parseExpression(e,t){return e?this.disallowInAnd(()=>this.parseExpressionBase(t)):this.allowInAnd(()=>this.parseExpressionBase(t))}parseExpressionBase(e){const t=this.state.startLoc,s=this.parseMaybeAssign(e);if(this.match(12)){const n=this.startNodeAt(t);for(n.expressions=[s];this.eat(12);)n.expressions.push(this.parseMaybeAssign(e));return this.toReferencedList(n.expressions),this.finishNode(n,"SequenceExpression")}return s}parseMaybeAssignDisallowIn(e,t){return this.disallowInAnd(()=>this.parseMaybeAssign(e,t))}parseMaybeAssignAllowIn(e,t){return this.allowInAnd(()=>this.parseMaybeAssign(e,t))}setOptionalParametersError(e,t){var s;e.optionalParametersLoc=(s=t==null?void 0:t.loc)!=null?s:this.state.startLoc}parseMaybeAssign(e,t){const s=this.state.startLoc;if(this.isContextual(108)&&this.prodParam.hasYield){let g=this.parseYield();return t&&(g=t.call(this,g,s)),g}let n;e?n=!1:(e=new ExpressionErrors,n=!0);const{type:i}=this.state;(i===10||tokenIsIdentifier(i))&&(this.state.potentialArrowAt=this.state.start);let U=this.parseMaybeConditional(e);if(t&&(U=t.call(this,U,s)),tokenIsAssignment(this.state.type)){const g=this.startNodeAt(s),F=this.state.value;if(g.operator=F,this.match(29)){this.toAssignable(U,!0),g.left=U;const B=s.index;e.doubleProtoLoc!=null&&e.doubleProtoLoc.index>=B&&(e.doubleProtoLoc=null),e.shorthandAssignLoc!=null&&e.shorthandAssignLoc.index>=B&&(e.shorthandAssignLoc=null),e.privateKeyLoc!=null&&e.privateKeyLoc.index>=B&&(this.checkDestructuringPrivate(e),e.privateKeyLoc=null)}else g.left=U;return this.next(),g.right=this.parseMaybeAssign(),this.checkLVal(U,this.finishNode(g,"AssignmentExpression")),g}else n&&this.checkExpressionErrors(e,!0);return U}parseMaybeConditional(e){const t=this.state.startLoc,s=this.state.potentialArrowAt,n=this.parseExprOps(e);return this.shouldExitDescending(n,s)?n:this.parseConditional(n,t,e)}parseConditional(e,t,s){if(this.eat(17)){const n=this.startNodeAt(t);return n.test=e,n.consequent=this.parseMaybeAssignAllowIn(),this.expect(14),n.alternate=this.parseMaybeAssign(),this.finishNode(n,"ConditionalExpression")}return e}parseMaybeUnaryOrPrivate(e){return this.match(139)?this.parsePrivateName():this.parseMaybeUnary(e)}parseExprOps(e){const t=this.state.startLoc,s=this.state.potentialArrowAt,n=this.parseMaybeUnaryOrPrivate(e);return this.shouldExitDescending(n,s)?n:this.parseExprOp(n,t,-1)}parseExprOp(e,t,s){if(this.isPrivateName(e)){const i=this.getPrivateNameSV(e);(s>=tokenOperatorPrecedence(58)||!this.prodParam.hasIn||!this.match(58))&&this.raise(Errors.PrivateInExpectedIn,e,{identifierName:i}),this.classScope.usePrivateName(i,e.loc.start)}const n=this.state.type;if(tokenIsOperator(n)&&(this.prodParam.hasIn||!this.match(58))){let i=tokenOperatorPrecedence(n);if(i>s){if(n===39){if(this.expectPlugin("pipelineOperator"),this.state.inFSharpPipelineDirectBody)return e;this.checkPipelineAtInfixOperator(e,t)}const U=this.startNodeAt(t);U.left=e,U.operator=this.state.value;const g=n===41||n===42,F=n===40;if(F&&(i=tokenOperatorPrecedence(42)),this.next(),n===39&&this.hasPlugin(["pipelineOperator",{proposal:"minimal"}])&&this.state.type===96&&this.prodParam.hasAwait)throw this.raise(Errors.UnexpectedAwaitAfterPipelineBody,this.state.startLoc);U.right=this.parseExprOpRightExpr(n,i);const B=this.finishNode(U,g||F?"LogicalExpression":"BinaryExpression"),r=this.state.type;if(F&&(r===41||r===42)||g&&r===40)throw this.raise(Errors.MixingCoalesceWithLogical,this.state.startLoc);return this.parseExprOp(B,t,s)}}return e}parseExprOpRightExpr(e,t){const s=this.state.startLoc;switch(e){case 39:switch(this.getPluginOption("pipelineOperator","proposal")){case"hack":return this.withTopicBindingContext(()=>this.parseHackPipeBody());case"smart":return this.withTopicBindingContext(()=>{if(this.prodParam.hasYield&&this.isContextual(108))throw this.raise(Errors.PipeBodyIsTighter,this.state.startLoc);return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(e,t),s)});case"fsharp":return this.withSoloAwaitPermittingContext(()=>this.parseFSharpPipelineBody(t))}default:return this.parseExprOpBaseRightExpr(e,t)}}parseExprOpBaseRightExpr(e,t){const s=this.state.startLoc;return this.parseExprOp(this.parseMaybeUnaryOrPrivate(),s,tokenIsRightAssociative(e)?t-1:t)}parseHackPipeBody(){var e;const{startLoc:t}=this.state,s=this.parseMaybeAssign();return UnparenthesizedPipeBodyDescriptions.has(s.type)&&!((e=s.extra)!=null&&e.parenthesized)&&this.raise(Errors.PipeUnparenthesizedBody,t,{type:s.type}),this.topicReferenceWasUsedInCurrentContext()||this.raise(Errors.PipeTopicUnused,t),s}checkExponentialAfterUnary(e){this.match(57)&&this.raise(Errors.UnexpectedTokenUnaryExponentiation,e.argument)}parseMaybeUnary(e,t){const s=this.state.startLoc,n=this.isContextual(96);if(n&&this.recordAwaitIfAllowed()){this.next();const F=this.parseAwait(s);return t||this.checkExponentialAfterUnary(F),F}const i=this.match(34),U=this.startNode();if(tokenIsPrefix(this.state.type)){U.operator=this.state.value,U.prefix=!0,this.match(72)&&this.expectPlugin("throwExpressions");const F=this.match(89);if(this.next(),U.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),this.state.strict&&F){const B=U.argument;B.type==="Identifier"?this.raise(Errors.StrictDelete,U):this.hasPropertyAsPrivateName(B)&&this.raise(Errors.DeletePrivateField,U)}if(!i)return t||this.checkExponentialAfterUnary(U),this.finishNode(U,"UnaryExpression")}const g=this.parseUpdate(U,i,e);if(n){const{type:F}=this.state;if((this.hasPlugin("v8intrinsic")?tokenCanStartExpression(F):tokenCanStartExpression(F)&&!this.match(54))&&!this.isAmbiguousAwait())return this.raiseOverwrite(Errors.AwaitNotInAsyncContext,s),this.parseAwait(s)}return g}parseUpdate(e,t,s){if(t){const U=e;return this.checkLVal(U.argument,this.finishNode(U,"UpdateExpression")),e}const n=this.state.startLoc;let i=this.parseExprSubscripts(s);if(this.checkExpressionErrors(s,!1))return i;for(;tokenIsPostfix(this.state.type)&&!this.canInsertSemicolon();){const U=this.startNodeAt(n);U.operator=this.state.value,U.prefix=!1,U.argument=i,this.next(),this.checkLVal(i,i=this.finishNode(U,"UpdateExpression"))}return i}parseExprSubscripts(e){const t=this.state.startLoc,s=this.state.potentialArrowAt,n=this.parseExprAtom(e);return this.shouldExitDescending(n,s)?n:this.parseSubscripts(n,t)}parseSubscripts(e,t,s){const n={optionalChainMember:!1,maybeAsyncArrow:this.atPossibleAsyncArrow(e),stop:!1};do e=this.parseSubscript(e,t,s,n),n.maybeAsyncArrow=!1;while(!n.stop);return e}parseSubscript(e,t,s,n){const{type:i}=this.state;if(!s&&i===15)return this.parseBind(e,t,s,n);if(tokenIsTemplate(i))return this.parseTaggedTemplateExpression(e,t,n);let U=!1;if(i===18){if(s&&(this.raise(Errors.OptionalChainingNoNew,this.state.startLoc),this.lookaheadCharCode()===40))return n.stop=!0,e;n.optionalChainMember=U=!0,this.next()}if(!s&&this.match(10))return this.parseCoverCallAndAsyncArrowHead(e,t,n,U);{const g=this.eat(0);return g||U||this.eat(16)?this.parseMember(e,t,n,g,U):(n.stop=!0,e)}}parseMember(e,t,s,n,i){const U=this.startNodeAt(t);return U.object=e,U.computed=n,n?(U.property=this.parseExpression(),this.expect(3)):this.match(139)?(e.type==="Super"&&this.raise(Errors.SuperPrivateField,t),this.classScope.usePrivateName(this.state.value,this.state.startLoc),U.property=this.parsePrivateName()):U.property=this.parseIdentifier(!0),s.optionalChainMember?(U.optional=i,this.finishNode(U,"OptionalMemberExpression")):this.finishNode(U,"MemberExpression")}parseBind(e,t,s,n){const i=this.startNodeAt(t);return i.object=e,this.next(),i.callee=this.parseNoCallExpr(),n.stop=!0,this.parseSubscripts(this.finishNode(i,"BindExpression"),t,s)}parseCoverCallAndAsyncArrowHead(e,t,s,n){const i=this.state.maybeInArrowParameters;let U=null;this.state.maybeInArrowParameters=!0,this.next();const g=this.startNodeAt(t);g.callee=e;const{maybeAsyncArrow:F,optionalChainMember:B}=s;F&&(this.expressionScope.enter(newAsyncArrowScope()),U=new ExpressionErrors),B&&(g.optional=n),n?g.arguments=this.parseCallExpressionArguments(11):g.arguments=this.parseCallExpressionArguments(11,e.type!=="Super",g,U);let r=this.finishCallExpression(g,B);return F&&this.shouldParseAsyncArrow()&&!n?(s.stop=!0,this.checkDestructuringPrivate(U),this.expressionScope.validateAsPattern(),this.expressionScope.exit(),r=this.parseAsyncArrowFromCallExpression(this.startNodeAt(t),r)):(F&&(this.checkExpressionErrors(U,!0),this.expressionScope.exit()),this.toReferencedArguments(r)),this.state.maybeInArrowParameters=i,r}toReferencedArguments(e,t){this.toReferencedListDeep(e.arguments,t)}parseTaggedTemplateExpression(e,t,s){const n=this.startNodeAt(t);return n.tag=e,n.quasi=this.parseTemplate(!0),s.optionalChainMember&&this.raise(Errors.OptionalChainingNoTemplate,t),this.finishNode(n,"TaggedTemplateExpression")}atPossibleAsyncArrow(e){return e.type==="Identifier"&&e.name==="async"&&this.state.lastTokEndLoc.index===e.end&&!this.canInsertSemicolon()&&e.end-e.start===5&&this.offsetToSourcePos(e.start)===this.state.potentialArrowAt}finishCallExpression(e,t){if(e.callee.type==="Import")if(e.arguments.length===0||e.arguments.length>2)this.raise(Errors.ImportCallArity,e);else for(const s of e.arguments)s.type==="SpreadElement"&&this.raise(Errors.ImportCallSpreadArgument,s);return this.finishNode(e,t?"OptionalCallExpression":"CallExpression")}parseCallExpressionArguments(e,t,s,n){const i=[];let U=!0;const g=this.state.inFSharpPipelineDirectBody;for(this.state.inFSharpPipelineDirectBody=!1;!this.eat(e);){if(U)U=!1;else if(this.expect(12),this.match(e)){s&&this.addTrailingCommaExtraToNode(s),this.next();break}i.push(this.parseExprListItem(!1,n,t))}return this.state.inFSharpPipelineDirectBody=g,i}shouldParseAsyncArrow(){return this.match(19)&&!this.canInsertSemicolon()}parseAsyncArrowFromCallExpression(e,t){var s;return this.resetPreviousNodeTrailingComments(t),this.expect(19),this.parseArrowExpression(e,t.arguments,!0,(s=t.extra)==null?void 0:s.trailingCommaLoc),t.innerComments&&setInnerComments(e,t.innerComments),t.callee.trailingComments&&setInnerComments(e,t.callee.trailingComments),e}parseNoCallExpr(){const e=this.state.startLoc;return this.parseSubscripts(this.parseExprAtom(),e,!0)}parseExprAtom(e){let t,s=null;const{type:n}=this.state;switch(n){case 79:return this.parseSuper();case 83:return t=this.startNode(),this.next(),this.match(16)?this.parseImportMetaProperty(t):this.match(10)?this.options.createImportExpressions?this.parseImportCall(t):this.finishNode(t,"Import"):(this.raise(Errors.UnsupportedImport,this.state.lastTokStartLoc),this.finishNode(t,"Import"));case 78:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case 90:return this.parseDo(this.startNode(),!1);case 56:case 31:return this.readRegexp(),this.parseRegExpLiteral(this.state.value);case 135:return this.parseNumericLiteral(this.state.value);case 136:return this.parseBigIntLiteral(this.state.value);case 134:return this.parseStringLiteral(this.state.value);case 84:return this.parseNullLiteral();case 85:return this.parseBooleanLiteral(!0);case 86:return this.parseBooleanLiteral(!1);case 10:{const i=this.state.potentialArrowAt===this.state.start;return this.parseParenAndDistinguishExpression(i)}case 2:case 1:return this.parseArrayLike(this.state.type===2?4:3,!1,!0);case 0:return this.parseArrayLike(3,!0,!1,e);case 6:case 7:return this.parseObjectLike(this.state.type===6?9:8,!1,!0);case 5:return this.parseObjectLike(8,!1,!1,e);case 68:return this.parseFunctionOrFunctionSent();case 26:s=this.parseDecorators();case 80:return this.parseClass(this.maybeTakeDecorators(s,this.startNode()),!1);case 77:return this.parseNewOrNewTarget();case 25:case 24:return this.parseTemplate(!1);case 15:{t=this.startNode(),this.next(),t.object=null;const i=t.callee=this.parseNoCallExpr();if(i.type==="MemberExpression")return this.finishNode(t,"BindExpression");throw this.raise(Errors.UnsupportedBind,i)}case 139:return this.raise(Errors.PrivateInExpectedIn,this.state.startLoc,{identifierName:this.state.value}),this.parsePrivateName();case 33:return this.parseTopicReferenceThenEqualsSign(54,"%");case 32:return this.parseTopicReferenceThenEqualsSign(44,"^");case 37:case 38:return this.parseTopicReference("hack");case 44:case 54:case 27:{const i=this.getPluginOption("pipelineOperator","proposal");if(i)return this.parseTopicReference(i);this.unexpected();break}case 47:{const i=this.input.codePointAt(this.nextTokenStart());isIdentifierStart(i)||i===62?this.expectOnePlugin(["jsx","flow","typescript"]):this.unexpected();break}default:if(n===137)return this.parseDecimalLiteral(this.state.value);if(tokenIsIdentifier(n)){if(this.isContextual(127)&&this.lookaheadInLineCharCode()===123)return this.parseModuleExpression();const i=this.state.potentialArrowAt===this.state.start,U=this.state.containsEsc,g=this.parseIdentifier();if(!U&&g.name==="async"&&!this.canInsertSemicolon()){const{type:F}=this.state;if(F===68)return this.resetPreviousNodeTrailingComments(g),this.next(),this.parseAsyncFunctionExpression(this.startNodeAtNode(g));if(tokenIsIdentifier(F))return this.lookaheadCharCode()===61?this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(g)):g;if(F===90)return this.resetPreviousNodeTrailingComments(g),this.parseDo(this.startNodeAtNode(g),!0)}return i&&this.match(19)&&!this.canInsertSemicolon()?(this.next(),this.parseArrowExpression(this.startNodeAtNode(g),[g],!1)):g}else this.unexpected()}}parseTopicReferenceThenEqualsSign(e,t){const s=this.getPluginOption("pipelineOperator","proposal");if(s)return this.state.type=e,this.state.value=t,this.state.pos--,this.state.end--,this.state.endLoc=createPositionWithColumnOffset(this.state.endLoc,-1),this.parseTopicReference(s);this.unexpected()}parseTopicReference(e){const t=this.startNode(),s=this.state.startLoc,n=this.state.type;return this.next(),this.finishTopicReference(t,s,e,n)}finishTopicReference(e,t,s,n){if(this.testTopicReferenceConfiguration(s,t,n)){const i=s==="smart"?"PipelinePrimaryTopicReference":"TopicReference";return this.topicReferenceIsAllowedInCurrentContext()||this.raise(s==="smart"?Errors.PrimaryTopicNotAllowed:Errors.PipeTopicUnbound,t),this.registerTopicReference(),this.finishNode(e,i)}else throw this.raise(Errors.PipeTopicUnconfiguredToken,t,{token:tokenLabelName(n)})}testTopicReferenceConfiguration(e,t,s){switch(e){case"hack":return this.hasPlugin(["pipelineOperator",{topicToken:tokenLabelName(s)}]);case"smart":return s===27;default:throw this.raise(Errors.PipeTopicRequiresHackPipes,t)}}parseAsyncArrowUnaryFunction(e){this.prodParam.enter(functionFlags(!0,this.prodParam.hasYield));const t=[this.parseIdentifier()];return this.prodParam.exit(),this.hasPrecedingLineBreak()&&this.raise(Errors.LineTerminatorBeforeArrow,this.state.curPosition()),this.expect(19),this.parseArrowExpression(e,t,!0)}parseDo(e,t){this.expectPlugin("doExpressions"),t&&this.expectPlugin("asyncDoExpressions"),e.async=t,this.next();const s=this.state.labels;return this.state.labels=[],t?(this.prodParam.enter(2),e.body=this.parseBlock(),this.prodParam.exit()):e.body=this.parseBlock(),this.state.labels=s,this.finishNode(e,"DoExpression")}parseSuper(){const e=this.startNode();return this.next(),this.match(10)&&!this.scope.allowDirectSuper&&!this.options.allowSuperOutsideMethod?this.raise(Errors.SuperNotAllowed,e):!this.scope.allowSuper&&!this.options.allowSuperOutsideMethod&&this.raise(Errors.UnexpectedSuper,e),!this.match(10)&&!this.match(0)&&!this.match(16)&&this.raise(Errors.UnsupportedSuper,e),this.finishNode(e,"Super")}parsePrivateName(){const e=this.startNode(),t=this.startNodeAt(createPositionWithColumnOffset(this.state.startLoc,1)),s=this.state.value;return this.next(),e.id=this.createIdentifier(t,s),this.finishNode(e,"PrivateName")}parseFunctionOrFunctionSent(){const e=this.startNode();if(this.next(),this.prodParam.hasYield&&this.match(16)){const t=this.createIdentifier(this.startNodeAtNode(e),"function");return this.next(),this.match(103)?this.expectPlugin("functionSent"):this.hasPlugin("functionSent")||this.unexpected(),this.parseMetaProperty(e,t,"sent")}return this.parseFunction(e)}parseMetaProperty(e,t,s){e.meta=t;const n=this.state.containsEsc;return e.property=this.parseIdentifier(!0),(e.property.name!==s||n)&&this.raise(Errors.UnsupportedMetaProperty,e.property,{target:t.name,onlyValidPropertyName:s}),this.finishNode(e,"MetaProperty")}parseImportMetaProperty(e){const t=this.createIdentifier(this.startNodeAtNode(e),"import");if(this.next(),this.isContextual(101))this.inModule||this.raise(Errors.ImportMetaOutsideModule,t),this.sawUnambiguousESM=!0;else if(this.isContextual(105)||this.isContextual(97)){const s=this.isContextual(105);if(s||this.unexpected(),this.expectPlugin(s?"sourcePhaseImports":"deferredImportEvaluation"),!this.options.createImportExpressions)throw this.raise(Errors.DynamicImportPhaseRequiresImportExpressions,this.state.startLoc,{phase:this.state.value});return this.next(),e.phase=s?"source":"defer",this.parseImportCall(e)}return this.parseMetaProperty(e,t,"meta")}parseLiteralAtNode(e,t,s){return this.addExtra(s,"rawValue",e),this.addExtra(s,"raw",this.input.slice(this.offsetToSourcePos(s.start),this.state.end)),s.value=e,this.next(),this.finishNode(s,t)}parseLiteral(e,t){const s=this.startNode();return this.parseLiteralAtNode(e,t,s)}parseStringLiteral(e){return this.parseLiteral(e,"StringLiteral")}parseNumericLiteral(e){return this.parseLiteral(e,"NumericLiteral")}parseBigIntLiteral(e){return this.parseLiteral(e,"BigIntLiteral")}parseDecimalLiteral(e){return this.parseLiteral(e,"DecimalLiteral")}parseRegExpLiteral(e){const t=this.startNode();return this.addExtra(t,"raw",this.input.slice(this.offsetToSourcePos(t.start),this.state.end)),t.pattern=e.pattern,t.flags=e.flags,this.next(),this.finishNode(t,"RegExpLiteral")}parseBooleanLiteral(e){const t=this.startNode();return t.value=e,this.next(),this.finishNode(t,"BooleanLiteral")}parseNullLiteral(){const e=this.startNode();return this.next(),this.finishNode(e,"NullLiteral")}parseParenAndDistinguishExpression(e){const t=this.state.startLoc;let s;this.next(),this.expressionScope.enter(newArrowHeadScope());const n=this.state.maybeInArrowParameters,i=this.state.inFSharpPipelineDirectBody;this.state.maybeInArrowParameters=!0,this.state.inFSharpPipelineDirectBody=!1;const U=this.state.startLoc,g=[],F=new ExpressionErrors;let B=!0,r,I;for(;!this.match(11);){if(B)B=!1;else if(this.expect(12,F.optionalParametersLoc===null?null:F.optionalParametersLoc),this.match(11)){I=this.state.startLoc;break}if(this.match(21)){const l=this.state.startLoc;if(r=this.state.startLoc,g.push(this.parseParenItem(this.parseRestBinding(),l)),!this.checkCommaAfterRest(41))break}else g.push(this.parseMaybeAssignAllowIn(F,this.parseParenItem))}const C=this.state.lastTokEndLoc;this.expect(11),this.state.maybeInArrowParameters=n,this.state.inFSharpPipelineDirectBody=i;let o=this.startNodeAt(t);return e&&this.shouldParseArrow(g)&&(o=this.parseArrow(o))?(this.checkDestructuringPrivate(F),this.expressionScope.validateAsPattern(),this.expressionScope.exit(),this.parseArrowExpression(o,g,!1),o):(this.expressionScope.exit(),g.length||this.unexpected(this.state.lastTokStartLoc),I&&this.unexpected(I),r&&this.unexpected(r),this.checkExpressionErrors(F,!0),this.toReferencedListDeep(g,!0),g.length>1?(s=this.startNodeAt(U),s.expressions=g,this.finishNode(s,"SequenceExpression"),this.resetEndLocation(s,C)):s=g[0],this.wrapParenthesis(t,s))}wrapParenthesis(e,t){if(!this.options.createParenthesizedExpressions)return this.addExtra(t,"parenthesized",!0),this.addExtra(t,"parenStart",e.index),this.takeSurroundingComments(t,e.index,this.state.lastTokEndLoc.index),t;const s=this.startNodeAt(e);return s.expression=t,this.finishNode(s,"ParenthesizedExpression")}shouldParseArrow(e){return!this.canInsertSemicolon()}parseArrow(e){if(this.eat(19))return e}parseParenItem(e,t){return e}parseNewOrNewTarget(){const e=this.startNode();if(this.next(),this.match(16)){const t=this.createIdentifier(this.startNodeAtNode(e),"new");this.next();const s=this.parseMetaProperty(e,t,"target");return!this.scope.inNonArrowFunction&&!this.scope.inClass&&!this.options.allowNewTargetOutsideFunction&&this.raise(Errors.UnexpectedNewTarget,s),s}return this.parseNew(e)}parseNew(e){if(this.parseNewCallee(e),this.eat(10)){const t=this.parseExprList(11);this.toReferencedList(t),e.arguments=t}else e.arguments=[];return this.finishNode(e,"NewExpression")}parseNewCallee(e){const t=this.match(83),s=this.parseNoCallExpr();e.callee=s,t&&(s.type==="Import"||s.type==="ImportExpression")&&this.raise(Errors.ImportCallNotNewExpression,s)}parseTemplateElement(e){const{start:t,startLoc:s,end:n,value:i}=this.state,U=t+1,g=this.startNodeAt(createPositionWithColumnOffset(s,1));i===null&&(e||this.raise(Errors.InvalidEscapeSequenceTemplate,createPositionWithColumnOffset(this.state.firstInvalidTemplateEscapePos,1)));const F=this.match(24),B=F?-1:-2,r=n+B;g.value={raw:this.input.slice(U,r).replace(/\r\n?/g,`