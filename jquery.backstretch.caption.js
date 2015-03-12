/*
jQuery Backstretch Captions

Add captions to jQuery Backstretch slideshows and sliders.

Originally written as backstretch-slideshow 
by SimpleThemes (from https://github.com/simplethemes/)

modified date 	: March 11 2015
modified by 	: biwin (@xkaterboi)
modifier URI 	: https://github.com/biwin

for the original content and copyright information,
check out the repo at https://github.com/simplethemes/backstretch-slideshow
*/
jQuery(document).ready(function($){

		var items = [
            { img: "images/tumblr_mvyx8txG0p1st5lhmo1_1280.jpg", caption: "Image 1", link: "http://www.simplethemes.com"},
            { img: "images/tumblr_muui9yjMVc1st5lhmo1_1280.jpg", caption: "Image 2", link: "http://www.simplethemes.com"},
            { img: "images/tumblr_mufr3eEwKX1st5lhmo1_1280.jpg", caption: "Image 3", link: "http://www.simplethemes.com"}
        ];

        var options = {
            fade: 700,
            duration: 4000
        };

        var images = $.map(items, function(i) { return i.img; });
        var slideshow = $.backstretch(images,options);

        $(window).on("backstretch.show", function(e, instance) {
            var theCaption = items[instance.index].caption;
            var theLink = items[instance.index].link;
            if (theLink) {
            	$(".backstretch-caption").html('<a href="'+theLink+'">'+theCaption+'</a>').show().addClass('animated fadeInUp');
            } else {
            	$(".backstretch-caption").text(theCaption).show().addClass('animated fadeInUp');
            }
        });
        $(window).on("backstretch.before", function(e, instance) {
        	$(".backstretch-caption").hide();
        });
});
