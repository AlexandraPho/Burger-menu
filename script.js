console.log('connecté'); 

//Au clic sur l'icone, je vzux que la div descende j'usqu'en bas.
//L'icone doit se modifier en croix.
//Au clic suivant, la div modal doit remonter jusqu'en haut et l'icone reprend sa forme original.

//Sélectionner et stocker
//l'icone burger
//on sélectionne un sous élément i pour l'icone
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
//la div modal
const modal = document.querySelector('.modal');
console.log(modal);

//Soumettre à une action
//On ajoute un écouteur au clic sur l'icone du burger menu
icone.addEventListener('click', function(){
    console.log("icone cliquée, c'est OK!");
    //L'action doit etre réversible donc on utilisera 'toggle'
    modal.classList.toggle('change-modal');
    //Dernière étape l'icone doit changer pour devenir une croix
    icone.classList.toggle('fa-times');
});


