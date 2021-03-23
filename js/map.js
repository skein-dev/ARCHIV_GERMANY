var flag_red = true;
var flag_blue = true;
$( ".btn-map-red" ).click(function() {
	flag_red = !flag_red;
  if (flag_red) {
  	$(".location-icon-red").removeClass("icon-hide");
  	$(".location-icon-red").addClass("icon-show");
  	$(".map-icon-red").removeClass("map-icon-show");
  	$(".map-icon-red").addClass("map-icon-hide");
  } else {
  	$(".location-icon-red").removeClass("icon-show");
  	$(".location-icon-red").addClass("icon-hide");
  	$(".map-icon-red").removeClass("map-icon-hide");
  	$(".map-icon-red").addClass("map-icon-show");
  }
});
$( ".btn-map-blue" ).click(function() {
  flag_blue = !flag_blue;
  if (flag_blue) {
  	$(".location-icon-blue").removeClass("icon-hide");
  	$(".location-icon-blue").addClass("icon-show");
  	$(".map-icon-blue").addClass("map-icon-hide");
  	$(".map-icon-blue").removeClass("map-icon-show");
  } else {
  	$(".location-icon-blue").removeClass("icon-show");
  	$(".location-icon-blue").addClass("icon-hide");
  	$(".map-icon-blue").addClass("map-icon-show");
  	$(".map-icon-blue").removeClass("map-icon-hide");
  }
});