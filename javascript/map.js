function initMap() {
  var map
  var crash = {lat: 18.458954, lng: -67.163973};
		
 var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: crash
  });
	
  var marker = new google.maps.Marker({
    position: (crash),
    map: map
  });
}

function goto(location){
  map.panTo(location);
  map.setzoom(15);
}
