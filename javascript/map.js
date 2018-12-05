function initMap() {
  var map;
  var puerto = {lat: 18.158912, lng: -66.506909};
  var crash = {lat: 18.458954, lng: -67.163973};
  var villa = {lat: 18.512994, lng: -67.102764};
  var lajas = {lat: 17.975064, lng: -67.049486};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: puerto
  });
  var marker = new google.maps.Marker({
    position: (puerto, crash, villa, lajas),
    map: map
  });
}
function goto(location){
  map.panTo(location);
  map.setZoom(15);
<button onclick="goto(puerto)" type="button">Puerto Rico</button> <button onclick="goto(crash)" type="button">Crash Boat</button> <button onclick="goto(villa)" type="button">Villa Montana</button> <button onclick="goto(lajas)" type="button">Lajas</button>
}
