function gsInitTabs(e){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("gspb-tabs");for(let s=0;s<t.length;s++){let a=t[s];if(a.classList.contains("tabswiper")){a.classList.add("gsswiper-container-"+s);let n=a.getAttribute("data-autoplay"),i=1e3*parseInt(a.getAttribute("data-autoplaytime")),l="true"===n&&{delay:i,disableOnInteraction:!0};window["swiper"+s]=new Swiper(".gsswiper-container-"+s+" .gswipertabs",{slidesPerView:1,spaceBetween:0,grabCursor:!0,speed:700,on:{slideChange:function(e){let t=a.querySelectorAll(".t-btn");findActivetabElementAndRemoveIt(t),t[e.activeIndex].classList.add("active")}},autoplay:l})}}var r=document.getElementsByClassName("t-btn");for(let c=0;c<r.length;c++)r[c].addEventListener("click",function(t){let s=t.currentTarget;if(!s.classList.contains("active")){let a=s.closest(e),n=a.querySelector(".t-btn-container").querySelectorAll(".t-btn"),i=a.querySelector(".swiper-wrapper").querySelectorAll(":scope > .t-panel");findActivetabElementAndRemoveIt(n),findActivetabElementAndRemoveIt(i),s.classList.add("active");let l=Array.prototype.slice.call(s.parentNode.children).indexOf(s);var r=i[l];a.classList.contains("tabswiper")?a.querySelector(".gswipertabs").swiper.slideTo(l,500,!1):r.classList.add("active")}})})}function findActivetabElementAndRemoveIt(e){"use strict";Array.prototype.forEach.call(e,function(e){e.classList.remove("active")})}gsInitTabs(".gspb-tabs");