// javascript file by Samara Ebinger
var mymap = L.map('mapid').setView([42.94196183489097, -71.46199026589449], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/smebinger/ckl5jwq954f5w17jysw36tsa0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw', {
  attribution: 'Made with Leaflet and Mapbox.',
  maxZoom: 18,
  minZoom: 3
}).addTo(mymap);

var catIcon = L.icon({
    iconUrl: 'lib/Theo.PNG',

    iconSize:     [170, 195], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([42.94196968887211, -71.46188297754331], {icon: catIcon}).addTo(mymap);

L.marker([42.75086772242312, -72.00816922041355], {icon: catIcon}).addTo(mymap);
