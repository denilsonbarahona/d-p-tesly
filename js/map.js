const harbour_green_park = {lat: 49.28983226069359, lng:-123.12138427895303};
const vancity = { lat: 49.2827, lng: -123.1207 };

function initMap() {
    const direction_services = new google.maps.DirectionsService();
    const map = new  google.maps.Map(document.getElementById("map"), {
        zoom:17,
        center:vancity,
        disableDefaultUI: true,
    });
    
    const directionsRenderer = new google.maps.DirectionsRenderer({map: map});
    
    DisplayRoute(direction_services, directionsRenderer);
}


function DisplayRoute(direction_services, directionsRenderer){
    direction_services.route({
        origin:vancity,
        destination:harbour_green_park,
        travelMode: google.maps.TravelMode.DRIVING,
    })
    .then(response=>{
        directionsRenderer.setDirections(response);
    });
}