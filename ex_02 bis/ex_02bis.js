// Initialiser la carte centrée sur la France
var map = L.map('map').setView([46.603354, 1.888334], 6); 

// Ajouter des tuiles (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 6,  // Définir un zoom minimum pour empêcher le dézoom trop important
}).addTo(map);

// Définir les écoles Epitech avec leurs coordonnées
var schools = [
    { city: "Paris", coords: [48.8566, 2.3522] },
    { city: "Lyon", coords: [45.7640, 4.8357] },
    { city: "Nantes", coords: [47.2184, -1.5536] },
    { city: "Bordeaux", coords: [44.8378, -0.5792] },
    { city: "Toulouse", coords: [43.6047, 1.4442] }
];

// Icone personnalisée pour le logo Epitech
var epitechIcon = L.icon({
    iconUrl: 'epitech.png', // Chemin vers le logo Epitech
    iconSize: [38, 38], // Taille de l'icône
    iconAnchor: [22, 38], // Point d'ancrage de l'icône
    popupAnchor: [-3, -76] // Point d'ancrage du popup
});

// Ajouter une couche de groupe de marqueurs pour les écoles
var schoolLayer = L.layerGroup();

// Ajouter des marqueurs pour chaque école avec un popup
schools.forEach(function(school) {
    L.marker(school.coords, { icon: epitechIcon })
        .addTo(schoolLayer)
        .bindPopup(school.city + " rocks!");
});

// Ajouter la couche de groupe de marqueurs à la carte
schoolLayer.addTo(map);

// Ajuster automatiquement la carte pour inclure toutes les villes
map.fitBounds(schoolLayer.getBounds());

// Définir des limites maximales et minimales à la carte pour empêcher de voir en dehors de la zone des écoles
map.setMaxBounds(schoolLayer.getBounds());

// Désactiver l'interaction manuelle avec le zoom si nécessaire
map.options.minZoom = map.getZoom(); // Fixer un zoom minimum basé sur l'inclusion de toutes les écoles
