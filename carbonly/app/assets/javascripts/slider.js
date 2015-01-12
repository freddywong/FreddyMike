function updateSlider () {
  var currentValue = $("input#slide").val();
  var carEmissionsPerKm = 0.19;

  var routeDistance = parseFloat(distance);
  var totalCarbonEmissions = Math.round(carEmissionsPerKm * routeDistance * currentValue);


  // console.log(currentValue);

  $("#chosen").text(currentValue);
  
  $("#carbon-emissions").text(totalCarbonEmissions);
}

$("input#slide").mousemove(updateSlider);
