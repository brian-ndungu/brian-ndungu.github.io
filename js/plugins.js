/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

  'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.3.0
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";!function(t,e){function r(r){if("undefined"==typeof r)throw new Error('Pathformer [constructor]: "element" parameter is required');if(r.constructor===String&&(r=e.getElementById(r),!r))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(r.constructor instanceof t.SVGElement||/^svg$/i.test(r.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=r,this.scan(r)}function n(t,e,r){this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(r),this.isReady&&this.init()}r.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],r.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],r.prototype.scan=function(t){for(var e,r,n,i,a=t.querySelectorAll(this.TYPES.join(",")),o=0;o<a.length;o++)r=a[o],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},r.prototype.lineToPath=function(t){var e={};return e.d="M"+t.x1+","+t.y1+"L"+t.x2+","+t.y2,e},r.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,a=parseFloat(t.height)||0;return e.d="M"+r+" "+n+" ",e.d+="L"+(r+i)+" "+n+" ",e.d+="L"+(r+i)+" "+(n+a)+" ",e.d+="L"+r+" "+(n+a)+" Z",e},r.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(-1===t.points.indexOf(",")){var a=[];for(e=0;e<i.length;e+=2)a.push(i[e]+","+i[e+1]);i=a}for(r="M"+i[0],e=1;e<i.length;e++)-1!==i[e].indexOf(",")&&(r+="L"+i[e]);return n.d=r,n},r.prototype.polygonToPath=function(t){var e=r.prototype.polylineToPath(t);return e.d+="Z",e},r.prototype.ellipseToPath=function(t){var e=t.cx-t.rx,r=t.cy,n=parseFloat(t.cx)+parseFloat(t.rx),i=t.cy,a={};return a.d="M"+e+","+r+"A"+t.rx+","+t.ry+" 0,1,1 "+n+","+i+"A"+t.rx+","+t.ry+" 0,1,1 "+e+","+i,a},r.prototype.circleToPath=function(t){var e={},r=t.cx-t.r,n=t.cy,i=parseFloat(t.cx)+parseFloat(t.r),a=t.cy;return e.d="M"+r+","+n+"A"+t.r+","+t.r+" 0,1,1 "+i+","+a+"A"+t.r+","+t.r+" 0,1,1 "+r+","+a,e},r.prototype.pathMaker=function(t,r){var n,i,a=e.createElementNS("http://www.w3.org/2000/svg","path");for(n=0;n<t.attributes.length;n++)i=t.attributes[n],-1===this.ATTR_WATCH.indexOf(i.name)&&a.setAttribute(i.name,i.value);for(n in r)a.setAttribute(n,r[n]);return a},r.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var i,a,o;n.LINEAR=function(t){return t},n.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},n.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},n.EASE_IN=function(t){return Math.pow(t,3)},n.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(.5*t*Math.PI)+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(2.5*r*Math.PI))+1;return 1-n+i*n},n.prototype.setElement=function(r,n){if("undefined"==typeof r)throw new Error('Vivus [constructor]: "element" parameter is required');if(r.constructor===String&&(r=e.getElementById(r),!r))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=r,n&&n.file){var i=e.createElement("object");i.setAttribute("type","image/svg+xml"),i.setAttribute("data",n.file),i.setAttribute("built-by-vivus","true"),r.appendChild(i),r=i}switch(r.constructor){case t.SVGSVGElement:case t.SVGElement:this.el=r,this.isReady=!0;break;case t.HTMLObjectElement:var a,o;o=this,a=function(t){if(!o.isReady){if(o.el=r.contentDocument&&r.contentDocument.querySelector("svg"),!o.el&&t)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return o.el?(r.getAttribute("built-by-vivus")&&(o.parentEl.insertBefore(o.el,r),o.parentEl.removeChild(r),o.el.setAttribute("width","100%"),o.el.setAttribute("height","100%")),o.isReady=!0,o.init(),!0):void 0}},a()||r.addEventListener("load",a);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},n.prototype.setOptions=function(e){var r=["delayed","async","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==e&&e.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(e=e||{},e.type&&-1===r.indexOf(e.type))throw new Error("Vivus [constructor]: "+e.type+" is not an existing animation `type`");if(this.type=e.type||r[0],e.start&&-1===i.indexOf(e.start))throw new Error("Vivus [constructor]: "+e.start+" is not an existing `start` option");if(this.start=e.start||i[0],this.isIE=-1!==t.navigator.userAgent.indexOf("MSIE")||-1!==t.navigator.userAgent.indexOf("Trident/")||-1!==t.navigator.userAgent.indexOf("Edge/"),this.duration=o(e.duration,120),this.delay=o(e.delay,null),this.dashGap=o(e.dashGap,1),this.forceRender=e.hasOwnProperty("forceRender")?!!e.forceRender:this.isIE,this.selfDestroy=!!e.selfDestroy,this.onReady=e.onReady,this.frameLength=this.currentFrame=this.map=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=e.hasOwnProperty("ignoreInvisible")?!!e.ignoreInvisible:!1,this.animTimingFunction=e.animTimingFunction||n.LINEAR,this.pathTimingFunction=e.pathTimingFunction||n.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},n.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},n.prototype.mapping=function(){var e,r,n,i,a,s,h,u;for(u=s=h=0,r=this.el.querySelectorAll("path"),e=0;e<r.length;e++)n=r[e],this.isInvisible(n)||(a={el:n,length:Math.ceil(n.getTotalLength())},isNaN(a.length)?t.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",n):(this.map.push(a),n.style.strokeDasharray=a.length+" "+(a.length+2*this.dashGap),n.style.strokeDashoffset=a.length+this.dashGap,a.length+=this.dashGap,s+=a.length,this.renderPath(e)));for(s=0===s?1:s,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(r.length>1?r.length-1:1),e=0;e<this.map.length;e++){switch(a=this.map[e],this.type){case"delayed":a.startAt=this.delayUnit*e,a.duration=this.duration-this.delay;break;case"oneByOne":a.startAt=h/s*this.duration,a.duration=a.length/s*this.duration;break;case"async":a.startAt=0,a.duration=this.duration;break;case"scenario-sync":n=r[e],i=this.parseAttr(n),a.startAt=u+(o(i["data-delay"],this.delayUnit)||0),a.duration=o(i["data-duration"],this.duration),u=void 0!==i["data-async"]?a.startAt:a.startAt+a.duration,this.frameLength=Math.max(this.frameLength,a.startAt+a.duration);break;case"scenario":n=r[e],i=this.parseAttr(n),a.startAt=o(i["data-start"],this.delayUnit)||0,a.duration=o(i["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,a.startAt+a.duration)}h+=a.length,this.frameLength=this.frameLength||this.duration}},n.prototype.drawer=function(){var t=this;this.currentFrame+=this.speed,this.currentFrame<=0?(this.stop(),this.reset(),this.callback(this)):this.currentFrame>=this.frameLength?(this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy(),this.callback(this)):(this.trace(),this.handle=i(function(){t.drawer()}))},n.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},n.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},n.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new r(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},n.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var e=this,r=function(){e.isInViewport(e.parentEl,1)&&(e.play(),t.removeEventListener("scroll",r))};t.addEventListener("scroll",r),r()}},n.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},n.prototype.reset=function(){return this.setFrameProgress(0)},n.prototype.finish=function(){return this.setFrameProgress(1)},n.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},n.prototype.play=function(t){if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return this.speed=t||1,this.handle||this.drawer(),this},n.prototype.stop=function(){return this.handle&&(a(this.handle),this.handle=null),this},n.prototype.destroy=function(){var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},n.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:this.ignoreInvisible?(e=t.getBoundingClientRect(),!e.width&&!e.height):!1},n.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},n.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),a=i.height,o=r+i.top,s=o+a;return e=e||0,n>=o+a*e&&s>=r},n.prototype.docElem=t.document.documentElement,n.prototype.getViewportH=function(){var e=this.docElem.clientHeight,r=t.innerHeight;return r>e?r:e},n.prototype.scrollY=function(){return t.pageYOffset||this.docElem.scrollTop},i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||function(e){return t.clearTimeout(e)}}(),o=function(t,e){var r=parseInt(t,10);return r>=0?r:e},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof exports?module.exports=n:t.Vivus=n}(window,document);



