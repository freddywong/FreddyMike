function carEmissionsPerKm(){
  var $selectedCar = $("#car-results").find("span").text();

  var myJson;
  // debugger;
  $.getJSON("/cars?search=" + $selectedCar, function(cars) {
    // debugger;
    myJson = cars[0].emissionperkm;
    // return cars[0].emissionperkm;
    debugger;
  });

debugger;



  //   $.ajax({
  //   method: "GET",
  //   url: "/cars?search=" + $selectedCar,
  //   dataType: "json",
  //   success: function(car) {
  //   myJSON = car[0].emissionperkm;
  //   // debugger;

  //   },
  //   error: function (error) {
  //     console.log(error);
  //   }

  // });
  //     myJSON;
  //   debugger;


}

function carEmissionsPerTrip(distance) {

  var selectedCarEmissions = carEmissionsPerKm();

  var routeDistance = 2 * (parseFloat(distance));
  return selectedCarEmissions * routeDistance; 
}
  

function updateSlider() {
  var currentDaysValue = $("input#days-slide").val();
  var currentTimePeriodValue = $("input#time-period-slide").val();

  var totalCarbonEmissions = Math.round(carEmissionsPerTrip(distance) * currentDaysValue * currentTimePeriodValue);
  var treeCost = 3.75
  var totalCarbonCost = Math.round((totalCarbonEmissions/167) * treeCost);
  $("#days-counter").text(currentDaysValue);
  $("#time-period-counter").text(currentTimePeriodValue);
          
    // $("#carbon-emissions").text(totalCarbonEmissions + " Kg");
    // $("#carbon-cost").text("$" + totalCarbonCost);
}



function updateCounter() {

  var currentDaysValue = $("input#days-slide").val();
  var currentTimePeriodValue = $("input#time-period-slide").val();

  var totalCarbonEmissions = Math.round(carEmissionsPerTrip(distance) * currentDaysValue * currentTimePeriodValue);
  var treeCost = 3.75;
  var totalCarbonCost = Math.round((totalCarbonEmissions/167) * treeCost);  
  if (distance === undefined) {
    $("#carbon-emissions").text("0 Kg");
    $("#carbon-cost").text("0 Kg");

  } else { 

  var percent_number_step = $.animateNumber.numberStepFactories.append(' Kg')
  $('#carbon-emissions').animateNumber(
    {
      number: totalCarbonEmissions,
      color: 'red',
      'font-size': '30px',

      easing: 'easeInQuad',

      numberStep: percent_number_step
    },
    1000
  );

  var percent_number_step = $.animateNumber.numberStepFactories.append(' Dollars')
  $('#carbon-cost').animateNumber(
    {
      number: totalCarbonCost,

      'font-size': '30px',

      easing: 'easeInQuad',

      numberStep: percent_number_step
    },
    1000
  ); 
}  

//PRINT OUT MULTIPLE TREES
  $(".tree").empty();
  var numberOfTrees = Math.round(totalCarbonEmissions / 167)
  console.log(numberOfTrees);
  var treeTemplate = $("#tree-template").html(); 
  var oneTree = $("#onetree").html(); 
  if (numberOfTrees < 24) {
    for  ( i = 0; i < numberOfTrees; i++ ){
        var printTrees = $(".tree").append(treeTemplate);
    } 
  } else { 
        var printTrees = $(".tree").append("<div class=\"test\">" + oneTree + "<h2>X</h2><h1 class=\"tree-cost\"></h1></div>"); 
    }
  
  updateTrees();

  var percent_number_step = $.animateNumber.numberStepFactories.append('')
  $('.tree-cost').animateNumber(
    {
      number: numberOfTrees,

      'font-size': '30px',

      easing: 'easeInQuad',

      numberStep: percent_number_step
    },
    1000
  );
}



$("input#days-slide").on("input", updateSlider);
$("input#time-period-slide").on("input", updateSlider); 

$("input#days-slide").on("change", updateCounter);
$("input#time-period-slide").on("change", updateCounter);



