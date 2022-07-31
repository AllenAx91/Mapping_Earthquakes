// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/AllenAx91/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  weight: 1,
  fillColor: "yellow"
}

// // Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data
  , {
  style: myStyle,
    onEachFeature: function(feature, layer) 
      {
        // console.log(feature),
        console.log(layer),
        layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3><hr>" 
            // + "<h4> Destination: " + feature.properties.src + "</h4>"
            );
      }
    }
    ).addTo(map);
});


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
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//   onEachFeature: function(feature, layer) 
//     {
//       // console.log(feature),
//       // console.log(layer),
//       layer.bindPopup("<h3> Airport Code: " + feature.properties.faa + "</h3><hr>" 
//           + "<h4>  Airport Name: " + feature.properties.name + "</h4>");
//     }
//   }
//   ).addTo(map);
// });



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