(this["webpackJsonpservice-worker-test"]=this["webpackJsonpservice-worker-test"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),r=t(2),i=t.n(r),c=(t(12),t(6)),s=t.n(c),l=(t(13),t(3)),u=(t(14),function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l.a,null),a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.tsx")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"),a.a.createElement("h1",null,"v0.11")))}),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){console.log("Automatic Service Worker update"),e.update(),function(e){return!!e.waiting}(e)&&n.onUpdate(e.waiting)}function f(e,n){navigator.serviceWorker.register(e).then((function(e){window.setInterval((function(){return p(e,n)}),3e4),console.log(e),p(e,n),e.onupdatefound=function(){console.log("Update Found...");var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(u,null),document.getElementById("root"));!function(e){if("serviceWorker"in navigator){if(new URL("/service-worker-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/service-worker-test","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}({onUpdate:function(e){l.b.info(a.a.createElement(a.a.Fragment,null,"Updates are available;"," ",a.a.createElement("button",{onClick:function(n){return function(e,n){return function(t){t.preventDefault(),l.b.dismiss(n),e&&(e.addEventListener("statechange",(function(e){"activated"===e.target.state&&window.location.reload(!0)})),e.postMessage({type:"SKIP_WAITING"}))}}(e,"updates-available")(n)}},"Click here to refresh and receive the updates.")),{toastId:"updates-available",autoClose:!1,position:"top-center",closeOnClick:!1})},onSuccess:function(){l.b.success(a.a.createElement(a.a.Fragment,null,"Successfully updated to latest version"),{position:"top-center",hideProgressBar:!0,pauseOnHover:!0})}})},6:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},7:function(e,n,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.055cf0d4.chunk.js.map