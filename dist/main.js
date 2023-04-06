(()=>{"use strict";const e=function(e){const n=document.createElement("p");return n.textContent=e,n.style.fontStyle="italic",n},n=function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");return n.classList.add("home"),n.append(e('"The real deal. No-nonsense ramen." -- RamenDojo99'),e('"Best ramen on the block!" -- Anonymous'),e('"The world\'s best ramen, trust me." -- Shady Ramen Reviewer')),n}())};class t{constructor(e="Unknown Dish",n="./images/nongshim-shin-ramyun.jpg",t="Ingredients"){this.name=e,this.image=n,this.ingredients=t}clone(){const e=new t;return e.name=this.name,e.image=this.image,e.ingredients=this.ingredients,e}}const s=[new t("Nongshim Shin Ramyun","./images/nongshim-shin-ramyun.jpg","Beef, wheat noodles, sesame seeds, chili pepper, chives, green onion, mushrooms, bean sprout kimchi, egg, sugar, miso"),new t("Paitan Miso Ramen","./images/paitan-miso-ramen.jpg","Ajitama, smoked chashu, negi, togarashi, egg, green onions, garlic, spicy powder, miso"),new t("Shio Lemon Ramen","./images/shio-lemon-ramen.webp","Shio lemon, tare, niboshi, smoked pear, chicken w/ duck chintan, shallots, egg, chives, sichuan pepper, yellow noodles"),new t("Garlic Chili Tonkotsu Ramen","./images/bg-chili-tonkotsu-ramen.jpg","Egg, black garlic, pork belly, eel, chili oil, sesame seeds, green onion, shitake mushrooms, egg noodle")];const a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=Object.assign(document.createElement("div"),{classList:"menu-grid"});return s.forEach((n=>e.appendChild(function(e){const n=Object.assign(document.createElement("div"),{classList:"menu-card"}),t=Object.assign(document.createElement("div"),{classList:"card-title",textContent:`${e.name}`}),s=Object.assign(document.createElement("img"),{classList:"card-img",src:`${e.image}`,alt:`${e.name} image`}),a=Object.assign(document.createElement("p"),{classList:"card-ingredients",textContent:`${e.ingredients}`});return n.append(t,s,a),n}(n)))),e}())},i=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("div");n.classList.add("contact-info"),n.innerHTML='\n        <div class="address info-box">\n            <i class="fas fa-map-marker-alt"></i>\n            <p> 8080 Easy St.<br />Cincinnati, OH 45202 </p>\n        </div>\n        <div class="hours info-box">\n            <i class="fas fa-clock"></i>\n            <p> Mon-Fri: 10am-10pm<br/> Sat-Sun: 10am-8pm </p>\n        </div>\n        <div class="phone info-box">\n            <i class="fas fa-phone fa-flip-horizontal"></i>\n            <p> (123) 456-7890 </p>\n        </div>',e.appendChild(n);const t=Object.assign(document.createElement("iframe"),{classList:"gMap",src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12384.141237002917!2d-84.51493846865763!3d39.10566627206874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1680724651683!5m2!1sen!2sus",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"});return e.appendChild(t),e}())};function o(e){const n=e.charAt(0).toUpperCase()+e.slice(1),t=Object.assign(document.createElement("button"),{classList:`btn tab ${e.toLowerCase()}-tab`,textContent:n,onclick:n=>{console.log("clicked"),n.target.classList.contains("active")||(c(t),m(e))}});return t}function c(e){document.querySelectorAll(".tab").forEach((n=>{n!==e&&n.classList.remove("active")})),e.classList.add("active")}function m(e="home"){switch(e){case"home":n();break;case"menu":a();break;case"contact":i();break;default:console.log("Default switch triggered: loadHomeTab()"),n()}}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=Object.assign(document.createElement("header"),{id:"header",classList:"header"}),n=Object.assign(document.createElement("h1"),{classList:"restaurant-name",textContent:"Cozy Ramen"});return e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav"),n=o("home"),t=o("menu"),s=o("contact");return e.appendChild(n),e.appendChild(t),e.appendChild(s),e}()),e}()),e.appendChild(Object.assign(document.createElement("main"),{id:"main",classList:"main"})),e.appendChild(function(){const e=Object.assign(document.createElement("footer"),{id:"footer",classList:"footer"}),n=document.createElement("p");n.textContent=`Copyright © ${(new Date).getFullYear()} jakemcco`;const t=document.createElement("a");t.href="https://github.com/jakemcco";const s=document.createElement("i");return s.classList.add("fab"),s.classList.add("fa-github"),t.appendChild(s),e.appendChild(n),e.appendChild(t),e}());const n="home",t=document.getElementsByClassName(`${n}-tab`)[0];m(n),c(t)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBMEd3QlEsSUFDcEJULEVBQVF2RCxZQXZFS2UsT0FBT0MsT0FBT3ZCLFNBQVNDLGNBQWMsUUFDdEMsQ0FDSStELEdBQUksT0FDSnZELFVBQVcsVUFxRTNCcUQsRUFBUXZELFlBOURaLFdBQ0ksTUFBTWlFLEVBQVNsRCxPQUFPQyxPQUFPdkIsU0FBU0MsY0FBYyxVQUN4QyxDQUNJK0QsR0FBSSxTQUNKdkQsVUFBVyxXQUdyQmdFLEVBQVl6RSxTQUFTQyxjQUFjLEtBQ3pDd0UsRUFBVXZFLFlBQWMsZ0JBQWUsSUFBSXdFLE1BQU9DLHlCQUVsRCxNQUFNQyxFQUFhNUUsU0FBU0MsY0FBYyxLQUMxQzJFLEVBQVdDLEtBQU8sOEJBRWxCLE1BQU1DLEVBQWE5RSxTQUFTQyxjQUFjLEtBUTFDLE9BUEE2RSxFQUFXckUsVUFBVUMsSUFBSSxPQUN6Qm9FLEVBQVdyRSxVQUFVQyxJQUFJLGFBRXpCa0UsRUFBV3JFLFlBQVl1RSxHQUN2Qk4sRUFBT2pFLFlBQVlrRSxHQUNuQkQsRUFBT2pFLFlBQVlxRSxHQUVaSixDQUNYLENBd0N3Qk8sSUFHcEIsTUFBTUMsRUFBaUIsT0FDakJDLEVBQWFqRixTQUFTa0YsdUJBQXVCLEdBQUdGLFNBQXNCLEdBQzVFdkIsRUFBUXVCLEdBQ1J4QixFQUFheUIsRUFDakIsQ0N6SUEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVXRpbGl0aWVzIHRoYXQgY2FuIGJlIGNhbGxlZCB0aHJvdWdob3V0IHRoZSBzaXRlICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaCAodGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcGFyYWdyYXBoLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFyYWdyYXBoOyIsIi8qKlxuICogQ29udGVudCB0byBpbmNsdWRlIHRoZSBwcmltYXJ5IGxhbmRpbmcgcGFnZVxuICogaW5zcGlyYXRpb25hbCBvcmlnaW5zXG4gKiBpbWFnZSBvZiBmYXZvcml0ZSBkaXNoXG4gKiBjYWxsIHRvIGFjdGlvblxuICovXG5cbmltcG9ydCBjcmVhdGVQYXJhZ3JhcGggZnJvbSBcIi4vdXRpbHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVRhYigpIHtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgXG4gICAgaG9tZS5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZVBhcmFncmFwaChcIlxcXCJUaGUgcmVhbCBkZWFsLiBOby1ub25zZW5zZSByYW1lbi5cXFwiIC0tIFJhbWVuRG9qbzk5XCIpLFxuICAgICAgICBjcmVhdGVQYXJhZ3JhcGgoXCJcXFwiQmVzdCByYW1lbiBvbiB0aGUgYmxvY2shXFxcIiAtLSBBbm9ueW1vdXNcIiksXG4gICAgICAgIGNyZWF0ZVBhcmFncmFwaChcIlxcXCJUaGUgd29ybGQncyBiZXN0IHJhbWVuLCB0cnVzdCBtZS5cXFwiIC0tIFNoYWR5IFJhbWVuIFJldmlld2VyXCIpXG4gICAgKVxuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lVGFiKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lVGFiKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVRhYjsiLCIvKipcbiAqIENvbnRlbnQ6XG4gKiBncmlkIGxheW91dCBvZiBjYXJkcyBzaG93aW5nIHRoZSBiZXN0IGRpc2hlc1xuICogZGlzaCBjYXJkcyB0byBoYXZlIG5hbWUsIGltYWdlLCBpbmdyZWRpZW50cywgYWxsZXJneSBpbmZvP1xuICovXG5cbmNsYXNzIERpc2gge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lID0gJ1Vua25vd24gRGlzaCcsIGltYWdlID0gJy4vaW1hZ2VzL25vbmdzaGltLXNoaW4tcmFteXVuLmpwZycsIGluZ3JlZGllbnRzID0gJ0luZ3JlZGllbnRzJyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50c1xuICAgIH1cblxuICAgIGNsb25lICgpIHtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBuZXcgRGlzaCgpO1xuICAgICAgICBjbG9uZS5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjbG9uZS5pbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGNsb25lLmluZ3JlZGllbnRzID0gdGhpcy5pbmdyZWRpZW50cztcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbn1cblxuLy8gRGVmaW5lIG91ciBkaXNoZXNcbmNvbnN0IGRpc2gxID0gbmV3IERpc2goJ05vbmdzaGltIFNoaW4gUmFteXVuJywgJy4vaW1hZ2VzL25vbmdzaGltLXNoaW4tcmFteXVuLmpwZycsJ0JlZWYsIHdoZWF0IG5vb2RsZXMsIHNlc2FtZSBzZWVkcywgY2hpbGkgcGVwcGVyLCBjaGl2ZXMsIGdyZWVuIG9uaW9uLCBtdXNocm9vbXMsIGJlYW4gc3Byb3V0IGtpbWNoaSwgZWdnLCBzdWdhciwgbWlzbycpO1xuXG5jb25zdCBkaXNoMiA9IG5ldyBEaXNoKCdQYWl0YW4gTWlzbyBSYW1lbicsICcuL2ltYWdlcy9wYWl0YW4tbWlzby1yYW1lbi5qcGcnLCdBaml0YW1hLCBzbW9rZWQgY2hhc2h1LCBuZWdpLCB0b2dhcmFzaGksIGVnZywgZ3JlZW4gb25pb25zLCBnYXJsaWMsIHNwaWN5IHBvd2RlciwgbWlzbycpO1xuXG5jb25zdCBkaXNoMyA9IG5ldyBEaXNoKCdTaGlvIExlbW9uIFJhbWVuJywgJy4vaW1hZ2VzL3NoaW8tbGVtb24tcmFtZW4ud2VicCcsICdTaGlvIGxlbW9uLCB0YXJlLCBuaWJvc2hpLCBzbW9rZWQgcGVhciwgY2hpY2tlbiB3LyBkdWNrIGNoaW50YW4sIHNoYWxsb3RzLCBlZ2csIGNoaXZlcywgc2ljaHVhbiBwZXBwZXIsIHllbGxvdyBub29kbGVzJyk7XG5cbmNvbnN0IGRpc2g0ID0gbmV3IERpc2goJ0dhcmxpYyBDaGlsaSBUb25rb3RzdSBSYW1lbicsICcuL2ltYWdlcy9iZy1jaGlsaS10b25rb3RzdS1yYW1lbi5qcGcnLCAnRWdnLCBibGFjayBnYXJsaWMsIHBvcmsgYmVsbHksIGVlbCwgY2hpbGkgb2lsLCBzZXNhbWUgc2VlZHMsIGdyZWVuIG9uaW9uLCBzaGl0YWtlIG11c2hyb29tcywgZWdnIG5vb2RsZScpO1xuXG5jb25zdCBkaXNoTGlzdCA9IFtkaXNoMSwgZGlzaDIsIGRpc2gzLCBkaXNoNF07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKGRpc2gpIHtcbiAgICAvL09iamVjdC5hc3NpZ24gYWxsb3dzIHVzIHRvIHNldCBodG1sIGF0dHJpYnV0ZXMgaW4gb25lIGxpbmUsIGluc3RlYWQgb2YgaGF2aW5nIHNlcGFyYXRlIGxpbmVzIGZvciBpdGVtLmNsYXNzTGlzdC5hZGQoLi4uKSBvciBpdGVtLm9uY2xpY2sgPSAuLi4uXG4gICAgY29uc3QgbWVudUNhcmQgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ21lbnUtY2FyZCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnY2FyZC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBgJHtkaXNoLm5hbWV9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgY29uc3QgaW1hZ2UgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2NhcmQtaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHtkaXNoLmltYWdlfWAsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogYCR7ZGlzaC5uYW1lfSBpbWFnZWAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICBjb25zdCBpbmdyZWRpZW50cyA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2NhcmQtaW5ncmVkaWVudHMnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7ZGlzaC5pbmdyZWRpZW50c31gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgXG4gICAgbWVudUNhcmQuYXBwZW5kKHRpdGxlLCBpbWFnZSwgaW5ncmVkaWVudHMpO1xuXG4gICAgcmV0dXJuIG1lbnVDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51VGFiKCkge1xuICAgIFxuICAgIGNvbnN0IG1lbnVHcmlkID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICB7XG4gICAgY2xhc3NMaXN0OiAnbWVudS1ncmlkJ1xuICAgIH0pXG5cbiAgICBkaXNoTGlzdC5mb3JFYWNoKGRpc2ggPT4gbWVudUdyaWQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoZGlzaCkpKTtcblxuICAgIHJldHVybiBtZW51R3JpZDtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVUYWIoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVUYWIoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51VGFiOyIsIi8qKlxuICogQ29udGVudCB0byBpbmNsdWRlOlxuICogQWRkcmVzcyAody8gTUFQPylcbiAqIFBob25lXG4gKiBFbWFpbFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUYWIgKCkge1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbmZvXCIpO1xuXG4gICAgY29udGFjdEluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzcyBpbmZvLWJveFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+XG4gICAgICAgICAgICA8cD4gODA4MCBFYXN5IFN0LjxiciAvPkNpbmNpbm5hdGksIE9IIDQ1MjAyIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3VycyBpbmZvLWJveFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvY2tcIj48L2k+XG4gICAgICAgICAgICA8cD4gTW9uLUZyaTogMTBhbS0xMHBtPGJyLz4gU2F0LVN1bjogMTBhbS04cG0gPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBob25lIGluZm8tYm94XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1waG9uZSBmYS1mbGlwLWhvcml6b250YWxcIj48L2k+XG4gICAgICAgICAgICA8cD4gKDEyMykgNDU2LTc4OTAgPC9wPlxuICAgICAgICA8L2Rpdj5gO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gICAgLy8gY29udGFjdC5hcHBlbmQoXG4gICAgLy8gICAgIGNyZWF0ZVBhcmFncmFwaChcIlBob25lOiAgKDEyMykgNDU2LTc4OTBcIiksXG4gICAgLy8gICAgIGNyZWF0ZVBhcmFncmFwaChcIkVtYWlsOiAgaW5mb0Bjb3p5cmFtZW4uY29tXCIpLFxuICAgIC8vICAgICBjcmVhdGVQYXJhZ3JhcGgoXCJBZGRyZXNzOiAgODA4MCBFYXN5IFN0LiBDaW5jaW5uYXRpLCBPSFwiKSxcbiAgICAvLyAgICAgY3JlYXRlUGFyYWdyYXBoKFwiSG91cnM6ICBNb24tRnJpOiAxMGFtLTEwcG1cIiksXG4gICAgLy8gICAgIGNyZWF0ZVBhcmFncmFwaChcIlNhdC1TdW46ICAxMWFtIC0gOHBtXCIpXG4gICAgLy8gKVxuXG4gICAgY29uc3QgZ01hcCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnZ01hcCcsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW0xMiExbTMhMWQxMjM4NC4xNDEyMzcwMDI5MTchMmQtODQuNTE0OTM4NDY4NjU3NjMhM2QzOS4xMDU2NjYyNzIwNjg3NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhNWUwITNtMiExc2VuITJzdXMhNHYxNjgwNzI0NjUxNjgzITVtMiExc2VuITJzdXNcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0NTBcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiYm9yZGVyOjA7XCIsXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogXCJsYXp5XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVycmVycG9saWN5OiBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZ01hcCk7XG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0VGFiKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0VGFiKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFRhYjsiLCJpbXBvcnQgbG9hZEhvbWVUYWIgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudVRhYiBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0VGFiIGZyb20gJy4vY29udGFjdCc7XG5cbi8qIEhlYWRlciB3aXRoIHRpdGxlIGFuZCBiYXNpYyBuYXZiYXIgKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdoZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdoZWFkZXInXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ3Jlc3RhdXJhbnQtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnQ296eSBSYW1lbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcbiAgICAvKiBBbHRlcm5hdGl2ZWx5IHdlIGNhbiB1c2U6ICovXG4gICAgLy9oZWFkZXIuYXBwZW5kKHJlc3RhdXJhbnROYW1lLCBjcmVhdGVOYXZCYXIoKSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG4vKiBCYXNpYyB0YWJiZWQgbmF2IGJhciBmb3IgaGVhZGVyICovXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZVRhYignaG9tZScpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBjcmVhdGVUYWIoJ21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gY3JlYXRlVGFiKCdjb250YWN0Jyk7XG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbi8qIFRhYnMgKGJ1dHRvbnMpIGZvciBlYWNoIHBhZ2UgKi9cbmZ1bmN0aW9uIGNyZWF0ZVRhYih0YWJOYW1lKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IHRhYk5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0YWJOYW1lLnNsaWNlKDEpO1xuICAgIGNvbnN0IHRhYiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IGBidG4gdGFiICR7dGFiTmFtZS50b0xvd2VyQ2FzZSgpfS10YWJgLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZm9ybWF0dGVkTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb25jbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWIodGFiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYWIodGFiTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0YWI7XG59XG5cbi8qIENvcmUgY29udGVudCBzZWN0aW9uIGJldHdlZW4gaGVhZGVyICYgZm9vdGVyICovXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbWFpbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ21haW4nLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbi8qIEJhc2ljIGZvb3RlciB3LyBnaXRodWIgbGluayAqL1xuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyksXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2Zvb3RlcicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2Zvb3RlcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqYWtlbWNjb2A7XG4gICAgXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2pha2VtY2NvXCI7XG4gICAgXG4gICAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiKTtcbiAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbi8qIFVzZWQgZm9yIGFwcGx5aW5nIHN0eWxlcy9hbmltYXRpb25zICovXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIodGFiKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IHRhYikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8qIEdlbmVyaWMgZnVuY3Rpb24gdG8gaGFuZGxlIGxvYWRpbmcgdGFicyBieSBuYW1lICovXG5mdW5jdGlvbiBsb2FkVGFiKHJlcXVlc3RlZFRhYiA9ICdob21lJykge1xuICAgIHN3aXRjaCAocmVxdWVzdGVkVGFiKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgbG9hZEhvbWVUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGxvYWRNZW51VGFiKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBsb2FkQ29udGFjdFRhYigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGVmYXVsdCBzd2l0Y2ggdHJpZ2dlcmVkOiBsb2FkSG9tZVRhYigpJyk7XG4gICAgICAgICAgICBsb2FkSG9tZVRhYigpO1xuICAgIH07XG59XG5cbi8qIFRvIGJlIGNhbGxlZCBvbiBzaXRlIGxvYWQgKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAvLyBQcmltYXJ5IHNpdGUgbGF5b3V0XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgLy8gSG9tZXBhZ2Ugc3R1ZmZcbiAgICBjb25zdCBkZWZhdWx0VGFiTmFtZSA9ICdob21lJztcbiAgICBjb25zdCBkZWZhdWx0VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtkZWZhdWx0VGFiTmFtZX0tdGFiYClbMF07XG4gICAgbG9hZFRhYihkZWZhdWx0VGFiTmFtZSk7XG4gICAgc2V0QWN0aXZlVGFiKGRlZmF1bHRUYWIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6WyJ0ZXh0IiwicGFyYWdyYXBoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImZvbnRTdHlsZSIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiaG9tZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImNyZWF0ZUhvbWVUYWIiLCJEaXNoIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiaW1hZ2UiLCJpbmdyZWRpZW50cyIsInRoaXMiLCJjbG9uZSIsImRpc2hMaXN0IiwibWVudUdyaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwiZGlzaCIsIm1lbnVDYXJkIiwidGl0bGUiLCJzcmMiLCJhbHQiLCJjcmVhdGVNZW51Q2FyZCIsImNyZWF0ZU1lbnVUYWIiLCJjb250YWN0IiwiY29udGFjdEluZm8iLCJpbm5lckhUTUwiLCJnTWFwIiwid2lkdGgiLCJoZWlnaHQiLCJhbGxvd2Z1bGxzY3JlZW4iLCJsb2FkaW5nIiwicmVmZXJyZXJwb2xpY3kiLCJjcmVhdGVDb250YWN0VGFiIiwiY3JlYXRlVGFiIiwidGFiTmFtZSIsImZvcm1hdHRlZE5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidGFiIiwidG9Mb3dlckNhc2UiLCJvbmNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjb250YWlucyIsInNldEFjdGl2ZVRhYiIsImxvYWRUYWIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwicmVtb3ZlIiwicmVxdWVzdGVkVGFiIiwiY29udGVudCIsImhlYWRlciIsImlkIiwicmVzdGF1cmFudE5hbWUiLCJuYXZCYXIiLCJob21lVGFiIiwibWVudVRhYiIsImNvbnRhY3RUYWIiLCJjcmVhdGVOYXZCYXIiLCJjcmVhdGVIZWFkZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJMaW5rIiwiaHJlZiIsImdpdGh1Ykljb24iLCJjcmVhdGVGb290ZXIiLCJkZWZhdWx0VGFiTmFtZSIsImRlZmF1bHRUYWIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==