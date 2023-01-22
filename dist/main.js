(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var o=e.g.document;if(!t&&o&&(o.currentScript&&(t=o.currentScript.src),!t)){var c=o.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1f757ac1762962d60ddc.png",o=e.p+"d367d5dbff6ca8e7e2f2.png",c=document.querySelector(".new-project"),n=document.querySelector(".project-form"),r=document.querySelector(".add-button"),s=document.querySelector(".new-projects"),d=document.querySelector(".cancle-button"),a=()=>{const e=document.querySelectorAll("#project"),t=document.querySelector(".task-list");e.forEach((e=>{e.addEventListener("click",(()=>{t.childNodes[1].textContent=e.textContent}))}))},l=e.p+"df3b5dddd60da7069980.png",i=e.p+"fe50e1a3f0405d606b0c.png",u=e.p+"cfabfc38136dc55a9a0d.png",m=[],p=()=>{const e=document.querySelector(".tasks"),t=document.querySelector(".bg-image");if("No Task Yet!"===e.children[0].textContent)e.children[0].remove(),t.src=i;else if(1===e.childElementCount){const o=document.createElement("h1");o.textContent="No Task Yet!",e.insertBefore(o,e.children[0]),t.src=u}},g=()=>{const e=document.querySelector(".form-name"),t=document.querySelector(".form-date"),c=document.querySelector(".form-type"),n=e.value,r=t.value,s=c.value,d=document.querySelector(".add-task-form"),a=new class{constructor(e,t,o){this.title=e,this.date=t,this.type=o}addingNewTask(){const e=document.querySelector(".tasks"),t=document.createElement("div");t.classList.add("task");const c=document.createElement("p");c.textContent=this.title;const n=document.createElement("p");n.textContent=this.date;const r=document.createElement("p");r.textContent=this.type;const s=document.createElement("div");s.classList.add("task-option");const d=new Image;d.src=l;const a=new Image;a.src=o,e.appendChild(t),t.appendChild(c),t.appendChild(n),t.appendChild(r),t.appendChild(s),s.appendChild(d),s.appendChild(a),p(),d.addEventListener("click",(()=>{d.parentNode.parentNode.classList.toggle("complete")})),a.addEventListener("click",(()=>{a.parentNode.parentNode.remove(),p()}))}}(n,r,s);a.addingNewTask(),m.push(a),e.value="",t.value=(new Date).toJSON().slice(0,10),c.value="Normal",d.classList.remove("adding"),console.log(m)};(()=>{const e=document.querySelector(".menu"),t=document.querySelector(".projects"),o=document.querySelector(".task-list"),c=document.querySelector(".tasks"),r=document.querySelector(".task"),d=document.querySelector(".add-task"),a=document.querySelector(".vertical"),l=document.querySelector(".horizontol"),i=document.querySelector(".add-task-form");e.addEventListener("click",(()=>{s.childElementCount>2&&document.querySelectorAll(".new-project-title").forEach((e=>{e.classList.toggle("show")})),e.classList.toggle("change"),t.classList.toggle("show"),o.classList.toggle("show"),i.classList.toggle("show"),n.classList.remove("show"),c.classList.toggle("show"),r.classList.toggle("show")})),d.addEventListener("click",(()=>{a.classList.toggle("adding"),l.classList.toggle("adding"),i.classList.toggle("adding"),e.parentNode.parentNode.classList.add("show"),document.querySelector(".form-date").value=(new Date).toJSON().slice(0,10)}))})(),a(),c.addEventListener("click",(()=>{n.classList.add("show")})),r.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".projectAddPopup"),c=document.createElement("div");c.classList.add("new-project-title"),s.insertBefore(c,s.children[s.childElementCount-1]);const r=new Image;r.src=t,c.appendChild(r);const d=document.createElement("button");d.id="project",d.textContent=e.value,c.appendChild(d),e.value="",n.classList.remove("show");const l=new Image;l.src=o,c.appendChild(l),l.addEventListener("click",(()=>{l.parentNode.remove()})),a()})()})),d.addEventListener("click",(e=>{const t=document.querySelector(".projectAddPopup");e.preventDefault(),n.classList.remove("show"),t.value=""})),(()=>{const e=document.querySelector(".add-task-button"),t=document.querySelector(".cancel-task-button"),o=document.querySelector(".vertical"),c=document.querySelector(".horizontol");e.addEventListener("click",(e=>{e.preventDefault(),g(),o.classList.remove("adding"),c.classList.remove("adding"),document.querySelector(".main-container").classList.remove("show")})),t.addEventListener("click",(e=>{e.preventDefault(),o.classList.remove("adding"),c.classList.remove("adding"),document.querySelector(".main-container").classList.remove("show"),t.parentNode.parentNode.parentNode.classList.remove("adding")}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBc0IsQ0FBQyxFQ0QzQkEsRUFBb0JDLEVBQUksV0FDdkIsR0FBMEIsaUJBQWZDLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBT0MsTUFBUSxJQUFJQyxTQUFTLGNBQWIsRUFHaEIsQ0FGRSxNQUFPQyxHQUNSLEdBQXNCLGlCQUFYQyxPQUFxQixPQUFPQSxNQUN4QyxDQUNBLENBUHVCLEcsTUNBeEIsSUFBSUMsRUFDQVAsRUFBb0JDLEVBQUVPLGdCQUFlRCxFQUFZUCxFQUFvQkMsRUFBRVEsU0FBVyxJQUN0RixJQUFJQyxFQUFXVixFQUFvQkMsRUFBRVMsU0FDckMsSUFBS0gsR0FBYUcsSUFDYkEsRUFBU0MsZ0JBQ1pKLEVBQVlHLEVBQVNDLGNBQWNDLE1BQy9CTCxHQUFXLENBQ2YsSUFBSU0sRUFBVUgsRUFBU0kscUJBQXFCLFVBQ3pDRCxFQUFRRSxTQUFRUixFQUFZTSxFQUFRQSxFQUFRRSxPQUFTLEdBQUdILElBQzVELENBSUQsSUFBS0wsRUFBVyxNQUFNLElBQUlTLE1BQU0seURBQ2hDVCxFQUFZQSxFQUFVVSxRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRmpCLEVBQW9Ca0IsRUFBSVgsQyw2RUNabEJZLEVBQWdCVCxTQUFTVSxjQUFjLGdCQUN2Q0MsRUFBY1gsU0FBU1UsY0FBYyxpQkFDckNFLEVBQVlaLFNBQVNVLGNBQWMsZUFDbkNHLEVBQWNiLFNBQVNVLGNBQWMsaUJBQ3JDSSxFQUFlZCxTQUFTVSxjQUFjLGtCQUV0Q0ssRUFBaUIsS0FDbkIsTUFBTUMsRUFBV2hCLFNBQVNpQixpQkFBaUIsWUFDckNDLEVBQWVsQixTQUFTVSxjQUFjLGNBRTVDTSxFQUFTRyxTQUFTQyxJQUNkQSxFQUFRQyxpQkFBaUIsU0FBUyxLQUM5QkgsRUFBYUksV0FBVyxHQUFHQyxZQUFjSCxFQUFRRyxXQUFXLEdBQy9ELEdBQ0osRSxtR0NaQ0MsRUFBZSxHQUNmQyxFQUFrQixLQUNwQixNQUFNQyxFQUFlMUIsU0FBU1UsY0FBYyxVQUN0Q2lCLEVBQVUzQixTQUFTVSxjQUFjLGFBQ3ZDLEdBQTRDLGlCQUF6Q2dCLEVBQWFFLFNBQVMsR0FBR0wsWUFDeEJHLEVBQWFFLFNBQVMsR0FBR0MsU0FDekJGLEVBQVF6QixJQUFNLE9BRWIsR0FBc0MsSUFBbkN3QixFQUFhSSxrQkFBd0IsQ0FDekMsTUFBTUMsRUFBZS9CLFNBQVNnQyxjQUFjLE1BQzVDRCxFQUFhUixZQUFjLGVBQzNCRyxFQUFhTyxhQUFhRixFQUFjTCxFQUFhRSxTQUFTLElBQzlERCxFQUFRekIsSUFBTSxDQUNsQixHQXNERWdDLEVBQWEsS0FDZixNQUFNQyxFQUFlbkMsU0FBU1UsY0FBYyxjQUN0QzBCLEVBQWVwQyxTQUFTVSxjQUFjLGNBQ3RDMkIsRUFBZXJDLFNBQVNVLGNBQWMsY0FFdEM0QixFQUFvQkgsRUFBYUksTUFDakNDLEVBQW9CSixFQUFhRyxNQUNqQ0UsRUFBb0JKLEVBQWFFLE1BQ2pDRyxFQUFjMUMsU0FBU1UsY0FBYyxrQkFDckNpQyxFQUFVLElBNURQLE1BQ1RDLFlBQVlDLEVBQU9DLEVBQU1DLEdBQ3JCdEQsS0FBS29ELE1BQVFBLEVBQ2JwRCxLQUFLcUQsS0FBT0EsRUFDWnJELEtBQUtzRCxLQUFPQSxDQUNoQixDQUVBQyxnQkFDSSxNQUFNdEIsRUFBZTFCLFNBQVNVLGNBQWMsVUFFdEN1QyxFQUFhakQsU0FBU2dDLGNBQWMsT0FDMUNpQixFQUFXQyxVQUFVQyxJQUFJLFFBRXpCLE1BQU1DLEVBQVdwRCxTQUFTZ0MsY0FBYyxLQUN4Q29CLEVBQVM3QixZQUFjOUIsS0FBS29ELE1BRTVCLE1BQU1RLEVBQVdyRCxTQUFTZ0MsY0FBYyxLQUN4Q3FCLEVBQVM5QixZQUFjOUIsS0FBS3FELEtBRTVCLE1BQU1RLEVBQWF0RCxTQUFTZ0MsY0FBYyxLQUMxQ3NCLEVBQVcvQixZQUFjOUIsS0FBS3NELEtBRTlCLE1BQU1RLEVBQWN2RCxTQUFTZ0MsY0FBYyxPQUMzQ3VCLEVBQVlMLFVBQVVDLElBQUksZUFFMUIsTUFBTUssRUFBVyxJQUFJQyxNQUNyQkQsRUFBU3RELElBQU0sRUFFZixNQUFNd0QsRUFBYSxJQUFJRCxNQUN2QkMsRUFBV3hELElBQU0sRUFFakJ3QixFQUFhaUMsWUFBWVYsR0FDekJBLEVBQVdVLFlBQVlQLEdBQ3ZCSCxFQUFXVSxZQUFZTixHQUN2QkosRUFBV1UsWUFBWUwsR0FDdkJMLEVBQVdVLFlBQVlKLEdBQ3ZCQSxFQUFZSSxZQUFZSCxHQUN4QkQsRUFBWUksWUFBWUQsR0FDeEJqQyxJQUVBK0IsRUFBU25DLGlCQUFpQixTQUFTLEtBQzdCbUMsRUFBbUIsV0FBWSxXQUFFTixVQUFVVSxPQUFPLFdBQVUsSUFHbEVGLEVBQVdyQyxpQkFBaUIsU0FBUyxLQUMvQnFDLEVBQXFCLFdBQVksV0FBRTdCLFNBQ3JDSixHQUFpQixHQUV6QixHQVl5QmEsRUFBbUJFLEVBQW1CQyxHQUMvREUsRUFBUUssZ0JBRVJ4QixFQUFhcUMsS0FBS2xCLEdBRWxCUixFQUFhSSxNQUFRLEdBQ3JCSCxFQUFhRyxPQUFRLElBQUl1QixNQUFPQyxTQUFTQyxNQUFNLEVBQUUsSUFDakQzQixFQUFhRSxNQUFRLFNBQ3JCRyxFQUFZUSxVQUFVckIsT0FBTyxVQUM3Qm9DLFFBQVFDLElBQUkxQyxFQUFhLEVDeEZSLE1BQ2pCLE1BQU0yQyxFQUFPbkUsU0FBU1UsY0FBYyxTQUM5QjBELEVBQVNwRSxTQUFTVSxjQUFjLGFBQ2hDMkQsRUFBV3JFLFNBQVNVLGNBQWMsY0FDbEM0RCxFQUFRdEUsU0FBU1UsY0FBYyxVQUMvQjZELEVBQU92RSxTQUFTVSxjQUFjLFNBQzlCOEQsRUFBU3hFLFNBQVNVLGNBQWMsYUFDaEMrRCxFQUFpQnpFLFNBQVNVLGNBQWMsYUFDeENnRSxFQUFtQjFFLFNBQVNVLGNBQWMsZUFDMUNnQyxFQUFjMUMsU0FBU1UsY0FBYyxrQkFHM0N5RCxFQUFLOUMsaUJBQWlCLFNBQVMsS0FDeEJSLEVBQVlpQixrQkFBbUIsR0FDUjlCLFNBQVNpQixpQkFBaUIsc0JBQ2xDRSxTQUFTd0QsSUFDbkJBLEVBQUV6QixVQUFVVSxPQUFPLE9BQU8sSUFHbENPLEVBQUtqQixVQUFVVSxPQUFPLFVBQ3RCUSxFQUFPbEIsVUFBVVUsT0FBTyxRQUN4QlMsRUFBU25CLFVBQVVVLE9BQU8sUUFDMUJsQixFQUFZUSxVQUFVVSxPQUFPLFFBQzdCakQsRUFBWXVDLFVBQVVyQixPQUFPLFFBQzdCeUMsRUFBTXBCLFVBQVVVLE9BQU8sUUFDdkJXLEVBQUtyQixVQUFVVSxPQUFPLE9BQU8sSUFJakNZLEVBQU9uRCxpQkFBaUIsU0FBUyxLQUM3Qm9ELEVBQWV2QixVQUFVVSxPQUFPLFVBQ2hDYyxFQUFpQnhCLFVBQVVVLE9BQU8sVUFDbENsQixFQUFZUSxVQUFVVSxPQUFPLFVBRTNCTyxFQUFlLFdBQVksV0FBRWpCLFVBQVVDLElBQUksUUFHeEJuRCxTQUFTVSxjQUFjLGNBQy9CNkIsT0FBUSxJQUFJdUIsTUFBT0MsU0FBU0MsTUFBTSxFQUFFLEdBQUcsR0FDdEQsRUNyQ04sR0FDQWpELElINENJTixFQUFjWSxpQkFBaUIsU0FBUyxLQUNwQ1YsRUFBWXVDLFVBQVVDLElBQUksT0FBTyxJQUdyQ3ZDLEVBQVVTLGlCQUFpQixTQUFVMUIsSUFDakNBLEVBQUVpRixpQkFsQ1MsTUFDZixNQUFNQyxFQUFpQjdFLFNBQVNVLGNBQWMsb0JBRXhDb0UsRUFBZ0I5RSxTQUFTZ0MsY0FBYyxPQUM3QzhDLEVBQWM1QixVQUFVQyxJQUFJLHFCQUM1QnRDLEVBQVlvQixhQUFhNkMsRUFBZWpFLEVBQVllLFNBQVNmLEVBQVlpQixrQkFBa0IsSUFFM0YsTUFBTWlELEVBQWtCLElBQUl0QixNQUM1QnNCLEVBQWdCN0UsSUFBTSxFQUN0QjRFLEVBQWNuQixZQUFZb0IsR0FFMUIsTUFBTUMsRUFBbUJoRixTQUFTZ0MsY0FBYyxVQUNoRGdELEVBQWlCQyxHQUFLLFVBQ3RCRCxFQUFpQnpELFlBQWNzRCxFQUFldEMsTUFDOUN1QyxFQUFjbkIsWUFBWXFCLEdBQzFCSCxFQUFldEMsTUFBTyxHQUN0QjVCLEVBQVl1QyxVQUFVckIsT0FBTyxRQUU3QixNQUFNcUQsRUFBYSxJQUFJekIsTUFDdkJ5QixFQUFXaEYsSUFBTSxFQUNqQjRFLEVBQWNuQixZQUFZdUIsR0FFMUJBLEVBQVc3RCxpQkFBaUIsU0FBUyxLQUNoQzZELEVBQXFCLFdBQUVyRCxRQUFRLElBRXBDZCxHQUFnQixFQVVab0UsRUFBWSxJQUdoQnJFLEVBQWFPLGlCQUFpQixTQUFVMUIsSUFDcEMsTUFBTWtGLEVBQWlCN0UsU0FBU1UsY0FBYyxvQkFDOUNmLEVBQUVpRixpQkFDRmpFLEVBQVl1QyxVQUFVckIsT0FBTyxRQUM3QmdELEVBQWV0QyxNQUFPLEVBQUUsSUMrQlIsTUFDcEIsTUFBTTZDLEVBQWdCcEYsU0FBU1UsY0FBYyxvQkFDdkMyRSxFQUFtQnJGLFNBQVNVLGNBQWMsdUJBQzFDK0QsRUFBaUJ6RSxTQUFTVSxjQUFjLGFBQ3hDZ0UsRUFBbUIxRSxTQUFTVSxjQUFjLGVBRWhEMEUsRUFBYy9ELGlCQUFpQixTQUFVMUIsSUFDckNBLEVBQUVpRixpQkFDRjFDLElBQ0F1QyxFQUFldkIsVUFBVXJCLE9BQU8sVUFDaEM2QyxFQUFpQnhCLFVBQVVyQixPQUFPLFVBQ1o3QixTQUFTVSxjQUFjLG1CQUMvQndDLFVBQVVyQixPQUFPLE9BQU8sSUFHMUN3RCxFQUFpQmhFLGlCQUFpQixTQUFVMUIsSUFDeENBLEVBQUVpRixpQkFDRkgsRUFBZXZCLFVBQVVyQixPQUFPLFVBQ2hDNkMsRUFBaUJ4QixVQUFVckIsT0FBTyxVQUNaN0IsU0FBU1UsY0FBYyxtQkFDL0J3QyxVQUFVckIsT0FBTyxRQUM1QndELEVBQTJCLFdBQVksV0FBWSxXQUFFbkMsVUFBVXJCLE9BQU8sU0FBUyxHQUNyRixFRTVHTHlELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tBZGQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHRhc2tJY29uIGZyb20gXCIuL2ltYWdlcy90YXNrX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnBuZ1wiO1xyXG5pbXBvcnQgY3Jvc3NJY29uIGZyb20gXCIuL2ltYWdlcy9jcm9zcy5wbmdcIjtcclxuXHJcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0XCIpO1xyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idXR0b25cIik7XHJcbmNvbnN0IG5ld1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdHNcIik7XHJcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2xlLWJ1dHRvblwiKVxyXG5cclxuY29uc3QgYWNjZXNzUHJvamVjdHMgPSAoKT0+eyAvLyBhY2Nlc3MgbmFtZXMgb2YgcHJvamVjdHNcclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0XCIpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9IHByb2plY3QudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSAoKT0+ey8vIGNyZWF0ZXMgbmV3IHByb2plY3QgZGl2IGFuZCBhcHBlbmRzIGJlZm9yZSB0aGUgYWRkIGJ1dHRvblxyXG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRQb3B1cFwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LXRpdGxlXCIpXHJcbiAgICBuZXdQcm9qZWN0cy5pbnNlcnRCZWZvcmUobmV3UHJvamVjdERpdiwgbmV3UHJvamVjdHMuY2hpbGRyZW5bbmV3UHJvamVjdHMuY2hpbGRFbGVtZW50Q291bnQtMV0pO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbmV3UHJvamVjdEltYWdlLnNyYyA9IHRhc2tJY29uO1xyXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pZCA9IFwicHJvamVjdFwiO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lLnZhbHVlO1xyXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlPSBcIlwiO1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcblxyXG4gICAgY29uc3QgY3Jvc3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY3Jvc3NJbWFnZS5zcmMgPSBjcm9zc0ljb247XHJcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNyb3NzSW1hZ2UpO1xyXG5cclxuICAgIGNyb3NzSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgKGNyb3NzSW1hZ2UucGFyZW50Tm9kZSkucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgYWNjZXNzUHJvamVjdHMoKTtcclxufVxyXG5cclxuY29uc3QgcHJvamVjdEFkZGluZ0V2ZW50cyA9KCk9PntcclxuICAgIGFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcInNob3dcIik7Ly8gZm9ybSBmb3IgbmV3IHByb2plY3QgXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYWRkUHJvamVjdCgpOy8vIHN1Ym1pdHMgZm9ybVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEFkZFBvcHVwXCIpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlPSBcIlwiOyAvLyBjYW5jZWxzIHRoZSBmb3JtIGV4ZWN1dGlvblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWNjZXNzUHJvamVjdHMsIHByb2plY3RBZGRpbmdFdmVudHN9XHJcbmV4cG9ydCB7cHJvamVjdEZvcm0sIG5ld1Byb2plY3RzfTsiLCJpbXBvcnQgY2lyY2xlIGZyb20gXCIuL2ltYWdlcy9jaXJjZWwucG5nXCI7XHJcbmltcG9ydCBjcm9zcyBmcm9tIFwiLi9pbWFnZXMvY3Jvc3MucG5nXCI7XHJcbmltcG9ydCBiZ0ljb25BZnRlciBmcm9tIFwiLi9pbWFnZXMvdGFzay1hcmVhLWltYWdlLWFmdGVyLnBuZ1wiO1xyXG5pbXBvcnQgYmdJY29uQmVmb3JlIGZyb20gXCIuL2ltYWdlcy90YXNrLWFyZWEtaW1hZ2UucG5nXCI7XHJcblxyXG5jb25zdCBhbGxUYXNrQXJyYXkgPSBbXTtcclxuY29uc3QgY2hlY2tUYXNrRXhpc3RzID0gKCk9PntcclxuICAgIGNvbnN0IHRhc2tzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgICBjb25zdCBiZ0ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1pbWFnZVwiKTtcclxuICAgIGlmKHRhc2tzU2VjdGlvbi5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9PT0gXCJObyBUYXNrIFlldCFcIil7Ly8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSB0YXNrXHJcbiAgICAgICAgdGFza3NTZWN0aW9uLmNoaWxkcmVuWzBdLnJlbW92ZSgpOy8vIGlmIHRhc2sgcmVtb3ZlcyB0aGUgaDFcclxuICAgICAgICBiZ0ltYWdlLnNyYyA9IGJnSWNvbkFmdGVyOy8vIGNobmFnZXMgYmcgaW1hZ2VcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGFza3NTZWN0aW9uLmNoaWxkRWxlbWVudENvdW50ID09PSAxKXtcclxuICAgICAgICBjb25zdCBmcmVlVGltZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgZnJlZVRpbWVQYXJhLnRleHRDb250ZW50ID0gXCJObyBUYXNrIFlldCFcIjtcclxuICAgICAgICB0YXNrc1NlY3Rpb24uaW5zZXJ0QmVmb3JlKGZyZWVUaW1lUGFyYSwgdGFza3NTZWN0aW9uLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBiZ0ltYWdlLnNyYyA9IGJnSWNvbkJlZm9yZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgVGFzayA9IGNsYXNzey8vIGNvbnN0cnVjdG9yIGZvciBjb2xsZWN0aW5nIG5ld1Rhc2sgaW5mb1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGUsIHR5cGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZGluZ05ld1Rhc2soKXsvLyBjcmVhdGVzIGFuZCBhcHBlbmRzIG5ldyB0YXNrIFxyXG4gICAgICAgIGNvbnN0IHRhc2tzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGhpcy5kYXRlO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGFza1N0YXR1cy50ZXh0Q29udGVudCA9IHRoaXMudHlwZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW9wdGlvblwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG9uZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBkb25lSWNvbi5zcmMgPSBjaXJjbGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBkZWxldGVJY29uLnNyYyA9IGNyb3NzO1xyXG5cclxuICAgICAgICB0YXNrc1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3VGFza0Rpdik7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcclxuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tCdXR0b25zKTtcclxuICAgICAgICB0YXNrQnV0dG9ucy5hcHBlbmRDaGlsZChkb25lSWNvbik7XHJcbiAgICAgICAgdGFza0J1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICAgICAgY2hlY2tUYXNrRXhpc3RzKCk7XHJcblxyXG4gICAgICAgIGRvbmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoKGRvbmVJY29uLnBhcmVudE5vZGUpLnBhcmVudE5vZGUpLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZVwiKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgICgoZGVsZXRlSWNvbi5wYXJlbnROb2RlKS5wYXJlbnROb2RlKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgY2hlY2tUYXNrRXhpc3RzKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYWRkTmV3VGFzayA9ICgpPT57XHJcbiAgICBjb25zdCB0YXNrRm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tbmFtZVwiKTtcclxuICAgIGNvbnN0IHRhc2tGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1kYXRlXCIpO1xyXG4gICAgY29uc3QgdGFza0Zvcm1UeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXR5cGVcIik7XHJcbiAgICAvLyBnZXRzIHZhbHVlIGZyb20gdGhlIGZvcm1cclxuICAgIGNvbnN0IHRhc2tGb3JtTmFtZVZhbHVlID0gdGFza0Zvcm1OYW1lLnZhbHVlO1xyXG4gICAgY29uc3QgdGFza0Zvcm1EYXRlVmFsdWUgPSB0YXNrRm9ybURhdGUudmFsdWVcclxuICAgIGNvbnN0IHRhc2tGb3JtVHlwZVZhbHVlID0gdGFza0Zvcm1UeXBlLnZhbHVlXHJcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrRm9ybU5hbWVWYWx1ZSwgdGFza0Zvcm1EYXRlVmFsdWUsIHRhc2tGb3JtVHlwZVZhbHVlKTtcclxuICAgIG5ld1Rhc2suYWRkaW5nTmV3VGFzaygpOy8vIGNhbGxpbmcgZnVuY3Rpb25cclxuXHJcbiAgICBhbGxUYXNrQXJyYXkucHVzaChuZXdUYXNrKTtcclxuICAgIC8vIHJlc2V0dGluZyBmb3JtIHZhbHVlXHJcbiAgICB0YXNrRm9ybU5hbWUudmFsdWUgPSBcIlwiO1xyXG4gICAgdGFza0Zvcm1EYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcclxuICAgIHRhc2tGb3JtVHlwZS52YWx1ZSA9IFwiTm9ybWFsXCI7XHJcbiAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkaW5nXCIpO1xyXG4gICAgY29uc29sZS5sb2coYWxsVGFza0FycmF5KTtcclxufVxyXG5cclxuY29uc3QgYWRkTmV3VGFza0V2ZW50ID0gKCk9PntcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGNhbmNlbFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC10YXNrLWJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGFkZEtleVZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52ZXJ0aWNhbFwiKTtcclxuICAgIGNvbnN0IGFkZEtleUhvcml6b250b2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvcml6b250b2xcIik7XHJcblxyXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFkZE5ld1Rhc2soKTtcclxuICAgICAgICBhZGRLZXlWZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkaW5nXCIpO1xyXG4gICAgICAgIGFkZEtleUhvcml6b250b2wuY2xhc3NMaXN0LnJlbW92ZShcImFkZGluZ1wiKTsvLyBhbmltYXRpb24gZm9yIGFkZCBpY29uIFxyXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICB9KVxyXG5cclxuICAgIGNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhZGRLZXlWZXJ0aWNhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkaW5nXCIpO1xyXG4gICAgICAgIGFkZEtleUhvcml6b250b2wuY2xhc3NMaXN0LnJlbW92ZShcImFkZGluZ1wiKTsvLyBhbmltYXRpb24gZm9yIGFkZCBpY29uIFxyXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgKCgoY2FuY2VsVGFza0J1dHRvbi5wYXJlbnROb2RlKS5wYXJlbnROb2RlKS5wYXJlbnROb2RlKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkaW5nXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IHthZGROZXdUYXNrRXZlbnR9OyIsImltcG9ydCB7cHJvamVjdEZvcm0sbmV3UHJvamVjdHN9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmNvbnN0IERPTWFuaW1hdGlvbiA9ICgpPT57XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcclxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xyXG4gICAgY29uc3QgYWRkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKVxyXG4gICAgY29uc3QgYWRkS2V5VmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlcnRpY2FsXCIpO1xyXG4gICAgY29uc3QgYWRkS2V5SG9yaXpvbnRvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXpvbnRvbFwiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xyXG5cclxuXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+eyAvLyBmb3IgbWVudSBiYXIgdmlzaWJsZVxyXG4gICAgICAgIGlmKG5ld1Byb2plY3RzLmNoaWxkRWxlbWVudENvdW50ID4yKXtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmV3LXByb2plY3QtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3REaXYuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7Ly8gZm9yIHJlbW92aW5nIHRoZSBuZXdQcm9qZWN0c0Zvcm0gd2l0aCBtZW51IGNsb3NpbmdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTsgICAgXHJcbiAgICAgICAgdGFza0FyZWEuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZEtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PnsgLy8gZm9yIGFkZGluZyB0YXNrIFxyXG4gICAgICAgIGFkZEtleVZlcnRpY2FsLmNsYXNzTGlzdC50b2dnbGUoXCJhZGRpbmdcIik7XHJcbiAgICAgICAgYWRkS2V5SG9yaXpvbnRvbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkaW5nXCIpOy8vIGFuaW1hdGlvbiBmb3IgYWRkIGljb25cclxuICAgICAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkaW5nXCIpOy8vIG1ha2VzIHRhc2sgZm9ybSB2aXNpYmxlXHJcblxyXG4gICAgICAgICgobWVudS5wYXJlbnROb2RlKS5wYXJlbnROb2RlKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG5cclxuICAgICAgICAvLyB3aGVuIGZvcm0gb3BlbnMgZGF0ZSBpcyBzZXQgaW5pdGlhbGx5IHRvIHRvZGF5cyBkYXRlXHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRhdGVcIik7XHJcbiAgICAgICAgdGFza0Zvcm1EYXRlLnZhbHVlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLDEwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01hbmltYXRpb247IiwiaW1wb3J0IERPTWFuaW1hdGlvbiBmcm9tIFwiLi9tb2R1bGVzL2luaXRpYWxET01cIjtcclxuaW1wb3J0IHsgYWNjZXNzUHJvamVjdHMsIHByb2plY3RBZGRpbmdFdmVudHMgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgYWRkTmV3VGFza0V2ZW50IH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrQWRkXCI7XHJcblxyXG5ET01hbmltYXRpb24oKTtcclxuYWNjZXNzUHJvamVjdHMoKTtcclxucHJvamVjdEFkZGluZ0V2ZW50cygpO1xyXG5hZGROZXdUYXNrRXZlbnQoKTtcclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJFcnJvciIsInJlcGxhY2UiLCJwIiwiYWRkTmV3UHJvamVjdCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0Rm9ybSIsImFkZEJ1dHRvbiIsIm5ld1Byb2plY3RzIiwiY2FuY2VsQnV0dG9uIiwiYWNjZXNzUHJvamVjdHMiLCJwcm9qZWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9qZWN0VGl0bGUiLCJmb3JFYWNoIiwicHJvamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZE5vZGVzIiwidGV4dENvbnRlbnQiLCJhbGxUYXNrQXJyYXkiLCJjaGVja1Rhc2tFeGlzdHMiLCJ0YXNrc1NlY3Rpb24iLCJiZ0ltYWdlIiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJjaGlsZEVsZW1lbnRDb3VudCIsImZyZWVUaW1lUGFyYSIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJhZGROZXdUYXNrIiwidGFza0Zvcm1OYW1lIiwidGFza0Zvcm1EYXRlIiwidGFza0Zvcm1UeXBlIiwidGFza0Zvcm1OYW1lVmFsdWUiLCJ2YWx1ZSIsInRhc2tGb3JtRGF0ZVZhbHVlIiwidGFza0Zvcm1UeXBlVmFsdWUiLCJhZGRUYXNrRm9ybSIsIm5ld1Rhc2siLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGF0ZSIsInR5cGUiLCJhZGRpbmdOZXdUYXNrIiwibmV3VGFza0RpdiIsImNsYXNzTGlzdCIsImFkZCIsInRhc2tOYW1lIiwidGFza0RhdGUiLCJ0YXNrU3RhdHVzIiwidGFza0J1dHRvbnMiLCJkb25lSWNvbiIsIkltYWdlIiwiZGVsZXRlSWNvbiIsImFwcGVuZENoaWxkIiwidG9nZ2xlIiwicHVzaCIsIkRhdGUiLCJ0b0pTT04iLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwibmF2QmFyIiwidGFza0FyZWEiLCJ0YXNrcyIsInRhc2siLCJhZGRLZXkiLCJhZGRLZXlWZXJ0aWNhbCIsImFkZEtleUhvcml6b250b2wiLCJ4IiwicHJldmVudERlZmF1bHQiLCJuZXdQcm9qZWN0TmFtZSIsIm5ld1Byb2plY3REaXYiLCJuZXdQcm9qZWN0SW1hZ2UiLCJuZXdQcm9qZWN0QnV0dG9uIiwiaWQiLCJjcm9zc0ltYWdlIiwiYWRkUHJvamVjdCIsImFkZFRhc2tCdXR0b24iLCJjYW5jZWxUYXNrQnV0dG9uIiwiYWRkTmV3VGFza0V2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==