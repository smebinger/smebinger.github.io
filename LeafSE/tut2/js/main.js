// javascript file by Samara Ebinger
var mymap = L.map('mapid').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/smebinger/ckl5jwq954f5w17jysw36tsa0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw', {
  attribution: 'Made with Leaflet and Mapbox.',
  maxZoom: 15,
  minZoom: 12
}).addTo(mymap);

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);

mymap.locate({setView: true, maxZoom: 14});
