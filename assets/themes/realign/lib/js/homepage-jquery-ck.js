jQuery(document).ready(function(e){var t;e("#homepage-widgets section.widget").hover(function(n){t=e(this).find(".bw").attr("style");e(this).find(".bw").attr("style","")},function(n){e(this).find(".bw").attr("style",t)});var n=Snap("#the_map");e(".state").hover(function(){e(this).toFront()},function(){})});