$(document).ready(function(){

  $( "#this_id" ).hide()
  $( "#superbutton2" ).prop('disabled', true);
  
  $( "#superbutton" ).click(function() {
    $( "#this_id" ).delay(1000).fadeToggle("slow");
    $( "#that_id" ).fadeToggle("slow");
    $( "#superbutton" ).prop('disabled', true);
    $( "#superbutton2" ).prop('disabled', false);
  });
  $( "#superbutton2" ).click(function() {
    $( "#that_id" ).delay(1000).fadeToggle("slow");
    $( "#this_id" ).fadeToggle("slow");
    $( "#superbutton" ).prop('disabled', false);
    $( "#superbutton2" ).prop('disabled', true);
  });

});