


function updateSlider () {
  var currentValue = $("input#slide").val();
  console.log(currentValue);


  $("#chosen").text(currentValue);
  

}

$("input#slide").mousemove(updateSlider);