/*! scrollReveal.js v0.1.3 (c) 2014 Julian Lloyd | MIT license */

/*===========================================================================*/


window.scrollReveal = (function (window) {

    // 'use strict';
  
    // generator (increments) for the next scroll-reveal-id
    var nextId = 1;
  
    /**
     * RequestAnimationFrame polyfill
     * @function
     * @private
     */
    var requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
      };
    }());
  
    function scrollReveal(options) {
  
        this.docElem = window.document.documentElement;
        this.options = this.extend(this.defaults, options);
        this.styleBank = {};
  
        if (this.options.init == true) this.init();
    }
  
    scrollReveal.prototype = {
  
      defaults: {
        after:   '0s',
        enter:   'bottom',
        move:    '24px',
        over:    '0.66s',
        easing:  'ease-in-out',
        opacity: 0,
  
    //  if 0, the element is considered in the viewport as soon as it enters
    //  if 1, the element is considered in the viewport when it's fully visible
        viewportFactor: 0.33,
  
    // if false, animations occur only once
    // if true, animations occur each time an element enters the viewport
        reset: false,
  
    // if true, scrollReveal.init() is automaticaly called upon instantiation
        init: true
      },
  
      /*=============================================================================*/
  
      init: function () {
  
        this.scrolled = false;
  
        var self = this;
  
    //  Check DOM for the data-scrollReveal attribute
    //  and initialize all found elements.
        this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll('[data-scroll-reveal]'));
        this.elems.forEach(function (el, i) {
  
      //  Capture original style attribute
          var id = el.getAttribute("data-scroll-reveal-id");
          if (!id) {
              id = nextId++;
              el.setAttribute("data-scroll-reveal-id", id);
          }
          if (!self.styleBank[id]) {
            self.styleBank[id] = el.getAttribute('style');
          }
  
          self.update(el);
        });
  
        var scrollHandler = function (e) {
          // No changing, exit
          if (!self.scrolled) {
            self.scrolled = true;
            requestAnimFrame(function () {
              self._scrollPage();
            });
          }
        };
  
        var resizeHandler = function () {
  
      //  If we’re still waiting for settimeout, reset the timer.
          if (self.resizeTimeout) {
            clearTimeout(self.resizeTimeout);
          }
          function delayed() {
            self._scrollPage();
            self.resizeTimeout = null;
          }
          self.resizeTimeout = setTimeout(delayed, 200);
        };
  
        // captureScroll
        window.addEventListener('scroll', scrollHandler, false);
        window.addEventListener('resize', resizeHandler, false);
      },
  
      /*=============================================================================*/
  
      _scrollPage: function () {
          var self = this;
  
          this.elems.forEach(function (el, i) {
            self.update(el);
          });
          this.scrolled = false;
      },
  
      /*=============================================================================*/
  
      parseLanguage: function (el) {
  
    //  Splits on a sequence of one or more commas or spaces.
        var words = el.getAttribute('data-scroll-reveal').split(/[, ]+/),
            parsed = {};
  
        function filter (words) {
          var ret = [],
  
              blacklist = [
                "from",
                "the",
                "and",
                "then",
                "but",
                "with"
              ];
  
          words.forEach(function (word, i) {
            if (blacklist.indexOf(word) > -1) {
              return;
            }
            ret.push(word);
          });
  
          return ret;
        }
  
        words = filter(words);
  
        words.forEach(function (word, i) {
  
          switch (word) {
            case "enter":
              parsed.enter = words[i + 1];
              return;
  
            case "after":
              parsed.after = words[i + 1];
              return;
  
            case "wait":
              parsed.after = words[i + 1];
              return;
  
            case "move":
              parsed.move = words[i + 1];
              return;
  
            case "ease":
              parsed.move = words[i + 1];
              parsed.ease = "ease";
              return;
  
            case "ease-in":
              parsed.move = words[i + 1];
              parsed.easing = "ease-in";
              return;
  
            case "ease-in-out":
              parsed.move = words[i + 1];
              parsed.easing = "ease-in-out";
              return;
  
            case "ease-out":
              parsed.move = words[i + 1];
              parsed.easing = "ease-out";
              return;
  
            case "over":
              parsed.over = words[i + 1];
              return;
  
            default:
              return;
          }
        });
  
        return parsed;
      },
  
  
      /*=============================================================================*/
  
      update: function (el) {
  
        var css   = this.genCSS(el);
        var style = this.styleBank[el.getAttribute("data-scroll-reveal-id")];
  
        if (style != null) style += ";"; else style = "";
  
        if (!el.getAttribute('data-scroll-reveal-initialized')) {
          el.setAttribute('style', style + css.initial);
          el.setAttribute('data-scroll-reveal-initialized', true);
        }
  
        if (!this.isElementInViewport(el, this.options.viewportFactor)) {
          if (this.options.reset) {
            el.setAttribute('style', style + css.initial + css.reset);
          }
          return;
        }
  
        if (el.getAttribute('data-scroll-reveal-complete')) return;
  
        if (this.isElementInViewport(el, this.options.viewportFactor)) {
          el.setAttribute('style', style + css.target + css.transition);
      //  Without reset enabled, we can safely remove the style tag
      //  to prevent CSS specificy wars with authored CSS.
          if (!this.options.reset) {
            setTimeout(function () {
              if (style != "") {
                el.setAttribute('style', style);
              } else {
                el.removeAttribute('style');
              }
              el.setAttribute('data-scroll-reveal-complete',true);
            }, css.totalDuration);
          }
        return;
        }
      },
  
      /*=============================================================================*/
  
      genCSS: function (el) {
        var parsed = this.parseLanguage(el),
            enter,
            axis;
  
        if (parsed.enter) {
  
          if (parsed.enter == "top" || parsed.enter == "bottom") {
            enter = parsed.enter;
            axis = "y";
          }
  
          if (parsed.enter == "left" || parsed.enter == "right") {
            enter = parsed.enter;
            axis = "x";
          }
  
        } else {
  
          if (this.options.enter == "top" || this.options.enter == "bottom") {
            enter = this.options.enter
            axis = "y";
          }
  
          if (this.options.enter == "left" || this.options.enter == "right") {
            enter = this.options.enter
            axis = "x";
          }
        }
  
    //  After all values are parsed, let’s make sure our our
    //  pixel distance is negative for top and left entrances.
    //
    //  ie. "move 25px from top" starts at 'top: -25px' in CSS.
  
        if (enter == "top" || enter == "left") {
          if (parsed.move) {
            parsed.move = "-" + parsed.move;
          }
          else {
            parsed.move = "-" + this.options.move;
          }
        }
  
        var dist    = parsed.move    || this.options.move,
            dur     = parsed.over    || this.options.over,
            delay   = parsed.after   || this.options.after,
            easing  = parsed.easing  || this.options.easing,
            opacity = parsed.opacity || this.options.opacity;
  
        var transition = "-webkit-transition: -webkit-transform " + dur + " " + easing + " " + delay + ",  opacity " + dur + " " + easing + " " + delay + ";" +
                                 "transition: transform " + dur + " " + easing + " " + delay + ", opacity " + dur + " " + easing + " " + delay + ";" +
                        "-webkit-perspective: 1000;" +
                "-webkit-backface-visibility: hidden;";
  
    //  The same as transition, but removing the delay for elements fading out.
        var reset = "-webkit-transition: -webkit-transform " + dur + " " + easing + " 0s,  opacity " + dur + " " + easing + " " + delay + ";" +
                            "transition: transform " + dur + " " + easing + " 0s,  opacity " + dur + " " + easing + " " + delay + ";" +
                   "-webkit-perspective: 1000;" +
           "-webkit-backface-visibility: hidden;";
  
        var initial = "-webkit-transform: translate" + axis + "(" + dist + ");" +
                              "transform: translate" + axis + "(" + dist + ");" +
                                "opacity: " + opacity + ";";
  
        var target = "-webkit-transform: translate" + axis + "(0);" +
                             "transform: translate" + axis + "(0);" +
                               "opacity: 1;";
        return {
          transition: transition,
          initial: initial,
          target: target,
          reset: reset,
          totalDuration: ((parseFloat(dur) + parseFloat(delay)) * 1000)
        };
      },
  
      getViewportH : function () {
        var client = this.docElem['clientHeight'],
          inner = window['innerHeight'];
  
        return (client < inner) ? inner : client;
      },
  
      getOffset : function(el) {
        var offsetTop = 0,
            offsetLeft = 0;
  
        do {
          if (!isNaN(el.offsetTop)) {
            offsetTop += el.offsetTop;
          }
          if (!isNaN(el.offsetLeft)) {
            offsetLeft += el.offsetLeft;
          }
        } while (el = el.offsetParent)
  
        return {
          top: offsetTop,
          left: offsetLeft
        }
      },
  
      isElementInViewport : function(el, h) {
        var scrolled = window.pageYOffset,
            viewed = scrolled + this.getViewportH(),
            elH = el.offsetHeight,
            elTop = this.getOffset(el).top,
            elBottom = elTop + elH,
            h = h || 0;
  
        return (elTop + elH * h) <= viewed
            && (elBottom) >= scrolled
            || (el.currentStyle? el.currentStyle : window.getComputedStyle(el, null)).position == 'fixed';
      },
  
      extend: function (a, b){
        for (var key in b) {
          if (b.hasOwnProperty(key)) {
            a[key] = b[key];
          }
        }
        return a;
      }
    }; // end scrollReveal.prototype
  
    return scrollReveal;
  })(window);
