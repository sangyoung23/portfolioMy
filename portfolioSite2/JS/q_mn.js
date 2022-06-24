$(document).ready(function(){
    var currentPosition = parseInt($("#q_mn").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $("#q_mn").stop().animate({"top":position+currentPosition+"px"},800);
    });
  });