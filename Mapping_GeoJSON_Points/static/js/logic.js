// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/AllenAx91/Mapping_Earthquakes/main/majorAirports.json"


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  onEachFeature: function(feature, layer) 
    {
      // console.log(feature),
      // console.log(layer),
      layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "</h3><hr>" 
          + "<h4>  Airport Name: " + feature.properties.name + "</h4>");
    }
  }
  ).addTo(map);
});


// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });


// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature),
//     console.log(latlng)
//     ;
//     return L.marker(latlng).bindPopup("<h3>" + feature.properties.name + "</h3><hr>" 
//     + "<br><h4>" + feature.properties.city + ", " 
//     + feature.properties.country + "</br></h4>");
//   }

// }).addTo(map);



// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, 
//   {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) 
//     {
//       // console.log(feature),
//       console.log(layer),
//       layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "</h3><hr>" 
//           + "<h4>  Airport Name: " + feature.properties.name + "</h4>");
//     }
//   }
// ).addTo(map);