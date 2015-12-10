$(document).ready(function() {
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $.get('/home/get_location_url',function(url){
    console.log(url);
    $.get(url, function(response){
      console.log(response);
    });
  });
});
