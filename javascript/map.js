function initMap(){
  var puerto ={lat: 18.158912, lng: -66.506909};
  var crash ={lat: 18.458954, lng: -67.163973};
  var villa ={lat: 18.512994, lng: -67.102764};
  var lajas ={lat: 17.975064, lng: -67.049486};
		
 var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: l
  });
	
  var marker = new google.maps.Marker({
    position: (puerto, crash, villa, lajas),
    map: map
  });
}

function goto(location){
  map.panTo(location);
  map.setzoom(15);
}
