var map = L.map('map').setView([42.5048, 27.4626], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var fireStationIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.freepik.com/256/17267/17267287.png?semt=ais_hybrid',

    iconSize:     [18, 21], 
    iconAnchor:   [12, 22], 
    popupAnchor:  [-3, -76]
});

L.marker([42.4975, 27.4706], {icon: fireStationIcon}).addTo(map).bindPopup("Fire Station Burgas");
L.marker([42.57028, 27.51528], {icon: fireStationIcon}).addTo(map).bindPopup("Fire Station Burgas - PBZN Fire and emergency safety");



