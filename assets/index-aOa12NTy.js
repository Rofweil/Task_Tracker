(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var fu={exports:{}},Es={},pu={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function rw(){if(rm)return oe;rm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=E&&S[E]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,R={};function j(S,b,se){this.props=S,this.context=b,this.refs=R,this.updater=se||T}j.prototype.isReactComponent={},j.prototype.setState=function(S,b){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,b,"setState")},j.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function ee(){}ee.prototype=j.prototype;function ie(S,b,se){this.props=S,this.context=b,this.refs=R,this.updater=se||T}var G=ie.prototype=new ee;G.constructor=ie,P(G,j.prototype),G.isPureReactComponent=!0;var F=Array.isArray,ne=Object.prototype.hasOwnProperty,U={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function ye(S,b,se){var ce,he={},fe=null,Ee=null;if(b!=null)for(ce in b.ref!==void 0&&(Ee=b.ref),b.key!==void 0&&(fe=""+b.key),b)ne.call(b,ce)&&!re.hasOwnProperty(ce)&&(he[ce]=b[ce]);var ge=arguments.length-2;if(ge===1)he.children=se;else if(1<ge){for(var Te=Array(ge),kt=0;kt<ge;kt++)Te[kt]=arguments[kt+2];he.children=Te}if(S&&S.defaultProps)for(ce in ge=S.defaultProps,ge)he[ce]===void 0&&(he[ce]=ge[ce]);return{$$typeof:r,type:S,key:fe,ref:Ee,props:he,_owner:U.current}}function Fe(S,b){return{$$typeof:r,type:S.type,key:b,ref:S.ref,props:S.props,_owner:S._owner}}function Ye(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function He(S){var b={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(se){return b[se]})}var be=/\/+/g;function Ve(S,b){return typeof S=="object"&&S!==null&&S.key!=null?He(""+S.key):b.toString(36)}function Bt(S,b,se,ce,he){var fe=typeof S;(fe==="undefined"||fe==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(fe){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=S,he=he(Ee),S=ce===""?"."+Ve(Ee,0):ce,F(he)?(se="",S!=null&&(se=S.replace(be,"$&/")+"/"),Bt(he,b,se,"",function(kt){return kt})):he!=null&&(Ye(he)&&(he=Fe(he,se+(!he.key||Ee&&Ee.key===he.key?"":(""+he.key).replace(be,"$&/")+"/")+S)),b.push(he)),1;if(Ee=0,ce=ce===""?".":ce+":",F(S))for(var ge=0;ge<S.length;ge++){fe=S[ge];var Te=ce+Ve(fe,ge);Ee+=Bt(fe,b,se,Te,he)}else if(Te=w(S),typeof Te=="function")for(S=Te.call(S),ge=0;!(fe=S.next()).done;)fe=fe.value,Te=ce+Ve(fe,ge++),Ee+=Bt(fe,b,se,Te,he);else if(fe==="object")throw b=String(S),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return Ee}function en(S,b,se){if(S==null)return S;var ce=[],he=0;return Bt(S,ce,"","",function(fe){return b.call(se,fe,he++)}),ce}function yt(S){if(S._status===-1){var b=S._result;b=b(),b.then(function(se){(S._status===0||S._status===-1)&&(S._status=1,S._result=se)},function(se){(S._status===0||S._status===-1)&&(S._status=2,S._result=se)}),S._status===-1&&(S._status=0,S._result=b)}if(S._status===1)return S._result.default;throw S._result}var Oe={current:null},z={transition:null},Y={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:U};function H(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:en,forEach:function(S,b,se){en(S,function(){b.apply(this,arguments)},se)},count:function(S){var b=0;return en(S,function(){b++}),b},toArray:function(S){return en(S,function(b){return b})||[]},only:function(S){if(!Ye(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},oe.Component=j,oe.Fragment=n,oe.Profiler=l,oe.PureComponent=ie,oe.StrictMode=s,oe.Suspense=m,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,oe.act=H,oe.cloneElement=function(S,b,se){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ce=P({},S.props),he=S.key,fe=S.ref,Ee=S._owner;if(b!=null){if(b.ref!==void 0&&(fe=b.ref,Ee=U.current),b.key!==void 0&&(he=""+b.key),S.type&&S.type.defaultProps)var ge=S.type.defaultProps;for(Te in b)ne.call(b,Te)&&!re.hasOwnProperty(Te)&&(ce[Te]=b[Te]===void 0&&ge!==void 0?ge[Te]:b[Te])}var Te=arguments.length-2;if(Te===1)ce.children=se;else if(1<Te){ge=Array(Te);for(var kt=0;kt<Te;kt++)ge[kt]=arguments[kt+2];ce.children=ge}return{$$typeof:r,type:S.type,key:he,ref:fe,props:ce,_owner:Ee}},oe.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},oe.createElement=ye,oe.createFactory=function(S){var b=ye.bind(null,S);return b.type=S,b},oe.createRef=function(){return{current:null}},oe.forwardRef=function(S){return{$$typeof:f,render:S}},oe.isValidElement=Ye,oe.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:yt}},oe.memo=function(S,b){return{$$typeof:_,type:S,compare:b===void 0?null:b}},oe.startTransition=function(S){var b=z.transition;z.transition={};try{S()}finally{z.transition=b}},oe.unstable_act=H,oe.useCallback=function(S,b){return Oe.current.useCallback(S,b)},oe.useContext=function(S){return Oe.current.useContext(S)},oe.useDebugValue=function(){},oe.useDeferredValue=function(S){return Oe.current.useDeferredValue(S)},oe.useEffect=function(S,b){return Oe.current.useEffect(S,b)},oe.useId=function(){return Oe.current.useId()},oe.useImperativeHandle=function(S,b,se){return Oe.current.useImperativeHandle(S,b,se)},oe.useInsertionEffect=function(S,b){return Oe.current.useInsertionEffect(S,b)},oe.useLayoutEffect=function(S,b){return Oe.current.useLayoutEffect(S,b)},oe.useMemo=function(S,b){return Oe.current.useMemo(S,b)},oe.useReducer=function(S,b,se){return Oe.current.useReducer(S,b,se)},oe.useRef=function(S){return Oe.current.useRef(S)},oe.useState=function(S){return Oe.current.useState(S)},oe.useSyncExternalStore=function(S,b,se){return Oe.current.useSyncExternalStore(S,b,se)},oe.useTransition=function(){return Oe.current.useTransition()},oe.version="18.3.1",oe}var im;function sd(){return im||(im=1,pu.exports=rw()),pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function iw(){if(sm)return Es;sm=1;var r=sd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,_){var v,E={},w=null,T=null;_!==void 0&&(w=""+_),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(T=m.ref);for(v in m)s.call(m,v)&&!c.hasOwnProperty(v)&&(E[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)E[v]===void 0&&(E[v]=m[v]);return{$$typeof:e,type:f,key:w,ref:T,props:E,_owner:l.current}}return Es.Fragment=n,Es.jsx=d,Es.jsxs=d,Es}var om;function sw(){return om||(om=1,fu.exports=iw()),fu.exports}var p=sw(),El={},mu={exports:{}},St={},gu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function ow(){return lm||(lm=1,(function(r){function e(z,Y){var H=z.length;z.push(Y);e:for(;0<H;){var S=H-1>>>1,b=z[S];if(0<l(b,Y))z[S]=Y,z[H]=b,H=S;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Y=z[0],H=z.pop();if(H!==Y){z[0]=H;e:for(var S=0,b=z.length,se=b>>>1;S<se;){var ce=2*(S+1)-1,he=z[ce],fe=ce+1,Ee=z[fe];if(0>l(he,H))fe<b&&0>l(Ee,he)?(z[S]=Ee,z[fe]=H,S=fe):(z[S]=he,z[ce]=H,S=ce);else if(fe<b&&0>l(Ee,H))z[S]=Ee,z[fe]=H,S=fe;else break e}}return Y}function l(z,Y){var H=z.sortIndex-Y.sortIndex;return H!==0?H:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var m=[],_=[],v=1,E=null,w=3,T=!1,P=!1,R=!1,j=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(z){for(var Y=n(_);Y!==null;){if(Y.callback===null)s(_);else if(Y.startTime<=z)s(_),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(_)}}function F(z){if(R=!1,G(z),!P)if(n(m)!==null)P=!0,yt(ne);else{var Y=n(_);Y!==null&&Oe(F,Y.startTime-z)}}function ne(z,Y){P=!1,R&&(R=!1,ee(ye),ye=-1),T=!0;var H=w;try{for(G(Y),E=n(m);E!==null&&(!(E.expirationTime>Y)||z&&!He());){var S=E.callback;if(typeof S=="function"){E.callback=null,w=E.priorityLevel;var b=S(E.expirationTime<=Y);Y=r.unstable_now(),typeof b=="function"?E.callback=b:E===n(m)&&s(m),G(Y)}else s(m);E=n(m)}if(E!==null)var se=!0;else{var ce=n(_);ce!==null&&Oe(F,ce.startTime-Y),se=!1}return se}finally{E=null,w=H,T=!1}}var U=!1,re=null,ye=-1,Fe=5,Ye=-1;function He(){return!(r.unstable_now()-Ye<Fe)}function be(){if(re!==null){var z=r.unstable_now();Ye=z;var Y=!0;try{Y=re(!0,z)}finally{Y?Ve():(U=!1,re=null)}}else U=!1}var Ve;if(typeof ie=="function")Ve=function(){ie(be)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,en=Bt.port2;Bt.port1.onmessage=be,Ve=function(){en.postMessage(null)}}else Ve=function(){j(be,0)};function yt(z){re=z,U||(U=!0,Ve())}function Oe(z,Y){ye=j(function(){z(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){P||T||(P=!0,yt(ne))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(z){switch(w){case 1:case 2:case 3:var Y=3;break;default:Y=w}var H=w;w=Y;try{return z()}finally{w=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=w;w=z;try{return Y()}finally{w=H}},r.unstable_scheduleCallback=function(z,Y,H){var S=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=H+b,z={id:v++,callback:Y,priorityLevel:z,startTime:H,expirationTime:b,sortIndex:-1},H>S?(z.sortIndex=H,e(_,z),n(m)===null&&z===n(_)&&(R?(ee(ye),ye=-1):R=!0,Oe(F,H-S))):(z.sortIndex=b,e(m,z),P||T||(P=!0,yt(ne))),z},r.unstable_shouldYield=He,r.unstable_wrapCallback=function(z){var Y=w;return function(){var H=w;w=Y;try{return z.apply(this,arguments)}finally{w=H}}}})(_u)),_u}var am;function lw(){return am||(am=1,gu.exports=ow()),gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function aw(){if(cm)return St;cm=1;var r=sd(),e=lw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function w(t){return m.call(E,t)?!0:m.call(v,t)?!1:_.test(t)?E[t]=!0:(v[t]=!0,!1)}function T(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P(t,i,o,a){if(i===null||typeof i>"u"||T(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,a,u,h,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=g}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){j[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];j[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){j[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){j[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){j[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){j[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){j[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){j[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){j[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var ee=/[\-:]([a-z])/g;function ie(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(ee,ie);j[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(ee,ie);j[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(ee,ie);j[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){j[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),j.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){j[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,i,o,a){var u=j.hasOwnProperty(i)?j[i]:null;(u!==null?u.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(P(i,o,u,a)&&(o=null),a||u===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,a=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var F=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),U=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Ye=Symbol.for("react.provider"),He=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),Bt=Symbol.for("react.suspense_list"),en=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,S;function b(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var se=!1;function ce(t,i){if(!t||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var a=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){a=N}t.call(i.prototype)}else{try{throw Error()}catch(N){a=N}t()}}catch(N){if(N&&a&&typeof N.stack=="string"){for(var u=N.stack.split(`
`),h=a.stack.split(`
`),g=u.length-1,y=h.length-1;1<=g&&0<=y&&u[g]!==h[y];)y--;for(;1<=g&&0<=y;g--,y--)if(u[g]!==h[y]){if(g!==1||y!==1)do if(g--,y--,0>y||u[g]!==h[y]){var x=`
`+u[g].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=g&&0<=y);break}}}finally{se=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function he(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function fe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case re:return"Fragment";case U:return"Portal";case Fe:return"Profiler";case ye:return"StrictMode";case Ve:return"Suspense";case Bt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case He:return(t.displayName||"Context")+".Consumer";case Ye:return(t._context.displayName||"Context")+".Provider";case be:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case en:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case yt:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kt(t){var i=Te(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,h.call(this,g)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function uo(t){t._valueTracker||(t._valueTracker=kt(t))}function ah(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Te(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wa(t,i){var o=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ch(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=ge(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function uh(t,i){i=i.checked,i!=null&&G(t,"checked",i,!1)}function Ea(t,i){uh(t,i);var o=ge(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?xa(t,i.type,o):i.hasOwnProperty("defaultValue")&&xa(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function dh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function xa(t,i,o){(i!=="number"||ho(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Mi=Array.isArray;function $r(t,i,o,a){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ge(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Ca(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Mi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ge(o)}}function fh(t,i){var o=ge(i.value),a=ge(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ph(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function mh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?mh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,gh=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ji(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lv=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(t){lv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ui[i]=Ui[t]})});function _h(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ui.hasOwnProperty(t)&&Ui[t]?(""+i).trim():i+"px"}function yh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,u=_h(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,u):t[o]=u}}var av=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(t,i){if(i){if(av[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ka(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ta=null;function Na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ra=null,Gr=null,Kr=null;function vh(t){if(t=os(t)){if(typeof Ra!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Mo(i),Ra(t.stateNode,t.type,i))}}function wh(t){Gr?Kr?Kr.push(t):Kr=[t]:Gr=t}function Eh(){if(Gr){var t=Gr,i=Kr;if(Kr=Gr=null,vh(t),i)for(t=0;t<i.length;t++)vh(i[t])}}function xh(t,i){return t(i)}function Ch(){}var Pa=!1;function Sh(t,i,o){if(Pa)return t(i,o);Pa=!0;try{return xh(t,i,o)}finally{Pa=!1,(Gr!==null||Kr!==null)&&(Ch(),Eh())}}function Fi(t,i){var o=t.stateNode;if(o===null)return null;var a=Mo(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Aa=!1;if(f)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Aa=!1}function cv(t,i,o,a,u,h,g,y,x){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(O){this.onError(O)}}var Bi=!1,po=null,mo=!1,ba=null,uv={onError:function(t){Bi=!0,po=t}};function dv(t,i,o,a,u,h,g,y,x){Bi=!1,po=null,cv.apply(uv,arguments)}function hv(t,i,o,a,u,h,g,y,x){if(dv.apply(this,arguments),Bi){if(Bi){var N=po;Bi=!1,po=null}else throw Error(n(198));mo||(mo=!0,ba=N)}}function mr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ih(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function kh(t){if(mr(t)!==t)throw Error(n(188))}function fv(t){var i=t.alternate;if(!i){if(i=mr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(a=u.return,a!==null){o=a;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return kh(u),t;if(h===a)return kh(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=u,a=h;else{for(var g=!1,y=u.child;y;){if(y===o){g=!0,o=u,a=h;break}if(y===a){g=!0,a=u,o=h;break}y=y.sibling}if(!g){for(y=h.child;y;){if(y===o){g=!0,o=h,a=u;break}if(y===a){g=!0,a=h,o=u;break}y=y.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Th(t){return t=fv(t),t!==null?Nh(t):null}function Nh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Nh(t);if(i!==null)return i;t=t.sibling}return null}var Rh=e.unstable_scheduleCallback,Ph=e.unstable_cancelCallback,pv=e.unstable_shouldYield,mv=e.unstable_requestPaint,ze=e.unstable_now,gv=e.unstable_getCurrentPriorityLevel,Oa=e.unstable_ImmediatePriority,Ah=e.unstable_UserBlockingPriority,go=e.unstable_NormalPriority,_v=e.unstable_LowPriority,bh=e.unstable_IdlePriority,_o=null,tn=null;function yv(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(_o,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Ev,vv=Math.log,wv=Math.LN2;function Ev(t){return t>>>=0,t===0?32:31-(vv(t)/wv|0)|0}var yo=64,vo=4194304;function Wi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wo(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,u=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var y=g&~u;y!==0?a=Wi(y):(h&=g,h!==0&&(a=Wi(h)))}else g=o&~u,g!==0?a=Wi(g):h!==0&&(a=Wi(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&u)===0&&(u=a&-a,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Wt(i),u=1<<o,a|=t[o],i&=~u;return a}function xv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Wt(h),y=1<<g,x=u[g];x===-1?((y&o)===0||(y&a)!==0)&&(u[g]=xv(y,i)):x<=i&&(t.expiredLanes|=y),h&=~y}}function Da(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oh(){var t=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),t}function La(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Hi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Wt(i),t[i]=o}function Sv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Wt(o),h=1<<u;i[u]=0,a[u]=-1,t[u]=-1,o&=~h}}function Ma(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Wt(o),u=1<<a;u&i|t[a]&i&&(t[a]|=i),o&=~u}}var _e=0;function Dh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Lh,ja,Mh,jh,Uh,Ua=!1,Eo=[],Pn=null,An=null,bn=null,Vi=new Map,$i=new Map,On=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,i){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Vi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(i.pointerId)}}function Gi(t,i,o,a,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[u]},i!==null&&(i=os(i),i!==null&&ja(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function kv(t,i,o,a,u){switch(i){case"focusin":return Pn=Gi(Pn,t,i,o,a,u),!0;case"dragenter":return An=Gi(An,t,i,o,a,u),!0;case"mouseover":return bn=Gi(bn,t,i,o,a,u),!0;case"pointerover":var h=u.pointerId;return Vi.set(h,Gi(Vi.get(h)||null,t,i,o,a,u)),!0;case"gotpointercapture":return h=u.pointerId,$i.set(h,Gi($i.get(h)||null,t,i,o,a,u)),!0}return!1}function zh(t){var i=gr(t.target);if(i!==null){var o=mr(i);if(o!==null){if(i=o.tag,i===13){if(i=Ih(o),i!==null){t.blockedOn=i,Uh(t.priority,function(){Mh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=za(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Ta=a,o.target.dispatchEvent(a),Ta=null}else return i=os(o),i!==null&&ja(i),t.blockedOn=o,!1;i.shift()}return!0}function Bh(t,i,o){xo(t)&&o.delete(i)}function Tv(){Ua=!1,Pn!==null&&xo(Pn)&&(Pn=null),An!==null&&xo(An)&&(An=null),bn!==null&&xo(bn)&&(bn=null),Vi.forEach(Bh),$i.forEach(Bh)}function Ki(t,i){t.blockedOn===i&&(t.blockedOn=null,Ua||(Ua=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tv)))}function qi(t){function i(u){return Ki(u,t)}if(0<Eo.length){Ki(Eo[0],t);for(var o=1;o<Eo.length;o++){var a=Eo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Pn!==null&&Ki(Pn,t),An!==null&&Ki(An,t),bn!==null&&Ki(bn,t),Vi.forEach(i),$i.forEach(i),o=0;o<On.length;o++)a=On[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<On.length&&(o=On[0],o.blockedOn===null);)zh(o),o.blockedOn===null&&On.shift()}var qr=F.ReactCurrentBatchConfig,Co=!0;function Nv(t,i,o,a){var u=_e,h=qr.transition;qr.transition=null;try{_e=1,Fa(t,i,o,a)}finally{_e=u,qr.transition=h}}function Rv(t,i,o,a){var u=_e,h=qr.transition;qr.transition=null;try{_e=4,Fa(t,i,o,a)}finally{_e=u,qr.transition=h}}function Fa(t,i,o,a){if(Co){var u=za(t,i,o,a);if(u===null)rc(t,i,a,So,o),Fh(t,a);else if(kv(u,t,i,o,a))a.stopPropagation();else if(Fh(t,a),i&4&&-1<Iv.indexOf(t)){for(;u!==null;){var h=os(u);if(h!==null&&Lh(h),h=za(t,i,o,a),h===null&&rc(t,i,a,So,o),h===u)break;u=h}u!==null&&a.stopPropagation()}else rc(t,i,a,null,o)}}var So=null;function za(t,i,o,a){if(So=null,t=Na(a),t=gr(t),t!==null)if(i=mr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ih(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return So=t,null}function Wh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case Oa:return 1;case Ah:return 4;case go:case _v:return 16;case bh:return 536870912;default:return 16}default:return 16}}var Dn=null,Ba=null,Io=null;function Hh(){if(Io)return Io;var t,i=Ba,o=i.length,a,u="value"in Dn?Dn.value:Dn.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var g=o-t;for(a=1;a<=g&&i[o-a]===u[h-a];a++);return Io=u.slice(t,1<a?1-a:void 0)}function ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function To(){return!0}function Vh(){return!1}function Tt(t){function i(o,a,u,h,g){this._reactName=o,this._targetInst=u,this.type=a,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?To:Vh,this.isPropagationStopped=Vh,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Tt(Qr),Qi=H({},Qr,{view:0,detail:0}),Pv=Tt(Qi),Ha,Va,Yi,No=H({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(Ha=t.screenX-Yi.screenX,Va=t.screenY-Yi.screenY):Va=Ha=0,Yi=t),Ha)},movementY:function(t){return"movementY"in t?t.movementY:Va}}),$h=Tt(No),Av=H({},No,{dataTransfer:0}),bv=Tt(Av),Ov=H({},Qi,{relatedTarget:0}),$a=Tt(Ov),Dv=H({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=Tt(Dv),Mv=H({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=Tt(Mv),Uv=H({},Qr,{data:0}),Gh=Tt(Uv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Bv[t])?!!i[t]:!1}function Ga(){return Wv}var Hv=H({},Qi,{key:function(t){if(t.key){var i=Fv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vv=Tt(Hv),$v=H({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Tt($v),Gv=H({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),Kv=Tt(Gv),qv=H({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Tt(qv),Yv=H({},No,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Tt(Yv),Jv=[9,13,27,32],Ka=f&&"CompositionEvent"in window,Xi=null;f&&"documentMode"in document&&(Xi=document.documentMode);var Zv=f&&"TextEvent"in window&&!Xi,qh=f&&(!Ka||Xi&&8<Xi&&11>=Xi),Qh=" ",Yh=!1;function Xh(t,i){switch(t){case"keyup":return Jv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function e0(t,i){switch(t){case"compositionend":return Jh(i);case"keypress":return i.which!==32?null:(Yh=!0,Qh);case"textInput":return t=i.data,t===Qh&&Yh?null:t;default:return null}}function t0(t,i){if(Yr)return t==="compositionend"||!Ka&&Xh(t,i)?(t=Hh(),Io=Ba=Dn=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qh&&i.locale!=="ko"?null:i.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!n0[t.type]:i==="textarea"}function ef(t,i,o,a){wh(a),i=Oo(i,"onChange"),0<i.length&&(o=new Wa("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Ji=null,Zi=null;function r0(t){vf(t,0)}function Ro(t){var i=ti(t);if(ah(i))return t}function i0(t,i){if(t==="change")return i}var tf=!1;if(f){var qa;if(f){var Qa="oninput"in document;if(!Qa){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),Qa=typeof nf.oninput=="function"}qa=Qa}else qa=!1;tf=qa&&(!document.documentMode||9<document.documentMode)}function rf(){Ji&&(Ji.detachEvent("onpropertychange",sf),Zi=Ji=null)}function sf(t){if(t.propertyName==="value"&&Ro(Zi)){var i=[];ef(i,Zi,t,Na(t)),Sh(r0,i)}}function s0(t,i,o){t==="focusin"?(rf(),Ji=i,Zi=o,Ji.attachEvent("onpropertychange",sf)):t==="focusout"&&rf()}function o0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ro(Zi)}function l0(t,i){if(t==="click")return Ro(i)}function a0(t,i){if(t==="input"||t==="change")return Ro(i)}function c0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ht=typeof Object.is=="function"?Object.is:c0;function es(t,i){if(Ht(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var u=o[a];if(!m.call(i,u)||!Ht(t[u],i[u]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lf(t,i){var o=of(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=of(o)}}function af(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?af(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function cf(){for(var t=window,i=ho();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ho(t.document)}return i}function Ya(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function u0(t){var i=cf(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&af(o.ownerDocument.documentElement,o)){if(a!==null&&Ya(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(a.start,u);a=a.end===void 0?h:Math.min(a.end,u),!t.extend&&h>a&&(u=a,a=h,h=u),u=lf(o,h);var g=lf(o,a);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d0=f&&"documentMode"in document&&11>=document.documentMode,Xr=null,Xa=null,ts=null,Ja=!1;function uf(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ja||Xr==null||Xr!==ho(a)||(a=Xr,"selectionStart"in a&&Ya(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ts&&es(ts,a)||(ts=a,a=Oo(Xa,"onSelect"),0<a.length&&(i=new Wa("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Xr)))}function Po(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Jr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Za={},df={};f&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Ao(t){if(Za[t])return Za[t];if(!Jr[t])return t;var i=Jr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in df)return Za[t]=i[o];return t}var hf=Ao("animationend"),ff=Ao("animationiteration"),pf=Ao("animationstart"),mf=Ao("transitionend"),gf=new Map,_f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,i){gf.set(t,i),c(i,[t])}for(var ec=0;ec<_f.length;ec++){var tc=_f[ec],h0=tc.toLowerCase(),f0=tc[0].toUpperCase()+tc.slice(1);Ln(h0,"on"+f0)}Ln(hf,"onAnimationEnd"),Ln(ff,"onAnimationIteration"),Ln(pf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(mf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function yf(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,hv(a,i,void 0,t),t.currentTarget=null}function vf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],u=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var g=a.length-1;0<=g;g--){var y=a[g],x=y.instance,N=y.currentTarget;if(y=y.listener,x!==h&&u.isPropagationStopped())break e;yf(u,y,N),h=x}else for(g=0;g<a.length;g++){if(y=a[g],x=y.instance,N=y.currentTarget,y=y.listener,x!==h&&u.isPropagationStopped())break e;yf(u,y,N),h=x}}}if(mo)throw t=ba,mo=!1,ba=null,t}function Ie(t,i){var o=i[cc];o===void 0&&(o=i[cc]=new Set);var a=t+"__bubble";o.has(a)||(wf(i,t,2,!1),o.add(a))}function nc(t,i,o){var a=0;i&&(a|=4),wf(o,t,a,i)}var bo="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[bo]){t[bo]=!0,s.forEach(function(o){o!=="selectionchange"&&(p0.has(o)||nc(o,!1,t),nc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bo]||(i[bo]=!0,nc("selectionchange",!1,i))}}function wf(t,i,o,a){switch(Wh(i)){case 1:var u=Nv;break;case 4:u=Rv;break;default:u=Fa}o=u.bind(null,i,o,t),u=void 0,!Aa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function rc(t,i,o,a,u){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var y=a.stateNode.containerInfo;if(y===u||y.nodeType===8&&y.parentNode===u)break;if(g===4)for(g=a.return;g!==null;){var x=g.tag;if((x===3||x===4)&&(x=g.stateNode.containerInfo,x===u||x.nodeType===8&&x.parentNode===u))return;g=g.return}for(;y!==null;){if(g=gr(y),g===null)return;if(x=g.tag,x===5||x===6){a=h=g;continue e}y=y.parentNode}}a=a.return}Sh(function(){var N=h,O=Na(o),D=[];e:{var A=gf.get(t);if(A!==void 0){var B=Wa,V=t;switch(t){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":B=Vv;break;case"focusin":V="focus",B=$a;break;case"focusout":V="blur",B=$a;break;case"beforeblur":case"afterblur":B=$a;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Kv;break;case hf:case ff:case pf:B=Lv;break;case mf:B=Qv;break;case"scroll":B=Pv;break;case"wheel":B=Xv;break;case"copy":case"cut":case"paste":B=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Kh}var $=(i&4)!==0,Be=!$&&t==="scroll",I=$?A!==null?A+"Capture":null:A;$=[];for(var C=N,k;C!==null;){k=C;var L=k.stateNode;if(k.tag===5&&L!==null&&(k=L,I!==null&&(L=Fi(C,I),L!=null&&$.push(is(C,L,k)))),Be)break;C=C.return}0<$.length&&(A=new B(A,V,null,o,O),D.push({event:A,listeners:$}))}}if((i&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",A&&o!==Ta&&(V=o.relatedTarget||o.fromElement)&&(gr(V)||V[hn]))break e;if((B||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,B?(V=o.relatedTarget||o.toElement,B=N,V=V?gr(V):null,V!==null&&(Be=mr(V),V!==Be||V.tag!==5&&V.tag!==6)&&(V=null)):(B=null,V=N),B!==V)){if($=$h,L="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&($=Kh,L="onPointerLeave",I="onPointerEnter",C="pointer"),Be=B==null?A:ti(B),k=V==null?A:ti(V),A=new $(L,C+"leave",B,o,O),A.target=Be,A.relatedTarget=k,L=null,gr(O)===N&&($=new $(I,C+"enter",V,o,O),$.target=k,$.relatedTarget=Be,L=$),Be=L,B&&V)t:{for($=B,I=V,C=0,k=$;k;k=Zr(k))C++;for(k=0,L=I;L;L=Zr(L))k++;for(;0<C-k;)$=Zr($),C--;for(;0<k-C;)I=Zr(I),k--;for(;C--;){if($===I||I!==null&&$===I.alternate)break t;$=Zr($),I=Zr(I)}$=null}else $=null;B!==null&&Ef(D,A,B,$,!1),V!==null&&Be!==null&&Ef(D,Be,V,$,!0)}}e:{if(A=N?ti(N):window,B=A.nodeName&&A.nodeName.toLowerCase(),B==="select"||B==="input"&&A.type==="file")var K=i0;else if(Zh(A))if(tf)K=a0;else{K=o0;var q=s0}else(B=A.nodeName)&&B.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(K=l0);if(K&&(K=K(t,N))){ef(D,K,o,O);break e}q&&q(t,A,N),t==="focusout"&&(q=A._wrapperState)&&q.controlled&&A.type==="number"&&xa(A,"number",A.value)}switch(q=N?ti(N):window,t){case"focusin":(Zh(q)||q.contentEditable==="true")&&(Xr=q,Xa=N,ts=null);break;case"focusout":ts=Xa=Xr=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,uf(D,o,O);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":uf(D,o,O)}var Q;if(Ka)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Yr?Xh(t,o)&&(Z="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Z="onCompositionStart");Z&&(qh&&o.locale!=="ko"&&(Yr||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Yr&&(Q=Hh()):(Dn=O,Ba="value"in Dn?Dn.value:Dn.textContent,Yr=!0)),q=Oo(N,Z),0<q.length&&(Z=new Gh(Z,t,null,o,O),D.push({event:Z,listeners:q}),Q?Z.data=Q:(Q=Jh(o),Q!==null&&(Z.data=Q)))),(Q=Zv?e0(t,o):t0(t,o))&&(N=Oo(N,"onBeforeInput"),0<N.length&&(O=new Gh("onBeforeInput","beforeinput",null,o,O),D.push({event:O,listeners:N}),O.data=Q))}vf(D,i)})}function is(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Oo(t,i){for(var o=i+"Capture",a=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Fi(t,o),h!=null&&a.unshift(is(t,h,u)),h=Fi(t,i),h!=null&&a.push(is(t,h,u))),t=t.return}return a}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,i,o,a,u){for(var h=i._reactName,g=[];o!==null&&o!==a;){var y=o,x=y.alternate,N=y.stateNode;if(x!==null&&x===a)break;y.tag===5&&N!==null&&(y=N,u?(x=Fi(o,h),x!=null&&g.unshift(is(o,x,y))):u||(x=Fi(o,h),x!=null&&g.push(is(o,x,y)))),o=o.return}g.length!==0&&t.push({event:i,listeners:g})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function xf(t){return(typeof t=="string"?t:""+t).replace(m0,`
`).replace(g0,"")}function Do(t,i,o){if(i=xf(i),xf(t)!==i&&o)throw Error(n(425))}function Lo(){}var ic=null,sc=null;function oc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(t){return Cf.resolve(null).then(t).catch(v0)}:lc;function v0(t){setTimeout(function(){throw t})}function ac(t,i){var o=i,a=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(a===0){t.removeChild(u),qi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=u}while(o);qi(i)}function Mn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Sf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),nn="__reactFiber$"+ei,ss="__reactProps$"+ei,hn="__reactContainer$"+ei,cc="__reactEvents$"+ei,w0="__reactListeners$"+ei,E0="__reactHandles$"+ei;function gr(t){var i=t[nn];if(i)return i;for(var o=t.parentNode;o;){if(i=o[hn]||o[nn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Sf(t);t!==null;){if(o=t[nn])return o;t=Sf(t)}return i}t=o,o=t.parentNode}return null}function os(t){return t=t[nn]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Mo(t){return t[ss]||null}var uc=[],ni=-1;function jn(t){return{current:t}}function ke(t){0>ni||(t.current=uc[ni],uc[ni]=null,ni--)}function xe(t,i){ni++,uc[ni]=t.current,t.current=i}var Un={},ot=jn(Un),vt=jn(!1),_r=Un;function ri(t,i){var o=t.type.contextTypes;if(!o)return Un;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function wt(t){return t=t.childContextTypes,t!=null}function jo(){ke(vt),ke(ot)}function If(t,i,o){if(ot.current!==Un)throw Error(n(168));xe(ot,i),xe(vt,o)}function kf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var u in a)if(!(u in i))throw Error(n(108,Ee(t)||"Unknown",u));return H({},o,a)}function Uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Un,_r=ot.current,xe(ot,t),xe(vt,vt.current),!0}function Tf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=kf(t,i,_r),a.__reactInternalMemoizedMergedChildContext=t,ke(vt),ke(ot),xe(ot,t)):ke(vt),xe(vt,o)}var fn=null,Fo=!1,dc=!1;function Nf(t){fn===null?fn=[t]:fn.push(t)}function x0(t){Fo=!0,Nf(t)}function Fn(){if(!dc&&fn!==null){dc=!0;var t=0,i=_e;try{var o=fn;for(_e=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}fn=null,Fo=!1}catch(u){throw fn!==null&&(fn=fn.slice(t+1)),Rh(Oa,Fn),u}finally{_e=i,dc=!1}}return null}var ii=[],si=0,zo=null,Bo=0,Ot=[],Dt=0,yr=null,pn=1,mn="";function vr(t,i){ii[si++]=Bo,ii[si++]=zo,zo=t,Bo=i}function Rf(t,i,o){Ot[Dt++]=pn,Ot[Dt++]=mn,Ot[Dt++]=yr,yr=t;var a=pn;t=mn;var u=32-Wt(a)-1;a&=~(1<<u),o+=1;var h=32-Wt(i)+u;if(30<h){var g=u-u%5;h=(a&(1<<g)-1).toString(32),a>>=g,u-=g,pn=1<<32-Wt(i)+u|o<<u|a,mn=h+t}else pn=1<<h|o<<u|a,mn=t}function hc(t){t.return!==null&&(vr(t,1),Rf(t,1,0))}function fc(t){for(;t===zo;)zo=ii[--si],ii[si]=null,Bo=ii[--si],ii[si]=null;for(;t===yr;)yr=Ot[--Dt],Ot[Dt]=null,mn=Ot[--Dt],Ot[Dt]=null,pn=Ot[--Dt],Ot[Dt]=null}var Nt=null,Rt=null,Ne=!1,Vt=null;function Pf(t,i){var o=Ut(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Af(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nt=t,Rt=Mn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nt=t,Rt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=yr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ut(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nt=t,Rt=null,!0):!1;default:return!1}}function pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mc(t){if(Ne){var i=Rt;if(i){var o=i;if(!Af(t,i)){if(pc(t))throw Error(n(418));i=Mn(o.nextSibling);var a=Nt;i&&Af(t,i)?Pf(a,o):(t.flags=t.flags&-4097|2,Ne=!1,Nt=t)}}else{if(pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,Nt=t}}}function bf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Wo(t){if(t!==Nt)return!1;if(!Ne)return bf(t),Ne=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!oc(t.type,t.memoizedProps)),i&&(i=Rt)){if(pc(t))throw Of(),Error(n(418));for(;i;)Pf(t,i),i=Mn(i.nextSibling)}if(bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Rt=Mn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Rt=null}}else Rt=Nt?Mn(t.stateNode.nextSibling):null;return!0}function Of(){for(var t=Rt;t;)t=Mn(t.nextSibling)}function oi(){Rt=Nt=null,Ne=!1}function gc(t){Vt===null?Vt=[t]:Vt.push(t)}var C0=F.ReactCurrentBatchConfig;function ls(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var u=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(g){var y=u.refs;g===null?delete y[h]:y[h]=g},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ho(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Df(t){var i=t._init;return i(t._payload)}function Lf(t){function i(I,C){if(t){var k=I.deletions;k===null?(I.deletions=[C],I.flags|=16):k.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)i(I,C),C=C.sibling;return null}function a(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function u(I,C){return I=Kn(I,C),I.index=0,I.sibling=null,I}function h(I,C,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<C?(I.flags|=2,C):k):(I.flags|=2,C)):(I.flags|=1048576,C)}function g(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,C,k,L){return C===null||C.tag!==6?(C=lu(k,I.mode,L),C.return=I,C):(C=u(C,k),C.return=I,C)}function x(I,C,k,L){var K=k.type;return K===re?O(I,C,k.props.children,L,k.key):C!==null&&(C.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===yt&&Df(K)===C.type)?(L=u(C,k.props),L.ref=ls(I,C,k),L.return=I,L):(L=fl(k.type,k.key,k.props,null,I.mode,L),L.ref=ls(I,C,k),L.return=I,L)}function N(I,C,k,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==k.containerInfo||C.stateNode.implementation!==k.implementation?(C=au(k,I.mode,L),C.return=I,C):(C=u(C,k.children||[]),C.return=I,C)}function O(I,C,k,L,K){return C===null||C.tag!==7?(C=Tr(k,I.mode,L,K),C.return=I,C):(C=u(C,k),C.return=I,C)}function D(I,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return C=lu(""+C,I.mode,k),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ne:return k=fl(C.type,C.key,C.props,null,I.mode,k),k.ref=ls(I,null,C),k.return=I,k;case U:return C=au(C,I.mode,k),C.return=I,C;case yt:var L=C._init;return D(I,L(C._payload),k)}if(Mi(C)||Y(C))return C=Tr(C,I.mode,k,null),C.return=I,C;Ho(I,C)}return null}function A(I,C,k,L){var K=C!==null?C.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return K!==null?null:y(I,C,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:return k.key===K?x(I,C,k,L):null;case U:return k.key===K?N(I,C,k,L):null;case yt:return K=k._init,A(I,C,K(k._payload),L)}if(Mi(k)||Y(k))return K!==null?null:O(I,C,k,L,null);Ho(I,k)}return null}function B(I,C,k,L,K){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(k)||null,y(C,I,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ne:return I=I.get(L.key===null?k:L.key)||null,x(C,I,L,K);case U:return I=I.get(L.key===null?k:L.key)||null,N(C,I,L,K);case yt:var q=L._init;return B(I,C,k,q(L._payload),K)}if(Mi(L)||Y(L))return I=I.get(k)||null,O(C,I,L,K,null);Ho(C,L)}return null}function V(I,C,k,L){for(var K=null,q=null,Q=C,Z=C=0,Ze=null;Q!==null&&Z<k.length;Z++){Q.index>Z?(Ze=Q,Q=null):Ze=Q.sibling;var pe=A(I,Q,k[Z],L);if(pe===null){Q===null&&(Q=Ze);break}t&&Q&&pe.alternate===null&&i(I,Q),C=h(pe,C,Z),q===null?K=pe:q.sibling=pe,q=pe,Q=Ze}if(Z===k.length)return o(I,Q),Ne&&vr(I,Z),K;if(Q===null){for(;Z<k.length;Z++)Q=D(I,k[Z],L),Q!==null&&(C=h(Q,C,Z),q===null?K=Q:q.sibling=Q,q=Q);return Ne&&vr(I,Z),K}for(Q=a(I,Q);Z<k.length;Z++)Ze=B(Q,I,Z,k[Z],L),Ze!==null&&(t&&Ze.alternate!==null&&Q.delete(Ze.key===null?Z:Ze.key),C=h(Ze,C,Z),q===null?K=Ze:q.sibling=Ze,q=Ze);return t&&Q.forEach(function(qn){return i(I,qn)}),Ne&&vr(I,Z),K}function $(I,C,k,L){var K=Y(k);if(typeof K!="function")throw Error(n(150));if(k=K.call(k),k==null)throw Error(n(151));for(var q=K=null,Q=C,Z=C=0,Ze=null,pe=k.next();Q!==null&&!pe.done;Z++,pe=k.next()){Q.index>Z?(Ze=Q,Q=null):Ze=Q.sibling;var qn=A(I,Q,pe.value,L);if(qn===null){Q===null&&(Q=Ze);break}t&&Q&&qn.alternate===null&&i(I,Q),C=h(qn,C,Z),q===null?K=qn:q.sibling=qn,q=qn,Q=Ze}if(pe.done)return o(I,Q),Ne&&vr(I,Z),K;if(Q===null){for(;!pe.done;Z++,pe=k.next())pe=D(I,pe.value,L),pe!==null&&(C=h(pe,C,Z),q===null?K=pe:q.sibling=pe,q=pe);return Ne&&vr(I,Z),K}for(Q=a(I,Q);!pe.done;Z++,pe=k.next())pe=B(Q,I,Z,pe.value,L),pe!==null&&(t&&pe.alternate!==null&&Q.delete(pe.key===null?Z:pe.key),C=h(pe,C,Z),q===null?K=pe:q.sibling=pe,q=pe);return t&&Q.forEach(function(nw){return i(I,nw)}),Ne&&vr(I,Z),K}function Be(I,C,k,L){if(typeof k=="object"&&k!==null&&k.type===re&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:e:{for(var K=k.key,q=C;q!==null;){if(q.key===K){if(K=k.type,K===re){if(q.tag===7){o(I,q.sibling),C=u(q,k.props.children),C.return=I,I=C;break e}}else if(q.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===yt&&Df(K)===q.type){o(I,q.sibling),C=u(q,k.props),C.ref=ls(I,q,k),C.return=I,I=C;break e}o(I,q);break}else i(I,q);q=q.sibling}k.type===re?(C=Tr(k.props.children,I.mode,L,k.key),C.return=I,I=C):(L=fl(k.type,k.key,k.props,null,I.mode,L),L.ref=ls(I,C,k),L.return=I,I=L)}return g(I);case U:e:{for(q=k.key;C!==null;){if(C.key===q)if(C.tag===4&&C.stateNode.containerInfo===k.containerInfo&&C.stateNode.implementation===k.implementation){o(I,C.sibling),C=u(C,k.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else i(I,C);C=C.sibling}C=au(k,I.mode,L),C.return=I,I=C}return g(I);case yt:return q=k._init,Be(I,C,q(k._payload),L)}if(Mi(k))return V(I,C,k,L);if(Y(k))return $(I,C,k,L);Ho(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,C!==null&&C.tag===6?(o(I,C.sibling),C=u(C,k),C.return=I,I=C):(o(I,C),C=lu(k,I.mode,L),C.return=I,I=C),g(I)):o(I,C)}return Be}var li=Lf(!0),Mf=Lf(!1),Vo=jn(null),$o=null,ai=null,_c=null;function yc(){_c=ai=$o=null}function vc(t){var i=Vo.current;ke(Vo),t._currentValue=i}function wc(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function ci(t,i){$o=t,_c=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Et=!0),t.firstContext=null)}function Lt(t){var i=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:i,next:null},ai===null){if($o===null)throw Error(n(308));ai=t,$o.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return i}var wr=null;function Ec(t){wr===null?wr=[t]:wr.push(t)}function jf(t,i,o,a){var u=i.interleaved;return u===null?(o.next=o,Ec(i)):(o.next=u.next,u.next=o),i.interleaved=o,gn(t,a)}function gn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var zn=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Bn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(de&2)!==0){var u=a.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i,gn(t,o)}return u=a.interleaved,u===null?(i.next=i,Ec(a)):(i.next=u.next,u.next=i),a.interleaved=i,gn(t,o)}function Go(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Ma(t,o)}}function Ff(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ko(t,i,o,a){var u=t.updateQueue;zn=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var x=y,N=x.next;x.next=null,g===null?h=N:g.next=N,g=x;var O=t.alternate;O!==null&&(O=O.updateQueue,y=O.lastBaseUpdate,y!==g&&(y===null?O.firstBaseUpdate=N:y.next=N,O.lastBaseUpdate=x))}if(h!==null){var D=u.baseState;g=0,O=N=x=null,y=h;do{var A=y.lane,B=y.eventTime;if((a&A)===A){O!==null&&(O=O.next={eventTime:B,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var V=t,$=y;switch(A=i,B=o,$.tag){case 1:if(V=$.payload,typeof V=="function"){D=V.call(B,D,A);break e}D=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=$.payload,A=typeof V=="function"?V.call(B,D,A):V,A==null)break e;D=H({},D,A);break e;case 2:zn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,A=u.effects,A===null?u.effects=[y]:A.push(y))}else B={eventTime:B,lane:A,tag:y.tag,payload:y.payload,callback:y.callback,next:null},O===null?(N=O=B,x=D):O=O.next=B,g|=A;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;A=y,y=A.next,A.next=null,u.lastBaseUpdate=A,u.shared.pending=null}}while(!0);if(O===null&&(x=D),u.baseState=x,u.firstBaseUpdate=N,u.lastBaseUpdate=O,i=u.shared.interleaved,i!==null){u=i;do g|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Cr|=g,t.lanes=g,t.memoizedState=D}}function zf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],u=a.callback;if(u!==null){if(a.callback=null,a=o,typeof u!="function")throw Error(n(191,u));u.call(a)}}}var as={},rn=jn(as),cs=jn(as),us=jn(as);function Er(t){if(t===as)throw Error(n(174));return t}function Cc(t,i){switch(xe(us,i),xe(cs,t),xe(rn,as),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Sa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Sa(i,t)}ke(rn),xe(rn,i)}function ui(){ke(rn),ke(cs),ke(us)}function Bf(t){Er(us.current);var i=Er(rn.current),o=Sa(i,t.type);i!==o&&(xe(cs,t),xe(rn,o))}function Sc(t){cs.current===t&&(ke(rn),ke(cs))}var Pe=jn(0);function qo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function kc(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Qo=F.ReactCurrentDispatcher,Tc=F.ReactCurrentBatchConfig,xr=0,Ae=null,$e=null,Xe=null,Yo=!1,ds=!1,hs=0,S0=0;function lt(){throw Error(n(321))}function Nc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ht(t[o],i[o]))return!1;return!0}function Rc(t,i,o,a,u,h){if(xr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=t===null||t.memoizedState===null?N0:R0,t=o(a,u),ds){h=0;do{if(ds=!1,hs=0,25<=h)throw Error(n(301));h+=1,Xe=$e=null,i.updateQueue=null,Qo.current=P0,t=o(a,u)}while(ds)}if(Qo.current=Zo,i=$e!==null&&$e.next!==null,xr=0,Xe=$e=Ae=null,Yo=!1,i)throw Error(n(300));return t}function Pc(){var t=hs!==0;return hs=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ae.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Mt(){if($e===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=Xe===null?Ae.memoizedState:Xe.next;if(i!==null)Xe=i,$e=t;else{if(t===null)throw Error(n(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Xe===null?Ae.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function fs(t,i){return typeof i=="function"?i(t):i}function Ac(t){var i=Mt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=$e,u=a.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}a.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,a=a.baseState;var y=g=null,x=null,N=h;do{var O=N.lane;if((xr&O)===O)x!==null&&(x=x.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),a=N.hasEagerState?N.eagerState:t(a,N.action);else{var D={lane:O,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};x===null?(y=x=D,g=a):x=x.next=D,Ae.lanes|=O,Cr|=O}N=N.next}while(N!==null&&N!==h);x===null?g=a:x.next=y,Ht(a,i.memoizedState)||(Et=!0),i.memoizedState=a,i.baseState=g,i.baseQueue=x,o.lastRenderedState=a}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Ae.lanes|=h,Cr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bc(t){var i=Mt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=t(h,g.action),g=g.next;while(g!==u);Ht(h,i.memoizedState)||(Et=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Wf(){}function Hf(t,i){var o=Ae,a=Mt(),u=i(),h=!Ht(a.memoizedState,u);if(h&&(a.memoizedState=u,Et=!0),a=a.queue,Oc(Gf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Xe!==null&&Xe.memoizedState.tag&1){if(o.flags|=2048,ps(9,$f.bind(null,o,a,u,i),void 0,null),Je===null)throw Error(n(349));(xr&30)!==0||Vf(o,i,u)}return u}function Vf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function $f(t,i,o,a){i.value=o,i.getSnapshot=a,Kf(i)&&qf(t)}function Gf(t,i,o){return o(function(){Kf(i)&&qf(t)})}function Kf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ht(t,o)}catch{return!0}}function qf(t){var i=gn(t,1);i!==null&&qt(i,t,1,-1)}function Qf(t){var i=sn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:t},i.queue=t,t=t.dispatch=T0.bind(null,Ae,t),[i.memoizedState,t]}function ps(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function Yf(){return Mt().memoizedState}function Xo(t,i,o,a){var u=sn();Ae.flags|=t,u.memoizedState=ps(1|i,o,void 0,a===void 0?null:a)}function Jo(t,i,o,a){var u=Mt();a=a===void 0?null:a;var h=void 0;if($e!==null){var g=$e.memoizedState;if(h=g.destroy,a!==null&&Nc(a,g.deps)){u.memoizedState=ps(i,o,h,a);return}}Ae.flags|=t,u.memoizedState=ps(1|i,o,h,a)}function Xf(t,i){return Xo(8390656,8,t,i)}function Oc(t,i){return Jo(2048,8,t,i)}function Jf(t,i){return Jo(4,2,t,i)}function Zf(t,i){return Jo(4,4,t,i)}function ep(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function tp(t,i,o){return o=o!=null?o.concat([t]):null,Jo(4,4,ep.bind(null,i,t),o)}function Dc(){}function np(t,i){var o=Mt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Nc(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function rp(t,i){var o=Mt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Nc(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function ip(t,i,o){return(xr&21)===0?(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=o):(Ht(o,i)||(o=Oh(),Ae.lanes|=o,Cr|=o,t.baseState=!0),i)}function I0(t,i){var o=_e;_e=o!==0&&4>o?o:4,t(!0);var a=Tc.transition;Tc.transition={};try{t(!1),i()}finally{_e=o,Tc.transition=a}}function sp(){return Mt().memoizedState}function k0(t,i,o){var a=$n(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},op(t))lp(i,o);else if(o=jf(t,i,o,a),o!==null){var u=ft();qt(o,t,a,u),ap(o,i,a)}}function T0(t,i,o){var a=$n(t),u={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(op(t))lp(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var g=i.lastRenderedState,y=h(g,o);if(u.hasEagerState=!0,u.eagerState=y,Ht(y,g)){var x=i.interleaved;x===null?(u.next=u,Ec(i)):(u.next=x.next,x.next=u),i.interleaved=u;return}}catch{}finally{}o=jf(t,i,u,a),o!==null&&(u=ft(),qt(o,t,a,u),ap(o,i,a))}}function op(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function lp(t,i){ds=Yo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ap(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Ma(t,o)}}var Zo={readContext:Lt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},N0={readContext:Lt,useCallback:function(t,i){return sn().memoizedState=[t,i===void 0?null:i],t},useContext:Lt,useEffect:Xf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Xo(4194308,4,ep.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Xo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Xo(4,2,t,i)},useMemo:function(t,i){var o=sn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=sn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=k0.bind(null,Ae,t),[a.memoizedState,t]},useRef:function(t){var i=sn();return t={current:t},i.memoizedState=t},useState:Qf,useDebugValue:Dc,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Qf(!1),i=t[0];return t=I0.bind(null,t[1]),sn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Ae,u=sn();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Je===null)throw Error(n(349));(xr&30)!==0||Vf(a,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,Xf(Gf.bind(null,a,h,t),[t]),a.flags|=2048,ps(9,$f.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=sn(),i=Je.identifierPrefix;if(Ne){var o=mn,a=pn;o=(a&~(1<<32-Wt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=hs++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=S0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},R0={readContext:Lt,useCallback:np,useContext:Lt,useEffect:Oc,useImperativeHandle:tp,useInsertionEffect:Jf,useLayoutEffect:Zf,useMemo:rp,useReducer:Ac,useRef:Yf,useState:function(){return Ac(fs)},useDebugValue:Dc,useDeferredValue:function(t){var i=Mt();return ip(i,$e.memoizedState,t)},useTransition:function(){var t=Ac(fs)[0],i=Mt().memoizedState;return[t,i]},useMutableSource:Wf,useSyncExternalStore:Hf,useId:sp,unstable_isNewReconciler:!1},P0={readContext:Lt,useCallback:np,useContext:Lt,useEffect:Oc,useImperativeHandle:tp,useInsertionEffect:Jf,useLayoutEffect:Zf,useMemo:rp,useReducer:bc,useRef:Yf,useState:function(){return bc(fs)},useDebugValue:Dc,useDeferredValue:function(t){var i=Mt();return $e===null?i.memoizedState=t:ip(i,$e.memoizedState,t)},useTransition:function(){var t=bc(fs)[0],i=Mt().memoizedState;return[t,i]},useMutableSource:Wf,useSyncExternalStore:Hf,useId:sp,unstable_isNewReconciler:!1};function $t(t,i){if(t&&t.defaultProps){i=H({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Lc(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:H({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var el={isMounted:function(t){return(t=t._reactInternals)?mr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=ft(),u=$n(t),h=_n(a,u);h.payload=i,o!=null&&(h.callback=o),i=Bn(t,h,u),i!==null&&(qt(i,t,u,a),Go(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=ft(),u=$n(t),h=_n(a,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Bn(t,h,u),i!==null&&(qt(i,t,u,a),Go(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ft(),a=$n(t),u=_n(o,a);u.tag=2,i!=null&&(u.callback=i),i=Bn(t,u,a),i!==null&&(qt(i,t,a,o),Go(i,t,a))}};function cp(t,i,o,a,u,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,g):i.prototype&&i.prototype.isPureReactComponent?!es(o,a)||!es(u,h):!0}function up(t,i,o){var a=!1,u=Un,h=i.contextType;return typeof h=="object"&&h!==null?h=Lt(h):(u=wt(i)?_r:ot.current,a=i.contextTypes,h=(a=a!=null)?ri(t,u):Un),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function dp(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&el.enqueueReplaceState(i,i.state,null)}function Mc(t,i,o,a){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},xc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Lt(h):(h=wt(i)?_r:ot.current,u.context=ri(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Lc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&el.enqueueReplaceState(u,u.state,null),Ko(t,o,u,a),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function di(t,i){try{var o="",a=i;do o+=he(a),a=a.return;while(a);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Uc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function hp(t,i,o){o=_n(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){ll||(ll=!0,Zc=a),Uc(t,i)},o}function fp(t,i,o){o=_n(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var u=i.value;o.payload=function(){return a(u)},o.callback=function(){Uc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Uc(t,i),typeof a!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function pp(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new A0;var u=new Set;a.set(i,u)}else u=a.get(i),u===void 0&&(u=new Set,a.set(i,u));u.has(o)||(u.add(o),t=$0.bind(null,t,i,o),i.then(t,t))}function mp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function gp(t,i,o,a,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=_n(-1,1),i.tag=2,Bn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var b0=F.ReactCurrentOwner,Et=!1;function ht(t,i,o,a){i.child=t===null?Mf(i,null,o,a):li(i,t.child,o,a)}function _p(t,i,o,a,u){o=o.render;var h=i.ref;return ci(i,u),a=Rc(t,i,o,a,h,u),o=Pc(),t!==null&&!Et?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,yn(t,i,u)):(Ne&&o&&hc(i),i.flags|=1,ht(t,i,a,u),i.child)}function yp(t,i,o,a,u){if(t===null){var h=o.type;return typeof h=="function"&&!ou(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,vp(t,i,h,a,u)):(t=fl(o.type,null,a,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:es,o(g,a)&&t.ref===i.ref)return yn(t,i,u)}return i.flags|=1,t=Kn(h,a),t.ref=i.ref,t.return=i,i.child=t}function vp(t,i,o,a,u){if(t!==null){var h=t.memoizedProps;if(es(h,a)&&t.ref===i.ref)if(Et=!1,i.pendingProps=a=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Et=!0);else return i.lanes=t.lanes,yn(t,i,u)}return Fc(t,i,o,a,u)}function wp(t,i,o){var a=i.pendingProps,u=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(fi,Pt),Pt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,xe(fi,Pt),Pt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,xe(fi,Pt),Pt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,xe(fi,Pt),Pt|=a;return ht(t,i,u,o),i.child}function Ep(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Fc(t,i,o,a,u){var h=wt(o)?_r:ot.current;return h=ri(i,h),ci(i,u),o=Rc(t,i,o,a,h,u),a=Pc(),t!==null&&!Et?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,yn(t,i,u)):(Ne&&a&&hc(i),i.flags|=1,ht(t,i,o,u),i.child)}function xp(t,i,o,a,u){if(wt(o)){var h=!0;Uo(i)}else h=!1;if(ci(i,u),i.stateNode===null)nl(t,i),up(i,o,a),Mc(i,o,a,u),a=!0;else if(t===null){var g=i.stateNode,y=i.memoizedProps;g.props=y;var x=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=Lt(N):(N=wt(o)?_r:ot.current,N=ri(i,N));var O=o.getDerivedStateFromProps,D=typeof O=="function"||typeof g.getSnapshotBeforeUpdate=="function";D||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==a||x!==N)&&dp(i,g,a,N),zn=!1;var A=i.memoizedState;g.state=A,Ko(i,a,g,u),x=i.memoizedState,y!==a||A!==x||vt.current||zn?(typeof O=="function"&&(Lc(i,o,O,a),x=i.memoizedState),(y=zn||cp(i,o,y,a,A,x,N))?(D||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=x),g.props=a,g.state=x,g.context=N,a=y):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{g=i.stateNode,Uf(t,i),y=i.memoizedProps,N=i.type===i.elementType?y:$t(i.type,y),g.props=N,D=i.pendingProps,A=g.context,x=o.contextType,typeof x=="object"&&x!==null?x=Lt(x):(x=wt(o)?_r:ot.current,x=ri(i,x));var B=o.getDerivedStateFromProps;(O=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==D||A!==x)&&dp(i,g,a,x),zn=!1,A=i.memoizedState,g.state=A,Ko(i,a,g,u);var V=i.memoizedState;y!==D||A!==V||vt.current||zn?(typeof B=="function"&&(Lc(i,o,B,a),V=i.memoizedState),(N=zn||cp(i,o,N,a,A,V,x)||!1)?(O||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,V,x),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,V,x)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=V),g.props=a,g.state=V,g.context=x,a=N):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),a=!1)}return zc(t,i,o,a,h,u)}function zc(t,i,o,a,u,h){Ep(t,i);var g=(i.flags&128)!==0;if(!a&&!g)return u&&Tf(i,o,!1),yn(t,i,h);a=i.stateNode,b0.current=i;var y=g&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&g?(i.child=li(i,t.child,null,h),i.child=li(i,null,y,h)):ht(t,i,y,h),i.memoizedState=a.state,u&&Tf(i,o,!0),i.child}function Cp(t){var i=t.stateNode;i.pendingContext?If(t,i.pendingContext,i.pendingContext!==i.context):i.context&&If(t,i.context,!1),Cc(t,i.containerInfo)}function Sp(t,i,o,a,u){return oi(),gc(u),i.flags|=256,ht(t,i,o,a),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ip(t,i,o){var a=i.pendingProps,u=Pe.current,h=!1,g=(i.flags&128)!==0,y;if((y=g)||(y=t!==null&&t.memoizedState===null?!1:(u&2)!==0),y?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),xe(Pe,u&1),t===null)return mc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=a.children,t=a.fallback,h?(a=i.mode,h=i.child,g={mode:"hidden",children:g},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=pl(g,a,0,null),t=Tr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Wc(o),i.memoizedState=Bc,t):Hc(i,g));if(u=t.memoizedState,u!==null&&(y=u.dehydrated,y!==null))return O0(t,i,g,a,y,u,o);if(h){h=a.fallback,g=i.mode,u=t.child,y=u.sibling;var x={mode:"hidden",children:a.children};return(g&1)===0&&i.child!==u?(a=i.child,a.childLanes=0,a.pendingProps=x,i.deletions=null):(a=Kn(u,x),a.subtreeFlags=u.subtreeFlags&14680064),y!==null?h=Kn(y,h):(h=Tr(h,g,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,g=t.child.memoizedState,g=g===null?Wc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,i.memoizedState=Bc,a}return h=t.child,t=h.sibling,a=Kn(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Hc(t,i){return i=pl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function tl(t,i,o,a){return a!==null&&gc(a),li(i,t.child,null,o),t=Hc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function O0(t,i,o,a,u,h,g){if(o)return i.flags&256?(i.flags&=-257,a=jc(Error(n(422))),tl(t,i,g,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,u=i.mode,a=pl({mode:"visible",children:a.children},u,0,null),h=Tr(h,u,g,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&li(i,t.child,null,g),i.child.memoizedState=Wc(g),i.memoizedState=Bc,h);if((i.mode&1)===0)return tl(t,i,g,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=jc(h,a,void 0),tl(t,i,g,a)}if(y=(g&t.childLanes)!==0,Et||y){if(a=Je,a!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(a.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,gn(t,u),qt(a,t,u,-1))}return su(),a=jc(Error(n(421))),tl(t,i,g,a)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=G0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Rt=Mn(u.nextSibling),Nt=i,Ne=!0,Vt=null,t!==null&&(Ot[Dt++]=pn,Ot[Dt++]=mn,Ot[Dt++]=yr,pn=t.id,mn=t.overflow,yr=i),i=Hc(i,a.children),i.flags|=4096,i)}function kp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),wc(t.return,i,o)}function Vc(t,i,o,a,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=u)}function Tp(t,i,o){var a=i.pendingProps,u=a.revealOrder,h=a.tail;if(ht(t,i,a.children,o),a=Pe.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kp(t,o,i);else if(t.tag===19)kp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(xe(Pe,a),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&qo(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Vc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&qo(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Vc(i,!0,o,null,h);break;case"together":Vc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function yn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Kn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Kn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function D0(t,i,o){switch(i.tag){case 3:Cp(i),oi();break;case 5:Bf(i);break;case 1:wt(i.type)&&Uo(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,u=i.memoizedProps.value;xe(Vo,a._currentValue),a._currentValue=u;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(xe(Pe,Pe.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ip(t,i,o):(xe(Pe,Pe.current&1),t=yn(t,i,o),t!==null?t.sibling:null);xe(Pe,Pe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Tp(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(Pe,Pe.current),a)break;return null;case 22:case 23:return i.lanes=0,wp(t,i,o)}return yn(t,i,o)}var Np,$c,Rp,Pp;Np=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$c=function(){},Rp=function(t,i,o,a){var u=t.memoizedProps;if(u!==a){t=i.stateNode,Er(rn.current);var h=null;switch(o){case"input":u=wa(t,u),a=wa(t,a),h=[];break;case"select":u=H({},u,{value:void 0}),a=H({},a,{value:void 0}),h=[];break;case"textarea":u=Ca(t,u),a=Ca(t,a),h=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Lo)}Ia(o,a);var g;o=null;for(N in u)if(!a.hasOwnProperty(N)&&u.hasOwnProperty(N)&&u[N]!=null)if(N==="style"){var y=u[N];for(g in y)y.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in a){var x=a[N];if(y=u?.[N],a.hasOwnProperty(N)&&x!==y&&(x!=null||y!=null))if(N==="style")if(y){for(g in y)!y.hasOwnProperty(g)||x&&x.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in x)x.hasOwnProperty(g)&&y[g]!==x[g]&&(o||(o={}),o[g]=x[g])}else o||(h||(h=[]),h.push(N,o)),o=x;else N==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,y=y?y.__html:void 0,x!=null&&y!==x&&(h=h||[]).push(N,x)):N==="children"?typeof x!="string"&&typeof x!="number"||(h=h||[]).push(N,""+x):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(x!=null&&N==="onScroll"&&Ie("scroll",t),h||y===x||(h=[])):(h=h||[]).push(N,x))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},Pp=function(t,i,o,a){o!==a&&(i.flags|=4)};function ms(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function at(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function L0(t,i,o){var a=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(i),null;case 1:return wt(i.type)&&jo(),at(i),null;case 3:return a=i.stateNode,ui(),ke(vt),ke(ot),kc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vt!==null&&(nu(Vt),Vt=null))),$c(t,i),at(i),null;case 5:Sc(i);var u=Er(us.current);if(o=i.type,t!==null&&i.stateNode!=null)Rp(t,i,o,a,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return at(i),null}if(t=Er(rn.current),Wo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[nn]=i,a[ss]=h,t=(i.mode&1)!==0,o){case"dialog":Ie("cancel",a),Ie("close",a);break;case"iframe":case"object":case"embed":Ie("load",a);break;case"video":case"audio":for(u=0;u<ns.length;u++)Ie(ns[u],a);break;case"source":Ie("error",a);break;case"img":case"image":case"link":Ie("error",a),Ie("load",a);break;case"details":Ie("toggle",a);break;case"input":ch(a,h),Ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ie("invalid",a);break;case"textarea":hh(a,h),Ie("invalid",a)}Ia(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var y=h[g];g==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&Do(a.textContent,y,t),u=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&Do(a.textContent,y,t),u=["children",""+y]):l.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Ie("scroll",a)}switch(o){case"input":uo(a),dh(a,h,!0);break;case"textarea":uo(a),ph(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Lo)}a=u,i.updateQueue=a,a!==null&&(i.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=g.createElement(o,{is:a.is}):(t=g.createElement(o),o==="select"&&(g=t,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):t=g.createElementNS(t,o),t[nn]=i,t[ss]=a,Np(t,i,!1,!1),i.stateNode=t;e:{switch(g=ka(o,a),o){case"dialog":Ie("cancel",t),Ie("close",t),u=a;break;case"iframe":case"object":case"embed":Ie("load",t),u=a;break;case"video":case"audio":for(u=0;u<ns.length;u++)Ie(ns[u],t);u=a;break;case"source":Ie("error",t),u=a;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),u=a;break;case"details":Ie("toggle",t),u=a;break;case"input":ch(t,a),u=wa(t,a),Ie("invalid",t);break;case"option":u=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},u=H({},a,{value:void 0}),Ie("invalid",t);break;case"textarea":hh(t,a),u=Ca(t,a),Ie("invalid",t);break;default:u=a}Ia(o,u),y=u;for(h in y)if(y.hasOwnProperty(h)){var x=y[h];h==="style"?yh(t,x):h==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&gh(t,x)):h==="children"?typeof x=="string"?(o!=="textarea"||x!=="")&&ji(t,x):typeof x=="number"&&ji(t,""+x):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?x!=null&&h==="onScroll"&&Ie("scroll",t):x!=null&&G(t,h,x,g))}switch(o){case"input":uo(t),dh(t,a,!1);break;case"textarea":uo(t),ph(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ge(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?$r(t,!!a.multiple,h,!1):a.defaultValue!=null&&$r(t,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Lo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return at(i),null;case 6:if(t&&i.stateNode!=null)Pp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=Er(us.current),Er(rn.current),Wo(i)){if(a=i.stateNode,o=i.memoizedProps,a[nn]=i,(h=a.nodeValue!==o)&&(t=Nt,t!==null))switch(t.tag){case 3:Do(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Do(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[nn]=i,i.stateNode=a}return at(i),null;case 13:if(ke(Pe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Rt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Of(),oi(),i.flags|=98560,h=!1;else if(h=Wo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[nn]=i}else oi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;at(i),h=!1}else Vt!==null&&(nu(Vt),Vt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Pe.current&1)!==0?Ge===0&&(Ge=3):su())),i.updateQueue!==null&&(i.flags|=4),at(i),null);case 4:return ui(),$c(t,i),t===null&&rs(i.stateNode.containerInfo),at(i),null;case 10:return vc(i.type._context),at(i),null;case 17:return wt(i.type)&&jo(),at(i),null;case 19:if(ke(Pe),h=i.memoizedState,h===null)return at(i),null;if(a=(i.flags&128)!==0,g=h.rendering,g===null)if(a)ms(h,!1);else{if(Ge!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(g=qo(t),g!==null){for(i.flags|=128,ms(h,!1),a=g.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return xe(Pe,Pe.current&1|2),i.child}t=t.sibling}h.tail!==null&&ze()>pi&&(i.flags|=128,a=!0,ms(h,!1),i.lanes=4194304)}else{if(!a)if(t=qo(g),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ms(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ne)return at(i),null}else 2*ze()-h.renderingStartTime>pi&&o!==1073741824&&(i.flags|=128,a=!0,ms(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(o=h.last,o!==null?o.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ze(),i.sibling=null,o=Pe.current,xe(Pe,a?o&1|2:o&1),i):(at(i),null);case 22:case 23:return iu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Pt&1073741824)!==0&&(at(i),i.subtreeFlags&6&&(i.flags|=8192)):at(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function M0(t,i){switch(fc(i),i.tag){case 1:return wt(i.type)&&jo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ui(),ke(vt),ke(ot),kc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Sc(i),null;case 13:if(ke(Pe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));oi()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Pe),null;case 4:return ui(),null;case 10:return vc(i.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var rl=!1,ct=!1,j0=typeof WeakSet=="function"?WeakSet:Set,W=null;function hi(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){De(t,i,a)}else o.current=null}function Gc(t,i,o){try{o()}catch(a){De(t,i,a)}}var Ap=!1;function U0(t,i){if(ic=Co,t=cf(),Ya(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var u=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,y=-1,x=-1,N=0,O=0,D=t,A=null;t:for(;;){for(var B;D!==o||u!==0&&D.nodeType!==3||(y=g+u),D!==h||a!==0&&D.nodeType!==3||(x=g+a),D.nodeType===3&&(g+=D.nodeValue.length),(B=D.firstChild)!==null;)A=D,D=B;for(;;){if(D===t)break t;if(A===o&&++N===u&&(y=g),A===h&&++O===a&&(x=g),(B=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=B}o=y===-1||x===-1?null:{start:y,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(sc={focusedElem:t,selectionRange:o},Co=!1,W=i;W!==null;)if(i=W,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,W=t;else for(;W!==null;){i=W;try{var V=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var $=V.memoizedProps,Be=V.memoizedState,I=i.stateNode,C=I.getSnapshotBeforeUpdate(i.elementType===i.type?$:$t(i.type,$),Be);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){De(i,i.return,L)}if(t=i.sibling,t!==null){t.return=i.return,W=t;break}W=i.return}return V=Ap,Ap=!1,V}function gs(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Gc(i,o,h)}u=u.next}while(u!==a)}}function il(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Kc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function bp(t){var i=t.alternate;i!==null&&(t.alternate=null,bp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[nn],delete i[ss],delete i[cc],delete i[w0],delete i[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Op(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Lo));else if(a!==4&&(t=t.child,t!==null))for(qc(t,i,o),t=t.sibling;t!==null;)qc(t,i,o),t=t.sibling}function Qc(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Qc(t,i,o),t=t.sibling;t!==null;)Qc(t,i,o),t=t.sibling}var nt=null,Gt=!1;function Wn(t,i,o){for(o=o.child;o!==null;)Lp(t,i,o),o=o.sibling}function Lp(t,i,o){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(_o,o)}catch{}switch(o.tag){case 5:ct||hi(o,i);case 6:var a=nt,u=Gt;nt=null,Wn(t,i,o),nt=a,Gt=u,nt!==null&&(Gt?(t=nt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nt.removeChild(o.stateNode));break;case 18:nt!==null&&(Gt?(t=nt,o=o.stateNode,t.nodeType===8?ac(t.parentNode,o):t.nodeType===1&&ac(t,o),qi(t)):ac(nt,o.stateNode));break;case 4:a=nt,u=Gt,nt=o.stateNode.containerInfo,Gt=!0,Wn(t,i,o),nt=a,Gt=u;break;case 0:case 11:case 14:case 15:if(!ct&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Gc(o,i,g),u=u.next}while(u!==a)}Wn(t,i,o);break;case 1:if(!ct&&(hi(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){De(o,i,y)}Wn(t,i,o);break;case 21:Wn(t,i,o);break;case 22:o.mode&1?(ct=(a=ct)||o.memoizedState!==null,Wn(t,i,o),ct=a):Wn(t,i,o);break;default:Wn(t,i,o)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new j0),i.forEach(function(a){var u=K0.bind(null,t,a);o.has(a)||(o.add(a),a.then(u,u))})}}function Kt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var u=o[a];try{var h=t,g=i,y=g;e:for(;y!==null;){switch(y.tag){case 5:nt=y.stateNode,Gt=!1;break e;case 3:nt=y.stateNode.containerInfo,Gt=!0;break e;case 4:nt=y.stateNode.containerInfo,Gt=!0;break e}y=y.return}if(nt===null)throw Error(n(160));Lp(h,g,u),nt=null,Gt=!1;var x=u.alternate;x!==null&&(x.return=null),u.return=null}catch(N){De(u,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,t),i=i.sibling}function jp(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(i,t),on(t),a&4){try{gs(3,t,t.return),il(3,t)}catch($){De(t,t.return,$)}try{gs(5,t,t.return)}catch($){De(t,t.return,$)}}break;case 1:Kt(i,t),on(t),a&512&&o!==null&&hi(o,o.return);break;case 5:if(Kt(i,t),on(t),a&512&&o!==null&&hi(o,o.return),t.flags&32){var u=t.stateNode;try{ji(u,"")}catch($){De(t,t.return,$)}}if(a&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,y=t.type,x=t.updateQueue;if(t.updateQueue=null,x!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&uh(u,h),ka(y,g);var N=ka(y,h);for(g=0;g<x.length;g+=2){var O=x[g],D=x[g+1];O==="style"?yh(u,D):O==="dangerouslySetInnerHTML"?gh(u,D):O==="children"?ji(u,D):G(u,O,D,N)}switch(y){case"input":Ea(u,h);break;case"textarea":fh(u,h);break;case"select":var A=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var B=h.value;B!=null?$r(u,!!h.multiple,B,!1):A!==!!h.multiple&&(h.defaultValue!=null?$r(u,!!h.multiple,h.defaultValue,!0):$r(u,!!h.multiple,h.multiple?[]:"",!1))}u[ss]=h}catch($){De(t,t.return,$)}}break;case 6:if(Kt(i,t),on(t),a&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch($){De(t,t.return,$)}}break;case 3:if(Kt(i,t),on(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{qi(i.containerInfo)}catch($){De(t,t.return,$)}break;case 4:Kt(i,t),on(t);break;case 13:Kt(i,t),on(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Jc=ze())),a&4&&Mp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(ct=(N=ct)||O,Kt(i,t),ct=N):Kt(i,t),on(t),a&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!O&&(t.mode&1)!==0)for(W=t,O=t.child;O!==null;){for(D=W=O;W!==null;){switch(A=W,B=A.child,A.tag){case 0:case 11:case 14:case 15:gs(4,A,A.return);break;case 1:hi(A,A.return);var V=A.stateNode;if(typeof V.componentWillUnmount=="function"){a=A,o=A.return;try{i=a,V.props=i.memoizedProps,V.state=i.memoizedState,V.componentWillUnmount()}catch($){De(a,o,$)}}break;case 5:hi(A,A.return);break;case 22:if(A.memoizedState!==null){zp(D);continue}}B!==null?(B.return=A,W=B):zp(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{u=D.stateNode,N?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=D.stateNode,x=D.memoizedProps.style,g=x!=null&&x.hasOwnProperty("display")?x.display:null,y.style.display=_h("display",g))}catch($){De(t,t.return,$)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=N?"":D.memoizedProps}catch($){De(t,t.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Kt(i,t),on(t),a&4&&Mp(t);break;case 21:break;default:Kt(i,t),on(t)}}function on(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Op(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(ji(u,""),a.flags&=-33);var h=Dp(t);Qc(t,h,u);break;case 3:case 4:var g=a.stateNode.containerInfo,y=Dp(t);qc(t,y,g);break;default:throw Error(n(161))}}catch(x){De(t,t.return,x)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function F0(t,i,o){W=t,Up(t)}function Up(t,i,o){for(var a=(t.mode&1)!==0;W!==null;){var u=W,h=u.child;if(u.tag===22&&a){var g=u.memoizedState!==null||rl;if(!g){var y=u.alternate,x=y!==null&&y.memoizedState!==null||ct;y=rl;var N=ct;if(rl=g,(ct=x)&&!N)for(W=u;W!==null;)g=W,x=g.child,g.tag===22&&g.memoizedState!==null?Bp(u):x!==null?(x.return=g,W=x):Bp(u);for(;h!==null;)W=h,Up(h),h=h.sibling;W=u,rl=y,ct=N}Fp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,W=h):Fp(t)}}function Fp(t){for(;W!==null;){var i=W;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ct||il(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!ct)if(o===null)a.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:$t(i.type,o.memoizedProps);a.componentDidUpdate(u,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&zf(i,h,a);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}zf(i,g,o)}break;case 5:var y=i.stateNode;if(o===null&&i.flags&4){o=y;var x=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&o.focus();break;case"img":x.src&&(o.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var O=N.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&qi(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ct||i.flags&512&&Kc(i)}catch(A){De(i,i.return,A)}}if(i===t){W=null;break}if(o=i.sibling,o!==null){o.return=i.return,W=o;break}W=i.return}}function zp(t){for(;W!==null;){var i=W;if(i===t){W=null;break}var o=i.sibling;if(o!==null){o.return=i.return,W=o;break}W=i.return}}function Bp(t){for(;W!==null;){var i=W;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{il(4,i)}catch(x){De(i,o,x)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var u=i.return;try{a.componentDidMount()}catch(x){De(i,u,x)}}var h=i.return;try{Kc(i)}catch(x){De(i,h,x)}break;case 5:var g=i.return;try{Kc(i)}catch(x){De(i,g,x)}}}catch(x){De(i,i.return,x)}if(i===t){W=null;break}var y=i.sibling;if(y!==null){y.return=i.return,W=y;break}W=i.return}}var z0=Math.ceil,sl=F.ReactCurrentDispatcher,Yc=F.ReactCurrentOwner,jt=F.ReactCurrentBatchConfig,de=0,Je=null,We=null,rt=0,Pt=0,fi=jn(0),Ge=0,_s=null,Cr=0,ol=0,Xc=0,ys=null,xt=null,Jc=0,pi=1/0,vn=null,ll=!1,Zc=null,Hn=null,al=!1,Vn=null,cl=0,vs=0,eu=null,ul=-1,dl=0;function ft(){return(de&6)!==0?ze():ul!==-1?ul:ul=ze()}function $n(t){return(t.mode&1)===0?1:(de&2)!==0&&rt!==0?rt&-rt:C0.transition!==null?(dl===0&&(dl=Oh()),dl):(t=_e,t!==0||(t=window.event,t=t===void 0?16:Wh(t.type)),t)}function qt(t,i,o,a){if(50<vs)throw vs=0,eu=null,Error(n(185));Hi(t,o,a),((de&2)===0||t!==Je)&&(t===Je&&((de&2)===0&&(ol|=o),Ge===4&&Gn(t,rt)),Ct(t,a),o===1&&de===0&&(i.mode&1)===0&&(pi=ze()+500,Fo&&Fn()))}function Ct(t,i){var o=t.callbackNode;Cv(t,i);var a=wo(t,t===Je?rt:0);if(a===0)o!==null&&Ph(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Ph(o),i===1)t.tag===0?x0(Hp.bind(null,t)):Nf(Hp.bind(null,t)),y0(function(){(de&6)===0&&Fn()}),o=null;else{switch(Dh(a)){case 1:o=Oa;break;case 4:o=Ah;break;case 16:o=go;break;case 536870912:o=bh;break;default:o=go}o=Xp(o,Wp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Wp(t,i){if(ul=-1,dl=0,(de&6)!==0)throw Error(n(327));var o=t.callbackNode;if(mi()&&t.callbackNode!==o)return null;var a=wo(t,t===Je?rt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=hl(t,a);else{i=a;var u=de;de|=2;var h=$p();(Je!==t||rt!==i)&&(vn=null,pi=ze()+500,Ir(t,i));do try{H0();break}catch(y){Vp(t,y)}while(!0);yc(),sl.current=h,de=u,We!==null?i=0:(Je=null,rt=0,i=Ge)}if(i!==0){if(i===2&&(u=Da(t),u!==0&&(a=u,i=tu(t,u))),i===1)throw o=_s,Ir(t,0),Gn(t,a),Ct(t,ze()),o;if(i===6)Gn(t,a);else{if(u=t.current.alternate,(a&30)===0&&!B0(u)&&(i=hl(t,a),i===2&&(h=Da(t),h!==0&&(a=h,i=tu(t,h))),i===1))throw o=_s,Ir(t,0),Gn(t,a),Ct(t,ze()),o;switch(t.finishedWork=u,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:kr(t,xt,vn);break;case 3:if(Gn(t,a),(a&130023424)===a&&(i=Jc+500-ze(),10<i)){if(wo(t,0)!==0)break;if(u=t.suspendedLanes,(u&a)!==a){ft(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=lc(kr.bind(null,t,xt,vn),i);break}kr(t,xt,vn);break;case 4:if(Gn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,u=-1;0<a;){var g=31-Wt(a);h=1<<g,g=i[g],g>u&&(u=g),a&=~h}if(a=u,a=ze()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*z0(a/1960))-a,10<a){t.timeoutHandle=lc(kr.bind(null,t,xt,vn),a);break}kr(t,xt,vn);break;case 5:kr(t,xt,vn);break;default:throw Error(n(329))}}}return Ct(t,ze()),t.callbackNode===o?Wp.bind(null,t):null}function tu(t,i){var o=ys;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=hl(t,i),t!==2&&(i=xt,xt=o,i!==null&&nu(i)),t}function nu(t){xt===null?xt=t:xt.push.apply(xt,t)}function B0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var u=o[a],h=u.getSnapshot;u=u.value;try{if(!Ht(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gn(t,i){for(i&=~Xc,i&=~ol,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Wt(i),a=1<<o;t[o]=-1,i&=~a}}function Hp(t){if((de&6)!==0)throw Error(n(327));mi();var i=wo(t,0);if((i&1)===0)return Ct(t,ze()),null;var o=hl(t,i);if(t.tag!==0&&o===2){var a=Da(t);a!==0&&(i=a,o=tu(t,a))}if(o===1)throw o=_s,Ir(t,0),Gn(t,i),Ct(t,ze()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,xt,vn),Ct(t,ze()),null}function ru(t,i){var o=de;de|=1;try{return t(i)}finally{de=o,de===0&&(pi=ze()+500,Fo&&Fn())}}function Sr(t){Vn!==null&&Vn.tag===0&&(de&6)===0&&mi();var i=de;de|=1;var o=jt.transition,a=_e;try{if(jt.transition=null,_e=1,t)return t()}finally{_e=a,jt.transition=o,de=i,(de&6)===0&&Fn()}}function iu(){Pt=fi.current,ke(fi)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,_0(o)),We!==null)for(o=We.return;o!==null;){var a=o;switch(fc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&jo();break;case 3:ui(),ke(vt),ke(ot),kc();break;case 5:Sc(a);break;case 4:ui();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:vc(a.type._context);break;case 22:case 23:iu()}o=o.return}if(Je=t,We=t=Kn(t.current,null),rt=Pt=i,Ge=0,_s=null,Xc=ol=Cr=0,xt=ys=null,wr!==null){for(i=0;i<wr.length;i++)if(o=wr[i],a=o.interleaved,a!==null){o.interleaved=null;var u=a.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,a.next=g}o.pending=a}wr=null}return t}function Vp(t,i){do{var o=We;try{if(yc(),Qo.current=Zo,Yo){for(var a=Ae.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}Yo=!1}if(xr=0,Xe=$e=Ae=null,ds=!1,hs=0,Yc.current=null,o===null||o.return===null){Ge=1,_s=i,We=null;break}e:{var h=t,g=o.return,y=o,x=i;if(i=rt,y.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var N=x,O=y,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var A=O.alternate;A?(O.updateQueue=A.updateQueue,O.memoizedState=A.memoizedState,O.lanes=A.lanes):(O.updateQueue=null,O.memoizedState=null)}var B=mp(g);if(B!==null){B.flags&=-257,gp(B,g,y,h,i),B.mode&1&&pp(h,N,i),i=B,x=N;var V=i.updateQueue;if(V===null){var $=new Set;$.add(x),i.updateQueue=$}else V.add(x);break e}else{if((i&1)===0){pp(h,N,i),su();break e}x=Error(n(426))}}else if(Ne&&y.mode&1){var Be=mp(g);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),gp(Be,g,y,h,i),gc(di(x,y));break e}}h=x=di(x,y),Ge!==4&&(Ge=2),ys===null?ys=[h]:ys.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=hp(h,x,i);Ff(h,I);break e;case 1:y=x;var C=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Hn===null||!Hn.has(k)))){h.flags|=65536,i&=-i,h.lanes|=i;var L=fp(h,y,i);Ff(h,L);break e}}h=h.return}while(h!==null)}Kp(o)}catch(K){i=K,We===o&&o!==null&&(We=o=o.return);continue}break}while(!0)}function $p(){var t=sl.current;return sl.current=Zo,t===null?Zo:t}function su(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||(Cr&268435455)===0&&(ol&268435455)===0||Gn(Je,rt)}function hl(t,i){var o=de;de|=2;var a=$p();(Je!==t||rt!==i)&&(vn=null,Ir(t,i));do try{W0();break}catch(u){Vp(t,u)}while(!0);if(yc(),de=o,sl.current=a,We!==null)throw Error(n(261));return Je=null,rt=0,Ge}function W0(){for(;We!==null;)Gp(We)}function H0(){for(;We!==null&&!pv();)Gp(We)}function Gp(t){var i=Yp(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,i===null?Kp(t):We=i,Yc.current=null}function Kp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=L0(o,i,Pt),o!==null){We=o;return}}else{if(o=M0(o,i),o!==null){o.flags&=32767,We=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,We=null;return}}if(i=i.sibling,i!==null){We=i;return}We=i=t}while(i!==null);Ge===0&&(Ge=5)}function kr(t,i,o){var a=_e,u=jt.transition;try{jt.transition=null,_e=1,V0(t,i,o,a)}finally{jt.transition=u,_e=a}return null}function V0(t,i,o,a){do mi();while(Vn!==null);if((de&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Sv(t,h),t===Je&&(We=Je=null,rt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||al||(al=!0,Xp(go,function(){return mi(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=jt.transition,jt.transition=null;var g=_e;_e=1;var y=de;de|=4,Yc.current=null,U0(t,o),jp(o,t),u0(sc),Co=!!ic,sc=ic=null,t.current=o,F0(o),mv(),de=y,_e=g,jt.transition=h}else t.current=o;if(al&&(al=!1,Vn=t,cl=u),h=t.pendingLanes,h===0&&(Hn=null),yv(o.stateNode),Ct(t,ze()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],a(u.value,{componentStack:u.stack,digest:u.digest});if(ll)throw ll=!1,t=Zc,Zc=null,t;return(cl&1)!==0&&t.tag!==0&&mi(),h=t.pendingLanes,(h&1)!==0?t===eu?vs++:(vs=0,eu=t):vs=0,Fn(),null}function mi(){if(Vn!==null){var t=Dh(cl),i=jt.transition,o=_e;try{if(jt.transition=null,_e=16>t?16:t,Vn===null)var a=!1;else{if(t=Vn,Vn=null,cl=0,(de&6)!==0)throw Error(n(331));var u=de;for(de|=4,W=t.current;W!==null;){var h=W,g=h.child;if((W.flags&16)!==0){var y=h.deletions;if(y!==null){for(var x=0;x<y.length;x++){var N=y[x];for(W=N;W!==null;){var O=W;switch(O.tag){case 0:case 11:case 15:gs(8,O,h)}var D=O.child;if(D!==null)D.return=O,W=D;else for(;W!==null;){O=W;var A=O.sibling,B=O.return;if(bp(O),O===N){W=null;break}if(A!==null){A.return=B,W=A;break}W=B}}}var V=h.alternate;if(V!==null){var $=V.child;if($!==null){V.child=null;do{var Be=$.sibling;$.sibling=null,$=Be}while($!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,W=g;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:gs(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,W=I;break e}W=h.return}}var C=t.current;for(W=C;W!==null;){g=W;var k=g.child;if((g.subtreeFlags&2064)!==0&&k!==null)k.return=g,W=k;else e:for(g=C;W!==null;){if(y=W,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:il(9,y)}}catch(K){De(y,y.return,K)}if(y===g){W=null;break e}var L=y.sibling;if(L!==null){L.return=y.return,W=L;break e}W=y.return}}if(de=u,Fn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(_o,t)}catch{}a=!0}return a}finally{_e=o,jt.transition=i}}return!1}function qp(t,i,o){i=di(o,i),i=hp(t,i,1),t=Bn(t,i,1),i=ft(),t!==null&&(Hi(t,1,i),Ct(t,i))}function De(t,i,o){if(t.tag===3)qp(t,t,o);else for(;i!==null;){if(i.tag===3){qp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Hn===null||!Hn.has(a))){t=di(o,t),t=fp(i,t,1),i=Bn(i,t,1),t=ft(),i!==null&&(Hi(i,1,t),Ct(i,t));break}}i=i.return}}function $0(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=ft(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(rt&o)===o&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>ze()-Jc?Ir(t,0):Xc|=o),Ct(t,i)}function Qp(t,i){i===0&&((t.mode&1)===0?i=1:(i=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var o=ft();t=gn(t,i),t!==null&&(Hi(t,i,o),Ct(t,o))}function G0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Qp(t,o)}function K0(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Qp(t,o)}var Yp;Yp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||vt.current)Et=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Et=!1,D0(t,i,o);Et=(t.flags&131072)!==0}else Et=!1,Ne&&(i.flags&1048576)!==0&&Rf(i,Bo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;nl(t,i),t=i.pendingProps;var u=ri(i,ot.current);ci(i,o),u=Rc(null,i,a,t,u,o);var h=Pc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wt(a)?(h=!0,Uo(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,xc(i),u.updater=el,i.stateNode=u,u._reactInternals=i,Mc(i,a,t,o),i=zc(null,i,a,!0,h,o)):(i.tag=0,Ne&&h&&hc(i),ht(null,i,u,o),i=i.child),i;case 16:a=i.elementType;e:{switch(nl(t,i),t=i.pendingProps,u=a._init,a=u(a._payload),i.type=a,u=i.tag=Q0(a),t=$t(a,t),u){case 0:i=Fc(null,i,a,t,o);break e;case 1:i=xp(null,i,a,t,o);break e;case 11:i=_p(null,i,a,t,o);break e;case 14:i=yp(null,i,a,$t(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,u=i.pendingProps,u=i.elementType===a?u:$t(a,u),Fc(t,i,a,u,o);case 1:return a=i.type,u=i.pendingProps,u=i.elementType===a?u:$t(a,u),xp(t,i,a,u,o);case 3:e:{if(Cp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,u=h.element,Uf(t,i),Ko(i,a,null,o);var g=i.memoizedState;if(a=g.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=di(Error(n(423)),i),i=Sp(t,i,a,o,u);break e}else if(a!==u){u=di(Error(n(424)),i),i=Sp(t,i,a,o,u);break e}else for(Rt=Mn(i.stateNode.containerInfo.firstChild),Nt=i,Ne=!0,Vt=null,o=Mf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(oi(),a===u){i=yn(t,i,o);break e}ht(t,i,a,o)}i=i.child}return i;case 5:return Bf(i),t===null&&mc(i),a=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,g=u.children,oc(a,u)?g=null:h!==null&&oc(a,h)&&(i.flags|=32),Ep(t,i),ht(t,i,g,o),i.child;case 6:return t===null&&mc(i),null;case 13:return Ip(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=li(i,null,a,o):ht(t,i,a,o),i.child;case 11:return a=i.type,u=i.pendingProps,u=i.elementType===a?u:$t(a,u),_p(t,i,a,u,o);case 7:return ht(t,i,i.pendingProps,o),i.child;case 8:return ht(t,i,i.pendingProps.children,o),i.child;case 12:return ht(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,u=i.pendingProps,h=i.memoizedProps,g=u.value,xe(Vo,a._currentValue),a._currentValue=g,h!==null)if(Ht(h.value,g)){if(h.children===u.children&&!vt.current){i=yn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var y=h.dependencies;if(y!==null){g=h.child;for(var x=y.firstContext;x!==null;){if(x.context===a){if(h.tag===1){x=_n(-1,o&-o),x.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var O=N.pending;O===null?x.next=x:(x.next=O.next,O.next=x),N.pending=x}}h.lanes|=o,x=h.alternate,x!==null&&(x.lanes|=o),wc(h.return,o,i),y.lanes|=o;break}x=x.next}}else if(h.tag===10)g=h.type===i.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,y=g.alternate,y!==null&&(y.lanes|=o),wc(g,o,i),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===i){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}ht(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,a=i.pendingProps.children,ci(i,o),u=Lt(u),a=a(u),i.flags|=1,ht(t,i,a,o),i.child;case 14:return a=i.type,u=$t(a,i.pendingProps),u=$t(a.type,u),yp(t,i,a,u,o);case 15:return vp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,u=i.pendingProps,u=i.elementType===a?u:$t(a,u),nl(t,i),i.tag=1,wt(a)?(t=!0,Uo(i)):t=!1,ci(i,o),up(i,a,u),Mc(i,a,u,o),zc(null,i,a,!0,t,o);case 19:return Tp(t,i,o);case 22:return wp(t,i,o)}throw Error(n(156,i.tag))};function Xp(t,i){return Rh(t,i)}function q0(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,i,o,a){return new q0(t,i,o,a)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Q0(t){if(typeof t=="function")return ou(t)?1:0;if(t!=null){if(t=t.$$typeof,t===be)return 11;if(t===en)return 14}return 2}function Kn(t,i){var o=t.alternate;return o===null?(o=Ut(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function fl(t,i,o,a,u,h){var g=2;if(a=t,typeof t=="function")ou(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case re:return Tr(o.children,u,h,i);case ye:g=8,u|=8;break;case Fe:return t=Ut(12,o,i,u|2),t.elementType=Fe,t.lanes=h,t;case Ve:return t=Ut(13,o,i,u),t.elementType=Ve,t.lanes=h,t;case Bt:return t=Ut(19,o,i,u),t.elementType=Bt,t.lanes=h,t;case Oe:return pl(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ye:g=10;break e;case He:g=9;break e;case be:g=11;break e;case en:g=14;break e;case yt:g=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ut(g,o,i,u),i.elementType=t,i.type=a,i.lanes=h,i}function Tr(t,i,o,a){return t=Ut(7,t,a,i),t.lanes=o,t}function pl(t,i,o,a){return t=Ut(22,t,a,i),t.elementType=Oe,t.lanes=o,t.stateNode={isHidden:!1},t}function lu(t,i,o){return t=Ut(6,t,null,i),t.lanes=o,t}function au(t,i,o){return i=Ut(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Y0(t,i,o,a,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function cu(t,i,o,a,u,h,g,y,x){return t=new Y0(t,i,o,y,x),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ut(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(h),t}function X0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Jp(t){if(!t)return Un;t=t._reactInternals;e:{if(mr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wt(o))return kf(t,o,i)}return i}function Zp(t,i,o,a,u,h,g,y,x){return t=cu(o,a,!0,t,u,h,g,y,x),t.context=Jp(null),o=t.current,a=ft(),u=$n(o),h=_n(a,u),h.callback=i??null,Bn(o,h,u),t.current.lanes=u,Hi(t,u,a),Ct(t,a),t}function ml(t,i,o,a){var u=i.current,h=ft(),g=$n(u);return o=Jp(o),i.context===null?i.context=o:i.pendingContext=o,i=_n(h,g),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Bn(u,i,g),t!==null&&(qt(t,u,g,h),Go(t,u,g)),g}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function em(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function uu(t,i){em(t,i),(t=t.alternate)&&em(t,i)}function J0(){return null}var tm=typeof reportError=="function"?reportError:function(t){console.error(t)};function du(t){this._internalRoot=t}_l.prototype.render=du.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ml(t,i,null,null)},_l.prototype.unmount=du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Sr(function(){ml(null,t,null,null)}),i[hn]=null}};function _l(t){this._internalRoot=t}_l.prototype.unstable_scheduleHydration=function(t){if(t){var i=jh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<On.length&&i!==0&&i<On[o].priority;o++);On.splice(o,0,t),o===0&&zh(t)}};function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nm(){}function Z0(t,i,o,a,u){if(u){if(typeof a=="function"){var h=a;a=function(){var N=gl(g);h.call(N)}}var g=Zp(i,a,t,0,null,!1,!1,"",nm);return t._reactRootContainer=g,t[hn]=g.current,rs(t.nodeType===8?t.parentNode:t),Sr(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof a=="function"){var y=a;a=function(){var N=gl(x);y.call(N)}}var x=cu(t,0,!1,null,null,!1,!1,"",nm);return t._reactRootContainer=x,t[hn]=x.current,rs(t.nodeType===8?t.parentNode:t),Sr(function(){ml(i,x,o,a)}),x}function vl(t,i,o,a,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var y=u;u=function(){var x=gl(g);y.call(x)}}ml(i,g,t,u)}else g=Z0(o,i,t,u,a);return gl(g)}Lh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Wi(i.pendingLanes);o!==0&&(Ma(i,o|1),Ct(i,ze()),(de&6)===0&&(pi=ze()+500,Fn()))}break;case 13:Sr(function(){var a=gn(t,1);if(a!==null){var u=ft();qt(a,t,1,u)}}),uu(t,1)}},ja=function(t){if(t.tag===13){var i=gn(t,134217728);if(i!==null){var o=ft();qt(i,t,134217728,o)}uu(t,134217728)}},Mh=function(t){if(t.tag===13){var i=$n(t),o=gn(t,i);if(o!==null){var a=ft();qt(o,t,i,a)}uu(t,i)}},jh=function(){return _e},Uh=function(t,i){var o=_e;try{return _e=t,i()}finally{_e=o}},Ra=function(t,i,o){switch(i){case"input":if(Ea(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var u=Mo(a);if(!u)throw Error(n(90));ah(a),Ea(a,u)}}}break;case"textarea":fh(t,o);break;case"select":i=o.value,i!=null&&$r(t,!!o.multiple,i,!1)}},xh=ru,Ch=Sr;var ew={usingClientEntryPoint:!1,Events:[os,ti,Mo,wh,Eh,ru]},ws={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tw={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Th(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{_o=wl.inject(tw),tn=wl}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ew,St.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(i))throw Error(n(200));return X0(t,i,null,o)},St.createRoot=function(t,i){if(!hu(t))throw Error(n(299));var o=!1,a="",u=tm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=cu(t,1,!1,null,null,o,!1,a,u),t[hn]=i.current,rs(t.nodeType===8?t.parentNode:t),new du(i)},St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Th(i),t=t===null?null:t.stateNode,t},St.flushSync=function(t){return Sr(t)},St.hydrate=function(t,i,o){if(!yl(i))throw Error(n(200));return vl(null,t,i,!0,o)},St.hydrateRoot=function(t,i,o){if(!hu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,u=!1,h="",g=tm;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=Zp(i,null,t,1,o??null,u,!1,h,g),t[hn]=i.current,rs(t),a)for(t=0;t<a.length;t++)o=a[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new _l(i)},St.render=function(t,i,o){if(!yl(i))throw Error(n(200));return vl(null,t,i,!1,o)},St.unmountComponentAtNode=function(t){if(!yl(t))throw Error(n(40));return t._reactRootContainer?(Sr(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1},St.unstable_batchedUpdates=ru,St.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!yl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return vl(t,i,o,!1,a)},St.version="18.3.1-next-f1338f8080-20240426",St}var um;function cw(){if(um)return mu.exports;um=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),mu.exports=aw(),mu.exports}var dm;function uw(){if(dm)return El;dm=1;var r=cw();return El.createRoot=r.createRoot,El.hydrateRoot=r.hydrateRoot,El}var dw=uw(),te=sd();const hw=()=>{};var hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(r,e){if(!r)throw Pi(e)},Pi=function(r){return new Error("Firebase Database ("+Ng.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},fw=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],d=r[n++],f=r[n++],m=((l&7)<<18|(c&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,f=d?r[l+1]:0,m=l+2<r.length,_=m?r[l+2]:0,v=c>>2,E=(c&3)<<4|f>>4;let w=(f&15)<<2|_>>6,T=_&63;m||(T=64,d||(w=64)),s.push(n[v],n[E],n[w],n[T])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Rg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):fw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const _=l<r.length?n[r.charAt(l)]:64;++l;const E=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||f==null||_==null||E==null)throw new pw;const w=c<<2|f>>4;if(s.push(w),_!==64){const T=f<<4&240|_>>2;if(s.push(T),E!==64){const P=_<<6&192|E;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pg=function(r){const e=Rg(r);return od.encodeByteArray(e,!0)},Ol=function(r){return Pg(r).replace(/\./g,"")},Dl=function(r){try{return od.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(r){return Ag(void 0,r)}function Ag(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gw(n)||(r[n]=Ag(r[n],e[n]));return r}function gw(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=()=>_w().__FIREBASE_DEFAULTS__,vw=()=>{if(typeof process>"u"||typeof hm>"u")return;const r=hm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ww=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Dl(r[1]);return e&&JSON.parse(e)},ld=()=>{try{return hw()||yw()||vw()||ww()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},bg=r=>ld()?.emulatorHosts?.[r],Og=r=>{const e=bg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Dg=()=>ld()?.config,Lg=r=>ld()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ad(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ol(JSON.stringify(n)),Ol(JSON.stringify(d)),""].join(".")}const Ps={};function Ew(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ps))Ps[e]?r.emulator.push(e):r.prod.push(e);return r}function xw(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let fm=!1;function cd(r,e){if(typeof window>"u"||typeof document>"u"||!hr(window.location.host)||Ps[r]===e||Ps[r]||fm)return;Ps[r]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",c=Ew().prod.length>0;function d(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function _(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{fm=!0,d()},w}function v(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function E(){const w=xw(s),T=n("text"),P=document.getElementById(T)||document.createElement("span"),R=n("learnmore"),j=document.getElementById(R)||document.createElement("a"),ee=n("preprendIcon"),ie=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const G=w.element;f(G),v(j,R);const F=_();m(ie,ee),G.append(ie,P,j,F),document.body.appendChild(G)}c?(P.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function Cw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iw(){const r=_t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function kw(){return Ng.NODE_ADMIN===!0}function Tw(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="FirebaseError";class Nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Rw,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],d=c?Pw(c,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new Nn(l,f,s)}}function Pw(r,e){return r.replace(Aw,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const Aw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(r){return JSON.parse(r)}function qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=function(r){let e={},n={},s={},l="";try{const c=r.split(".");e=Fs(Dl(c[0])||""),n=Fs(Dl(c[1])||""),l=c[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},bw=function(r){const e=Ug(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ow=function(r){const e=Ug(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Si(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Du(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ll(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Or(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const c=r[l],d=e[l];if(pm(c)&&pm(d)){if(!Or(c,d))return!1}else if(c!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function pm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ts(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,c]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(c)}}),e}function Ns(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)s[E]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let E=0;E<16;E++)s[E]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let E=16;E<80;E++){const w=s[E-3]^s[E-8]^s[E-14]^s[E-16];s[E]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],_,v;for(let E=0;E<80;E++){E<40?E<20?(_=f^c&(d^f),v=1518500249):(_=c^d^f,v=1859775393):E<60?(_=c&d|f&(c|d),v=2400959708):(_=c^d^f,v=3395469782);const w=(l<<5|l>>>27)+_+m+v+s[E]&4294967295;m=f,f=d,d=(c<<30|c>>>2)&4294967295,c=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const c=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(c[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(c),d=0;break}}else for(;l<n;)if(c[d]=e[l],++d,++l,d===this.blockSize){this.compress_(c),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function Lw(r,e){const n=new Mw(r,e);return n.subscribe.bind(n)}class Mw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jw(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=yu),l.error===void 0&&(l.error=yu),l.complete===void 0&&(l.complete=yu);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jw(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function yu(){}function na(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,M(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(c<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ra=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(r){return r&&r._delegate?r._delegate:r}class ar{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Js;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bw(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zw(r){return r===Nr?void 0:r}function Bw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ve||(ve={}));const Hw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Vw=ve.INFO,$w={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Gw=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=$w[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=Vw,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Kw=(r,e)=>e.some(n=>r instanceof n);let mm,gm;function qw(){return mm||(mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qw(){return gm||(gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,Lu=new WeakMap,zg=new WeakMap,vu=new WeakMap,hd=new WeakMap;function Yw(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(ir(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Fg.set(n,r)}).catch(()=>{}),hd.set(e,r),e}function Xw(r){if(Lu.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Lu.set(r,e)}let Mu={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Lu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||zg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Jw(r){Mu=r(Mu)}function Zw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(wu(this),e,...n);return zg.set(s,e.sort?e.sort():[e]),ir(s)}:Qw().includes(r)?function(...e){return r.apply(wu(this),e),ir(Fg.get(this))}:function(...e){return ir(r.apply(wu(this),e))}}function eE(r){return typeof r=="function"?Zw(r):(r instanceof IDBTransaction&&Xw(r),Kw(r,qw())?new Proxy(r,Mu):r)}function ir(r){if(r instanceof IDBRequest)return Yw(r);if(vu.has(r))return vu.get(r);const e=eE(r);return e!==r&&(vu.set(r,e),hd.set(e,r)),e}const wu=r=>hd.get(r);function tE(r,e,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const d=indexedDB.open(r,e),f=ir(d);return s&&d.addEventListener("upgradeneeded",m=>{s(ir(d.result),m.oldVersion,m.newVersion,ir(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{c&&m.addEventListener("close",()=>c()),l&&m.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const nE=["get","getKey","getAll","getAllKeys","count"],rE=["put","add","delete","clear"],Eu=new Map;function _m(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Eu.get(e))return Eu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=rE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||nE.includes(n)))return;const c=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let _=m.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[n](...f),l&&m.done]))[0]};return Eu.set(e,c),c}Jw(r=>({...r,get:(e,n,s)=>_m(e,n)||r.get(e,n,s),has:(e,n)=>!!_m(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sE(r){return r.getComponent()?.type==="VERSION"}const ju="@firebase/app",ym="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new dd("@firebase/app"),oE="@firebase/app-compat",lE="@firebase/analytics-compat",aE="@firebase/analytics",cE="@firebase/app-check-compat",uE="@firebase/app-check",dE="@firebase/auth",hE="@firebase/auth-compat",fE="@firebase/database",pE="@firebase/data-connect",mE="@firebase/database-compat",gE="@firebase/functions",_E="@firebase/functions-compat",yE="@firebase/installations",vE="@firebase/installations-compat",wE="@firebase/messaging",EE="@firebase/messaging-compat",xE="@firebase/performance",CE="@firebase/performance-compat",SE="@firebase/remote-config",IE="@firebase/remote-config-compat",kE="@firebase/storage",TE="@firebase/storage-compat",NE="@firebase/firestore",RE="@firebase/ai",PE="@firebase/firestore-compat",AE="firebase",bE="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="[DEFAULT]",OE={[ju]:"fire-core",[oE]:"fire-core-compat",[aE]:"fire-analytics",[lE]:"fire-analytics-compat",[uE]:"fire-app-check",[cE]:"fire-app-check-compat",[dE]:"fire-auth",[hE]:"fire-auth-compat",[fE]:"fire-rtdb",[pE]:"fire-data-connect",[mE]:"fire-rtdb-compat",[gE]:"fire-fn",[_E]:"fire-fn-compat",[yE]:"fire-iid",[vE]:"fire-iid-compat",[wE]:"fire-fcm",[EE]:"fire-fcm-compat",[xE]:"fire-perf",[CE]:"fire-perf-compat",[SE]:"fire-rc",[IE]:"fire-rc-compat",[kE]:"fire-gcs",[TE]:"fire-gcs-compat",[NE]:"fire-fst",[PE]:"fire-fst-compat",[RE]:"fire-vertex","fire-js":"fire-js",[AE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map,DE=new Map,Fu=new Map;function vm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Dr(r){const e=r.name;if(Fu.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Fu.set(e,r);for(const n of Ml.values())vm(n,r);for(const n of DE.values())vm(n,r);return!0}function ia(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function At(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Zs("app","Firebase",LE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=bE;function Bg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Uu,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw sr.create("bad-app-name",{appName:String(l)});if(n||(n=Dg()),!n)throw sr.create("no-options");const c=Ml.get(l);if(c){if(Or(n,c.options)&&Or(s,c.config))return c;throw sr.create("duplicate-app",{appName:l})}const d=new Ww(l);for(const m of Fu.values())d.addComponent(m);const f=new ME(n,s,d);return Ml.set(l,f),f}function fd(r=Uu){const e=Ml.get(r);if(!e&&r===Uu&&Dg())return Bg();if(!e)throw sr.create("no-app",{appName:r});return e}function an(r,e,n){let s=OE[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(d.join(" "));return}Dr(new ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firebase-heartbeat-database",UE=1,zs="firebase-heartbeat-store";let xu=null;function Wg(){return xu||(xu=tE(jE,UE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(zs)}catch(n){console.warn(n)}}}}).catch(r=>{throw sr.create("idb-open",{originalErrorMessage:r.message})})),xu}async function FE(r){try{const n=(await Wg()).transaction(zs),s=await n.objectStore(zs).get(Hg(r));return await n.done,s}catch(e){if(e instanceof Nn)In.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e?.message});In.warn(n.message)}}}async function wm(r,e){try{const s=(await Wg()).transaction(zs,"readwrite");await s.objectStore(zs).put(e,Hg(r)),await s.done}catch(n){if(n instanceof Nn)In.warn(n.message);else{const s=sr.create("idb-set",{originalErrorMessage:n?.message});In.warn(s.message)}}}function Hg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=1024,BE=30;class WE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Em();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>BE){const l=$E(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){In.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Em(),{heartbeatsToSend:n,unsentEntries:s}=HE(this._heartbeatsCache.heartbeats),l=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return In.warn(e),""}}}function Em(){return new Date().toISOString().substring(0,10)}function HE(r,e=zE){const n=[];let s=r.slice();for(const l of r){const c=n.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),xm(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),xm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tw()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FE(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xm(r){return Ol(JSON.stringify({version:2,heartbeats:r})).length}function $E(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(r){Dr(new ar("platform-logger",e=>new iE(e),"PRIVATE")),Dr(new ar("heartbeat",e=>new WE(e),"PRIVATE")),an(ju,ym,r),an(ju,ym,"esm2020"),an("fire-js","")}GE("");function Vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KE=Vg,$g=new Zs("auth","Firebase",Vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new dd("@firebase/auth");function qE(r,...e){jl.logLevel<=ve.WARN&&jl.warn(`Auth (${Br}): ${r}`,...e)}function Tl(r,...e){jl.logLevel<=ve.ERROR&&jl.error(`Auth (${Br}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(r,...e){throw pd(r,...e)}function cn(r,...e){return pd(r,...e)}function Gg(r,e,n){const s={...KE(),[e]:n};return new Zs("auth","Firebase",s).create(e,{appName:r.name})}function Cn(r){return Gg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return $g.create(r,...e)}function X(r,e,...n){if(!r)throw pd(e,...n)}function wn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Tl(e),new Error(e)}function kn(r,e){r||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){return typeof self<"u"&&self.location?.href||""}function QE(){return Cm()==="http:"||Cm()==="https:"}function Cm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QE()||Sw()||"connection"in navigator)?navigator.onLine:!0}function XE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=ud()||jg()}get(){return YE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(r,e){kn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],e1=new eo(3e4,6e4);function fr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function pr(r,e,n,s,l={}){return qg(r,l,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const f=Ai({key:r.config.apiKey,...d}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:m,...c};return Cw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&hr(r.emulatorConfig.host)&&(_.credentials="include"),Kg.fetch()(await Qg(r,r.config.apiHost,n,f),_)})}async function qg(r,e,n){r._canInitEmulator=!1;const s={...JE,...e};try{const l=new n1(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw xl(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const f=c.ok?d.errorMessage:d.error.message,[m,_]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(r,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw xl(r,"email-already-in-use",d);if(m==="USER_DISABLED")throw xl(r,"user-disabled",d);const v=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Gg(r,v,_);Zt(r,v)}}catch(l){if(l instanceof Nn)throw l;Zt(r,"network-request-failed",{message:String(l)})}}async function to(r,e,n,s,l={}){const c=await pr(r,e,n,s,l);return"mfaPendingCredential"in c&&Zt(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function Qg(r,e,n,s){const l=`${e}${n}?${s}`,c=r,d=c.config.emulator?md(r.config,l):`${r.config.apiScheme}://${l}`;return ZE.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function t1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(cn(this.auth,"network-request-failed")),e1.get())})}}function xl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=cn(r,e,s);return l.customData._tokenResponse=n,l}function Sm(r){return r!==void 0&&r.enterprise!==void 0}class r1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return t1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function i1(r,e){return pr(r,"GET","/v2/recaptchaConfig",fr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(r,e){return pr(r,"POST","/v1/accounts:delete",e)}async function Ul(r,e){return pr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o1(r,e=!1){const n=Qe(r),s=await n.getIdToken(e),l=gd(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:s,authTime:As(Cu(l.auth_time)),issuedAtTime:As(Cu(l.iat)),expirationTime:As(Cu(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Cu(r){return Number(r)*1e3}function gd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Dl(n);return l?JSON.parse(l):(Tl("Failed to decode base64 JWT payload"),null)}catch(l){return Tl("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Im(r){const e=gd(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nn&&l1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function l1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(r){const e=r.auth,n=await r.getIdToken(),s=await Bs(r,Ul(e,{idToken:n}));X(s?.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?Yg(l.providerUserInfo):[],d=u1(r.providerData,c),f=r.isAnonymous,m=!(r.email&&l.passwordHash)&&!d?.length,_=f?m:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Bu(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,v)}async function c1(r){const e=Qe(r);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Yg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(r,e){const n=await qg(r,{},async()=>{const s=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await Qg(r,l,"/v1/token",`key=${c}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return r.emulatorConfig&&hr(r.emulatorConfig.host)&&(m.credentials="include"),Kg.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h1(r,e){return pr(r,"POST","/v2/accounts:revokeToken",fr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Im(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await d1(e,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,d=new vi;return s&&(X(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),c&&(X(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Yt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Bu(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return o1(this,e)}reload(){return c1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Bs(this,s1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,_=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:E,emailVerified:w,isAnonymous:T,providerData:P,stsTokenManager:R}=n;X(E&&R,e,"internal-error");const j=vi.fromJSON(this.name,R);X(typeof E=="string",e,"internal-error"),Qn(s,e.name),Qn(l,e.name),X(typeof w=="boolean",e,"internal-error"),X(typeof T=="boolean",e,"internal-error"),Qn(c,e.name),Qn(d,e.name),Qn(f,e.name),Qn(m,e.name),Qn(_,e.name),Qn(v,e.name);const ee=new Yt({uid:E,auth:e,email:l,emailVerified:w,displayName:s,isAnonymous:T,photoURL:d,phoneNumber:c,tenantId:f,stsTokenManager:j,createdAt:_,lastLoginAt:v});return P&&Array.isArray(P)&&(ee.providerData=P.map(ie=>({...ie}))),m&&(ee._redirectEventId=m),ee}static async _fromIdTokenResponse(e,n,s=!1){const l=new vi;l.updateFromServerResponse(n);const c=new Yt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Fl(c),c}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?Yg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,f=new vi;f.updateFromIdToken(s);const m=new Yt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Bu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(m,_),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Map;function En(r){kn(r instanceof Function,"Expected a class definition");let e=km.get(r);return e?(kn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,km.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xg.type="NONE";const Tm=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r,e,n){return`firebase:${r}:${e}:${n}`}class wi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Nl(this.userKey,l.apiKey,c),this.fullPersistenceKey=Nl("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ul(this.auth,{idToken:e}).catch(()=>{});return n?Yt._fromGetAccountInfoResponse(this.auth,n,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wi(En(Tm),e,s);const l=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||En(Tm);const d=Nl(s,e.config.apiKey,e.name);let f=null;for(const _ of n)try{const v=await _._get(d);if(v){let E;if(typeof v=="string"){const w=await Ul(e,{idToken:v}).catch(()=>{});if(!w)break;E=await Yt._fromGetAccountInfoResponse(e,w,v)}else E=Yt._fromJSON(e,v);_!==c&&(f=E),c=_;break}}catch{}const m=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new wi(c,e,s):(c=m[0],f&&await c._set(d,f.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new wi(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r_(e))return"Blackberry";if(i_(e))return"Webos";if(Zg(e))return"Safari";if((e.includes("chrome/")||e_(e))&&!e.includes("edge/"))return"Chrome";if(n_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function Jg(r=_t()){return/firefox\//i.test(r)}function Zg(r=_t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e_(r=_t()){return/crios\//i.test(r)}function t_(r=_t()){return/iemobile/i.test(r)}function n_(r=_t()){return/android/i.test(r)}function r_(r=_t()){return/blackberry/i.test(r)}function i_(r=_t()){return/webos/i.test(r)}function _d(r=_t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function f1(r=_t()){return _d(r)&&!!window.navigator?.standalone}function p1(){return Iw()&&document.documentMode===10}function s_(r=_t()){return _d(r)||n_(r)||i_(r)||r_(r)||/windows phone/i.test(r)||t_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(r,e=[]){let n;switch(r){case"Browser":n=Nm(_t());break;case"Worker":n=`${Nm(_t())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,f)=>{try{const m=e(c);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(r,e={}){return pr(r,"GET","/v2/passwordPolicy",fr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=6;class y1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rm(this),this.idTokenSubscription=new Rm(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$g,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ul(this,{idToken:e}),s=await Yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(At(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=s?._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===d)&&f?.user&&(s=f.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Cn(this));const n=e?Qe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g1(this),n=new y1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await h1(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&qE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Wr(r){return Qe(r)}class Rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lw(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w1(r){sa=r}function l_(r){return sa.loadJS(r)}function E1(){return sa.recaptchaEnterpriseScript}function x1(){return sa.gapiScript}function C1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class S1{constructor(){this.enterprise=new I1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class I1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const k1="recaptcha-enterprise",a_="NO_RECAPTCHA";class T1{constructor(e){this.type=k1,this.auth=Wr(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,f)=>{i1(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new r1(m);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(m=>{f(m)})})}function l(c,d,f){const m=window.grecaptcha;Sm(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(_=>{d(_)}).catch(()=>{d(a_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S1().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{s(this.auth).then(f=>{if(!n&&Sm(window.grecaptcha))l(f,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=E1();m.length!==0&&(m+=f),l_(m).then(()=>{l(f,c,d)}).catch(_=>{d(_)})}}).catch(f=>{d(f)})})}}async function Pm(r,e,n,s=!1,l=!1){const c=new T1(r);let d;if(l)d=a_;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const f={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Wu(r,e,n,s,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Pm(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Pm(r,e,n,n==="getOobCode");return s(r,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(r,e){const n=ia(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(Or(c,e??{}))return l;Zt(l,"already-initialized")}return n.initialize({options:e})}function R1(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(En);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function P1(r,e,n){const s=Wr(r);X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=c_(e),{host:d,port:f}=A1(e),m=f===null?"":`:${f}`,_={url:`${c}//${d}${m}/`},v=Object.freeze({host:d,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(Or(_,s.config.emulator)&&Or(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,hr(d)?(ad(`${c}//${d}${m}`),cd("Auth",!0)):b1()}function c_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function A1(r){const e=c_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:Am(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:Am(d)}}}function Am(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function b1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function O1(r,e){return pr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(r,e){return to(r,"POST","/v1/accounts:signInWithPassword",fr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(r,e){return to(r,"POST","/v1/accounts:signInWithEmailLink",fr(r,e))}async function M1(r,e){return to(r,"POST","/v1/accounts:signInWithEmailLink",fr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends yd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Ws(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ws(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,n,"signInWithPassword",D1);case"emailLink":return L1(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wu(e,s,"signUpPassword",O1);case"emailLink":return M1(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(r,e){return to(r,"POST","/v1/accounts:signInWithIdp",fr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="http://localhost";class Lr extends yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const d=new Lr(s,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ei(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:j1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F1(r){const e=Ts(Ns(r)).link,n=e?Ts(Ns(e)).deep_link_id:null,s=Ts(Ns(r)).deep_link_id;return(s?Ts(Ns(s)).link:null)||s||n||e||r}class vd{constructor(e){const n=Ts(Ns(e)),s=n.apiKey??null,l=n.oobCode??null,c=U1(n.mode??null);X(s&&l&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=F1(e);try{return new vd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return Ws._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=vd.parseLink(n);return X(s,"argument-error"),Ws._fromEmailAndCode(e,s.code,s.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends u_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends no{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends no{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends no{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return er.credential(n,s)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(r,e){return to(r,"POST","/v1/accounts:signUp",fr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const c=await Yt._fromIdTokenResponse(e,s,l),d=bm(s);return new Mr({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=bm(s);return new Mr({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function bm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Nn{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new zl(e,n,s,l)}}function d_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(r,c,e,s):c})}async function B1(r,e,n=!1){const s=await Bs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Mr._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(r,e,n=!1){const{auth:s}=r;if(At(s.app))return Promise.reject(Cn(s));const l="reauthenticate";try{const c=await Bs(r,d_(s,l,e,r),n);X(c.idToken,s,"internal-error");const d=gd(c.idToken);X(d,s,"internal-error");const{sub:f}=d;return X(r.uid===f,s,"user-mismatch"),Mr._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Zt(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(r,e,n=!1){if(At(r.app))return Promise.reject(Cn(r));const s="signIn",l=await d_(r,s,e),c=await Mr._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}async function H1(r,e){return h_(Wr(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(r){const e=Wr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V1(r,e,n){if(At(r.app))return Promise.reject(Cn(r));const s=Wr(r),d=await Wu(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",z1).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&f_(r),m}),f=await Mr._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(f.user),f}function $1(r,e,n){return At(r.app)?Promise.reject(Cn(r)):H1(Qe(r),bi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&f_(r),s})}function G1(r,e,n,s){return Qe(r).onIdTokenChanged(e,n,s)}function K1(r,e,n){return Qe(r).beforeAuthStateChanged(e,n)}function q1(r,e,n,s){return Qe(r).onAuthStateChanged(e,n,s)}function Hs(r){return Qe(r).signOut()}const Bl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=1e3,Y1=10;class m_ extends p_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);p1()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,Y1):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m_.type="LOCAL";const X1=m_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends p_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g_.type="SESSION";const __=g_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:c}=n.data,d=this.handlersMap[l];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async _=>_(n.origin,c)),m=await J1(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((f,m)=>{const _=wd("",20);l.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(E){const w=E;if(w.data.eventId===_)switch(w.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(w.data.response);break;default:clearTimeout(v),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function ex(r){un().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function tx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nx(){return navigator?.serviceWorker?.controller||null}function rx(){return y_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="firebaseLocalStorageDb",ix=1,Wl="firebaseLocalStorage",w_="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(r,e){return r.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function sx(){const r=indexedDB.deleteDatabase(v_);return new ro(r).toPromise()}function Hu(){const r=indexedDB.open(v_,ix);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wl,{keyPath:w_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wl)?e(s):(s.close(),await sx(),e(await Hu()))})})}async function Om(r,e,n){const s=la(r,!0).put({[w_]:e,value:n});return new ro(s).toPromise()}async function ox(r,e){const n=la(r,!1).get(e),s=await new ro(n).toPromise();return s===void 0?null:s.value}function Dm(r,e){const n=la(r,!0).delete(e);return new ro(n).toPromise()}const lx=800,ax=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ax)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(rx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tx(),!this.activeServiceWorker)return;this.sender=new Z1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hu();return await Om(e,Bl,"1"),await Dm(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Om(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ox(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=la(l,!1).getAll();return new ro(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const cx=E_;new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(r,e){return e?En(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dx(r){return h_(r.auth,new Ed(r),r.bypassAuthState)}function hx(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),W1(n,new Ed(r),r.bypassAuthState)}async function fx(r){const{auth:e,user:n}=r;return X(n,e,"internal-error"),B1(n,new Ed(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dx;case"linkViaPopup":case"linkViaRedirect":return fx;case"reauthViaPopup":case"reauthViaRedirect":return hx;default:Zt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=new eo(2e3,1e4);class _i extends x_{constructor(e,n,s,l,c){super(e,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,px.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="pendingRedirect",Rl=new Map;class gx extends x_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const s=await _x(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _x(r,e){const n=wx(e),s=vx(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function yx(r,e){Rl.set(r._key(),e)}function vx(r){return En(r._redirectPersistence)}function wx(r){return Nl(mx,r.config.apiKey,r.name)}async function Ex(r,e,n=!1){if(At(r.app))return Promise.reject(Cn(r));const s=Wr(r),l=ux(s,e),d=await new gx(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=600*1e3;class Cx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!C_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lm(e))}saveEventToCache(e){this.cachedEventUids.add(Lm(e)),this.lastProcessedEventTime=Date.now()}}function Lm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function C_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function Sx(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(r,e={}){return pr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tx=/^https?/;async function Nx(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Ix(r);for(const n of e)try{if(Rx(n))return}catch{}Zt(r,"unauthorized-domain")}function Rx(r){const e=zu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!Tx.test(n))return!1;if(kx.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new eo(3e4,6e4);function Mm(){const r=un().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function Ax(r){return new Promise((e,n)=>{function s(){Mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mm(),n(cn(r,"network-request-failed"))},timeout:Px.get()})}if(un().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(un().gapi?.load)s();else{const l=C1("iframefcb");return un()[l]=()=>{gapi.load?s():n(cn(r,"network-request-failed"))},l_(`${x1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function bx(r){return Pl=Pl||Ax(r),Pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new eo(5e3,15e3),Dx="__/auth/iframe",Lx="emulator/auth/iframe",Mx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ux(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?md(e,Lx):`https://${r.config.authDomain}/${Dx}`,s={apiKey:e.apiKey,appName:r.name,v:Br},l=jx.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ai(s).slice(1)}`}async function Fx(r){const e=await bx(r),n=un().gapi;return X(n,r,"internal-error"),e.open({where:document.body,url:Ux(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mx,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const d=cn(r,"network-request-failed"),f=un().setTimeout(()=>{c(d)},Ox.get());function m(){un().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bx=500,Wx=600,Hx="_blank",Vx="http://localhost";class jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $x(r,e,n,s=Bx,l=Wx){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...zx,width:s.toString(),height:l.toString(),top:c,left:d},_=_t().toLowerCase();n&&(f=e_(_)?Hx:n),Jg(_)&&(e=e||Vx,m.scrollbars="yes");const v=Object.entries(m).reduce((w,[T,P])=>`${w}${T}=${P},`,"");if(f1(_)&&f!=="_self")return Gx(e||"",f),new jm(null);const E=window.open(e||"",f,v);X(E,r,"popup-blocked");try{E.focus()}catch{}return new jm(E)}function Gx(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="__/auth/handler",qx="emulator/auth/handler",Qx=encodeURIComponent("fac");async function Um(r,e,n,s,l,c){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Br,eventId:l};if(e instanceof u_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Du(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))d[v]=E}if(e instanceof no){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(d.scopes=v.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await r._getAppCheckToken(),_=m?`#${Qx}=${encodeURIComponent(m)}`:"";return`${Yx(r)}?${Ai(f).slice(1)}${_}`}function Yx({config:r}){return r.emulator?md(r,qx):`https://${r.authDomain}/${Kx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="webStorageSupport";class Xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=__,this._completeRedirectFn=Ex,this._overrideRedirectResult=yx}async _openPopup(e,n,s,l){kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Um(e,n,s,zu(),l);return $x(e,c,wd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const c=await Um(e,n,s,zu(),l);return ex(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(kn(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Fx(e),s=new Cx(e);return n.register("authEvent",l=>(X(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Su,{type:Su},l=>{const c=l?.[0]?.[Su];c!==void 0&&n(!!c),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Nx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s_()||Zg()||_d()}}const Jx=Xx;var Fm="@firebase/auth",zm="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tC(r){Dr(new ar("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;X(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o_(r)},_=new v1(s,l,c,m);return R1(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Dr(new ar("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(s=>new Zx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Fm,zm,eC(r)),an(Fm,zm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=300,rC=Lg("authIdTokenMaxAge")||nC;let Bm=null;const iC=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rC)return;const l=n?.token;Bm!==l&&(Bm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function sC(r=fd()){const e=ia(r,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(r,{popupRedirectResolver:Jx,persistence:[cx,X1,__]}),s=Lg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=iC(c.toString());K1(n,d,()=>d(n.currentUser)),G1(n,f=>d(f))}}const l=bg("auth");return l&&P1(n,`http://${l}`),n}function oC(){return document.getElementsByTagName("head")?.[0]??document}w1({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=cn("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",oC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tC("Browser");var Wm={};const Hm="@firebase/database",Vm="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S_="";function lC(r){S_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aC(e)}}catch{}return new cC},Pr=I_("localStorage"),uC=I_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new dd("@firebase/database"),dC=(function(){let r=1;return function(){return r++}})(),k_=function(r){const e=Uw(r),n=new Dw;n.update(e);const s=n.digest();return od.encodeByteArray(s)},io=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=io.apply(null,s):typeof s=="object"?e+=qe(s):e+=s,e+=" "}return e};let bs=null,$m=!0;const hC=function(r,e){M(!0,"Can't turn on custom loggers persistently."),xi.logLevel=ve.VERBOSE,bs=xi.log.bind(xi)},it=function(...r){if($m===!0&&($m=!1,bs===null&&uC.get("logging_enabled")===!0&&hC()),bs){const e=io.apply(null,r);bs(e)}},so=function(r){return function(...e){it(r,...e)}},Vu=function(...r){const e="FIREBASE INTERNAL ERROR: "+io(...r);xi.error(e)},Tn=function(...r){const e=`FIREBASE FATAL ERROR: ${io(...r)}`;throw xi.error(e),new Error(e)},gt=function(...r){const e="FIREBASE WARNING: "+io(...r);xi.warn(e)},fC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},pC=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ii="[MIN_NAME]",jr="[MAX_NAME]",Hr=function(r,e){if(r===e)return 0;if(r===Ii||e===jr)return-1;if(e===Ii||r===jr)return 1;{const n=Gm(r),s=Gm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},mC=function(r,e){return r===e?0:r<e?-1:1},xs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+qe(e))},Cd=function(r){if(typeof r!="object"||r===null)return qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=qe(e[s]),n+=":",n+=Cd(r[e[s]]);return n+="}",n},T_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function st(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const N_=function(r){M(!xd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,c,d,f,m;r===0?(c=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,d=Math.round(r/Math.pow(2,1-s-n))));const _=[];for(m=n;m;m-=1)_.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)_.push(c%2?1:0),c=Math.floor(c/2);_.push(l?1:0),_.reverse();const v=_.join("");let E="";for(m=0;m<64;m+=8){let w=parseInt(v.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},gC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_C=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yC(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const vC=new RegExp("^-?(0*)\\d{1,10}$"),wC=-2147483648,EC=2147483647,Gm=function(r){if(vC.test(r)){const e=Number(r);if(e>=wC&&e<=EC)return e}return null},Oi=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},xC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Os=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,At(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class Al{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Al.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="5",R_="v",P_="s",A_="r",b_="f",O_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,D_="ls",L_="p",$u="ac",M_="websocket",j_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,s,l,c=!1,d="",f=!1,m=!1,_=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function IC(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function F_(r,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===M_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===j_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IC(r)&&(n.ns=r.namespace);const l=[];return st(n,(c,d)=>{l.push(c+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu={},ku={};function Id(r){const e=r.toString();return Iu[e]||(Iu[e]=new kC),Iu[e]}function TC(r,e){const n=r.toString();return ku[n]||(ku[n]=e()),ku[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Oi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="start",RC="close",PC="pLPCommand",AC="pRTLPCB",z_="id",B_="pw",W_="ser",bC="cb",OC="seg",DC="ts",LC="d",MC="dframe",H_=1870,V_=30,jC=H_-V_,UC=25e3,FC=3e4;class yi{constructor(e,n,s,l,c,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=Id(n),this.urlFn=m=>(this.appCheckToken&&(m[$u]=this.appCheckToken),F_(n,j_,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FC)),pC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kd((...c)=>{const[d,f,m,_,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Km)this.id=f,this.password=m;else if(d===RC)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...c)=>{const[d,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Km]="t",s[W_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[R_]=Sd,this.transportSessionId&&(s[P_]=this.transportSessionId),this.lastSessionId&&(s[D_]=this.lastSessionId),this.applicationId&&(s[L_]=this.applicationId),this.appCheckToken&&(s[$u]=this.appCheckToken),typeof location<"u"&&location.hostname&&O_.test(location.hostname)&&(s[A_]=b_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gC()&&!_C()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Pg(n),l=T_(s,jC);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[MC]="t",s[z_]=e,s[B_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dC(),window[PC+this.uniqueCallbackIdentifier]=e,window[AC+this.uniqueCallbackIdentifier]=n,this.myIFrame=kd.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){it("frame writing exception"),f.stack&&it(f.stack),it(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[z_]=this.myID,e[B_]=this.myPW,e[W_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V_+s.length<=H_;){const d=this.pendingSegs.shift();s=s+"&"+OC+l+"="+d.seg+"&"+DC+l+"="+d.ts+"&"+LC+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(UC)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=16384,BC=45e3;let Hl=null;typeof MozWebSocket<"u"?Hl=MozWebSocket:typeof WebSocket<"u"&&(Hl=WebSocket);class Qt{constructor(e,n,s,l,c,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=Id(n),this.connURL=Qt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,c){const d={};return d[R_]=Sd,typeof location<"u"&&location.hostname&&O_.test(location.hostname)&&(d[A_]=b_),n&&(d[P_]=n),s&&(d[D_]=s),l&&(d[$u]=l),c&&(d[L_]=c),F_(e,M_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pr.set("previous_websocket_failure",!0);try{let s;kw(),this.mySock=new Hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hl!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Pr.isInMemoryStorage||Pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=T_(n,zC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{static get ALL_TRANSPORTS(){return[yi,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Qt&&Qt.isAvailable();let s=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qt];else{const l=this.transports_=[];for(const c of Vs.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=6e4,HC=5e3,VC=10*1024,$C=100*1024,Tu="t",qm="d",GC="s",Qm="r",KC="e",Ym="o",Xm="a",Jm="n",Zm="p",qC="h";class QC{constructor(e,n,s,l,c,d,f,m,_,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=_,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new Vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$C?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tu in e){const n=e[Tu];n===Xm?this.upgradeIfSecondaryHealthy_():n===Qm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ym&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xs("t",e),s=xs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xs("t",e),s=xs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xs(Tu,e);if(qm in e){const s=e[qm];if(n===qC){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Jm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GC?this.onConnectionShutdown_(s):n===Qm?this.onReset_(s):n===KC?Vu("Server Error: "+s):n===Ym?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sd!==s&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===n&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends G_{static getInstance(){return new Vl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=32,tg=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new we("")}function le(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function cr(r){return r.pieces_.length-r.pieceNum_}function Se(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new we(r.pieces_,e)}function Td(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function YC(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function $s(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function K_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new we(e,0)}function Le(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new we(n,0)}function ue(r){return r.pieceNum_>=r.pieces_.length}function mt(r,e){const n=le(r),s=le(e);if(n===null)return e;if(n===s)return mt(Se(r),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function XC(r,e){const n=$s(r,0),s=$s(e,0);for(let l=0;l<n.length&&l<s.length;l++){const c=Hr(n[l],s[l]);if(c!==0)return c}return n.length===s.length?0:n.length<s.length?-1:1}function Nd(r,e){if(cr(r)!==cr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(cr(r)>cr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class JC{constructor(e,n){this.errorPrefix_=n,this.parts_=$s(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ra(this.parts_[s]);q_(this)}}function ZC(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=ra(e),q_(r)}function eS(r){const e=r.parts_.pop();r.byteLength_-=ra(e),r.parts_.length>0&&(r.byteLength_-=1)}function q_(r){if(r.byteLength_>tg)throw new Error(r.errorPrefix_+"has a key path longer than "+tg+" bytes ("+r.byteLength_+").");if(r.parts_.length>eg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eg+") or object contains a cycle "+Rr(r))}function Rr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends G_{static getInstance(){return new Rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,tS=300*1e3,ng=30*1e3,nS=1.3,rS=3e4,iS="server_kill",rg=3;class Sn extends $_{constructor(e,n,s,l,c,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=Sn.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=tS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_(qe(c)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Js,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,s,l){this.initConnection_();const c=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+c),this.listens.has(d)||this.listens.set(d,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(d).has(c),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},d="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(d,c,f=>{const m=f.d,_=f.s;Sn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),_!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(_,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const s=Si(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ow(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ng)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const c=l.s,d=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},d="n";l&&(c.q=s,c.t=l),this.sendRequest(d,c)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const c={p:n,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,c){this.initConnection_();const d={p:n,d:s};c!==void 0&&(d.h=c),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vu("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rS&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Sn.nextConnectionId_++,c=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},_=function(E){M(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(E)};this.realtime_={close:m,sendRequest:_};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);d?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,f=new QC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,T=>{gt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(iS)},c))}catch(E){this.log_("Failed to get token: "+E),d||(this.repoInfo_.nodeAdmin&&gt(E),m())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(c=>Cd(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rg&&(this.reconnectDelay_=ng,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+S_.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vl.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(Ii,e),l=new ae(Ii,n);return this.compare(s,l)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class Q_ extends aa{static get __EMPTY_NODE(){return Cl}static set __EMPTY_NODE(e){Cl=e}compare(e,n){return Hr(e.name,n.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(jr,Cl)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Cl)}toString(){return".key"}}const Ci=new Q_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,l,c){this.key=e,this.value=n,this.color=s??tt.RED,this.left=l??It.EMPTY_NODE,this.right=c??It.EMPTY_NODE}copy(e,n,s,l,c){return new tt(e??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class sS{copy(e,n,s,l,c){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sl(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new sS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(r,e){return Hr(r.name,e.name)}function Pd(r,e){return Hr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;function lS(r){Gu=r}const Y_=function(r){return typeof r=="number"?"number:"+N_(r):"string:"+r},X_=function(r){if(r.isLeafNode()){const e=r.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else M(r===Gu||r.isEmpty(),"priority of unexpected type.");M(r===Gu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;class et{static set __childrenNodeConstructor(e){ig=e}static get __childrenNodeConstructor(){return ig}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),X_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Y_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=N_(this.value_):e+=this.value_,this.lazyHash_=k_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),c=et.VALUE_TYPE_ORDER.indexOf(s);return M(l>=0,"Unknown leaf type: "+n),M(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J_,Z_;function aS(r){J_=r}function cS(r){Z_=r}class uS extends aa{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),c=s.compareTo(l);return c===0?Hr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(jr,new et("[PRIORITY-POST]",Z_))}makePost(e,n){const s=J_(e);return new ae(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new uS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=Math.log(2);class hS{constructor(e){const n=c=>parseInt(Math.log(c)/dS,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $l=function(r,e,n,s){r.sort(e);const l=function(m,_){const v=_-m;let E,w;if(v===0)return null;if(v===1)return E=r[m],w=n?n(E):E,new tt(w,E.node,tt.BLACK,null,null);{const T=parseInt(v/2,10)+m,P=l(m,T),R=l(T+1,_);return E=r[T],w=n?n(E):E,new tt(w,E.node,tt.BLACK,P,R)}},c=function(m){let _=null,v=null,E=r.length;const w=function(P,R){const j=E-P,ee=E;E-=P;const ie=l(j+1,ee),G=r[j],F=n?n(G):G;T(new tt(F,G.node,R,null,ie))},T=function(P){_?(_.left=P,_=P):(v=P,_=P)};for(let P=0;P<m.count;++P){const R=m.nextBitIsOne(),j=Math.pow(2,m.count-(P+1));R?w(j,tt.BLACK):(w(j,tt.BLACK),w(j,tt.RED))}return v},d=new hS(r.length),f=c(d);return new It(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu;const gi={};class xn{static get Default(){return M(gi&&Me,"ChildrenNode.ts has not been loaded"),Nu=Nu||new xn({".priority":gi},{".priority":Me}),Nu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=n.getIterator(ae.Wrap);let d=c.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=c.getNext();let f;l?f=$l(s,e.getCompare()):f=gi;const m=e.toString(),_={...this.indexSet_};_[m]=e;const v={...this.indexes_};return v[m]=f,new xn(v,_)}addToIndexes(e,n){const s=Ll(this.indexes_,(l,c)=>{const d=Si(this.indexSet_,c);if(M(d,"Missing index implementation for "+c),l===gi)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(ae.Wrap);let _=m.getNext();for(;_;)_.name!==e.name&&f.push(_),_=m.getNext();return f.push(e),$l(f,d.getCompare())}else return gi;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new ae(e.name,f))),m.insert(e,e.node)}});return new xn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ll(this.indexes_,l=>{if(l===gi)return l;{const c=n.get(e.name);return c?l.remove(new ae(e.name,c)):l}});return new xn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class J{static get EMPTY_NODE(){return Ss||(Ss=new J(new It(Pd),null,xn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&X_(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?Ss:this.priorityNode_;return new J(l,d,c)}}updateChild(e,n){const s=le(e);if(s===null)return n;{M(le(e)!==".priority"||cr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,c=!0;if(this.forEachChild(Me,(d,f)=>{n[d]=f.val(e),s++,c&&J.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):c=!1}),!e&&c&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Y_(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":k_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new ae(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ae.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oo?-1:0}withIndex(e){if(e===Ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),l=n.getIterator(Me);let c=s.getNext(),d=l.getNext();for(;c&&d;){if(c.name!==d.name||!c.node.equals(d.node))return!1;c=s.getNext(),d=l.getNext()}return c===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Ci?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fS extends J{constructor(){super(new It(Pd),J.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const oo=new fS;Object.defineProperties(ae,{MIN:{value:new ae(Ii,J.EMPTY_NODE)},MAX:{value:new ae(jr,oo)}});Q_.__EMPTY_NODE=J.EMPTY_NODE;et.__childrenNodeConstructor=J;lS(oo);cS(oo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=!0;function Ke(r,e=null){if(r===null)return J.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new et(n,Ke(e))}if(!(r instanceof Array)&&pS){const n=[];let s=!1;if(st(r,(d,f)=>{if(d.substring(0,1)!=="."){const m=Ke(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new ae(d,m)))}}),n.length===0)return J.EMPTY_NODE;const c=$l(n,oS,d=>d.name,Pd);if(s){const d=$l(n,Me.getCompare());return new J(c,Ke(e),new xn({".priority":d},{".priority":Me}))}else return new J(c,Ke(e),xn.Default)}else{let n=J.EMPTY_NODE;return st(r,(s,l)=>{if(dn(r,s)&&s.substring(0,1)!=="."){const c=Ke(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(s,c))}}),n.updatePriority(Ke(e))}}aS(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS extends aa{constructor(e){super(),this.indexPath_=e,M(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),c=s.compareTo(l);return c===0?Hr(e.name,n.name):c}makePost(e,n){const s=Ke(e),l=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,l)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,oo);return new ae(jr,e)}toString(){return $s(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends aa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=Ke(e);return new ae(n,s)}toString(){return".value"}}const _S=new gS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(r){return{type:"value",snapshotNode:r}}function ki(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Gs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ks(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function yS(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.index_=e}updateChild(e,n,s,l,c,d){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Gs(n,f)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(ki(n,s)):d.trackChildChange(Ks(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(l,c)=>{n.hasChild(l)||s.trackChildChange(Gs(l,c))}),n.isLeafNode()||n.forEachChild(Me,(l,c)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(c)||s.trackChildChange(Ks(l,c,d))}else s.trackChildChange(ki(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.indexedFilter_=new Ad(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qs.getStartPost_(e),this.endPost_=qs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,c,d){return this.matches(new ae(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,c,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(J.EMPTY_NODE);const c=this;return n.forEachChild(Me,(d,f)=>{c.matches(new ae(d,f))||(l=l.updateImmediateChild(d,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new qs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,c,d){return this.rangedFilter_.matches(new ae(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,c,d):this.fullLimitUpdateChild_(e,n,s,c,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=J.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;c.hasNext()&&d<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(J.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let d=0;for(;c.hasNext();){const f=c.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,c){let d;if(this.reverse_){const E=this.index_.getCompare();d=(w,T)=>E(T,w)}else d=this.index_.getCompare();const f=e;M(f.numChildren()===this.limit_,"");const m=new ae(n,s),_=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(m);if(f.hasChild(n)){const E=f.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,_,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const T=w==null?1:d(w,m);if(v&&!s.isEmpty()&&T>=0)return c?.trackChildChange(Ks(n,s,E)),f.updateImmediateChild(n,s);{c?.trackChildChange(Gs(n,E));const R=f.updateImmediateChild(n,J.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(c?.trackChildChange(ki(w.name,w.node)),R.updateImmediateChild(w.name,w.node)):R}}else return s.isEmpty()?e:v&&d(_,m)>=0?(c!=null&&(c.trackChildChange(Gs(_.name,_.node)),c.trackChildChange(ki(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(_.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wS(r){return r.loadsAllData()?new Ad(r.getIndex()):r.hasLimit()?new vS(r):new qs(r)}function sg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Me?n="$priority":r.index_===_S?n="$value":r.index_===Ci?n="$key":(M(r.index_ instanceof mS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function og(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Me&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends $_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=so("p:rest:"),this.listens_={}}listen(e,n,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const d=Gl.getListenId_(e,s),f={};this.listens_[d]=f;const m=sg(e._queryParams);this.restRequest_(c+".json",m,(_,v)=>{let E=v;if(_===404&&(E=null,_=null),_===null&&this.onDataUpdate_(c,E,!1,s),Si(this.listens_,d)===f){let w;_?_===401?w="permission_denied":w="rest_error:"+_:w="ok",l(w,null)}})}unlisten(e,n){const s=Gl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sg(e._queryParams),s=e._path.toString(),l=new Js;return this.restRequest_(s+".json",n,(c,d)=>{let f=d;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ai(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=Fs(f.responseText)}catch{gt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&gt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(){return{value:null,children:new Map}}function ty(r,e,n){if(ue(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=le(e);r.children.has(s)||r.children.set(s,Kl());const l=r.children.get(s);e=Se(e),ty(l,e,n)}}function Ku(r,e,n){r.value!==null?n(e,r.value):xS(r,(s,l)=>{const c=new we(e.toString()+"/"+s);Ku(l,c,n)})}function xS(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&st(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=10*1e3,SS=30*1e3,IS=300*1e3;class kS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CS(e);const s=lg+(SS-lg)*Math.random();Os(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;st(e,(l,c)=>{c>0&&dn(this.statsToReport_,l)&&(n[l]=c,s=!0)}),s&&this.server_.reportStats(n),Os(this.reportStats_.bind(this),Math.floor(Math.random()*2*IS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function Od(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ld(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xt.ACK_USER_WRITE,this.source=Od()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new ql(me(),n,this.revert)}}else return M(le(this.path)===e,"operationForChild called for unrelated child."),new ql(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Qs(this.source,me()):new Qs(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xt.OVERWRITE}operationForChild(e){return ue(this.path)?new Ur(this.source,me(),this.snap.getImmediateChild(e)):new Ur(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Ur(this.source,me(),n.value):new Ti(this.source,me(),n)}else return M(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ti(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NS(r,e,n,s){const l=[],c=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&c.push(yS(d.childName,d.snapshotNode))}),Is(r,l,"child_removed",e,s,n),Is(r,l,"child_added",e,s,n),Is(r,l,"child_moved",c,s,n),Is(r,l,"child_changed",e,s,n),Is(r,l,"value",e,s,n),l}function Is(r,e,n,s,l,c){const d=s.filter(f=>f.type===n);d.sort((f,m)=>PS(r,f,m)),d.forEach(f=>{const m=RS(r,f,c);l.forEach(_=>{_.respondsTo(f.type)&&e.push(_.createEvent(m,r.query_))})})}function RS(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function PS(r,e,n){if(e.childName==null||n.childName==null)throw Pi("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),l=new ae(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(r,e){return{eventCache:r,serverCache:e}}function Ds(r,e,n,s){return ca(new ur(e,n,s),r.serverCache)}function ny(r,e,n,s){return ca(r.eventCache,new ur(e,n,s))}function Ql(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Fr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;const AS=()=>(Ru||(Ru=new It(mC)),Ru);class Ce{static fromObject(e){let n=new Ce(null);return st(e,(s,l)=>{n=n.set(new we(s),l)}),n}constructor(e,n=AS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ue(e))return null;{const s=le(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Se(e),n);return c!=null?{path:Le(new we(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new Ce(null)}}set(e,n){if(ue(e))return new Ce(n,this.children);{const s=le(e),c=(this.children.get(s)||new Ce(null)).set(Se(e),n),d=this.children.insert(s,c);return new Ce(this.value,d)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const l=s.remove(Se(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new Ce(null):new Ce(this.value,c)}else return this}}get(e){if(ue(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(ue(e))return n;{const s=le(e),c=(this.children.get(s)||new Ce(null)).setTree(Se(e),n);let d;return c.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,c),new Ce(this.value,d)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(Le(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ue(e))return null;{const c=le(e),d=this.children.get(c);return d?d.findOnPath_(Se(e),Le(n,c),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const l=le(e),c=this.children.get(l);return c?c.foreachOnPath_(Se(e),Le(n,l),s):new Ce(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Ce(null))}}function Ls(r,e,n){if(ue(e))return new Jt(new Ce(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const d=mt(l,e);return c=c.updateChild(d,n),new Jt(r.writeTree_.set(l,c))}else{const l=new Ce(n),c=r.writeTree_.setTree(e,l);return new Jt(c)}}}function qu(r,e,n){let s=r;return st(n,(l,c)=>{s=Ls(s,Le(e,l),c)}),s}function ag(r,e){if(ue(e))return Jt.empty();{const n=r.writeTree_.setTree(e,new Ce(null));return new Jt(n)}}function Qu(r,e){return Vr(r,e)!=null}function Vr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function cg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,l)=>{e.push(new ae(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ae(s,l.value))}),e}function or(r,e){if(ue(e))return r;{const n=Vr(r,e);return n!=null?new Jt(new Ce(n)):new Jt(r.writeTree_.subtree(e))}}function Yu(r){return r.writeTree_.isEmpty()}function Ni(r,e){return ry(me(),r.writeTree_,e)}function ry(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(M(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):n=ry(Le(r,l),c,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Le(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(r,e){return ly(e,r)}function bS(r,e,n,s,l){M(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ls(r.visibleWrites,e,n)),r.lastWriteId=s}function OS(r,e,n,s){M(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=qu(r.visibleWrites,e,n),r.lastWriteId=s}function DS(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function LS(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,c=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&MS(f,s.path)?l=!1:Ft(s.path,f.path)&&(c=!0)),d--}if(l){if(c)return jS(r),!0;if(s.snap)r.visibleWrites=ag(r.visibleWrites,s.path);else{const f=s.children;st(f,m=>{r.visibleWrites=ag(r.visibleWrites,Le(s.path,m))})}return!0}else return!1}function MS(r,e){if(r.snap)return Ft(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Ft(Le(r.path,n),e))return!0;return!1}function jS(r){r.visibleWrites=iy(r.allWrites,US,me()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function US(r){return r.visible}function iy(r,e,n){let s=Jt.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const d=c.path;let f;if(c.snap)Ft(n,d)?(f=mt(n,d),s=Ls(s,f,c.snap)):Ft(d,n)&&(f=mt(d,n),s=Ls(s,me(),c.snap.getChild(f)));else if(c.children){if(Ft(n,d))f=mt(n,d),s=qu(s,f,c.children);else if(Ft(d,n))if(f=mt(d,n),ue(f))s=qu(s,me(),c.children);else{const m=Si(c.children,le(f));if(m){const _=m.getChild(Se(f));s=Ls(s,me(),_)}}}else throw Pi("WriteRecord should have .snap or .children")}}return s}function sy(r,e,n,s,l){if(!s&&!l){const c=Vr(r.visibleWrites,e);if(c!=null)return c;{const d=or(r.visibleWrites,e);if(Yu(d))return n;if(n==null&&!Qu(d,me()))return null;{const f=n||J.EMPTY_NODE;return Ni(d,f)}}}else{const c=or(r.visibleWrites,e);if(!l&&Yu(c))return n;if(!l&&n==null&&!Qu(c,me()))return null;{const d=function(_){return(_.visible||l)&&(!s||!~s.indexOf(_.writeId))&&(Ft(_.path,e)||Ft(e,_.path))},f=iy(r.allWrites,d,e),m=n||J.EMPTY_NODE;return Ni(f,m)}}}function FS(r,e,n){let s=J.EMPTY_NODE;const l=Vr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Me,(c,d)=>{s=s.updateImmediateChild(c,d)}),s;if(n){const c=or(r.visibleWrites,e);return n.forEachChild(Me,(d,f)=>{const m=Ni(or(c,new we(d)),f);s=s.updateImmediateChild(d,m)}),cg(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const c=or(r.visibleWrites,e);return cg(c).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function zS(r,e,n,s,l){M(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=Le(e,n);if(Qu(r.visibleWrites,c))return null;{const d=or(r.visibleWrites,c);return Yu(d)?l.getChild(n):Ni(d,l.getChild(n))}}function BS(r,e,n,s){const l=Le(e,n),c=Vr(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(n)){const d=or(r.visibleWrites,l);return Ni(d,s.getNode().getImmediateChild(n))}else return null}function WS(r,e){return Vr(r.visibleWrites,e)}function HS(r,e,n,s,l,c,d){let f;const m=or(r.visibleWrites,e),_=Vr(m,me());if(_!=null)f=_;else if(n!=null)f=Ni(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const v=[],E=d.getCompare(),w=c?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let T=w.getNext();for(;T&&v.length<l;)E(T,s)!==0&&v.push(T),T=w.getNext();return v}else return[]}function VS(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Yl(r,e,n,s){return sy(r.writeTree,r.treePath,e,n,s)}function Md(r,e){return FS(r.writeTree,r.treePath,e)}function ug(r,e,n,s){return zS(r.writeTree,r.treePath,e,n,s)}function Xl(r,e){return WS(r.writeTree,Le(r.treePath,e))}function $S(r,e,n,s,l,c){return HS(r.writeTree,r.treePath,e,n,s,l,c)}function jd(r,e,n){return BS(r.writeTree,r.treePath,e,n)}function oy(r,e){return ly(Le(r.treePath,e),r.writeTree)}function ly(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(s,Ks(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(s,Gs(s,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(s,ki(s,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(s,Ks(s,e.snapshotNode,l.oldSnap));else throw Pi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ay=new KS;class Ud{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fr(this.viewCache_),c=$S(this.writes_,l,n,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(r){return{filter:r}}function QS(r,e){M(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function YS(r,e,n,s,l){const c=new GS;let d,f;if(n.type===Xt.OVERWRITE){const _=n;_.source.fromUser?d=Xu(r,e,_.path,_.snap,s,l,c):(M(_.source.fromServer,"Unknown source."),f=_.source.tagged||e.serverCache.isFiltered()&&!ue(_.path),d=Jl(r,e,_.path,_.snap,s,l,f,c))}else if(n.type===Xt.MERGE){const _=n;_.source.fromUser?d=JS(r,e,_.path,_.children,s,l,c):(M(_.source.fromServer,"Unknown source."),f=_.source.tagged||e.serverCache.isFiltered(),d=Ju(r,e,_.path,_.children,s,l,f,c))}else if(n.type===Xt.ACK_USER_WRITE){const _=n;_.revert?d=tI(r,e,_.path,s,l,c):d=ZS(r,e,_.path,_.affectedTree,s,l,c)}else if(n.type===Xt.LISTEN_COMPLETE)d=eI(r,e,n.path,s,c);else throw Pi("Unknown operation type: "+n.type);const m=c.getChanges();return XS(e,d,m),{viewCache:d,changes:m}}function XS(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=Ql(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&n.push(ey(Ql(e)))}}function cy(r,e,n,s,l,c){const d=e.eventCache;if(Xl(s,n)!=null)return e;{let f,m;if(ue(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Fr(e),v=_ instanceof J?_:J.EMPTY_NODE,E=Md(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),E,c)}else{const _=Yl(s,Fr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),_,c)}else{const _=le(n);if(_===".priority"){M(cr(n)===1,"Can't have a priority with additional path components");const v=d.getNode();m=e.serverCache.getNode();const E=ug(s,n,v,m);E!=null?f=r.filter.updatePriority(v,E):f=d.getNode()}else{const v=Se(n);let E;if(d.isCompleteForChild(_)){m=e.serverCache.getNode();const w=ug(s,n,d.getNode(),m);w!=null?E=d.getNode().getImmediateChild(_).updateChild(v,w):E=d.getNode().getImmediateChild(_)}else E=jd(s,_,e.serverCache);E!=null?f=r.filter.updateChild(d.getNode(),_,E,v,l,c):f=d.getNode()}}return Ds(e,f,d.isFullyInitialized()||ue(n),r.filter.filtersNodes())}}function Jl(r,e,n,s,l,c,d,f){const m=e.serverCache;let _;const v=d?r.filter:r.filter.getIndexedFilter();if(ue(n))_=v.updateFullNode(m.getNode(),s,null);else if(v.filtersNodes()&&!m.isFiltered()){const T=m.getNode().updateChild(n,s);_=v.updateFullNode(m.getNode(),T,null)}else{const T=le(n);if(!m.isCompleteForPath(n)&&cr(n)>1)return e;const P=Se(n),j=m.getNode().getImmediateChild(T).updateChild(P,s);T===".priority"?_=v.updatePriority(m.getNode(),j):_=v.updateChild(m.getNode(),T,j,P,ay,null)}const E=ny(e,_,m.isFullyInitialized()||ue(n),v.filtersNodes()),w=new Ud(l,E,c);return cy(r,E,n,l,w,f)}function Xu(r,e,n,s,l,c,d){const f=e.eventCache;let m,_;const v=new Ud(l,e,c);if(ue(n))_=r.filter.updateFullNode(e.eventCache.getNode(),s,d),m=Ds(e,_,!0,r.filter.filtersNodes());else{const E=le(n);if(E===".priority")_=r.filter.updatePriority(e.eventCache.getNode(),s),m=Ds(e,_,f.isFullyInitialized(),f.isFiltered());else{const w=Se(n),T=f.getNode().getImmediateChild(E);let P;if(ue(w))P=s;else{const R=v.getCompleteChild(E);R!=null?Td(w)===".priority"&&R.getChild(K_(w)).isEmpty()?P=R:P=R.updateChild(w,s):P=J.EMPTY_NODE}if(T.equals(P))m=e;else{const R=r.filter.updateChild(f.getNode(),E,P,w,v,d);m=Ds(e,R,f.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function dg(r,e){return r.eventCache.isCompleteForChild(e)}function JS(r,e,n,s,l,c,d){let f=e;return s.foreach((m,_)=>{const v=Le(n,m);dg(e,le(v))&&(f=Xu(r,f,v,_,l,c,d))}),s.foreach((m,_)=>{const v=Le(n,m);dg(e,le(v))||(f=Xu(r,f,v,_,l,c,d))}),f}function hg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Ju(r,e,n,s,l,c,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,_;ue(n)?_=s:_=new Ce(null).setTree(n,s);const v=e.serverCache.getNode();return _.children.inorderTraversal((E,w)=>{if(v.hasChild(E)){const T=e.serverCache.getNode().getImmediateChild(E),P=hg(r,T,w);m=Jl(r,m,new we(E),P,l,c,d,f)}}),_.children.inorderTraversal((E,w)=>{const T=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!v.hasChild(E)&&!T){const P=e.serverCache.getNode().getImmediateChild(E),R=hg(r,P,w);m=Jl(r,m,new we(E),R,l,c,d,f)}}),m}function ZS(r,e,n,s,l,c,d){if(Xl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ue(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Jl(r,e,n,m.getNode().getChild(n),l,c,f,d);if(ue(n)){let _=new Ce(null);return m.getNode().forEachChild(Ci,(v,E)=>{_=_.set(new we(v),E)}),Ju(r,e,n,_,l,c,f,d)}else return e}else{let _=new Ce(null);return s.foreach((v,E)=>{const w=Le(n,v);m.isCompleteForPath(w)&&(_=_.set(v,m.getNode().getChild(w)))}),Ju(r,e,n,_,l,c,f,d)}}function eI(r,e,n,s,l){const c=e.serverCache,d=ny(e,c.getNode(),c.isFullyInitialized()||ue(n),c.isFiltered());return cy(r,d,n,s,ay,l)}function tI(r,e,n,s,l,c){let d;if(Xl(s,n)!=null)return e;{const f=new Ud(s,e,l),m=e.eventCache.getNode();let _;if(ue(n)||le(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Yl(s,Fr(e));else{const E=e.serverCache.getNode();M(E instanceof J,"serverChildren would be complete if leaf node"),v=Md(s,E)}v=v,_=r.filter.updateFullNode(m,v,c)}else{const v=le(n);let E=jd(s,v,e.serverCache);E==null&&e.serverCache.isCompleteForChild(v)&&(E=m.getImmediateChild(v)),E!=null?_=r.filter.updateChild(m,v,E,Se(n),f,c):e.eventCache.getNode().hasChild(v)?_=r.filter.updateChild(m,v,J.EMPTY_NODE,Se(n),f,c):_=m,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Yl(s,Fr(e)),d.isLeafNode()&&(_=r.filter.updateFullNode(_,d,c)))}return d=e.serverCache.isFullyInitialized()||Xl(s,me())!=null,Ds(e,_,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Ad(s.getIndex()),c=wS(s);this.processor_=qS(c);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(J.EMPTY_NODE,d.getNode(),null),_=c.updateFullNode(J.EMPTY_NODE,f.getNode(),null),v=new ur(m,d.isFullyInitialized(),l.filtersNodes()),E=new ur(_,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=ca(E,v),this.eventGenerator_=new TS(this.query_)}get query(){return this.query_}}function rI(r){return r.viewCache_.serverCache.getNode()}function iI(r){return Ql(r.viewCache_)}function sI(r,e){const n=Fr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function fg(r){return r.eventRegistrations_.length===0}function oI(r,e){r.eventRegistrations_.push(e)}function pg(r,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const d=c.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const d=r.eventRegistrations_[c];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function mg(r,e,n,s){e.type===Xt.MERGE&&e.source.queryId!==null&&(M(Fr(r.viewCache_),"We should always have a full cache before handling merges"),M(Ql(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=YS(r.processor_,l,e,n,s);return QS(r.processor_,c.viewCache),M(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,uy(r,c.changes,c.viewCache.eventCache.getNode(),null)}function lI(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(c,d)=>{s.push(ki(c,d))}),n.isFullyInitialized()&&s.push(ey(n.getNode())),uy(r,s,n.getNode(),e)}function uy(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return NS(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;class dy{constructor(){this.views=new Map}}function aI(r){M(!Zl,"__referenceConstructor has already been defined"),Zl=r}function cI(){return M(Zl,"Reference.ts has not been loaded"),Zl}function uI(r){return r.views.size===0}function Fd(r,e,n,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return M(c!=null,"SyncTree gave us an op for an invalid query."),mg(c,e,n,s)}else{let c=[];for(const d of r.views.values())c=c.concat(mg(d,e,n,s));return c}}function hy(r,e,n,s,l){const c=e._queryIdentifier,d=r.views.get(c);if(!d){let f=Yl(n,l?s:null),m=!1;f?m=!0:s instanceof J?(f=Md(n,s),m=!1):(f=J.EMPTY_NODE,m=!1);const _=ca(new ur(f,m,!1),new ur(s,l,!1));return new nI(e,_)}return d}function dI(r,e,n,s,l,c){const d=hy(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),oI(d,n),lI(d,n)}function hI(r,e,n,s){const l=e._queryIdentifier,c=[];let d=[];const f=dr(r);if(l==="default")for(const[m,_]of r.views.entries())d=d.concat(pg(_,n,s)),fg(_)&&(r.views.delete(m),_.query._queryParams.loadsAllData()||c.push(_.query));else{const m=r.views.get(l);m&&(d=d.concat(pg(m,n,s)),fg(m)&&(r.views.delete(l),m.query._queryParams.loadsAllData()||c.push(m.query)))}return f&&!dr(r)&&c.push(new(cI())(e._repo,e._path)),{removed:c,events:d}}function fy(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function lr(r,e){let n=null;for(const s of r.views.values())n=n||sI(s,e);return n}function py(r,e){if(e._queryParams.loadsAllData())return da(r);{const s=e._queryIdentifier;return r.views.get(s)}}function my(r,e){return py(r,e)!=null}function dr(r){return da(r)!=null}function da(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;function fI(r){M(!ea,"__referenceConstructor has already been defined"),ea=r}function pI(){return M(ea,"Reference.ts has not been loaded"),ea}let mI=1;class gg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=VS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gy(r,e,n,s,l){return bS(r.pendingWriteTree_,e,n,s,l),l?Di(r,new Ur(Od(),e,n)):[]}function gI(r,e,n,s){OS(r.pendingWriteTree_,e,n,s);const l=Ce.fromObject(n);return Di(r,new Ti(Od(),e,l))}function nr(r,e,n=!1){const s=DS(r.pendingWriteTree_,e);if(LS(r.pendingWriteTree_,e)){let c=new Ce(null);return s.snap!=null?c=c.set(me(),!0):st(s.children,d=>{c=c.set(new we(d),!0)}),Di(r,new ql(s.path,c,n))}else return[]}function lo(r,e,n){return Di(r,new Ur(Dd(),e,n))}function _I(r,e,n){const s=Ce.fromObject(n);return Di(r,new Ti(Dd(),e,s))}function yI(r,e){return Di(r,new Qs(Dd(),e))}function vI(r,e,n){const s=Bd(r,n);if(s){const l=Wd(s),c=l.path,d=l.queryId,f=mt(c,e),m=new Qs(Ld(d),f);return Hd(r,c,m)}else return[]}function ta(r,e,n,s,l=!1){const c=e._path,d=r.syncPointTree_.get(c);let f=[];if(d&&(e._queryIdentifier==="default"||my(d,e))){const m=hI(d,e,n,s);uI(d)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const _=m.removed;if(f=m.events,!l){const v=_.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=r.syncPointTree_.findOnPath(c,(w,T)=>dr(T));if(v&&!E){const w=r.syncPointTree_.subtree(c);if(!w.isEmpty()){const T=xI(w);for(let P=0;P<T.length;++P){const R=T[P],j=R.query,ee=wy(r,R);r.listenProvider_.startListening(Ms(j),Ys(r,j),ee.hashFn,ee.onComplete)}}}!E&&_.length>0&&!s&&(v?r.listenProvider_.stopListening(Ms(e),null):_.forEach(w=>{const T=r.queryToTagMap.get(ha(w));r.listenProvider_.stopListening(Ms(w),T)}))}CI(r,_)}return f}function _y(r,e,n,s){const l=Bd(r,s);if(l!=null){const c=Wd(l),d=c.path,f=c.queryId,m=mt(d,e),_=new Ur(Ld(f),m,n);return Hd(r,d,_)}else return[]}function wI(r,e,n,s){const l=Bd(r,s);if(l){const c=Wd(l),d=c.path,f=c.queryId,m=mt(d,e),_=Ce.fromObject(n),v=new Ti(Ld(f),m,_);return Hd(r,d,v)}else return[]}function Zu(r,e,n,s=!1){const l=e._path;let c=null,d=!1;r.syncPointTree_.foreachOnPath(l,(w,T)=>{const P=mt(w,l);c=c||lr(T,P),d=d||dr(T)});let f=r.syncPointTree_.get(l);f?(d=d||dr(f),c=c||lr(f,me())):(f=new dy,r.syncPointTree_=r.syncPointTree_.set(l,f));let m;c!=null?m=!0:(m=!1,c=J.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((T,P)=>{const R=lr(P,me());R&&(c=c.updateImmediateChild(T,R))}));const _=my(f,e);if(!_&&!e._queryParams.loadsAllData()){const w=ha(e);M(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const T=SI();r.queryToTagMap.set(w,T),r.tagToQueryMap.set(T,w)}const v=ua(r.pendingWriteTree_,l);let E=dI(f,e,n,v,c,m);if(!_&&!d&&!s){const w=py(f,e);E=E.concat(II(r,e,w))}return E}function zd(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(d,f)=>{const m=mt(d,e),_=lr(f,m);if(_)return _});return sy(l,e,c,n,!0)}function EI(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(_,v)=>{const E=mt(_,n);s=s||lr(v,E)});let l=r.syncPointTree_.get(n);l?s=s||lr(l,me()):(l=new dy,r.syncPointTree_=r.syncPointTree_.set(n,l));const c=s!=null,d=c?new ur(s,!0,!1):null,f=ua(r.pendingWriteTree_,e._path),m=hy(l,e,f,c?d.getNode():J.EMPTY_NODE,c);return iI(m)}function Di(r,e){return yy(e,r.syncPointTree_,null,ua(r.pendingWriteTree_,me()))}function yy(r,e,n,s){if(ue(r.path))return vy(r,e,n,s);{const l=e.get(me());n==null&&l!=null&&(n=lr(l,me()));let c=[];const d=le(r.path),f=r.operationForChild(d),m=e.children.get(d);if(m&&f){const _=n?n.getImmediateChild(d):null,v=oy(s,d);c=c.concat(yy(f,m,_,v))}return l&&(c=c.concat(Fd(l,r,s,n))),c}}function vy(r,e,n,s){const l=e.get(me());n==null&&l!=null&&(n=lr(l,me()));let c=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,_=oy(s,d),v=r.operationForChild(d);v&&(c=c.concat(vy(v,f,m,_)))}),l&&(c=c.concat(Fd(l,r,s,n))),c}function wy(r,e){const n=e.query,s=Ys(r,n);return{hashFn:()=>(rI(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?vI(r,n._path,s):yI(r,n._path);{const c=yC(l,n);return ta(r,n,null,c)}}}}function Ys(r,e){const n=ha(e);return r.queryToTagMap.get(n)}function ha(r){return r._path.toString()+"$"+r._queryIdentifier}function Bd(r,e){return r.tagToQueryMap.get(e)}function Wd(r){const e=r.indexOf("$");return M(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new we(r.substr(0,e))}}function Hd(r,e,n){const s=r.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const l=ua(r.pendingWriteTree_,e);return Fd(s,n,l,null)}function xI(r){return r.fold((e,n,s)=>{if(n&&dr(n))return[da(n)];{let l=[];return n&&(l=fy(n)),st(s,(c,d)=>{l=l.concat(d)}),l}})}function Ms(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(pI())(r._repo,r._path):r}function CI(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=ha(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function SI(){return mI++}function II(r,e,n){const s=e._path,l=Ys(r,e),c=wy(r,n),d=r.listenProvider_.startListening(Ms(e),l,c.hashFn,c.onComplete),f=r.syncPointTree_.subtree(s);if(l)M(!dr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((_,v,E)=>{if(!ue(_)&&v&&dr(v))return[da(v).query];{let w=[];return v&&(w=w.concat(fy(v).map(T=>T.query))),st(E,(T,P)=>{w=w.concat(P)}),w}});for(let _=0;_<m.length;++_){const v=m[_];r.listenProvider_.stopListening(Ms(v),Ys(r,v))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vd(n)}node(){return this.node_}}class $d{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new $d(this.syncTree_,n)}node(){return zd(this.syncTree_,this.path_)}}const kI=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},_g=function(r,e,n){if(!r||typeof r!="object")return r;if(M(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return TI(r[".sv"],e,n);if(typeof r[".sv"]=="object")return NI(r[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},TI=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+r)}},NI=function(r,e,n){r.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const l=e.node();if(M(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},Ey=function(r,e,n,s){return Gd(e,new $d(n,r),s)},xy=function(r,e,n){return Gd(r,new Vd(e),n)};function Gd(r,e,n){const s=r.getPriority().val(),l=_g(s,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const d=r,f=_g(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new et(f,Ke(l)):r}else{const d=r;return c=d,l!==d.getPriority().val()&&(c=c.updatePriority(new et(l))),d.forEachChild(Me,(f,m)=>{const _=Gd(m,e.getImmediateChild(f),n);_!==m&&(c=c.updateImmediateChild(f,_))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function qd(r,e){let n=e instanceof we?e:new we(e),s=r,l=le(n);for(;l!==null;){const c=Si(s.node.children,l)||{children:{},childCount:0};s=new Kd(l,s,c),n=Se(n),l=le(n)}return s}function Li(r){return r.node.value}function Cy(r,e){r.node.value=e,ed(r)}function Sy(r){return r.node.childCount>0}function RI(r){return Li(r)===void 0&&!Sy(r)}function fa(r,e){st(r.node.children,(n,s)=>{e(new Kd(n,r,s))})}function Iy(r,e,n,s){n&&e(r),fa(r,l=>{Iy(l,e,!0)})}function PI(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ao(r){return new we(r.parent===null?r.name:ao(r.parent)+"/"+r.name)}function ed(r){r.parent!==null&&AI(r.parent,r.name,r)}function AI(r,e,n){const s=RI(n),l=dn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,ed(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,ed(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=/[\[\].#$\/\u0000-\u001F\u007F]/,OI=/[\[\].#$\u0000-\u001F\u007F]/,Pu=10*1024*1024,Qd=function(r){return typeof r=="string"&&r.length!==0&&!bI.test(r)},ky=function(r){return typeof r=="string"&&r.length!==0&&!OI.test(r)},DI=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),ky(r)},LI=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!xd(r)||r&&typeof r=="object"&&dn(r,".sv")},MI=function(r,e,n,s){pa(na(r,"value"),e,n)},pa=function(r,e,n){const s=n instanceof we?new JC(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Rr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Rr(s)+" with contents = "+e.toString());if(xd(e))throw new Error(r+"contains "+e.toString()+" "+Rr(s));if(typeof e=="string"&&e.length>Pu/3&&ra(e)>Pu)throw new Error(r+"contains a string greater than "+Pu+" utf8 bytes "+Rr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(st(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(c=!0,!Qd(d)))throw new Error(r+" contains an invalid key ("+d+") "+Rr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZC(s,d),pa(r,f,s),eS(s)}),l&&c)throw new Error(r+' contains ".value" child '+Rr(s)+" in addition to actual children.")}},jI=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const c=$s(s);for(let d=0;d<c.length;d++)if(!(c[d]===".priority"&&d===c.length-1)){if(!Qd(c[d]))throw new Error(r+"contains an invalid key ("+c[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XC);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Ft(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},UI=function(r,e,n,s){const l=na(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];st(e,(d,f)=>{const m=new we(d);if(pa(l,f,Le(n,m)),Td(m)===".priority"&&!LI(f))throw new Error(l+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(m)}),jI(l,c)},Ty=function(r,e,n,s){if(!ky(n))throw new Error(na(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FI=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ty(r,e,n)},Ny=function(r,e){if(le(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},zI=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DI(n))throw new Error(na(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ma(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();n!==null&&!Nd(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function Ry(r,e,n){ma(r,n),Py(r,s=>Nd(s,e))}function zt(r,e,n){ma(r,n),Py(r,s=>Ft(s,e)||Ft(e,s))}function Py(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(WI(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function WI(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();bs&&it("event: "+n.toString()),Oi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="repo_interrupt",VI=25;class $I{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kl(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GI(r,e,n){if(r.stats_=Id(r.repoInfo_),r.forceRestClient_||xC())r.server_=new Gl(r.repoInfo_,(s,l,c,d)=>{yg(r,s,l,c,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>vg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(s,l,c,d)=>{yg(r,s,l,c,d)},s=>{vg(r,s)},s=>{qI(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=TC(r.repoInfo_,()=>new kS(r.stats_,r.server_)),r.infoData_=new ES,r.infoSyncTree_=new gg({startListening:(s,l,c,d)=>{let f=[];const m=r.infoData_.getNode(s._path);return m.isEmpty()||(f=lo(r.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),Yd(r,"connected",!1),r.serverSyncTree_=new gg({startListening:(s,l,c,d)=>(r.server_.listen(s,c,l,(f,m)=>{const _=d(f,m);zt(r.eventQueue_,s._path,_)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function KI(r){const n=r.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ga(r){return kI({timestamp:KI(r)})}function yg(r,e,n,s,l){r.dataUpdateCount++;const c=new we(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=Ll(n,_=>Ke(_));d=wI(r.serverSyncTree_,c,m,l)}else{const m=Ke(n);d=_y(r.serverSyncTree_,c,m,l)}else if(s){const m=Ll(n,_=>Ke(_));d=_I(r.serverSyncTree_,c,m)}else{const m=Ke(n);d=lo(r.serverSyncTree_,c,m)}let f=c;d.length>0&&(f=Ri(r,c)),zt(r.eventQueue_,f,d)}function vg(r,e){Yd(r,"connected",e),e===!1&&JI(r)}function qI(r,e){st(e,(n,s)=>{Yd(r,n,s)})}function Yd(r,e,n){const s=new we("/.info/"+e),l=Ke(n);r.infoData_.updateSnapshot(s,l);const c=lo(r.infoSyncTree_,s,l);zt(r.eventQueue_,s,c)}function Xd(r){return r.nextWriteId_++}function QI(r,e,n){const s=EI(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const c=Ke(l).withIndex(e._queryParams.getIndex());Zu(r.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=lo(r.serverSyncTree_,e._path,c);else{const f=Ys(r.serverSyncTree_,e);d=_y(r.serverSyncTree_,e._path,c,f)}return zt(r.eventQueue_,e._path,d),ta(r.serverSyncTree_,e,n,null,!0),c},l=>(co(r,"get for query "+qe(e)+" failed: "+l),Promise.reject(new Error(l))))}function YI(r,e,n,s,l){co(r,"set",{path:e.toString(),value:n,priority:s});const c=ga(r),d=Ke(n,s),f=zd(r.serverSyncTree_,e),m=xy(d,f,c),_=Xd(r),v=gy(r.serverSyncTree_,e,m,_,!0);ma(r.eventQueue_,v),r.server_.put(e.toString(),d.val(!0),(w,T)=>{const P=w==="ok";P||gt("set at "+e+" failed: "+w);const R=nr(r.serverSyncTree_,_,!P);zt(r.eventQueue_,e,R),td(r,l,w,T)});const E=Zd(r,e);Ri(r,E),zt(r.eventQueue_,E,[])}function XI(r,e,n,s){co(r,"update",{path:e.toString(),value:n});let l=!0;const c=ga(r),d={};if(st(n,(f,m)=>{l=!1,d[f]=Ey(Le(e,f),Ke(m),r.serverSyncTree_,c)}),l)it("update() called with empty data.  Don't do anything."),td(r,s,"ok",void 0);else{const f=Xd(r),m=gI(r.serverSyncTree_,e,d,f);ma(r.eventQueue_,m),r.server_.merge(e.toString(),n,(_,v)=>{const E=_==="ok";E||gt("update at "+e+" failed: "+_);const w=nr(r.serverSyncTree_,f,!E),T=w.length>0?Ri(r,e):e;zt(r.eventQueue_,T,w),td(r,s,_,v)}),st(n,_=>{const v=Zd(r,Le(e,_));Ri(r,v)}),zt(r.eventQueue_,e,[])}}function JI(r){co(r,"onDisconnectEvents");const e=ga(r),n=Kl();Ku(r.onDisconnect_,me(),(l,c)=>{const d=Ey(l,c,r.serverSyncTree_,e);ty(n,l,d)});let s=[];Ku(n,me(),(l,c)=>{s=s.concat(lo(r.serverSyncTree_,l,c));const d=Zd(r,l);Ri(r,d)}),r.onDisconnect_=Kl(),zt(r.eventQueue_,me(),s)}function ZI(r,e,n){let s;le(e._path)===".info"?s=Zu(r.infoSyncTree_,e,n):s=Zu(r.serverSyncTree_,e,n),Ry(r.eventQueue_,e._path,s)}function ek(r,e,n){let s;le(e._path)===".info"?s=ta(r.infoSyncTree_,e,n):s=ta(r.serverSyncTree_,e,n),Ry(r.eventQueue_,e._path,s)}function tk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(HI)}function co(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),it(n,...e)}function td(r,e,n,s){e&&Oi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;s&&(c+=": "+s);const d=new Error(c);d.code=l,e(d)}})}function Ay(r,e,n){return zd(r.serverSyncTree_,e,n)||J.EMPTY_NODE}function Jd(r,e=r.transactionQueueTree_){if(e||_a(r,e),Li(e)){const n=Oy(r,e);M(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&nk(r,ao(e),n)}else Sy(e)&&fa(e,n=>{Jd(r,n)})}function nk(r,e,n){const s=n.map(_=>_.currentWriteId),l=Ay(r,e,s);let c=l;const d=l.hash();for(let _=0;_<n.length;_++){const v=n[_];M(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=mt(e,v.path);c=c.updateChild(E,v.currentOutputSnapshotRaw)}const f=c.val(!0),m=e;r.server_.put(m.toString(),f,_=>{co(r,"transaction put response",{path:m.toString(),status:_});let v=[];if(_==="ok"){const E=[];for(let w=0;w<n.length;w++)n[w].status=2,v=v.concat(nr(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&E.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();_a(r,qd(r.transactionQueueTree_,e)),Jd(r,r.transactionQueueTree_),zt(r.eventQueue_,e,v);for(let w=0;w<E.length;w++)Oi(E[w])}else{if(_==="datastale")for(let E=0;E<n.length;E++)n[E].status===3?n[E].status=4:n[E].status=0;else{gt("transaction at "+m.toString()+" failed: "+_);for(let E=0;E<n.length;E++)n[E].status=4,n[E].abortReason=_}Ri(r,e)}},d)}function Ri(r,e){const n=by(r,e),s=ao(n),l=Oy(r,n);return rk(r,l,s),s}function rk(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],_=mt(n,m.path);let v=!1,E;if(M(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,E=m.abortReason,l=l.concat(nr(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=VI)v=!0,E="maxretry",l=l.concat(nr(r.serverSyncTree_,m.currentWriteId,!0));else{const w=Ay(r,m.path,d);m.currentInputSnapshot=w;const T=e[f].update(w.val());if(T!==void 0){pa("transaction failed: Data returned ",T,m.path);let P=Ke(T);typeof T=="object"&&T!=null&&dn(T,".priority")||(P=P.updatePriority(w.getPriority()));const j=m.currentWriteId,ee=ga(r),ie=xy(P,w,ee);m.currentOutputSnapshotRaw=P,m.currentOutputSnapshotResolved=ie,m.currentWriteId=Xd(r),d.splice(d.indexOf(j),1),l=l.concat(gy(r.serverSyncTree_,m.path,ie,m.currentWriteId,m.applyLocally)),l=l.concat(nr(r.serverSyncTree_,j,!0))}else v=!0,E="nodata",l=l.concat(nr(r.serverSyncTree_,m.currentWriteId,!0))}zt(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(E==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(E),!1,null))))}_a(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Oi(s[f]);Jd(r,r.transactionQueueTree_)}function by(r,e){let n,s=r.transactionQueueTree_;for(n=le(e);n!==null&&Li(s)===void 0;)s=qd(s,n),e=Se(e),n=le(e);return s}function Oy(r,e){const n=[];return Dy(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Dy(r,e,n){const s=Li(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);fa(e,l=>{Dy(r,l,n)})}function _a(r,e){const n=Li(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Cy(e,n.length>0?n:void 0)}fa(e,s=>{_a(r,s)})}function Zd(r,e){const n=ao(by(r,e)),s=qd(r.transactionQueueTree_,e);return PI(s,l=>{Au(r,l)}),Au(r,s),Iy(s,l=>{Au(r,l)}),n}function Au(r,e){const n=Li(e);if(n){const s=[];let l=[],c=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(M(c===d-1,"All SENT items should be at beginning of queue."),c=d,n[d].status=3,n[d].abortReason="set"):(M(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(nr(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Cy(e,void 0):n.length=c+1,zt(r.eventQueue_,ao(e),l);for(let d=0;d<s.length;d++)Oi(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function sk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):gt(`Invalid query segment '${n}' in query '${r}'`)}return e}const wg=function(r,e){const n=ok(r),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fC();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new U_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new we(n.pathString)}},ok=function(r){let e="",n="",s="",l="",c="",d=!0,f="https",m=443;if(typeof r=="string"){let _=r.indexOf("//");_>=0&&(f=r.substring(0,_-1),r=r.substring(_+2));let v=r.indexOf("/");v===-1&&(v=r.length);let E=r.indexOf("?");E===-1&&(E=r.length),e=r.substring(0,Math.min(v,E)),v<E&&(l=ik(r.substring(v,E)));const w=sk(r.substring(Math.min(r.length,E)));_=e.indexOf(":"),_>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(_+1),10)):_=e.length;const T=e.slice(0,_);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),n=e.substring(P+1),c=s}"ns"in w&&(c=w.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class ak{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ue(this._path)?null:Td(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=og(this._queryParams),n=Cd(e);return n==="{}"?"default":n}get _queryObject(){return og(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof eh))return!1;const n=this._repo===e._repo,s=Nd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+YC(this._path)}}class Rn extends eh{constructor(e,n){super(e,n,new bd,!1)}get parent(){const e=K_(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),s=nd(this.ref,e);return new Xs(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Xs(l,nd(this.ref,s),Me)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ut(r,e){return r=Qe(r),r._checkNotDeleted("ref"),e!==void 0?nd(r._root,e):r._root}function nd(r,e){return r=Qe(r),le(r._path)===null?FI("child","path",e):Ty("child","path",e),new Rn(r._repo,Le(r._path,e))}function ck(r){return Ny("remove",r._path),My(r,null)}function My(r,e){r=Qe(r),Ny("set",r._path),MI("set",e,r._path);const n=new Js;return YI(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function Yn(r,e){UI("update",e,r._path);const n=new Js;return XI(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function jy(r){r=Qe(r);const e=new Ly(()=>{}),n=new ya(e);return QI(r._repo,r,n).then(s=>new Xs(s,new Rn(r._repo,r._path),r._queryParams.getIndex()))}class ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new lk("value",this,new Xs(e.snapshotNode,new Rn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ak(this,e,n):null}matches(e){return e instanceof ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uk(r,e,n,s,l){const c=new Ly(n,void 0),d=new ya(c);return ZI(r._repo,r,d),()=>ek(r._repo,r,d)}function bl(r,e,n,s){return uk(r,"value",e)}aI(Rn);fI(Rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="FIREBASE_DATABASE_EMULATOR_HOST",rd={};let hk=!1;function fk(r,e,n,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),d=hr(c);r.repoInfo_=new U_(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function pk(r,e,n,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=wg(c,l),f=d.repoInfo,m;typeof process<"u"&&Wm&&(m=Wm[dk]),m?(c=`http://${m}?ns=${f.namespace}`,d=wg(c,l),f=d.repoInfo):d.repoInfo.secure;const _=new SC(r.name,r.options,e);zI("Invalid Firebase Database URL",d),ue(d.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=gk(f,r,_,new CC(r,n));return new _k(v,r)}function mk(r,e){const n=rd[e];(!n||n[r.key]!==r)&&Tn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),tk(r),delete n[r.key]}function gk(r,e,n,s){let l=rd[e.name];l||(l={},rd[e.name]=l);let c=l[r.toURLString()];return c&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new $I(r,hk,n,s),l[r.toURLString()]=c,c}class _k{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function yk(r=fd(),e){const n=ia(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Og("database");s&&vk(n,...s)}return n}function vk(r,e,n,s={}){r=Qe(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Or(s,c.repoInfo_.emulatorOptions))return;Tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Al(Al.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Mg(s.mockUserToken,r.app.options.projectId);d=new Al(f)}hr(e)&&(ad(e),cd("Database",!0)),fk(c,l,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(r){lC(Br),Dr(new ar("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return pk(s,l,c,n)},"PUBLIC").setMultipleInstances(!0)),an(Hm,Vm,r),an(Hm,Vm,"esm2020")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};wk();var Ek="firebase",xk="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(Ek,xk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="firebasestorage.googleapis.com",Fy="storageBucket",Ck=120*1e3,Sk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Nn{constructor(e,n,s=0){super(bu(e),`Firebase Storage: ${n} (${bu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function bu(r){return"storage/"+r}function th(){const r="An unknown error occurred, please check the error payload for server response.";return new Ue(je.UNKNOWN,r)}function Ik(r){return new Ue(je.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function kk(r){return new Ue(je.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Tk(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(je.UNAUTHENTICATED,r)}function Nk(){return new Ue(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rk(r){return new Ue(je.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function Pk(){return new Ue(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ak(){return new Ue(je.CANCELED,"User canceled the upload/download.")}function bk(r){return new Ue(je.INVALID_URL,"Invalid URL '"+r+"'.")}function Ok(r){return new Ue(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Dk(){return new Ue(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fy+"' property when initializing the app?")}function Lk(){return new Ue(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mk(){return new Ue(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jk(r){return new Ue(je.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function id(r){return new Ue(je.INVALID_ARGUMENT,r)}function zy(){return new Ue(je.APP_DELETED,"The Firebase app was deleted.")}function Uk(r){return new Ue(je.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function js(r,e){return new Ue(je.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function ks(r){throw new Ue(je.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=bt.makeFromUrl(e,n)}catch{return new bt(e,"")}if(s.path==="")return s;throw Ok(e)}static makeFromUrl(e,n){let s=null;const l="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const d="(/(.*))?$",f=new RegExp("^gs://"+l+d,"i"),m={bucket:1,path:3};function _(F){F.path_=decodeURIComponent(F.path)}const v="v[A-Za-z0-9_]+",E=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",T=new RegExp(`^https?://${E}/${v}/b/${l}/o${w}`,"i"),P={bucket:1,path:3},R=n===Uy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,j="([^?#]*)",ee=new RegExp(`^https?://${R}/${l}/${j}`,"i"),G=[{regex:f,indices:m,postModify:c},{regex:T,indices:P,postModify:_},{regex:ee,indices:{bucket:1,path:2},postModify:_}];for(let F=0;F<G.length;F++){const ne=G[F],U=ne.regex.exec(e);if(U){const re=U[ne.indices.bucket];let ye=U[ne.indices.path];ye||(ye=""),s=new bt(re,ye),ne.postModify(s);break}}if(s==null)throw bk(e);return s}}class Fk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(r,e,n){let s=1,l=null,c=null,d=!1,f=0;function m(){return f===2}let _=!1;function v(...j){_||(_=!0,e.apply(null,j))}function E(j){l=setTimeout(()=>{l=null,r(T,m())},j)}function w(){c&&clearTimeout(c)}function T(j,...ee){if(_){w();return}if(j){w(),v.call(null,j,...ee);return}if(m()||d){w(),v.call(null,j,...ee);return}s<64&&(s*=2);let G;f===1?(f=2,G=0):G=(s+Math.random())*1e3,E(G)}let P=!1;function R(j){P||(P=!0,w(),!_&&(l!==null?(j||(f=2),clearTimeout(l),E(0)):j||(f=1)))}return E(0),c=setTimeout(()=>{d=!0,R(!0)},n),R}function Bk(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(r){return r!==void 0}function Hk(r){return typeof r=="object"&&!Array.isArray(r)}function nh(r){return typeof r=="string"||r instanceof String}function Eg(r){return rh()&&r instanceof Blob}function rh(){return typeof Blob<"u"}function xg(r,e,n,s){if(s<e)throw id(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw id(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(r,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${r}`}function By(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const l=e(s)+"="+e(r[s]);n=n+l+"&"}return n=n.slice(0,-1),n}var Ar;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ar||(Ar={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(r,e){const n=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,c=e.indexOf(r)!==-1;return n||l||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,s,l,c,d,f,m,_,v,E,w=!0,T=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=d,this.callback_=f,this.errorCallback_=m,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=E,this.retry=w,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,R)=>{this.resolve_=P,this.reject_=R,this.start_()})}start_(){const e=(s,l)=>{if(l){s(!1,new Il(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const d=f=>{const m=f.loaded,_=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,_)};this.progressCallback_!==null&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(d),this.pendingConnection_=null;const f=c.getErrorCode()===Ar.NO_ERROR,m=c.getStatus();if(!f||Vk(m,this.additionalRetryCodes_)&&this.retry){const v=c.getErrorCode()===Ar.ABORT;s(!1,new Il(!1,null,v));return}const _=this.successCodes_.indexOf(m)!==-1;s(!0,new Il(_,c))})},n=(s,l)=>{const c=this.resolve_,d=this.reject_,f=l.connection;if(l.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());Wk(m)?c(m):c()}catch(m){d(m)}else if(f!==null){const m=th();m.serverResponse=f.getErrorText(),this.errorCallback_?d(this.errorCallback_(f,m)):d(m)}else if(l.canceled){const m=this.appDelete_?zy():Ak();d(m)}else{const m=Pk();d(m)}};this.canceled_?n(!1,new Il(!1,null,!0)):this.backoffId_=zk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Bk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Il{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Gk(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function Kk(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qk(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Qk(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function Yk(r,e,n,s,l,c,d=!0,f=!1){const m=By(r.urlParams),_=r.url+m,v=Object.assign({},r.headers);return qk(v,e),Gk(v,n),Kk(v,c),Qk(v,s),new $k(_,r.method,v,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,d,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jk(...r){const e=Xk();if(e!==void 0){const n=new e;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(rh())return new Blob(r);throw new Ue(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zk(r,e,n){return r.webkitSlice?r.webkitSlice(e,n):r.mozSlice?r.mozSlice(e,n):r.slice?r.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(r){if(typeof atob>"u")throw jk("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ou{constructor(e,n){this.data=e,this.contentType=n||null}}function tT(r,e){switch(r){case ln.RAW:return new Ou(Wy(e));case ln.BASE64:case ln.BASE64URL:return new Ou(Hy(r,e));case ln.DATA_URL:return new Ou(rT(e),iT(e))}throw th()}function Wy(r){const e=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const c=s,d=r.charCodeAt(++n);s=65536|(c&1023)<<10|d&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function nT(r){let e;try{e=decodeURIComponent(r)}catch{throw js(ln.DATA_URL,"Malformed data URL.")}return Wy(e)}function Hy(r,e){switch(r){case ln.BASE64:{const l=e.indexOf("-")!==-1,c=e.indexOf("_")!==-1;if(l||c)throw js(r,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const l=e.indexOf("+")!==-1,c=e.indexOf("/")!==-1;if(l||c)throw js(r,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eT(e)}catch(l){throw l.message.includes("polyfill")?l:js(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s}class Vy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw js(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=sT(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function rT(r){const e=new Vy(r);return e.base64?Hy(ln.BASE64,e.rest):nT(e.rest)}function iT(r){return new Vy(r).contentType}function sT(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){let s=0,l="";Eg(e)?(this.data_=e,s=e.size,l=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=l}size(){return this.size_}type(){return this.type_}slice(e,n){if(Eg(this.data_)){const s=this.data_,l=Zk(s,e,n);return l===null?null:new tr(l)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new tr(s,!0)}}static getBlob(...e){if(rh()){const n=e.map(s=>s instanceof tr?s.data_:s);return new tr(Jk.apply(null,n))}else{const n=e.map(d=>nh(d)?tT(ln.RAW,d).data:d.data_);let s=0;n.forEach(d=>{s+=d.byteLength});const l=new Uint8Array(s);let c=0;return n.forEach(d=>{for(let f=0;f<d.length;f++)l[c++]=d[f]}),new tr(l,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(r){let e;try{e=JSON.parse(r)}catch{return null}return Hk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function lT(r,e){const n=e.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function Gy(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(r,e){return e}class pt{constructor(e,n,s,l){this.server=e,this.local=n||e,this.writable=!!s,this.xform=l||aT}}let kl=null;function cT(r){return!nh(r)||r.length<2?r:Gy(r)}function Ky(){if(kl)return kl;const r=[];r.push(new pt("bucket")),r.push(new pt("generation")),r.push(new pt("metageneration")),r.push(new pt("name","fullPath",!0));function e(c,d){return cT(d)}const n=new pt("name");n.xform=e,r.push(n);function s(c,d){return d!==void 0?Number(d):d}const l=new pt("size");return l.xform=s,r.push(l),r.push(new pt("timeCreated")),r.push(new pt("updated")),r.push(new pt("md5Hash",null,!0)),r.push(new pt("cacheControl",null,!0)),r.push(new pt("contentDisposition",null,!0)),r.push(new pt("contentEncoding",null,!0)),r.push(new pt("contentLanguage",null,!0)),r.push(new pt("contentType",null,!0)),r.push(new pt("metadata","customMetadata",!0)),kl=r,kl}function uT(r,e){function n(){const s=r.bucket,l=r.fullPath,c=new bt(s,l);return e._makeStorageReference(c)}Object.defineProperty(r,"ref",{get:n})}function dT(r,e,n){const s={};s.type="file";const l=n.length;for(let c=0;c<l;c++){const d=n[c];s[d.local]=d.xform(s,e[d.server])}return uT(s,r),s}function qy(r,e,n){const s=$y(e);return s===null?null:dT(r,s,n)}function hT(r,e,n,s){const l=$y(e);if(l===null||!nh(l.downloadTokens))return null;const c=l.downloadTokens;if(c.length===0)return null;const d=encodeURIComponent;return c.split(",").map(_=>{const v=r.bucket,E=r.fullPath,w="/b/"+d(v)+"/o/"+d(E),T=ih(w,n,s),P=By({alt:"media",token:_});return T+P})[0]}function fT(r,e){const n={},s=e.length;for(let l=0;l<s;l++){const c=e[l];c.writable&&(n[c.server]=r[c.local])}return JSON.stringify(n)}class Qy{constructor(e,n,s,l){this.url=e,this.method=n,this.handler=s,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(r){if(!r)throw th()}function pT(r,e){function n(s,l){const c=qy(r,l,e);return Yy(c!==null),c}return n}function mT(r,e){function n(s,l){const c=qy(r,l,e);return Yy(c!==null),hT(c,l,r.host,r._protocol)}return n}function Xy(r){function e(n,s){let l;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?l=Nk():l=Tk():n.getStatus()===402?l=kk(r.bucket):n.getStatus()===403?l=Rk(r.path):l=s,l.status=n.getStatus(),l.serverResponse=s.serverResponse,l}return e}function gT(r){const e=Xy(r);function n(s,l){let c=e(s,l);return s.getStatus()===404&&(c=Ik(r.path)),c.serverResponse=l.serverResponse,c}return n}function _T(r,e,n){const s=e.fullServerUrl(),l=ih(s,r.host,r._protocol),c="GET",d=r.maxOperationRetryTime,f=new Qy(l,c,mT(r,n),d);return f.errorHandler=gT(e),f}function yT(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function vT(r,e,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=e.size(),s.contentType||(s.contentType=yT(null,e)),s}function wT(r,e,n,s,l){const c=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function f(){let G="";for(let F=0;F<2;F++)G=G+Math.random().toString().slice(2);return G}const m=f();d["Content-Type"]="multipart/related; boundary="+m;const _=vT(e,s,l),v=fT(_,n),E="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+m+`\r
Content-Type: `+_.contentType+`\r
\r
`,w=`\r
--`+m+"--",T=tr.getBlob(E,s,w);if(T===null)throw Lk();const P={name:_.fullPath},R=ih(c,r.host,r._protocol),j="POST",ee=r.maxUploadRetryTime,ie=new Qy(R,j,pT(r,n),ee);return ie.urlParams=P,ie.headers=d,ie.body=T.uploadData(),ie.errorHandler=Xy(e),ie}class ET{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,l,c){if(this.sent_)throw ks("cannot .send() more than once");if(hr(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),c!==void 0)for(const d in c)c.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,c[d].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ks("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ks("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ks("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ks("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xT extends ET{initXhr(){this.xhr_.responseType="text"}}function Jy(){return new xT}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this._service=e,n instanceof bt?this._location=n:this._location=bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zr(e,n)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gy(this._location.path)}get storage(){return this._service}get parent(){const e=oT(this._location.path);if(e===null)return null;const n=new bt(this._location.bucket,e);return new zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Uk(e)}}function CT(r,e,n){r._throwIfRoot("uploadBytes");const s=wT(r.storage,r._location,Ky(),new tr(e,!0),n);return r.storage.makeRequestWithTokens(s,Jy).then(l=>({metadata:l,ref:r}))}function ST(r){r._throwIfRoot("getDownloadURL");const e=_T(r.storage,r._location,Ky());return r.storage.makeRequestWithTokens(e,Jy).then(n=>{if(n===null)throw Mk();return n})}function IT(r,e){const n=lT(r._location.path,e),s=new bt(r._location.bucket,n);return new zr(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(r){return/^[A-Za-z]+:\/\//.test(r)}function TT(r,e){return new zr(r,e)}function Zy(r,e){if(r instanceof sh){const n=r;if(n._bucket==null)throw Dk();const s=new zr(n,n._bucket);return e!=null?Zy(s,e):s}else return e!==void 0?IT(r,e):r}function NT(r,e){if(e&&kT(e)){if(r instanceof sh)return TT(r,e);throw id("To use ref(service, url), the first argument must be a Storage instance.")}else return Zy(r,e)}function Cg(r,e){const n=e?.[Fy];return n==null?null:bt.makeFromBucketSpec(n,r)}function RT(r,e,n,s={}){r.host=`${e}:${n}`;const l=hr(e);l&&(ad(`https://${r.host}/b`),cd("Storage",!0)),r._isUsingEmulator=!0,r._protocol=l?"https":"http";const{mockUserToken:c}=s;c&&(r._overrideAuthToken=typeof c=="string"?c:Mg(c,r.app.options.projectId))}class sh{constructor(e,n,s,l,c,d=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=d,this._bucket=null,this._host=Uy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ck,this._maxUploadRetryTime=Sk,this._requests=new Set,l!=null?this._bucket=bt.makeFromBucketSpec(l,this._host):this._bucket=Cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=Cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zr(this,e)}_makeRequest(e,n,s,l,c=!0){if(this._deleted)return new Fk(zy());{const d=Yk(e,this._appId,s,l,n,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,n){const[s,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,l).getPromise()}}const Sg="@firebase/storage",Ig="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="storage";function PT(r,e,n){return r=Qe(r),CT(r,e,n)}function AT(r){return r=Qe(r),ST(r)}function bT(r,e){return r=Qe(r),NT(r,e)}function OT(r=fd(),e){r=Qe(r);const s=ia(r,ev).getImmediate({identifier:e}),l=Og("storage");return l&&DT(s,...l),s}function DT(r,e,n,s={}){RT(r,e,n,s)}function LT(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new sh(n,s,l,e,Br)}function MT(){Dr(new ar(ev,LT,"PUBLIC").setMultipleInstances(!0)),an(Sg,Ig,""),an(Sg,Ig,"esm2020")}MT();const jT={apiKey:"AIzaSyA5d1rWrn9C9x5slkvkLQXW29JiMXoMSeg",authDomain:"tasktracker-e2329.firebaseapp.com",databaseURL:"https://tasktracker-e2329-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tasktracker-e2329",storageBucket:"tasktracker-e2329.firebasestorage.app",messagingSenderId:"1044567656792",appId:"1:1044567656792:web:58a8e5f942f1ac66213d2d",measurementId:"G-VNRBNZ4R28"},oh=Bg(jT),rr=sC(oh),dt=yk(oh),UT=OT(oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zT=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),kg=r=>{const e=zT(r);return e.charAt(0).toUpperCase()+e.slice(1)},tv=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var BT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=te.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...f},m)=>te.createElement("svg",{ref:m,...BT,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:tv("lucide",l),...f},[...d.map(([_,v])=>te.createElement(_,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(r,e)=>{const n=te.forwardRef(({className:s,...l},c)=>te.createElement(WT,{ref:c,iconNode:e,className:tv(`lucide-${FT(kg(r))}`,`lucide-${r}`,s),...l}));return n.displayName=kg(r),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Tg=Re("building",HT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],$T=Re("calendar",VT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],nv=Re("circle-alert",GT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Rs=Re("circle-check-big",KT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],rv=Re("clock",qT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],iv=Re("download",QT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Us=Re("file-text",YT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],JT=Re("funnel",XT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],eN=Re("lock",ZT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],nN=Re("log-out",tN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lh=Re("mail",rN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],sN=Re("map-pin",iN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],lN=Re("paperclip",oN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],cN=Re("phone",aN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],dN=Re("printer",uN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],fN=Re("search",hN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],sv=Re("send",pN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],gN=Re("trash-2",mN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],yN=Re("trending-up",_N);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],wN=Re("triangle-alert",vN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],xN=Re("upload",EN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],br=Re("user",CN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],IN=Re("users",SN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],va=Re("x",kN);function TN({onLogin:r}){const[e,n]=te.useState(!1),[s,l]=te.useState(""),[c,d]=te.useState(""),[f,m]=te.useState(""),[_,v]=te.useState(""),[E,w]=te.useState(!1),T=async P=>{P.preventDefault(),v(""),w(!0);try{if(e){const j=(await V1(rr,s,c)).user;await My(ut(dt,`users/${j.uid}`),{email:s,displayName:f,role:"IT Staff",createdAt:new Date().toISOString()}),r()}else{const j=(await $1(rr,s,c)).user,ee=ut(dt,`users/${j.uid}`),ie=await jy(ee);if(!ie.exists())throw await Hs(rr),new Error("User account not found in database");if(ie.val().role!=="IT Staff")throw await Hs(rr),new Error("Access denied. This portal is for IT Staff only.");r()}}catch(R){v(R.message||"An error occurred")}finally{w(!1)}};return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",children:p.jsxs("div",{className:"max-w-6xl w-full grid md:grid-cols-2 gap-8",children:[p.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[p.jsxs("div",{className:"mb-8",children:[p.jsx("h1",{className:"text-indigo-600 mb-2",children:"IT Staff Portal"}),p.jsx("p",{className:"text-gray-600",children:e?"Create your IT staff account":"Sign in to manage support tickets"})]}),p.jsxs("form",{onSubmit:T,className:"space-y-6",children:[e&&p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-2",children:"Full Name"}),p.jsxs("div",{className:"relative",children:[p.jsx(br,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),p.jsx("input",{type:"text",value:f,onChange:P=>m(P.target.value),required:!0,className:"w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",placeholder:"Enter your full name"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-2",children:"Email Address"}),p.jsxs("div",{className:"relative",children:[p.jsx(lh,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),p.jsx("input",{type:"email",value:s,onChange:P=>l(P.target.value),required:!0,className:"w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",placeholder:"your.email@company.com"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-2",children:"Password"}),p.jsxs("div",{className:"relative",children:[p.jsx(eN,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),p.jsx("input",{type:"password",value:c,onChange:P=>d(P.target.value),required:!0,minLength:6,className:"w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",placeholder:"Enter your password"})]})]}),_&&p.jsxs("div",{className:"flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700",children:[p.jsx(nv,{size:20}),p.jsx("span",{children:_})]}),p.jsx("button",{type:"submit",disabled:E,className:"w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:E?"Processing...":e?"Create Account":"Sign In"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsx("button",{onClick:()=>{n(!e),v("")},className:"text-indigo-600 hover:text-indigo-700",children:e?"Already have an account? Sign in":"Don't have an account? Sign up"})})]}),p.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[p.jsx("h2",{className:"text-indigo-600 mb-6",children:"Ticket System Guide"}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{children:[p.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[p.jsx(Rs,{className:"text-green-500",size:20}),"How It Works"]}),p.jsxs("ul",{className:"space-y-2 text-gray-600 ml-7",children:[p.jsx("li",{children:"• View all incoming support tickets from users"}),p.jsx("li",{children:"• Claim tickets to begin working on them"}),p.jsx("li",{children:"• Send updates and communicate with users"}),p.jsx("li",{children:"• Track ticket status until resolution"})]})]}),p.jsxs("div",{children:[p.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[p.jsx(Rs,{className:"text-green-500",size:20}),"Ticket Claiming"]}),p.jsxs("ul",{className:"space-y-2 text-gray-600 ml-7",children:[p.jsx("li",{children:"• Click on any open ticket to view details"}),p.jsx("li",{children:'• Click "Claim Ticket" to assign it to yourself'}),p.jsx("li",{children:"• Send an initial message to the user"}),p.jsx("li",{children:"• Claimed tickets are locked to prevent conflicts"})]})]}),p.jsxs("div",{children:[p.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[p.jsx(Rs,{className:"text-green-500",size:20}),"Communication"]}),p.jsxs("ul",{className:"space-y-2 text-gray-600 ml-7",children:[p.jsx("li",{children:"• Users receive email notifications automatically"}),p.jsx("li",{children:"• Email thread continues until ticket is closed"}),p.jsx("li",{children:"• All messages are logged in the system"}),p.jsx("li",{children:"• Transfer tickets to other IT staff if needed"})]})]}),p.jsxs("div",{children:[p.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[p.jsx(Rs,{className:"text-green-500",size:20}),"Ticket Priorities"]}),p.jsxs("div",{className:"ml-7 space-y-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-3 h-3 bg-red-500 rounded-full"}),p.jsx("span",{className:"text-gray-600",children:"High - Urgent issues requiring immediate attention"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),p.jsx("span",{className:"text-gray-600",children:"Medium - Important but not critical"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-3 h-3 bg-green-500 rounded-full"}),p.jsx("span",{className:"text-gray-600",children:"Low - Can be handled when time permits"})]})]})]})]})]})]})})}async function ov(r){return console.warn("EmailJS not configured. Email would be sent with these details:",r),!0}function NN({ticket:r,itStaffInfo:e,onClose:n,onClaimed:s}){const l=`Hi ${r.createdBy.name},

I have received your ticket regarding "${r.title}". I will look into this issue and get back to you shortly.

Best regards,
${e.displayName}
IT Support`,[c,d]=te.useState(l),[f,m]=te.useState(!1),_=async()=>{if(!c.trim()){alert("Please enter a message to send to the user");return}m(!0);try{const v=new Date().toISOString(),E={text:c,sentBy:{uid:e.uid,displayName:e.displayName,email:e.email,role:"IT Staff"},sentAt:v,emailSent:!0};await Yn(ut(dt,`tickets/${r.ticketId}`),{status:"in_progress",claimedBy:{uid:e.uid,displayName:e.displayName,email:e.email},claimedAt:v,updatedAt:v,lastMessage:E});const w=ut(dt,`tickets/${r.ticketId}/messages`);await Yn(w,{[Date.now()]:E}),await ov({to_email:r.createdBy.email,to_name:r.createdBy.name,from_name:e.displayName,from_email:e.email,subject:`Re: Ticket #${r.ticketId} - ${r.title}`,message:c,ticket_id:r.ticketId,ticket_title:r.title}),s()}catch(v){console.error("Error claiming ticket:",v),alert("Failed to claim ticket. Please try again.")}finally{m(!1)}};return p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[p.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between",children:[p.jsx("h2",{className:"text-gray-900",children:"Claim Ticket"}),p.jsx("button",{onClick:n,className:"text-gray-400 hover:text-gray-600 transition-colors",children:p.jsx(va,{size:24})})]}),p.jsxs("div",{className:"p-6 space-y-6",children:[p.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 space-y-3",children:[p.jsx("h3",{className:"text-gray-900",children:"Ticket Details"}),p.jsxs("div",{className:"grid grid-cols-2 gap-4 text-gray-600",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Title:"})," ",r.title]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Category:"})," ",r.category]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Priority:"})," ",r.priority]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Location:"})," ",r.location]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Description:"}),p.jsx("p",{className:"mt-1",children:r.description})]})]}),p.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[p.jsx("h3",{className:"text-gray-900 mb-2",children:"User Information"}),p.jsxs("div",{className:"space-y-1 text-gray-600",children:[p.jsxs("p",{children:[p.jsx("span",{className:"text-gray-500",children:"Name:"})," ",r.createdBy.name]}),p.jsxs("p",{children:[p.jsx("span",{className:"text-gray-500",children:"Email:"})," ",r.createdBy.email]}),p.jsxs("p",{children:[p.jsx("span",{className:"text-gray-500",children:"Department:"})," ",r.createdBy.department]}),p.jsxs("p",{children:[p.jsx("span",{className:"text-gray-500",children:"Contact:"})," ",r.contactNumber]})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-2",children:"Initial Message to User *"}),p.jsxs("p",{className:"text-gray-500 mb-3",children:["This message will be sent to the user via email from your IT staff account (",e.email,")"]}),p.jsx("textarea",{value:c,onChange:v=>d(v.target.value),rows:6,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none",placeholder:`Hi ${r.createdBy.name},

I have received your ticket regarding "${r.title}". I will look into this issue and get back to you shortly.

Best regards,
${e.displayName}
IT Support`})]}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:n,disabled:f,className:"flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50",children:"Cancel"}),p.jsxs("button",{onClick:_,disabled:f||!c.trim(),className:"flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:[p.jsx(sv,{size:20}),f?"Claiming...":"Claim & Send Message"]})]})]})]})})}function RN({ticket:r,itStaffInfo:e,onClose:n,onUpdate:s}){const[l,c]=te.useState(""),[d,f]=te.useState([]),[m,_]=te.useState(!1),[v,E]=te.useState(!1),[w,T]=te.useState(r.status),P=te.useRef(null),R=r.claimedBy?.uid===e.uid;te.useEffect(()=>{const U=ut(dt,`tickets/${r.ticketId}/messages`),re=bl(U,ye=>{if(ye.exists()){const Fe=ye.val(),Ye=Object.entries(Fe).map(([He,be])=>({id:He,...be}));Ye.sort((He,be)=>new Date(He.sentAt).getTime()-new Date(be.sentAt).getTime()),f(Ye)}});return()=>re()},[r.ticketId]);const j=async()=>{if(!(!l.trim()||!R)){_(!0);try{const U=new Date().toISOString(),re={text:l,sentBy:{uid:e.uid,displayName:e.displayName,email:e.email,role:"IT Staff"},sentAt:U,emailSent:!0},ye=ut(dt,`tickets/${r.ticketId}/messages`);await Yn(ye,{[Date.now()]:re}),await Yn(ut(dt,`tickets/${r.ticketId}`),{lastMessage:re,updatedAt:U}),await ov({to_email:r.createdBy.email,to_name:r.createdBy.name,from_name:e.displayName,from_email:e.email,subject:`Re: Ticket #${r.ticketId} - ${r.title}`,message:l,ticket_id:r.ticketId,ticket_title:r.title}),c(""),s()}catch(U){console.error("Error sending message:",U),alert("Failed to send message. Please try again.")}finally{_(!1)}}},ee=async U=>{if(R)try{await Yn(ut(dt,`tickets/${r.ticketId}`),{status:U,updatedAt:new Date().toISOString()}),T(U),s()}catch(re){console.error("Error updating ticket status:",re),alert("Failed to update ticket status. Please try again.")}},ie=async()=>{if(!(!R||!confirm("Are you sure you want to release this ticket? It will become available for other IT staff to claim.")))try{await Yn(ut(dt,`tickets/${r.ticketId}`),{status:"open",claimedBy:null,claimedAt:null,updatedAt:new Date().toISOString()}),s(),n()}catch(re){console.error("Error transferring ticket:",re),alert("Failed to transfer ticket. Please try again.")}},G=U=>{switch(U){case"high":return"bg-red-100 text-red-700 border-red-200";case"medium":return"bg-yellow-100 text-yellow-700 border-yellow-200";case"low":return"bg-green-100 text-green-700 border-green-200";default:return"bg-gray-100 text-gray-700 border-gray-200"}},F=U=>{switch(U){case"open":return"bg-blue-100 text-blue-700 border-blue-200";case"in_progress":return"bg-purple-100 text-purple-700 border-purple-200";case"closed":return"bg-gray-100 text-gray-700 border-gray-200";default:return"bg-gray-100 text-gray-700 border-gray-200"}},ne=async U=>{const re=U.target.files?.[0];if(!(!re||!R)){E(!0);try{const ye=bT(UT,`tickets/${r.ticketId}/${Date.now()}_${re.name}`);await PT(ye,re);const Fe=await AT(ye),Ye={name:re.name,url:Fe,size:re.size,uploadedBy:e.displayName,uploadedAt:new Date().toISOString()},He=r.attachments||[];He.push(Ye),await Yn(ut(dt,`tickets/${r.ticketId}`),{attachments:He,updatedAt:new Date().toISOString()});const be={text:`File attached: ${re.name}`,sentBy:{uid:e.uid,displayName:e.displayName,email:e.email,role:"IT Staff"},sentAt:new Date().toISOString(),emailSent:!1,isSystemMessage:!0},Ve=ut(dt,`tickets/${r.ticketId}/messages`);await Yn(Ve,{[Date.now()]:be}),s()}catch(ye){console.error("Error uploading file:",ye),alert("Failed to upload file. Please try again.")}finally{E(!1),P.current&&(P.current.value="")}}};return p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col",children:[p.jsxs("div",{className:"bg-indigo-600 text-white p-6 flex items-start justify-between",children:[p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[p.jsx("h2",{children:r.title}),p.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${G(r.priority)}`,children:r.priority}),p.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${F(w)}`,children:w.replace("_"," ")})]}),p.jsxs("p",{className:"text-indigo-100",children:["Ticket ID: ",r.ticketId]})]}),p.jsx("button",{onClick:n,className:"text-white hover:text-indigo-200 transition-colors",children:p.jsx(va,{size:24})})]}),p.jsx("div",{className:"flex-1 overflow-y-auto",children:p.jsxs("div",{className:"grid md:grid-cols-3 gap-6 p-6",children:[p.jsxs("div",{className:"md:col-span-2 space-y-6",children:[p.jsxs("div",{children:[p.jsx("h3",{className:"text-gray-900 mb-2",children:"Description"}),p.jsx("p",{className:"text-gray-600 bg-gray-50 p-4 rounded-lg",children:r.description})]}),r.attachments&&r.attachments.length>0&&p.jsxs("div",{children:[p.jsx("h3",{className:"text-gray-900 mb-2",children:"Attachments"}),p.jsx("div",{className:"space-y-2",children:r.attachments.map((U,re)=>p.jsxs("a",{href:U.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors",children:[p.jsx(Us,{className:"text-indigo-600",size:20}),p.jsxs("div",{className:"flex-1",children:[p.jsx("p",{className:"text-gray-900",children:U.name}),p.jsxs("p",{className:"text-gray-500",children:[(U.size/1024).toFixed(2)," KB"]})]}),p.jsx(iv,{className:"text-gray-400",size:20})]},re))})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-gray-900 mb-4",children:"Communication Thread"}),p.jsx("div",{className:"space-y-4 bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto",children:d.length>0?d.map(U=>p.jsxs("div",{className:`p-4 rounded-lg ${U.sentBy.role==="it_staff"?"bg-indigo-100 ml-8":"bg-white mr-8"}`,children:[p.jsxs("div",{className:"flex items-start justify-between mb-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(br,{size:16,className:"text-gray-600"}),p.jsx("span",{className:"text-gray-900",children:U.sentBy.displayName||U.sentBy.name}),U.sentBy.role==="IT Staff"&&p.jsx("span",{className:"text-indigo-600",children:"(IT Staff)"})]}),p.jsx("span",{className:"text-gray-500",children:new Date(U.sentAt).toLocaleString()})]}),p.jsx("p",{className:"text-gray-700",children:U.text}),U.emailSent&&p.jsx("p",{className:"text-green-600 mt-2",children:"✓ Email sent"})]},U.id)):p.jsx("p",{className:"text-gray-500 text-center py-8",children:"No messages yet"})}),R&&w!=="closed"&&p.jsxs("div",{className:"mt-4 flex gap-2",children:[p.jsx("input",{type:"text",value:l,onChange:U=>c(U.target.value),onKeyPress:U=>U.key==="Enter"&&j(),placeholder:"Type a message to the user...",className:"flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"}),p.jsxs("button",{onClick:j,disabled:m||!l.trim(),className:"px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",children:[p.jsx(sv,{size:20}),"Send"]})]})]})]}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[p.jsx("h3",{className:"text-gray-900 mb-4",children:"User Information"}),p.jsxs("div",{className:"space-y-3 text-gray-600",children:[p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx(br,{size:18,className:"mt-0.5 text-gray-500"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Name"}),p.jsx("p",{className:"text-gray-900",children:r.createdBy.name})]})]}),p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx(lh,{size:18,className:"mt-0.5 text-gray-500"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Email"}),p.jsx("p",{className:"text-gray-900",children:r.createdBy.email})]})]}),p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx(cN,{size:18,className:"mt-0.5 text-gray-500"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Contact"}),p.jsx("p",{className:"text-gray-900",children:r.contactNumber})]})]}),p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx(sN,{size:18,className:"mt-0.5 text-gray-500"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Location"}),p.jsx("p",{className:"text-gray-900",children:r.location})]})]}),p.jsxs("div",{className:"flex items-start gap-2",children:[p.jsx(br,{size:18,className:"mt-0.5 text-gray-500"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Department"}),p.jsx("p",{className:"text-gray-900",children:r.createdBy.department})]})]})]})]}),r.claimedBy&&p.jsxs("div",{className:"bg-purple-50 rounded-lg p-4",children:[p.jsx("h3",{className:"text-gray-900 mb-2",children:"Assigned To"}),p.jsx("p",{className:"text-gray-900",children:r.claimedBy.displayName}),p.jsx("p",{className:"text-gray-600",children:r.claimedBy.email}),p.jsxs("p",{className:"text-gray-500 mt-2",children:[p.jsx(rv,{size:14,className:"inline mr-1"}),new Date(r.claimedAt).toLocaleString()]})]}),p.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[p.jsx("h3",{className:"text-gray-900 mb-3",children:"Timeline"}),p.jsxs("div",{className:"space-y-2 text-gray-600",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Created"}),p.jsx("p",{children:new Date(r.createdAt).toLocaleString()})]}),p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Last Updated"}),p.jsx("p",{children:new Date(r.updatedAt).toLocaleString()})]}),r.closedAt&&p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500",children:"Closed"}),p.jsx("p",{children:new Date(r.closedAt).toLocaleString()})]})]})]}),R&&p.jsxs("div",{className:"space-y-3",children:[p.jsx("h3",{className:"text-gray-900",children:"Actions"}),w!=="closed"&&p.jsxs(p.Fragment,{children:[p.jsx("input",{type:"file",ref:P,onChange:ne,className:"hidden"}),p.jsx("button",{onClick:()=>P.current?.click(),disabled:v,className:"w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",children:v?p.jsxs(p.Fragment,{children:[p.jsx(xN,{size:18,className:"animate-pulse"}),"Uploading..."]}):p.jsxs(p.Fragment,{children:[p.jsx(lN,{size:18}),"Attach File"]})}),p.jsxs("button",{onClick:()=>ee(w==="in_progress"?"open":"in_progress"),className:"w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:["Mark as ",w==="in_progress"?"Open":"In Progress"]}),p.jsx("button",{onClick:()=>ee("closed"),className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",children:"Close Ticket"}),p.jsx("button",{onClick:ie,className:"w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",children:"Transfer Ticket"})]})]}),!R&&r.claimedBy&&p.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:p.jsxs("p",{className:"text-yellow-800",children:["This ticket is currently being handled by ",r.claimedBy.displayName]})})]})]})})]})})}function PN({tickets:r,onClose:e}){const[n,s]=te.useState("all"),[l,c]=te.useState("all"),[d,f]=te.useState("all"),[m,_]=te.useState("all"),v=te.useMemo(()=>{const R=new Date,j=new Date(R.getTime()-1440*60*1e3),ee=new Date(R.getTime()-10080*60*1e3),ie=new Date(R.getTime()-720*60*60*1e3);let G=r;return m!=="all"&&(G=r.filter(F=>{const ne=new Date(F.createdAt);return m==="today"?ne>=j:m==="week"?ne>=ee:m==="month"?ne>=ie:!0})),n!=="all"&&(G=G.filter(F=>F.status===n)),l!=="all"&&(G=G.filter(F=>F.priority===l)),d!=="all"&&(G=G.filter(F=>F.category===d)),{total:G.length,open:G.filter(F=>F.status==="open").length,inProgress:G.filter(F=>F.status==="in_progress").length,closed:G.filter(F=>F.status==="closed").length,high:G.filter(F=>F.priority==="high").length,medium:G.filter(F=>F.priority==="medium").length,low:G.filter(F=>F.priority==="low").length,hardware:G.filter(F=>F.category==="hardware").length,software:G.filter(F=>F.category==="software").length,network:G.filter(F=>F.category==="network").length,account:G.filter(F=>F.category==="account").length,other:G.filter(F=>F.category==="other").length,filteredTickets:G}},[r,n,l,d,m]),E=()=>{const R=["Ticket ID","Title","Category","Priority","Status","Created By","Email","Department","Created At","Claimed By","Claimed At","Updated At"],j=v.filteredTickets.map(ne=>[ne.ticketId,`"${ne.title}"`,ne.category,ne.priority,ne.status,ne.createdBy.name,ne.createdBy.email,ne.createdBy.department||"N/A",new Date(ne.createdAt).toLocaleString(),ne.claimedBy?.displayName||"Unclaimed",ne.claimedAt?new Date(ne.claimedAt).toLocaleString():"N/A",ne.updatedAt?new Date(ne.updatedAt).toLocaleString():"N/A"]),ee=[R.join(","),...j.map(ne=>ne.join(","))].join(`
`),ie=new Blob([ee],{type:"text/csv"}),G=window.URL.createObjectURL(ie),F=document.createElement("a");F.href=G,F.download=`ticket-report-${new Date().toISOString().split("T")[0]}.csv`,F.click(),window.URL.revokeObjectURL(G)},w=()=>{window.print()},T=R=>{switch(R){case"high":return"text-red-600 bg-red-50";case"medium":return"text-yellow-600 bg-yellow-50";case"low":return"text-green-600 bg-green-50";default:return"text-gray-600 bg-gray-50"}},P=R=>{switch(R){case"open":return"text-blue-600 bg-blue-50";case"in_progress":return"text-purple-600 bg-purple-50";case"closed":return"text-gray-600 bg-gray-50";default:return"text-gray-600 bg-gray-50"}};return p.jsxs("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto",children:[p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col print:max-w-full print:max-h-full print:shadow-none",children:[p.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 print:border-black",children:[p.jsxs("div",{children:[p.jsxs("h2",{className:"text-gray-900 flex items-center gap-2",children:[p.jsx(Us,{className:"text-indigo-600",size:24}),"Ticket Report"]}),p.jsxs("p",{className:"text-gray-600 mt-1",children:["Generated on ",new Date().toLocaleDateString()," at ",new Date().toLocaleTimeString()]})]}),p.jsxs("div",{className:"flex items-center gap-2 print:hidden",children:[p.jsx("button",{onClick:E,className:"p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",title:"Export to CSV",children:p.jsx(iv,{size:20})}),p.jsx("button",{onClick:w,className:"p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Print Report",children:p.jsx(dN,{size:20})}),p.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors",children:p.jsx(va,{size:20})})]})]}),p.jsxs("div",{className:"p-6 border-b border-gray-200 bg-gray-50 print:hidden",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[p.jsx(JT,{size:18,className:"text-gray-600"}),p.jsx("h3",{className:"text-gray-900",children:"Filters"})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Date Range"}),p.jsxs("select",{value:m,onChange:R=>_(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[p.jsx("option",{value:"all",children:"All Time"}),p.jsx("option",{value:"today",children:"Last 24 Hours"}),p.jsx("option",{value:"week",children:"Last 7 Days"}),p.jsx("option",{value:"month",children:"Last 30 Days"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Status"}),p.jsxs("select",{value:n,onChange:R=>s(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[p.jsx("option",{value:"all",children:"All Statuses"}),p.jsx("option",{value:"open",children:"Open"}),p.jsx("option",{value:"in_progress",children:"In Progress"}),p.jsx("option",{value:"closed",children:"Closed"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Priority"}),p.jsxs("select",{value:l,onChange:R=>c(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[p.jsx("option",{value:"all",children:"All Priorities"}),p.jsx("option",{value:"high",children:"High"}),p.jsx("option",{value:"medium",children:"Medium"}),p.jsx("option",{value:"low",children:"Low"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Category"}),p.jsxs("select",{value:d,onChange:R=>f(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[p.jsx("option",{value:"all",children:"All Categories"}),p.jsx("option",{value:"hardware",children:"Hardware"}),p.jsx("option",{value:"software",children:"Software"}),p.jsx("option",{value:"network",children:"Network"}),p.jsx("option",{value:"account",children:"Account"}),p.jsx("option",{value:"other",children:"Other"})]})]})]})]}),p.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto flex-1",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[p.jsx("div",{className:"bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-indigo-700 text-sm",children:"Total Tickets"}),p.jsx("p",{className:"text-indigo-900 mt-1",children:v.total})]}),p.jsx(Us,{className:"text-indigo-600",size:32})]})}),p.jsx("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-blue-700 text-sm",children:"Open"}),p.jsx("p",{className:"text-blue-900 mt-1",children:v.open})]}),p.jsx(nv,{className:"text-blue-600",size:32})]})}),p.jsx("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-purple-700 text-sm",children:"In Progress"}),p.jsx("p",{className:"text-purple-900 mt-1",children:v.inProgress})]}),p.jsx(rv,{className:"text-purple-600",size:32})]})}),p.jsx("div",{className:"bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-green-700 text-sm",children:"Closed"}),p.jsx("p",{className:"text-green-900 mt-1",children:v.closed})]}),p.jsx(Rs,{className:"text-green-600",size:32})]})})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[p.jsxs("h3",{className:"text-gray-900 mb-4 flex items-center gap-2",children:[p.jsx(yN,{className:"text-gray-600",size:20}),"Priority Breakdown"]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"High Priority"}),p.jsx("span",{className:"px-3 py-1 bg-red-100 text-red-700 rounded-full",children:v.high})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Medium Priority"}),p.jsx("span",{className:"px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full",children:v.medium})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Low Priority"}),p.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-700 rounded-full",children:v.low})]})]})]}),p.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[p.jsxs("h3",{className:"text-gray-900 mb-4 flex items-center gap-2",children:[p.jsx(Us,{className:"text-gray-600",size:20}),"Category Breakdown"]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Hardware"}),p.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.hardware})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Software"}),p.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.software})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Network"}),p.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.network})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Account"}),p.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.account})]}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-gray-700",children:"Other"}),p.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.other})]})]})]})]}),p.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl overflow-hidden",children:[p.jsxs("div",{className:"p-4 bg-gray-50 border-b border-gray-200",children:[p.jsx("h3",{className:"text-gray-900",children:"Detailed Ticket List"}),p.jsxs("p",{className:"text-gray-600 text-sm mt-1",children:["Showing ",v.filteredTickets.length," ticket(s)"]})]}),p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"w-full",children:[p.jsx("thead",{className:"bg-gray-50 border-b border-gray-200",children:p.jsxs("tr",{children:[p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Ticket ID"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Title"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Category"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Priority"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Status"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Created By"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Claimed By"}),p.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Created At"})]})}),p.jsx("tbody",{children:v.filteredTickets.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:8,className:"text-center py-8 text-gray-500",children:"No tickets found matching the selected filters"})}):v.filteredTickets.map(R=>p.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50",children:[p.jsx("td",{className:"px-4 py-3 text-gray-900 text-sm",children:R.ticketId}),p.jsx("td",{className:"px-4 py-3 text-gray-900 text-sm max-w-xs truncate",children:R.title}),p.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm capitalize",children:R.category}),p.jsx("td",{className:"px-4 py-3 text-sm",children:p.jsx("span",{className:`px-2 py-1 rounded-full text-xs capitalize ${T(R.priority)}`,children:R.priority})}),p.jsx("td",{className:"px-4 py-3 text-sm",children:p.jsx("span",{className:`px-2 py-1 rounded-full text-xs capitalize ${P(R.status)}`,children:R.status.replace("_"," ")})}),p.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm",children:R.createdBy.name}),p.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm",children:R.claimedBy?.displayName||"Unclaimed"}),p.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm",children:new Date(R.createdAt).toLocaleDateString()})]},R.ticketId))})]})})]})]})]}),p.jsx("style",{children:`
          @media print {
            @page {
              size: landscape;
              margin: 1cm;
            }
            .print\\:hidden {
              display: none !important;
            }
            .print\\:max-w-full {
              max-width: 100% !important;
            }
            .print\\:max-h-full {
              max-height: 100% !important;
            }
            .print\\:shadow-none {
              box-shadow: none !important;
            }
            body {
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
          }
        `})]})}function AN({users:r,currentUser:e,onClose:n,onUpdate:s}){const[l,c]=te.useState(""),[d,f]=te.useState("all"),[m,_]=te.useState(null),v=te.useMemo(()=>{const T=new Set;return r.forEach(P=>{P.department&&T.add(P.department)}),Array.from(T)},[r]),E=te.useMemo(()=>{let T=r;if(l){const P=l.toLowerCase();T=T.filter(R=>R.name?.toLowerCase().includes(P)||R.displayName?.toLowerCase().includes(P)||R.email?.toLowerCase().includes(P))}return d!=="all"&&(T=T.filter(P=>P.department===d)),T},[r,l,d]),w=async(T,P,R)=>{if(T===e.uid){alert("You cannot delete your own account.");return}if(confirm(`Delete user "${R}" (${P})?

This cannot be undone.
User will still exist in Firebase Auth.`)){_(T);try{await ck(ut(dt,`users/${T}`)),alert(`User "${R}" removed successfully.`),s()}catch(ee){console.error(ee),alert("Failed to delete user.")}_(null)}};return p.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col",children:[p.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600",children:[p.jsxs("div",{children:[p.jsxs("h2",{className:"text-white flex items-center gap-2",children:[p.jsx(Tg,{size:24}),"User Management"]}),p.jsx("p",{className:"text-indigo-100 mt-1",children:"Manage user departments and data"})]}),p.jsx("button",{onClick:n,className:"text-white hover:text-indigo-200",children:p.jsx(va,{size:24})})]}),p.jsxs("div",{className:"p-6 border-b border-gray-200 bg-gray-50",children:[p.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[p.jsx("div",{className:"flex-1",children:p.jsxs("div",{className:"relative",children:[p.jsx(fN,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),p.jsx("input",{type:"text",value:l,onChange:T=>c(T.target.value),placeholder:"Search by name or email...",className:"w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"})]})}),p.jsx("div",{children:p.jsxs("select",{value:d,onChange:T=>f(T.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",children:[p.jsx("option",{value:"all",children:"All Departments"}),v.map(T=>p.jsx("option",{value:T,children:T},T))]})})]}),p.jsxs("div",{className:"mt-3 flex items-center gap-2 text-gray-600",children:[p.jsx(br,{size:16}),p.jsxs("span",{children:["Showing ",E.length," of ",r.length," users"]})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:E.length===0?p.jsxs("div",{className:"text-center py-12",children:[p.jsx(br,{className:"mx-auto text-gray-400 mb-4",size:48}),p.jsx("p",{className:"text-gray-500",children:"No users found"})]}):p.jsx("div",{className:"grid gap-4",children:E.map(T=>p.jsx("div",{className:"bg-white border rounded-lg p-4 hover:shadow-md",children:p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsx("div",{className:"flex-1",children:p.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[p.jsx("div",{className:"w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center",children:p.jsx(br,{className:"text-indigo-600",size:20})}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h3",{className:"text-gray-900",children:T.name||T.displayName||"Unnamed User"}),p.jsx("span",{className:"px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs",children:T.department||"No Dept"}),T.uid===e.uid&&p.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs",children:"You"})]}),p.jsxs("div",{className:"flex items-center gap-4 mt-1 text-gray-600",children:[p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx(lh,{size:14}),p.jsx("span",{children:T.email})]}),T.department&&p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx(Tg,{size:14}),p.jsx("span",{children:T.department})]})]}),T.createdAt&&p.jsxs("div",{className:"flex items-center gap-1 mt-1 text-gray-500",children:[p.jsx($T,{size:14}),p.jsxs("span",{children:["Joined ",new Date(T.createdAt).toLocaleDateString()]})]})]})]})}),p.jsx("div",{className:"flex items-center gap-2",children:T.uid!==e.uid&&p.jsx("button",{onClick:()=>w(T.uid,T.email,T.name||T.displayName),disabled:m===T.uid,className:"p-2 text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50",children:m===T.uid?p.jsx("div",{className:"w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"}):p.jsx(gN,{size:20})})})]})},T.uid))})}),p.jsx("div",{className:"p-4 bg-yellow-50 border-t border-yellow-200",children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx(wN,{className:"text-yellow-600",size:20}),p.jsxs("div",{className:"text-yellow-800",children:[p.jsx("p",{className:"font-medium",children:"Important Notes:"}),p.jsxs("ul",{className:"mt-1 text-sm space-y-1 list-disc list-inside",children:[p.jsx("li",{children:"Deleting a user removes them from the Realtime Database."}),p.jsx("li",{children:"They will still be able to sign in unless removed in Firebase Authentication."}),p.jsx("li",{children:"You cannot delete your own account."}),p.jsx("li",{children:"This action cannot be undone."})]})]})]})})]})})}function bN({user:r}){const[e,n]=te.useState([]),[s,l]=te.useState([]),[c,d]=te.useState(null),[f,m]=te.useState(null),[_,v]=te.useState(null),[E,w]=te.useState(!1),[T,P]=te.useState(!1),[R,j]=te.useState("all"),[ee,ie]=te.useState(""),[G,F]=te.useState("all");te.useEffect(()=>{const U=ut(dt,`users/${r.uid}`);bl(U,Fe=>{Fe.exists()&&d({...Fe.val(),uid:r.uid})});const re=ut(dt,"tickets");bl(re,Fe=>{if(Fe.exists()){const Ye=Fe.val(),He=Object.values(Ye).map(be=>be);He.sort((be,Ve)=>new Date(Ve.createdAt).getTime()-new Date(be.createdAt).getTime()),n(He)}else n([])});const ye=ut(dt,"users");bl(ye,Fe=>{if(Fe.exists()){const Ye=Fe.val(),He=Object.entries(Ye).map(([be,Ve])=>({uid:be,...Ve}));l(He)}else l([])})},[r.uid]);const ne=async()=>{try{await Hs(rr)}catch(U){console.error("Error signing out:",U)}};return e.filter(U=>{if(R==="open"&&U.claimedBy||R==="claimed"&&!U.claimedBy||R==="myclaimed"&&U.claimedBy?.uid!==r.uid||G!=="all"&&U.category!==G)return!1;if(ee){const re=ee.toLowerCase();return U.title.toLowerCase().includes(re)||U.description.toLowerCase().includes(re)||U.createdBy.name.toLowerCase().includes(re)||U.ticketId.toLowerCase().includes(re)}return!0}),e.length,e.filter(U=>!U.claimedBy&&U.status!=="closed").length,e.filter(U=>U.claimedBy&&U.status!=="closed").length,e.filter(U=>U.claimedBy?.uid===r.uid&&U.status!=="closed").length,c?p.jsxs("div",{className:"min-h-screen bg-gray-50",children:[p.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-40",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"text-indigo-600",children:"IT Staff Dashboard"}),p.jsxs("p",{className:"text-gray-600",children:["Welcome back, ",c.displayName||c.name]})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsxs("button",{onClick:()=>P(!0),className:"flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:[p.jsx(IN,{size:20}),"Manage Users"]}),p.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",children:[p.jsx(Us,{size:20}),"Generate Report"]}),p.jsxs("button",{onClick:ne,className:"flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[p.jsx(nN,{size:20}),"Logout"]})]})]})})}),p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[_&&p.jsx(NN,{ticket:_,itStaffInfo:c,onClose:()=>v(null)}),f&&p.jsx(RN,{ticket:f,itStaffInfo:c,onClose:()=>m(null)}),E&&p.jsx(PN,{tickets:e,onClose:()=>w(!1)}),T&&p.jsx(AN,{users:s,currentUser:c,onClose:()=>P(!1)})]})]}):p.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"}),p.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})})}function ON(){const[r,e]=te.useState(null),[n,s]=te.useState(!0);return te.useEffect(()=>{const l=q1(rr,async c=>{if(c){const d=ut(dt,`users/${c.uid}`),f=await jy(d);f.exists()?f.val().role==="IT Staff"?e(c):(await Hs(rr),e(null)):(await Hs(rr),e(null))}else e(null);s(!1)});return()=>l()},[]),n?p.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"}),p.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):r?p.jsx(bN,{user:r}):p.jsx(TN,{onLogin:()=>{}})}dw.createRoot(document.getElementById("root")).render(p.jsx(ON,{}));
