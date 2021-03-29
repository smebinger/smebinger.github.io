// javascript file by Samara Ebinger
var mymap = L.map('mapid').setView([-71.5, 44.0], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/smebinger/ckl5jwq954f5w17jysw36tsa0/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw', {
  attribution: 'Made with Leaflet and Mapbox.',
  maxZoom: 15,
  minZoom: 12
}).addTo(mymap);

var rectQuad =
  {
  "type": "FeatureCollection",
  "name": "clipshape",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::4269" } },
  "features": [
  { "type": "Feature", "properties": { "OBJECTID": 15986, "CELL_ID": 54355, "CELL_NAME": "Franconia", "PRIMARY_STATE": "New Hampshire", "CELL_MAPCODE": "44071-A5", "CELL_TYPE": 1, "CELL_ALLWATER": 2, "CELL_DESCRIPTION": null, "CELL_DIACRITIC": null, "GLOBALID": "{DDF089BF-D397-11DE-9C20-00144F233E68}", "SHAPE_Length": 1.0, "SHAPE_Area": 0.0625 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -71.5, 44.0 ], [ -71.75, 44.0 ], [ -71.75, 44.25 ], [ -71.5, 44.25 ], [ -71.5, 44.0 ] ] ] ] } }
  ]
  };

  L.geoJSON(rectQuad).addTo(map);
