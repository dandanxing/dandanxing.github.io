(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-118').attr('src', (dpi>1) ? 'images/ju-xing-1916.png' : 'images/ju-xing-958.png');
$('.js-119').attr('src', (dpi>1) ? 'images/rectangle-2-640.jpg' : 'images/rectangle-2-320.jpg');
$('.js-120').attr('src', (dpi>1) ? 'images/wei-biao-ti-1-566.png' : 'images/wei-biao-ti-1-283.png');
$('.js-121').attr('src', (dpi>1) ? 'images/group-2-590.png' : 'images/group-2-295.png');
$('.js-122').attr('src', (dpi>1) ? 'images/group-4-590.png' : 'images/group-4-295.png');
$('.js-123').attr('src', (dpi>1) ? 'images/group-9-360.png' : 'images/group-9-180.png');
$('.js-124').attr('src', (dpi>1) ? 'images/group-11-580.png' : 'images/group-11-290.png');
$('.js-125').attr('src', 'images/group-13-50.png');
$('.js-126').attr('src', (dpi>1) ? 'images/group-14-1050.png' : 'images/group-14-525.png');
$('.js-127').attr('src', (dpi>1) ? 'images/fen-zu-392.png' : 'images/fen-zu-196.png');
$('.js-128').attr('src', (dpi>1) ? 'images/san-jiao-xing-52.png' : 'images/san-jiao-xing-26.png');
$('.js-129').attr('src', (dpi>1) ? 'images/san-jiao-xing-52.png' : 'images/san-jiao-xing-26.png');
$('.js-130').attr('src', (dpi>1) ? 'images/group-16-1050.png' : 'images/group-16-525.png');
$('.js-131').attr('src', (dpi>1) ? 'images/san-jiao-xing-36.png' : 'images/san-jiao-xing-18-1.png');
$('.js-132').attr('src', 'images/path-2-copy-5-230.png');
$('.js-133').attr('src', (dpi>1) ? 'images/dan-xing-yue-960.jpg' : 'images/dan-xing-yue-480.jpg');
$('.js-134').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-960.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-480.png');
$('.js-135').attr('src', 'images/path-2-copy-4-102.png');
$('.js-136').attr('src', (dpi>1) ? 'images/group-5-34.png' : 'images/group-5-17.png');
$('.js-137').attr('src', (dpi>1) ? 'images/group-17-1062.png' : 'images/group-17-531.png');}else{$('.js-118').attr('src', (dpi>1) ? 'images/ju-xing-640.png' : 'images/ju-xing-320.png');
$('.js-119').attr('src', (dpi>1) ? 'images/rectangle-2-212.jpg' : 'images/rectangle-2-106.jpg');
$('.js-120').attr('src', (dpi>1) ? 'images/wei-biao-ti-1-188.png' : 'images/wei-biao-ti-1-94.png');
$('.js-121').attr('src', (dpi>1) ? 'images/group-2-196.png' : 'images/group-2-98.png');
$('.js-122').attr('src', (dpi>1) ? 'images/group-4-190.png' : 'images/group-4-95.png');
$('.js-123').attr('src', (dpi>1) ? 'images/group-9-120.png' : 'images/group-9-60.png');
$('.js-124').attr('src', (dpi>1) ? 'images/group-11-190.png' : 'images/group-11-95.png');
$('.js-125').attr('src', (dpi>1) ? 'images/group-13-44.png' : 'images/group-13-22.png');
$('.js-126').attr('src', (dpi>1) ? 'images/group-14-354.png' : 'images/group-14-177.png');
$('.js-127').attr('src', (dpi>1) ? 'images/fen-zu-162.png' : 'images/fen-zu-81.png');
$('.js-128').attr('src', (dpi>1) ? 'images/san-jiao-xing-16.png' : 'images/san-jiao-xing-8.png');
$('.js-129').attr('src', (dpi>1) ? 'images/san-jiao-xing-18.png' : 'images/san-jiao-xing-9.png');
$('.js-130').attr('src', (dpi>1) ? 'images/group-16-344.png' : 'images/group-16-172.png');
$('.js-131').attr('src', (dpi>1) ? 'images/san-jiao-xing-18.png' : 'images/san-jiao-xing-9.png');
$('.js-132').attr('src', (dpi>1) ? 'images/path-2-copy-5-154.png' : 'images/path-2-copy-5-77.png');
$('.js-133').attr('src', (dpi>1) ? 'images/dan-xing-yue-320.jpg' : 'images/dan-xing-yue-160.jpg');
$('.js-134').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-320.png' : 'images/ping-mu-kuai-zhao-2018-11-12-shang-wu1.26.27-160.png');
$('.js-135').attr('src', (dpi>1) ? 'images/path-2-copy-4-52.png' : 'images/path-2-copy-4-26.png');
$('.js-136').attr('src', (dpi>1) ? 'images/group-5-8.png' : 'images/group-5-4.png');
$('.js-137').attr('src', (dpi>1) ? 'images/group-17-344.png' : 'images/group-17-172.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});