var t,e,n={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(t){e=o}}();var u,c=[],l=!1,s=-1;function a(){l&&u&&(l=!1,u.length?c=u.concat(c):s=-1,c.length&&f())}function f(){if(!l){var t=i(a);l=!0;for(var n=c.length;n;){for(u=c,c=[];++s<n;)u&&u[s].run();s=-1,n=c.length}u=null,l=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||i(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};(()=>{})("Hello World");
//# sourceMappingURL=index.81c000e3.js.map
