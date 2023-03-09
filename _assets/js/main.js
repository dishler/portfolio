/**
 * @modules : node_modulesフォルダまでの絶対パスのエイリアス
 * webpack.config.jsにて定義している
 */

// ライブラリ
import barba from '@modules/@barba/core';
import LocomotiveScroll from '@modules/locomotive-scroll/dist/locomotive-scroll.js';

// common
import resizeEvent from './common/resizeEvent';
import firstViewAnimation from './common/firstViewTrigger';
import replaceHead from './common/replaceHead';
import { initLoading, endLoading } from './common/loading';
import { addBlendHeader, removeBlendHeader, pageTransitionHeader, scrollHide } from './common/header';
// import inquiryCompleted from './common/inquiryCompleted'; 
import slideUpLines from './common/slide-up-lines';
import tabs from './common/tabs';
import handleScroll from './common/handleScroll';
import sidebarMenu from './common/menu';
import dropDownFooter from './common/dropDownFooter';
import dropDown from './common/dropDown';

// intersectionObserver
import addClassIntersection from './intersectionObserver/addClassIntersection';
import toggleChangeBg from './intersectionObserver/toggleChangeBg';
import followContents from './intersectionObserver/followContents';

// ドロワーのイベント
import toggleEvent from './drawer/toggleEvent';
import removeEvent from './drawer/removeEvent';
import setFillHeight from './drawer/setFillHeight';



// LocomotiveScroll options
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.5,

});

window.onload = endLoading();


// DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  resizeEvent();
  toggleEvent();
  scrollHide();
});


window.addEventListener('DOMContentLoaded', () => {
  tabs();
  sidebarMenu(scroll);
  console.log('VVV');
  scroll.on('scroll', handleScroll);
  // dropDown();
  // dropDownFooter();
})



firstViewAnimation();
slideUpLines();
window.addEventListener('resize', setFillHeight);
setFillHeight();

pageTransitionHeader();

// barba.js options
barba.init({
  views: [
    {
      namespace: 'single',
      afterEnter(data) {
        // toggleChangeBg(data.next.container.id);
        addBlendHeader();
        window.location.reload();
        // removeBlendHeader();
      }
    },
    {
      namespace: 'home',
      afterEnter(data) {
        followContents();
        addBlendHeader();
      }
    },
    {
      namespace: 'about',
      afterEnter(data) {
        addClassIntersection();
        addBlendHeader();
      }
    },
    {
      namespace: 'contact',
      afterEnter(data) {
        addBlendHeader();
        inquiryCompleted();
      }
    },
  ]
});

barba.hooks.before((data) => {
  initLoading();
});

barba.hooks.beforeLeave((data) => {
  scroll.destroy();
});

barba.hooks.beforeEnter((data) => {
  replaceHead(data);
  removeEvent();
  pageTransitionHeader();
  scrollHide();
})

barba.hooks.after((data) => {
  console.log('ddd');
  scroll.init();
  window.scrollTo(0, 0);
  window.addEventListener('resize', setFillHeight);
  window.location.reload();
  setFillHeight();
  firstViewAnimation();
  endLoading();
  slideUpLines();
});