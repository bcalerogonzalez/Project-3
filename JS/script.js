function initMap(){
	  var chicago={lat: 41.887855, lng: -87.630347};
	  var puerto rico={lat: 18.448335, lng: -67.158733};
	  var dubai={lat: 25.2048, lng: -55.2708};
	
	  var map=new google.maps.Map(
	    document.getElementById('map'), {
	    zoom: 9, center: chicago
	    }
	  );
	
	  var marker1=new google.maps.Marker({
	    position: chicago,
	    map: map
	  });
	
	  var marker2=new google.maps.Marker({
	    position: puerto rico,
	    map: map
	  });
	
	  var marker3=new google.maps.Marker({
	    position: dubai,
	    map: map
	  });
}