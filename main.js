(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var c=e.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var o=c.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1f757ac1762962d60ddc.png",c=e.p+"d367d5dbff6ca8e7e2f2.png",o=document.querySelector(".new-project"),r=document.querySelector(".project-form"),n=document.querySelector(".add-button"),s=document.querySelector(".new-projects"),l=document.querySelector(".cancle-button"),d=()=>{const e=document.querySelectorAll("#project"),t=document.querySelector(".task-list");e.forEach((e=>{e.addEventListener("click",(()=>{t.childNodes[1].textContent=e.textContent}))}))};(()=>{const e=document.querySelector(".menu"),t=document.querySelector(".projects"),c=document.querySelector(".task-list"),o=document.querySelector(".tasks"),n=document.querySelector(".task"),l=document.querySelector(".add-task"),d=document.querySelector(".vertical"),i=document.querySelector(".horizontol"),a=document.querySelector(".add-task-form");e.addEventListener("click",(()=>{s.childElementCount>2&&document.querySelectorAll(".new-project-title").forEach((e=>{e.classList.toggle("show")})),e.classList.toggle("change"),t.classList.toggle("show"),c.classList.toggle("show"),a.classList.toggle("show"),r.classList.remove("show"),o.classList.toggle("show"),n.classList.toggle("show")})),l.addEventListener("click",(()=>{d.classList.toggle("adding"),i.classList.toggle("adding"),a.classList.toggle("adding")}))})(),d(),o.addEventListener("click",(()=>{r.classList.add("show")})),n.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".projectAddPopup"),o=document.createElement("div");o.classList.add("new-project-title"),s.insertBefore(o,s.children[s.childElementCount-1]);const n=new Image;n.src=t,o.appendChild(n);const l=document.createElement("button");l.id="project",l.textContent=e.value,o.appendChild(l),e.value="",r.classList.remove("show");const i=new Image;i.src=c,o.appendChild(i),i.addEventListener("click",(()=>{i.parentNode.remove()})),d()})()})),l.addEventListener("click",(e=>{const t=document.querySelector(".projectAddPopup");e.preventDefault(),r.classList.remove("show"),t.value=""}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQWdCM0MsSUFBTSxFQUN0QnVDLEVBQWNNLFlBQVlGLEdBRTFCLE1BQU1HLEVBQW1CaEQsU0FBUzBDLGNBQWMsVUFDaERNLEVBQWlCQyxHQUFLLFVBQ3RCRCxFQUFpQnpCLFlBQWNpQixFQUFlVSxNQUM5Q1QsRUFBY00sWUFBWUMsR0FDMUJSLEVBQWVVLE1BQU8sR0FDdEJ2QyxFQUFZd0IsVUFBVUUsT0FBTyxRQUU3QixNQUFNYyxFQUFhLElBQUlMLE1BQ3ZCSyxFQUFXakQsSUFBTSxFQUNqQnVDLEVBQWNNLFlBQVlJLEdBRTFCQSxFQUFXOUIsaUJBQWlCLFNBQVMsS0FDaEM4QixFQUFxQixXQUFFZCxRQUFRLElBRXBDdEIsR0FBZ0IsRUFVWnFDLEVBQVksSUFHaEJ0QyxFQUFhTyxpQkFBaUIsU0FBVTFCLElBQ3BDLE1BQU02QyxFQUFpQnhDLFNBQVNVLGNBQWMsb0JBQzlDZixFQUFFNEMsaUJBQ0Y1QixFQUFZd0IsVUFBVUUsT0FBTyxRQUM3QkcsRUFBZVUsTUFBTyxFQUFFLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgdGFza0ljb24gZnJvbSBcIi4vaW1hZ2VzL3Rhc2tfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDgucG5nXCI7XHJcbmltcG9ydCBjcm9zc0ljb24gZnJvbSBcIi4vaW1hZ2VzL2Nyb3NzLnBuZ1wiO1xyXG5cclxuY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJ1dHRvblwiKTtcclxuY29uc3QgbmV3UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0c1wiKTtcclxuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jbGUtYnV0dG9uXCIpXHJcblxyXG5jb25zdCBhY2Nlc3NQcm9qZWN0cyA9ICgpPT57IC8vIGFjY2VzcyBuYW1lcyBvZiBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2plY3RcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gcHJvamVjdC50ZXh0Q29udGVudDtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9ICgpPT57Ly8gY3JlYXRlcyBuZXcgcHJvamVjdCBkaXYgYW5kIGFwcGVuZHMgYmVmb3JlIHRoZSBhZGQgYnV0dG9uXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEFkZFBvcHVwXCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtdGl0bGVcIilcclxuICAgIG5ld1Byb2plY3RzLmluc2VydEJlZm9yZShuZXdQcm9qZWN0RGl2LCBuZXdQcm9qZWN0cy5jaGlsZHJlbltuZXdQcm9qZWN0cy5jaGlsZEVsZW1lbnRDb3VudC0xXSk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBuZXdQcm9qZWN0SW1hZ2Uuc3JjID0gdGFza0ljb247XHJcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RJbWFnZSk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmlkID0gXCJwcm9qZWN0XCI7XHJcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gbmV3UHJvamVjdE5hbWUudmFsdWU7XHJcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xyXG4gICAgbmV3UHJvamVjdE5hbWUudmFsdWU9IFwiXCI7XHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuXHJcbiAgICBjb25zdCBjcm9zc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjcm9zc0ltYWdlLnNyYyA9IGNyb3NzSWNvbjtcclxuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoY3Jvc3NJbWFnZSk7XHJcblxyXG4gICAgY3Jvc3NJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAoY3Jvc3NJbWFnZS5wYXJlbnROb2RlKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcbiAgICBhY2Nlc3NQcm9qZWN0cygpO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0QWRkaW5nRXZlbnRzID0oKT0+e1xyXG4gICAgYWRkTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTsvLyBmb3JtIGZvciBuZXcgcHJvamVjdCBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhZGRQcm9qZWN0KCk7Ly8gc3VibWl0cyBmb3JtXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkUG9wdXBcIilcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudmFsdWU9IFwiXCI7IC8vIGNhbmNlbHMgdGhlIGZvcm0gZXhlY3V0aW9uXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHthY2Nlc3NQcm9qZWN0cywgcHJvamVjdEFkZGluZ0V2ZW50c31cclxuZXhwb3J0IHtwcm9qZWN0Rm9ybSwgbmV3UHJvamVjdHN9OyIsImltcG9ydCB7cHJvamVjdEZvcm0sbmV3UHJvamVjdHN9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmNvbnN0IERPTWFuaW1hdGlvbiA9ICgpPT57XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcclxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xyXG4gICAgY29uc3QgYWRkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKVxyXG4gICAgY29uc3QgYWRkS2V5VmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlcnRpY2FsXCIpO1xyXG4gICAgY29uc3QgYWRkS2V5SG9yaXpvbnRvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXpvbnRvbFwiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xyXG5cclxuXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+eyAvLyBmb3IgbWVudSBiYXIgdmlzaWJsZVxyXG4gICAgICAgIGlmKG5ld1Byb2plY3RzLmNoaWxkRWxlbWVudENvdW50ID4yKXtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmV3LXByb2plY3QtdGl0bGVcIik7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3REaXYuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7ICAgIFxyXG4gICAgICAgIHRhc2tBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRLZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57IC8vIGZvciBhZGRpbmcgdGFzayBcclxuICAgICAgICBhZGRLZXlWZXJ0aWNhbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkaW5nXCIpO1xyXG4gICAgICAgIGFkZEtleUhvcml6b250b2wuY2xhc3NMaXN0LnRvZ2dsZShcImFkZGluZ1wiKTsvLyBhbmltYXRpb24gZm9yIGFkZCBpY29uXHJcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFkZGluZ1wiKTsvLyBtYWtlcyB0YXNrIGZvcm0gdmlzaWJsZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTWFuaW1hdGlvbiIsImltcG9ydCBET01hbmltYXRpb24gZnJvbSBcIi4vbW9kdWxlcy9pbml0aWFsRE9NXCI7XHJcbmltcG9ydCB7IGFjY2Vzc1Byb2plY3RzLCBwcm9qZWN0QWRkaW5nRXZlbnRzIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XHJcblxyXG5cclxuRE9NYW5pbWF0aW9uKCk7XHJcbmFjY2Vzc1Byb2plY3RzKCk7XHJcbnByb2plY3RBZGRpbmdFdmVudHMoKTtcclxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJFcnJvciIsInJlcGxhY2UiLCJwIiwiYWRkTmV3UHJvamVjdCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0Rm9ybSIsImFkZEJ1dHRvbiIsIm5ld1Byb2plY3RzIiwiY2FuY2VsQnV0dG9uIiwiYWNjZXNzUHJvamVjdHMiLCJwcm9qZWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9qZWN0VGl0bGUiLCJmb3JFYWNoIiwicHJvamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZE5vZGVzIiwidGV4dENvbnRlbnQiLCJtZW51IiwibmF2QmFyIiwidGFza0FyZWEiLCJ0YXNrcyIsInRhc2siLCJhZGRLZXkiLCJhZGRLZXlWZXJ0aWNhbCIsImFkZEtleUhvcml6b250b2wiLCJhZGRUYXNrRm9ybSIsImNoaWxkRWxlbWVudENvdW50IiwieCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImFkZCIsInByZXZlbnREZWZhdWx0IiwibmV3UHJvamVjdE5hbWUiLCJuZXdQcm9qZWN0RGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImNoaWxkcmVuIiwibmV3UHJvamVjdEltYWdlIiwiSW1hZ2UiLCJhcHBlbmRDaGlsZCIsIm5ld1Byb2plY3RCdXR0b24iLCJpZCIsInZhbHVlIiwiY3Jvc3NJbWFnZSIsImFkZFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9