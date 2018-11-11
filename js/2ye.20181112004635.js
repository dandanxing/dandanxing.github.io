(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-116').attr('src', (dpi>1) ? 'images/ju-xing-1916.png' : 'images/ju-xing-958.png');
$('.js-117').attr('src', (dpi>1) ? 'images/rectangle-2-640.jpg' : 'images/rectangle-2-320.jpg');
$('.js-118').attr('src', (dpi>1) ? 'images/wei-biao-ti-1-590.png' : 'images/wei-biao-ti-1-295.png');
$('.js-119').attr('src', (dpi>1) ? 'images/group-2-590.png' : 'images/group-2-295.png');
$('.js-120').attr('src', (dpi>1) ? 'images/group-4-590.png' : 'images/group-4-295.png');
$('.js-121').attr('src', (dpi>1) ? 'images/group-9-360.png' : 'images/group-9-180.png');
$('.js-122').attr('src', (dpi>1) ? 'images/group-11-580.png' : 'images/group-11-290.png');
$('.js-123').attr('src', 'images/group-13-50.png');
$('.js-124').attr('src', 'images/fen-zu-398.png');
$('.js-125').attr('src', (dpi>1) ? 'images/group-16-1050.png' : 'images/group-16-525.png');
$('.js-126').attr('src', (dpi>1) ? 'images/group-17-1062.png' : 'images/group-17-531.png');
$('.js-127').attr('src', 'images/path-2-copy-5-230.png');
$('.js-128').attr('src', 'images/path-2-copy-4-102.png');}else{$('.js-116').attr('src', (dpi>1) ? 'images/ju-xing-640.png' : 'images/ju-xing-320.png');
$('.js-117').attr('src', (dpi>1) ? 'images/rectangle-2-212.jpg' : 'images/rectangle-2-106.jpg');
$('.js-118').attr('src', (dpi>1) ? 'images/wei-biao-ti-1-196.png' : 'images/wei-biao-ti-1-98.png');
$('.js-119').attr('src', (dpi>1) ? 'images/group-2-196.png' : 'images/group-2-98.png');
$('.js-120').attr('src', (dpi>1) ? 'images/group-4-190.png' : 'images/group-4-95.png');
$('.js-121').attr('src', (dpi>1) ? 'images/group-9-120.png' : 'images/group-9-60.png');
$('.js-122').attr('src', (dpi>1) ? 'images/group-11-190.png' : 'images/group-11-95.png');
$('.js-123').attr('src', (dpi>1) ? 'images/group-13-44.png' : 'images/group-13-22.png');
$('.js-124').attr('src', (dpi>1) ? 'images/fen-zu-258.png' : 'images/fen-zu-129.png');
$('.js-125').attr('src', (dpi>1) ? 'images/group-16-344.png' : 'images/group-16-172.png');
$('.js-126').attr('src', (dpi>1) ? 'images/group-17-344.png' : 'images/group-17-172.png');
$('.js-127').attr('src', (dpi>1) ? 'images/path-2-copy-5-154.png' : 'images/path-2-copy-5-77.png');
$('.js-128').attr('src', (dpi>1) ? 'images/path-2-copy-4-52.png' : 'images/path-2-copy-4-26.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}

});