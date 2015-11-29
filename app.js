  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    // where you wnat the map to be centered
    center: {
      lat: 40.5592,
      lng: -105.0781
    }
  });

  var marker = new google.maps.Marker({
    position: {
      lat: 40.5592,
      lng: -105.0781
    },
    map: map,
    draggable: true
  });

  google.maps.event.addListener(marker, 'dragend', function() {
    // console.log(marker.getPosition().lat());
    // console.log(marker.getPosition().lng());
    // set the new marker location's lat and lng
    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();
    // set those values equal to the form
    $('#lat').val(lat);
    $('#lng').val(lng);

    localStorage.setItem('lat', lat);
    localStorage.setItem('lng', lng);
    console.log(localStorage.getItem('lat'));
    console.log(localStorage.getItem('lng'));

  });
