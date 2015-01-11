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

//ADDING A NEW TRIP




$(function() {
  $("#add-trip").on("submit", function(event) {
    var origin = $("#origin").val();
    var destination = $("#destination").val();

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
    $("#trips-list").append("<p data-id=\"" + trip.id + "\" class=\"trip\"><span>" + trip.origin + trip.destination + "</span> <button>x</button></p>");
      }
    });
        event.preventDefault();
  });

  // $("#add-trip").on("submit", function(event) {
  //   var origin = $("#origin").val();
  //   var destination = $("#destination").val();

  //   $.post('/trips', 
  //     { trip: 
  //       { origin: origin, 
  //         destination: destination },
  //         _method: "POST"    
  //     }, 
  //     function(trip){
  //       $("#trips-list").append("<p data-id=\"" + trip.id + "\" class=\"trip\"><span>" + trip.origin + "</span> <button>x</button></p>");
  //     },"json");

  //   event.preventDefault();
  // });

  // $.getJSON("/trips", function(trips) {
  //   $.each(todos, function(index, todo) {
  //     $("body").append("<p data-id=\"" + todo.id + "\" class=\"todo\"><span>" + todo.text + "</span> <button>x</button></p>");
  //   });
  // });

});