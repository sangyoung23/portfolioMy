$(document).ready(function(){
    var currentPosition = parseInt($("#q_mn").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $("#q_mn").stop().animate({"top":position+currentPosition+"px"},800);
    });
  });

  $(document).ready(function(){
    var currentPosition = parseInt($("#q_icon").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $("#q_icon").stop().animate({"top":position+currentPosition+"px"},800);
    });
  });