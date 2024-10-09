// La fonction houdini pour cacher les éléments avec un id ou une classe donnés
function houdini(name) {
   $('#' + name).hide();   // Cacher l'élément avec l'id "name"
   $('.' + name).hide();   // Cacher tous les éléments avec la classe "name"
}

// Quand le bouton est cliqué, la fonction houdini est appelée avec l'input de l'utilisateur
$('#hide-btn').click(function() {
   const name = $('#name-input').val();  // Récupère la valeur saisie par l'utilisateur
   houdini(name);  // Appelle la fonction houdini avec le nom donné
});
