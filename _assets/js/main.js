/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

// ライブラリ
import barba from "@modules/@barba/core";
import LocomotiveScroll from "@modules/locomotive-scroll/dist/locomotive-scroll.js";

// common
import resizeEvent from "./common/resizeEvent";
import firstViewAnimation from "./common/firstViewTrigger";
import replaceHead from "./common/replaceHead";
import { initLoading, endLoading } from "./common/loading";
import {
  addBlendHeader,
  removeBlendHeader,
  pageTransitionHeader,
  scrollHide,
} from "./common/header";
// import inquiryCompleted from './common/inquiryCompleted';
import slideUpLines from "./common/slide-up-lines";
import tabs from "./common/tabs";
import handleScroll from "./common/handleScroll";
import sidebarMenu, { sideBarColor } from "./common/menu";
import dropDownFooter from "./common/dropDownFooter";
import dropDown from "./common/dropDown";

// intersectionObserver
import addClassIntersection from "./intersectionObserver/addClassIntersection";
import toggleChangeBg from "./intersectionObserver/toggleChangeBg";
import followContents from "./intersectionObserver/followContents";

// ドロワーのイベント
import toggleEvent from "./drawer/toggleEvent";
import removeEvent from "./drawer/removeEvent";
import setFillHeight from "./drawer/setFillHeight";

// LocomotiveScroll options
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 0.5,
});

window.onload = endLoading();

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  resizeEvent();
  toggleEvent();
  scrollHide();
});

window.addEventListener("DOMContentLoaded", () => {
  tabs();
  sidebarMenu(scroll);
  console.log("VVV");

  // dropDown();
  // dropDownFooter();
});


firstViewAnimation();
slideUpLines();
window.addEventListener("resize", setFillHeight);
setFillHeight();

pageTransitionHeader();

// barba.js options
barba.init({
  views: [
    {
      namespace: "single",
      afterEnter(data) {
        followContents();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      },
    },
    {
      namespace: "kamsa",
      afterEnter(data) {
        followContents();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
    },
    {
      namespace: "protogetic",
      afterEnter(data) {
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      },
    },
    {
      namespace: "home",
      afterEnter(data) {
        followContents();
        addBlendHeader();
      },
    },
    {
      namespace: "about",
      afterEnter(data) {
        addClassIntersection();
        addBlendHeader();
      },
    },
    {
      namespace: "contact",
      afterEnter(data) {
        addBlendHeader();
        inquiryCompleted();
      },
    },
  ],
});

barba.hooks.before((data) => {
  initLoading();
});

// barba.hooks.beforeLeave((data) => {
//   scroll.destroy();
// });

barba.hooks.beforeEnter((data) => {
  replaceHead(data);
  removeEvent();
  pageTransitionHeader();
  scrollHide();
});

barba.hooks.after((data) => {
  console.log("ddd");
  scroll.init();
  window.scrollTo(0, 0);
  // window.addEventListener("resize", setFillHeight);

  setFillHeight();
  firstViewAnimation();
  endLoading();
  slideUpLines();
});




// const sidebar = container.querySelector('.sidebar');
// if (sidebar) {
//   console.log('sidebar');
//   sidebar.style.position = 'sticky';
//   sidebar.style.top = '0';
// }



// let stickyEl = document.querySelector('.sidebar');
// console.log(stickyEl);
// let stickyPos = stickyEl.offsetTop;
// console.log(stickyPos);

// // Barba.js hooks
// barba.hooks.beforeEnter((data) => {
//   // Check if the sticky element exists and has the sticky position
//   if (stickyEl && getComputedStyle(stickyEl).position === 'sticky') {
//     // Set the sticky element position to the saved position
//     stickyEl.style.top = stickyPos + 'px';
//   }
// });

// barba.hooks.after((data) => {
//   // Save the position of the sticky element again
//   stickyEl = document.querySelector('.sidebar');
//   stickyPos = stickyEl.offsetTop;
// });