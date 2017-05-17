$(document).ready(function () {

  $('.image').each(function(i){
    setTimeout(function(){
      $('.image').eq(i).addClass('is-visible');
    },200 * i);
  });

});
