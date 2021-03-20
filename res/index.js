$(document).ready(function () {
  $(".btn-hide").click(function () {
    $(".left-menu").removeClass("width-250p");
    $(".left-menu").addClass("width-0");
    $(".main").addClass("width-100");
    $(".btn-show").show();
    $(".btn-hide").hide();
    $(".section-bottom").hide();
  });
  $(".btn-show").click(function () {
    $(".left-menu").addClass("width-250p");
    $(".left-menu").removeClass("width-0");
    $(".main").removeClass("width-100");
    $(".btn-hide").show();
    $(".btn-show").hide();
    $(".section-bottom").show();
  });
  $( window ).resize(function() {
    if($( window ).width()  <= 500){
      $(".left-menu").removeClass("width-250p");
      $(".left-menu").addClass("width-0");
      $(".main").addClass("width-100");
      // $(".main").removeClass("width-100");
      $(".btn-hide").hide();
      $(".btn-show").show();
      $(".section-bottom").hide();
    }
  });
  $("#accordion_item1").click(function(){
    var icon1 = $(".arrow-icon1").hasClass("fa-angle-down");
    if (icon1) {
      $(".arrow-icon1").removeClass("fa-angle-down");
      $(".arrow-icon1").addClass("fa-angle-right");
    }
    else{
      $(".arrow-icon1").removeClass("fa-angle-right");
      $(".arrow-icon1").addClass("fa-angle-down");
    }
    var icon2 = $(".arrow-icon2").hasClass("fa-angle-down");
    if (icon2) {
      $(".arrow-icon2").removeClass("fa-angle-down");
      $(".arrow-icon2").addClass("fa-angle-right");
    }
    var icon3 = $(".arrow-icon3").hasClass("fa-angle-down");
    if (icon3) {
      $(".arrow-icon3").removeClass("fa-angle-down");
      $(".arrow-icon3").addClass("fa-angle-right");
    }
  });
  $("#accordion_item2").click(function(){
    var icon2 = $(".arrow-icon2").hasClass("fa-angle-right");
    if (icon2) {
      $(".arrow-icon2").removeClass("fa-angle-right");
      $(".arrow-icon2").addClass("fa-angle-down");
    }else{
      $(".arrow-icon2").removeClass("fa-angle-down");
      $(".arrow-icon2").addClass("fa-angle-right");
    }
    var icon1 = $(".arrow-icon1").hasClass("fa-angle-down");
    if (icon1) {
      $(".arrow-icon1").removeClass("fa-angle-down");
      $(".arrow-icon1").addClass("fa-angle-right");
    }
    var icon3 = $(".arrow-icon3").hasClass("fa-angle-down");
    if (icon3) {
      $(".arrow-icon3").removeClass("fa-angle-down");
      $(".arrow-icon3").addClass("fa-angle-right");
    }
  });
  $("#accordion_item3").click(function(){
    var icon3 = $(".arrow-icon3").hasClass("fa-angle-right");
    if (icon3) {
      $(".arrow-icon3").removeClass("fa-angle-right");
      $(".arrow-icon3").addClass("fa-angle-down");
    }else{
      $(".arrow-icon3").removeClass("fa-angle-down");
      $(".arrow-icon3").addClass("fa-angle-right");
    }
    var icon2 = $(".arrow-icon2").hasClass("fa-angle-down");
    if (icon2) {
      $(".arrow-icon2").removeClass("fa-angle-down");
      $(".arrow-icon2").addClass("fa-angle-right");
    }
    var icon1 = $(".arrow-icon1").hasClass("fa-angle-down");
    if (icon1) {
      $(".arrow-icon1").removeClass("fa-angle-down");
      $(".arrow-icon1").addClass("fa-angle-right");
    }
  });
 
  // $(".up-arrow").click(function(){
   
  //   var content = $('#content-section').offset();
  //   $('html, body').animate({scrollTop: element.top},"slow");
  //   alert("asdfasdf");
  // });

});

