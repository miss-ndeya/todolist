// selectionner
let input = document.querySelector("#input");
let btnAjouter = document.querySelector("#btnAjouter");
let ul = document.querySelector("ul");

btnAjouter.addEventListener('click', listeTache);

function listeTache() {
    let valeurInput = input.value 
    // creation de li et buttons
    let li = document.createElement('li');
    let supprimer = document.createElement('button');
    let terminer = document.createElement('button');
    let modifier = document.createElement('button');

    supprimer.innerHTML = 'Supprimer';
    terminer.innerHTML = 'terminer';
    modifier.innerHTML = `Modifier`;
    li.innerHTML = `${valeurInput}`;
    li.appendChild(terminer);
    li.appendChild(supprimer);
    li.appendChild(modifier);
    ul.appendChild(li);

    // renitialiser l'input de recherche apres chak ajout
    input.value = "";

    // evenement de click sur les button supprimer et terminer
    terminer.addEventListener('click', () => {
        li.style.backgroundColor = '#198754';
        terminer.style.backgroundColor = '#198754';
        modifier.style.display = 'none';
        });
        supprimer.addEventListener('click', function(el) {
            el.target.parentElement.remove();
        });
        // modifier.addEventListener('click', function(el) {
            
        // });

        // styliser les buttons 
        modifier.style.backgroundColor = 'transparent'
        supprimer.style.backgroundColor = 'transparent'
        modifier.style.color = '#0c013d'
        supprimer.style.color = 'red'
        modifier.style.display = 'none'
}
