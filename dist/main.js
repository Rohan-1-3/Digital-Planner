(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var c=e.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var o=c.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1f757ac1762962d60ddc.png",c=()=>{const e=document.querySelectorAll("#project"),t=document.querySelector(".task-list");e.forEach((e=>{e.addEventListener("click",(()=>{t.childNodes[1].textContent=e.textContent}))}))},o=document.querySelector(".new-project"),r=document.querySelector(".project-form"),n=document.querySelector(".add-button"),s=document.querySelector(".new-projects"),l=document.querySelector(".cancle-button");o.addEventListener("click",(()=>{r.classList.add("show")})),n.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".projectAddPopup"),o=document.createElement("div");s.insertBefore(o,s.children[s.childElementCount-1]);const n=new Image;n.src=t,o.appendChild(n);const l=document.createElement("button");l.id="project",l.textContent=e.value,o.appendChild(l),e.value="",r.classList.remove("show"),document.createElement("img"),c()})()})),l.addEventListener("click",(e=>{e.preventDefault(),r.classList.remove("show")})),(()=>{const e=document.querySelector(".menu"),t=document.querySelector(".projects"),c=document.querySelector(".task-list"),o=document.querySelector(".tasks"),r=document.querySelector(".task"),n=document.querySelector(".add-task"),s=document.querySelector(".vertical"),l=document.querySelector(".horizontol"),d=document.querySelector(".add-task-form");e.addEventListener("click",(()=>{e.classList.toggle("change"),t.classList.toggle("show"),c.classList.toggle("show"),d.classList.toggle("show"),o.classList.toggle("show"),r.classList.toggle("show")})),n.addEventListener("click",(()=>{s.classList.toggle("adding"),l.classList.toggle("adding"),d.classList.toggle("adding")}))})(),c()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVTBCLE9BQU8sUUFDdkJMLEVBQUtyQixVQUFVMEIsT0FBTyxPQUFPLElBR2pDSixFQUFPOUIsaUJBQWlCLFNBQVMsS0FDN0IrQixFQUFldkIsVUFBVTBCLE9BQU8sVUFDaENGLEVBQWlCeEIsVUFBVTBCLE9BQU8sVUFDbENELEVBQVl6QixVQUFVMEIsT0FBTyxTQUFTLEdBQ3hDLEVDdEJOQyxHQUNBMUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHRhc2tJY29uIGZyb20gXCIvVXNlcnMvUm9oYW4vRGVza3RvcC9KU19QcmFjdGljZS9KYXZhU2NyaXB0Q291cnNlT2RpblByb2plY3QvVG9Eb0xpc3QvZGlzdC9pbWFnZXMvdGFza19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5wbmdcIlxyXG5jb25zdCBET01hbmltYXRpb24gPSAoKT0+e1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XHJcbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xyXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1wiKTtcclxuICAgIGNvbnN0IGFkZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIilcclxuICAgIGNvbnN0IGFkZEtleVZlcnRpY2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52ZXJ0aWNhbFwiKTtcclxuICAgIGNvbnN0IGFkZEtleUhvcml6b250b2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvcml6b250b2xcIik7XHJcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcclxuXHJcblxyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgbmF2QmFyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpOyAgICBcclxuICAgICAgICB0YXNrQXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICB0YXNrcy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkS2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIGFkZEtleVZlcnRpY2FsLmNsYXNzTGlzdC50b2dnbGUoXCJhZGRpbmdcIik7XHJcbiAgICAgICAgYWRkS2V5SG9yaXpvbnRvbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkaW5nXCIpO1xyXG4gICAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhZGRpbmdcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgYWNjZXNzUHJvamVjdHMgPSAoKT0+e1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2plY3RcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50ID0gcHJvamVjdC50ZXh0Q29udGVudDtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJ1dHRvblwiKTtcclxuY29uc3QgbmV3UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0c1wiKTtcclxuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jbGUtYnV0dG9uXCIpXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0ID0gKCk9PntcclxuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkUG9wdXBcIik7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Byb2plY3RzLmluc2VydEJlZm9yZShuZXdQcm9qZWN0RGl2LCBuZXdQcm9qZWN0cy5jaGlsZHJlbltuZXdQcm9qZWN0cy5jaGlsZEVsZW1lbnRDb3VudC0xXSk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5ld1Byb2plY3RJbWFnZS5zcmMgPSB0YXNrSWNvbjtcclxuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEltYWdlKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pZCA9IFwicHJvamVjdFwiO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lLnZhbHVlO1xyXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlPSBcIlwiO1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGFjY2Vzc1Byb2plY3RzKCk7XHJcbn1cclxuXHJcbmFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxufSk7XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkUHJvamVjdCgpO1xyXG59KVxyXG5cclxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG59KVxyXG5cclxuZXhwb3J0IHtET01hbmltYXRpb24sIGFjY2Vzc1Byb2plY3RzLGFkZFByb2plY3R9OyIsImltcG9ydCB7IERPTWFuaW1hdGlvbiwgYWNjZXNzUHJvamVjdHMsIGFkZFByb2plY3QgfSBmcm9tIFwiLi9tb2R1bGVzL2luaXRpYWxET01cIjtcclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0RGl2LmNoaWxkcmVuKVxyXG5ET01hbmltYXRpb24oKTtcclxuYWNjZXNzUHJvamVjdHMoKTsgICBcclxuLy8gYWRkUHJvamVjdCgpOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImFjY2Vzc1Byb2plY3RzIiwicHJvamVjdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJvamVjdFRpdGxlIiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJwcm9qZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkTm9kZXMiLCJ0ZXh0Q29udGVudCIsImFkZE5ld1Byb2plY3QiLCJwcm9qZWN0Rm9ybSIsImFkZEJ1dHRvbiIsIm5ld1Byb2plY3RzIiwiY2FuY2VsQnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicHJldmVudERlZmF1bHQiLCJuZXdQcm9qZWN0TmFtZSIsIm5ld1Byb2plY3REaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5ld1Byb2plY3RJbWFnZSIsIkltYWdlIiwiYXBwZW5kQ2hpbGQiLCJuZXdQcm9qZWN0QnV0dG9uIiwiaWQiLCJ2YWx1ZSIsInJlbW92ZSIsImFkZFByb2plY3QiLCJtZW51IiwibmF2QmFyIiwidGFza0FyZWEiLCJ0YXNrcyIsInRhc2siLCJhZGRLZXkiLCJhZGRLZXlWZXJ0aWNhbCIsImFkZEtleUhvcml6b250b2wiLCJhZGRUYXNrRm9ybSIsInRvZ2dsZSIsIkRPTWFuaW1hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=