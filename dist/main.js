(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var c=e.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var o=c.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1f757ac1762962d60ddc.png",c=e.p+"d367d5dbff6ca8e7e2f2.png",o=()=>{const e=document.querySelectorAll("#project"),t=document.querySelector(".task-list");e.forEach((e=>{e.addEventListener("click",(()=>{t.childNodes[1].textContent=e.textContent}))}))},r=document.querySelector(".new-project"),n=document.querySelector(".project-form"),s=document.querySelector(".add-button"),l=document.querySelector(".new-projects"),d=document.querySelector(".cancle-button");r.addEventListener("click",(()=>{n.classList.add("show")})),s.addEventListener("click",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".projectAddPopup"),r=document.createElement("div");r.classList.add("new-project-title"),l.insertBefore(r,l.children[l.childElementCount-1]);const s=new Image;s.src=t,r.appendChild(s);const d=document.createElement("button");d.id="project",d.textContent=e.value,r.appendChild(d),e.value="",n.classList.remove("show");const a=new Image;a.src=c,r.appendChild(a),o()})()})),d.addEventListener("click",(e=>{const t=document.querySelector(".projectAddPopup");e.preventDefault(),n.classList.remove("show"),t.value=""})),(()=>{const e=document.querySelector(".menu"),t=document.querySelector(".projects"),c=document.querySelector(".task-list"),o=document.querySelector(".tasks"),r=document.querySelector(".task"),n=document.querySelector(".add-task"),s=document.querySelector(".vertical"),l=document.querySelector(".horizontol"),d=document.querySelector(".add-task-form");e.addEventListener("click",(()=>{e.classList.toggle("change"),t.classList.toggle("show"),c.classList.toggle("show"),d.classList.toggle("show"),o.classList.toggle("show"),r.classList.toggle("show")})),n.addEventListener("click",(()=>{s.classList.toggle("adding"),l.classList.toggle("adding"),d.classList.toggle("adding")}))})(),o()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBc0IsQ0FBQyxFQ0QzQkEsRUFBb0JDLEVBQUksV0FDdkIsR0FBMEIsaUJBQWZDLFdBQXlCLE9BQU9BLFdBQzNDLElBQ0MsT0FBT0MsTUFBUSxJQUFJQyxTQUFTLGNBQWIsRUFHaEIsQ0FGRSxNQUFPQyxHQUNSLEdBQXNCLGlCQUFYQyxPQUFxQixPQUFPQSxNQUN4QyxDQUNBLENBUHVCLEcsTUNBeEIsSUFBSUMsRUFDQVAsRUFBb0JDLEVBQUVPLGdCQUFlRCxFQUFZUCxFQUFvQkMsRUFBRVEsU0FBVyxJQUN0RixJQUFJQyxFQUFXVixFQUFvQkMsRUFBRVMsU0FDckMsSUFBS0gsR0FBYUcsSUFDYkEsRUFBU0MsZ0JBQ1pKLEVBQVlHLEVBQVNDLGNBQWNDLE1BQy9CTCxHQUFXLENBQ2YsSUFBSU0sRUFBVUgsRUFBU0kscUJBQXFCLFVBQ3pDRCxFQUFRRSxTQUFRUixFQUFZTSxFQUFRQSxFQUFRRSxPQUFTLEdBQUdILElBQzVELENBSUQsSUFBS0wsRUFBVyxNQUFNLElBQUlTLE1BQU0seURBQ2hDVCxFQUFZQSxFQUFVVSxRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRmpCLEVBQW9Ca0IsRUFBSVgsQyw2RUNnQmxCWSxFQUFpQixLQUNuQixNQUFNQyxFQUFXVixTQUFTVyxpQkFBaUIsWUFDckNDLEVBQWVaLFNBQVNhLGNBQWMsY0FFNUNILEVBQVNJLFNBQVNDLElBQ2RBLEVBQVFDLGlCQUFpQixTQUFTLEtBQzlCSixFQUFhSyxXQUFXLEdBQUdDLFlBQWNILEVBQVFHLFdBQVcsR0FDL0QsR0FDSixFQUdDQyxFQUFnQm5CLFNBQVNhLGNBQWMsZ0JBQ3ZDTyxFQUFjcEIsU0FBU2EsY0FBYyxpQkFDckNRLEVBQVlyQixTQUFTYSxjQUFjLGVBQ25DUyxFQUFjdEIsU0FBU2EsY0FBYyxpQkFDckNVLEVBQWV2QixTQUFTYSxjQUFjLGtCQXNCNUNNLEVBQWNILGlCQUFpQixTQUFTLEtBQ3BDSSxFQUFZSSxVQUFVQyxJQUFJLE9BQU8sSUFHckNKLEVBQVVMLGlCQUFpQixTQUFVckIsSUFDakNBLEVBQUUrQixpQkF6QmEsTUFDZixNQUFNQyxFQUFpQjNCLFNBQVNhLGNBQWMsb0JBQ3hDZSxFQUFnQjVCLFNBQVM2QixjQUFjLE9BQzdDRCxFQUFjSixVQUFVQyxJQUFJLHFCQUM1QkgsRUFBWVEsYUFBYUYsRUFBZU4sRUFBWVMsU0FBU1QsRUFBWVUsa0JBQWtCLElBQzNGLE1BQU1DLEVBQWtCLElBQUlDLE1BQzVCRCxFQUFnQi9CLElBQU0sRUFDdEIwQixFQUFjTyxZQUFZRixHQUMxQixNQUFNRyxFQUFtQnBDLFNBQVM2QixjQUFjLFVBQ2hETyxFQUFpQkMsR0FBSyxVQUN0QkQsRUFBaUJsQixZQUFjUyxFQUFlVyxNQUM5Q1YsRUFBY08sWUFBWUMsR0FDMUJULEVBQWVXLE1BQU8sR0FDdEJsQixFQUFZSSxVQUFVZSxPQUFPLFFBQzdCLE1BQU1DLEVBQWEsSUFBSU4sTUFDdkJNLEVBQVd0QyxJQUFNLEVBQ2pCMEIsRUFBY08sWUFBWUssR0FDMUIvQixHQUFnQixFQVNoQmdDLEVBQVksSUFHaEJsQixFQUFhUCxpQkFBaUIsU0FBVXJCLElBQ3BDLE1BQU1nQyxFQUFpQjNCLFNBQVNhLGNBQWMsb0JBQzlDbEIsRUFBRStCLGlCQUNGTixFQUFZSSxVQUFVZSxPQUFPLFFBQzdCWixFQUFlVyxNQUFPLEVBQUUsSUE5RVAsTUFDakIsTUFBTUksRUFBTzFDLFNBQVNhLGNBQWMsU0FDOUI4QixFQUFTM0MsU0FBU2EsY0FBYyxhQUNoQytCLEVBQVc1QyxTQUFTYSxjQUFjLGNBQ2xDZ0MsRUFBUTdDLFNBQVNhLGNBQWMsVUFDL0JpQyxFQUFPOUMsU0FBU2EsY0FBYyxTQUM5QmtDLEVBQVMvQyxTQUFTYSxjQUFjLGFBQ2hDbUMsRUFBaUJoRCxTQUFTYSxjQUFjLGFBQ3hDb0MsRUFBbUJqRCxTQUFTYSxjQUFjLGVBQzFDcUMsRUFBY2xELFNBQVNhLGNBQWMsa0JBRzNDNkIsRUFBSzFCLGlCQUFpQixTQUFTLEtBQzNCMEIsRUFBS2xCLFVBQVUyQixPQUFPLFVBQ3RCUixFQUFPbkIsVUFBVTJCLE9BQU8sUUFDeEJQLEVBQVNwQixVQUFVMkIsT0FBTyxRQUMxQkQsRUFBWTFCLFVBQVUyQixPQUFPLFFBQzdCTixFQUFNckIsVUFBVTJCLE9BQU8sUUFDdkJMLEVBQUt0QixVQUFVMkIsT0FBTyxPQUFPLElBR2pDSixFQUFPL0IsaUJBQWlCLFNBQVMsS0FDN0JnQyxFQUFleEIsVUFBVTJCLE9BQU8sVUFDaENGLEVBQWlCekIsVUFBVTJCLE9BQU8sVUFDbENELEVBQVkxQixVQUFVMkIsT0FBTyxTQUFTLEdBQ3hDLEVDeEJOQyxHQUNBM0MsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHRhc2tJY29uIGZyb20gXCIuL2ltYWdlcy90YXNrX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnBuZ1wiO1xyXG5pbXBvcnQgY3Jvc3NJY29uIGZyb20gXCIuL2ltYWdlcy9jcm9zcy5wbmdcIjtcclxuXHJcbmNvbnN0IERPTWFuaW1hdGlvbiA9ICgpPT57XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcclxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrXCIpO1xyXG4gICAgY29uc3QgYWRkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKVxyXG4gICAgY29uc3QgYWRkS2V5VmVydGljYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlcnRpY2FsXCIpO1xyXG4gICAgY29uc3QgYWRkS2V5SG9yaXpvbnRvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXpvbnRvbFwiKTtcclxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xyXG5cclxuXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7ICAgIFxyXG4gICAgICAgIHRhc2tBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRLZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgYWRkS2V5VmVydGljYWwuY2xhc3NMaXN0LnRvZ2dsZShcImFkZGluZ1wiKTtcclxuICAgICAgICBhZGRLZXlIb3Jpem9udG9sLmNsYXNzTGlzdC50b2dnbGUoXCJhZGRpbmdcIik7XHJcbiAgICAgICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFkZGluZ1wiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBhY2Nlc3NQcm9qZWN0cyA9ICgpPT57XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdFwiKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRleHRDb250ZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKTtcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnV0dG9uXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RzXCIpO1xyXG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNsZS1idXR0b25cIilcclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSAoKT0+e1xyXG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRQb3B1cFwiKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtdGl0bGVcIilcclxuICAgIG5ld1Byb2plY3RzLmluc2VydEJlZm9yZShuZXdQcm9qZWN0RGl2LCBuZXdQcm9qZWN0cy5jaGlsZHJlbltuZXdQcm9qZWN0cy5jaGlsZEVsZW1lbnRDb3VudC0xXSk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG5ld1Byb2plY3RJbWFnZS5zcmMgPSB0YXNrSWNvbjtcclxuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEltYWdlKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pZCA9IFwicHJvamVjdFwiO1xyXG4gICAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lLnZhbHVlO1xyXG4gICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcclxuICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlPSBcIlwiO1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICBjb25zdCBjcm9zc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjcm9zc0ltYWdlLnNyYyA9IGNyb3NzSWNvbjtcclxuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoY3Jvc3NJbWFnZSlcclxuICAgIGFjY2Vzc1Byb2plY3RzKCk7XHJcbn1cclxuXHJcbmFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxufSk7XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkUHJvamVjdCgpO1xyXG59KVxyXG5cclxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QWRkUG9wdXBcIilcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgbmV3UHJvamVjdE5hbWUudmFsdWU9IFwiXCI7XHJcbn0pXHJcblxyXG5leHBvcnQge0RPTWFuaW1hdGlvbiwgYWNjZXNzUHJvamVjdHMsYWRkUHJvamVjdH07IiwiaW1wb3J0IHsgRE9NYW5pbWF0aW9uLCBhY2Nlc3NQcm9qZWN0c30gZnJvbSBcIi4vbW9kdWxlcy9pbml0aWFsRE9NXCI7XHJcblxyXG5cclxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdERpdi5jaGlsZHJlbilcclxuRE9NYW5pbWF0aW9uKCk7XHJcbmFjY2Vzc1Byb2plY3RzKCk7ICAgXHJcbi8vIGFkZFByb2plY3QoKTsiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJhY2Nlc3NQcm9qZWN0cyIsInByb2plY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2plY3RUaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwicHJvamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZE5vZGVzIiwidGV4dENvbnRlbnQiLCJhZGROZXdQcm9qZWN0IiwicHJvamVjdEZvcm0iLCJhZGRCdXR0b24iLCJuZXdQcm9qZWN0cyIsImNhbmNlbEJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsInByZXZlbnREZWZhdWx0IiwibmV3UHJvamVjdE5hbWUiLCJuZXdQcm9qZWN0RGl2IiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImNoaWxkcmVuIiwiY2hpbGRFbGVtZW50Q291bnQiLCJuZXdQcm9qZWN0SW1hZ2UiLCJJbWFnZSIsImFwcGVuZENoaWxkIiwibmV3UHJvamVjdEJ1dHRvbiIsImlkIiwidmFsdWUiLCJyZW1vdmUiLCJjcm9zc0ltYWdlIiwiYWRkUHJvamVjdCIsIm1lbnUiLCJuYXZCYXIiLCJ0YXNrQXJlYSIsInRhc2tzIiwidGFzayIsImFkZEtleSIsImFkZEtleVZlcnRpY2FsIiwiYWRkS2V5SG9yaXpvbnRvbCIsImFkZFRhc2tGb3JtIiwidG9nZ2xlIiwiRE9NYW5pbWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==