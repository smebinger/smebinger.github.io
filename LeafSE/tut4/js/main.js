// javascript file by Samara Ebinger
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/smebinger/ckl5jwq954f5w17jysw36tsa0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw', {
  attribution: 'Made with Leaflet and Mapbox.',
  maxZoom: 15,
  minZoom: 12
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25,
    radius: 1000
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("<b>Hello people.</b><br>I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
