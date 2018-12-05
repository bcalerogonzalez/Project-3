function initMap(){
  var puerto = {lat: 18.158912, lng: -66.506909};
  var crash = {lat: 18.458954, lng: -67.163973};
  var villa = {lat: 18.512994, lng: -67.102764};
  var lajas = {lat: 17.975064, lng: -67.049486};
	
  var map=new google.maps.Map(
    document.getElementById('map'), {
    zoom: 4, center: puerto
    }
  ); 
	
  var marker1=new google.maps.Marker({
    position: puerto,
    map: map
  });
	
  var marker2=new google.maps.Marker({
    position: crash,
    map: map
  });
	
  var marker3=new google.maps.Marker({
    position: villa
    map: map
  });
		
 var marker4=new google.maps.Marker({
    position: lajas
    map: map
  });		
}
