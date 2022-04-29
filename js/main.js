//On crée un écouteur d'événement à l'input : de type "input"=> on récupère chaque changement créé par l'utilisateur au niveau du input :
document.querySelector("#cp").addEventListener("input",function(){
    if(this.value.length == 5){
        
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
        
        fetch(url)
            .then((response) => 
                response.json()
            .then((data) => {
                //console.log(data);
                let affichage = "<ul>";
                for(let ville of data){
                    affichage += `<li><strong>${ville.nom}</strong> - code : ${ville.code} et population : ${ville.population} habitants</li>`
                }
                affichage += '</ul>';
                document.querySelector("#villes").innerHTML = affichage;
            })
            )
            .catch(err => console.log('Erreur : ' + err))
    }
});
