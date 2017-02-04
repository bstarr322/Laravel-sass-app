/*! PhotoSwipe Default UI - 4.0.2 - 2014-12-25
 * http://photoswipe.com
 * Copyright (c) 2014 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=this,u=!1,v=!0,w=!0,x={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],indexIndicatorSep:" / "},y=function(a){if(p)return!0;a=a||window.event;for(var c,d,e=a.target||a.srcElement,f=e.className,g=0;g<N.length;g++)c=N[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),p=!0;var h=b.features.isOldAndroid?600:30;q=setTimeout(function(){p=!1},h)}},z=function(){return!a.likelyTouchDevice||a.options.mouseUsed||screen.width>1200},A=function(){return w=!w,w?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){w&&b[(w?"add":"remove")+"Class"](i,"pswp__share-modal--hidden")},300)):(b[(w?"add":"remove")+"Class"](i,"pswp__share-modal--hidden"),setTimeout(function(){w||b.addClass(i,"pswp__share-modal--fade-in")},30)),w||C(),!1},B=function(a){a=a||window.event;var b=a.target||a.srcElement;return b.href?b.hasAttribute("download")?!0:(window.open(b.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),w||A(),!1):!1},C=function(){for(var b,c,d="",e=0;e<a.options.shareButtons.length;e++)b=a.options.shareButtons[e],c=b.url.replace("{{url}}",encodeURIComponent(window.location.href)).replace("{{image_url}}",encodeURIComponent(a.currItem.src||"")).replace("{{raw_image_url}}",a.currItem.src||"").replace("{{text}}",encodeURIComponent(a.currItem.title||"")),d+='<a href="'+c+'" target="_blank" class="pswp__share--'+b.id+'"'+(b.download?"download":"")+">"+b.label+"</a>";i.children[0].innerHTML=d,i.children[0].onclick=B},D=function(c){for(var d=0;d<a.options.closeElClasses.length;d++)if(b.hasClass(c,"pswp__"+a.options.closeElClasses[d]))return!0},E=0,F=function(){clearTimeout(s),E=0,k&&t.setIdle(!1)},G=function(b){b=b?b:window.event;var c=b.relatedTarget||b.toElement;c&&"HTML"!==c.nodeName||(clearTimeout(s),s=setTimeout(function(){t.setIdle(!0)},a.options.timeToIdleOutside))},H=function(){a.options.fullscreenEl&&(c||(c=t.getFullscreenAPI()),c?(b.bind(document,c.eventK,t.updateFullscreen),t.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},I=function(){a.options.preloaderEl&&(J(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&J(!1):J(!0)},a.options.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&J(!0)}))},J=function(a){n!==a&&(b[(a?"remove":"add")+"Class"](m,"pswp__preloader--active"),n=a)},K=function(c){var g=c.vGap;if(z()){var h=a.options.barsSize;if(a.options.captionEl&&"auto"===h.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),a.options.addCaptionHTMLFn(c,f,!0)){var i=f.clientHeight;g.bottom=parseInt(i,10)||44}else g.bottom=h.top;else g.bottom=h.bottom;g.top=h.top}else g.top=g.bottom=0},L=function(){a.options.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",F),b.bind(document,"mouseout",G),r=setInterval(function(){E++,2===E&&t.setIdle(!0)},a.options.timeToIdle/2)})},M=function(){l("onVerticalDrag",function(a){v&&.95>a?t.hideControls():!v&&a>=.95&&t.showControls()});var a;l("onPinchClose",function(b){v&&.9>b?(t.hideControls(),a=!0):a&&!v&&b>.9&&t.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!v&&t.showControls()})},N=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){A()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){A()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],O=function(){var c,e,f,g=function(d){if(d)for(var g=d.length,h=0;g>h;h++){c=d[h],e=c.className;for(var i=0;i<N.length;i++)f=N[i],e.indexOf("pswp__"+f.name)>-1&&(a.options[f.option]?(b.removeClass(c,"pswp__element--disabled"),f.onInit&&f.onInit(c)):b.addClass(c,"pswp__element--disabled"))}};g(d.children);var h=b.getChildByClass(d,"pswp__top-bar");h&&g(h.children)};t.init=function(){b.extend(a.options,x,!0),d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,M(),l("beforeChange",t.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(.7>c?1:1.5,b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.className&&a.type.indexOf("mouse")>-1&&(d.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",y),b.bind(a.scrollWrap,"pswpTap",t.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",t.onMouseOver)}),l("unbindEvents",function(){w||A(),r&&clearInterval(r),b.unbind(document,"mouseout",G),b.unbind(document,"mousemove",F),b.unbind(d,"pswpTap click",y),b.unbind(a.scrollWrap,"pswpTap",t.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",t.onMouseOver),c&&(b.unbind(document,c.eventK,t.updateFullscreen),c.isFullscreen()&&(x.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){a.options.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),t.setIdle(!1)}),a.options.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){a.options.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",K),O(),a.options.shareEl&&h&&i&&(w=!0),L(),H(),I()},t.setIdle=function(a){k=a,b[(a?"add":"remove")+"Class"](d,"pswp__ui--idle")},t.update=function(){v&&a.currItem?(t.updateIndexIndicator(),a.options.captionEl&&(a.options.addCaptionHTMLFn(a.currItem,e),a.currItem.title?b.removeClass(e,"pswp__caption--empty"):b.addClass(e,"pswp__caption--empty")),u=!0):u=!1},t.updateFullscreen=function(){b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},t.updateIndexIndicator=function(){a.options.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+a.options.indexIndicatorSep+a.options.getNumItemsFn())},t.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!p)if(c.detail&&"mouse"===c.detail.pointerType)D(d)&&a.close(),b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?a.close():a.toggleDesktopZoom(c.detail.releasePoint));else if(a.options.tapToToggleControls&&(v?t.hideControls():t.showControls()),a.options.tapToClose&&(b.hasClass(d,"pswp__img")||D(d)))return void a.close()},t.onMouseOver=function(a){a=a||window.event;var c=a.target||a.srcElement;b[(D(c)?"add":"remove")+"Class"](d,"pswp__ui--over-close")},t.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),v=!1},t.showControls=function(){v=!0,u||t.update(),b.removeClass(d,"pswp__ui--hidden")},t.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},t.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=a.options.closeOnScroll,a.options.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return a.options.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
