(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var a='data-src'; if($('.js-161 .slide0').hasAttr('src')) { a='src'; } $('.js-161 .slide0').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-960-1.png');
var a='data-src'; if($('.js-161 .slide1').hasAttr('src')) { a='src'; } $('.js-161 .slide1').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.43-960.png');
var a='data-src'; if($('.js-161 .slide2').hasAttr('src')) { a='src'; } $('.js-161 .slide2').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.27.19-960.png');
var a='data-src'; if($('.js-161 .slide3').hasAttr('src')) { a='src'; } $('.js-161 .slide3').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.31.57-960.png');
var a='data-src'; if($('.js-161 .slide4').hasAttr('src')) { a='src'; } $('.js-161 .slide4').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.32.26-960.png');
var a='data-src'; if($('.js-162 .slide0').hasAttr('src')) { a='src'; } $('.js-162 .slide0').attr(a, (dpi>1) ? 'images/wechatimg106-1920-1.jpeg' : 'images/wechatimg106-960-1.jpeg');
var a='data-src'; if($('.js-162 .slide1').hasAttr('src')) { a='src'; } $('.js-162 .slide1').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.33.31-960-1.png');
var a='data-src'; if($('.js-162 .slide2').hasAttr('src')) { a='src'; } $('.js-162 .slide2').attr(a, 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.31.11-960-1.png');
var a='data-src'; if($('.js-163 .slide0').hasAttr('src')) { a='src'; } $('.js-163 .slide0').attr(a, (dpi>1) ? 'images/pei-tian-xie-sheng1-1920.jpeg' : 'images/pei-tian-xie-sheng1-960.jpeg');
var a='data-src'; if($('.js-163 .slide1').hasAttr('src')) { a='src'; } $('.js-163 .slide1').attr(a, (dpi>1) ? 'images/lll-1920.jpg' : 'images/lll-960.jpg');}else{var a='data-src'; if($('.js-161 .slide0').hasAttr('src')) { a='src'; } $('.js-161 .slide0').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-320-1.png');
var a='data-src'; if($('.js-161 .slide1').hasAttr('src')) { a='src'; } $('.js-161 .slide1').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.43-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.43-320.png');
var a='data-src'; if($('.js-161 .slide2').hasAttr('src')) { a='src'; } $('.js-161 .slide2').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.27.19-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.27.19-320.png');
var a='data-src'; if($('.js-161 .slide3').hasAttr('src')) { a='src'; } $('.js-161 .slide3').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.31.57-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.31.57-320.png');
var a='data-src'; if($('.js-161 .slide4').hasAttr('src')) { a='src'; } $('.js-161 .slide4').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.32.26-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.32.26-320.png');
var a='data-src'; if($('.js-162 .slide0').hasAttr('src')) { a='src'; } $('.js-162 .slide0').attr(a, (dpi>1) ? 'images/wechatimg106-640.jpeg' : 'images/wechatimg106-320.jpeg');
var a='data-src'; if($('.js-162 .slide1').hasAttr('src')) { a='src'; } $('.js-162 .slide1').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.33.31-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.33.31-320.png');
var a='data-src'; if($('.js-162 .slide2').hasAttr('src')) { a='src'; } $('.js-162 .slide2').attr(a, (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.31.11-640.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.31.11-320.png');
var a='data-src'; if($('.js-163 .slide0').hasAttr('src')) { a='src'; } $('.js-163 .slide0').attr(a, (dpi>1) ? 'images/pei-tian-xie-sheng1-640.jpeg' : 'images/pei-tian-xie-sheng1-320.jpeg');
var a='data-src'; if($('.js-163 .slide1').hasAttr('src')) { a='src'; } $('.js-163 .slide1').attr(a, (dpi>1) ? 'images/lll-640.jpg' : 'images/lll-320.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-161 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 400,dots: false,arrows: true,infinite: true});$('.js-162 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});$('.js-163 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});