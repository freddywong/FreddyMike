// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {

//LOADING A TRIP
  $("#trips-list").on("click", ".trip", function() {
    var $trip = $(this);
    var tripID = $trip.attr("data-id");
    var origin = $("#origin");
    var destination = $("#destination");
    var originText = $(this).children(".origin").text();
    var destinationText = $(this).children(".destination").text();
    $("form#add-trip").addClass("updating").attr("data-id", tripID);
    origin.val(originText);
    destination.val(destinationText);
  });

//DELETING A TRIP
  $("#trips-list").on("click", ".trip button", function() {
    var $trip = $(this).parent();
    var tripID = $trip.attr("data-id");

    $trip.hide();

    $.ajax({
      method: "POST",
      url: "/trips/" + tripID,
      dataType: "json",
      data: {
        _method: "DELETE"
      },
      success: function() {
        $trip.remove();     
      },
      error: function() {
        alert("Sorry something went wrong...");
        $trip.show();
      }
    });
  });

//SEARCH CARS AND PRINT RESULTS
$("#search-car-form").on("submit", function(event) {
  $("#car-results").empty();
  var searchCarField = $("#search-car-field").val();
  $.getJSON("/cars?search=" + searchCarField, function(cars) {
    $.each(cars, function(index, car) {
      $("#car-results").append("<p car-id=\"" + car.id + "\" class=\"car\"><span>" + car.brandmodel + "</span></p>");
    });
  });
  event.preventDefault();
});  

//LOAD SELECTED CAR
$("#car-results").on("click", ".car", function() {  
  var $car = $(this).children("span").text();
  $("#car-results").empty();
  $.getJSON("/cars?search=" + $car, function(cars) {
    $.each(cars, function(index, car) {
      $("#car-results").append("<p selected-car=\"true\" car-id=\"" + car.id + "\" class=\"car\"><span>" + car.brandmodel + "</span></p>");
    });
  });
});  

//ADDING A NEW TRIP
  $("#add-trip").on("submit", function(event) {
    console.log("#add-trip submit event");
    var origin = $("#origin").val();
    console.log("ORIGIN: ", origin);

    var destination = $("#destination").val();
    console.log("DESTINATION: ", destination);

    if ( !$("form#add-trip").hasClass("updating") ) {
      $.ajax({
        method: "POST",
        url: "/trips",
        dataType: "json",
        data: {
          trip: {
            origin: origin,
            destination: destination 
          }
        },
        success: function(trip) {
          $("#trips-list").append("<p data-id=\"" + trip.id + "\" class=\"trip\"><span class=\"origin\">" + trip.origin + " </span><span class=\"destination\">" + trip.destination + "</span> <button>x</button></p>");
        },
        error: function (error) {
          console.log(error);
        }
      });  
    } else {
//UPDATING A TRIP
      var tripID = $(this).attr("data-id");
      $.ajax({
        method: "POST",
        url: "/trips/" + tripID,
        dataType: "json",
        data: {
          trip: {
            origin: origin,
            destination: destination
          },
          _method: "PATCH"
        },
        success: function(trip) {
          $("#trips-list").children("p[data-id=" + trip.id + "]").find(".origin").text(trip.origin);
          $("#trips-list").children("p[data-id=" + trip.id + "]").find(".destination").text(trip.destination);
          $("form#add-trip").removeClass("updating");
        },
        error: function() {
          alert("Sorry something went wrong...");
          $trip.show();
        }
      });
    }
    event.preventDefault();
  });

//ADD TRIPS V2 ** currently doesn't work

  // $("#add-trip").on("submit", function(event) {
  //   var origin = $("#origin").val();
  //   var destination = $("#destination").val();

  //   $.post('/trips', 
  //     { trip: 
  //       { origin: origin,
  //         destination: destination 
  //     }, 
  //     function(trip){
  //       $("#trips-list").append("<p data-id=\"" + trip.id + "\" class=\"trip\"><span>" + trip.origin + " "+ trip.destination + "</span> <button>x</button></p>");
  //     },"json");

  //   event.preventDefault();
  // });

//LOAD THE FULL LIST
  $("#trips-list").empty();
  $.getJSON("/trips", function(trips) {
    $.each(trips, function(index, trip) {
      $("#trips-list").append("<p data-id=\"" + trip.id + "\" class=\"trip\"><span class=\"origin\">" + trip.origin + " </span><span class=\"destination\">" + trip.destination + "</span> <button>x</button></p>");    });

  });

//SUBMIT ADDRESS LISTENERS

  $('#button-submit').click(function(){
    calcRoute();
    calculateDistances();
  });



});