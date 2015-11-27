var $button = $('#button');

button.addEventListener('click', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBwKaJeGg_n8IB1jeaGnvrQNEqe2d94iVQ',
    method: "POST",
    success: function(data) {
      var locationData = JSON.stringify(data);
      var locationObject = JSON.parse(locationData);
      console.log(locationObject);
      var locationLat = locationObject.location.lat;
      var locationLng = locationObject.location.lng;

    }
  })
});

function initMap() {
  var myLatlng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
}
