// La fonction houdini pour cacher tous les paragraphes
function houdini() {
   $('p').hide();  // Sélectionne tous les éléments <p> et les cache
}

// Quand le bouton est cliqué, la fonction houdini est appelée
$('#hide-btn').click(function() {
   houdini();
});
