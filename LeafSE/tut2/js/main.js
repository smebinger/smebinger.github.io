// javascript file by Samara Ebinger
var mymap = L.map('mapid').fitWorld();

mymap.locate({setView: true, maxZoom: 14});

L.tileLayer('https://api.mapbox.com/styles/v1/smebinger/ckl5jwq954f5w17jysw36tsa0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw', {
  attribution: 'Made with Leaflet and Mapbox.',
  maxZoom: 15,
  minZoom: 12
}).addTo(mymap);