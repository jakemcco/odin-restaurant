(()=>{"use strict";const e=function(e){const t=document.createElement("p");return t.textContent=e,t.style.fontStyle="italic",t},t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("home"),t.append(e('"The real deal. No-nonsense ramen." -- RamenDojo99'),e('"Best ramen on the block!" -- Anonymous'),e('"The world\'s best ramen, trust me." -- Shady Ramen Reviewer')),t}())};class n{constructor(e="Unknown Dish",t="./images/nongshim-shin-ramyun.jpg",n="Ingredients"){this.name=e,this.image=t,this.ingredients=n}clone(){const e=new n;return e.name=this.name,e.image=this.image,e.ingredients=this.ingredients,e}}const s=[new n("Nongshim Shin Ramyun","./images/nongshim-shin-ramyun.jpg","Beef, wheat noodles, sesame seeds, chili pepper, chives, green onion, shimeji mushrooms, bean sprout kimchi, cabbage kimchi, raw egg yolk, spicy powder, sugar, miso paste"),new n,new n,new n];const a=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(function(){const e=Object.assign(document.createElement("div"),{classList:"menu-grid"});return s.forEach((t=>e.appendChild(function(e){const t=Object.assign(document.createElement("div"),{classList:"menu-card"}),n=Object.assign(document.createElement("div"),{classList:"card-title",textContent:`${e.name}`}),s=Object.assign(document.createElement("img"),{classList:"card-img",src:`${e.image}`,alt:`${e.name} image`}),a=Object.assign(document.createElement("p"),{classList:"card-ingredients",textContent:`${e.ingredients}`});return t.append(n,s,a),t}(t)))),e}()),e}())},c=function(){};function i(e){const t=e.charAt(0).toUpperCase()+e.slice(1),n=Object.assign(document.createElement("button"),{classList:`btn tab ${e.toLowerCase()}-tab`,textContent:t,onclick:t=>{console.log("clicked"),t.target.classList.contains("active")||(o(n),m(e))}});return n}function o(e){document.querySelectorAll(".tab").forEach((t=>{t!==e&&t.classList.remove("active")})),e.classList.add("active")}function m(e="home"){switch(e){case"home":t();break;case"menu":a();break;case"contact":c();break;default:console.log("Default switch triggered: loadHomeTab()"),t()}}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=Object.assign(document.createElement("header"),{id:"header",classList:"header"}),t=Object.assign(document.createElement("h1"),{classList:"restaurant-name",textContent:"Cozy Ramen"});return e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=i("home"),n=i("menu"),s=i("contact");return e.appendChild(t),e.appendChild(n),e.appendChild(s),e}()),e}()),e.appendChild(Object.assign(document.createElement("main"),{id:"main",classList:"main",textContent:"PLACEHOLDER_MAIN"})),e.appendChild(function(){const e=Object.assign(document.createElement("footer"),{id:"footer",classList:"footer"}),t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} jakemcco`;const n=document.createElement("a");n.href="https://github.com/jakemcco";const s=document.createElement("i");return s.classList.add("fab"),s.classList.add("fa-github"),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}());const t="home",n=document.getElementsByClassName(`${t}-tab`)[0];m(t),o(n)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBVzdELFVBQVVDLElBQUksYUFFekIwRCxFQUFXN0QsWUFBWStELEdBQ3ZCTixFQUFPekQsWUFBWTBELEdBQ25CRCxFQUFPekQsWUFBWTZELEdBRVpKLENBQ1gsQ0F3Q3dCTyxJQUdwQixNQUFNQyxFQUFpQixPQUNqQkMsRUFBYXpFLFNBQVMwRSx1QkFBdUIsR0FBR0YsU0FBc0IsR0FDNUV2QixFQUFRdUIsR0FDUnhCLEVBQWF5QixFQUNqQixDQ3RJQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBVdGlsaXRpZXMgdGhhdCBjYW4gYmUgY2FsbGVkIHRocm91Z2hvdXQgdGhlIHNpdGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoICh0ZXh0KSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBwYXJhZ3JhcGguc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYXJhZ3JhcGg7IiwiLyoqXG4gKiBDb250ZW50IHRvIGluY2x1ZGUgdGhlIHByaW1hcnkgbGFuZGluZyBwYWdlXG4gKiBpbnNwaXJhdGlvbmFsIG9yaWdpbnNcbiAqIGltYWdlIG9mIGZhdm9yaXRlIGRpc2hcbiAqIGNhbGwgdG8gYWN0aW9uXG4gKi9cblxuaW1wb3J0IGNyZWF0ZVBhcmFncmFwaCBmcm9tIFwiLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lVGFiKCkge1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIGhvbWUuYXBwZW5kKFxuICAgICAgICBjcmVhdGVQYXJhZ3JhcGgoXCJcXFwiVGhlIHJlYWwgZGVhbC4gTm8tbm9uc2Vuc2UgcmFtZW4uXFxcIiAtLSBSYW1lbkRvam85OVwiKSxcbiAgICAgICAgY3JlYXRlUGFyYWdyYXBoKFwiXFxcIkJlc3QgcmFtZW4gb24gdGhlIGJsb2NrIVxcXCIgLS0gQW5vbnltb3VzXCIpLFxuICAgICAgICBjcmVhdGVQYXJhZ3JhcGgoXCJcXFwiVGhlIHdvcmxkJ3MgYmVzdCByYW1lbiwgdHJ1c3QgbWUuXFxcIiAtLSBTaGFkeSBSYW1lbiBSZXZpZXdlclwiKVxuICAgIClcblxuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZVRhYigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVRhYigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVUYWI7IiwiLyoqXG4gKiBDb250ZW50OlxuICogZ3JpZCBsYXlvdXQgb2YgY2FyZHMgc2hvd2luZyB0aGUgYmVzdCBkaXNoZXNcbiAqIGRpc2ggY2FyZHMgdG8gaGF2ZSBuYW1lLCBpbWFnZSwgaW5ncmVkaWVudHMsIGFsbGVyZ3kgaW5mbz9cbiAqL1xuXG5jbGFzcyBEaXNoIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSA9ICdVbmtub3duIERpc2gnLCBpbWFnZSA9ICcuL2ltYWdlcy9ub25nc2hpbS1zaGluLXJhbXl1bi5qcGcnLCBpbmdyZWRpZW50cyA9ICdJbmdyZWRpZW50cycpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZVxuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHNcbiAgICB9XG5cbiAgICBjbG9uZSAoKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gbmV3IERpc2goKTtcbiAgICAgICAgY2xvbmUubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY2xvbmUuaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBjbG9uZS5pbmdyZWRpZW50cyA9IHRoaXMuaW5ncmVkaWVudHM7XG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG59XG5cbi8vIERlZmluZSBvdXIgZGlzaGVzXG4vL1RPRE86IGFkZCBjb250ZW50XG5jb25zdCBkaXNoMSA9IG5ldyBEaXNoKCdOb25nc2hpbSBTaGluIFJhbXl1bicsICcuL2ltYWdlcy9ub25nc2hpbS1zaGluLXJhbXl1bi5qcGcnLCdCZWVmLCB3aGVhdCBub29kbGVzLCBzZXNhbWUgc2VlZHMsIGNoaWxpIHBlcHBlciwgY2hpdmVzLCBncmVlbiBvbmlvbiwgc2hpbWVqaSBtdXNocm9vbXMsIGJlYW4gc3Byb3V0IGtpbWNoaSwgY2FiYmFnZSBraW1jaGksIHJhdyBlZ2cgeW9saywgc3BpY3kgcG93ZGVyLCBzdWdhciwgbWlzbyBwYXN0ZScpO1xuY29uc3QgZGlzaDIgPSBuZXcgRGlzaCgpO1xuY29uc3QgZGlzaDMgPSBuZXcgRGlzaCgpO1xuY29uc3QgZGlzaDQgPSBuZXcgRGlzaCgpO1xuXG5jb25zdCBkaXNoTGlzdCA9IFtkaXNoMSwgZGlzaDIsIGRpc2gzLCBkaXNoNF07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKGRpc2gpIHtcbiAgICAvL09iamVjdC5hc3NpZ24gYWxsb3dzIHVzIHRvIHNldCBodG1sIGF0dHJpYnV0ZXMgaW4gb25lIGxpbmUsIGluc3RlYWQgb2YgaGF2aW5nIHNlcGFyYXRlIGxpbmVzIGZvciBpdGVtLmNsYXNzTGlzdC5hZGQoLi4uKSBvciBpdGVtLm9uY2xpY2sgPSAuLi4uXG4gICAgY29uc3QgbWVudUNhcmQgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ21lbnUtY2FyZCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAnY2FyZC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBgJHtkaXNoLm5hbWV9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgY29uc3QgaW1hZ2UgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2NhcmQtaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHtkaXNoLmltYWdlfWAsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogYCR7ZGlzaC5uYW1lfSBpbWFnZWAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICBjb25zdCBpbmdyZWRpZW50cyA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2NhcmQtaW5ncmVkaWVudHMnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogYCR7ZGlzaC5pbmdyZWRpZW50c31gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgXG4gICAgbWVudUNhcmQuYXBwZW5kKHRpdGxlLCBpbWFnZSwgaW5ncmVkaWVudHMpO1xuXG4gICAgcmV0dXJuIG1lbnVDYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51R3JpZCgpIHtcbiAgICBcbiAgICBjb25zdCBtZW51R3JpZCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAge1xuICAgIGNsYXNzTGlzdDogJ21lbnUtZ3JpZCdcbiAgICB9KVxuXG4gICAgZGlzaExpc3QuZm9yRWFjaChkaXNoID0+IG1lbnVHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKGRpc2gpKSk7XG5cbiAgICByZXR1cm4gbWVudUdyaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVUYWIoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVHcmlkKCkpO1xuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudVRhYigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVRhYigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVUYWI7IiwiLyoqXG4gKiBDb250ZW50IHRvIGluY2x1ZGU6XG4gKiBBZGRyZXNzICh3LyBNQVA/KVxuICogUGhvbmVcbiAqIEVtYWlsXG4gKi9cbmZ1bmN0aW9uIGxvYWRDb250YWN0VGFiICgpIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFRhYjsiLCJpbXBvcnQgbG9hZEhvbWVUYWIgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudVRhYiBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0VGFiIGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblxuICAgIGNvbnN0IGhlYWRlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2hlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogJ2hlYWRlcidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiAncmVzdGF1cmFudC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdDb3p5IFJhbWVuJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICAgIC8qIEFsdGVybmF0aXZlbHkgd2UgY2FuIHVzZTogKi9cbiAgICAvL2hlYWRlci5hcHBlbmQocmVzdGF1cmFudE5hbWUsIGNyZWF0ZU5hdkJhcigpKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBob21lVGFiID0gY3JlYXRlVGFiKCdob21lJyk7XG4gICAgY29uc3QgbWVudVRhYiA9IGNyZWF0ZVRhYignbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBjcmVhdGVUYWIoJ2NvbnRhY3QnKTtcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgcmV0dXJuIG5hdkJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFiKHRhYk5hbWUpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWROYW1lID0gdGFiTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRhYk5hbWUuc2xpY2UoMSk7XG4gICAgY29uc3QgdGFiID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogYGJ0biB0YWIgJHt0YWJOYW1lLnRvTG93ZXJDYXNlKCl9LXRhYmAsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBmb3JtYXR0ZWROYW1lLFxuICAgICAgICAgICAgICAgICAgICBvbmNsaWNrOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYih0YWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhYih0YWJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyksXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ21haW4nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdtYWluJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdQTEFDRUhPTERFUl9NQUlOJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdmb290ZXInLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6ICdmb290ZXInXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamFrZW1jY29gO1xuICAgIFxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qYWtlbWNjb1wiO1xuICAgIFxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIik7XG4gICAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xuICAgIFxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLyogVXNlZCBmb3IgYXBwbHlpbmcgc3R5bGVzL2FuaW1hdGlvbnMgKi9cbmZ1bmN0aW9uIHNldEFjdGl2ZVRhYih0YWIpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIik7XG4gICAgLy9jb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0YWJOYW1lfWApO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IHRhYikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8qIEdlbmVyaWMgZnVuY3Rpb24gdG8gaGFuZGxlIGxvYWRpbmcgdGFicyAqL1xuZnVuY3Rpb24gbG9hZFRhYihyZXF1ZXN0ZWRUYWIgPSAnaG9tZScpIHtcbiAgICBzd2l0Y2ggKHJlcXVlc3RlZFRhYikge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGxvYWRIb21lVGFiKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBsb2FkTWVudVRhYigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICAgICAgbG9hZENvbnRhY3RUYWIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlZmF1bHQgc3dpdGNoIHRyaWdnZXJlZDogbG9hZEhvbWVUYWIoKScpO1xuICAgICAgICAgICAgbG9hZEhvbWVUYWIoKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgLy8gUHJpbWFyeSBzaXRlIGxheW91dFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIC8vIEhvbWVwYWdlIHN0dWZmXG4gICAgY29uc3QgZGVmYXVsdFRhYk5hbWUgPSAnaG9tZSc7XG4gICAgY29uc3QgZGVmYXVsdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7ZGVmYXVsdFRhYk5hbWV9LXRhYmApWzBdO1xuICAgIGxvYWRUYWIoZGVmYXVsdFRhYk5hbWUpO1xuICAgIHNldEFjdGl2ZVRhYihkZWZhdWx0VGFiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOlsidGV4dCIsInBhcmFncmFwaCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJmb250U3R5bGUiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImhvbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJjcmVhdGVIb21lVGFiIiwiRGlzaCIsImNvbnN0cnVjdG9yIiwibmFtZSIsImltYWdlIiwiaW5ncmVkaWVudHMiLCJ0aGlzIiwiY2xvbmUiLCJkaXNoTGlzdCIsIm1lbnUiLCJtZW51R3JpZCIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJkaXNoIiwibWVudUNhcmQiLCJ0aXRsZSIsInNyYyIsImFsdCIsImNyZWF0ZU1lbnVDYXJkIiwiY3JlYXRlTWVudUdyaWQiLCJjcmVhdGVNZW51VGFiIiwiY3JlYXRlVGFiIiwidGFiTmFtZSIsImZvcm1hdHRlZE5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidGFiIiwidG9Mb3dlckNhc2UiLCJvbmNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjb250YWlucyIsInNldEFjdGl2ZVRhYiIsImxvYWRUYWIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwicmVtb3ZlIiwicmVxdWVzdGVkVGFiIiwiY29udGVudCIsImhlYWRlciIsImlkIiwicmVzdGF1cmFudE5hbWUiLCJuYXZCYXIiLCJob21lVGFiIiwibWVudVRhYiIsImNvbnRhY3RUYWIiLCJjcmVhdGVOYXZCYXIiLCJjcmVhdGVIZWFkZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJMaW5rIiwiaHJlZiIsImdpdGh1Ykljb24iLCJjcmVhdGVGb290ZXIiLCJkZWZhdWx0VGFiTmFtZSIsImRlZmF1bHRUYWIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==