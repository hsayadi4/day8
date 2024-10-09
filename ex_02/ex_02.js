var map = L.map('map').setView([46.603354, 1.888334], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);
var schools = [
    { city: "Paris", coords: [48.8566, 2.3522] },
    { city: "Lyon", coords: [45.7640, 4.8357] },
    { city: "Nantes", coords: [47.2184, -1.5536] },
    { city: "Bordeaux", coords: [44.8378, -0.5792] },
    { city: "Toulouse", coords: [43.6047, 1.4442] }
];
var epitechIcon = L.icon({
    iconUrl: 'epitech.png',
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -76]
});
schools.forEach(function(school) {
    L.marker(school.coords, { icon: epitechIcon })
        .addTo(map)
        .bindPopup(school.city + " rocks!")
        .openPopup();
});
