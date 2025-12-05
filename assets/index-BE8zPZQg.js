(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var mu={exports:{}},Ei={},gu={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function lw(){if(lm)return oe;lm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=x&&S[x]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,R={};function M(S,b,ie){this.props=S,this.context=b,this.refs=R,this.updater=ie||T}M.prototype.isReactComponent={},M.prototype.setState=function(S,b){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,b,"setState")},M.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function te(){}te.prototype=M.prototype;function re(S,b,ie){this.props=S,this.context=b,this.refs=R,this.updater=ie||T}var G=re.prototype=new te;G.constructor=re,P(G,M.prototype),G.isPureReactComponent=!0;var F=Array.isArray,se=Object.prototype.hasOwnProperty,q={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function ve(S,b,ie){var ce,fe={},pe=null,Se=null;if(b!=null)for(ce in b.ref!==void 0&&(Se=b.ref),b.key!==void 0&&(pe=""+b.key),b)se.call(b,ce)&&!de.hasOwnProperty(ce)&&(fe[ce]=b[ce]);var _e=arguments.length-2;if(_e===1)fe.children=ie;else if(1<_e){for(var be=Array(_e),Tt=0;Tt<_e;Tt++)be[Tt]=arguments[Tt+2];fe.children=be}if(S&&S.defaultProps)for(ce in _e=S.defaultProps,_e)fe[ce]===void 0&&(fe[ce]=_e[ce]);return{$$typeof:r,type:S,key:pe,ref:Se,props:fe,_owner:q.current}}function ft(S,b){return{$$typeof:r,type:S.type,key:b,ref:S.ref,props:S.props,_owner:S._owner}}function $e(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function z(S){var b={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ie){return b[ie]})}var Ce=/\/+/g;function je(S,b){return typeof S=="object"&&S!==null&&S.key!=null?z(""+S.key):b.toString(36)}function Ae(S,b,ie,ce,fe){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var Se=!1;if(S===null)Se=!0;else switch(pe){case"string":case"number":Se=!0;break;case"object":switch(S.$$typeof){case r:case e:Se=!0}}if(Se)return Se=S,fe=fe(Se),S=ce===""?"."+je(Se,0):ce,F(fe)?(ie="",S!=null&&(ie=S.replace(Ce,"$&/")+"/"),Ae(fe,b,ie,"",function(Tt){return Tt})):fe!=null&&($e(fe)&&(fe=ft(fe,ie+(!fe.key||Se&&Se.key===fe.key?"":(""+fe.key).replace(Ce,"$&/")+"/")+S)),b.push(fe)),1;if(Se=0,ce=ce===""?".":ce+":",F(S))for(var _e=0;_e<S.length;_e++){pe=S[_e];var be=ce+je(pe,_e);Se+=Ae(pe,b,ie,be,fe)}else if(be=w(S),typeof be=="function")for(S=be.call(S),_e=0;!(pe=S.next()).done;)pe=pe.value,be=ce+je(pe,_e++),Se+=Ae(pe,b,ie,be,fe);else if(pe==="object")throw b=String(S),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return Se}function wt(S,b,ie){if(S==null)return S;var ce=[],fe=0;return Ae(S,ce,"","",function(pe){return b.call(ie,pe,fe++)}),ce}function Ge(S){if(S._status===-1){var b=S._result;b=b(),b.then(function(ie){(S._status===0||S._status===-1)&&(S._status=1,S._result=ie)},function(ie){(S._status===0||S._status===-1)&&(S._status=2,S._result=ie)}),S._status===-1&&(S._status=0,S._result=b)}if(S._status===1)return S._result.default;throw S._result}var we={current:null},U={transition:null},X={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:U,ReactCurrentOwner:q};function H(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:wt,forEach:function(S,b,ie){wt(S,function(){b.apply(this,arguments)},ie)},count:function(S){var b=0;return wt(S,function(){b++}),b},toArray:function(S){return wt(S,function(b){return b})||[]},only:function(S){if(!$e(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},oe.Component=M,oe.Fragment=n,oe.Profiler=l,oe.PureComponent=re,oe.StrictMode=i,oe.Suspense=m,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,oe.act=H,oe.cloneElement=function(S,b,ie){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ce=P({},S.props),fe=S.key,pe=S.ref,Se=S._owner;if(b!=null){if(b.ref!==void 0&&(pe=b.ref,Se=q.current),b.key!==void 0&&(fe=""+b.key),S.type&&S.type.defaultProps)var _e=S.type.defaultProps;for(be in b)se.call(b,be)&&!de.hasOwnProperty(be)&&(ce[be]=b[be]===void 0&&_e!==void 0?_e[be]:b[be])}var be=arguments.length-2;if(be===1)ce.children=ie;else if(1<be){_e=Array(be);for(var Tt=0;Tt<be;Tt++)_e[Tt]=arguments[Tt+2];ce.children=_e}return{$$typeof:r,type:S.type,key:fe,ref:pe,props:ce,_owner:Se}},oe.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},oe.createElement=ve,oe.createFactory=function(S){var b=ve.bind(null,S);return b.type=S,b},oe.createRef=function(){return{current:null}},oe.forwardRef=function(S){return{$$typeof:p,render:S}},oe.isValidElement=$e,oe.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:Ge}},oe.memo=function(S,b){return{$$typeof:_,type:S,compare:b===void 0?null:b}},oe.startTransition=function(S){var b=U.transition;U.transition={};try{S()}finally{U.transition=b}},oe.unstable_act=H,oe.useCallback=function(S,b){return we.current.useCallback(S,b)},oe.useContext=function(S){return we.current.useContext(S)},oe.useDebugValue=function(){},oe.useDeferredValue=function(S){return we.current.useDeferredValue(S)},oe.useEffect=function(S,b){return we.current.useEffect(S,b)},oe.useId=function(){return we.current.useId()},oe.useImperativeHandle=function(S,b,ie){return we.current.useImperativeHandle(S,b,ie)},oe.useInsertionEffect=function(S,b){return we.current.useInsertionEffect(S,b)},oe.useLayoutEffect=function(S,b){return we.current.useLayoutEffect(S,b)},oe.useMemo=function(S,b){return we.current.useMemo(S,b)},oe.useReducer=function(S,b,ie){return we.current.useReducer(S,b,ie)},oe.useRef=function(S){return we.current.useRef(S)},oe.useState=function(S){return we.current.useState(S)},oe.useSyncExternalStore=function(S,b,ie){return we.current.useSyncExternalStore(S,b,ie)},oe.useTransition=function(){return we.current.useTransition()},oe.version="18.3.1",oe}var am;function cd(){return am||(am=1,gu.exports=lw()),gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function aw(){if(cm)return Ei;cm=1;var r=cd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,_){var v,x={},w=null,T=null;_!==void 0&&(w=""+_),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(T=m.ref);for(v in m)i.call(m,v)&&!c.hasOwnProperty(v)&&(x[v]=m[v]);if(p&&p.defaultProps)for(v in m=p.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:e,type:p,key:w,ref:T,props:x,_owner:l.current}}return Ei.Fragment=n,Ei.jsx=d,Ei.jsxs=d,Ei}var um;function cw(){return um||(um=1,mu.exports=aw()),mu.exports}var f=cw(),xl={},_u={exports:{}},kt={},yu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function uw(){return dm||(dm=1,(function(r){function e(U,X){var H=U.length;U.push(X);e:for(;0<H;){var S=H-1>>>1,b=U[S];if(0<l(b,X))U[S]=X,U[H]=b,H=S;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var X=U[0],H=U.pop();if(H!==X){U[0]=H;e:for(var S=0,b=U.length,ie=b>>>1;S<ie;){var ce=2*(S+1)-1,fe=U[ce],pe=ce+1,Se=U[pe];if(0>l(fe,H))pe<b&&0>l(Se,fe)?(U[S]=Se,U[pe]=H,S=pe):(U[S]=fe,U[ce]=H,S=ce);else if(pe<b&&0>l(Se,H))U[S]=Se,U[pe]=H,S=pe;else break e}}return X}function l(U,X){var H=U.sortIndex-X.sortIndex;return H!==0?H:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],_=[],v=1,x=null,w=3,T=!1,P=!1,R=!1,M=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(U){for(var X=n(_);X!==null;){if(X.callback===null)i(_);else if(X.startTime<=U)i(_),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(_)}}function F(U){if(R=!1,G(U),!P)if(n(m)!==null)P=!0,Ge(se);else{var X=n(_);X!==null&&we(F,X.startTime-U)}}function se(U,X){P=!1,R&&(R=!1,te(ve),ve=-1),T=!0;var H=w;try{for(G(X),x=n(m);x!==null&&(!(x.expirationTime>X)||U&&!z());){var S=x.callback;if(typeof S=="function"){x.callback=null,w=x.priorityLevel;var b=S(x.expirationTime<=X);X=r.unstable_now(),typeof b=="function"?x.callback=b:x===n(m)&&i(m),G(X)}else i(m);x=n(m)}if(x!==null)var ie=!0;else{var ce=n(_);ce!==null&&we(F,ce.startTime-X),ie=!1}return ie}finally{x=null,w=H,T=!1}}var q=!1,de=null,ve=-1,ft=5,$e=-1;function z(){return!(r.unstable_now()-$e<ft)}function Ce(){if(de!==null){var U=r.unstable_now();$e=U;var X=!0;try{X=de(!0,U)}finally{X?je():(q=!1,de=null)}}else q=!1}var je;if(typeof re=="function")je=function(){re(Ce)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,wt=Ae.port2;Ae.port1.onmessage=Ce,je=function(){wt.postMessage(null)}}else je=function(){M(Ce,0)};function Ge(U){de=U,q||(q=!0,je())}function we(U,X){ve=M(function(){U(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_continueExecution=function(){P||T||(P=!0,Ge(se))},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(U){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var H=w;w=X;try{return U()}finally{w=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=w;w=U;try{return X()}finally{w=H}},r.unstable_scheduleCallback=function(U,X,H){var S=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,U){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=H+b,U={id:v++,callback:X,priorityLevel:U,startTime:H,expirationTime:b,sortIndex:-1},H>S?(U.sortIndex=H,e(_,U),n(m)===null&&U===n(_)&&(R?(te(ve),ve=-1):R=!0,we(F,H-S))):(U.sortIndex=b,e(m,U),P||T||(P=!0,Ge(se))),U},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(U){var X=w;return function(){var H=w;w=X;try{return U.apply(this,arguments)}finally{w=H}}}})(vu)),vu}var hm;function dw(){return hm||(hm=1,yu.exports=uw()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function hw(){if(fm)return kt;fm=1;var r=cd(),e=dw();function n(t){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function c(t,s){d(t,s),d(t+"Capture",s)}function d(t,s){for(l[t]=s,t=0;t<s.length;t++)i.add(s[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function w(t){return m.call(x,t)?!0:m.call(v,t)?!1:_.test(t)?x[t]=!0:(v[t]=!0,!1)}function T(t,s,o,a){if(o!==null&&o.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P(t,s,o,a){if(s===null||typeof s>"u"||T(t,s,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function R(t,s,o,a,u,h,g){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=s,this.sanitizeURL=h,this.removeEmptyString=g}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var s=t[0];M[s]=new R(s,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function re(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var s=t.replace(te,re);M[s]=new R(s,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var s=t.replace(te,re);M[s]=new R(s,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var s=t.replace(te,re);M[s]=new R(s,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,s,o,a){var u=M.hasOwnProperty(s)?M[s]:null;(u!==null?u.type!==0:a||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(P(s,o,u,a)&&(o=null),a||u===null?w(s)&&(o===null?t.removeAttribute(s):t.setAttribute(s,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(s=u.attributeName,a=u.attributeNamespace,o===null?t.removeAttribute(s):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,a?t.setAttributeNS(a,s,o):t.setAttribute(s,o))))}var F=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),q=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),ft=Symbol.for("react.profiler"),$e=Symbol.for("react.provider"),z=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),U=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,S;function b(t){if(S===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);S=s&&s[1]||""}return`
`+S+t}var ie=!1;function ce(t,s){if(!t||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(N){var a=N}Reflect.construct(t,[],s)}else{try{s.call()}catch(N){a=N}t.call(s.prototype)}else{try{throw Error()}catch(N){a=N}t()}}catch(N){if(N&&a&&typeof N.stack=="string"){for(var u=N.stack.split(`
`),h=a.stack.split(`
`),g=u.length-1,y=h.length-1;1<=g&&0<=y&&u[g]!==h[y];)y--;for(;1<=g&&0<=y;g--,y--)if(u[g]!==h[y]){if(g!==1||y!==1)do if(g--,y--,0>y||u[g]!==h[y]){var E=`
`+u[g].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=g&&0<=y);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function fe(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case de:return"Fragment";case q:return"Portal";case ft:return"Profiler";case ve:return"StrictMode";case je:return"Suspense";case Ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case $e:return(t._context.displayName||"Context")+".Provider";case Ce:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wt:return s=t.displayName||null,s!==null?s:pe(t.type)||"Memo";case Ge:s=t._payload,t=t._init;try{return pe(t(s))}catch{}}return null}function Se(t){var s=t.type;switch(t.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=s.render,t=t.displayName||t.name||"",s.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(s);case 8:return s===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(t){var s=be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),a=""+t[s];if(!t.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,h.call(this,g)}}),Object.defineProperty(t,s,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function uo(t){t._valueTracker||(t._valueTracker=Tt(t))}function hh(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var o=s.getValue(),a="";return t&&(a=be(t)?t.checked?"true":"false":t.value),t=a,t!==o?(s.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ea(t,s){var o=s.checked;return H({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function fh(t,s){var o=s.defaultValue==null?"":s.defaultValue,a=s.checked!=null?s.checked:s.defaultChecked;o=_e(s.value!=null?s.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ph(t,s){s=s.checked,s!=null&&G(t,"checked",s,!1)}function Ca(t,s){ph(t,s);var o=_e(s.value),a=s.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}s.hasOwnProperty("value")?Sa(t,s.type,o):s.hasOwnProperty("defaultValue")&&Sa(t,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(t.defaultChecked=!!s.defaultChecked)}function mh(t,s,o){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var a=s.type;if(!(a!=="submit"&&a!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+t._wrapperState.initialValue,o||s===t.value||(t.value=s),t.defaultValue=s}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Sa(t,s,o){(s!=="number"||ho(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ms=Array.isArray;function $r(t,s,o,a){if(t=t.options,s){s={};for(var u=0;u<o.length;u++)s["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=s.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&a&&(t[o].defaultSelected=!0)}else{for(o=""+_e(o),s=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}s!==null||t[u].disabled||(s=t[u])}s!==null&&(s.selected=!0)}}function Ia(t,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return H({},s,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,s){var o=s.value;if(o==null){if(o=s.children,s=s.defaultValue,o!=null){if(s!=null)throw Error(n(92));if(Ms(o)){if(1<o.length)throw Error(n(93));o=o[0]}s=o}s==null&&(s=""),o=s}t._wrapperState={initialValue:_e(o)}}function _h(t,s){var o=_e(s.value),a=_e(s.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),s.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function yh(t){var s=t.textContent;s===t._wrapperState.initialValue&&s!==""&&s!==null&&(t.value=s)}function vh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(t,s){return t==null||t==="http://www.w3.org/1999/xhtml"?vh(s):t==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,wh=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,o,a,u){MSApp.execUnsafeLocalFunction(function(){return t(s,o,a,u)})}:t})(function(t,s){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=s;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;s.firstChild;)t.appendChild(s.firstChild)}});function Us(t,s){if(s){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=s;return}}t.textContent=s}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){dv.forEach(function(s){s=s+t.charAt(0).toUpperCase()+t.substring(1),Fs[s]=Fs[t]})});function xh(t,s,o){return s==null||typeof s=="boolean"||s===""?"":o||typeof s!="number"||s===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+s).trim():s+"px"}function Eh(t,s){t=t.style;for(var o in s)if(s.hasOwnProperty(o)){var a=o.indexOf("--")===0,u=xh(o,s[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,u):t[o]=u}}var hv=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Na(t,s){if(s){if(hv[t]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function Ta(t,s){if(t.indexOf("-")===-1)return typeof s.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Pa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,Gr=null,Kr=null;function Ch(t){if(t=li(t)){if(typeof Aa!="function")throw Error(n(280));var s=t.stateNode;s&&(s=jo(s),Aa(t.stateNode,t.type,s))}}function Sh(t){Gr?Kr?Kr.push(t):Kr=[t]:Gr=t}function Ih(){if(Gr){var t=Gr,s=Kr;if(Kr=Gr=null,Ch(t),s)for(t=0;t<s.length;t++)Ch(s[t])}}function kh(t,s){return t(s)}function Nh(){}var ba=!1;function Th(t,s,o){if(ba)return t(s,o);ba=!0;try{return kh(t,s,o)}finally{ba=!1,(Gr!==null||Kr!==null)&&(Nh(),Ih())}}function zs(t,s){var o=t.stateNode;if(o===null)return null;var a=jo(o);if(a===null)return null;o=a[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,s,typeof o));return o}var Oa=!1;if(p)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Oa=!1}function fv(t,s,o,a,u,h,g,y,E){var N=Array.prototype.slice.call(arguments,3);try{s.apply(o,N)}catch(O){this.onError(O)}}var Ws=!1,po=null,mo=!1,Da=null,pv={onError:function(t){Ws=!0,po=t}};function mv(t,s,o,a,u,h,g,y,E){Ws=!1,po=null,fv.apply(pv,arguments)}function gv(t,s,o,a,u,h,g,y,E){if(mv.apply(this,arguments),Ws){if(Ws){var N=po;Ws=!1,po=null}else throw Error(n(198));mo||(mo=!0,Da=N)}}function gr(t){var s=t,o=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(o=s.return),t=s.return;while(t)}return s.tag===3?o:null}function Rh(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function Ph(t){if(gr(t)!==t)throw Error(n(188))}function _v(t){var s=t.alternate;if(!s){if(s=gr(t),s===null)throw Error(n(188));return s!==t?null:t}for(var o=t,a=s;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(a=u.return,a!==null){o=a;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Ph(u),t;if(h===a)return Ph(u),s;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=u,a=h;else{for(var g=!1,y=u.child;y;){if(y===o){g=!0,o=u,a=h;break}if(y===a){g=!0,a=u,o=h;break}y=y.sibling}if(!g){for(y=h.child;y;){if(y===o){g=!0,o=h,a=u;break}if(y===a){g=!0,a=h,o=u;break}y=y.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:s}function Ah(t){return t=_v(t),t!==null?bh(t):null}function bh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var s=bh(t);if(s!==null)return s;t=t.sibling}return null}var Oh=e.unstable_scheduleCallback,Dh=e.unstable_cancelCallback,yv=e.unstable_shouldYield,vv=e.unstable_requestPaint,We=e.unstable_now,wv=e.unstable_getCurrentPriorityLevel,La=e.unstable_ImmediatePriority,Lh=e.unstable_UserBlockingPriority,go=e.unstable_NormalPriority,xv=e.unstable_LowPriority,jh=e.unstable_IdlePriority,_o=null,tn=null;function Ev(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(_o,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Iv,Cv=Math.log,Sv=Math.LN2;function Iv(t){return t>>>=0,t===0?32:31-(Cv(t)/Sv|0)|0}var yo=64,vo=4194304;function Hs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wo(t,s){var o=t.pendingLanes;if(o===0)return 0;var a=0,u=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var y=g&~u;y!==0?a=Hs(y):(h&=g,h!==0&&(a=Hs(h)))}else g=o&~u,g!==0?a=Hs(g):h!==0&&(a=Hs(h));if(a===0)return 0;if(s!==0&&s!==a&&(s&u)===0&&(u=a&-a,h=s&-s,u>=h||u===16&&(h&4194240)!==0))return s;if((a&4)!==0&&(a|=o&16),s=t.entangledLanes,s!==0)for(t=t.entanglements,s&=a;0<s;)o=31-Ht(s),u=1<<o,a|=t[o],s&=~u;return a}function kv(t,s){switch(t){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(t,s){for(var o=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-Ht(h),y=1<<g,E=u[g];E===-1?((y&o)===0||(y&a)!==0)&&(u[g]=kv(y,s)):E<=s&&(t.expiredLanes|=y),h&=~y}}function ja(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mh(){var t=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),t}function Ma(t){for(var s=[],o=0;31>o;o++)s.push(t);return s}function Vs(t,s,o){t.pendingLanes|=s,s!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,s=31-Ht(s),t[s]=o}function Tv(t,s){var o=t.pendingLanes&~s;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=s,t.mutableReadLanes&=s,t.entangledLanes&=s,s=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Ht(o),h=1<<u;s[u]=0,a[u]=-1,t[u]=-1,o&=~h}}function Ua(t,s){var o=t.entangledLanes|=s;for(t=t.entanglements;o;){var a=31-Ht(o),u=1<<a;u&s|t[a]&s&&(t[a]|=s),o&=~u}}var ye=0;function Uh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Fh,Fa,zh,Bh,Wh,za=!1,xo=[],Pn=null,An=null,bn=null,$s=new Map,Gs=new Map,On=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,s){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":$s.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(s.pointerId)}}function Ks(t,s,o,a,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:s,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[u]},s!==null&&(s=li(s),s!==null&&Fa(s)),t):(t.eventSystemFlags|=a,s=t.targetContainers,u!==null&&s.indexOf(u)===-1&&s.push(u),t)}function Pv(t,s,o,a,u){switch(s){case"focusin":return Pn=Ks(Pn,t,s,o,a,u),!0;case"dragenter":return An=Ks(An,t,s,o,a,u),!0;case"mouseover":return bn=Ks(bn,t,s,o,a,u),!0;case"pointerover":var h=u.pointerId;return $s.set(h,Ks($s.get(h)||null,t,s,o,a,u)),!0;case"gotpointercapture":return h=u.pointerId,Gs.set(h,Ks(Gs.get(h)||null,t,s,o,a,u)),!0}return!1}function Vh(t){var s=_r(t.target);if(s!==null){var o=gr(s);if(o!==null){if(s=o.tag,s===13){if(s=Rh(o),s!==null){t.blockedOn=s,Wh(t.priority,function(){zh(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eo(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var o=Wa(t.domEventName,t.eventSystemFlags,s[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Ra=a,o.target.dispatchEvent(a),Ra=null}else return s=li(o),s!==null&&Fa(s),t.blockedOn=o,!1;s.shift()}return!0}function $h(t,s,o){Eo(t)&&o.delete(s)}function Av(){za=!1,Pn!==null&&Eo(Pn)&&(Pn=null),An!==null&&Eo(An)&&(An=null),bn!==null&&Eo(bn)&&(bn=null),$s.forEach($h),Gs.forEach($h)}function qs(t,s){t.blockedOn===s&&(t.blockedOn=null,za||(za=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Av)))}function Qs(t){function s(u){return qs(u,t)}if(0<xo.length){qs(xo[0],t);for(var o=1;o<xo.length;o++){var a=xo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Pn!==null&&qs(Pn,t),An!==null&&qs(An,t),bn!==null&&qs(bn,t),$s.forEach(s),Gs.forEach(s),o=0;o<On.length;o++)a=On[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<On.length&&(o=On[0],o.blockedOn===null);)Vh(o),o.blockedOn===null&&On.shift()}var qr=F.ReactCurrentBatchConfig,Co=!0;function bv(t,s,o,a){var u=ye,h=qr.transition;qr.transition=null;try{ye=1,Ba(t,s,o,a)}finally{ye=u,qr.transition=h}}function Ov(t,s,o,a){var u=ye,h=qr.transition;qr.transition=null;try{ye=4,Ba(t,s,o,a)}finally{ye=u,qr.transition=h}}function Ba(t,s,o,a){if(Co){var u=Wa(t,s,o,a);if(u===null)ic(t,s,a,So,o),Hh(t,a);else if(Pv(u,t,s,o,a))a.stopPropagation();else if(Hh(t,a),s&4&&-1<Rv.indexOf(t)){for(;u!==null;){var h=li(u);if(h!==null&&Fh(h),h=Wa(t,s,o,a),h===null&&ic(t,s,a,So,o),h===u)break;u=h}u!==null&&a.stopPropagation()}else ic(t,s,a,null,o)}}var So=null;function Wa(t,s,o,a){if(So=null,t=Pa(a),t=_r(t),t!==null)if(s=gr(t),s===null)t=null;else if(o=s.tag,o===13){if(t=Rh(s),t!==null)return t;t=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null);return So=t,null}function Gh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case La:return 1;case Lh:return 4;case go:case xv:return 16;case jh:return 536870912;default:return 16}default:return 16}}var Dn=null,Ha=null,Io=null;function Kh(){if(Io)return Io;var t,s=Ha,o=s.length,a,u="value"in Dn?Dn.value:Dn.textContent,h=u.length;for(t=0;t<o&&s[t]===u[t];t++);var g=o-t;for(a=1;a<=g&&s[o-a]===u[h-a];a++);return Io=u.slice(t,1<a?1-a:void 0)}function ko(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function qh(){return!1}function Rt(t){function s(o,a,u,h,g){this._reactName=o,this._targetInst=u,this.type=a,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?No:qh,this.isPropagationStopped=qh,this}return H(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),s}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=Rt(Qr),Ys=H({},Qr,{view:0,detail:0}),Dv=Rt(Ys),$a,Ga,Xs,To=H({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?($a=t.screenX-Xs.screenX,Ga=t.screenY-Xs.screenY):Ga=$a=0,Xs=t),$a)},movementY:function(t){return"movementY"in t?t.movementY:Ga}}),Qh=Rt(To),Lv=H({},To,{dataTransfer:0}),jv=Rt(Lv),Mv=H({},Ys,{relatedTarget:0}),Ka=Rt(Mv),Uv=H({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Rt(Uv),zv=H({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bv=Rt(zv),Wv=H({},Qr,{data:0}),Yh=Rt(Wv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=$v[t])?!!s[t]:!1}function qa(){return Gv}var Kv=H({},Ys,{key:function(t){if(t.key){var s=Hv[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qa,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=Rt(Kv),Qv=H({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Rt(Qv),Yv=H({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qa}),Xv=Rt(Yv),Jv=H({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Rt(Jv),e0=H({},To,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Rt(e0),n0=[9,13,27,32],Qa=p&&"CompositionEvent"in window,Js=null;p&&"documentMode"in document&&(Js=document.documentMode);var r0=p&&"TextEvent"in window&&!Js,Jh=p&&(!Qa||Js&&8<Js&&11>=Js),Zh=" ",ef=!1;function tf(t,s){switch(t){case"keyup":return n0.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function s0(t,s){switch(t){case"compositionend":return nf(s);case"keypress":return s.which!==32?null:(ef=!0,Zh);case"textInput":return t=s.data,t===Zh&&ef?null:t;default:return null}}function i0(t,s){if(Yr)return t==="compositionend"||!Qa&&tf(t,s)?(t=Kh(),Io=Ha=Dn=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Jh&&s.locale!=="ko"?null:s.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rf(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!o0[t.type]:s==="textarea"}function sf(t,s,o,a){Sh(a),s=Oo(s,"onChange"),0<s.length&&(o=new Va("onChange","change",null,o,a),t.push({event:o,listeners:s}))}var Zs=null,ei=null;function l0(t){Cf(t,0)}function Ro(t){var s=ts(t);if(hh(s))return t}function a0(t,s){if(t==="change")return s}var of=!1;if(p){var Ya;if(p){var Xa="oninput"in document;if(!Xa){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),Xa=typeof lf.oninput=="function"}Ya=Xa}else Ya=!1;of=Ya&&(!document.documentMode||9<document.documentMode)}function af(){Zs&&(Zs.detachEvent("onpropertychange",cf),ei=Zs=null)}function cf(t){if(t.propertyName==="value"&&Ro(ei)){var s=[];sf(s,ei,t,Pa(t)),Th(l0,s)}}function c0(t,s,o){t==="focusin"?(af(),Zs=s,ei=o,Zs.attachEvent("onpropertychange",cf)):t==="focusout"&&af()}function u0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ro(ei)}function d0(t,s){if(t==="click")return Ro(s)}function h0(t,s){if(t==="input"||t==="change")return Ro(s)}function f0(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Vt=typeof Object.is=="function"?Object.is:f0;function ti(t,s){if(Vt(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var o=Object.keys(t),a=Object.keys(s);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var u=o[a];if(!m.call(s,u)||!Vt(t[u],s[u]))return!1}return!0}function uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function df(t,s){var o=uf(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=s&&a>=s)return{node:o,offset:s-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=uf(o)}}function hf(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?hf(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function ff(){for(var t=window,s=ho();s instanceof t.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)t=s.contentWindow;else break;s=ho(t.document)}return s}function Ja(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}function p0(t){var s=ff(),o=t.focusedElem,a=t.selectionRange;if(s!==o&&o&&o.ownerDocument&&hf(o.ownerDocument.documentElement,o)){if(a!==null&&Ja(o)){if(s=a.start,t=a.end,t===void 0&&(t=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(t,o.value.length);else if(t=(s=o.ownerDocument||document)&&s.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(a.start,u);a=a.end===void 0?h:Math.min(a.end,u),!t.extend&&h>a&&(u=a,a=h,h=u),u=df(o,h);var g=df(o,a);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(s=s.createRange(),s.setStart(u.node,u.offset),t.removeAllRanges(),h>a?(t.addRange(s),t.extend(g.node,g.offset)):(s.setEnd(g.node,g.offset),t.addRange(s)))}}for(s=[],t=o;t=t.parentNode;)t.nodeType===1&&s.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<s.length;o++)t=s[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m0=p&&"documentMode"in document&&11>=document.documentMode,Xr=null,Za=null,ni=null,ec=!1;function pf(t,s,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ec||Xr==null||Xr!==ho(a)||(a=Xr,"selectionStart"in a&&Ja(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ni&&ti(ni,a)||(ni=a,a=Oo(Za,"onSelect"),0<a.length&&(s=new Va("onSelect","select",null,s,o),t.push({event:s,listeners:a}),s.target=Xr)))}function Po(t,s){var o={};return o[t.toLowerCase()]=s.toLowerCase(),o["Webkit"+t]="webkit"+s,o["Moz"+t]="moz"+s,o}var Jr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},tc={},mf={};p&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Ao(t){if(tc[t])return tc[t];if(!Jr[t])return t;var s=Jr[t],o;for(o in s)if(s.hasOwnProperty(o)&&o in mf)return tc[t]=s[o];return t}var gf=Ao("animationend"),_f=Ao("animationiteration"),yf=Ao("animationstart"),vf=Ao("transitionend"),wf=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,s){wf.set(t,s),c(s,[t])}for(var nc=0;nc<xf.length;nc++){var rc=xf[nc],g0=rc.toLowerCase(),_0=rc[0].toUpperCase()+rc.slice(1);Ln(g0,"on"+_0)}Ln(gf,"onAnimationEnd"),Ln(_f,"onAnimationIteration"),Ln(yf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(vf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Ef(t,s,o){var a=t.type||"unknown-event";t.currentTarget=o,gv(a,s,void 0,t),t.currentTarget=null}function Cf(t,s){s=(s&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],u=a.event;a=a.listeners;e:{var h=void 0;if(s)for(var g=a.length-1;0<=g;g--){var y=a[g],E=y.instance,N=y.currentTarget;if(y=y.listener,E!==h&&u.isPropagationStopped())break e;Ef(u,y,N),h=E}else for(g=0;g<a.length;g++){if(y=a[g],E=y.instance,N=y.currentTarget,y=y.listener,E!==h&&u.isPropagationStopped())break e;Ef(u,y,N),h=E}}}if(mo)throw t=Da,mo=!1,Da=null,t}function Te(t,s){var o=s[dc];o===void 0&&(o=s[dc]=new Set);var a=t+"__bubble";o.has(a)||(Sf(s,t,2,!1),o.add(a))}function sc(t,s,o){var a=0;s&&(a|=4),Sf(o,t,a,s)}var bo="_reactListening"+Math.random().toString(36).slice(2);function si(t){if(!t[bo]){t[bo]=!0,i.forEach(function(o){o!=="selectionchange"&&(y0.has(o)||sc(o,!1,t),sc(o,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[bo]||(s[bo]=!0,sc("selectionchange",!1,s))}}function Sf(t,s,o,a){switch(Gh(s)){case 1:var u=bv;break;case 4:u=Ov;break;default:u=Ba}o=u.bind(null,s,o,t),u=void 0,!Oa||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(s,o,{capture:!0,passive:u}):t.addEventListener(s,o,!0):u!==void 0?t.addEventListener(s,o,{passive:u}):t.addEventListener(s,o,!1)}function ic(t,s,o,a,u){var h=a;if((s&1)===0&&(s&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var y=a.stateNode.containerInfo;if(y===u||y.nodeType===8&&y.parentNode===u)break;if(g===4)for(g=a.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===u||E.nodeType===8&&E.parentNode===u))return;g=g.return}for(;y!==null;){if(g=_r(y),g===null)return;if(E=g.tag,E===5||E===6){a=h=g;continue e}y=y.parentNode}}a=a.return}Th(function(){var N=h,O=Pa(o),D=[];e:{var A=wf.get(t);if(A!==void 0){var B=Va,V=t;switch(t){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":B=qv;break;case"focusin":V="focus",B=Ka;break;case"focusout":V="blur",B=Ka;break;case"beforeblur":case"afterblur":B=Ka;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Xv;break;case gf:case _f:case yf:B=Fv;break;case vf:B=Zv;break;case"scroll":B=Dv;break;case"wheel":B=t0;break;case"copy":case"cut":case"paste":B=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Xh}var $=(s&4)!==0,He=!$&&t==="scroll",I=$?A!==null?A+"Capture":null:A;$=[];for(var C=N,k;C!==null;){k=C;var L=k.stateNode;if(k.tag===5&&L!==null&&(k=L,I!==null&&(L=zs(C,I),L!=null&&$.push(ii(C,L,k)))),He)break;C=C.return}0<$.length&&(A=new B(A,V,null,o,O),D.push({event:A,listeners:$}))}}if((s&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",A&&o!==Ra&&(V=o.relatedTarget||o.fromElement)&&(_r(V)||V[hn]))break e;if((B||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,B?(V=o.relatedTarget||o.toElement,B=N,V=V?_r(V):null,V!==null&&(He=gr(V),V!==He||V.tag!==5&&V.tag!==6)&&(V=null)):(B=null,V=N),B!==V)){if($=Qh,L="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&($=Xh,L="onPointerLeave",I="onPointerEnter",C="pointer"),He=B==null?A:ts(B),k=V==null?A:ts(V),A=new $(L,C+"leave",B,o,O),A.target=He,A.relatedTarget=k,L=null,_r(O)===N&&($=new $(I,C+"enter",V,o,O),$.target=k,$.relatedTarget=He,L=$),He=L,B&&V)t:{for($=B,I=V,C=0,k=$;k;k=Zr(k))C++;for(k=0,L=I;L;L=Zr(L))k++;for(;0<C-k;)$=Zr($),C--;for(;0<k-C;)I=Zr(I),k--;for(;C--;){if($===I||I!==null&&$===I.alternate)break t;$=Zr($),I=Zr(I)}$=null}else $=null;B!==null&&If(D,A,B,$,!1),V!==null&&He!==null&&If(D,He,V,$,!0)}}e:{if(A=N?ts(N):window,B=A.nodeName&&A.nodeName.toLowerCase(),B==="select"||B==="input"&&A.type==="file")var K=a0;else if(rf(A))if(of)K=h0;else{K=u0;var Q=c0}else(B=A.nodeName)&&B.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(K=d0);if(K&&(K=K(t,N))){sf(D,K,o,O);break e}Q&&Q(t,A,N),t==="focusout"&&(Q=A._wrapperState)&&Q.controlled&&A.type==="number"&&Sa(A,"number",A.value)}switch(Q=N?ts(N):window,t){case"focusin":(rf(Q)||Q.contentEditable==="true")&&(Xr=Q,Za=N,ni=null);break;case"focusout":ni=Za=Xr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,pf(D,o,O);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":pf(D,o,O)}var Y;if(Qa)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Yr?tf(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Jh&&o.locale!=="ko"&&(Yr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Yr&&(Y=Kh()):(Dn=O,Ha="value"in Dn?Dn.value:Dn.textContent,Yr=!0)),Q=Oo(N,ee),0<Q.length&&(ee=new Yh(ee,t,null,o,O),D.push({event:ee,listeners:Q}),Y?ee.data=Y:(Y=nf(o),Y!==null&&(ee.data=Y)))),(Y=r0?s0(t,o):i0(t,o))&&(N=Oo(N,"onBeforeInput"),0<N.length&&(O=new Yh("onBeforeInput","beforeinput",null,o,O),D.push({event:O,listeners:N}),O.data=Y))}Cf(D,s)})}function ii(t,s,o){return{instance:t,listener:s,currentTarget:o}}function Oo(t,s){for(var o=s+"Capture",a=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=zs(t,o),h!=null&&a.unshift(ii(t,h,u)),h=zs(t,s),h!=null&&a.push(ii(t,h,u))),t=t.return}return a}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function If(t,s,o,a,u){for(var h=s._reactName,g=[];o!==null&&o!==a;){var y=o,E=y.alternate,N=y.stateNode;if(E!==null&&E===a)break;y.tag===5&&N!==null&&(y=N,u?(E=zs(o,h),E!=null&&g.unshift(ii(o,E,y))):u||(E=zs(o,h),E!=null&&g.push(ii(o,E,y)))),o=o.return}g.length!==0&&t.push({event:s,listeners:g})}var v0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function kf(t){return(typeof t=="string"?t:""+t).replace(v0,`
`).replace(w0,"")}function Do(t,s,o){if(s=kf(s),kf(t)!==s&&o)throw Error(n(425))}function Lo(){}var oc=null,lc=null;function ac(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(C0)}:cc;function C0(t){setTimeout(function(){throw t})}function uc(t,s){var o=s,a=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(a===0){t.removeChild(u),Qs(s);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=u}while(o);Qs(s)}function jn(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return t}function Tf(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return t;s--}else o==="/$"&&s++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),nn="__reactFiber$"+es,oi="__reactProps$"+es,hn="__reactContainer$"+es,dc="__reactEvents$"+es,S0="__reactListeners$"+es,I0="__reactHandles$"+es;function _r(t){var s=t[nn];if(s)return s;for(var o=t.parentNode;o;){if(s=o[hn]||o[nn]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(t=Tf(t);t!==null;){if(o=t[nn])return o;t=Tf(t)}return s}t=o,o=t.parentNode}return null}function li(t){return t=t[nn]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function jo(t){return t[oi]||null}var hc=[],ns=-1;function Mn(t){return{current:t}}function Re(t){0>ns||(t.current=hc[ns],hc[ns]=null,ns--)}function Ie(t,s){ns++,hc[ns]=t.current,t.current=s}var Un={},lt=Mn(Un),xt=Mn(!1),yr=Un;function rs(t,s){var o=t.type.contextTypes;if(!o)return Un;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===s)return a.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=s[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=u),u}function Et(t){return t=t.childContextTypes,t!=null}function Mo(){Re(xt),Re(lt)}function Rf(t,s,o){if(lt.current!==Un)throw Error(n(168));Ie(lt,s),Ie(xt,o)}function Pf(t,s,o){var a=t.stateNode;if(s=s.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var u in a)if(!(u in s))throw Error(n(108,Se(t)||"Unknown",u));return H({},o,a)}function Uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Un,yr=lt.current,Ie(lt,t),Ie(xt,xt.current),!0}function Af(t,s,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Pf(t,s,yr),a.__reactInternalMemoizedMergedChildContext=t,Re(xt),Re(lt),Ie(lt,t)):Re(xt),Ie(xt,o)}var fn=null,Fo=!1,fc=!1;function bf(t){fn===null?fn=[t]:fn.push(t)}function k0(t){Fo=!0,bf(t)}function Fn(){if(!fc&&fn!==null){fc=!0;var t=0,s=ye;try{var o=fn;for(ye=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}fn=null,Fo=!1}catch(u){throw fn!==null&&(fn=fn.slice(t+1)),Oh(La,Fn),u}finally{ye=s,fc=!1}}return null}var ss=[],is=0,zo=null,Bo=0,Lt=[],jt=0,vr=null,pn=1,mn="";function wr(t,s){ss[is++]=Bo,ss[is++]=zo,zo=t,Bo=s}function Of(t,s,o){Lt[jt++]=pn,Lt[jt++]=mn,Lt[jt++]=vr,vr=t;var a=pn;t=mn;var u=32-Ht(a)-1;a&=~(1<<u),o+=1;var h=32-Ht(s)+u;if(30<h){var g=u-u%5;h=(a&(1<<g)-1).toString(32),a>>=g,u-=g,pn=1<<32-Ht(s)+u|o<<u|a,mn=h+t}else pn=1<<h|o<<u|a,mn=t}function pc(t){t.return!==null&&(wr(t,1),Of(t,1,0))}function mc(t){for(;t===zo;)zo=ss[--is],ss[is]=null,Bo=ss[--is],ss[is]=null;for(;t===vr;)vr=Lt[--jt],Lt[jt]=null,mn=Lt[--jt],Lt[jt]=null,pn=Lt[--jt],Lt[jt]=null}var Pt=null,At=null,Oe=!1,$t=null;function Df(t,s){var o=zt(5,null,null,0);o.elementType="DELETED",o.stateNode=s,o.return=t,s=t.deletions,s===null?(t.deletions=[o],t.flags|=16):s.push(o)}function Lf(t,s){switch(t.tag){case 5:var o=t.type;return s=s.nodeType!==1||o.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(t.stateNode=s,Pt=t,At=jn(s.firstChild),!0):!1;case 6:return s=t.pendingProps===""||s.nodeType!==3?null:s,s!==null?(t.stateNode=s,Pt=t,At=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(o=vr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:s,treeContext:o,retryLane:1073741824},o=zt(18,null,null,0),o.stateNode=s,o.return=t,t.child=o,Pt=t,At=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(Oe){var s=At;if(s){var o=s;if(!Lf(t,s)){if(gc(t))throw Error(n(418));s=jn(o.nextSibling);var a=Pt;s&&Lf(t,s)?Df(a,o):(t.flags=t.flags&-4097|2,Oe=!1,Pt=t)}}else{if(gc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Oe=!1,Pt=t}}}function jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Wo(t){if(t!==Pt)return!1;if(!Oe)return jf(t),Oe=!0,!1;var s;if((s=t.tag!==3)&&!(s=t.tag!==5)&&(s=t.type,s=s!=="head"&&s!=="body"&&!ac(t.type,t.memoizedProps)),s&&(s=At)){if(gc(t))throw Mf(),Error(n(418));for(;s;)Df(t,s),s=jn(s.nextSibling)}if(jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(s===0){At=jn(t.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++}t=t.nextSibling}At=null}}else At=Pt?jn(t.stateNode.nextSibling):null;return!0}function Mf(){for(var t=At;t;)t=jn(t.nextSibling)}function os(){At=Pt=null,Oe=!1}function yc(t){$t===null?$t=[t]:$t.push(t)}var N0=F.ReactCurrentBatchConfig;function ai(t,s,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var u=a,h=""+t;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===h?s.ref:(s=function(g){var y=u.refs;g===null?delete y[h]:y[h]=g},s._stringRef=h,s)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ho(t,s){throw t=Object.prototype.toString.call(s),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t))}function Uf(t){var s=t._init;return s(t._payload)}function Ff(t){function s(I,C){if(t){var k=I.deletions;k===null?(I.deletions=[C],I.flags|=16):k.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)s(I,C),C=C.sibling;return null}function a(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function u(I,C){return I=Kn(I,C),I.index=0,I.sibling=null,I}function h(I,C,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<C?(I.flags|=2,C):k):(I.flags|=2,C)):(I.flags|=1048576,C)}function g(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,C,k,L){return C===null||C.tag!==6?(C=cu(k,I.mode,L),C.return=I,C):(C=u(C,k),C.return=I,C)}function E(I,C,k,L){var K=k.type;return K===de?O(I,C,k.props.children,L,k.key):C!==null&&(C.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ge&&Uf(K)===C.type)?(L=u(C,k.props),L.ref=ai(I,C,k),L.return=I,L):(L=fl(k.type,k.key,k.props,null,I.mode,L),L.ref=ai(I,C,k),L.return=I,L)}function N(I,C,k,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==k.containerInfo||C.stateNode.implementation!==k.implementation?(C=uu(k,I.mode,L),C.return=I,C):(C=u(C,k.children||[]),C.return=I,C)}function O(I,C,k,L,K){return C===null||C.tag!==7?(C=Tr(k,I.mode,L,K),C.return=I,C):(C=u(C,k),C.return=I,C)}function D(I,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return C=cu(""+C,I.mode,k),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case se:return k=fl(C.type,C.key,C.props,null,I.mode,k),k.ref=ai(I,null,C),k.return=I,k;case q:return C=uu(C,I.mode,k),C.return=I,C;case Ge:var L=C._init;return D(I,L(C._payload),k)}if(Ms(C)||X(C))return C=Tr(C,I.mode,k,null),C.return=I,C;Ho(I,C)}return null}function A(I,C,k,L){var K=C!==null?C.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return K!==null?null:y(I,C,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case se:return k.key===K?E(I,C,k,L):null;case q:return k.key===K?N(I,C,k,L):null;case Ge:return K=k._init,A(I,C,K(k._payload),L)}if(Ms(k)||X(k))return K!==null?null:O(I,C,k,L,null);Ho(I,k)}return null}function B(I,C,k,L,K){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(k)||null,y(C,I,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case se:return I=I.get(L.key===null?k:L.key)||null,E(C,I,L,K);case q:return I=I.get(L.key===null?k:L.key)||null,N(C,I,L,K);case Ge:var Q=L._init;return B(I,C,k,Q(L._payload),K)}if(Ms(L)||X(L))return I=I.get(k)||null,O(C,I,L,K,null);Ho(C,L)}return null}function V(I,C,k,L){for(var K=null,Q=null,Y=C,ee=C=0,et=null;Y!==null&&ee<k.length;ee++){Y.index>ee?(et=Y,Y=null):et=Y.sibling;var me=A(I,Y,k[ee],L);if(me===null){Y===null&&(Y=et);break}t&&Y&&me.alternate===null&&s(I,Y),C=h(me,C,ee),Q===null?K=me:Q.sibling=me,Q=me,Y=et}if(ee===k.length)return o(I,Y),Oe&&wr(I,ee),K;if(Y===null){for(;ee<k.length;ee++)Y=D(I,k[ee],L),Y!==null&&(C=h(Y,C,ee),Q===null?K=Y:Q.sibling=Y,Q=Y);return Oe&&wr(I,ee),K}for(Y=a(I,Y);ee<k.length;ee++)et=B(Y,I,ee,k[ee],L),et!==null&&(t&&et.alternate!==null&&Y.delete(et.key===null?ee:et.key),C=h(et,C,ee),Q===null?K=et:Q.sibling=et,Q=et);return t&&Y.forEach(function(qn){return s(I,qn)}),Oe&&wr(I,ee),K}function $(I,C,k,L){var K=X(k);if(typeof K!="function")throw Error(n(150));if(k=K.call(k),k==null)throw Error(n(151));for(var Q=K=null,Y=C,ee=C=0,et=null,me=k.next();Y!==null&&!me.done;ee++,me=k.next()){Y.index>ee?(et=Y,Y=null):et=Y.sibling;var qn=A(I,Y,me.value,L);if(qn===null){Y===null&&(Y=et);break}t&&Y&&qn.alternate===null&&s(I,Y),C=h(qn,C,ee),Q===null?K=qn:Q.sibling=qn,Q=qn,Y=et}if(me.done)return o(I,Y),Oe&&wr(I,ee),K;if(Y===null){for(;!me.done;ee++,me=k.next())me=D(I,me.value,L),me!==null&&(C=h(me,C,ee),Q===null?K=me:Q.sibling=me,Q=me);return Oe&&wr(I,ee),K}for(Y=a(I,Y);!me.done;ee++,me=k.next())me=B(Y,I,ee,me.value,L),me!==null&&(t&&me.alternate!==null&&Y.delete(me.key===null?ee:me.key),C=h(me,C,ee),Q===null?K=me:Q.sibling=me,Q=me);return t&&Y.forEach(function(ow){return s(I,ow)}),Oe&&wr(I,ee),K}function He(I,C,k,L){if(typeof k=="object"&&k!==null&&k.type===de&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case se:e:{for(var K=k.key,Q=C;Q!==null;){if(Q.key===K){if(K=k.type,K===de){if(Q.tag===7){o(I,Q.sibling),C=u(Q,k.props.children),C.return=I,I=C;break e}}else if(Q.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ge&&Uf(K)===Q.type){o(I,Q.sibling),C=u(Q,k.props),C.ref=ai(I,Q,k),C.return=I,I=C;break e}o(I,Q);break}else s(I,Q);Q=Q.sibling}k.type===de?(C=Tr(k.props.children,I.mode,L,k.key),C.return=I,I=C):(L=fl(k.type,k.key,k.props,null,I.mode,L),L.ref=ai(I,C,k),L.return=I,I=L)}return g(I);case q:e:{for(Q=k.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===k.containerInfo&&C.stateNode.implementation===k.implementation){o(I,C.sibling),C=u(C,k.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else s(I,C);C=C.sibling}C=uu(k,I.mode,L),C.return=I,I=C}return g(I);case Ge:return Q=k._init,He(I,C,Q(k._payload),L)}if(Ms(k))return V(I,C,k,L);if(X(k))return $(I,C,k,L);Ho(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,C!==null&&C.tag===6?(o(I,C.sibling),C=u(C,k),C.return=I,I=C):(o(I,C),C=cu(k,I.mode,L),C.return=I,I=C),g(I)):o(I,C)}return He}var ls=Ff(!0),zf=Ff(!1),Vo=Mn(null),$o=null,as=null,vc=null;function wc(){vc=as=$o=null}function xc(t){var s=Vo.current;Re(Vo),t._currentValue=s}function Ec(t,s,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,a!==null&&(a.childLanes|=s)):a!==null&&(a.childLanes&s)!==s&&(a.childLanes|=s),t===o)break;t=t.return}}function cs(t,s){$o=t,vc=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&s)!==0&&(Ct=!0),t.firstContext=null)}function Mt(t){var s=t._currentValue;if(vc!==t)if(t={context:t,memoizedValue:s,next:null},as===null){if($o===null)throw Error(n(308));as=t,$o.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return s}var xr=null;function Cc(t){xr===null?xr=[t]:xr.push(t)}function Bf(t,s,o,a){var u=s.interleaved;return u===null?(o.next=o,Cc(s)):(o.next=u.next,u.next=o),s.interleaved=o,gn(t,a)}function gn(t,s){t.lanes|=s;var o=t.alternate;for(o!==null&&(o.lanes|=s),o=t,t=t.return;t!==null;)t.childLanes|=s,o=t.alternate,o!==null&&(o.childLanes|=s),o=t,t=t.return;return o.tag===3?o.stateNode:null}var zn=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wf(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,s){return{eventTime:t,lane:s,tag:0,payload:null,callback:null,next:null}}function Bn(t,s,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(he&2)!==0){var u=a.pending;return u===null?s.next=s:(s.next=u.next,u.next=s),a.pending=s,gn(t,o)}return u=a.interleaved,u===null?(s.next=s,Cc(a)):(s.next=u.next,u.next=s),a.interleaved=s,gn(t,o)}function Go(t,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194240)!==0)){var a=s.lanes;a&=t.pendingLanes,o|=a,s.lanes=o,Ua(t,o)}}function Hf(t,s){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=s:h=h.next=s}else u=h=s;o={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=s:t.next=s,o.lastBaseUpdate=s}function Ko(t,s,o,a){var u=t.updateQueue;zn=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,y=u.shared.pending;if(y!==null){u.shared.pending=null;var E=y,N=E.next;E.next=null,g===null?h=N:g.next=N,g=E;var O=t.alternate;O!==null&&(O=O.updateQueue,y=O.lastBaseUpdate,y!==g&&(y===null?O.firstBaseUpdate=N:y.next=N,O.lastBaseUpdate=E))}if(h!==null){var D=u.baseState;g=0,O=N=E=null,y=h;do{var A=y.lane,B=y.eventTime;if((a&A)===A){O!==null&&(O=O.next={eventTime:B,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var V=t,$=y;switch(A=s,B=o,$.tag){case 1:if(V=$.payload,typeof V=="function"){D=V.call(B,D,A);break e}D=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=$.payload,A=typeof V=="function"?V.call(B,D,A):V,A==null)break e;D=H({},D,A);break e;case 2:zn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,A=u.effects,A===null?u.effects=[y]:A.push(y))}else B={eventTime:B,lane:A,tag:y.tag,payload:y.payload,callback:y.callback,next:null},O===null?(N=O=B,E=D):O=O.next=B,g|=A;if(y=y.next,y===null){if(y=u.shared.pending,y===null)break;A=y,y=A.next,A.next=null,u.lastBaseUpdate=A,u.shared.pending=null}}while(!0);if(O===null&&(E=D),u.baseState=E,u.firstBaseUpdate=N,u.lastBaseUpdate=O,s=u.shared.interleaved,s!==null){u=s;do g|=u.lane,u=u.next;while(u!==s)}else h===null&&(u.shared.lanes=0);Sr|=g,t.lanes=g,t.memoizedState=D}}function Vf(t,s,o){if(t=s.effects,s.effects=null,t!==null)for(s=0;s<t.length;s++){var a=t[s],u=a.callback;if(u!==null){if(a.callback=null,a=o,typeof u!="function")throw Error(n(191,u));u.call(a)}}}var ci={},rn=Mn(ci),ui=Mn(ci),di=Mn(ci);function Er(t){if(t===ci)throw Error(n(174));return t}function Ic(t,s){switch(Ie(di,s),Ie(ui,t),Ie(rn,ci),t=s.nodeType,t){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ka(null,"");break;default:t=t===8?s.parentNode:s,s=t.namespaceURI||null,t=t.tagName,s=ka(s,t)}Re(rn),Ie(rn,s)}function us(){Re(rn),Re(ui),Re(di)}function $f(t){Er(di.current);var s=Er(rn.current),o=ka(s,t.type);s!==o&&(Ie(ui,t),Ie(rn,o))}function kc(t){ui.current===t&&(Re(rn),Re(ui))}var De=Mn(0);function qo(t){for(var s=t;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Nc=[];function Tc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Qo=F.ReactCurrentDispatcher,Rc=F.ReactCurrentBatchConfig,Cr=0,Le=null,Ke=null,Je=null,Yo=!1,hi=!1,fi=0,T0=0;function at(){throw Error(n(321))}function Pc(t,s){if(s===null)return!1;for(var o=0;o<s.length&&o<t.length;o++)if(!Vt(t[o],s[o]))return!1;return!0}function Ac(t,s,o,a,u,h){if(Cr=h,Le=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Qo.current=t===null||t.memoizedState===null?b0:O0,t=o(a,u),hi){h=0;do{if(hi=!1,fi=0,25<=h)throw Error(n(301));h+=1,Je=Ke=null,s.updateQueue=null,Qo.current=D0,t=o(a,u)}while(hi)}if(Qo.current=Zo,s=Ke!==null&&Ke.next!==null,Cr=0,Je=Ke=Le=null,Yo=!1,s)throw Error(n(300));return t}function bc(){var t=fi!==0;return fi=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Le.memoizedState=Je=t:Je=Je.next=t,Je}function Ut(){if(Ke===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var s=Je===null?Le.memoizedState:Je.next;if(s!==null)Je=s,Ke=t;else{if(t===null)throw Error(n(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Je===null?Le.memoizedState=Je=t:Je=Je.next=t}return Je}function pi(t,s){return typeof s=="function"?s(t):s}function Oc(t){var s=Ut(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Ke,u=a.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}a.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,a=a.baseState;var y=g=null,E=null,N=h;do{var O=N.lane;if((Cr&O)===O)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),a=N.hasEagerState?N.eagerState:t(a,N.action);else{var D={lane:O,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(y=E=D,g=a):E=E.next=D,Le.lanes|=O,Sr|=O}N=N.next}while(N!==null&&N!==h);E===null?g=a:E.next=y,Vt(a,s.memoizedState)||(Ct=!0),s.memoizedState=a,s.baseState=g,s.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Le.lanes|=h,Sr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[s.memoizedState,o.dispatch]}function Dc(t){var s=Ut(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,u=o.pending,h=s.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=t(h,g.action),g=g.next;while(g!==u);Vt(h,s.memoizedState)||(Ct=!0),s.memoizedState=h,s.baseQueue===null&&(s.baseState=h),o.lastRenderedState=h}return[h,a]}function Gf(){}function Kf(t,s){var o=Le,a=Ut(),u=s(),h=!Vt(a.memoizedState,u);if(h&&(a.memoizedState=u,Ct=!0),a=a.queue,Lc(Yf.bind(null,o,a,t),[t]),a.getSnapshot!==s||h||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,mi(9,Qf.bind(null,o,a,u,s),void 0,null),Ze===null)throw Error(n(349));(Cr&30)!==0||qf(o,s,u)}return u}function qf(t,s,o){t.flags|=16384,t={getSnapshot:s,value:o},s=Le.updateQueue,s===null?(s={lastEffect:null,stores:null},Le.updateQueue=s,s.stores=[t]):(o=s.stores,o===null?s.stores=[t]:o.push(t))}function Qf(t,s,o,a){s.value=o,s.getSnapshot=a,Xf(s)&&Jf(t)}function Yf(t,s,o){return o(function(){Xf(s)&&Jf(t)})}function Xf(t){var s=t.getSnapshot;t=t.value;try{var o=s();return!Vt(t,o)}catch{return!0}}function Jf(t){var s=gn(t,1);s!==null&&Qt(s,t,1,-1)}function Zf(t){var s=sn();return typeof t=="function"&&(t=t()),s.memoizedState=s.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:t},s.queue=t,t=t.dispatch=A0.bind(null,Le,t),[s.memoizedState,t]}function mi(t,s,o,a){return t={tag:t,create:s,destroy:o,deps:a,next:null},s=Le.updateQueue,s===null?(s={lastEffect:null,stores:null},Le.updateQueue=s,s.lastEffect=t.next=t):(o=s.lastEffect,o===null?s.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,s.lastEffect=t)),t}function ep(){return Ut().memoizedState}function Xo(t,s,o,a){var u=sn();Le.flags|=t,u.memoizedState=mi(1|s,o,void 0,a===void 0?null:a)}function Jo(t,s,o,a){var u=Ut();a=a===void 0?null:a;var h=void 0;if(Ke!==null){var g=Ke.memoizedState;if(h=g.destroy,a!==null&&Pc(a,g.deps)){u.memoizedState=mi(s,o,h,a);return}}Le.flags|=t,u.memoizedState=mi(1|s,o,h,a)}function tp(t,s){return Xo(8390656,8,t,s)}function Lc(t,s){return Jo(2048,8,t,s)}function np(t,s){return Jo(4,2,t,s)}function rp(t,s){return Jo(4,4,t,s)}function sp(t,s){if(typeof s=="function")return t=t(),s(t),function(){s(null)};if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function ip(t,s,o){return o=o!=null?o.concat([t]):null,Jo(4,4,sp.bind(null,s,t),o)}function jc(){}function op(t,s){var o=Ut();s=s===void 0?null:s;var a=o.memoizedState;return a!==null&&s!==null&&Pc(s,a[1])?a[0]:(o.memoizedState=[t,s],t)}function lp(t,s){var o=Ut();s=s===void 0?null:s;var a=o.memoizedState;return a!==null&&s!==null&&Pc(s,a[1])?a[0]:(t=t(),o.memoizedState=[t,s],t)}function ap(t,s,o){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=o):(Vt(o,s)||(o=Mh(),Le.lanes|=o,Sr|=o,t.baseState=!0),s)}function R0(t,s){var o=ye;ye=o!==0&&4>o?o:4,t(!0);var a=Rc.transition;Rc.transition={};try{t(!1),s()}finally{ye=o,Rc.transition=a}}function cp(){return Ut().memoizedState}function P0(t,s,o){var a=$n(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},up(t))dp(s,o);else if(o=Bf(t,s,o,a),o!==null){var u=mt();Qt(o,t,a,u),hp(o,s,a)}}function A0(t,s,o){var a=$n(t),u={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(up(t))dp(s,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=s.lastRenderedReducer,h!==null))try{var g=s.lastRenderedState,y=h(g,o);if(u.hasEagerState=!0,u.eagerState=y,Vt(y,g)){var E=s.interleaved;E===null?(u.next=u,Cc(s)):(u.next=E.next,E.next=u),s.interleaved=u;return}}catch{}finally{}o=Bf(t,s,u,a),o!==null&&(u=mt(),Qt(o,t,a,u),hp(o,s,a))}}function up(t){var s=t.alternate;return t===Le||s!==null&&s===Le}function dp(t,s){hi=Yo=!0;var o=t.pending;o===null?s.next=s:(s.next=o.next,o.next=s),t.pending=s}function hp(t,s,o){if((o&4194240)!==0){var a=s.lanes;a&=t.pendingLanes,o|=a,s.lanes=o,Ua(t,o)}}var Zo={readContext:Mt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},b0={readContext:Mt,useCallback:function(t,s){return sn().memoizedState=[t,s===void 0?null:s],t},useContext:Mt,useEffect:tp,useImperativeHandle:function(t,s,o){return o=o!=null?o.concat([t]):null,Xo(4194308,4,sp.bind(null,s,t),o)},useLayoutEffect:function(t,s){return Xo(4194308,4,t,s)},useInsertionEffect:function(t,s){return Xo(4,2,t,s)},useMemo:function(t,s){var o=sn();return s=s===void 0?null:s,t=t(),o.memoizedState=[t,s],t},useReducer:function(t,s,o){var a=sn();return s=o!==void 0?o(s):s,a.memoizedState=a.baseState=s,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},a.queue=t,t=t.dispatch=P0.bind(null,Le,t),[a.memoizedState,t]},useRef:function(t){var s=sn();return t={current:t},s.memoizedState=t},useState:Zf,useDebugValue:jc,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Zf(!1),s=t[0];return t=R0.bind(null,t[1]),sn().memoizedState=t,[s,t]},useMutableSource:function(){},useSyncExternalStore:function(t,s,o){var a=Le,u=sn();if(Oe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=s(),Ze===null)throw Error(n(349));(Cr&30)!==0||qf(a,s,o)}u.memoizedState=o;var h={value:o,getSnapshot:s};return u.queue=h,tp(Yf.bind(null,a,h,t),[t]),a.flags|=2048,mi(9,Qf.bind(null,a,h,o,s),void 0,null),o},useId:function(){var t=sn(),s=Ze.identifierPrefix;if(Oe){var o=mn,a=pn;o=(a&~(1<<32-Ht(a)-1)).toString(32)+o,s=":"+s+"R"+o,o=fi++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=T0++,s=":"+s+"r"+o.toString(32)+":";return t.memoizedState=s},unstable_isNewReconciler:!1},O0={readContext:Mt,useCallback:op,useContext:Mt,useEffect:Lc,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:lp,useReducer:Oc,useRef:ep,useState:function(){return Oc(pi)},useDebugValue:jc,useDeferredValue:function(t){var s=Ut();return ap(s,Ke.memoizedState,t)},useTransition:function(){var t=Oc(pi)[0],s=Ut().memoizedState;return[t,s]},useMutableSource:Gf,useSyncExternalStore:Kf,useId:cp,unstable_isNewReconciler:!1},D0={readContext:Mt,useCallback:op,useContext:Mt,useEffect:Lc,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:lp,useReducer:Dc,useRef:ep,useState:function(){return Dc(pi)},useDebugValue:jc,useDeferredValue:function(t){var s=Ut();return Ke===null?s.memoizedState=t:ap(s,Ke.memoizedState,t)},useTransition:function(){var t=Dc(pi)[0],s=Ut().memoizedState;return[t,s]},useMutableSource:Gf,useSyncExternalStore:Kf,useId:cp,unstable_isNewReconciler:!1};function Gt(t,s){if(t&&t.defaultProps){s=H({},s),t=t.defaultProps;for(var o in t)s[o]===void 0&&(s[o]=t[o]);return s}return s}function Mc(t,s,o,a){s=t.memoizedState,o=o(a,s),o=o==null?s:H({},s,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var el={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,s,o){t=t._reactInternals;var a=mt(),u=$n(t),h=_n(a,u);h.payload=s,o!=null&&(h.callback=o),s=Bn(t,h,u),s!==null&&(Qt(s,t,u,a),Go(s,t,u))},enqueueReplaceState:function(t,s,o){t=t._reactInternals;var a=mt(),u=$n(t),h=_n(a,u);h.tag=1,h.payload=s,o!=null&&(h.callback=o),s=Bn(t,h,u),s!==null&&(Qt(s,t,u,a),Go(s,t,u))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var o=mt(),a=$n(t),u=_n(o,a);u.tag=2,s!=null&&(u.callback=s),s=Bn(t,u,a),s!==null&&(Qt(s,t,a,o),Go(s,t,a))}};function fp(t,s,o,a,u,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,g):s.prototype&&s.prototype.isPureReactComponent?!ti(o,a)||!ti(u,h):!0}function pp(t,s,o){var a=!1,u=Un,h=s.contextType;return typeof h=="object"&&h!==null?h=Mt(h):(u=Et(s)?yr:lt.current,a=s.contextTypes,h=(a=a!=null)?rs(t,u):Un),s=new s(o,h),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=el,t.stateNode=s,s._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),s}function mp(t,s,o,a){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,a),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,a),s.state!==t&&el.enqueueReplaceState(s,s.state,null)}function Uc(t,s,o,a){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Sc(t);var h=s.contextType;typeof h=="object"&&h!==null?u.context=Mt(h):(h=Et(s)?yr:lt.current,u.context=rs(t,h)),u.state=t.memoizedState,h=s.getDerivedStateFromProps,typeof h=="function"&&(Mc(t,s,h,o),u.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(s=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),s!==u.state&&el.enqueueReplaceState(u,u.state,null),Ko(t,o,u,a),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,s){try{var o="",a=s;do o+=fe(a),a=a.return;while(a);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:s,stack:u,digest:null}}function Fc(t,s,o){return{value:t,source:null,stack:o??null,digest:s??null}}function zc(t,s){try{console.error(s.value)}catch(o){setTimeout(function(){throw o})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function gp(t,s,o){o=_n(-1,o),o.tag=3,o.payload={element:null};var a=s.value;return o.callback=function(){ll||(ll=!0,tu=a),zc(t,s)},o}function _p(t,s,o){o=_n(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var u=s.value;o.payload=function(){return a(u)},o.callback=function(){zc(t,s)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){zc(t,s),typeof a!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var g=s.stack;this.componentDidCatch(s.value,{componentStack:g!==null?g:""})}),o}function yp(t,s,o){var a=t.pingCache;if(a===null){a=t.pingCache=new L0;var u=new Set;a.set(s,u)}else u=a.get(s),u===void 0&&(u=new Set,a.set(s,u));u.has(o)||(u.add(o),t=Q0.bind(null,t,s,o),s.then(t,t))}function vp(t){do{var s;if((s=t.tag===13)&&(s=t.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return t;t=t.return}while(t!==null);return null}function wp(t,s,o,a,u){return(t.mode&1)===0?(t===s?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(s=_n(-1,1),s.tag=2,Bn(o,s,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var j0=F.ReactCurrentOwner,Ct=!1;function pt(t,s,o,a){s.child=t===null?zf(s,null,o,a):ls(s,t.child,o,a)}function xp(t,s,o,a,u){o=o.render;var h=s.ref;return cs(s,u),a=Ac(t,s,o,a,h,u),o=bc(),t!==null&&!Ct?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~u,yn(t,s,u)):(Oe&&o&&pc(s),s.flags|=1,pt(t,s,a,u),s.child)}function Ep(t,s,o,a,u){if(t===null){var h=o.type;return typeof h=="function"&&!au(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(s.tag=15,s.type=h,Cp(t,s,h,a,u)):(t=fl(o.type,null,a,s,s.mode,u),t.ref=s.ref,t.return=s,s.child=t)}if(h=t.child,(t.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:ti,o(g,a)&&t.ref===s.ref)return yn(t,s,u)}return s.flags|=1,t=Kn(h,a),t.ref=s.ref,t.return=s,s.child=t}function Cp(t,s,o,a,u){if(t!==null){var h=t.memoizedProps;if(ti(h,a)&&t.ref===s.ref)if(Ct=!1,s.pendingProps=a=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Ct=!0);else return s.lanes=t.lanes,yn(t,s,u)}return Bc(t,s,o,a,u)}function Sp(t,s,o){var a=s.pendingProps,u=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(fs,bt),bt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:t,cachePool:null,transitions:null},s.updateQueue=null,Ie(fs,bt),bt|=t,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Ie(fs,bt),bt|=a}else h!==null?(a=h.baseLanes|o,s.memoizedState=null):a=o,Ie(fs,bt),bt|=a;return pt(t,s,u,o),s.child}function Ip(t,s){var o=s.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(s.flags|=512,s.flags|=2097152)}function Bc(t,s,o,a,u){var h=Et(o)?yr:lt.current;return h=rs(s,h),cs(s,u),o=Ac(t,s,o,a,h,u),a=bc(),t!==null&&!Ct?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~u,yn(t,s,u)):(Oe&&a&&pc(s),s.flags|=1,pt(t,s,o,u),s.child)}function kp(t,s,o,a,u){if(Et(o)){var h=!0;Uo(s)}else h=!1;if(cs(s,u),s.stateNode===null)nl(t,s),pp(s,o,a),Uc(s,o,a,u),a=!0;else if(t===null){var g=s.stateNode,y=s.memoizedProps;g.props=y;var E=g.context,N=o.contextType;typeof N=="object"&&N!==null?N=Mt(N):(N=Et(o)?yr:lt.current,N=rs(s,N));var O=o.getDerivedStateFromProps,D=typeof O=="function"||typeof g.getSnapshotBeforeUpdate=="function";D||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==a||E!==N)&&mp(s,g,a,N),zn=!1;var A=s.memoizedState;g.state=A,Ko(s,a,g,u),E=s.memoizedState,y!==a||A!==E||xt.current||zn?(typeof O=="function"&&(Mc(s,o,O,a),E=s.memoizedState),(y=zn||fp(s,o,y,a,A,E,N))?(D||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=a,s.memoizedState=E),g.props=a,g.state=E,g.context=N,a=y):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),a=!1)}else{g=s.stateNode,Wf(t,s),y=s.memoizedProps,N=s.type===s.elementType?y:Gt(s.type,y),g.props=N,D=s.pendingProps,A=g.context,E=o.contextType,typeof E=="object"&&E!==null?E=Mt(E):(E=Et(o)?yr:lt.current,E=rs(s,E));var B=o.getDerivedStateFromProps;(O=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(y!==D||A!==E)&&mp(s,g,a,E),zn=!1,A=s.memoizedState,g.state=A,Ko(s,a,g,u);var V=s.memoizedState;y!==D||A!==V||xt.current||zn?(typeof B=="function"&&(Mc(s,o,B,a),V=s.memoizedState),(N=zn||fp(s,o,N,a,A,V,E)||!1)?(O||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,V,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,V,E)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(s.flags|=1024),s.memoizedProps=a,s.memoizedState=V),g.props=a,g.state=V,g.context=E,a=N):(typeof g.componentDidUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&A===t.memoizedState||(s.flags|=1024),a=!1)}return Wc(t,s,o,a,h,u)}function Wc(t,s,o,a,u,h){Ip(t,s);var g=(s.flags&128)!==0;if(!a&&!g)return u&&Af(s,o,!1),yn(t,s,h);a=s.stateNode,j0.current=s;var y=g&&typeof o.getDerivedStateFromError!="function"?null:a.render();return s.flags|=1,t!==null&&g?(s.child=ls(s,t.child,null,h),s.child=ls(s,null,y,h)):pt(t,s,y,h),s.memoizedState=a.state,u&&Af(s,o,!0),s.child}function Np(t){var s=t.stateNode;s.pendingContext?Rf(t,s.pendingContext,s.pendingContext!==s.context):s.context&&Rf(t,s.context,!1),Ic(t,s.containerInfo)}function Tp(t,s,o,a,u){return os(),yc(u),s.flags|=256,pt(t,s,o,a),s.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rp(t,s,o){var a=s.pendingProps,u=De.current,h=!1,g=(s.flags&128)!==0,y;if((y=g)||(y=t!==null&&t.memoizedState===null?!1:(u&2)!==0),y?(h=!0,s.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ie(De,u&1),t===null)return _c(s),t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((s.mode&1)===0?s.lanes=1:t.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(g=a.children,t=a.fallback,h?(a=s.mode,h=s.child,g={mode:"hidden",children:g},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=pl(g,a,0,null),t=Tr(t,a,o,null),h.return=s,t.return=s,h.sibling=t,s.child=h,s.child.memoizedState=Vc(o),s.memoizedState=Hc,t):$c(s,g));if(u=t.memoizedState,u!==null&&(y=u.dehydrated,y!==null))return M0(t,s,g,a,y,u,o);if(h){h=a.fallback,g=s.mode,u=t.child,y=u.sibling;var E={mode:"hidden",children:a.children};return(g&1)===0&&s.child!==u?(a=s.child,a.childLanes=0,a.pendingProps=E,s.deletions=null):(a=Kn(u,E),a.subtreeFlags=u.subtreeFlags&14680064),y!==null?h=Kn(y,h):(h=Tr(h,g,o,null),h.flags|=2),h.return=s,a.return=s,a.sibling=h,s.child=a,a=h,h=s.child,g=t.child.memoizedState,g=g===null?Vc(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,s.memoizedState=Hc,a}return h=t.child,t=h.sibling,a=Kn(h,{mode:"visible",children:a.children}),(s.mode&1)===0&&(a.lanes=o),a.return=s,a.sibling=null,t!==null&&(o=s.deletions,o===null?(s.deletions=[t],s.flags|=16):o.push(t)),s.child=a,s.memoizedState=null,a}function $c(t,s){return s=pl({mode:"visible",children:s},t.mode,0,null),s.return=t,t.child=s}function tl(t,s,o,a){return a!==null&&yc(a),ls(s,t.child,null,o),t=$c(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function M0(t,s,o,a,u,h,g){if(o)return s.flags&256?(s.flags&=-257,a=Fc(Error(n(422))),tl(t,s,g,a)):s.memoizedState!==null?(s.child=t.child,s.flags|=128,null):(h=a.fallback,u=s.mode,a=pl({mode:"visible",children:a.children},u,0,null),h=Tr(h,u,g,null),h.flags|=2,a.return=s,h.return=s,a.sibling=h,s.child=a,(s.mode&1)!==0&&ls(s,t.child,null,g),s.child.memoizedState=Vc(g),s.memoizedState=Hc,h);if((s.mode&1)===0)return tl(t,s,g,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=Fc(h,a,void 0),tl(t,s,g,a)}if(y=(g&t.childLanes)!==0,Ct||y){if(a=Ze,a!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(a.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,gn(t,u),Qt(a,t,u,-1))}return lu(),a=Fc(Error(n(421))),tl(t,s,g,a)}return u.data==="$?"?(s.flags|=128,s.child=t.child,s=Y0.bind(null,t),u._reactRetry=s,null):(t=h.treeContext,At=jn(u.nextSibling),Pt=s,Oe=!0,$t=null,t!==null&&(Lt[jt++]=pn,Lt[jt++]=mn,Lt[jt++]=vr,pn=t.id,mn=t.overflow,vr=s),s=$c(s,a.children),s.flags|=4096,s)}function Pp(t,s,o){t.lanes|=s;var a=t.alternate;a!==null&&(a.lanes|=s),Ec(t.return,s,o)}function Gc(t,s,o,a,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:u}:(h.isBackwards=s,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=u)}function Ap(t,s,o){var a=s.pendingProps,u=a.revealOrder,h=a.tail;if(pt(t,s,a.children,o),a=De.current,(a&2)!==0)a=a&1|2,s.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,o,s);else if(t.tag===19)Pp(t,o,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Ie(De,a),(s.mode&1)===0)s.memoizedState=null;else switch(u){case"forwards":for(o=s.child,u=null;o!==null;)t=o.alternate,t!==null&&qo(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=s.child,s.child=null):(u=o.sibling,o.sibling=null),Gc(s,!1,u,o,h);break;case"backwards":for(o=null,u=s.child,s.child=null;u!==null;){if(t=u.alternate,t!==null&&qo(t)===null){s.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Gc(s,!0,o,null,h);break;case"together":Gc(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function nl(t,s){(s.mode&1)===0&&t!==null&&(t.alternate=null,s.alternate=null,s.flags|=2)}function yn(t,s,o){if(t!==null&&(s.dependencies=t.dependencies),Sr|=s.lanes,(o&s.childLanes)===0)return null;if(t!==null&&s.child!==t.child)throw Error(n(153));if(s.child!==null){for(t=s.child,o=Kn(t,t.pendingProps),s.child=o,o.return=s;t.sibling!==null;)t=t.sibling,o=o.sibling=Kn(t,t.pendingProps),o.return=s;o.sibling=null}return s.child}function U0(t,s,o){switch(s.tag){case 3:Np(s),os();break;case 5:$f(s);break;case 1:Et(s.type)&&Uo(s);break;case 4:Ic(s,s.stateNode.containerInfo);break;case 10:var a=s.type._context,u=s.memoizedProps.value;Ie(Vo,a._currentValue),a._currentValue=u;break;case 13:if(a=s.memoizedState,a!==null)return a.dehydrated!==null?(Ie(De,De.current&1),s.flags|=128,null):(o&s.child.childLanes)!==0?Rp(t,s,o):(Ie(De,De.current&1),t=yn(t,s,o),t!==null?t.sibling:null);Ie(De,De.current&1);break;case 19:if(a=(o&s.childLanes)!==0,(t.flags&128)!==0){if(a)return Ap(t,s,o);s.flags|=128}if(u=s.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ie(De,De.current),a)break;return null;case 22:case 23:return s.lanes=0,Sp(t,s,o)}return yn(t,s,o)}var bp,Kc,Op,Dp;bp=function(t,s){for(var o=s.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Kc=function(){},Op=function(t,s,o,a){var u=t.memoizedProps;if(u!==a){t=s.stateNode,Er(rn.current);var h=null;switch(o){case"input":u=Ea(t,u),a=Ea(t,a),h=[];break;case"select":u=H({},u,{value:void 0}),a=H({},a,{value:void 0}),h=[];break;case"textarea":u=Ia(t,u),a=Ia(t,a),h=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Lo)}Na(o,a);var g;o=null;for(N in u)if(!a.hasOwnProperty(N)&&u.hasOwnProperty(N)&&u[N]!=null)if(N==="style"){var y=u[N];for(g in y)y.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in a){var E=a[N];if(y=u?.[N],a.hasOwnProperty(N)&&E!==y&&(E!=null||y!=null))if(N==="style")if(y){for(g in y)!y.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in E)E.hasOwnProperty(g)&&y[g]!==E[g]&&(o||(o={}),o[g]=E[g])}else o||(h||(h=[]),h.push(N,o)),o=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&Te("scroll",t),h||y===E||(h=[])):(h=h||[]).push(N,E))}o&&(h=h||[]).push("style",o);var N=h;(s.updateQueue=N)&&(s.flags|=4)}},Dp=function(t,s,o,a){o!==a&&(s.flags|=4)};function gi(t,s){if(!Oe)switch(t.tailMode){case"hidden":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function ct(t){var s=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(s)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=o,s}function F0(t,s,o){var a=s.pendingProps;switch(mc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(s),null;case 1:return Et(s.type)&&Mo(),ct(s),null;case 3:return a=s.stateNode,us(),Re(xt),Re(lt),Tc(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wo(s)?s.flags|=4:t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,$t!==null&&(su($t),$t=null))),Kc(t,s),ct(s),null;case 5:kc(s);var u=Er(di.current);if(o=s.type,t!==null&&s.stateNode!=null)Op(t,s,o,a,u),t.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!a){if(s.stateNode===null)throw Error(n(166));return ct(s),null}if(t=Er(rn.current),Wo(s)){a=s.stateNode,o=s.type;var h=s.memoizedProps;switch(a[nn]=s,a[oi]=h,t=(s.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(u=0;u<ri.length;u++)Te(ri[u],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":fh(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":gh(a,h),Te("invalid",a)}Na(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var y=h[g];g==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&Do(a.textContent,y,t),u=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&Do(a.textContent,y,t),u=["children",""+y]):l.hasOwnProperty(g)&&y!=null&&g==="onScroll"&&Te("scroll",a)}switch(o){case"input":uo(a),mh(a,h,!0);break;case"textarea":uo(a),yh(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Lo)}a=u,s.updateQueue=a,a!==null&&(s.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=g.createElement(o,{is:a.is}):(t=g.createElement(o),o==="select"&&(g=t,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):t=g.createElementNS(t,o),t[nn]=s,t[oi]=a,bp(t,s,!1,!1),s.stateNode=t;e:{switch(g=Ta(o,a),o){case"dialog":Te("cancel",t),Te("close",t),u=a;break;case"iframe":case"object":case"embed":Te("load",t),u=a;break;case"video":case"audio":for(u=0;u<ri.length;u++)Te(ri[u],t);u=a;break;case"source":Te("error",t),u=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),u=a;break;case"details":Te("toggle",t),u=a;break;case"input":fh(t,a),u=Ea(t,a),Te("invalid",t);break;case"option":u=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},u=H({},a,{value:void 0}),Te("invalid",t);break;case"textarea":gh(t,a),u=Ia(t,a),Te("invalid",t);break;default:u=a}Na(o,u),y=u;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?Eh(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&wh(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Us(t,E):typeof E=="number"&&Us(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Te("scroll",t):E!=null&&G(t,h,E,g))}switch(o){case"input":uo(t),mh(t,a,!1);break;case"textarea":uo(t),yh(t);break;case"option":a.value!=null&&t.setAttribute("value",""+_e(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?$r(t,!!a.multiple,h,!1):a.defaultValue!=null&&$r(t,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Lo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ct(s),null;case 6:if(t&&s.stateNode!=null)Dp(t,s,t.memoizedProps,a);else{if(typeof a!="string"&&s.stateNode===null)throw Error(n(166));if(o=Er(di.current),Er(rn.current),Wo(s)){if(a=s.stateNode,o=s.memoizedProps,a[nn]=s,(h=a.nodeValue!==o)&&(t=Pt,t!==null))switch(t.tag){case 3:Do(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Do(a.nodeValue,o,(t.mode&1)!==0)}h&&(s.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[nn]=s,s.stateNode=a}return ct(s),null;case 13:if(Re(De),a=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&At!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Mf(),os(),s.flags|=98560,h=!1;else if(h=Wo(s),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=s.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[nn]=s}else os(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ct(s),h=!1}else $t!==null&&(su($t),$t=null),h=!0;if(!h)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=o,s):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(s.child.flags|=8192,(s.mode&1)!==0&&(t===null||(De.current&1)!==0?qe===0&&(qe=3):lu())),s.updateQueue!==null&&(s.flags|=4),ct(s),null);case 4:return us(),Kc(t,s),t===null&&si(s.stateNode.containerInfo),ct(s),null;case 10:return xc(s.type._context),ct(s),null;case 17:return Et(s.type)&&Mo(),ct(s),null;case 19:if(Re(De),h=s.memoizedState,h===null)return ct(s),null;if(a=(s.flags&128)!==0,g=h.rendering,g===null)if(a)gi(h,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(g=qo(t),g!==null){for(s.flags|=128,gi(h,!1),a=g.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),s.subtreeFlags=0,a=o,o=s.child;o!==null;)h=o,t=a,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ie(De,De.current&1|2),s.child}t=t.sibling}h.tail!==null&&We()>ps&&(s.flags|=128,a=!0,gi(h,!1),s.lanes=4194304)}else{if(!a)if(t=qo(g),t!==null){if(s.flags|=128,a=!0,o=t.updateQueue,o!==null&&(s.updateQueue=o,s.flags|=4),gi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Oe)return ct(s),null}else 2*We()-h.renderingStartTime>ps&&o!==1073741824&&(s.flags|=128,a=!0,gi(h,!1),s.lanes=4194304);h.isBackwards?(g.sibling=s.child,s.child=g):(o=h.last,o!==null?o.sibling=g:s.child=g,h.last=g)}return h.tail!==null?(s=h.tail,h.rendering=s,h.tail=s.sibling,h.renderingStartTime=We(),s.sibling=null,o=De.current,Ie(De,a?o&1|2:o&1),s):(ct(s),null);case 22:case 23:return ou(),a=s.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(s.flags|=8192),a&&(s.mode&1)!==0?(bt&1073741824)!==0&&(ct(s),s.subtreeFlags&6&&(s.flags|=8192)):ct(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function z0(t,s){switch(mc(s),s.tag){case 1:return Et(s.type)&&Mo(),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return us(),Re(xt),Re(lt),Tc(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 5:return kc(s),null;case 13:if(Re(De),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(n(340));os()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return Re(De),null;case 4:return us(),null;case 10:return xc(s.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var rl=!1,ut=!1,B0=typeof WeakSet=="function"?WeakSet:Set,W=null;function hs(t,s){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Me(t,s,a)}else o.current=null}function qc(t,s,o){try{o()}catch(a){Me(t,s,a)}}var Lp=!1;function W0(t,s){if(oc=Co,t=ff(),Ja(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var u=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,y=-1,E=-1,N=0,O=0,D=t,A=null;t:for(;;){for(var B;D!==o||u!==0&&D.nodeType!==3||(y=g+u),D!==h||a!==0&&D.nodeType!==3||(E=g+a),D.nodeType===3&&(g+=D.nodeValue.length),(B=D.firstChild)!==null;)A=D,D=B;for(;;){if(D===t)break t;if(A===o&&++N===u&&(y=g),A===h&&++O===a&&(E=g),(B=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=B}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(lc={focusedElem:t,selectionRange:o},Co=!1,W=s;W!==null;)if(s=W,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,W=t;else for(;W!==null;){s=W;try{var V=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var $=V.memoizedProps,He=V.memoizedState,I=s.stateNode,C=I.getSnapshotBeforeUpdate(s.elementType===s.type?$:Gt(s.type,$),He);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var k=s.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){Me(s,s.return,L)}if(t=s.sibling,t!==null){t.return=s.return,W=t;break}W=s.return}return V=Lp,Lp=!1,V}function _i(t,s,o){var a=s.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&qc(s,o,h)}u=u.next}while(u!==a)}}function sl(t,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==s)}}function Qc(t){var s=t.ref;if(s!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof s=="function"?s(t):s.current=t}}function jp(t){var s=t.alternate;s!==null&&(t.alternate=null,jp(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&(delete s[nn],delete s[oi],delete s[dc],delete s[S0],delete s[I0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mp(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,s,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(t,s):o.insertBefore(t,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(t,o)):(s=o,s.appendChild(t)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Lo));else if(a!==4&&(t=t.child,t!==null))for(Yc(t,s,o),t=t.sibling;t!==null;)Yc(t,s,o),t=t.sibling}function Xc(t,s,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,s?o.insertBefore(t,s):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Xc(t,s,o),t=t.sibling;t!==null;)Xc(t,s,o),t=t.sibling}var rt=null,Kt=!1;function Wn(t,s,o){for(o=o.child;o!==null;)Fp(t,s,o),o=o.sibling}function Fp(t,s,o){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(_o,o)}catch{}switch(o.tag){case 5:ut||hs(o,s);case 6:var a=rt,u=Kt;rt=null,Wn(t,s,o),rt=a,Kt=u,rt!==null&&(Kt?(t=rt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rt.removeChild(o.stateNode));break;case 18:rt!==null&&(Kt?(t=rt,o=o.stateNode,t.nodeType===8?uc(t.parentNode,o):t.nodeType===1&&uc(t,o),Qs(t)):uc(rt,o.stateNode));break;case 4:a=rt,u=Kt,rt=o.stateNode.containerInfo,Kt=!0,Wn(t,s,o),rt=a,Kt=u;break;case 0:case 11:case 14:case 15:if(!ut&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&qc(o,s,g),u=u.next}while(u!==a)}Wn(t,s,o);break;case 1:if(!ut&&(hs(o,s),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){Me(o,s,y)}Wn(t,s,o);break;case 21:Wn(t,s,o);break;case 22:o.mode&1?(ut=(a=ut)||o.memoizedState!==null,Wn(t,s,o),ut=a):Wn(t,s,o);break;default:Wn(t,s,o)}}function zp(t){var s=t.updateQueue;if(s!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new B0),s.forEach(function(a){var u=X0.bind(null,t,a);o.has(a)||(o.add(a),a.then(u,u))})}}function qt(t,s){var o=s.deletions;if(o!==null)for(var a=0;a<o.length;a++){var u=o[a];try{var h=t,g=s,y=g;e:for(;y!==null;){switch(y.tag){case 5:rt=y.stateNode,Kt=!1;break e;case 3:rt=y.stateNode.containerInfo,Kt=!0;break e;case 4:rt=y.stateNode.containerInfo,Kt=!0;break e}y=y.return}if(rt===null)throw Error(n(160));Fp(h,g,u),rt=null,Kt=!1;var E=u.alternate;E!==null&&(E.return=null),u.return=null}catch(N){Me(u,s,N)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Bp(s,t),s=s.sibling}function Bp(t,s){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qt(s,t),on(t),a&4){try{_i(3,t,t.return),sl(3,t)}catch($){Me(t,t.return,$)}try{_i(5,t,t.return)}catch($){Me(t,t.return,$)}}break;case 1:qt(s,t),on(t),a&512&&o!==null&&hs(o,o.return);break;case 5:if(qt(s,t),on(t),a&512&&o!==null&&hs(o,o.return),t.flags&32){var u=t.stateNode;try{Us(u,"")}catch($){Me(t,t.return,$)}}if(a&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&ph(u,h),Ta(y,g);var N=Ta(y,h);for(g=0;g<E.length;g+=2){var O=E[g],D=E[g+1];O==="style"?Eh(u,D):O==="dangerouslySetInnerHTML"?wh(u,D):O==="children"?Us(u,D):G(u,O,D,N)}switch(y){case"input":Ca(u,h);break;case"textarea":_h(u,h);break;case"select":var A=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var B=h.value;B!=null?$r(u,!!h.multiple,B,!1):A!==!!h.multiple&&(h.defaultValue!=null?$r(u,!!h.multiple,h.defaultValue,!0):$r(u,!!h.multiple,h.multiple?[]:"",!1))}u[oi]=h}catch($){Me(t,t.return,$)}}break;case 6:if(qt(s,t),on(t),a&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch($){Me(t,t.return,$)}}break;case 3:if(qt(s,t),on(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Qs(s.containerInfo)}catch($){Me(t,t.return,$)}break;case 4:qt(s,t),on(t);break;case 13:qt(s,t),on(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(eu=We())),a&4&&zp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(ut=(N=ut)||O,qt(s,t),ut=N):qt(s,t),on(t),a&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!O&&(t.mode&1)!==0)for(W=t,O=t.child;O!==null;){for(D=W=O;W!==null;){switch(A=W,B=A.child,A.tag){case 0:case 11:case 14:case 15:_i(4,A,A.return);break;case 1:hs(A,A.return);var V=A.stateNode;if(typeof V.componentWillUnmount=="function"){a=A,o=A.return;try{s=a,V.props=s.memoizedProps,V.state=s.memoizedState,V.componentWillUnmount()}catch($){Me(a,o,$)}}break;case 5:hs(A,A.return);break;case 22:if(A.memoizedState!==null){Vp(D);continue}}B!==null?(B.return=A,W=B):Vp(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{u=D.stateNode,N?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=D.stateNode,E=D.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=xh("display",g))}catch($){Me(t,t.return,$)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=N?"":D.memoizedProps}catch($){Me(t,t.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:qt(s,t),on(t),a&4&&zp(t);break;case 21:break;default:qt(s,t),on(t)}}function on(t){var s=t.flags;if(s&2){try{e:{for(var o=t.return;o!==null;){if(Mp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(Us(u,""),a.flags&=-33);var h=Up(t);Xc(t,h,u);break;case 3:case 4:var g=a.stateNode.containerInfo,y=Up(t);Yc(t,y,g);break;default:throw Error(n(161))}}catch(E){Me(t,t.return,E)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function H0(t,s,o){W=t,Wp(t)}function Wp(t,s,o){for(var a=(t.mode&1)!==0;W!==null;){var u=W,h=u.child;if(u.tag===22&&a){var g=u.memoizedState!==null||rl;if(!g){var y=u.alternate,E=y!==null&&y.memoizedState!==null||ut;y=rl;var N=ut;if(rl=g,(ut=E)&&!N)for(W=u;W!==null;)g=W,E=g.child,g.tag===22&&g.memoizedState!==null?$p(u):E!==null?(E.return=g,W=E):$p(u);for(;h!==null;)W=h,Wp(h),h=h.sibling;W=u,rl=y,ut=N}Hp(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,W=h):Hp(t)}}function Hp(t){for(;W!==null;){var s=W;if((s.flags&8772)!==0){var o=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:ut||sl(5,s);break;case 1:var a=s.stateNode;if(s.flags&4&&!ut)if(o===null)a.componentDidMount();else{var u=s.elementType===s.type?o.memoizedProps:Gt(s.type,o.memoizedProps);a.componentDidUpdate(u,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=s.updateQueue;h!==null&&Vf(s,h,a);break;case 3:var g=s.updateQueue;if(g!==null){if(o=null,s.child!==null)switch(s.child.tag){case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}Vf(s,g,o)}break;case 5:var y=s.stateNode;if(o===null&&s.flags&4){o=y;var E=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var N=s.alternate;if(N!==null){var O=N.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&Qs(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ut||s.flags&512&&Qc(s)}catch(A){Me(s,s.return,A)}}if(s===t){W=null;break}if(o=s.sibling,o!==null){o.return=s.return,W=o;break}W=s.return}}function Vp(t){for(;W!==null;){var s=W;if(s===t){W=null;break}var o=s.sibling;if(o!==null){o.return=s.return,W=o;break}W=s.return}}function $p(t){for(;W!==null;){var s=W;try{switch(s.tag){case 0:case 11:case 15:var o=s.return;try{sl(4,s)}catch(E){Me(s,o,E)}break;case 1:var a=s.stateNode;if(typeof a.componentDidMount=="function"){var u=s.return;try{a.componentDidMount()}catch(E){Me(s,u,E)}}var h=s.return;try{Qc(s)}catch(E){Me(s,h,E)}break;case 5:var g=s.return;try{Qc(s)}catch(E){Me(s,g,E)}}}catch(E){Me(s,s.return,E)}if(s===t){W=null;break}var y=s.sibling;if(y!==null){y.return=s.return,W=y;break}W=s.return}}var V0=Math.ceil,il=F.ReactCurrentDispatcher,Jc=F.ReactCurrentOwner,Ft=F.ReactCurrentBatchConfig,he=0,Ze=null,Ve=null,st=0,bt=0,fs=Mn(0),qe=0,yi=null,Sr=0,ol=0,Zc=0,vi=null,St=null,eu=0,ps=1/0,vn=null,ll=!1,tu=null,Hn=null,al=!1,Vn=null,cl=0,wi=0,nu=null,ul=-1,dl=0;function mt(){return(he&6)!==0?We():ul!==-1?ul:ul=We()}function $n(t){return(t.mode&1)===0?1:(he&2)!==0&&st!==0?st&-st:N0.transition!==null?(dl===0&&(dl=Mh()),dl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:Gh(t.type)),t)}function Qt(t,s,o,a){if(50<wi)throw wi=0,nu=null,Error(n(185));Vs(t,o,a),((he&2)===0||t!==Ze)&&(t===Ze&&((he&2)===0&&(ol|=o),qe===4&&Gn(t,st)),It(t,a),o===1&&he===0&&(s.mode&1)===0&&(ps=We()+500,Fo&&Fn()))}function It(t,s){var o=t.callbackNode;Nv(t,s);var a=wo(t,t===Ze?st:0);if(a===0)o!==null&&Dh(o),t.callbackNode=null,t.callbackPriority=0;else if(s=a&-a,t.callbackPriority!==s){if(o!=null&&Dh(o),s===1)t.tag===0?k0(Kp.bind(null,t)):bf(Kp.bind(null,t)),E0(function(){(he&6)===0&&Fn()}),o=null;else{switch(Uh(a)){case 1:o=La;break;case 4:o=Lh;break;case 16:o=go;break;case 536870912:o=jh;break;default:o=go}o=tm(o,Gp.bind(null,t))}t.callbackPriority=s,t.callbackNode=o}}function Gp(t,s){if(ul=-1,dl=0,(he&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ms()&&t.callbackNode!==o)return null;var a=wo(t,t===Ze?st:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||s)s=hl(t,a);else{s=a;var u=he;he|=2;var h=Qp();(Ze!==t||st!==s)&&(vn=null,ps=We()+500,kr(t,s));do try{K0();break}catch(y){qp(t,y)}while(!0);wc(),il.current=h,he=u,Ve!==null?s=0:(Ze=null,st=0,s=qe)}if(s!==0){if(s===2&&(u=ja(t),u!==0&&(a=u,s=ru(t,u))),s===1)throw o=yi,kr(t,0),Gn(t,a),It(t,We()),o;if(s===6)Gn(t,a);else{if(u=t.current.alternate,(a&30)===0&&!$0(u)&&(s=hl(t,a),s===2&&(h=ja(t),h!==0&&(a=h,s=ru(t,h))),s===1))throw o=yi,kr(t,0),Gn(t,a),It(t,We()),o;switch(t.finishedWork=u,t.finishedLanes=a,s){case 0:case 1:throw Error(n(345));case 2:Nr(t,St,vn);break;case 3:if(Gn(t,a),(a&130023424)===a&&(s=eu+500-We(),10<s)){if(wo(t,0)!==0)break;if(u=t.suspendedLanes,(u&a)!==a){mt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=cc(Nr.bind(null,t,St,vn),s);break}Nr(t,St,vn);break;case 4:if(Gn(t,a),(a&4194240)===a)break;for(s=t.eventTimes,u=-1;0<a;){var g=31-Ht(a);h=1<<g,g=s[g],g>u&&(u=g),a&=~h}if(a=u,a=We()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*V0(a/1960))-a,10<a){t.timeoutHandle=cc(Nr.bind(null,t,St,vn),a);break}Nr(t,St,vn);break;case 5:Nr(t,St,vn);break;default:throw Error(n(329))}}}return It(t,We()),t.callbackNode===o?Gp.bind(null,t):null}function ru(t,s){var o=vi;return t.current.memoizedState.isDehydrated&&(kr(t,s).flags|=256),t=hl(t,s),t!==2&&(s=St,St=o,s!==null&&su(s)),t}function su(t){St===null?St=t:St.push.apply(St,t)}function $0(t){for(var s=t;;){if(s.flags&16384){var o=s.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var u=o[a],h=u.getSnapshot;u=u.value;try{if(!Vt(h(),u))return!1}catch{return!1}}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gn(t,s){for(s&=~Zc,s&=~ol,t.suspendedLanes|=s,t.pingedLanes&=~s,t=t.expirationTimes;0<s;){var o=31-Ht(s),a=1<<o;t[o]=-1,s&=~a}}function Kp(t){if((he&6)!==0)throw Error(n(327));ms();var s=wo(t,0);if((s&1)===0)return It(t,We()),null;var o=hl(t,s);if(t.tag!==0&&o===2){var a=ja(t);a!==0&&(s=a,o=ru(t,a))}if(o===1)throw o=yi,kr(t,0),Gn(t,s),It(t,We()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=s,Nr(t,St,vn),It(t,We()),null}function iu(t,s){var o=he;he|=1;try{return t(s)}finally{he=o,he===0&&(ps=We()+500,Fo&&Fn())}}function Ir(t){Vn!==null&&Vn.tag===0&&(he&6)===0&&ms();var s=he;he|=1;var o=Ft.transition,a=ye;try{if(Ft.transition=null,ye=1,t)return t()}finally{ye=a,Ft.transition=o,he=s,(he&6)===0&&Fn()}}function ou(){bt=fs.current,Re(fs)}function kr(t,s){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,x0(o)),Ve!==null)for(o=Ve.return;o!==null;){var a=o;switch(mc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Mo();break;case 3:us(),Re(xt),Re(lt),Tc();break;case 5:kc(a);break;case 4:us();break;case 13:Re(De);break;case 19:Re(De);break;case 10:xc(a.type._context);break;case 22:case 23:ou()}o=o.return}if(Ze=t,Ve=t=Kn(t.current,null),st=bt=s,qe=0,yi=null,Zc=ol=Sr=0,St=vi=null,xr!==null){for(s=0;s<xr.length;s++)if(o=xr[s],a=o.interleaved,a!==null){o.interleaved=null;var u=a.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,a.next=g}o.pending=a}xr=null}return t}function qp(t,s){do{var o=Ve;try{if(wc(),Qo.current=Zo,Yo){for(var a=Le.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}Yo=!1}if(Cr=0,Je=Ke=Le=null,hi=!1,fi=0,Jc.current=null,o===null||o.return===null){qe=1,yi=s,Ve=null;break}e:{var h=t,g=o.return,y=o,E=s;if(s=st,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,O=y,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var A=O.alternate;A?(O.updateQueue=A.updateQueue,O.memoizedState=A.memoizedState,O.lanes=A.lanes):(O.updateQueue=null,O.memoizedState=null)}var B=vp(g);if(B!==null){B.flags&=-257,wp(B,g,y,h,s),B.mode&1&&yp(h,N,s),s=B,E=N;var V=s.updateQueue;if(V===null){var $=new Set;$.add(E),s.updateQueue=$}else V.add(E);break e}else{if((s&1)===0){yp(h,N,s),lu();break e}E=Error(n(426))}}else if(Oe&&y.mode&1){var He=vp(g);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),wp(He,g,y,h,s),yc(ds(E,y));break e}}h=E=ds(E,y),qe!==4&&(qe=2),vi===null?vi=[h]:vi.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,s&=-s,h.lanes|=s;var I=gp(h,E,s);Hf(h,I);break e;case 1:y=E;var C=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Hn===null||!Hn.has(k)))){h.flags|=65536,s&=-s,h.lanes|=s;var L=_p(h,y,s);Hf(h,L);break e}}h=h.return}while(h!==null)}Xp(o)}catch(K){s=K,Ve===o&&o!==null&&(Ve=o=o.return);continue}break}while(!0)}function Qp(){var t=il.current;return il.current=Zo,t===null?Zo:t}function lu(){(qe===0||qe===3||qe===2)&&(qe=4),Ze===null||(Sr&268435455)===0&&(ol&268435455)===0||Gn(Ze,st)}function hl(t,s){var o=he;he|=2;var a=Qp();(Ze!==t||st!==s)&&(vn=null,kr(t,s));do try{G0();break}catch(u){qp(t,u)}while(!0);if(wc(),he=o,il.current=a,Ve!==null)throw Error(n(261));return Ze=null,st=0,qe}function G0(){for(;Ve!==null;)Yp(Ve)}function K0(){for(;Ve!==null&&!yv();)Yp(Ve)}function Yp(t){var s=em(t.alternate,t,bt);t.memoizedProps=t.pendingProps,s===null?Xp(t):Ve=s,Jc.current=null}function Xp(t){var s=t;do{var o=s.alternate;if(t=s.return,(s.flags&32768)===0){if(o=F0(o,s,bt),o!==null){Ve=o;return}}else{if(o=z0(o,s),o!==null){o.flags&=32767,Ve=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ve=null;return}}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=t}while(s!==null);qe===0&&(qe=5)}function Nr(t,s,o){var a=ye,u=Ft.transition;try{Ft.transition=null,ye=1,q0(t,s,o,a)}finally{Ft.transition=u,ye=a}return null}function q0(t,s,o,a){do ms();while(Vn!==null);if((he&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Tv(t,h),t===Ze&&(Ve=Ze=null,st=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||al||(al=!0,tm(go,function(){return ms(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Ft.transition,Ft.transition=null;var g=ye;ye=1;var y=he;he|=4,Jc.current=null,W0(t,o),Bp(o,t),p0(lc),Co=!!oc,lc=oc=null,t.current=o,H0(o),vv(),he=y,ye=g,Ft.transition=h}else t.current=o;if(al&&(al=!1,Vn=t,cl=u),h=t.pendingLanes,h===0&&(Hn=null),Ev(o.stateNode),It(t,We()),s!==null)for(a=t.onRecoverableError,o=0;o<s.length;o++)u=s[o],a(u.value,{componentStack:u.stack,digest:u.digest});if(ll)throw ll=!1,t=tu,tu=null,t;return(cl&1)!==0&&t.tag!==0&&ms(),h=t.pendingLanes,(h&1)!==0?t===nu?wi++:(wi=0,nu=t):wi=0,Fn(),null}function ms(){if(Vn!==null){var t=Uh(cl),s=Ft.transition,o=ye;try{if(Ft.transition=null,ye=16>t?16:t,Vn===null)var a=!1;else{if(t=Vn,Vn=null,cl=0,(he&6)!==0)throw Error(n(331));var u=he;for(he|=4,W=t.current;W!==null;){var h=W,g=h.child;if((W.flags&16)!==0){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var N=y[E];for(W=N;W!==null;){var O=W;switch(O.tag){case 0:case 11:case 15:_i(8,O,h)}var D=O.child;if(D!==null)D.return=O,W=D;else for(;W!==null;){O=W;var A=O.sibling,B=O.return;if(jp(O),O===N){W=null;break}if(A!==null){A.return=B,W=A;break}W=B}}}var V=h.alternate;if(V!==null){var $=V.child;if($!==null){V.child=null;do{var He=$.sibling;$.sibling=null,$=He}while($!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,W=g;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_i(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,W=I;break e}W=h.return}}var C=t.current;for(W=C;W!==null;){g=W;var k=g.child;if((g.subtreeFlags&2064)!==0&&k!==null)k.return=g,W=k;else e:for(g=C;W!==null;){if(y=W,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:sl(9,y)}}catch(K){Me(y,y.return,K)}if(y===g){W=null;break e}var L=y.sibling;if(L!==null){L.return=y.return,W=L;break e}W=y.return}}if(he=u,Fn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(_o,t)}catch{}a=!0}return a}finally{ye=o,Ft.transition=s}}return!1}function Jp(t,s,o){s=ds(o,s),s=gp(t,s,1),t=Bn(t,s,1),s=mt(),t!==null&&(Vs(t,1,s),It(t,s))}function Me(t,s,o){if(t.tag===3)Jp(t,t,o);else for(;s!==null;){if(s.tag===3){Jp(s,t,o);break}else if(s.tag===1){var a=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Hn===null||!Hn.has(a))){t=ds(o,t),t=_p(s,t,1),s=Bn(s,t,1),t=mt(),s!==null&&(Vs(s,1,t),It(s,t));break}}s=s.return}}function Q0(t,s,o){var a=t.pingCache;a!==null&&a.delete(s),s=mt(),t.pingedLanes|=t.suspendedLanes&o,Ze===t&&(st&o)===o&&(qe===4||qe===3&&(st&130023424)===st&&500>We()-eu?kr(t,0):Zc|=o),It(t,s)}function Zp(t,s){s===0&&((t.mode&1)===0?s=1:(s=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var o=mt();t=gn(t,s),t!==null&&(Vs(t,s,o),It(t,o))}function Y0(t){var s=t.memoizedState,o=0;s!==null&&(o=s.retryLane),Zp(t,o)}function X0(t,s){var o=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(s),Zp(t,o)}var em;em=function(t,s,o){if(t!==null)if(t.memoizedProps!==s.pendingProps||xt.current)Ct=!0;else{if((t.lanes&o)===0&&(s.flags&128)===0)return Ct=!1,U0(t,s,o);Ct=(t.flags&131072)!==0}else Ct=!1,Oe&&(s.flags&1048576)!==0&&Of(s,Bo,s.index);switch(s.lanes=0,s.tag){case 2:var a=s.type;nl(t,s),t=s.pendingProps;var u=rs(s,lt.current);cs(s,o),u=Ac(null,s,a,t,u,o);var h=bc();return s.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Et(a)?(h=!0,Uo(s)):h=!1,s.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Sc(s),u.updater=el,s.stateNode=u,u._reactInternals=s,Uc(s,a,t,o),s=Wc(null,s,a,!0,h,o)):(s.tag=0,Oe&&h&&pc(s),pt(null,s,u,o),s=s.child),s;case 16:a=s.elementType;e:{switch(nl(t,s),t=s.pendingProps,u=a._init,a=u(a._payload),s.type=a,u=s.tag=Z0(a),t=Gt(a,t),u){case 0:s=Bc(null,s,a,t,o);break e;case 1:s=kp(null,s,a,t,o);break e;case 11:s=xp(null,s,a,t,o);break e;case 14:s=Ep(null,s,a,Gt(a.type,t),o);break e}throw Error(n(306,a,""))}return s;case 0:return a=s.type,u=s.pendingProps,u=s.elementType===a?u:Gt(a,u),Bc(t,s,a,u,o);case 1:return a=s.type,u=s.pendingProps,u=s.elementType===a?u:Gt(a,u),kp(t,s,a,u,o);case 3:e:{if(Np(s),t===null)throw Error(n(387));a=s.pendingProps,h=s.memoizedState,u=h.element,Wf(t,s),Ko(s,a,null,o);var g=s.memoizedState;if(a=g.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},s.updateQueue.baseState=h,s.memoizedState=h,s.flags&256){u=ds(Error(n(423)),s),s=Tp(t,s,a,o,u);break e}else if(a!==u){u=ds(Error(n(424)),s),s=Tp(t,s,a,o,u);break e}else for(At=jn(s.stateNode.containerInfo.firstChild),Pt=s,Oe=!0,$t=null,o=zf(s,null,a,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(os(),a===u){s=yn(t,s,o);break e}pt(t,s,a,o)}s=s.child}return s;case 5:return $f(s),t===null&&_c(s),a=s.type,u=s.pendingProps,h=t!==null?t.memoizedProps:null,g=u.children,ac(a,u)?g=null:h!==null&&ac(a,h)&&(s.flags|=32),Ip(t,s),pt(t,s,g,o),s.child;case 6:return t===null&&_c(s),null;case 13:return Rp(t,s,o);case 4:return Ic(s,s.stateNode.containerInfo),a=s.pendingProps,t===null?s.child=ls(s,null,a,o):pt(t,s,a,o),s.child;case 11:return a=s.type,u=s.pendingProps,u=s.elementType===a?u:Gt(a,u),xp(t,s,a,u,o);case 7:return pt(t,s,s.pendingProps,o),s.child;case 8:return pt(t,s,s.pendingProps.children,o),s.child;case 12:return pt(t,s,s.pendingProps.children,o),s.child;case 10:e:{if(a=s.type._context,u=s.pendingProps,h=s.memoizedProps,g=u.value,Ie(Vo,a._currentValue),a._currentValue=g,h!==null)if(Vt(h.value,g)){if(h.children===u.children&&!xt.current){s=yn(t,s,o);break e}}else for(h=s.child,h!==null&&(h.return=s);h!==null;){var y=h.dependencies;if(y!==null){g=h.child;for(var E=y.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=_n(-1,o&-o),E.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var O=N.pending;O===null?E.next=E:(E.next=O.next,O.next=E),N.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),Ec(h.return,o,s),y.lanes|=o;break}E=E.next}}else if(h.tag===10)g=h.type===s.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,y=g.alternate,y!==null&&(y.lanes|=o),Ec(g,o,s),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===s){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}pt(t,s,u.children,o),s=s.child}return s;case 9:return u=s.type,a=s.pendingProps.children,cs(s,o),u=Mt(u),a=a(u),s.flags|=1,pt(t,s,a,o),s.child;case 14:return a=s.type,u=Gt(a,s.pendingProps),u=Gt(a.type,u),Ep(t,s,a,u,o);case 15:return Cp(t,s,s.type,s.pendingProps,o);case 17:return a=s.type,u=s.pendingProps,u=s.elementType===a?u:Gt(a,u),nl(t,s),s.tag=1,Et(a)?(t=!0,Uo(s)):t=!1,cs(s,o),pp(s,a,u),Uc(s,a,u,o),Wc(null,s,a,!0,t,o);case 19:return Ap(t,s,o);case 22:return Sp(t,s,o)}throw Error(n(156,s.tag))};function tm(t,s){return Oh(t,s)}function J0(t,s,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,s,o,a){return new J0(t,s,o,a)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z0(t){if(typeof t=="function")return au(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ce)return 11;if(t===wt)return 14}return 2}function Kn(t,s){var o=t.alternate;return o===null?(o=zt(t.tag,s,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=s,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,s=t.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function fl(t,s,o,a,u,h){var g=2;if(a=t,typeof t=="function")au(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case de:return Tr(o.children,u,h,s);case ve:g=8,u|=8;break;case ft:return t=zt(12,o,s,u|2),t.elementType=ft,t.lanes=h,t;case je:return t=zt(13,o,s,u),t.elementType=je,t.lanes=h,t;case Ae:return t=zt(19,o,s,u),t.elementType=Ae,t.lanes=h,t;case we:return pl(o,u,h,s);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $e:g=10;break e;case z:g=9;break e;case Ce:g=11;break e;case wt:g=14;break e;case Ge:g=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return s=zt(g,o,s,u),s.elementType=t,s.type=a,s.lanes=h,s}function Tr(t,s,o,a){return t=zt(7,t,a,s),t.lanes=o,t}function pl(t,s,o,a){return t=zt(22,t,a,s),t.elementType=we,t.lanes=o,t.stateNode={isHidden:!1},t}function cu(t,s,o){return t=zt(6,t,null,s),t.lanes=o,t}function uu(t,s,o){return s=zt(4,t.children!==null?t.children:[],t.key,s),s.lanes=o,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}function ew(t,s,o,a,u){this.tag=s,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ma(0),this.expirationTimes=Ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function du(t,s,o,a,u,h,g,y,E){return t=new ew(t,s,o,y,E),s===1?(s=1,h===!0&&(s|=8)):s=0,h=zt(3,null,null,s),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(h),t}function tw(t,s,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:a==null?null:""+a,children:t,containerInfo:s,implementation:o}}function nm(t){if(!t)return Un;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(n(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Et(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Et(o))return Pf(t,o,s)}return s}function rm(t,s,o,a,u,h,g,y,E){return t=du(o,a,!0,t,u,h,g,y,E),t.context=nm(null),o=t.current,a=mt(),u=$n(o),h=_n(a,u),h.callback=s??null,Bn(o,h,u),t.current.lanes=u,Vs(t,u,a),It(t,a),t}function ml(t,s,o,a){var u=s.current,h=mt(),g=$n(u);return o=nm(o),s.context===null?s.context=o:s.pendingContext=o,s=_n(h,g),s.payload={element:t},a=a===void 0?null:a,a!==null&&(s.callback=a),t=Bn(u,s,g),t!==null&&(Qt(t,u,g,h),Go(t,u,g)),g}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<s?o:s}}function hu(t,s){sm(t,s),(t=t.alternate)&&sm(t,s)}function nw(){return null}var im=typeof reportError=="function"?reportError:function(t){console.error(t)};function fu(t){this._internalRoot=t}_l.prototype.render=fu.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(n(409));ml(t,s,null,null)},_l.prototype.unmount=fu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Ir(function(){ml(null,t,null,null)}),s[hn]=null}};function _l(t){this._internalRoot=t}_l.prototype.unstable_scheduleHydration=function(t){if(t){var s=Bh();t={blockedOn:null,target:t,priority:s};for(var o=0;o<On.length&&s!==0&&s<On[o].priority;o++);On.splice(o,0,t),o===0&&Vh(t)}};function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function om(){}function rw(t,s,o,a,u){if(u){if(typeof a=="function"){var h=a;a=function(){var N=gl(g);h.call(N)}}var g=rm(s,a,t,0,null,!1,!1,"",om);return t._reactRootContainer=g,t[hn]=g.current,si(t.nodeType===8?t.parentNode:t),Ir(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof a=="function"){var y=a;a=function(){var N=gl(E);y.call(N)}}var E=du(t,0,!1,null,null,!1,!1,"",om);return t._reactRootContainer=E,t[hn]=E.current,si(t.nodeType===8?t.parentNode:t),Ir(function(){ml(s,E,o,a)}),E}function vl(t,s,o,a,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var y=u;u=function(){var E=gl(g);y.call(E)}}ml(s,g,t,u)}else g=rw(o,s,t,u,a);return gl(g)}Fh=function(t){switch(t.tag){case 3:var s=t.stateNode;if(s.current.memoizedState.isDehydrated){var o=Hs(s.pendingLanes);o!==0&&(Ua(s,o|1),It(s,We()),(he&6)===0&&(ps=We()+500,Fn()))}break;case 13:Ir(function(){var a=gn(t,1);if(a!==null){var u=mt();Qt(a,t,1,u)}}),hu(t,1)}},Fa=function(t){if(t.tag===13){var s=gn(t,134217728);if(s!==null){var o=mt();Qt(s,t,134217728,o)}hu(t,134217728)}},zh=function(t){if(t.tag===13){var s=$n(t),o=gn(t,s);if(o!==null){var a=mt();Qt(o,t,s,a)}hu(t,s)}},Bh=function(){return ye},Wh=function(t,s){var o=ye;try{return ye=t,s()}finally{ye=o}},Aa=function(t,s,o){switch(s){case"input":if(Ca(t,o),s=o.name,o.type==="radio"&&s!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<o.length;s++){var a=o[s];if(a!==t&&a.form===t.form){var u=jo(a);if(!u)throw Error(n(90));hh(a),Ca(a,u)}}}break;case"textarea":_h(t,o);break;case"select":s=o.value,s!=null&&$r(t,!!o.multiple,s,!1)}},kh=iu,Nh=Ir;var sw={usingClientEntryPoint:!1,Events:[li,ts,jo,Sh,Ih,iu]},xi={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iw={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ah(t),t===null?null:t.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{_o=wl.inject(iw),tn=wl}catch{}}return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sw,kt.createPortal=function(t,s){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(s))throw Error(n(200));return tw(t,s,null,o)},kt.createRoot=function(t,s){if(!pu(t))throw Error(n(299));var o=!1,a="",u=im;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(a=s.identifierPrefix),s.onRecoverableError!==void 0&&(u=s.onRecoverableError)),s=du(t,1,!1,null,null,o,!1,a,u),t[hn]=s.current,si(t.nodeType===8?t.parentNode:t),new fu(s)},kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ah(s),t=t===null?null:t.stateNode,t},kt.flushSync=function(t){return Ir(t)},kt.hydrate=function(t,s,o){if(!yl(s))throw Error(n(200));return vl(null,t,s,!0,o)},kt.hydrateRoot=function(t,s,o){if(!pu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,u=!1,h="",g=im;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),s=rm(s,null,t,1,o??null,u,!1,h,g),t[hn]=s.current,si(t),a)for(t=0;t<a.length;t++)o=a[t],u=o._getVersion,u=u(o._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[o,u]:s.mutableSourceEagerHydrationData.push(o,u);return new _l(s)},kt.render=function(t,s,o){if(!yl(s))throw Error(n(200));return vl(null,t,s,!1,o)},kt.unmountComponentAtNode=function(t){if(!yl(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1},kt.unstable_batchedUpdates=iu,kt.unstable_renderSubtreeIntoContainer=function(t,s,o,a){if(!yl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return vl(t,s,o,!1,a)},kt.version="18.3.1-next-f1338f8080-20240426",kt}var pm;function fw(){if(pm)return _u.exports;pm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_u.exports=hw(),_u.exports}var mm;function pw(){if(mm)return xl;mm=1;var r=fw();return xl.createRoot=r.createRoot,xl.hydrateRoot=r.hydrateRoot,xl}var mw=pw(),ne=cd();const gw=()=>{};var gm={};/**
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
 */const Ag={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const j=function(r,e){if(!r)throw As(e)},As=function(r){return new Error("Firebase Database ("+Ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const bg=function(r){const e=[];let n=0;for(let i=0;i<r.length;i++){let l=r.charCodeAt(i);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++i)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},_w=function(r){const e=[];let n=0,i=0;for(;n<r.length;){const l=r[n++];if(l<128)e[i++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];e[i++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],d=r[n++],p=r[n++],m=((l&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const c=r[n++],d=r[n++];e[i++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return e.join("")},ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,p=d?r[l+1]:0,m=l+2<r.length,_=m?r[l+2]:0,v=c>>2,x=(c&3)<<4|p>>4;let w=(p&15)<<2|_>>6,T=_&63;m||(T=64,d||(w=64)),i.push(n[v],n[x],n[w],n[T])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(bg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_w(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const _=l<r.length?n[r.charAt(l)]:64;++l;const x=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||p==null||_==null||x==null)throw new yw;const w=c<<2|p>>4;if(i.push(w),_!==64){const T=p<<4&240|_>>2;if(i.push(T),x!==64){const P=_<<6&192|x;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Og=function(r){const e=bg(r);return ud.encodeByteArray(e,!0)},Ol=function(r){return Og(r).replace(/\./g,"")},Dl=function(r){try{return ud.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vw(r){return Dg(void 0,r)}function Dg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ww(n)||(r[n]=Dg(r[n],e[n]));return r}function ww(r){return r!=="__proto__"}/**
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
 */function xw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ew=()=>xw().__FIREBASE_DEFAULTS__,Cw=()=>{if(typeof process>"u"||typeof gm>"u")return;const r=gm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Sw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Dl(r[1]);return e&&JSON.parse(e)},dd=()=>{try{return gw()||Ew()||Cw()||Sw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Lg=r=>dd()?.emulatorHosts?.[r],jg=r=>{const e=Lg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Mg=()=>dd()?.config,Ug=r=>dd()?.[`_${r}`];/**
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
 */class Ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function fr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hd(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Fg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${i}`,aud:i,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Ol(JSON.stringify(n)),Ol(JSON.stringify(d)),""].join(".")}const Pi={};function Iw(){const r={prod:[],emulator:[]};for(const e of Object.keys(Pi))Pi[e]?r.emulator.push(e):r.prod.push(e);return r}function kw(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let _m=!1;function fd(r,e){if(typeof window>"u"||typeof document>"u"||!fr(window.location.host)||Pi[r]===e||Pi[r]||_m)return;Pi[r]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",c=Iw().prod.length>0;function d(){const w=document.getElementById(i);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function _(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{_m=!0,d()},w}function v(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function x(){const w=kw(i),T=n("text"),P=document.getElementById(T)||document.createElement("span"),R=n("learnmore"),M=document.getElementById(R)||document.createElement("a"),te=n("preprendIcon"),re=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const G=w.element;p(G),v(M,R);const F=_();m(re,te),G.append(re,P,M,F),document.body.appendChild(G)}c?(P.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rw(){const r=vt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Pw(){return Ag.NODE_ADMIN===!0}function Aw(){try{return typeof indexedDB=="object"}catch{return!1}}function bw(){return new Promise((r,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(i);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(i),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Ow="FirebaseError";class Tn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ow,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},l=`${this.service}/${e}`,c=this.errors[e],d=c?Dw(c,i):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new Tn(l,p,i)}}function Dw(r,e){return r.replace(Lw,(n,i)=>{const l=e[i];return l!=null?String(l):`<${i}?>`})}const Lw=/\{\$([^}]+)}/g;/**
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
 */function Fi(r){return JSON.parse(r)}function Ye(r){return JSON.stringify(r)}/**
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
 */const Bg=function(r){let e={},n={},i={},l="";try{const c=r.split(".");e=Fi(Dl(c[0])||""),n=Fi(Dl(c[1])||""),l=c[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:l}},jw=function(r){const e=Bg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Mw=function(r){const e=Bg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Is(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Mu(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ll(r,e,n){const i={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=e.call(n,r[l],l,r));return i}function Or(r,e){if(r===e)return!0;const n=Object.keys(r),i=Object.keys(e);for(const l of n){if(!i.includes(l))return!1;const c=r[l],d=e[l];if(ym(c)&&ym(d)){if(!Or(c,d))return!1}else if(c!==d)return!1}for(const l of i)if(!n.includes(l))return!1;return!0}function ym(r){return r!==null&&typeof r=="object"}/**
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
 */function bs(r){const e=[];for(const[n,i]of Object.entries(r))Array.isArray(i)?i.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ti(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[l,c]=i.split("=");e[decodeURIComponent(l)]=decodeURIComponent(c)}}),e}function Ri(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
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
 */class Uw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let x=0;x<16;x++)i[x]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let x=0;x<16;x++)i[x]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let x=16;x<80;x++){const w=i[x-3]^i[x-8]^i[x-14]^i[x-16];i[x]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],d=this.chain_[2],p=this.chain_[3],m=this.chain_[4],_,v;for(let x=0;x<80;x++){x<40?x<20?(_=p^c&(d^p),v=1518500249):(_=c^d^p,v=1859775393):x<60?(_=c&d|p&(c|d),v=2400959708):(_=c^d^p,v=3395469782);const w=(l<<5|l>>>27)+_+m+v+i[x]&4294967295;m=p,p=d,d=(c<<30|c>>>2)&4294967295,c=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let l=0;const c=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=i;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(c[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(c),d=0;break}}else for(;l<n;)if(c[d]=e[l],++d,++l,d===this.blockSize){this.compress_(c),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[i]=this.chain_[l]>>c&255,++i;return e}}function Fw(r,e){const n=new zw(r,e);return n.subscribe.bind(n)}class zw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let l;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:i},l.next===void 0&&(l.next=wu),l.error===void 0&&(l.error=wu),l.complete===void 0&&(l.complete=wu);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function wu(){}function ra(r,e){return`${r} failed: ${e} argument `}/**
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
 */const Ww=function(r){const e=[];let n=0;for(let i=0;i<r.length;i++){let l=r.charCodeAt(i);if(l>=55296&&l<=56319){const c=l-55296;i++,j(i<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(i)-56320;l=65536+(c<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},sa=function(r){let e=0;for(let n=0;n<r.length;n++){const i=r.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(r){return r&&r._delegate?r._delegate:r}class cr{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ji;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&i.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(i)return null;throw l}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($w(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});i.resolve(c)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);i===p&&d.resolve(l)}return l}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(i)??new Set;l.add(e),this.onInitCallbacks.set(i,l);const c=this.instances.get(i);return c&&e(c,i),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const l of i)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(r){return r===Rr?void 0:r}function $w(r){return r.instantiationMode==="EAGER"}/**
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
 */class Gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(xe||(xe={}));const Kw={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},qw=xe.INFO,Qw={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},Yw=(r,e,...n)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),l=Qw[e];if(l)console[l](`[${i}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=qw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const Xw=(r,e)=>e.some(n=>r instanceof n);let vm,wm;function Jw(){return vm||(vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return wm||(wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,Uu=new WeakMap,Hg=new WeakMap,xu=new WeakMap,gd=new WeakMap;function ex(r){const e=new Promise((n,i)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(sr(r.result)),l()},d=()=>{i(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Wg.set(n,r)}).catch(()=>{}),gd.set(e,r),e}function tx(r){if(Uu.has(r))return;const e=new Promise((n,i)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),l()},d=()=>{i(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Uu.set(r,e)}let Fu={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Uu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Hg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function nx(r){Fu=r(Fu)}function rx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=r.call(Eu(this),e,...n);return Hg.set(i,e.sort?e.sort():[e]),sr(i)}:Zw().includes(r)?function(...e){return r.apply(Eu(this),e),sr(Wg.get(this))}:function(...e){return sr(r.apply(Eu(this),e))}}function sx(r){return typeof r=="function"?rx(r):(r instanceof IDBTransaction&&tx(r),Xw(r,Jw())?new Proxy(r,Fu):r)}function sr(r){if(r instanceof IDBRequest)return ex(r);if(xu.has(r))return xu.get(r);const e=sx(r);return e!==r&&(xu.set(r,e),gd.set(e,r)),e}const Eu=r=>gd.get(r);function ix(r,e,{blocked:n,upgrade:i,blocking:l,terminated:c}={}){const d=indexedDB.open(r,e),p=sr(d);return i&&d.addEventListener("upgradeneeded",m=>{i(sr(d.result),m.oldVersion,m.newVersion,sr(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),l&&m.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const ox=["get","getKey","getAll","getAllKeys","count"],lx=["put","add","delete","clear"],Cu=new Map;function xm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Cu.get(e))return Cu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,l=lx.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(l||ox.includes(n)))return;const c=async function(d,...p){const m=this.transaction(d,l?"readwrite":"readonly");let _=m.store;return i&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),l&&m.done]))[0]};return Cu.set(e,c),c}nx(r=>({...r,get:(e,n,i)=>xm(e,n)||r.get(e,n,i),has:(e,n)=>!!xm(e,n)||r.has(e,n)}));/**
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
 */class ax{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cx(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function cx(r){return r.getComponent()?.type==="VERSION"}const zu="@firebase/app",Em="0.14.6";/**
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
 */const In=new md("@firebase/app"),ux="@firebase/app-compat",dx="@firebase/analytics-compat",hx="@firebase/analytics",fx="@firebase/app-check-compat",px="@firebase/app-check",mx="@firebase/auth",gx="@firebase/auth-compat",_x="@firebase/database",yx="@firebase/data-connect",vx="@firebase/database-compat",wx="@firebase/functions",xx="@firebase/functions-compat",Ex="@firebase/installations",Cx="@firebase/installations-compat",Sx="@firebase/messaging",Ix="@firebase/messaging-compat",kx="@firebase/performance",Nx="@firebase/performance-compat",Tx="@firebase/remote-config",Rx="@firebase/remote-config-compat",Px="@firebase/storage",Ax="@firebase/storage-compat",bx="@firebase/firestore",Ox="@firebase/ai",Dx="@firebase/firestore-compat",Lx="firebase",jx="12.6.0";/**
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
 */const Bu="[DEFAULT]",Mx={[zu]:"fire-core",[ux]:"fire-core-compat",[hx]:"fire-analytics",[dx]:"fire-analytics-compat",[px]:"fire-app-check",[fx]:"fire-app-check-compat",[mx]:"fire-auth",[gx]:"fire-auth-compat",[_x]:"fire-rtdb",[yx]:"fire-data-connect",[vx]:"fire-rtdb-compat",[wx]:"fire-fn",[xx]:"fire-fn-compat",[Ex]:"fire-iid",[Cx]:"fire-iid-compat",[Sx]:"fire-fcm",[Ix]:"fire-fcm-compat",[kx]:"fire-perf",[Nx]:"fire-perf-compat",[Tx]:"fire-rc",[Rx]:"fire-rc-compat",[Px]:"fire-gcs",[Ax]:"fire-gcs-compat",[bx]:"fire-fst",[Dx]:"fire-fst-compat",[Ox]:"fire-vertex","fire-js":"fire-js",[Lx]:"fire-js-all"};/**
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
 */const jl=new Map,Ux=new Map,Wu=new Map;function Cm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Dr(r){const e=r.name;if(Wu.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Wu.set(e,r);for(const n of jl.values())Cm(n,r);for(const n of Ux.values())Cm(n,r);return!0}function ia(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ot(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Zi("app","Firebase",Fx);/**
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
 */class zx{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=jx;function Vg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const i={name:Bu,automaticDataCollectionEnabled:!0,...e},l=i.name;if(typeof l!="string"||!l)throw ir.create("bad-app-name",{appName:String(l)});if(n||(n=Mg()),!n)throw ir.create("no-options");const c=jl.get(l);if(c){if(Or(n,c.options)&&Or(i,c.config))return c;throw ir.create("duplicate-app",{appName:l})}const d=new Gw(l);for(const m of Wu.values())d.addComponent(m);const p=new zx(n,i,d);return jl.set(l,p),p}function _d(r=Bu){const e=jl.get(r);if(!e&&r===Bu&&Mg())return Vg();if(!e)throw ir.create("no-app",{appName:r});return e}function an(r,e,n){let i=Mx[r]??r;n&&(i+=`-${n}`);const l=i.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${i}" with version "${e}":`];l&&d.push(`library name "${i}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(d.join(" "));return}Dr(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bx="firebase-heartbeat-database",Wx=1,zi="firebase-heartbeat-store";let Su=null;function $g(){return Su||(Su=ix(Bx,Wx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(r=>{throw ir.create("idb-open",{originalErrorMessage:r.message})})),Su}async function Hx(r){try{const n=(await $g()).transaction(zi),i=await n.objectStore(zi).get(Gg(r));return await n.done,i}catch(e){if(e instanceof Tn)In.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e?.message});In.warn(n.message)}}}async function Sm(r,e){try{const i=(await $g()).transaction(zi,"readwrite");await i.objectStore(zi).put(e,Gg(r)),await i.done}catch(n){if(n instanceof Tn)In.warn(n.message);else{const i=ir.create("idb-set",{originalErrorMessage:n?.message});In.warn(i.message)}}}function Gg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Vx=1024,$x=30;class Gx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qx(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Im();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(l=>l.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>$x){const l=Qx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){In.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Im(),{heartbeatsToSend:n,unsentEntries:i}=Kx(this._heartbeatsCache.heartbeats),l=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return In.warn(e),""}}}function Im(){return new Date().toISOString().substring(0,10)}function Kx(r,e=Vx){const n=[];let i=r.slice();for(const l of r){const c=n.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),km(n)>e){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),km(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class qx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aw()?bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Sm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Sm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function km(r){return Ol(JSON.stringify({version:2,heartbeats:r})).length}function Qx(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let i=1;i<r.length;i++)r[i].date<n&&(n=r[i].date,e=i);return e}/**
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
 */function Yx(r){Dr(new cr("platform-logger",e=>new ax(e),"PRIVATE")),Dr(new cr("heartbeat",e=>new Gx(e),"PRIVATE")),an(zu,Em,r),an(zu,Em,"esm2020"),an("fire-js","")}Yx("");function Kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xx=Kg,qg=new Zi("auth","Firebase",Kg());/**
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
 */const Ml=new md("@firebase/auth");function Jx(r,...e){Ml.logLevel<=xe.WARN&&Ml.warn(`Auth (${Br}): ${r}`,...e)}function Nl(r,...e){Ml.logLevel<=xe.ERROR&&Ml.error(`Auth (${Br}): ${r}`,...e)}/**
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
 */function en(r,...e){throw yd(r,...e)}function cn(r,...e){return yd(r,...e)}function Qg(r,e,n){const i={...Xx(),[e]:n};return new Zi("auth","Firebase",i).create(e,{appName:r.name})}function Cn(r){return Qg(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yd(r,...e){if(typeof r!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(n,...i)}return qg.create(r,...e)}function J(r,e,...n){if(!r)throw yd(e,...n)}function wn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nl(e),new Error(e)}function kn(r,e){r||wn(e)}/**
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
 */function Hu(){return typeof self<"u"&&self.location?.href||""}function Zx(){return Nm()==="http:"||Nm()==="https:"}function Nm(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zx()||Tw()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=pd()||zg()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vd(r,e){kn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yg{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s1=new eo(3e4,6e4);function pr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function mr(r,e,n,i,l={}){return Xg(r,l,async()=>{let c={},d={};i&&(e==="GET"?d=i:c={body:JSON.stringify(i)});const p=bs({key:r.config.apiKey,...d}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:m,...c};return Nw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&fr(r.emulatorConfig.host)&&(_.credentials="include"),Yg.fetch()(await Jg(r,r.config.apiHost,n,p),_)})}async function Xg(r,e,n){r._canInitEmulator=!1;const i={...n1,...e};try{const l=new o1(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw El(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const p=c.ok?d.errorMessage:d.error.message,[m,_]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(r,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw El(r,"email-already-in-use",d);if(m==="USER_DISABLED")throw El(r,"user-disabled",d);const v=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Qg(r,v,_);en(r,v)}}catch(l){if(l instanceof Tn)throw l;en(r,"network-request-failed",{message:String(l)})}}async function to(r,e,n,i,l={}){const c=await mr(r,e,n,i,l);return"mfaPendingCredential"in c&&en(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function Jg(r,e,n,i){const l=`${e}${n}?${i}`,c=r,d=c.config.emulator?vd(r.config,l):`${r.config.apiScheme}://${l}`;return r1.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function i1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(cn(this.auth,"network-request-failed")),s1.get())})}}function El(r,e,n){const i={appName:r.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const l=cn(r,e,i);return l.customData._tokenResponse=n,l}function Tm(r){return r!==void 0&&r.enterprise!==void 0}class l1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return i1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function a1(r,e){return mr(r,"GET","/v2/recaptchaConfig",pr(r,e))}/**
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
 */async function c1(r,e){return mr(r,"POST","/v1/accounts:delete",e)}async function Ul(r,e){return mr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ai(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u1(r,e=!1){const n=Xe(r),i=await n.getIdToken(e),l=wd(i);J(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:i,authTime:Ai(Iu(l.auth_time)),issuedAtTime:Ai(Iu(l.iat)),expirationTime:Ai(Iu(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Iu(r){return Number(r)*1e3}function wd(r){const[e,n,i]=r.split(".");if(e===void 0||n===void 0||i===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Dl(n);return l?JSON.parse(l):(Nl("Failed to decode base64 JWT payload"),null)}catch(l){return Nl("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Rm(r){const e=wd(r);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bi(r,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Tn&&d1(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function d1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class h1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fl(r){const e=r.auth,n=await r.getIdToken(),i=await Bi(r,Ul(e,{idToken:n}));J(i?.users.length,e,"internal-error");const l=i.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?Zg(l.providerUserInfo):[],d=p1(r.providerData,c),p=r.isAnonymous,m=!(r.email&&l.passwordHash)&&!d?.length,_=p?m:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Vu(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,v)}async function f1(r){const e=Xe(r);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p1(r,e){return[...r.filter(i=>!e.some(l=>l.providerId===i.providerId)),...e]}function Zg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function m1(r,e){const n=await Xg(r,{},async()=>{const i=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await Jg(r,l,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:i};return r.emulatorConfig&&fr(r.emulatorConfig.host)&&(m.credentials="include"),Yg.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g1(r,e){return mr(r,"POST","/v2/accounts:revokeToken",pr(r,e))}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Rm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:l,expiresIn:c}=await m1(e,n);this.updateTokensAndExpiration(i,l,Number(c))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:l,expirationTime:c}=n,d=new ws;return i&&(J(typeof i=="string","internal-error",{appName:e}),d.refreshToken=i),l&&(J(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),c&&(J(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Qn(r,e){J(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:i,...l}){this.providerId="firebase",this.proactiveRefresh=new h1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Vu(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u1(this,e)}reload(){return f1(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Bi(this,c1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,_=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:x,emailVerified:w,isAnonymous:T,providerData:P,stsTokenManager:R}=n;J(x&&R,e,"internal-error");const M=ws.fromJSON(this.name,R);J(typeof x=="string",e,"internal-error"),Qn(i,e.name),Qn(l,e.name),J(typeof w=="boolean",e,"internal-error"),J(typeof T=="boolean",e,"internal-error"),Qn(c,e.name),Qn(d,e.name),Qn(p,e.name),Qn(m,e.name),Qn(_,e.name),Qn(v,e.name);const te=new Xt({uid:x,auth:e,email:l,emailVerified:w,displayName:i,isAnonymous:T,photoURL:d,phoneNumber:c,tenantId:p,stsTokenManager:M,createdAt:_,lastLoginAt:v});return P&&Array.isArray(P)&&(te.providerData=P.map(re=>({...re}))),m&&(te._redirectEventId=m),te}static async _fromIdTokenResponse(e,n,i=!1){const l=new ws;l.updateFromServerResponse(n);const c=new Xt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:i});return await Fl(c),c}static async _fromGetAccountInfoResponse(e,n,i){const l=n.users[0];J(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?Zg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,p=new ws;p.updateFromIdToken(i);const m=new Xt({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Vu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(m,_),m}}/**
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
 */const Pm=new Map;function xn(r){kn(r instanceof Function,"Expected a class definition");let e=Pm.get(r);return e?(kn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Pm.set(r,e),e)}/**
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
 */class e_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e_.type="NONE";const Am=e_;/**
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
 */function Tl(r,e,n){return`firebase:${r}:${e}:${n}`}class xs{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:l,name:c}=this.auth;this.fullUserKey=Tl(this.userKey,l.apiKey,c),this.fullPersistenceKey=Tl("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ul(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new xs(xn(Am),e,i);const l=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||xn(Am);const d=Tl(i,e.config.apiKey,e.name);let p=null;for(const _ of n)try{const v=await _._get(d);if(v){let x;if(typeof v=="string"){const w=await Ul(e,{idToken:v}).catch(()=>{});if(!w)break;x=await Xt._fromGetAccountInfoResponse(e,w,v)}else x=Xt._fromJSON(e,v);_!==c&&(p=x),c=_;break}}catch{}const m=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new xs(c,e,i):(c=m[0],p&&await c._set(d,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new xs(c,e,i))}}/**
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
 */function bm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o_(e))return"Blackberry";if(l_(e))return"Webos";if(n_(e))return"Safari";if((e.includes("chrome/")||r_(e))&&!e.includes("edge/"))return"Chrome";if(i_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(n);if(i?.length===2)return i[1]}return"Other"}function t_(r=vt()){return/firefox\//i.test(r)}function n_(r=vt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r_(r=vt()){return/crios\//i.test(r)}function s_(r=vt()){return/iemobile/i.test(r)}function i_(r=vt()){return/android/i.test(r)}function o_(r=vt()){return/blackberry/i.test(r)}function l_(r=vt()){return/webos/i.test(r)}function xd(r=vt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function _1(r=vt()){return xd(r)&&!!window.navigator?.standalone}function y1(){return Rw()&&document.documentMode===10}function a_(r=vt()){return xd(r)||i_(r)||l_(r)||o_(r)||/windows phone/i.test(r)||s_(r)}/**
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
 */function c_(r,e=[]){let n;switch(r){case"Browser":n=bm(vt());break;case"Worker":n=`${bm(vt())}-${r}`;break;default:n=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${i}`}/**
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
 */class v1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=c=>new Promise((d,p)=>{try{const m=e(c);d(m)}catch(m){p(m)}});i.onAbort=n,this.queue.push(i);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function w1(r,e={}){return mr(r,"GET","/v2/passwordPolicy",pr(r,e))}/**
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
 */const x1=6;class E1{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??x1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let l=0;l<e.length;l++)i=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class C1{constructor(e,n,i,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new v1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ul(this,{idToken:e}),i=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ot(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=i?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&p?.user&&(i=p.user,l=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Cn(this));const n=e?Xe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new E1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await g1(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(p,this,"internal-error"),p.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,i,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=c_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Jx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Wr(r){return Xe(r)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fw(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S1(r){oa=r}function u_(r){return oa.loadJS(r)}function I1(){return oa.recaptchaEnterpriseScript}function k1(){return oa.gapiScript}function N1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class T1{constructor(){this.enterprise=new R1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class R1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const P1="recaptcha-enterprise",d_="NO_RECAPTCHA";class A1{constructor(e){this.type=P1,this.auth=Wr(e)}async verify(e="verify",n=!1){async function i(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,p)=>{a1(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new l1(m);return c.tenantId==null?c._agentRecaptchaConfig=_:c._tenantRecaptchaConfigs[c.tenantId]=_,d(_.siteKey)}}).catch(m=>{p(m)})})}function l(c,d,p){const m=window.grecaptcha;Tm(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(_=>{d(_)}).catch(()=>{d(d_)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T1().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{i(this.auth).then(p=>{if(!n&&Tm(window.grecaptcha))l(p,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=I1();m.length!==0&&(m+=p),u_(m).then(()=>{l(p,c,d)}).catch(_=>{d(_)})}}).catch(p=>{d(p)})})}}async function Dm(r,e,n,i=!1,l=!1){const c=new A1(r);let d;if(l)d=d_;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return i?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function $u(r,e,n,i,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Dm(r,e,n,n==="getOobCode");return i(r,c)}else return i(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Dm(r,e,n,n==="getOobCode");return i(r,d)}else return Promise.reject(c)})}/**
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
 */function b1(r,e){const n=ia(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(Or(c,e??{}))return l;en(l,"already-initialized")}return n.initialize({options:e})}function O1(r,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(xn);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function D1(r,e,n){const i=Wr(r);J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const l=!1,c=h_(e),{host:d,port:p}=L1(e),m=p===null?"":`:${p}`,_={url:`${c}//${d}${m}/`},v=Object.freeze({host:d,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!i._canInitEmulator){J(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),J(Or(_,i.config.emulator)&&Or(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,fr(d)?(hd(`${c}//${d}${m}`),fd("Auth",!0)):j1()}function h_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function L1(r){const e=h_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(i);if(l){const c=l[1];return{host:c,port:Lm(i.substr(c.length+1))}}else{const[c,d]=i.split(":");return{host:c,port:Lm(d)}}}function Lm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function j1(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ed{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function M1(r,e){return mr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function U1(r,e){return to(r,"POST","/v1/accounts:signInWithPassword",pr(r,e))}/**
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
 */async function F1(r,e){return to(r,"POST","/v1/accounts:signInWithEmailLink",pr(r,e))}async function z1(r,e){return to(r,"POST","/v1/accounts:signInWithEmailLink",pr(r,e))}/**
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
 */class Wi extends Ed{constructor(e,n,i,l=null){super("password",i),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Wi(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Wi(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $u(e,n,"signInWithPassword",U1);case"emailLink":return F1(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $u(e,i,"signUpPassword",M1);case"emailLink":return z1(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Es(r,e){return to(r,"POST","/v1/accounts:signInWithIdp",pr(r,e))}/**
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
 */const B1="http://localhost";class Lr extends Ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:l,...c}=n;if(!i||!l)return null;const d=new Lr(i,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Es(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:B1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
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
 */function W1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function H1(r){const e=Ti(Ri(r)).link,n=e?Ti(Ri(e)).deep_link_id:null,i=Ti(Ri(r)).deep_link_id;return(i?Ti(Ri(i)).link:null)||i||n||e||r}class Cd{constructor(e){const n=Ti(Ri(e)),i=n.apiKey??null,l=n.oobCode??null,c=W1(n.mode??null);J(i&&l&&c,"argument-error"),this.apiKey=i,this.operation=c,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=H1(e);try{return new Cd(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Cd.parseLink(n);return J(i,"argument-error"),Wi._fromEmailAndCode(e,i.code,i.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class f_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class no extends f_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Jn.credential(n,i)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class er extends no{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return er.credential(n,i)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
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
 */async function V1(r,e){return to(r,"POST","/v1/accounts:signUp",pr(r,e))}/**
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
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,l=!1){const c=await Xt._fromIdTokenResponse(e,i,l),d=jm(i);return new jr({user:c,providerId:d,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const l=jm(i);return new jr({user:e,providerId:l,_tokenResponse:i,operationType:n})}}function jm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class zl extends Tn{constructor(e,n,i,l){super(n.code,n.message),this.operationType=i,this.user=l,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,l){return new zl(e,n,i,l)}}function p_(r,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(r,c,e,i):c})}async function $1(r,e,n=!1){const i=await Bi(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return jr._forOperation(r,"link",i)}/**
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
 */async function G1(r,e,n=!1){const{auth:i}=r;if(Ot(i.app))return Promise.reject(Cn(i));const l="reauthenticate";try{const c=await Bi(r,p_(i,l,e,r),n);J(c.idToken,i,"internal-error");const d=wd(c.idToken);J(d,i,"internal-error");const{sub:p}=d;return J(r.uid===p,i,"user-mismatch"),jr._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&en(i,"user-mismatch"),c}}/**
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
 */async function m_(r,e,n=!1){if(Ot(r.app))return Promise.reject(Cn(r));const i="signIn",l=await p_(r,i,e),c=await jr._fromIdTokenResponse(r,i,l);return n||await r._updateCurrentUser(c.user),c}async function K1(r,e){return m_(Wr(r),e)}/**
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
 */async function g_(r){const e=Wr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q1(r,e,n){if(Ot(r.app))return Promise.reject(Cn(r));const i=Wr(r),d=await $u(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",V1).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&g_(r),m}),p=await jr._fromIdTokenResponse(i,"signIn",d);return await i._updateCurrentUser(p.user),p}function Q1(r,e,n){return Ot(r.app)?Promise.reject(Cn(r)):K1(Xe(r),Os.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&g_(r),i})}function Y1(r,e,n,i){return Xe(r).onIdTokenChanged(e,n,i)}function X1(r,e,n){return Xe(r).beforeAuthStateChanged(e,n)}function J1(r,e,n,i){return Xe(r).onAuthStateChanged(e,n,i)}function Hi(r){return Xe(r).signOut()}const Bl="__sak";/**
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
 */class __{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bl,"1"),this.storage.removeItem(Bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Z1=1e3,eE=10;class y_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),l=this.localCache[n];i!==l&&e(n,l,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,p,m)=>{this.notifyListeners(d,m)});return}const i=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(i);!n&&this.localCache[i]===d||this.notifyListeners(i,d)},c=this.storage.getItem(i);y1()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,eE):l()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const l of Array.from(i))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y_.type="LOCAL";const tE=y_;/**
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
 */class v_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}v_.type="SESSION";const w_=v_;/**
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
 */function nE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const i=new la(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:l,data:c}=n.data,d=this.handlersMap[l];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:l});const p=Array.from(d).map(async _=>_(n.origin,c)),m=await nE(p);n.ports[0].postMessage({status:"done",eventId:i,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
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
 */function Sd(r="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class rE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((p,m)=>{const _=Sd("",20);l.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},i);d={messageChannel:l,onMessage(x){const w=x;if(w.data.eventId===_)switch(w.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(w.data.response);break;default:clearTimeout(v),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function un(){return window}function sE(r){un().location.href=r}/**
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
 */function x_(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function iE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oE(){return navigator?.serviceWorker?.controller||null}function lE(){return x_()?self:null}/**
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
 */const E_="firebaseLocalStorageDb",aE=1,Wl="firebaseLocalStorage",C_="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(r,e){return r.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function cE(){const r=indexedDB.deleteDatabase(E_);return new ro(r).toPromise()}function Gu(){const r=indexedDB.open(E_,aE);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(Wl,{keyPath:C_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(Wl)?e(i):(i.close(),await cE(),e(await Gu()))})})}async function Mm(r,e,n){const i=aa(r,!0).put({[C_]:e,value:n});return new ro(i).toPromise()}async function uE(r,e){const n=aa(r,!1).get(e),i=await new ro(n).toPromise();return i===void 0?null:i.value}function Um(r,e){const n=aa(r,!0).delete(e);return new ro(n).toPromise()}const dE=800,hE=3;class S_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>hE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(lE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iE(),!this.activeServiceWorker)return;this.sender=new rE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await Mm(e,Bl,"1"),await Um(e,Bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Mm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>uE(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=aa(l,!1).getAll();return new ro(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)i.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!i.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const l of Array.from(i))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S_.type="LOCAL";const fE=S_;new eo(3e4,6e4);/**
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
 */function pE(r,e){return e?xn(e):(J(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Id extends Ed{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mE(r){return m_(r.auth,new Id(r),r.bypassAuthState)}function gE(r){const{auth:e,user:n}=r;return J(n,e,"internal-error"),G1(n,new Id(r),r.bypassAuthState)}async function _E(r){const{auth:e,user:n}=r;return J(n,e,"internal-error"),$1(n,new Id(r),r.bypassAuthState)}/**
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
 */class I_{constructor(e,n,i,l,c=!1){this.auth=e,this.resolver=i,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:l,tenantId:c,error:d,type:p}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:i,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mE;case"linkViaPopup":case"linkViaRedirect":return _E;case"reauthViaPopup":case"reauthViaRedirect":return gE;default:en(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yE=new eo(2e3,1e4);class _s extends I_{constructor(e,n,i,l,c){super(e,n,l,c),this.provider=i,this.authWindow=null,this.pollId=null,_s.currentPopupAction&&_s.currentPopupAction.cancel(),_s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_s.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yE.get())};e()}}_s.currentPopupAction=null;/**
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
 */const vE="pendingRedirect",Rl=new Map;class wE extends I_{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const i=await xE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xE(r,e){const n=SE(e),i=CE(r);if(!await i._isAvailable())return!1;const l=await i._get(n)==="true";return await i._remove(n),l}function EE(r,e){Rl.set(r._key(),e)}function CE(r){return xn(r._redirectPersistence)}function SE(r){return Tl(vE,r.config.apiKey,r.name)}async function IE(r,e,n=!1){if(Ot(r.app))return Promise.reject(Cn(r));const i=Wr(r),l=pE(i,e),d=await new wE(i,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await i._persistUserIfCurrent(d.user),await i._setRedirectUser(null,e)),d}/**
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
 */const kE=600*1e3;class NE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!k_(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fm(e))}saveEventToCache(e){this.cachedEventUids.add(Fm(e)),this.lastProcessedEventTime=Date.now()}}function Fm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function k_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function TE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k_(r);default:return!1}}/**
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
 */async function RE(r,e={}){return mr(r,"GET","/v1/projects",e)}/**
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
 */const PE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AE=/^https?/;async function bE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await RE(r);for(const n of e)try{if(OE(n))return}catch{}en(r,"unauthorized-domain")}function OE(r){const e=Hu(),{protocol:n,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&i===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===i}if(!AE.test(n))return!1;if(PE.test(r))return i===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(i)}/**
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
 */const DE=new eo(3e4,6e4);function zm(){const r=un().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function LE(r){return new Promise((e,n)=>{function i(){zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zm(),n(cn(r,"network-request-failed"))},timeout:DE.get()})}if(un().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(un().gapi?.load)i();else{const l=N1("iframefcb");return un()[l]=()=>{gapi.load?i():n(cn(r,"network-request-failed"))},u_(`${k1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Pl=null,e})}let Pl=null;function jE(r){return Pl=Pl||LE(r),Pl}/**
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
 */const ME=new eo(5e3,15e3),UE="__/auth/iframe",FE="emulator/auth/iframe",zE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WE(r){const e=r.config;J(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?vd(e,FE):`https://${r.config.authDomain}/${UE}`,i={apiKey:e.apiKey,appName:r.name,v:Br},l=BE.get(r.config.apiHost);l&&(i.eid=l);const c=r._getFrameworks();return c.length&&(i.fw=c.join(",")),`${n}?${bs(i).slice(1)}`}async function HE(r){const e=await jE(r),n=un().gapi;return J(n,r,"internal-error"),e.open({where:document.body,url:WE(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zE,dontclear:!0},i=>new Promise(async(l,c)=>{await i.restyle({setHideOnLeave:!1});const d=cn(r,"network-request-failed"),p=un().setTimeout(()=>{c(d)},ME.get());function m(){un().clearTimeout(p),l(i)}i.ping(m).then(m,()=>{c(d)})}))}/**
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
 */const VE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$E=500,GE=600,KE="_blank",qE="http://localhost";class Bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QE(r,e,n,i=$E,l=GE){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const m={...VE,width:i.toString(),height:l.toString(),top:c,left:d},_=vt().toLowerCase();n&&(p=r_(_)?KE:n),t_(_)&&(e=e||qE,m.scrollbars="yes");const v=Object.entries(m).reduce((w,[T,P])=>`${w}${T}=${P},`,"");if(_1(_)&&p!=="_self")return YE(e||"",p),new Bm(null);const x=window.open(e||"",p,v);J(x,r,"popup-blocked");try{x.focus()}catch{}return new Bm(x)}function YE(r,e){const n=document.createElement("a");n.href=r,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const XE="__/auth/handler",JE="emulator/auth/handler",ZE=encodeURIComponent("fac");async function Wm(r,e,n,i,l,c){J(r.config.authDomain,r,"auth-domain-config-required"),J(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:i,v:Br,eventId:l};if(e instanceof f_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Mu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,x]of Object.entries({}))d[v]=x}if(e instanceof no){const v=e.getScopes().filter(x=>x!=="");v.length>0&&(d.scopes=v.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const v of Object.keys(p))p[v]===void 0&&delete p[v];const m=await r._getAppCheckToken(),_=m?`#${ZE}=${encodeURIComponent(m)}`:"";return`${eC(r)}?${bs(p).slice(1)}${_}`}function eC({config:r}){return r.emulator?vd(r,JE):`https://${r.authDomain}/${XE}`}/**
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
 */const ku="webStorageSupport";class tC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=IE,this._overrideRedirectResult=EE}async _openPopup(e,n,i,l){kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Wm(e,n,i,Hu(),l);return QE(e,c,Sd())}async _openRedirect(e,n,i,l){await this._originValidation(e);const c=await Wm(e,n,i,Hu(),l);return sE(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(kn(c,"If manager is not set, promise should be"),c)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await HE(e),i=new NE(e);return n.register("authEvent",l=>(J(l?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ku,{type:ku},l=>{const c=l?.[0]?.[ku];c!==void 0&&n(!!c),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a_()||n_()||xd()}}const nC=tC;var Hm="@firebase/auth",Vm="1.11.1";/**
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
 */class rC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iC(r){Dr(new cr("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=i.options;J(d&&!d.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:c_(r)},_=new C1(i,l,c,m);return O1(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Dr(new cr("auth-internal",e=>{const n=Wr(e.getProvider("auth").getImmediate());return(i=>new rC(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Hm,Vm,sC(r)),an(Hm,Vm,"esm2020")}/**
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
 */const oC=300,lC=Ug("authIdTokenMaxAge")||oC;let $m=null;const aC=r=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>lC)return;const l=n?.token;$m!==l&&($m=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function cC(r=_d()){const e=ia(r,"auth");if(e.isInitialized())return e.getImmediate();const n=b1(r,{popupRedirectResolver:nC,persistence:[fE,tE,w_]}),i=Ug("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(i,location.origin);if(location.origin===c.origin){const d=aC(c.toString());X1(n,d,()=>d(n.currentUser)),Y1(n,p=>d(p))}}const l=Lg("auth");return l&&D1(n,`http://${l}`),n}function uC(){return document.getElementsByTagName("head")?.[0]??document}S1({loadJS(r){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=l=>{const c=cn("internal-error");c.customData=l,n(c)},i.type="text/javascript",i.charset="UTF-8",uC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iC("Browser");var Gm={};const Km="@firebase/database",qm="1.1.0";/**
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
 */let N_="";function dC(r){N_=r}/**
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
 */class hC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const T_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hC(e)}}catch{}return new fC},Ar=T_("localStorage"),pC=T_("sessionStorage");/**
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
 */const Cs=new md("@firebase/database"),mC=(function(){let r=1;return function(){return r++}})(),R_=function(r){const e=Ww(r),n=new Uw;n.update(e);const i=n.digest();return ud.encodeByteArray(i)},so=function(...r){let e="";for(let n=0;n<r.length;n++){const i=r[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=so.apply(null,i):typeof i=="object"?e+=Ye(i):e+=i,e+=" "}return e};let bi=null,Qm=!0;const gC=function(r,e){j(!0,"Can't turn on custom loggers persistently."),Cs.logLevel=xe.VERBOSE,bi=Cs.log.bind(Cs)},it=function(...r){if(Qm===!0&&(Qm=!1,bi===null&&pC.get("logging_enabled")===!0&&gC()),bi){const e=so.apply(null,r);bi(e)}},io=function(r){return function(...e){it(r,...e)}},Ku=function(...r){const e="FIREBASE INTERNAL ERROR: "+so(...r);Cs.error(e)},Nn=function(...r){const e=`FIREBASE FATAL ERROR: ${so(...r)}`;throw Cs.error(e),new Error(e)},yt=function(...r){const e="FIREBASE WARNING: "+so(...r);Cs.warn(e)},_C=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},yC=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ks="[MIN_NAME]",Mr="[MAX_NAME]",Hr=function(r,e){if(r===e)return 0;if(r===ks||e===Mr)return-1;if(e===ks||r===Mr)return 1;{const n=Ym(r),i=Ym(e);return n!==null?i!==null?n-i===0?r.length-e.length:n-i:-1:i!==null?1:r<e?-1:1}},vC=function(r,e){return r===e?0:r<e?-1:1},Ci=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Ye(e))},Nd=function(r){if(typeof r!="object"||r===null)return Ye(r);const e=[];for(const i in r)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ye(e[i]),n+=":",n+=Nd(r[e[i]]);return n+="}",n},P_=function(r,e){const n=r.length;if(n<=e)return[r];const i=[];for(let l=0;l<n;l+=e)l+e>n?i.push(r.substring(l,n)):i.push(r.substring(l,l+e));return i};function ot(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const A_=function(r){j(!kd(r),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let l,c,d,p,m;r===0?(c=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-i)?(p=Math.min(Math.floor(Math.log(r)/Math.LN2),i),c=p+i,d=Math.round(r*Math.pow(2,n-p)-Math.pow(2,n))):(c=0,d=Math.round(r/Math.pow(2,1-i-n))));const _=[];for(m=n;m;m-=1)_.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)_.push(c%2?1:0),c=Math.floor(c/2);_.push(l?1:0),_.reverse();const v=_.join("");let x="";for(m=0;m<64;m+=8){let w=parseInt(v.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),x=x+w}return x.toLowerCase()},wC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EC(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const i=new Error(r+" at "+e._path.toString()+": "+n);return i.code=r.toUpperCase(),i}const CC=new RegExp("^-?(0*)\\d{1,10}$"),SC=-2147483648,IC=2147483647,Ym=function(r){if(CC.test(r)){const e=Number(r);if(e>=SC&&e<=IC)return e}return null},Ds=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},kC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oi=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class NC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class TC{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class Al{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Al.OWNER="owner";/**
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
 */const Td="5",b_="v",O_="s",D_="r",L_="f",j_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,M_="ls",U_="p",qu="ac",F_="websocket",z_="long_polling";/**
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
 */class B_{constructor(e,n,i,l,c=!1,d="",p=!1,m=!1,_=null){this.secure=n,this.namespace=i,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=d,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=_,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RC(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function W_(r,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let i;if(e===F_)i=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===z_)i=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RC(r)&&(n.ns=r.namespace);const l=[];return ot(n,(c,d)=>{l.push(c+"="+d)}),i+l.join("&")}/**
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
 */class PC{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return vw(this.counters_)}}/**
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
 */const Nu={},Tu={};function Rd(r){const e=r.toString();return Nu[e]||(Nu[e]=new PC),Nu[e]}function AC(r,e){const n=r.toString();return Tu[n]||(Tu[n]=e()),Tu[n]}/**
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
 */class bC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<i.length;++l)i[l]&&Ds(()=>{this.onMessage_(i[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xm="start",OC="close",DC="pLPCommand",LC="pRTLPCB",H_="id",V_="pw",$_="ser",jC="cb",MC="seg",UC="ts",FC="d",zC="dframe",G_=1870,K_=30,BC=G_-K_,WC=25e3,HC=3e4;class ys{constructor(e,n,i,l,c,d,p){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=l,this.authToken=c,this.transportSessionId=d,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=io(e),this.stats_=Rd(n),this.urlFn=m=>(this.appCheckToken&&(m[qu]=this.appCheckToken),W_(n,z_,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HC)),yC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pd((...c)=>{const[d,p,m,_,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Xm)this.id=p,this.password=m;else if(d===OC)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...c)=>{const[d,p]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(d,p)},()=>{this.onClosed_()},this.urlFn);const i={};i[Xm]="t",i[$_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[jC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[b_]=Td,this.transportSessionId&&(i[O_]=this.transportSessionId),this.lastSessionId&&(i[M_]=this.lastSessionId),this.applicationId&&(i[U_]=this.applicationId),this.appCheckToken&&(i[qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&j_.test(location.hostname)&&(i[D_]=L_);const l=this.urlFn(i);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ys.forceAllow_=!0}static forceDisallow(){ys.forceDisallow_=!0}static isAvailable(){return ys.forceAllow_?!0:!ys.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wC()&&!xC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Og(n),l=P_(i,BC);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[zC]="t",i[H_]=e,i[V_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pd{constructor(e,n,i,l){this.onDisconnect=i,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mC(),window[DC+this.uniqueCallbackIdentifier]=e,window[LC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pd.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(p){it("frame writing exception"),p.stack&&it(p.stack),it(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[H_]=this.myID,e[V_]=this.myPW,e[$_]=this.currentSerial;let n=this.urlFn(e),i="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+K_+i.length<=G_;){const d=this.pendingSegs.shift();i=i+"&"+MC+l+"="+d.seg+"&"+UC+l+"="+d.ts+"&"+FC+l+"="+d.d,l++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(i,Math.floor(WC)),c=()=>{clearTimeout(l),i()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const l=i.readyState;(!l||l==="loaded"||l==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const VC=16384,$C=45e3;let Hl=null;typeof MozWebSocket<"u"?Hl=MozWebSocket:typeof WebSocket<"u"&&(Hl=WebSocket);class Yt{constructor(e,n,i,l,c,d,p){this.connId=e,this.applicationId=i,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=io(this.connId),this.stats_=Rd(n),this.connURL=Yt.connectionURL_(n,d,p,l,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,l,c){const d={};return d[b_]=Td,typeof location<"u"&&location.hostname&&j_.test(location.hostname)&&(d[D_]=L_),n&&(d[O_]=n),i&&(d[M_]=i),l&&(d[qu]=l),c&&(d[U_]=c),W_(e,F_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ar.set("previous_websocket_failure",!0);try{let i;Pw(),this.mySock=new Hl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const l=i.message||i.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const l=i.message||i.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hl!==null&&!Yt.forceDisallow_}static previouslyFailed(){return Ar.isInMemoryStorage||Ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Fi(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=P_(n,VC);i.length>1&&this.sendString_(String(i.length));for(let l=0;l<i.length;l++)this.sendString_(i[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($C))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yt.responsesRequiredToBeHealthy=2;Yt.healthyTimeout=3e4;/**
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
 */class Vi{static get ALL_TRANSPORTS(){return[ys,Yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Yt&&Yt.isAvailable();let i=n&&!Yt.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Yt];else{const l=this.transports_=[];for(const c of Vi.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Vi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vi.globalTransportInitialized_=!1;/**
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
 */const GC=6e4,KC=5e3,qC=10*1024,QC=100*1024,Ru="t",Jm="d",YC="s",Zm="r",XC="e",eg="o",tg="a",ng="n",rg="p",JC="h";class ZC{constructor(e,n,i,l,c,d,p,m,_,v){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=d,this.onReady_=p,this.onDisconnect_=m,this.onKill_=_,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=io("c:"+this.id+":"),this.transportManager_=new Vi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ru in e){const n=e[Ru];n===tg?this.upgradeIfSecondaryHealthy_():n===Zm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===eg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ci("t",e),i=Ci("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ng,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ci("t",e),i=Ci("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ci(Ru,e);if(Jm in e){const i=e[Jm];if(n===JC){const l={...i};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===ng){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YC?this.onConnectionShutdown_(i):n===Zm?this.onReset_(i):n===XC?Ku("Server Error: "+i):n===eg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Td!==i&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class q_{put(e,n,i,l){}merge(e,n,i,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Q_{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let l=0;l<i.length;l++)i[l].callback.apply(i[l].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const l=this.getInitialEvent(e);l&&n.apply(i,l)}off(e,n,i){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===n&&(!i||i===l[c].context)){l.splice(c,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vl extends Q_{static getInstance(){return new Vl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const sg=32,ig=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[i]=this.pieces_[l],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ee("")}function le(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function ur(r){return r.pieces_.length-r.pieceNum_}function Ne(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Ee(r.pieces_,e)}function Ad(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function eS(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function $i(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Y_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Ee(e,0)}function Ue(r,e){const n=[];for(let i=r.pieceNum_;i<r.pieces_.length;i++)n.push(r.pieces_[i]);if(e instanceof Ee)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let l=0;l<i.length;l++)i[l].length>0&&n.push(i[l])}return new Ee(n,0)}function ue(r){return r.pieceNum_>=r.pieces_.length}function _t(r,e){const n=le(r),i=le(e);if(n===null)return e;if(n===i)return _t(Ne(r),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function tS(r,e){const n=$i(r,0),i=$i(e,0);for(let l=0;l<n.length&&l<i.length;l++){const c=Hr(n[l],i[l]);if(c!==0)return c}return n.length===i.length?0:n.length<i.length?-1:1}function bd(r,e){if(ur(r)!==ur(e))return!1;for(let n=r.pieceNum_,i=e.pieceNum_;n<=r.pieces_.length;n++,i++)if(r.pieces_[n]!==e.pieces_[i])return!1;return!0}function Bt(r,e){let n=r.pieceNum_,i=e.pieceNum_;if(ur(r)>ur(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class nS{constructor(e,n){this.errorPrefix_=n,this.parts_=$i(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=sa(this.parts_[i]);X_(this)}}function rS(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=sa(e),X_(r)}function sS(r){const e=r.parts_.pop();r.byteLength_-=sa(e),r.parts_.length>0&&(r.byteLength_-=1)}function X_(r){if(r.byteLength_>ig)throw new Error(r.errorPrefix_+"has a key path longer than "+ig+" bytes ("+r.byteLength_+").");if(r.parts_.length>sg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sg+") or object contains a cycle "+Pr(r))}function Pr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Od extends Q_{static getInstance(){return new Od}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Si=1e3,iS=300*1e3,og=30*1e3,oS=1.3,lS=3e4,aS="server_kill",lg=3;class Sn extends q_{constructor(e,n,i,l,c,d,p,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=d,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=Sn.nextPersistentConnectionId_++,this.log_=io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Si,this.maxReconnectDelay_=iS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const l=++this.requestNumber_,c={r:l,a:e,b:n};this.log_(Ye(c)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),i&&(this.requestCBHash_[l]=i)}get(e){this.initConnection_();const n=new Ji,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const p=d.d;d.s==="ok"?n.resolve(p):n.reject(p)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,i,l){this.initConnection_();const c=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+c),this.listens.has(d)||this.listens.set(d,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(d).has(c),"listen() called twice for same path/queryId.");const p={onComplete:l,hashFn:n,query:e,tag:i};this.listens.get(d).set(c,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+i+" for "+l);const c={p:i},d="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(d,c,p=>{const m=p.d,_=p.s;Sn.warnOnListenWarnings_(m,n),(this.listens.get(i)&&this.listens.get(i).get(l))===e&&(this.log_("listen response",p),_!=="ok"&&this.removeListen_(i,l),e.onComplete&&e.onComplete(_,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const i=Is(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Mw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=og)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jw(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,l=>{const c=l.s,d=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,l)&&this.connected_&&this.sendUnlisten_(i,l,e._queryObject,n)}sendUnlisten_(e,n,i,l){this.log_("Unlisten on "+e+" for "+n);const c={p:e},d="n";l&&(c.q=i,c.t=l),this.sendRequest(d,c)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,l){const c={p:n,d:i};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,i,l){this.putInternal("p",e,n,i,l)}merge(e,n,i,l){this.putInternal("m",e,n,i,l)}putInternal(e,n,i,l,c){this.initConnection_();const d={p:n,d:i};c!==void 0&&(d.h=c),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const c=i.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ku("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lS&&(this.reconnectDelay_=Si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Sn.nextConnectionId_++,c=this.lastSessionId;let d=!1,p=null;const m=function(){p?p.close():(d=!0,i())},_=function(x){j(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(x)};this.realtime_={close:m,sendRequest:_};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);d?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=w&&w.token,p=new ZC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,T=>{yt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(aS)},c))}catch(x){this.log_("Failed to get token: "+x),d||(this.repoInfo_.nodeAdmin&&yt(x),m())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mu(this.interruptReasons_)&&(this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(c=>Nd(c)).join("$"):i="default";const l=this.removeListen_(e,i);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const i=new Ee(e).toString();let l;if(this.listens.has(i)){const c=this.listens.get(i);l=c.get(n),c.delete(n),c.size===0&&this.listens.delete(i)}else l=void 0;return l}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lg&&(this.reconnectDelay_=og,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+N_.replace(/\./g,"-")]=1,pd()?e["framework.cordova"]=1:zg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vl.getInstance().currentlyOnline();return Mu(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class ca{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ae(ks,e),l=new ae(ks,n);return this.compare(i,l)!==0}minPost(){return ae.MIN}}/**
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
 */let Cl;class J_ extends ca{static get __EMPTY_NODE(){return Cl}static set __EMPTY_NODE(e){Cl=e}compare(e,n){return Hr(e.name,n.name)}isDefinedOn(e){throw As("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Mr,Cl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Cl)}toString(){return".key"}}const Ss=new J_;/**
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
 */class Sl{constructor(e,n,i,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?i(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,i,l,c){this.key=e,this.value=n,this.color=i??nt.RED,this.left=l??Nt.EMPTY_NODE,this.right=c??Nt.EMPTY_NODE}copy(e,n,i,l,c){return new nt(e??this.key,n??this.value,i??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let l=this;const c=i(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,n,i),null):c===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,i)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,l;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY_NODE;l=i.right.min_(),i=i.copy(l.key,l.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class cS{copy(e,n,i,l,c){return this}insert(e,n,i){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,n=Nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,l=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return l?l.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(l=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sl(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new cS;/**
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
 */function uS(r,e){return Hr(r.name,e.name)}function Dd(r,e){return Hr(r,e)}/**
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
 */let Qu;function dS(r){Qu=r}const Z_=function(r){return typeof r=="number"?"number:"+A_(r):"string:"+r},ey=function(r){if(r.isLeafNode()){const e=r.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else j(r===Qu||r.isEmpty(),"priority of unexpected type.");j(r===Qu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ag;class tt{static set __childrenNodeConstructor(e){ag=e}static get __childrenNodeConstructor(){return ag}constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ey(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:le(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=le(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(j(i!==".priority"||ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Z_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=A_(this.value_):e+=this.value_,this.lazyHash_=R_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,l=tt.VALUE_TYPE_ORDER.indexOf(n),c=tt.VALUE_TYPE_ORDER.indexOf(i);return j(l>=0,"Unknown leaf type: "+n),j(c>=0,"Unknown leaf type: "+i),l===c?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ty,ny;function hS(r){ty=r}function fS(r){ny=r}class pS extends ca{compare(e,n){const i=e.node.getPriority(),l=n.node.getPriority(),c=i.compareTo(l);return c===0?Hr(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Mr,new tt("[PRIORITY-POST]",ny))}makePost(e,n){const i=ty(e);return new ae(n,new tt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Fe=new pS;/**
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
 */const mS=Math.log(2);class gS{constructor(e){const n=c=>parseInt(Math.log(c)/mS,10),i=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=i(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $l=function(r,e,n,i){r.sort(e);const l=function(m,_){const v=_-m;let x,w;if(v===0)return null;if(v===1)return x=r[m],w=n?n(x):x,new nt(w,x.node,nt.BLACK,null,null);{const T=parseInt(v/2,10)+m,P=l(m,T),R=l(T+1,_);return x=r[T],w=n?n(x):x,new nt(w,x.node,nt.BLACK,P,R)}},c=function(m){let _=null,v=null,x=r.length;const w=function(P,R){const M=x-P,te=x;x-=P;const re=l(M+1,te),G=r[M],F=n?n(G):G;T(new nt(F,G.node,R,null,re))},T=function(P){_?(_.left=P,_=P):(v=P,_=P)};for(let P=0;P<m.count;++P){const R=m.nextBitIsOne(),M=Math.pow(2,m.count-(P+1));R?w(M,nt.BLACK):(w(M,nt.BLACK),w(M,nt.RED))}return v},d=new gS(r.length),p=c(d);return new Nt(i||e,p)};/**
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
 */let Pu;const gs={};class En{static get Default(){return j(gs&&Fe,"ChildrenNode.ts has not been loaded"),Pu=Pu||new En({".priority":gs},{".priority":Fe}),Pu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Is(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Nt?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let l=!1;const c=n.getIterator(ae.Wrap);let d=c.getNext();for(;d;)l=l||e.isDefinedOn(d.node),i.push(d),d=c.getNext();let p;l?p=$l(i,e.getCompare()):p=gs;const m=e.toString(),_={...this.indexSet_};_[m]=e;const v={...this.indexes_};return v[m]=p,new En(v,_)}addToIndexes(e,n){const i=Ll(this.indexes_,(l,c)=>{const d=Is(this.indexSet_,c);if(j(d,"Missing index implementation for "+c),l===gs)if(d.isDefinedOn(e.node)){const p=[],m=n.getIterator(ae.Wrap);let _=m.getNext();for(;_;)_.name!==e.name&&p.push(_),_=m.getNext();return p.push(e),$l(p,d.getCompare())}else return gs;else{const p=n.get(e.name);let m=l;return p&&(m=m.remove(new ae(e.name,p))),m.insert(e,e.node)}});return new En(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ll(this.indexes_,l=>{if(l===gs)return l;{const c=n.get(e.name);return c?l.remove(new ae(e.name,c)):l}});return new En(i,this.indexSet_)}}/**
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
 */let Ii;class Z{static get EMPTY_NODE(){return Ii||(Ii=new Z(new Nt(Dd),null,En.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ey(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ae(e,n);let l,c;n.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(i,this.children_)):(l=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(i,this.children_));const d=l.isEmpty()?Ii:this.priorityNode_;return new Z(l,d,c)}}updateChild(e,n){const i=le(e);if(i===null)return n;{j(le(e)!==".priority"||ur(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(i).updateChild(Ne(e),n);return this.updateImmediateChild(i,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,l=0,c=!0;if(this.forEachChild(Fe,(d,p)=>{n[d]=p.val(e),i++,c&&Z.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):c=!1}),!e&&c&&l<2*i){const d=[];for(const p in n)d[p]=n[p];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Z_(this.getPriority().val())+":"),this.forEachChild(Fe,(n,i)=>{const l=i.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":R_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const l=this.resolveIndex_(i);if(l){const c=l.getPredecessorKey(new ae(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ae.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let c=l.peek();for(;c!=null&&n.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oo?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Fe),l=n.getIterator(Fe);let c=i.getNext(),d=l.getNext();for(;c&&d;){if(c.name!==d.name||!c.node.equals(d.node))return!1;c=i.getNext(),d=l.getNext()}return c===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _S extends Z{constructor(){super(new Nt(Dd),Z.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const oo=new _S;Object.defineProperties(ae,{MIN:{value:new ae(ks,Z.EMPTY_NODE)},MAX:{value:new ae(Mr,oo)}});J_.__EMPTY_NODE=Z.EMPTY_NODE;tt.__childrenNodeConstructor=Z;dS(oo);fS(oo);/**
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
 */const yS=!0;function Qe(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new tt(n,Qe(e))}if(!(r instanceof Array)&&yS){const n=[];let i=!1;if(ot(r,(d,p)=>{if(d.substring(0,1)!=="."){const m=Qe(p);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),n.push(new ae(d,m)))}}),n.length===0)return Z.EMPTY_NODE;const c=$l(n,uS,d=>d.name,Dd);if(i){const d=$l(n,Fe.getCompare());return new Z(c,Qe(e),new En({".priority":d},{".priority":Fe}))}else return new Z(c,Qe(e),En.Default)}else{let n=Z.EMPTY_NODE;return ot(r,(i,l)=>{if(dn(r,i)&&i.substring(0,1)!=="."){const c=Qe(l);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(i,c))}}),n.updatePriority(Qe(e))}}hS(Qe);/**
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
 */class vS extends ca{constructor(e){super(),this.indexPath_=e,j(!ue(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),l=this.extractChild(n.node),c=i.compareTo(l);return c===0?Hr(e.name,n.name):c}makePost(e,n){const i=Qe(e),l=Z.EMPTY_NODE.updateChild(this.indexPath_,i);return new ae(n,l)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,oo);return new ae(Mr,e)}toString(){return $i(this.indexPath_,0).join("/")}}/**
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
 */class wS extends ca{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Hr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const i=Qe(e);return new ae(n,i)}toString(){return".value"}}const xS=new wS;/**
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
 */function ry(r){return{type:"value",snapshotNode:r}}function Ns(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Gi(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ki(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function ES(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Ld{constructor(e){this.index_=e}updateChild(e,n,i,l,c,d){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=e.getImmediateChild(n);return p.getChild(l).equals(i.getChild(l))&&p.isEmpty()===i.isEmpty()||(d!=null&&(i.isEmpty()?e.hasChild(n)?d.trackChildChange(Gi(n,p)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?d.trackChildChange(Ns(n,i)):d.trackChildChange(Ki(n,i,p))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Fe,(l,c)=>{n.hasChild(l)||i.trackChildChange(Gi(l,c))}),n.isLeafNode()||n.forEachChild(Fe,(l,c)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(c)||i.trackChildChange(Ki(l,c,d))}else i.trackChildChange(Ns(l,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class qi{constructor(e){this.indexedFilter_=new Ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qi.getStartPost_(e),this.endPost_=qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,l,c,d){return this.matches(new ae(n,i))||(i=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,l,c,d)}updateFullNode(e,n,i){n.isLeafNode()&&(n=Z.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(Z.EMPTY_NODE);const c=this;return n.forEachChild(Fe,(d,p)=>{c.matches(new ae(d,p))||(l=l.updateImmediateChild(d,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class CS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,l,c,d){return this.rangedFilter_.matches(new ae(n,i))||(i=Z.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,l,c,d):this.fullLimitUpdateChild_(e,n,i,c,d)}updateFullNode(e,n,i){let l;if(n.isLeafNode()||n.isEmpty())l=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=Z.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;c.hasNext()&&d<this.limit_;){const p=c.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))l=l.updateImmediateChild(p.name,p.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(Z.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let d=0;for(;c.hasNext();){const p=c.getNext();d<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?d++:l=l.updateImmediateChild(p.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,l,c){let d;if(this.reverse_){const x=this.index_.getCompare();d=(w,T)=>x(T,w)}else d=this.index_.getCompare();const p=e;j(p.numChildren()===this.limit_,"");const m=new ae(n,i),_=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),v=this.rangedFilter_.matches(m);if(p.hasChild(n)){const x=p.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,_,this.reverse_);for(;w!=null&&(w.name===n||p.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const T=w==null?1:d(w,m);if(v&&!i.isEmpty()&&T>=0)return c?.trackChildChange(Ki(n,i,x)),p.updateImmediateChild(n,i);{c?.trackChildChange(Gi(n,x));const R=p.updateImmediateChild(n,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(c?.trackChildChange(Ns(w.name,w.node)),R.updateImmediateChild(w.name,w.node)):R}}else return i.isEmpty()?e:v&&d(_,m)>=0?(c!=null&&(c.trackChildChange(Gi(_.name,_.node)),c.trackChildChange(Ns(n,i))),p.updateImmediateChild(n,i).updateImmediateChild(_.name,Z.EMPTY_NODE)):e}}/**
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
 */class jd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ks}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new jd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SS(r){return r.loadsAllData()?new Ld(r.getIndex()):r.hasLimit()?new CS(r):new qi(r)}function cg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Fe?n="$priority":r.index_===xS?n="$value":r.index_===Ss?n="$key":(j(r.index_ instanceof vS,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Ye(n),r.startSet_){const i=r.startAfterSet_?"startAfter":"startAt";e[i]=Ye(r.indexStartValue_),r.startNameSet_&&(e[i]+=","+Ye(r.indexStartName_))}if(r.endSet_){const i=r.endBeforeSet_?"endBefore":"endAt";e[i]=Ye(r.indexEndValue_),r.endNameSet_&&(e[i]+=","+Ye(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function ug(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Fe&&(e.i=r.index_.toString()),e}/**
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
 */class Gl extends q_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=l,this.log_=io("p:rest:"),this.listens_={}}listen(e,n,i,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const d=Gl.getListenId_(e,i),p={};this.listens_[d]=p;const m=cg(e._queryParams);this.restRequest_(c+".json",m,(_,v)=>{let x=v;if(_===404&&(x=null,_=null),_===null&&this.onDataUpdate_(c,x,!1,i),Is(this.listens_,d)===p){let w;_?_===401?w="permission_denied":w="rest_error:"+_:w="ok",l(w,null)}})}unlisten(e,n){const i=Gl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=cg(e._queryParams),i=e._path.toString(),l=new Ji;return this.restRequest_(i+".json",n,(c,d)=>{let p=d;c===404&&(p=null,c=null),c===null?(this.onDataUpdate_(i,p,!1,null),l.resolve(p)):l.reject(new Error(p))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(n.auth=l.accessToken),c&&c.token&&(n.ac=c.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bs(n);this.log_("Sending REST request for "+d);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(i&&p.readyState===4){this.log_("REST Response for "+d+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Fi(p.responseText)}catch{yt("Failed to parse JSON response for "+d+": "+p.responseText)}i(null,m)}else p.status!==401&&p.status!==404&&yt("Got unsuccessful REST response for "+d+" Status: "+p.status),i(p.status);i=null}},p.open("GET",d,!0),p.send()})}}/**
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
 */class IS{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Kl(){return{value:null,children:new Map}}function sy(r,e,n){if(ue(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const i=le(e);r.children.has(i)||r.children.set(i,Kl());const l=r.children.get(i);e=Ne(e),sy(l,e,n)}}function Yu(r,e,n){r.value!==null?n(e,r.value):kS(r,(i,l)=>{const c=new Ee(e.toString()+"/"+i);Yu(l,c,n)})}function kS(r,e){r.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class NS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&ot(this.last_,(i,l)=>{n[i]=n[i]-l}),this.last_=e,n}}/**
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
 */const dg=10*1e3,TS=30*1e3,RS=300*1e3;class PS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NS(e);const i=dg+(TS-dg)*Math.random();Oi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ot(e,(l,c)=>{c>0&&dn(this.statsToReport_,l)&&(n[l]=c,i=!0)}),i&&this.server_.reportStats(n),Oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*RS))}}/**
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
 */var Jt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function Md(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ud(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class ql{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Jt.ACK_USER_WRITE,this.source=Md()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new ql(ge(),n,this.revert)}}else return j(le(this.path)===e,"operationForChild called for unrelated child."),new ql(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qi{constructor(e,n){this.source=e,this.path=n,this.type=Jt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Qi(this.source,ge()):new Qi(this.source,Ne(this.path))}}/**
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
 */class Ur{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Jt.OVERWRITE}operationForChild(e){return ue(this.path)?new Ur(this.source,ge(),this.snap.getImmediateChild(e)):new Ur(this.source,Ne(this.path),this.snap)}}/**
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
 */class Ts{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Jt.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Ur(this.source,ge(),n.value):new Ts(this.source,ge(),n)}else return j(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ts(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class dr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class AS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bS(r,e,n,i){const l=[],c=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&c.push(ES(d.childName,d.snapshotNode))}),ki(r,l,"child_removed",e,i,n),ki(r,l,"child_added",e,i,n),ki(r,l,"child_moved",c,i,n),ki(r,l,"child_changed",e,i,n),ki(r,l,"value",e,i,n),l}function ki(r,e,n,i,l,c){const d=i.filter(p=>p.type===n);d.sort((p,m)=>DS(r,p,m)),d.forEach(p=>{const m=OS(r,p,c);l.forEach(_=>{_.respondsTo(p.type)&&e.push(_.createEvent(m,r.query_))})})}function OS(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function DS(r,e,n){if(e.childName==null||n.childName==null)throw As("Should only compare child_ events.");const i=new ae(e.childName,e.snapshotNode),l=new ae(n.childName,n.snapshotNode);return r.index_.compare(i,l)}/**
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
 */function ua(r,e){return{eventCache:r,serverCache:e}}function Di(r,e,n,i){return ua(new dr(e,n,i),r.serverCache)}function iy(r,e,n,i){return ua(r.eventCache,new dr(e,n,i))}function Ql(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Fr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Au;const LS=()=>(Au||(Au=new Nt(vC)),Au);class ke{static fromObject(e){let n=new ke(null);return ot(e,(i,l)=>{n=n.set(new Ee(i),l)}),n}constructor(e,n=LS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ue(e))return null;{const i=le(e),l=this.children.get(i);if(l!==null){const c=l.findRootMostMatchingPathAndValue(Ne(e),n);return c!=null?{path:Ue(new Ee(i),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=le(e),i=this.children.get(n);return i!==null?i.subtree(Ne(e)):new ke(null)}}set(e,n){if(ue(e))return new ke(n,this.children);{const i=le(e),c=(this.children.get(i)||new ke(null)).set(Ne(e),n),d=this.children.insert(i,c);return new ke(this.value,d)}}remove(e){if(ue(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=le(e),i=this.children.get(n);if(i){const l=i.remove(Ne(e));let c;return l.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,l),this.value===null&&c.isEmpty()?new ke(null):new ke(this.value,c)}else return this}}get(e){if(ue(e))return this.value;{const n=le(e),i=this.children.get(n);return i?i.get(Ne(e)):null}}setTree(e,n){if(ue(e))return n;{const i=le(e),c=(this.children.get(i)||new ke(null)).setTree(Ne(e),n);let d;return c.isEmpty()?d=this.children.remove(i):d=this.children.insert(i,c),new ke(this.value,d)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((l,c)=>{i[l]=c.fold_(Ue(e,l),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,i){const l=this.value?i(n,this.value):!1;if(l)return l;if(ue(e))return null;{const c=le(e),d=this.children.get(c);return d?d.findOnPath_(Ne(e),Ue(n,c),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,i){if(ue(e))return this;{this.value&&i(n,this.value);const l=le(e),c=this.children.get(l);return c?c.foreachOnPath_(Ne(e),Ue(n,l),i):new ke(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((i,l)=>{l.foreach_(Ue(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new ke(null))}}function Li(r,e,n){if(ue(e))return new Zt(new ke(n));{const i=r.writeTree_.findRootMostValueAndPath(e);if(i!=null){const l=i.path;let c=i.value;const d=_t(l,e);return c=c.updateChild(d,n),new Zt(r.writeTree_.set(l,c))}else{const l=new ke(n),c=r.writeTree_.setTree(e,l);return new Zt(c)}}}function Xu(r,e,n){let i=r;return ot(n,(l,c)=>{i=Li(i,Ue(e,l),c)}),i}function hg(r,e){if(ue(e))return Zt.empty();{const n=r.writeTree_.setTree(e,new ke(null));return new Zt(n)}}function Ju(r,e){return Vr(r,e)!=null}function Vr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function fg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(i,l)=>{e.push(new ae(i,l))}):r.writeTree_.children.inorderTraversal((i,l)=>{l.value!=null&&e.push(new ae(i,l.value))}),e}function or(r,e){if(ue(e))return r;{const n=Vr(r,e);return n!=null?new Zt(new ke(n)):new Zt(r.writeTree_.subtree(e))}}function Zu(r){return r.writeTree_.isEmpty()}function Rs(r,e){return oy(ge(),r.writeTree_,e)}function oy(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let i=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(j(c.value!==null,"Priority writes must always be leaf nodes"),i=c.value):n=oy(Ue(r,l),c,n)}),!n.getChild(r).isEmpty()&&i!==null&&(n=n.updateChild(Ue(r,".priority"),i)),n}}/**
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
 */function da(r,e){return uy(e,r)}function jS(r,e,n,i,l){j(i>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:i,visible:l}),l&&(r.visibleWrites=Li(r.visibleWrites,e,n)),r.lastWriteId=i}function MS(r,e,n,i){j(i>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:i,visible:!0}),r.visibleWrites=Xu(r.visibleWrites,e,n),r.lastWriteId=i}function US(r,e){for(let n=0;n<r.allWrites.length;n++){const i=r.allWrites[n];if(i.writeId===e)return i}return null}function FS(r,e){const n=r.allWrites.findIndex(p=>p.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const i=r.allWrites[n];r.allWrites.splice(n,1);let l=i.visible,c=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const p=r.allWrites[d];p.visible&&(d>=n&&zS(p,i.path)?l=!1:Bt(i.path,p.path)&&(c=!0)),d--}if(l){if(c)return BS(r),!0;if(i.snap)r.visibleWrites=hg(r.visibleWrites,i.path);else{const p=i.children;ot(p,m=>{r.visibleWrites=hg(r.visibleWrites,Ue(i.path,m))})}return!0}else return!1}function zS(r,e){if(r.snap)return Bt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Bt(Ue(r.path,n),e))return!0;return!1}function BS(r){r.visibleWrites=ly(r.allWrites,WS,ge()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function WS(r){return r.visible}function ly(r,e,n){let i=Zt.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const d=c.path;let p;if(c.snap)Bt(n,d)?(p=_t(n,d),i=Li(i,p,c.snap)):Bt(d,n)&&(p=_t(d,n),i=Li(i,ge(),c.snap.getChild(p)));else if(c.children){if(Bt(n,d))p=_t(n,d),i=Xu(i,p,c.children);else if(Bt(d,n))if(p=_t(d,n),ue(p))i=Xu(i,ge(),c.children);else{const m=Is(c.children,le(p));if(m){const _=m.getChild(Ne(p));i=Li(i,ge(),_)}}}else throw As("WriteRecord should have .snap or .children")}}return i}function ay(r,e,n,i,l){if(!i&&!l){const c=Vr(r.visibleWrites,e);if(c!=null)return c;{const d=or(r.visibleWrites,e);if(Zu(d))return n;if(n==null&&!Ju(d,ge()))return null;{const p=n||Z.EMPTY_NODE;return Rs(d,p)}}}else{const c=or(r.visibleWrites,e);if(!l&&Zu(c))return n;if(!l&&n==null&&!Ju(c,ge()))return null;{const d=function(_){return(_.visible||l)&&(!i||!~i.indexOf(_.writeId))&&(Bt(_.path,e)||Bt(e,_.path))},p=ly(r.allWrites,d,e),m=n||Z.EMPTY_NODE;return Rs(p,m)}}}function HS(r,e,n){let i=Z.EMPTY_NODE;const l=Vr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Fe,(c,d)=>{i=i.updateImmediateChild(c,d)}),i;if(n){const c=or(r.visibleWrites,e);return n.forEachChild(Fe,(d,p)=>{const m=Rs(or(c,new Ee(d)),p);i=i.updateImmediateChild(d,m)}),fg(c).forEach(d=>{i=i.updateImmediateChild(d.name,d.node)}),i}else{const c=or(r.visibleWrites,e);return fg(c).forEach(d=>{i=i.updateImmediateChild(d.name,d.node)}),i}}function VS(r,e,n,i,l){j(i||l,"Either existingEventSnap or existingServerSnap must exist");const c=Ue(e,n);if(Ju(r.visibleWrites,c))return null;{const d=or(r.visibleWrites,c);return Zu(d)?l.getChild(n):Rs(d,l.getChild(n))}}function $S(r,e,n,i){const l=Ue(e,n),c=Vr(r.visibleWrites,l);if(c!=null)return c;if(i.isCompleteForChild(n)){const d=or(r.visibleWrites,l);return Rs(d,i.getNode().getImmediateChild(n))}else return null}function GS(r,e){return Vr(r.visibleWrites,e)}function KS(r,e,n,i,l,c,d){let p;const m=or(r.visibleWrites,e),_=Vr(m,ge());if(_!=null)p=_;else if(n!=null)p=Rs(m,n);else return[];if(p=p.withIndex(d),!p.isEmpty()&&!p.isLeafNode()){const v=[],x=d.getCompare(),w=c?p.getReverseIteratorFrom(i,d):p.getIteratorFrom(i,d);let T=w.getNext();for(;T&&v.length<l;)x(T,i)!==0&&v.push(T),T=w.getNext();return v}else return[]}function qS(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Yl(r,e,n,i){return ay(r.writeTree,r.treePath,e,n,i)}function zd(r,e){return HS(r.writeTree,r.treePath,e)}function pg(r,e,n,i){return VS(r.writeTree,r.treePath,e,n,i)}function Xl(r,e){return GS(r.writeTree,Ue(r.treePath,e))}function QS(r,e,n,i,l,c){return KS(r.writeTree,r.treePath,e,n,i,l,c)}function Bd(r,e,n){return $S(r.writeTree,r.treePath,e,n)}function cy(r,e){return uy(Ue(r.treePath,e),r.writeTree)}function uy(r,e){return{treePath:r,writeTree:e}}/**
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
 */class YS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(i!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(i);if(l){const c=l.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(i,Ki(i,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(i,Gi(i,l.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(i,Ns(i,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(i,Ki(i,e.snapshotNode,l.oldSnap));else throw As("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class XS{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const dy=new XS;class Wd{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bd(this.writes_,e,i)}}getChildAfterChild(e,n,i){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fr(this.viewCache_),c=QS(this.writes_,l,n,1,i,e);return c.length===0?null:c[0]}}/**
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
 */function JS(r){return{filter:r}}function ZS(r,e){j(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function eI(r,e,n,i,l){const c=new YS;let d,p;if(n.type===Jt.OVERWRITE){const _=n;_.source.fromUser?d=ed(r,e,_.path,_.snap,i,l,c):(j(_.source.fromServer,"Unknown source."),p=_.source.tagged||e.serverCache.isFiltered()&&!ue(_.path),d=Jl(r,e,_.path,_.snap,i,l,p,c))}else if(n.type===Jt.MERGE){const _=n;_.source.fromUser?d=nI(r,e,_.path,_.children,i,l,c):(j(_.source.fromServer,"Unknown source."),p=_.source.tagged||e.serverCache.isFiltered(),d=td(r,e,_.path,_.children,i,l,p,c))}else if(n.type===Jt.ACK_USER_WRITE){const _=n;_.revert?d=iI(r,e,_.path,i,l,c):d=rI(r,e,_.path,_.affectedTree,i,l,c)}else if(n.type===Jt.LISTEN_COMPLETE)d=sI(r,e,n.path,i,c);else throw As("Unknown operation type: "+n.type);const m=c.getChanges();return tI(e,d,m),{viewCache:d,changes:m}}function tI(r,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const l=i.getNode().isLeafNode()||i.getNode().isEmpty(),c=Ql(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!i.getNode().equals(c)||!i.getNode().getPriority().equals(c.getPriority()))&&n.push(ry(Ql(e)))}}function hy(r,e,n,i,l,c){const d=e.eventCache;if(Xl(i,n)!=null)return e;{let p,m;if(ue(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const _=Fr(e),v=_ instanceof Z?_:Z.EMPTY_NODE,x=zd(i,v);p=r.filter.updateFullNode(e.eventCache.getNode(),x,c)}else{const _=Yl(i,Fr(e));p=r.filter.updateFullNode(e.eventCache.getNode(),_,c)}else{const _=le(n);if(_===".priority"){j(ur(n)===1,"Can't have a priority with additional path components");const v=d.getNode();m=e.serverCache.getNode();const x=pg(i,n,v,m);x!=null?p=r.filter.updatePriority(v,x):p=d.getNode()}else{const v=Ne(n);let x;if(d.isCompleteForChild(_)){m=e.serverCache.getNode();const w=pg(i,n,d.getNode(),m);w!=null?x=d.getNode().getImmediateChild(_).updateChild(v,w):x=d.getNode().getImmediateChild(_)}else x=Bd(i,_,e.serverCache);x!=null?p=r.filter.updateChild(d.getNode(),_,x,v,l,c):p=d.getNode()}}return Di(e,p,d.isFullyInitialized()||ue(n),r.filter.filtersNodes())}}function Jl(r,e,n,i,l,c,d,p){const m=e.serverCache;let _;const v=d?r.filter:r.filter.getIndexedFilter();if(ue(n))_=v.updateFullNode(m.getNode(),i,null);else if(v.filtersNodes()&&!m.isFiltered()){const T=m.getNode().updateChild(n,i);_=v.updateFullNode(m.getNode(),T,null)}else{const T=le(n);if(!m.isCompleteForPath(n)&&ur(n)>1)return e;const P=Ne(n),M=m.getNode().getImmediateChild(T).updateChild(P,i);T===".priority"?_=v.updatePriority(m.getNode(),M):_=v.updateChild(m.getNode(),T,M,P,dy,null)}const x=iy(e,_,m.isFullyInitialized()||ue(n),v.filtersNodes()),w=new Wd(l,x,c);return hy(r,x,n,l,w,p)}function ed(r,e,n,i,l,c,d){const p=e.eventCache;let m,_;const v=new Wd(l,e,c);if(ue(n))_=r.filter.updateFullNode(e.eventCache.getNode(),i,d),m=Di(e,_,!0,r.filter.filtersNodes());else{const x=le(n);if(x===".priority")_=r.filter.updatePriority(e.eventCache.getNode(),i),m=Di(e,_,p.isFullyInitialized(),p.isFiltered());else{const w=Ne(n),T=p.getNode().getImmediateChild(x);let P;if(ue(w))P=i;else{const R=v.getCompleteChild(x);R!=null?Ad(w)===".priority"&&R.getChild(Y_(w)).isEmpty()?P=R:P=R.updateChild(w,i):P=Z.EMPTY_NODE}if(T.equals(P))m=e;else{const R=r.filter.updateChild(p.getNode(),x,P,w,v,d);m=Di(e,R,p.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function mg(r,e){return r.eventCache.isCompleteForChild(e)}function nI(r,e,n,i,l,c,d){let p=e;return i.foreach((m,_)=>{const v=Ue(n,m);mg(e,le(v))&&(p=ed(r,p,v,_,l,c,d))}),i.foreach((m,_)=>{const v=Ue(n,m);mg(e,le(v))||(p=ed(r,p,v,_,l,c,d))}),p}function gg(r,e,n){return n.foreach((i,l)=>{e=e.updateChild(i,l)}),e}function td(r,e,n,i,l,c,d,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,_;ue(n)?_=i:_=new ke(null).setTree(n,i);const v=e.serverCache.getNode();return _.children.inorderTraversal((x,w)=>{if(v.hasChild(x)){const T=e.serverCache.getNode().getImmediateChild(x),P=gg(r,T,w);m=Jl(r,m,new Ee(x),P,l,c,d,p)}}),_.children.inorderTraversal((x,w)=>{const T=!e.serverCache.isCompleteForChild(x)&&w.value===null;if(!v.hasChild(x)&&!T){const P=e.serverCache.getNode().getImmediateChild(x),R=gg(r,P,w);m=Jl(r,m,new Ee(x),R,l,c,d,p)}}),m}function rI(r,e,n,i,l,c,d){if(Xl(l,n)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(ue(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Jl(r,e,n,m.getNode().getChild(n),l,c,p,d);if(ue(n)){let _=new ke(null);return m.getNode().forEachChild(Ss,(v,x)=>{_=_.set(new Ee(v),x)}),td(r,e,n,_,l,c,p,d)}else return e}else{let _=new ke(null);return i.foreach((v,x)=>{const w=Ue(n,v);m.isCompleteForPath(w)&&(_=_.set(v,m.getNode().getChild(w)))}),td(r,e,n,_,l,c,p,d)}}function sI(r,e,n,i,l){const c=e.serverCache,d=iy(e,c.getNode(),c.isFullyInitialized()||ue(n),c.isFiltered());return hy(r,d,n,i,dy,l)}function iI(r,e,n,i,l,c){let d;if(Xl(i,n)!=null)return e;{const p=new Wd(i,e,l),m=e.eventCache.getNode();let _;if(ue(n)||le(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Yl(i,Fr(e));else{const x=e.serverCache.getNode();j(x instanceof Z,"serverChildren would be complete if leaf node"),v=zd(i,x)}v=v,_=r.filter.updateFullNode(m,v,c)}else{const v=le(n);let x=Bd(i,v,e.serverCache);x==null&&e.serverCache.isCompleteForChild(v)&&(x=m.getImmediateChild(v)),x!=null?_=r.filter.updateChild(m,v,x,Ne(n),p,c):e.eventCache.getNode().hasChild(v)?_=r.filter.updateChild(m,v,Z.EMPTY_NODE,Ne(n),p,c):_=m,_.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Yl(i,Fr(e)),d.isLeafNode()&&(_=r.filter.updateFullNode(_,d,c)))}return d=e.serverCache.isFullyInitialized()||Xl(i,ge())!=null,Di(e,_,d,r.filter.filtersNodes())}}/**
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
 */class oI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,l=new Ld(i.getIndex()),c=SS(i);this.processor_=JS(c);const d=n.serverCache,p=n.eventCache,m=l.updateFullNode(Z.EMPTY_NODE,d.getNode(),null),_=c.updateFullNode(Z.EMPTY_NODE,p.getNode(),null),v=new dr(m,d.isFullyInitialized(),l.filtersNodes()),x=new dr(_,p.isFullyInitialized(),c.filtersNodes());this.viewCache_=ua(x,v),this.eventGenerator_=new AS(this.query_)}get query(){return this.query_}}function lI(r){return r.viewCache_.serverCache.getNode()}function aI(r){return Ql(r.viewCache_)}function cI(r,e){const n=Fr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function _g(r){return r.eventRegistrations_.length===0}function uI(r,e){r.eventRegistrations_.push(e)}function yg(r,e,n){const i=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const d=c.createCancelEvent(n,l);d&&i.push(d)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const d=r.eventRegistrations_[c];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return i}function vg(r,e,n,i){e.type===Jt.MERGE&&e.source.queryId!==null&&(j(Fr(r.viewCache_),"We should always have a full cache before handling merges"),j(Ql(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=eI(r.processor_,l,e,n,i);return ZS(r.processor_,c.viewCache),j(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,fy(r,c.changes,c.viewCache.eventCache.getNode(),null)}function dI(r,e){const n=r.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(c,d)=>{i.push(Ns(c,d))}),n.isFullyInitialized()&&i.push(ry(n.getNode())),fy(r,i,n.getNode(),e)}function fy(r,e,n,i){const l=i?[i]:r.eventRegistrations_;return bS(r.eventGenerator_,e,n,l)}/**
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
 */let Zl;class py{constructor(){this.views=new Map}}function hI(r){j(!Zl,"__referenceConstructor has already been defined"),Zl=r}function fI(){return j(Zl,"Reference.ts has not been loaded"),Zl}function pI(r){return r.views.size===0}function Hd(r,e,n,i){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return j(c!=null,"SyncTree gave us an op for an invalid query."),vg(c,e,n,i)}else{let c=[];for(const d of r.views.values())c=c.concat(vg(d,e,n,i));return c}}function my(r,e,n,i,l){const c=e._queryIdentifier,d=r.views.get(c);if(!d){let p=Yl(n,l?i:null),m=!1;p?m=!0:i instanceof Z?(p=zd(n,i),m=!1):(p=Z.EMPTY_NODE,m=!1);const _=ua(new dr(p,m,!1),new dr(i,l,!1));return new oI(e,_)}return d}function mI(r,e,n,i,l,c){const d=my(r,e,i,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),uI(d,n),dI(d,n)}function gI(r,e,n,i){const l=e._queryIdentifier,c=[];let d=[];const p=hr(r);if(l==="default")for(const[m,_]of r.views.entries())d=d.concat(yg(_,n,i)),_g(_)&&(r.views.delete(m),_.query._queryParams.loadsAllData()||c.push(_.query));else{const m=r.views.get(l);m&&(d=d.concat(yg(m,n,i)),_g(m)&&(r.views.delete(l),m.query._queryParams.loadsAllData()||c.push(m.query)))}return p&&!hr(r)&&c.push(new(fI())(e._repo,e._path)),{removed:c,events:d}}function gy(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function lr(r,e){let n=null;for(const i of r.views.values())n=n||cI(i,e);return n}function _y(r,e){if(e._queryParams.loadsAllData())return ha(r);{const i=e._queryIdentifier;return r.views.get(i)}}function yy(r,e){return _y(r,e)!=null}function hr(r){return ha(r)!=null}function ha(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ea;function _I(r){j(!ea,"__referenceConstructor has already been defined"),ea=r}function yI(){return j(ea,"Reference.ts has not been loaded"),ea}let vI=1;class wg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=qS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vy(r,e,n,i,l){return jS(r.pendingWriteTree_,e,n,i,l),l?Ls(r,new Ur(Md(),e,n)):[]}function wI(r,e,n,i){MS(r.pendingWriteTree_,e,n,i);const l=ke.fromObject(n);return Ls(r,new Ts(Md(),e,l))}function nr(r,e,n=!1){const i=US(r.pendingWriteTree_,e);if(FS(r.pendingWriteTree_,e)){let c=new ke(null);return i.snap!=null?c=c.set(ge(),!0):ot(i.children,d=>{c=c.set(new Ee(d),!0)}),Ls(r,new ql(i.path,c,n))}else return[]}function lo(r,e,n){return Ls(r,new Ur(Ud(),e,n))}function xI(r,e,n){const i=ke.fromObject(n);return Ls(r,new Ts(Ud(),e,i))}function EI(r,e){return Ls(r,new Qi(Ud(),e))}function CI(r,e,n){const i=$d(r,n);if(i){const l=Gd(i),c=l.path,d=l.queryId,p=_t(c,e),m=new Qi(Fd(d),p);return Kd(r,c,m)}else return[]}function ta(r,e,n,i,l=!1){const c=e._path,d=r.syncPointTree_.get(c);let p=[];if(d&&(e._queryIdentifier==="default"||yy(d,e))){const m=gI(d,e,n,i);pI(d)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const _=m.removed;if(p=m.events,!l){const v=_.findIndex(w=>w._queryParams.loadsAllData())!==-1,x=r.syncPointTree_.findOnPath(c,(w,T)=>hr(T));if(v&&!x){const w=r.syncPointTree_.subtree(c);if(!w.isEmpty()){const T=kI(w);for(let P=0;P<T.length;++P){const R=T[P],M=R.query,te=Cy(r,R);r.listenProvider_.startListening(ji(M),Yi(r,M),te.hashFn,te.onComplete)}}}!x&&_.length>0&&!i&&(v?r.listenProvider_.stopListening(ji(e),null):_.forEach(w=>{const T=r.queryToTagMap.get(fa(w));r.listenProvider_.stopListening(ji(w),T)}))}NI(r,_)}return p}function wy(r,e,n,i){const l=$d(r,i);if(l!=null){const c=Gd(l),d=c.path,p=c.queryId,m=_t(d,e),_=new Ur(Fd(p),m,n);return Kd(r,d,_)}else return[]}function SI(r,e,n,i){const l=$d(r,i);if(l){const c=Gd(l),d=c.path,p=c.queryId,m=_t(d,e),_=ke.fromObject(n),v=new Ts(Fd(p),m,_);return Kd(r,d,v)}else return[]}function nd(r,e,n,i=!1){const l=e._path;let c=null,d=!1;r.syncPointTree_.foreachOnPath(l,(w,T)=>{const P=_t(w,l);c=c||lr(T,P),d=d||hr(T)});let p=r.syncPointTree_.get(l);p?(d=d||hr(p),c=c||lr(p,ge())):(p=new py,r.syncPointTree_=r.syncPointTree_.set(l,p));let m;c!=null?m=!0:(m=!1,c=Z.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((T,P)=>{const R=lr(P,ge());R&&(c=c.updateImmediateChild(T,R))}));const _=yy(p,e);if(!_&&!e._queryParams.loadsAllData()){const w=fa(e);j(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const T=TI();r.queryToTagMap.set(w,T),r.tagToQueryMap.set(T,w)}const v=da(r.pendingWriteTree_,l);let x=mI(p,e,n,v,c,m);if(!_&&!d&&!i){const w=_y(p,e);x=x.concat(RI(r,e,w))}return x}function Vd(r,e,n){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(d,p)=>{const m=_t(d,e),_=lr(p,m);if(_)return _});return ay(l,e,c,n,!0)}function II(r,e){const n=e._path;let i=null;r.syncPointTree_.foreachOnPath(n,(_,v)=>{const x=_t(_,n);i=i||lr(v,x)});let l=r.syncPointTree_.get(n);l?i=i||lr(l,ge()):(l=new py,r.syncPointTree_=r.syncPointTree_.set(n,l));const c=i!=null,d=c?new dr(i,!0,!1):null,p=da(r.pendingWriteTree_,e._path),m=my(l,e,p,c?d.getNode():Z.EMPTY_NODE,c);return aI(m)}function Ls(r,e){return xy(e,r.syncPointTree_,null,da(r.pendingWriteTree_,ge()))}function xy(r,e,n,i){if(ue(r.path))return Ey(r,e,n,i);{const l=e.get(ge());n==null&&l!=null&&(n=lr(l,ge()));let c=[];const d=le(r.path),p=r.operationForChild(d),m=e.children.get(d);if(m&&p){const _=n?n.getImmediateChild(d):null,v=cy(i,d);c=c.concat(xy(p,m,_,v))}return l&&(c=c.concat(Hd(l,r,i,n))),c}}function Ey(r,e,n,i){const l=e.get(ge());n==null&&l!=null&&(n=lr(l,ge()));let c=[];return e.children.inorderTraversal((d,p)=>{const m=n?n.getImmediateChild(d):null,_=cy(i,d),v=r.operationForChild(d);v&&(c=c.concat(Ey(v,p,m,_)))}),l&&(c=c.concat(Hd(l,r,i,n))),c}function Cy(r,e){const n=e.query,i=Yi(r,n);return{hashFn:()=>(lI(e)||Z.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return i?CI(r,n._path,i):EI(r,n._path);{const c=EC(l,n);return ta(r,n,null,c)}}}}function Yi(r,e){const n=fa(e);return r.queryToTagMap.get(n)}function fa(r){return r._path.toString()+"$"+r._queryIdentifier}function $d(r,e){return r.tagToQueryMap.get(e)}function Gd(r){const e=r.indexOf("$");return j(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Ee(r.substr(0,e))}}function Kd(r,e,n){const i=r.syncPointTree_.get(e);j(i,"Missing sync point for query tag that we're tracking");const l=da(r.pendingWriteTree_,e);return Hd(i,n,l,null)}function kI(r){return r.fold((e,n,i)=>{if(n&&hr(n))return[ha(n)];{let l=[];return n&&(l=gy(n)),ot(i,(c,d)=>{l=l.concat(d)}),l}})}function ji(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(yI())(r._repo,r._path):r}function NI(r,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const l=fa(i),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function TI(){return vI++}function RI(r,e,n){const i=e._path,l=Yi(r,e),c=Cy(r,n),d=r.listenProvider_.startListening(ji(e),l,c.hashFn,c.onComplete),p=r.syncPointTree_.subtree(i);if(l)j(!hr(p.value),"If we're adding a query, it shouldn't be shadowed");else{const m=p.fold((_,v,x)=>{if(!ue(_)&&v&&hr(v))return[ha(v).query];{let w=[];return v&&(w=w.concat(gy(v).map(T=>T.query))),ot(x,(T,P)=>{w=w.concat(P)}),w}});for(let _=0;_<m.length;++_){const v=m[_];r.listenProvider_.stopListening(ji(v),Yi(r,v))}}return d}/**
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
 */class qd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qd(n)}node(){return this.node_}}class Qd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new Qd(this.syncTree_,n)}node(){return Vd(this.syncTree_,this.path_)}}const PI=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},xg=function(r,e,n){if(!r||typeof r!="object")return r;if(j(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return AI(r[".sv"],e,n);if(typeof r[".sv"]=="object")return bI(r[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},AI=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+r)}},bI=function(r,e,n){r.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const i=r.increment;typeof i!="number"&&j(!1,"Unexpected increment value: "+i);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return i;const d=l.getValue();return typeof d!="number"?i:d+i},Sy=function(r,e,n,i){return Yd(e,new Qd(n,r),i)},Iy=function(r,e,n){return Yd(r,new qd(e),n)};function Yd(r,e,n){const i=r.getPriority().val(),l=xg(i,e.getImmediateChild(".priority"),n);let c;if(r.isLeafNode()){const d=r,p=xg(d.getValue(),e,n);return p!==d.getValue()||l!==d.getPriority().val()?new tt(p,Qe(l)):r}else{const d=r;return c=d,l!==d.getPriority().val()&&(c=c.updatePriority(new tt(l))),d.forEachChild(Fe,(p,m)=>{const _=Yd(m,e.getImmediateChild(p),n);_!==m&&(c=c.updateImmediateChild(p,_))}),c}}/**
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
 */class Xd{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Jd(r,e){let n=e instanceof Ee?e:new Ee(e),i=r,l=le(n);for(;l!==null;){const c=Is(i.node.children,l)||{children:{},childCount:0};i=new Xd(l,i,c),n=Ne(n),l=le(n)}return i}function js(r){return r.node.value}function ky(r,e){r.node.value=e,rd(r)}function Ny(r){return r.node.childCount>0}function OI(r){return js(r)===void 0&&!Ny(r)}function pa(r,e){ot(r.node.children,(n,i)=>{e(new Xd(n,r,i))})}function Ty(r,e,n,i){n&&e(r),pa(r,l=>{Ty(l,e,!0)})}function DI(r,e,n){let i=r.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ao(r){return new Ee(r.parent===null?r.name:ao(r.parent)+"/"+r.name)}function rd(r){r.parent!==null&&LI(r.parent,r.name,r)}function LI(r,e,n){const i=OI(n),l=dn(r.node.children,e);i&&l?(delete r.node.children[e],r.node.childCount--,rd(r)):!i&&!l&&(r.node.children[e]=n.node,r.node.childCount++,rd(r))}/**
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
 */const jI=/[\[\].#$\/\u0000-\u001F\u007F]/,MI=/[\[\].#$\u0000-\u001F\u007F]/,bu=10*1024*1024,Zd=function(r){return typeof r=="string"&&r.length!==0&&!jI.test(r)},Ry=function(r){return typeof r=="string"&&r.length!==0&&!MI.test(r)},UI=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Ry(r)},FI=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!kd(r)||r&&typeof r=="object"&&dn(r,".sv")},zI=function(r,e,n,i){ma(ra(r,"value"),e,n)},ma=function(r,e,n){const i=n instanceof Ee?new nS(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Pr(i));if(typeof e=="function")throw new Error(r+"contains a function "+Pr(i)+" with contents = "+e.toString());if(kd(e))throw new Error(r+"contains "+e.toString()+" "+Pr(i));if(typeof e=="string"&&e.length>bu/3&&sa(e)>bu)throw new Error(r+"contains a string greater than "+bu+" utf8 bytes "+Pr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(ot(e,(d,p)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(c=!0,!Zd(d)))throw new Error(r+" contains an invalid key ("+d+") "+Pr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rS(i,d),ma(r,p,i),sS(i)}),l&&c)throw new Error(r+' contains ".value" child '+Pr(i)+" in addition to actual children.")}},BI=function(r,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const c=$i(i);for(let d=0;d<c.length;d++)if(!(c[d]===".priority"&&d===c.length-1)){if(!Zd(c[d]))throw new Error(r+"contains an invalid key ("+c[d]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tS);let l=null;for(n=0;n<e.length;n++){if(i=e[n],l!==null&&Bt(l,i))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+i.toString());l=i}},WI=function(r,e,n,i){const l=ra(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];ot(e,(d,p)=>{const m=new Ee(d);if(ma(l,p,Ue(n,m)),Ad(m)===".priority"&&!FI(p))throw new Error(l+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(m)}),BI(l,c)},Py=function(r,e,n,i){if(!Ry(n))throw new Error(ra(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HI=function(r,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Py(r,e,n)},Ay=function(r,e){if(le(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},VI=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UI(n))throw new Error(ra(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $I{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ga(r,e){let n=null;for(let i=0;i<e.length;i++){const l=e[i],c=l.getPath();n!==null&&!bd(c,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(l)}n&&r.eventLists_.push(n)}function by(r,e,n){ga(r,n),Oy(r,i=>bd(i,e))}function Wt(r,e,n){ga(r,n),Oy(r,i=>Bt(i,e)||Bt(e,i))}function Oy(r,e){r.recursionDepth_++;let n=!0;for(let i=0;i<r.eventLists_.length;i++){const l=r.eventLists_[i];if(l){const c=l.path;e(c)?(GI(r.eventLists_[i]),r.eventLists_[i]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function GI(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const i=n.getEventRunner();bi&&it("event: "+n.toString()),Ds(i)}}}/**
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
 */const KI="repo_interrupt",qI=25;class QI{constructor(e,n,i,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $I,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kl(),this.transactionQueueTree_=new Xd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YI(r,e,n){if(r.stats_=Rd(r.repoInfo_),r.forceRestClient_||kC())r.server_=new Gl(r.repoInfo_,(i,l,c,d)=>{Eg(r,i,l,c,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Cg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}r.persistentConnection_=new Sn(r.repoInfo_,e,(i,l,c,d)=>{Eg(r,i,l,c,d)},i=>{Cg(r,i)},i=>{JI(r,i)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(i=>{r.server_.refreshAuthToken(i)}),r.appCheckProvider_.addTokenChangeListener(i=>{r.server_.refreshAppCheckToken(i.token)}),r.statsReporter_=AC(r.repoInfo_,()=>new PS(r.stats_,r.server_)),r.infoData_=new IS,r.infoSyncTree_=new wg({startListening:(i,l,c,d)=>{let p=[];const m=r.infoData_.getNode(i._path);return m.isEmpty()||(p=lo(r.infoSyncTree_,i._path,m),setTimeout(()=>{d("ok")},0)),p},stopListening:()=>{}}),eh(r,"connected",!1),r.serverSyncTree_=new wg({startListening:(i,l,c,d)=>(r.server_.listen(i,c,l,(p,m)=>{const _=d(p,m);Wt(r.eventQueue_,i._path,_)}),[]),stopListening:(i,l)=>{r.server_.unlisten(i,l)}})}function XI(r){const n=r.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function _a(r){return PI({timestamp:XI(r)})}function Eg(r,e,n,i,l){r.dataUpdateCount++;const c=new Ee(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(i){const m=Ll(n,_=>Qe(_));d=SI(r.serverSyncTree_,c,m,l)}else{const m=Qe(n);d=wy(r.serverSyncTree_,c,m,l)}else if(i){const m=Ll(n,_=>Qe(_));d=xI(r.serverSyncTree_,c,m)}else{const m=Qe(n);d=lo(r.serverSyncTree_,c,m)}let p=c;d.length>0&&(p=Ps(r,c)),Wt(r.eventQueue_,p,d)}function Cg(r,e){eh(r,"connected",e),e===!1&&nk(r)}function JI(r,e){ot(e,(n,i)=>{eh(r,n,i)})}function eh(r,e,n){const i=new Ee("/.info/"+e),l=Qe(n);r.infoData_.updateSnapshot(i,l);const c=lo(r.infoSyncTree_,i,l);Wt(r.eventQueue_,i,c)}function th(r){return r.nextWriteId_++}function ZI(r,e,n){const i=II(r.serverSyncTree_,e);return i!=null?Promise.resolve(i):r.server_.get(e).then(l=>{const c=Qe(l).withIndex(e._queryParams.getIndex());nd(r.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=lo(r.serverSyncTree_,e._path,c);else{const p=Yi(r.serverSyncTree_,e);d=wy(r.serverSyncTree_,e._path,c,p)}return Wt(r.eventQueue_,e._path,d),ta(r.serverSyncTree_,e,n,null,!0),c},l=>(co(r,"get for query "+Ye(e)+" failed: "+l),Promise.reject(new Error(l))))}function ek(r,e,n,i,l){co(r,"set",{path:e.toString(),value:n,priority:i});const c=_a(r),d=Qe(n,i),p=Vd(r.serverSyncTree_,e),m=Iy(d,p,c),_=th(r),v=vy(r.serverSyncTree_,e,m,_,!0);ga(r.eventQueue_,v),r.server_.put(e.toString(),d.val(!0),(w,T)=>{const P=w==="ok";P||yt("set at "+e+" failed: "+w);const R=nr(r.serverSyncTree_,_,!P);Wt(r.eventQueue_,e,R),sd(r,l,w,T)});const x=rh(r,e);Ps(r,x),Wt(r.eventQueue_,x,[])}function tk(r,e,n,i){co(r,"update",{path:e.toString(),value:n});let l=!0;const c=_a(r),d={};if(ot(n,(p,m)=>{l=!1,d[p]=Sy(Ue(e,p),Qe(m),r.serverSyncTree_,c)}),l)it("update() called with empty data.  Don't do anything."),sd(r,i,"ok",void 0);else{const p=th(r),m=wI(r.serverSyncTree_,e,d,p);ga(r.eventQueue_,m),r.server_.merge(e.toString(),n,(_,v)=>{const x=_==="ok";x||yt("update at "+e+" failed: "+_);const w=nr(r.serverSyncTree_,p,!x),T=w.length>0?Ps(r,e):e;Wt(r.eventQueue_,T,w),sd(r,i,_,v)}),ot(n,_=>{const v=rh(r,Ue(e,_));Ps(r,v)}),Wt(r.eventQueue_,e,[])}}function nk(r){co(r,"onDisconnectEvents");const e=_a(r),n=Kl();Yu(r.onDisconnect_,ge(),(l,c)=>{const d=Sy(l,c,r.serverSyncTree_,e);sy(n,l,d)});let i=[];Yu(n,ge(),(l,c)=>{i=i.concat(lo(r.serverSyncTree_,l,c));const d=rh(r,l);Ps(r,d)}),r.onDisconnect_=Kl(),Wt(r.eventQueue_,ge(),i)}function rk(r,e,n){let i;le(e._path)===".info"?i=nd(r.infoSyncTree_,e,n):i=nd(r.serverSyncTree_,e,n),by(r.eventQueue_,e._path,i)}function sk(r,e,n){let i;le(e._path)===".info"?i=ta(r.infoSyncTree_,e,n):i=ta(r.serverSyncTree_,e,n),by(r.eventQueue_,e._path,i)}function ik(r){r.persistentConnection_&&r.persistentConnection_.interrupt(KI)}function co(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),it(n,...e)}function sd(r,e,n,i){e&&Ds(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let c=l;i&&(c+=": "+i);const d=new Error(c);d.code=l,e(d)}})}function Dy(r,e,n){return Vd(r.serverSyncTree_,e,n)||Z.EMPTY_NODE}function nh(r,e=r.transactionQueueTree_){if(e||ya(r,e),js(e)){const n=jy(r,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&ok(r,ao(e),n)}else Ny(e)&&pa(e,n=>{nh(r,n)})}function ok(r,e,n){const i=n.map(_=>_.currentWriteId),l=Dy(r,e,i);let c=l;const d=l.hash();for(let _=0;_<n.length;_++){const v=n[_];j(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const x=_t(e,v.path);c=c.updateChild(x,v.currentOutputSnapshotRaw)}const p=c.val(!0),m=e;r.server_.put(m.toString(),p,_=>{co(r,"transaction put response",{path:m.toString(),status:_});let v=[];if(_==="ok"){const x=[];for(let w=0;w<n.length;w++)n[w].status=2,v=v.concat(nr(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&x.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();ya(r,Jd(r.transactionQueueTree_,e)),nh(r,r.transactionQueueTree_),Wt(r.eventQueue_,e,v);for(let w=0;w<x.length;w++)Ds(x[w])}else{if(_==="datastale")for(let x=0;x<n.length;x++)n[x].status===3?n[x].status=4:n[x].status=0;else{yt("transaction at "+m.toString()+" failed: "+_);for(let x=0;x<n.length;x++)n[x].status=4,n[x].abortReason=_}Ps(r,e)}},d)}function Ps(r,e){const n=Ly(r,e),i=ao(n),l=jy(r,n);return lk(r,l,i),i}function lk(r,e,n){if(e.length===0)return;const i=[];let l=[];const d=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],_=_t(n,m.path);let v=!1,x;if(j(_!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,x=m.abortReason,l=l.concat(nr(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=qI)v=!0,x="maxretry",l=l.concat(nr(r.serverSyncTree_,m.currentWriteId,!0));else{const w=Dy(r,m.path,d);m.currentInputSnapshot=w;const T=e[p].update(w.val());if(T!==void 0){ma("transaction failed: Data returned ",T,m.path);let P=Qe(T);typeof T=="object"&&T!=null&&dn(T,".priority")||(P=P.updatePriority(w.getPriority()));const M=m.currentWriteId,te=_a(r),re=Iy(P,w,te);m.currentOutputSnapshotRaw=P,m.currentOutputSnapshotResolved=re,m.currentWriteId=th(r),d.splice(d.indexOf(M),1),l=l.concat(vy(r.serverSyncTree_,m.path,re,m.currentWriteId,m.applyLocally)),l=l.concat(nr(r.serverSyncTree_,M,!0))}else v=!0,x="nodata",l=l.concat(nr(r.serverSyncTree_,m.currentWriteId,!0))}Wt(r.eventQueue_,n,l),l=[],v&&(e[p].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[p].unwatcher),e[p].onComplete&&(x==="nodata"?i.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):i.push(()=>e[p].onComplete(new Error(x),!1,null))))}ya(r,r.transactionQueueTree_);for(let p=0;p<i.length;p++)Ds(i[p]);nh(r,r.transactionQueueTree_)}function Ly(r,e){let n,i=r.transactionQueueTree_;for(n=le(e);n!==null&&js(i)===void 0;)i=Jd(i,n),e=Ne(e),n=le(e);return i}function jy(r,e){const n=[];return My(r,e,n),n.sort((i,l)=>i.order-l.order),n}function My(r,e,n){const i=js(e);if(i)for(let l=0;l<i.length;l++)n.push(i[l]);pa(e,l=>{My(r,l,n)})}function ya(r,e){const n=js(e);if(n){let i=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[i]=n[l],i++);n.length=i,ky(e,n.length>0?n:void 0)}pa(e,i=>{ya(r,i)})}function rh(r,e){const n=ao(Ly(r,e)),i=Jd(r.transactionQueueTree_,e);return DI(i,l=>{Ou(r,l)}),Ou(r,i),Ty(i,l=>{Ou(r,l)}),n}function Ou(r,e){const n=js(e);if(n){const i=[];let l=[],c=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(j(c===d-1,"All SENT items should be at beginning of queue."),c=d,n[d].status=3,n[d].abortReason="set"):(j(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(nr(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&i.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));c===-1?ky(e,void 0):n.length=c+1,Wt(r.eventQueue_,ao(e),l);for(let d=0;d<i.length;d++)Ds(i[d])}}/**
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
 */function ak(r){let e="";const n=r.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let l=n[i];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function ck(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):yt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Sg=function(r,e){const n=uk(r),i=n.namespace;n.domain==="firebase.com"&&Nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_C();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new B_(n.host,n.secure,i,l,e,"",i!==n.subdomain),path:new Ee(n.pathString)}},uk=function(r){let e="",n="",i="",l="",c="",d=!0,p="https",m=443;if(typeof r=="string"){let _=r.indexOf("//");_>=0&&(p=r.substring(0,_-1),r=r.substring(_+2));let v=r.indexOf("/");v===-1&&(v=r.length);let x=r.indexOf("?");x===-1&&(x=r.length),e=r.substring(0,Math.min(v,x)),v<x&&(l=ak(r.substring(v,x)));const w=ck(r.substring(Math.min(r.length,x)));_=e.indexOf(":"),_>=0?(d=p==="https"||p==="wss",m=parseInt(e.substring(_+1),10)):_=e.length;const T=e.slice(0,_);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const P=e.indexOf(".");i=e.substring(0,P).toLowerCase(),n=e.substring(P+1),c=i}"ns"in w&&(c=w.ns)}return{host:e,port:m,domain:n,subdomain:i,secure:d,scheme:p,pathString:l,namespace:c}};/**
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
 */class dk{constructor(e,n,i,l){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ye(this.snapshot.exportVal())}}class hk{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Uy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class sh{constructor(e,n,i,l){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=l}get key(){return ue(this._path)?null:Ad(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=ug(this._queryParams),n=Nd(e);return n==="{}"?"default":n}get _queryObject(){return ug(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof sh))return!1;const n=this._repo===e._repo,i=bd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&i&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+eS(this._path)}}class Rn extends sh{constructor(e,n){super(e,n,new jd,!1)}get parent(){const e=Y_(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xi{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),i=id(this.ref,e);return new Xi(this._node.getChild(n),i,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,l)=>e(new Xi(l,id(this.ref,i),Fe)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dt(r,e){return r=Xe(r),r._checkNotDeleted("ref"),e!==void 0?id(r._root,e):r._root}function id(r,e){return r=Xe(r),le(r._path)===null?HI("child","path",e):Py("child","path",e),new Rn(r._repo,Ue(r._path,e))}function fk(r){return Ay("remove",r._path),Fy(r,null)}function Fy(r,e){r=Xe(r),Ay("set",r._path),zI("set",e,r._path);const n=new Ji;return ek(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function Yn(r,e){WI("update",e,r._path);const n=new Ji;return tk(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function zy(r){r=Xe(r);const e=new Uy(()=>{}),n=new va(e);return ZI(r._repo,r,n).then(i=>new Xi(i,new Rn(r._repo,r._path),r._queryParams.getIndex()))}class va{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new dk("value",this,new Xi(e.snapshotNode,new Rn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hk(this,e,n):null}matches(e){return e instanceof va?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pk(r,e,n,i,l){const c=new Uy(n,void 0),d=new va(c);return rk(r._repo,r,d),()=>sk(r._repo,r,d)}function bl(r,e,n,i){return pk(r,"value",e)}hI(Rn);_I(Rn);/**
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
 */const mk="FIREBASE_DATABASE_EMULATOR_HOST",od={};let gk=!1;function _k(r,e,n,i){const l=e.lastIndexOf(":"),c=e.substring(0,l),d=fr(c);r.repoInfo_=new B_(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(r.authTokenProvider_=i)}function yk(r,e,n,i,l){let c=i||r.options.databaseURL;c===void 0&&(r.options.projectId||Nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=Sg(c,l),p=d.repoInfo,m;typeof process<"u"&&Gm&&(m=Gm[mk]),m?(c=`http://${m}?ns=${p.namespace}`,d=Sg(c,l),p=d.repoInfo):d.repoInfo.secure;const _=new TC(r.name,r.options,e);VI("Invalid Firebase Database URL",d),ue(d.path)||Nn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=wk(p,r,_,new NC(r,n));return new xk(v,r)}function vk(r,e){const n=od[e];(!n||n[r.key]!==r)&&Nn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),ik(r),delete n[r.key]}function wk(r,e,n,i){let l=od[e.name];l||(l={},od[e.name]=l);let c=l[r.toURLString()];return c&&Nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new QI(r,gk,n,i),l[r.toURLString()]=c,c}class xk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Nn("Cannot call "+e+" on a deleted database.")}}function Ek(r=_d(),e){const n=ia(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=jg("database");i&&Ck(n,...i)}return n}function Ck(r,e,n,i={}){r=Xe(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Or(i,c.repoInfo_.emulatorOptions))return;Nn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(c.repoInfo_.nodeAdmin)i.mockUserToken&&Nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Al(Al.OWNER);else if(i.mockUserToken){const p=typeof i.mockUserToken=="string"?i.mockUserToken:Fg(i.mockUserToken,r.app.options.projectId);d=new Al(p)}fr(e)&&(hd(e),fd("Database",!0)),_k(c,l,i,d)}/**
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
 */function Sk(r){dC(Br),Dr(new cr("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return yk(i,l,c,n)},"PUBLIC").setMultipleInstances(!0)),an(Km,qm,r),an(Km,qm,"esm2020")}Sn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Sn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};Sk();var Ik="firebase",kk="12.6.0";/**
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
 */an(Ik,kk,"app");/**
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
 */const By="firebasestorage.googleapis.com",Wy="storageBucket",Nk=120*1e3,Tk=600*1e3;/**
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
 */class Be extends Tn{constructor(e,n,i=0){super(Du(e),`Firebase Storage: ${n} (${Du(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ze;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ze||(ze={}));function Du(r){return"storage/"+r}function ih(){const r="An unknown error occurred, please check the error payload for server response.";return new Be(ze.UNKNOWN,r)}function Rk(r){return new Be(ze.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function Pk(r){return new Be(ze.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ak(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(ze.UNAUTHENTICATED,r)}function bk(){return new Be(ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ok(r){return new Be(ze.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function Dk(){return new Be(ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lk(){return new Be(ze.CANCELED,"User canceled the upload/download.")}function jk(r){return new Be(ze.INVALID_URL,"Invalid URL '"+r+"'.")}function Mk(r){return new Be(ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Uk(){return new Be(ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wy+"' property when initializing the app?")}function Fk(){return new Be(ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zk(){return new Be(ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bk(r){return new Be(ze.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ld(r){return new Be(ze.INVALID_ARGUMENT,r)}function Hy(){return new Be(ze.APP_DELETED,"The Firebase app was deleted.")}function Wk(r){return new Be(ze.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Mi(r,e){return new Be(ze.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ni(r){throw new Be(ze.INTERNAL_ERROR,"Internal error: "+r)}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(i.path==="")return i;throw Mk(e)}static makeFromUrl(e,n){let i=null;const l="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const d="(/(.*))?$",p=new RegExp("^gs://"+l+d,"i"),m={bucket:1,path:3};function _(F){F.path_=decodeURIComponent(F.path)}const v="v[A-Za-z0-9_]+",x=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",T=new RegExp(`^https?://${x}/${v}/b/${l}/o${w}`,"i"),P={bucket:1,path:3},R=n===By?"(?:storage.googleapis.com|storage.cloud.google.com)":n,M="([^?#]*)",te=new RegExp(`^https?://${R}/${l}/${M}`,"i"),G=[{regex:p,indices:m,postModify:c},{regex:T,indices:P,postModify:_},{regex:te,indices:{bucket:1,path:2},postModify:_}];for(let F=0;F<G.length;F++){const se=G[F],q=se.regex.exec(e);if(q){const de=q[se.indices.bucket];let ve=q[se.indices.path];ve||(ve=""),i=new Dt(de,ve),se.postModify(i);break}}if(i==null)throw jk(e);return i}}class Hk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Vk(r,e,n){let i=1,l=null,c=null,d=!1,p=0;function m(){return p===2}let _=!1;function v(...M){_||(_=!0,e.apply(null,M))}function x(M){l=setTimeout(()=>{l=null,r(T,m())},M)}function w(){c&&clearTimeout(c)}function T(M,...te){if(_){w();return}if(M){w(),v.call(null,M,...te);return}if(m()||d){w(),v.call(null,M,...te);return}i<64&&(i*=2);let G;p===1?(p=2,G=0):G=(i+Math.random())*1e3,x(G)}let P=!1;function R(M){P||(P=!0,w(),!_&&(l!==null?(M||(p=2),clearTimeout(l),x(0)):M||(p=1)))}return x(0),c=setTimeout(()=>{d=!0,R(!0)},n),R}function $k(r){r(!1)}/**
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
 */function Gk(r){return r!==void 0}function Kk(r){return typeof r=="object"&&!Array.isArray(r)}function oh(r){return typeof r=="string"||r instanceof String}function Ig(r){return lh()&&r instanceof Blob}function lh(){return typeof Blob<"u"}function kg(r,e,n,i){if(i<e)throw ld(`Invalid value for '${r}'. Expected ${e} or greater.`);if(i>n)throw ld(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
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
 */function ah(r,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${r}`}function Vy(r){const e=encodeURIComponent;let n="?";for(const i in r)if(r.hasOwnProperty(i)){const l=e(i)+"="+e(r[i]);n=n+l+"&"}return n=n.slice(0,-1),n}var br;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(br||(br={}));/**
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
 */function qk(r,e){const n=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,c=e.indexOf(r)!==-1;return n||l||c}/**
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
 */class Qk{constructor(e,n,i,l,c,d,p,m,_,v,x,w=!0,T=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=l,this.successCodes_=c,this.additionalRetryCodes_=d,this.callback_=p,this.errorCallback_=m,this.timeout_=_,this.progressCallback_=v,this.connectionFactory_=x,this.retry=w,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,R)=>{this.resolve_=P,this.reject_=R,this.start_()})}start_(){const e=(i,l)=>{if(l){i(!1,new Il(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const d=p=>{const m=p.loaded,_=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,_)};this.progressCallback_!==null&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(d),this.pendingConnection_=null;const p=c.getErrorCode()===br.NO_ERROR,m=c.getStatus();if(!p||qk(m,this.additionalRetryCodes_)&&this.retry){const v=c.getErrorCode()===br.ABORT;i(!1,new Il(!1,null,v));return}const _=this.successCodes_.indexOf(m)!==-1;i(!0,new Il(_,c))})},n=(i,l)=>{const c=this.resolve_,d=this.reject_,p=l.connection;if(l.wasSuccessCode)try{const m=this.callback_(p,p.getResponse());Gk(m)?c(m):c()}catch(m){d(m)}else if(p!==null){const m=ih();m.serverResponse=p.getErrorText(),this.errorCallback_?d(this.errorCallback_(p,m)):d(m)}else if(l.canceled){const m=this.appDelete_?Hy():Lk();d(m)}else{const m=Dk();d(m)}};this.canceled_?n(!1,new Il(!1,null,!0)):this.backoffId_=Vk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$k(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Il{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Yk(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function Xk(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Jk(r,e){e&&(r["X-Firebase-GMPID"]=e)}function Zk(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function eN(r,e,n,i,l,c,d=!0,p=!1){const m=Vy(r.urlParams),_=r.url+m,v=Object.assign({},r.headers);return Jk(v,e),Yk(v,n),Xk(v,c),Zk(v,i),new Qk(_,r.method,v,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,d,p)}/**
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
 */function tN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nN(...r){const e=tN();if(e!==void 0){const n=new e;for(let i=0;i<r.length;i++)n.append(r[i]);return n.getBlob()}else{if(lh())return new Blob(r);throw new Be(ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rN(r,e,n){return r.webkitSlice?r.webkitSlice(e,n):r.mozSlice?r.mozSlice(e,n):r.slice?r.slice(e,n):null}/**
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
 */function sN(r){if(typeof atob>"u")throw Bk("base-64");return atob(r)}/**
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
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lu{constructor(e,n){this.data=e,this.contentType=n||null}}function iN(r,e){switch(r){case ln.RAW:return new Lu($y(e));case ln.BASE64:case ln.BASE64URL:return new Lu(Gy(r,e));case ln.DATA_URL:return new Lu(lN(e),aN(e))}throw ih()}function $y(r){const e=[];for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const c=i,d=r.charCodeAt(++n);i=65536|(c&1023)<<10|d&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function oN(r){let e;try{e=decodeURIComponent(r)}catch{throw Mi(ln.DATA_URL,"Malformed data URL.")}return $y(e)}function Gy(r,e){switch(r){case ln.BASE64:{const l=e.indexOf("-")!==-1,c=e.indexOf("_")!==-1;if(l||c)throw Mi(r,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const l=e.indexOf("+")!==-1,c=e.indexOf("/")!==-1;if(l||c)throw Mi(r,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sN(e)}catch(l){throw l.message.includes("polyfill")?l:Mi(r,"Invalid character found")}const i=new Uint8Array(n.length);for(let l=0;l<n.length;l++)i[l]=n.charCodeAt(l);return i}class Ky{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Mi(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=cN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function lN(r){const e=new Ky(r);return e.base64?Gy(ln.BASE64,e.rest):oN(e.rest)}function aN(r){return new Ky(r).contentType}function cN(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
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
 */class tr{constructor(e,n){let i=0,l="";Ig(e)?(this.data_=e,i=e.size,l=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=l}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ig(this.data_)){const i=this.data_,l=rN(i,e,n);return l===null?null:new tr(l)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new tr(i,!0)}}static getBlob(...e){if(lh()){const n=e.map(i=>i instanceof tr?i.data_:i);return new tr(nN.apply(null,n))}else{const n=e.map(d=>oh(d)?iN(ln.RAW,d).data:d.data_);let i=0;n.forEach(d=>{i+=d.byteLength});const l=new Uint8Array(i);let c=0;return n.forEach(d=>{for(let p=0;p<d.length;p++)l[c++]=d[p]}),new tr(l,!0)}}uploadData(){return this.data_}}/**
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
 */function qy(r){let e;try{e=JSON.parse(r)}catch{return null}return Kk(e)?e:null}/**
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
 */function uN(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function dN(r,e){const n=e.split("/").filter(i=>i.length>0).join("/");return r.length===0?n:r+"/"+n}function Qy(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */function hN(r,e){return e}class gt{constructor(e,n,i,l){this.server=e,this.local=n||e,this.writable=!!i,this.xform=l||hN}}let kl=null;function fN(r){return!oh(r)||r.length<2?r:Qy(r)}function Yy(){if(kl)return kl;const r=[];r.push(new gt("bucket")),r.push(new gt("generation")),r.push(new gt("metageneration")),r.push(new gt("name","fullPath",!0));function e(c,d){return fN(d)}const n=new gt("name");n.xform=e,r.push(n);function i(c,d){return d!==void 0?Number(d):d}const l=new gt("size");return l.xform=i,r.push(l),r.push(new gt("timeCreated")),r.push(new gt("updated")),r.push(new gt("md5Hash",null,!0)),r.push(new gt("cacheControl",null,!0)),r.push(new gt("contentDisposition",null,!0)),r.push(new gt("contentEncoding",null,!0)),r.push(new gt("contentLanguage",null,!0)),r.push(new gt("contentType",null,!0)),r.push(new gt("metadata","customMetadata",!0)),kl=r,kl}function pN(r,e){function n(){const i=r.bucket,l=r.fullPath,c=new Dt(i,l);return e._makeStorageReference(c)}Object.defineProperty(r,"ref",{get:n})}function mN(r,e,n){const i={};i.type="file";const l=n.length;for(let c=0;c<l;c++){const d=n[c];i[d.local]=d.xform(i,e[d.server])}return pN(i,r),i}function Xy(r,e,n){const i=qy(e);return i===null?null:mN(r,i,n)}function gN(r,e,n,i){const l=qy(e);if(l===null||!oh(l.downloadTokens))return null;const c=l.downloadTokens;if(c.length===0)return null;const d=encodeURIComponent;return c.split(",").map(_=>{const v=r.bucket,x=r.fullPath,w="/b/"+d(v)+"/o/"+d(x),T=ah(w,n,i),P=Vy({alt:"media",token:_});return T+P})[0]}function _N(r,e){const n={},i=e.length;for(let l=0;l<i;l++){const c=e[l];c.writable&&(n[c.server]=r[c.local])}return JSON.stringify(n)}class Jy{constructor(e,n,i,l){this.url=e,this.method=n,this.handler=i,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zy(r){if(!r)throw ih()}function yN(r,e){function n(i,l){const c=Xy(r,l,e);return Zy(c!==null),c}return n}function vN(r,e){function n(i,l){const c=Xy(r,l,e);return Zy(c!==null),gN(c,l,r.host,r._protocol)}return n}function ev(r){function e(n,i){let l;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?l=bk():l=Ak():n.getStatus()===402?l=Pk(r.bucket):n.getStatus()===403?l=Ok(r.path):l=i,l.status=n.getStatus(),l.serverResponse=i.serverResponse,l}return e}function wN(r){const e=ev(r);function n(i,l){let c=e(i,l);return i.getStatus()===404&&(c=Rk(r.path)),c.serverResponse=l.serverResponse,c}return n}function xN(r,e,n){const i=e.fullServerUrl(),l=ah(i,r.host,r._protocol),c="GET",d=r.maxOperationRetryTime,p=new Jy(l,c,vN(r,n),d);return p.errorHandler=wN(e),p}function EN(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function CN(r,e,n){const i=Object.assign({},n);return i.fullPath=r.path,i.size=e.size(),i.contentType||(i.contentType=EN(null,e)),i}function SN(r,e,n,i,l){const c=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function p(){let G="";for(let F=0;F<2;F++)G=G+Math.random().toString().slice(2);return G}const m=p();d["Content-Type"]="multipart/related; boundary="+m;const _=CN(e,i,l),v=_N(_,n),x="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+m+`\r
Content-Type: `+_.contentType+`\r
\r
`,w=`\r
--`+m+"--",T=tr.getBlob(x,i,w);if(T===null)throw Fk();const P={name:_.fullPath},R=ah(c,r.host,r._protocol),M="POST",te=r.maxUploadRetryTime,re=new Jy(R,M,yN(r,n),te);return re.urlParams=P,re.headers=d,re.body=T.uploadData(),re.errorHandler=ev(e),re}class IN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,l,c){if(this.sent_)throw Ni("cannot .send() more than once");if(fr(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),c!==void 0)for(const d in c)c.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,c[d].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ni("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ni("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ni("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ni("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kN extends IN{initXhr(){this.xhr_.responseType="text"}}function tv(){return new kN}/**
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
 */class zr{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zr(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qy(this._location.path)}get storage(){return this._service}get parent(){const e=uN(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Wk(e)}}function NN(r,e,n){r._throwIfRoot("uploadBytes");const i=SN(r.storage,r._location,Yy(),new tr(e,!0),n);return r.storage.makeRequestWithTokens(i,tv).then(l=>({metadata:l,ref:r}))}function TN(r){r._throwIfRoot("getDownloadURL");const e=xN(r.storage,r._location,Yy());return r.storage.makeRequestWithTokens(e,tv).then(n=>{if(n===null)throw zk();return n})}function RN(r,e){const n=dN(r._location.path,e),i=new Dt(r._location.bucket,n);return new zr(r.storage,i)}/**
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
 */function PN(r){return/^[A-Za-z]+:\/\//.test(r)}function AN(r,e){return new zr(r,e)}function nv(r,e){if(r instanceof ch){const n=r;if(n._bucket==null)throw Uk();const i=new zr(n,n._bucket);return e!=null?nv(i,e):i}else return e!==void 0?RN(r,e):r}function bN(r,e){if(e&&PN(e)){if(r instanceof ch)return AN(r,e);throw ld("To use ref(service, url), the first argument must be a Storage instance.")}else return nv(r,e)}function Ng(r,e){const n=e?.[Wy];return n==null?null:Dt.makeFromBucketSpec(n,r)}function ON(r,e,n,i={}){r.host=`${e}:${n}`;const l=fr(e);l&&(hd(`https://${r.host}/b`),fd("Storage",!0)),r._isUsingEmulator=!0,r._protocol=l?"https":"http";const{mockUserToken:c}=i;c&&(r._overrideAuthToken=typeof c=="string"?c:Fg(c,r.app.options.projectId))}class ch{constructor(e,n,i,l,c,d=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=l,this._firebaseVersion=c,this._isUsingEmulator=d,this._bucket=null,this._host=By,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nk,this._maxUploadRetryTime=Tk,this._requests=new Set,l!=null?this._bucket=Dt.makeFromBucketSpec(l,this._host):this._bucket=Ng(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=Ng(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zr(this,e)}_makeRequest(e,n,i,l,c=!0){if(this._deleted)return new Hk(Hy());{const d=eN(e,this._appId,i,l,n,this._firebaseVersion,c,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,n){const[i,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,l).getPromise()}}const Tg="@firebase/storage",Rg="0.14.0";/**
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
 */const rv="storage";function DN(r,e,n){return r=Xe(r),NN(r,e,n)}function LN(r){return r=Xe(r),TN(r)}function jN(r,e){return r=Xe(r),bN(r,e)}function MN(r=_d(),e){r=Xe(r);const i=ia(r,rv).getImmediate({identifier:e}),l=jg("storage");return l&&UN(i,...l),i}function UN(r,e,n,i={}){ON(r,e,n,i)}function FN(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),i=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new ch(n,i,l,e,Br)}function zN(){Dr(new cr(rv,FN,"PUBLIC").setMultipleInstances(!0)),an(Tg,Rg,""),an(Tg,Rg,"esm2020")}zN();const BN={apiKey:"AIzaSyA5d1rWrn9C9x5slkvkLQXW29JiMXoMSeg",authDomain:"tasktracker-e2329.firebaseapp.com",databaseURL:"https://tasktracker-e2329-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tasktracker-e2329",storageBucket:"tasktracker-e2329.firebasestorage.app",messagingSenderId:"1044567656792",appId:"1:1044567656792:web:58a8e5f942f1ac66213d2d",measurementId:"G-VNRBNZ4R28"},uh=Vg(BN),rr=cC(uh),ht=Ek(uh),WN=MN(uh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),VN=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Pg=r=>{const e=VN(r);return e.charAt(0).toUpperCase()+e.slice(1)},sv=(...r)=>r.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=ne.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:l="",children:c,iconNode:d,...p},m)=>ne.createElement("svg",{ref:m,...$N,width:e,height:e,stroke:r,strokeWidth:i?Number(n)*24/Number(e):n,className:sv("lucide",l),...p},[...d.map(([_,v])=>ne.createElement(_,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=(r,e)=>{const n=ne.forwardRef(({className:i,...l},c)=>ne.createElement(GN,{ref:c,iconNode:e,className:sv(`lucide-${HN(Pg(r))}`,`lucide-${r}`,i),...l}));return n.displayName=Pg(r),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],iv=Pe("calendar",KN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],na=Pe("circle-alert",qN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],vs=Pe("circle-check-big",QN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],dh=Pe("clock",YN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ov=Pe("download",XN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ui=Pe("file-text",JN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ad=Pe("funnel",ZN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],tT=Pe("lock",eT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],rT=Pe("log-out",nT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],wa=Pe("mail",sT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],lv=Pe("map-pin",iT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],lT=Pe("paperclip",oT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],cT=Pe("phone",aT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],dT=Pe("printer",uT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],av=Pe("search",hT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],cv=Pe("send",fT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],mT=Pe("shield",pT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],ju=Pe("ticket",gT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],yT=Pe("trash-2",_T);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],wT=Pe("trending-up",vT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ET=Pe("triangle-alert",xT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],ST=Pe("upload",CT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ar=Pe("user",IT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],NT=Pe("users",kT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xa=Pe("x",TT);function RT({onLogin:r}){const[e,n]=ne.useState(!1),[i,l]=ne.useState(""),[c,d]=ne.useState(""),[p,m]=ne.useState(""),[_,v]=ne.useState(""),[x,w]=ne.useState(!1),T=async P=>{P.preventDefault(),v(""),w(!0);try{if(e){const M=(await q1(rr,i,c)).user;await Fy(dt(ht,`users/${M.uid}`),{email:i,displayName:p,role:"IT Staff",createdAt:new Date().toISOString()}),r()}else{const M=(await Q1(rr,i,c)).user,te=dt(ht,`users/${M.uid}`),re=await zy(te);if(!re.exists())throw await Hi(rr),new Error("User account not found in database");if(re.val().role!=="IT Staff")throw await Hi(rr),new Error("Access denied. This portal is for IT Staff only.");r()}}catch(R){v(R.message||"An error occurred")}finally{w(!1)}};return f.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",children:f.jsxs("div",{className:"max-w-6xl w-full grid md:grid-cols-2 gap-8",children:[f.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[f.jsxs("div",{className:"mb-8",children:[f.jsx("h1",{className:"text-indigo-600 mb-2",children:"IT Staff Portal"}),f.jsx("p",{className:"text-gray-600",children:e?"Create your IT staff account":"Sign in to manage support tickets"})]}),f.jsxs("form",{onSubmit:T,className:"space-y-6",children:[e&&f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-2",children:"Full Name"}),f.jsxs("div",{className:"relative",children:[f.jsx(ar,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),f.jsx("input",{type:"text",value:p,onChange:P=>m(P.target.value),required:!0,className:"w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",placeholder:"Enter your full name"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-2",children:"Email Address"}),f.jsxs("div",{className:"relative",children:[f.jsx(wa,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),f.jsx("input",{type:"email",value:i,onChange:P=>l(P.target.value),required:!0,className:"w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",placeholder:"your.email@company.com"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-2",children:"Password"}),f.jsxs("div",{className:"relative",children:[f.jsx(tT,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),f.jsx("input",{type:"password",value:c,onChange:P=>d(P.target.value),required:!0,minLength:6,className:"w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",placeholder:"Enter your password"})]})]}),_&&f.jsxs("div",{className:"flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700",children:[f.jsx(na,{size:20}),f.jsx("span",{children:_})]}),f.jsx("button",{type:"submit",disabled:x,className:"w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:x?"Processing...":e?"Create Account":"Sign In"})]}),f.jsx("div",{className:"mt-6 text-center",children:f.jsx("button",{onClick:()=>{n(!e),v("")},className:"text-indigo-600 hover:text-indigo-700",children:e?"Already have an account? Sign in":"Don't have an account? Sign up"})})]}),f.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[f.jsx("h2",{className:"text-indigo-600 mb-6",children:"Ticket System Guide"}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[f.jsx(vs,{className:"text-green-500",size:20}),"How It Works"]}),f.jsxs("ul",{className:"space-y-2 text-gray-600 ml-7",children:[f.jsx("li",{children:"• View all incoming support tickets from users"}),f.jsx("li",{children:"• Claim tickets to begin working on them"}),f.jsx("li",{children:"• Send updates and communicate with users"}),f.jsx("li",{children:"• Track ticket status until resolution"})]})]}),f.jsxs("div",{children:[f.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[f.jsx(vs,{className:"text-green-500",size:20}),"Ticket Claiming"]}),f.jsxs("ul",{className:"space-y-2 text-gray-600 ml-7",children:[f.jsx("li",{children:"• Click on any open ticket to view details"}),f.jsx("li",{children:'• Click "Claim Ticket" to assign it to yourself'}),f.jsx("li",{children:"• Send an initial message to the user"}),f.jsx("li",{children:"• Claimed tickets are locked to prevent conflicts"})]})]}),f.jsxs("div",{children:[f.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[f.jsx(vs,{className:"text-green-500",size:20}),"Communication"]}),f.jsxs("ul",{className:"space-y-2 text-gray-600 ml-7",children:[f.jsx("li",{children:"• Users receive email notifications automatically"}),f.jsx("li",{children:"• Email thread continues until ticket is closed"}),f.jsx("li",{children:"• All messages are logged in the system"}),f.jsx("li",{children:"• Transfer tickets to other IT staff if needed"})]})]}),f.jsxs("div",{children:[f.jsxs("h3",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[f.jsx(vs,{className:"text-green-500",size:20}),"Ticket Priorities"]}),f.jsxs("div",{className:"ml-7 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-3 h-3 bg-red-500 rounded-full"}),f.jsx("span",{className:"text-gray-600",children:"High - Urgent issues requiring immediate attention"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),f.jsx("span",{className:"text-gray-600",children:"Medium - Important but not critical"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-3 h-3 bg-green-500 rounded-full"}),f.jsx("span",{className:"text-gray-600",children:"Low - Can be handled when time permits"})]})]})]})]})]})]})})}async function uv(r){return console.warn("EmailJS not configured. Email would be sent with these details:",r),!0}function PT({ticket:r,itStaffInfo:e,onClose:n,onClaimed:i}){const l=`Hi ${r.createdBy.name},

I have received your ticket regarding "${r.title}". I will look into this issue and get back to you shortly.

Best regards,
${e.displayName}
IT Support`,[c,d]=ne.useState(l),[p,m]=ne.useState(!1),_=async()=>{if(!c.trim()){alert("Please enter a message to send to the user");return}m(!0);try{const v=new Date().toISOString(),x={text:c,sentBy:{uid:e.uid,displayName:e.displayName,email:e.email,role:"IT Staff"},sentAt:v,emailSent:!0};await Yn(dt(ht,`tickets/${r.ticketId}`),{status:"in_progress",claimedBy:{uid:e.uid,displayName:e.displayName,email:e.email},claimedAt:v,updatedAt:v,lastMessage:x});const w=dt(ht,`tickets/${r.ticketId}/messages`);await Yn(w,{[Date.now()]:x}),await uv({to_email:r.createdBy.email,to_name:r.createdBy.name,from_name:e.displayName,from_email:e.email,subject:`Re: Ticket #${r.ticketId} - ${r.title}`,message:c,ticket_id:r.ticketId,ticket_title:r.title}),i()}catch(v){console.error("Error claiming ticket:",v),alert("Failed to claim ticket. Please try again.")}finally{m(!1)}};return f.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:f.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[f.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between",children:[f.jsx("h2",{className:"text-gray-900",children:"Claim Ticket"}),f.jsx("button",{onClick:n,className:"text-gray-400 hover:text-gray-600 transition-colors",children:f.jsx(xa,{size:24})})]}),f.jsxs("div",{className:"p-6 space-y-6",children:[f.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 space-y-3",children:[f.jsx("h3",{className:"text-gray-900",children:"Ticket Details"}),f.jsxs("div",{className:"grid grid-cols-2 gap-4 text-gray-600",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-gray-500",children:"Title:"})," ",r.title]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-gray-500",children:"Category:"})," ",r.category]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-gray-500",children:"Priority:"})," ",r.priority]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-gray-500",children:"Location:"})," ",r.location]})]}),f.jsxs("div",{children:[f.jsx("span",{className:"text-gray-500",children:"Description:"}),f.jsx("p",{className:"mt-1",children:r.description})]})]}),f.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[f.jsx("h3",{className:"text-gray-900 mb-2",children:"User Information"}),f.jsxs("div",{className:"space-y-1 text-gray-600",children:[f.jsxs("p",{children:[f.jsx("span",{className:"text-gray-500",children:"Name:"})," ",r.createdBy.name]}),f.jsxs("p",{children:[f.jsx("span",{className:"text-gray-500",children:"Email:"})," ",r.createdBy.email]}),f.jsxs("p",{children:[f.jsx("span",{className:"text-gray-500",children:"Department:"})," ",r.createdBy.department]}),f.jsxs("p",{children:[f.jsx("span",{className:"text-gray-500",children:"Contact:"})," ",r.contactNumber]})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-2",children:"Initial Message to User *"}),f.jsxs("p",{className:"text-gray-500 mb-3",children:["This message will be sent to the user via email from your IT staff account (",e.email,")"]}),f.jsx("textarea",{value:c,onChange:v=>d(v.target.value),rows:6,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none",placeholder:`Hi ${r.createdBy.name},

I have received your ticket regarding "${r.title}". I will look into this issue and get back to you shortly.

Best regards,
${e.displayName}
IT Support`})]}),f.jsxs("div",{className:"flex gap-3",children:[f.jsx("button",{onClick:n,disabled:p,className:"flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50",children:"Cancel"}),f.jsxs("button",{onClick:_,disabled:p||!c.trim(),className:"flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:[f.jsx(cv,{size:20}),p?"Claiming...":"Claim & Send Message"]})]})]})]})})}function AT({ticket:r,itStaffInfo:e,onClose:n,onUpdate:i}){const[l,c]=ne.useState(""),[d,p]=ne.useState([]),[m,_]=ne.useState(!1),[v,x]=ne.useState(!1),[w,T]=ne.useState(r.status),P=ne.useRef(null),R=r.claimedBy?.uid===e.uid;ne.useEffect(()=>{const q=dt(ht,`tickets/${r.ticketId}/messages`),de=bl(q,ve=>{if(ve.exists()){const ft=ve.val(),$e=Object.entries(ft).map(([z,Ce])=>({id:z,...Ce}));$e.sort((z,Ce)=>new Date(z.sentAt).getTime()-new Date(Ce.sentAt).getTime()),p($e)}});return()=>de()},[r.ticketId]);const M=async()=>{if(!(!l.trim()||!R)){_(!0);try{const q=new Date().toISOString(),de={text:l,sentBy:{uid:e.uid,displayName:e.displayName,email:e.email,role:"IT Staff"},sentAt:q,emailSent:!0},ve=dt(ht,`tickets/${r.ticketId}/messages`);await Yn(ve,{[Date.now()]:de}),await Yn(dt(ht,`tickets/${r.ticketId}`),{lastMessage:de,updatedAt:q}),await uv({to_email:r.createdBy.email,to_name:r.createdBy.name,from_name:e.displayName,from_email:e.email,subject:`Re: Ticket #${r.ticketId} - ${r.title}`,message:l,ticket_id:r.ticketId,ticket_title:r.title}),c(""),i()}catch(q){console.error("Error sending message:",q),alert("Failed to send message. Please try again.")}finally{_(!1)}}},te=async q=>{if(R)try{await Yn(dt(ht,`tickets/${r.ticketId}`),{status:q,updatedAt:new Date().toISOString()}),T(q),i()}catch(de){console.error("Error updating ticket status:",de),alert("Failed to update ticket status. Please try again.")}},re=async()=>{if(!(!R||!confirm("Are you sure you want to release this ticket? It will become available for other IT staff to claim.")))try{await Yn(dt(ht,`tickets/${r.ticketId}`),{status:"open",claimedBy:null,claimedAt:null,updatedAt:new Date().toISOString()}),i(),n()}catch(de){console.error("Error transferring ticket:",de),alert("Failed to transfer ticket. Please try again.")}},G=q=>{switch(q){case"high":return"bg-red-100 text-red-700 border-red-200";case"medium":return"bg-yellow-100 text-yellow-700 border-yellow-200";case"low":return"bg-green-100 text-green-700 border-green-200";default:return"bg-gray-100 text-gray-700 border-gray-200"}},F=q=>{switch(q){case"open":return"bg-blue-100 text-blue-700 border-blue-200";case"in_progress":return"bg-purple-100 text-purple-700 border-purple-200";case"closed":return"bg-gray-100 text-gray-700 border-gray-200";default:return"bg-gray-100 text-gray-700 border-gray-200"}},se=async q=>{const de=q.target.files?.[0];if(!(!de||!R)){x(!0);try{const ve=jN(WN,`tickets/${r.ticketId}/${Date.now()}_${de.name}`);await DN(ve,de);const ft=await LN(ve),$e={name:de.name,url:ft,size:de.size,uploadedBy:e.displayName,uploadedAt:new Date().toISOString()},z=r.attachments||[];z.push($e),await Yn(dt(ht,`tickets/${r.ticketId}`),{attachments:z,updatedAt:new Date().toISOString()});const Ce={text:`File attached: ${de.name}`,sentBy:{uid:e.uid,displayName:e.displayName,email:e.email,role:"IT Staff"},sentAt:new Date().toISOString(),emailSent:!1,isSystemMessage:!0},je=dt(ht,`tickets/${r.ticketId}/messages`);await Yn(je,{[Date.now()]:Ce}),i()}catch(ve){console.error("Error uploading file:",ve),alert("Failed to upload file. Please try again.")}finally{x(!1),P.current&&(P.current.value="")}}};return f.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:f.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col",children:[f.jsxs("div",{className:"bg-indigo-600 text-white p-6 flex items-start justify-between",children:[f.jsxs("div",{className:"flex-1",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("h2",{children:r.title}),f.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${G(r.priority)}`,children:r.priority}),f.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${F(w)}`,children:w.replace("_"," ")})]}),f.jsxs("p",{className:"text-indigo-100",children:["Ticket ID: ",r.ticketId]})]}),f.jsx("button",{onClick:n,className:"text-white hover:text-indigo-200 transition-colors",children:f.jsx(xa,{size:24})})]}),f.jsx("div",{className:"flex-1 overflow-y-auto",children:f.jsxs("div",{className:"grid md:grid-cols-3 gap-6 p-6",children:[f.jsxs("div",{className:"md:col-span-2 space-y-6",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-gray-900 mb-2",children:"Description"}),f.jsx("p",{className:"text-gray-600 bg-gray-50 p-4 rounded-lg",children:r.description})]}),r.attachments&&r.attachments.length>0&&f.jsxs("div",{children:[f.jsx("h3",{className:"text-gray-900 mb-2",children:"Attachments"}),f.jsx("div",{className:"space-y-2",children:r.attachments.map((q,de)=>f.jsxs("a",{href:q.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors",children:[f.jsx(Ui,{className:"text-indigo-600",size:20}),f.jsxs("div",{className:"flex-1",children:[f.jsx("p",{className:"text-gray-900",children:q.name}),f.jsxs("p",{className:"text-gray-500",children:[(q.size/1024).toFixed(2)," KB"]})]}),f.jsx(ov,{className:"text-gray-400",size:20})]},de))})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-gray-900 mb-4",children:"Communication Thread"}),f.jsx("div",{className:"space-y-4 bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto",children:d.length>0?d.map(q=>f.jsxs("div",{className:`p-4 rounded-lg ${q.sentBy.role==="it_staff"?"bg-indigo-100 ml-8":"bg-white mr-8"}`,children:[f.jsxs("div",{className:"flex items-start justify-between mb-2",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(ar,{size:16,className:"text-gray-600"}),f.jsx("span",{className:"text-gray-900",children:q.sentBy.displayName||q.sentBy.name}),q.sentBy.role==="IT Staff"&&f.jsx("span",{className:"text-indigo-600",children:"(IT Staff)"})]}),f.jsx("span",{className:"text-gray-500",children:new Date(q.sentAt).toLocaleString()})]}),f.jsx("p",{className:"text-gray-700",children:q.text}),q.emailSent&&f.jsx("p",{className:"text-green-600 mt-2",children:"✓ Email sent"})]},q.id)):f.jsx("p",{className:"text-gray-500 text-center py-8",children:"No messages yet"})}),R&&w!=="closed"&&f.jsxs("div",{className:"mt-4 flex gap-2",children:[f.jsx("input",{type:"text",value:l,onChange:q=>c(q.target.value),onKeyPress:q=>q.key==="Enter"&&M(),placeholder:"Type a message to the user...",className:"flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"}),f.jsxs("button",{onClick:M,disabled:m||!l.trim(),className:"px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",children:[f.jsx(cv,{size:20}),"Send"]})]})]})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[f.jsx("h3",{className:"text-gray-900 mb-4",children:"User Information"}),f.jsxs("div",{className:"space-y-3 text-gray-600",children:[f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsx(ar,{size:18,className:"mt-0.5 text-gray-500"}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Name"}),f.jsx("p",{className:"text-gray-900",children:r.createdBy.name})]})]}),f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsx(wa,{size:18,className:"mt-0.5 text-gray-500"}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Email"}),f.jsx("p",{className:"text-gray-900",children:r.createdBy.email})]})]}),f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsx(cT,{size:18,className:"mt-0.5 text-gray-500"}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Contact"}),f.jsx("p",{className:"text-gray-900",children:r.contactNumber})]})]}),f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsx(lv,{size:18,className:"mt-0.5 text-gray-500"}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Location"}),f.jsx("p",{className:"text-gray-900",children:r.location})]})]}),f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsx(ar,{size:18,className:"mt-0.5 text-gray-500"}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Department"}),f.jsx("p",{className:"text-gray-900",children:r.createdBy.department})]})]})]})]}),r.claimedBy&&f.jsxs("div",{className:"bg-purple-50 rounded-lg p-4",children:[f.jsx("h3",{className:"text-gray-900 mb-2",children:"Assigned To"}),f.jsx("p",{className:"text-gray-900",children:r.claimedBy.displayName}),f.jsx("p",{className:"text-gray-600",children:r.claimedBy.email}),f.jsxs("p",{className:"text-gray-500 mt-2",children:[f.jsx(dh,{size:14,className:"inline mr-1"}),new Date(r.claimedAt).toLocaleString()]})]}),f.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[f.jsx("h3",{className:"text-gray-900 mb-3",children:"Timeline"}),f.jsxs("div",{className:"space-y-2 text-gray-600",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Created"}),f.jsx("p",{children:new Date(r.createdAt).toLocaleString()})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Last Updated"}),f.jsx("p",{children:new Date(r.updatedAt).toLocaleString()})]}),r.closedAt&&f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Closed"}),f.jsx("p",{children:new Date(r.closedAt).toLocaleString()})]})]})]}),R&&f.jsxs("div",{className:"space-y-3",children:[f.jsx("h3",{className:"text-gray-900",children:"Actions"}),w!=="closed"&&f.jsxs(f.Fragment,{children:[f.jsx("input",{type:"file",ref:P,onChange:se,className:"hidden"}),f.jsx("button",{onClick:()=>P.current?.click(),disabled:v,className:"w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",children:v?f.jsxs(f.Fragment,{children:[f.jsx(ST,{size:18,className:"animate-pulse"}),"Uploading..."]}):f.jsxs(f.Fragment,{children:[f.jsx(lT,{size:18}),"Attach File"]})}),f.jsxs("button",{onClick:()=>te(w==="in_progress"?"open":"in_progress"),className:"w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:["Mark as ",w==="in_progress"?"Open":"In Progress"]}),f.jsx("button",{onClick:()=>te("closed"),className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",children:"Close Ticket"}),f.jsx("button",{onClick:re,className:"w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",children:"Transfer Ticket"})]})]}),!R&&r.claimedBy&&f.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:f.jsxs("p",{className:"text-yellow-800",children:["This ticket is currently being handled by ",r.claimedBy.displayName]})})]})]})})]})})}function bT({tickets:r,onClose:e}){const[n,i]=ne.useState("all"),[l,c]=ne.useState("all"),[d,p]=ne.useState("all"),[m,_]=ne.useState("all"),v=ne.useMemo(()=>{const R=new Date,M=new Date(R.getTime()-1440*60*1e3),te=new Date(R.getTime()-10080*60*1e3),re=new Date(R.getTime()-720*60*60*1e3);let G=r;return m!=="all"&&(G=r.filter(F=>{const se=new Date(F.createdAt);return m==="today"?se>=M:m==="week"?se>=te:m==="month"?se>=re:!0})),n!=="all"&&(G=G.filter(F=>F.status===n)),l!=="all"&&(G=G.filter(F=>F.priority===l)),d!=="all"&&(G=G.filter(F=>F.category===d)),{total:G.length,open:G.filter(F=>F.status==="open").length,inProgress:G.filter(F=>F.status==="in_progress").length,closed:G.filter(F=>F.status==="closed").length,high:G.filter(F=>F.priority==="high").length,medium:G.filter(F=>F.priority==="medium").length,low:G.filter(F=>F.priority==="low").length,hardware:G.filter(F=>F.category==="hardware").length,software:G.filter(F=>F.category==="software").length,network:G.filter(F=>F.category==="network").length,account:G.filter(F=>F.category==="account").length,other:G.filter(F=>F.category==="other").length,filteredTickets:G}},[r,n,l,d,m]),x=()=>{const R=["Ticket ID","Title","Category","Priority","Status","Created By","Email","Department","Created At","Claimed By","Claimed At","Updated At"],M=v.filteredTickets.map(se=>[se.ticketId,`"${se.title}"`,se.category,se.priority,se.status,se.createdBy.name,se.createdBy.email,se.createdBy.department||"N/A",new Date(se.createdAt).toLocaleString(),se.claimedBy?.displayName||"Unclaimed",se.claimedAt?new Date(se.claimedAt).toLocaleString():"N/A",se.updatedAt?new Date(se.updatedAt).toLocaleString():"N/A"]),te=[R.join(","),...M.map(se=>se.join(","))].join(`
`),re=new Blob([te],{type:"text/csv"}),G=window.URL.createObjectURL(re),F=document.createElement("a");F.href=G,F.download=`ticket-report-${new Date().toISOString().split("T")[0]}.csv`,F.click(),window.URL.revokeObjectURL(G)},w=()=>{window.print()},T=R=>{switch(R){case"high":return"text-red-600 bg-red-50";case"medium":return"text-yellow-600 bg-yellow-50";case"low":return"text-green-600 bg-green-50";default:return"text-gray-600 bg-gray-50"}},P=R=>{switch(R){case"open":return"text-blue-600 bg-blue-50";case"in_progress":return"text-purple-600 bg-purple-50";case"closed":return"text-gray-600 bg-gray-50";default:return"text-gray-600 bg-gray-50"}};return f.jsxs("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto",children:[f.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col print:max-w-full print:max-h-full print:shadow-none",children:[f.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 print:border-black",children:[f.jsxs("div",{children:[f.jsxs("h2",{className:"text-gray-900 flex items-center gap-2",children:[f.jsx(Ui,{className:"text-indigo-600",size:24}),"Ticket Report"]}),f.jsxs("p",{className:"text-gray-600 mt-1",children:["Generated on ",new Date().toLocaleDateString()," at ",new Date().toLocaleTimeString()]})]}),f.jsxs("div",{className:"flex items-center gap-2 print:hidden",children:[f.jsx("button",{onClick:x,className:"p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",title:"Export to CSV",children:f.jsx(ov,{size:20})}),f.jsx("button",{onClick:w,className:"p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Print Report",children:f.jsx(dT,{size:20})}),f.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors",children:f.jsx(xa,{size:20})})]})]}),f.jsxs("div",{className:"p-6 border-b border-gray-200 bg-gray-50 print:hidden",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx(ad,{size:18,className:"text-gray-600"}),f.jsx("h3",{className:"text-gray-900",children:"Filters"})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Date Range"}),f.jsxs("select",{value:m,onChange:R=>_(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[f.jsx("option",{value:"all",children:"All Time"}),f.jsx("option",{value:"today",children:"Last 24 Hours"}),f.jsx("option",{value:"week",children:"Last 7 Days"}),f.jsx("option",{value:"month",children:"Last 30 Days"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Status"}),f.jsxs("select",{value:n,onChange:R=>i(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[f.jsx("option",{value:"all",children:"All Statuses"}),f.jsx("option",{value:"open",children:"Open"}),f.jsx("option",{value:"in_progress",children:"In Progress"}),f.jsx("option",{value:"closed",children:"Closed"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Priority"}),f.jsxs("select",{value:l,onChange:R=>c(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[f.jsx("option",{value:"all",children:"All Priorities"}),f.jsx("option",{value:"high",children:"High"}),f.jsx("option",{value:"medium",children:"Medium"}),f.jsx("option",{value:"low",children:"Low"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-gray-700 mb-1 text-sm",children:"Category"}),f.jsxs("select",{value:d,onChange:R=>p(R.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",children:[f.jsx("option",{value:"all",children:"All Categories"}),f.jsx("option",{value:"hardware",children:"Hardware"}),f.jsx("option",{value:"software",children:"Software"}),f.jsx("option",{value:"network",children:"Network"}),f.jsx("option",{value:"account",children:"Account"}),f.jsx("option",{value:"other",children:"Other"})]})]})]})]}),f.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto flex-1",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[f.jsx("div",{className:"bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-indigo-700 text-sm",children:"Total Tickets"}),f.jsx("p",{className:"text-indigo-900 mt-1",children:v.total})]}),f.jsx(Ui,{className:"text-indigo-600",size:32})]})}),f.jsx("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-blue-700 text-sm",children:"Open"}),f.jsx("p",{className:"text-blue-900 mt-1",children:v.open})]}),f.jsx(na,{className:"text-blue-600",size:32})]})}),f.jsx("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-purple-700 text-sm",children:"In Progress"}),f.jsx("p",{className:"text-purple-900 mt-1",children:v.inProgress})]}),f.jsx(dh,{className:"text-purple-600",size:32})]})}),f.jsx("div",{className:"bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-green-700 text-sm",children:"Closed"}),f.jsx("p",{className:"text-green-900 mt-1",children:v.closed})]}),f.jsx(vs,{className:"text-green-600",size:32})]})})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[f.jsxs("h3",{className:"text-gray-900 mb-4 flex items-center gap-2",children:[f.jsx(wT,{className:"text-gray-600",size:20}),"Priority Breakdown"]}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"High Priority"}),f.jsx("span",{className:"px-3 py-1 bg-red-100 text-red-700 rounded-full",children:v.high})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Medium Priority"}),f.jsx("span",{className:"px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full",children:v.medium})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Low Priority"}),f.jsx("span",{className:"px-3 py-1 bg-green-100 text-green-700 rounded-full",children:v.low})]})]})]}),f.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[f.jsxs("h3",{className:"text-gray-900 mb-4 flex items-center gap-2",children:[f.jsx(Ui,{className:"text-gray-600",size:20}),"Category Breakdown"]}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Hardware"}),f.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.hardware})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Software"}),f.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.software})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Network"}),f.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.network})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Account"}),f.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.account})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-gray-700",children:"Other"}),f.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:v.other})]})]})]})]}),f.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl overflow-hidden",children:[f.jsxs("div",{className:"p-4 bg-gray-50 border-b border-gray-200",children:[f.jsx("h3",{className:"text-gray-900",children:"Detailed Ticket List"}),f.jsxs("p",{className:"text-gray-600 text-sm mt-1",children:["Showing ",v.filteredTickets.length," ticket(s)"]})]}),f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full",children:[f.jsx("thead",{className:"bg-gray-50 border-b border-gray-200",children:f.jsxs("tr",{children:[f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Ticket ID"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Title"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Category"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Priority"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Status"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Created By"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Claimed By"}),f.jsx("th",{className:"text-left px-4 py-3 text-gray-700 text-sm",children:"Created At"})]})}),f.jsx("tbody",{children:v.filteredTickets.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:8,className:"text-center py-8 text-gray-500",children:"No tickets found matching the selected filters"})}):v.filteredTickets.map(R=>f.jsxs("tr",{className:"border-b border-gray-100 hover:bg-gray-50",children:[f.jsx("td",{className:"px-4 py-3 text-gray-900 text-sm",children:R.ticketId}),f.jsx("td",{className:"px-4 py-3 text-gray-900 text-sm max-w-xs truncate",children:R.title}),f.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm capitalize",children:R.category}),f.jsx("td",{className:"px-4 py-3 text-sm",children:f.jsx("span",{className:`px-2 py-1 rounded-full text-xs capitalize ${T(R.priority)}`,children:R.priority})}),f.jsx("td",{className:"px-4 py-3 text-sm",children:f.jsx("span",{className:`px-2 py-1 rounded-full text-xs capitalize ${P(R.status)}`,children:R.status.replace("_"," ")})}),f.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm",children:R.createdBy.name}),f.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm",children:R.claimedBy?.displayName||"Unclaimed"}),f.jsx("td",{className:"px-4 py-3 text-gray-700 text-sm",children:new Date(R.createdAt).toLocaleDateString()})]},R.ticketId))})]})})]})]})]}),f.jsx("style",{children:`
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
        `})]})}function OT({users:r,currentUser:e,onClose:n,onUpdate:i}){const[l,c]=ne.useState(""),[d,p]=ne.useState("all"),[m,_]=ne.useState(null),v=ne.useMemo(()=>{let T=r;return l&&(T=T.filter(P=>P.name?.toLowerCase().includes(l.toLowerCase())||P.displayName?.toLowerCase().includes(l.toLowerCase())||P.email?.toLowerCase().includes(l.toLowerCase()))),d!=="all"&&(T=T.filter(P=>P.role===d)),T},[r,l,d]),x=async(T,P,R)=>{if(T===e.uid){alert("You cannot delete your own account.");return}if(confirm(`Are you sure you want to delete the user "${R}" (${P})?

This action will:
- Remove the user from the database
- Delete all their data
- This action cannot be undone!

Note: The user will still be able to sign in with Firebase Auth. To fully disable their account, you need to delete them from Firebase Console.`)){_(T);try{await fk(dt(ht,`users/${T}`)),alert(`User "${R}" has been deleted from the database successfully.`),i()}catch(te){console.error("Error deleting user:",te),alert("Failed to delete user. Please try again.")}finally{_(null)}}},w=T=>T==="IT Staff"?"bg-indigo-100 text-indigo-700 border-indigo-200":"bg-gray-100 text-gray-700 border-gray-200";return f.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto",children:f.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col",children:[f.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600",children:[f.jsxs("div",{children:[f.jsxs("h2",{className:"text-white flex items-center gap-2",children:[f.jsx(mT,{size:24}),"User Management"]}),f.jsx("p",{className:"text-indigo-100 mt-1",children:"Manage user accounts and permissions"})]}),f.jsx("button",{onClick:n,className:"text-white hover:text-indigo-200 transition-colors",children:f.jsx(xa,{size:24})})]}),f.jsxs("div",{className:"p-6 border-b border-gray-200 bg-gray-50",children:[f.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[f.jsx("div",{className:"flex-1",children:f.jsxs("div",{className:"relative",children:[f.jsx(av,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),f.jsx("input",{type:"text",value:l,onChange:T=>c(T.target.value),placeholder:"Search by name or email...",className:"w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"})]})}),f.jsx("div",{children:f.jsxs("select",{value:d,onChange:T=>p(T.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",children:[f.jsx("option",{value:"all",children:"All Roles"}),f.jsx("option",{value:"user",children:"Users"}),f.jsx("option",{value:"IT Staff",children:"IT Staff"})]})})]}),f.jsxs("div",{className:"mt-3 flex items-center gap-2 text-gray-600",children:[f.jsx(ar,{size:16}),f.jsxs("span",{children:["Showing ",v.length," of ",r.length," users"]})]})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:v.length===0?f.jsxs("div",{className:"text-center py-12",children:[f.jsx(ar,{className:"mx-auto text-gray-400 mb-4",size:48}),f.jsx("p",{className:"text-gray-500",children:"No users found"})]}):f.jsx("div",{className:"grid gap-4",children:v.map(T=>f.jsx("div",{className:"bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",children:f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsx("div",{className:"flex-1",children:f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("div",{className:"w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center",children:f.jsx(ar,{className:"text-indigo-600",size:20})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h3",{className:"text-gray-900",children:T.name||T.displayName||"Unnamed User"}),f.jsx("span",{className:`px-2 py-1 rounded-full text-xs border ${w(T.role)}`,children:T.role||"user"}),T.uid===e.uid&&f.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs",children:"You"})]}),f.jsxs("div",{className:"flex items-center gap-4 mt-1 text-gray-600",children:[f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(wa,{size:14}),f.jsx("span",{children:T.email})]}),T.department&&f.jsxs("span",{className:"text-gray-500",children:["Department: ",T.department]})]}),T.createdAt&&f.jsxs("div",{className:"flex items-center gap-1 mt-1 text-gray-500",children:[f.jsx(iv,{size:14}),f.jsxs("span",{children:["Joined ",new Date(T.createdAt).toLocaleDateString()]})]})]})]})}),f.jsx("div",{className:"flex items-center gap-2",children:T.uid!==e.uid&&f.jsx("button",{onClick:()=>x(T.uid,T.email,T.name||T.displayName),disabled:m===T.uid,className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",title:"Delete user",children:m===T.uid?f.jsx("div",{className:"w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"}):f.jsx(yT,{size:20})})})]})},T.uid))})}),f.jsx("div",{className:"p-4 bg-yellow-50 border-t border-yellow-200",children:f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(ET,{className:"text-yellow-600 flex-shrink-0 mt-0.5",size:20}),f.jsxs("div",{className:"text-yellow-800",children:[f.jsx("p",{className:"font-medium",children:"Important Notes:"}),f.jsxs("ul",{className:"mt-1 text-sm space-y-1 list-disc list-inside",children:[f.jsx("li",{children:"Deleting a user removes them from the database but not from Firebase Authentication"}),f.jsx("li",{children:"The user can still sign in unless you delete them from Firebase Console"}),f.jsx("li",{children:"You cannot delete your own account"}),f.jsx("li",{children:"This action cannot be undone"})]})]})]})})]})})}function DT({user:r}){const[e,n]=ne.useState([]),[i,l]=ne.useState([]),[c,d]=ne.useState(null),[p,m]=ne.useState(null),[_,v]=ne.useState(null),[x,w]=ne.useState(!1),[T,P]=ne.useState(!1),[R,M]=ne.useState("all"),[te,re]=ne.useState(""),[G,F]=ne.useState("all");ne.useEffect(()=>{const z=dt(ht,`users/${r.uid}`);bl(z,Ae=>{Ae.exists()&&d({...Ae.val(),uid:r.uid})});const Ce=dt(ht,"tickets");bl(Ce,Ae=>{if(Ae.exists()){const wt=Ae.val(),Ge=Object.values(wt).map(we=>we);Ge.sort((we,U)=>new Date(U.createdAt).getTime()-new Date(we.createdAt).getTime()),n(Ge)}else n([])});const je=dt(ht,"users");bl(je,Ae=>{if(Ae.exists()){const wt=Ae.val(),Ge=Object.values(wt).map(we=>we);l(Ge)}else l([])})},[r.uid]);const se=async()=>{try{await Hi(rr)}catch(z){console.error("Error signing out:",z)}},q=z=>{z.claimedBy?m(z):v(z)},de=z=>{switch(z){case"high":return"border-l-red-500 bg-red-50";case"medium":return"border-l-yellow-500 bg-yellow-50";case"low":return"border-l-green-500 bg-green-50";default:return"border-l-gray-500 bg-gray-50"}},ve=z=>z.status==="closed"?f.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-700 rounded-full",children:"Closed"}):z.claimedBy?f.jsx("span",{className:"px-3 py-1 bg-purple-100 text-purple-700 rounded-full",children:"In Progress"}):f.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-700 rounded-full",children:"Open"}),ft=e.filter(z=>{if(R==="open"&&z.claimedBy||R==="claimed"&&!z.claimedBy||R==="myclaimed"&&z.claimedBy?.uid!==r.uid||G!=="all"&&z.category!==G)return!1;if(te){const Ce=te.toLowerCase();return z.title.toLowerCase().includes(Ce)||z.description.toLowerCase().includes(Ce)||z.createdBy.name.toLowerCase().includes(Ce)||z.ticketId.toLowerCase().includes(Ce)}return!0}),$e={total:e.length,open:e.filter(z=>!z.claimedBy&&z.status!=="closed").length,inProgress:e.filter(z=>z.claimedBy&&z.status!=="closed").length,myClaimed:e.filter(z=>z.claimedBy?.uid===r.uid&&z.status!=="closed").length};return c?f.jsxs("div",{className:"min-h-screen bg-gray-50",children:[f.jsx("header",{className:"bg-white border-b border-gray-200 sticky top-0 z-40",children:f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"text-indigo-600",children:"IT Staff Dashboard"}),f.jsxs("p",{className:"text-gray-600",children:["Welcome back, ",c.displayName||c.name]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("button",{onClick:()=>P(!0),className:"flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:[f.jsx(NT,{size:20}),"Manage Users"]}),f.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",children:[f.jsx(Ui,{size:20}),"Generate Report"]}),f.jsxs("button",{onClick:se,className:"flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[f.jsx(rT,{size:20}),"Logout"]})]})]})})}),f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[f.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6 border-l-4 border-indigo-500",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Total Tickets"}),f.jsx("p",{className:"text-gray-900 mt-1",children:$e.total})]}),f.jsx(ju,{className:"text-indigo-500",size:32})]})}),f.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"Open Tickets"}),f.jsx("p",{className:"text-gray-900 mt-1",children:$e.open})]}),f.jsx(na,{className:"text-blue-500",size:32})]})}),f.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"In Progress"}),f.jsx("p",{className:"text-gray-900 mt-1",children:$e.inProgress})]}),f.jsx(dh,{className:"text-purple-500",size:32})]})}),f.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500",children:"My Tickets"}),f.jsx("p",{className:"text-gray-900 mt-1",children:$e.myClaimed})]}),f.jsx(vs,{className:"text-green-500",size:32})]})})]}),f.jsx("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:f.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[f.jsxs("div",{children:[f.jsxs("label",{className:"block text-gray-700 mb-2",children:[f.jsx(av,{className:"inline mr-2",size:18}),"Search"]}),f.jsx("input",{type:"text",value:te,onChange:z=>re(z.target.value),placeholder:"Search by title, description, or ticket ID...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-gray-700 mb-2",children:[f.jsx(ad,{className:"inline mr-2",size:18}),"Status Filter"]}),f.jsxs("select",{value:R,onChange:z=>M(z.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",children:[f.jsx("option",{value:"all",children:"All Tickets"}),f.jsx("option",{value:"open",children:"Open (Unclaimed)"}),f.jsx("option",{value:"claimed",children:"Claimed by Anyone"}),f.jsx("option",{value:"myclaimed",children:"My Claimed Tickets"})]})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-gray-700 mb-2",children:[f.jsx(ad,{className:"inline mr-2",size:18}),"Category"]}),f.jsxs("select",{value:G,onChange:z=>F(z.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent",children:[f.jsx("option",{value:"all",children:"All Categories"}),f.jsx("option",{value:"hardware",children:"Hardware"}),f.jsx("option",{value:"software",children:"Software"}),f.jsx("option",{value:"network",children:"Network"}),f.jsx("option",{value:"other",children:"Other"})]})]})]})}),f.jsx("div",{className:"space-y-4",children:ft.length===0?f.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-12 text-center",children:[f.jsx(ju,{className:"mx-auto text-gray-400 mb-4",size:48}),f.jsx("p",{className:"text-gray-600",children:"No tickets found"})]}):ft.map(z=>{const Ce=!!z.claimedBy,je=z.claimedBy?.uid===r.uid,Ae=Ce&&!je;return f.jsx("div",{onClick:()=>!Ae&&q(z),className:`bg-white rounded-xl shadow-sm border-l-4 ${de(z.priority)} p-6 cursor-pointer transition-all hover:shadow-md ${Ae?"opacity-60 cursor-not-allowed":""}`,children:f.jsxs("div",{className:"grid md:grid-cols-12 gap-6",children:[f.jsxs("div",{className:"md:col-span-8",children:[f.jsxs("div",{className:"flex items-start justify-between mb-3",children:[f.jsxs("div",{className:"flex-1",children:[f.jsx("h3",{className:"text-gray-900 mb-1",children:z.title}),f.jsx("p",{className:"text-gray-600 line-clamp-2",children:z.description})]}),f.jsx("div",{className:"ml-4",children:ve(z)})]}),f.jsxs("div",{className:"flex flex-wrap gap-4 text-gray-600",children:[f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(ju,{size:16}),f.jsx("span",{children:z.ticketId})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(ar,{size:16}),f.jsx("span",{children:z.createdBy.name})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(wa,{size:16}),f.jsx("span",{children:z.createdBy.email})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(lv,{size:16}),f.jsx("span",{children:z.location})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(iv,{size:16}),f.jsx("span",{children:new Date(z.createdAt).toLocaleDateString()})]})]})]}),f.jsxs("div",{className:"md:col-span-4 flex flex-col items-end justify-between",children:[f.jsxs("div",{className:"text-right",children:[f.jsx("p",{className:"text-gray-500 mb-1",children:"Priority"}),f.jsx("p",{className:"text-gray-900 capitalize",children:z.priority})]}),Ce&&f.jsxs("div",{className:"text-right",children:[f.jsx("p",{className:"text-gray-500 mb-1",children:"Assigned to"}),f.jsx("p",{className:`${je?"text-green-600":"text-gray-900"}`,children:je?"You":z.claimedBy.displayName||z.claimedBy.name})]}),!Ce&&f.jsx("button",{className:"px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",children:"Claim Ticket"}),je&&f.jsx("button",{className:"px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors",children:"View Details"}),Ae&&f.jsxs("div",{className:"text-yellow-700 text-right",children:[f.jsx(na,{size:20,className:"inline mr-1"}),"Locked by ",z.claimedBy.displayName||z.claimedBy.name]})]})]})},z.ticketId)})})]}),_&&f.jsx(PT,{ticket:_,itStaffInfo:c,onClose:()=>v(null),onClaimed:()=>{v(null)}}),p&&f.jsx(AT,{ticket:p,itStaffInfo:c,onClose:()=>m(null),onUpdate:()=>{}}),x&&f.jsx(bT,{tickets:e,onClose:()=>w(!1)}),T&&f.jsx(OT,{users:i,currentUser:c,onClose:()=>P(!1),onUpdate:()=>{}})]}):f.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"}),f.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})})}function LT(){const[r,e]=ne.useState(null),[n,i]=ne.useState(!0);return ne.useEffect(()=>{const l=J1(rr,async c=>{if(c){const d=dt(ht,`users/${c.uid}`),p=await zy(d);p.exists()?p.val().role==="IT Staff"?e(c):(await Hi(rr),e(null)):(await Hi(rr),e(null))}else e(null);i(!1)});return()=>l()},[]),n?f.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:f.jsxs("div",{className:"text-center",children:[f.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"}),f.jsx("p",{className:"mt-4 text-gray-600",children:"Loading..."})]})}):r?f.jsx(DT,{user:r}):f.jsx(RT,{onLogin:()=>{}})}mw.createRoot(document.getElementById("root")).render(f.jsx(LT,{}));
