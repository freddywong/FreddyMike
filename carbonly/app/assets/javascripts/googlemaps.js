 var distance;
 var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();
      var chicago = new google.maps.LatLng(41.850033, -87.6500523);
      var mapOptions = {

        zoom:7,
        center: chicago

      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      directionsDisplay.setMap(map);
    }

    function calcRoute() {
      var origin = document.getElementById('origin').value;
      var destination = document.getElementById('destination').value;
      var request = {
          origin:origin,
          destination:destination,
          travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    }

    function calculateDistances() {
      var origin1 = document.getElementById('origin').value;
      var destinationA = document.getElementById('destination').value;
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin1],
          destinations: [destinationA],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, callback);
    }

    function callback(response, status) {
      if (status != google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
      } else {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;
        var outputDiv = document.getElementById('outputDiv');
        outputDiv.innerHTML = '';

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            outputDiv.innerHTML += origins[i] + ' to ' + destinations[j]
                + ': ' + results[j].distance.text + ' in '
                + results[j].duration.text + '<br>';
                
                distance = results[j].distance.text
          }
        }
        updateSlider();
      }
    }
    

google.maps.event.addDomListener(window, 'load', initialize);
$("#test").click(test);

