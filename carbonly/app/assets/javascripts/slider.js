function updateSlider () {
  // debugger;
  var carEmissionsPerKm = 0.19;
  var routeDistance = 2 * (parseFloat(distance));

  var currentDaysValue = $("input#days-slide").val();
  var currentTimePeriodValue = $("input#time-period-slide").val();

  var totalCarbonEmissions = Math.round(carEmissionsPerKm * routeDistance * currentDaysValue * currentTimePeriodValue);
  var treeCost = 3.75
  var totalCarbonCost = Math.round((totalCarbonEmissions/167) * treeCost);

  $("#days-counter").text(currentDaysValue);
  $("#time-period-counter").text(currentTimePeriodValue);
            
  if (distance === undefined) {
    $("#carbon-emissions").text("0 Kg");
    $("#carbon-cost").text("0 Kg");

  } else {
    $("#carbon-emissions").text(totalCarbonEmissions + " Kg");
    $("#carbon-cost").text("$" + totalCarbonCost);
  }

//PRINT OUT MULTIPLE TREES
  var numberOfTrees = Math.round(totalCarbonEmissions / 167) 
  for ( i = 0; i < numberOfTrees; i++ ){
    var treeTemplate = $("#tree-template").html();
    $(".tree").append(treeTemplate);
  }  
  
}

$("input#days-slide").mousemove(updateSlider);
$("input#time-period-slide").mousemove(updateSlider); 


