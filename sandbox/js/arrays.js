const voituresSport = ['Porsche', 'Ferrari', 'BMW', 'Lamborghini']
// = const voituresSport = new Array('Porsche', 'Ferrari')

document.write('<h3>Boucle d\'affichage des marques</h3>')

voituresSport.forEach(marque => {
  document.write(`<p>Marque : ${marque}</p>`)
})

const voituresSportObj = {
  marques: voituresSport,
  genre: 'Voitures de sport',
  afficherVoitures: function () {
    this.marques.forEach(marque => {
      document.write(`<p> Marque : ${marque} </p>`)
      document.write(`<p> Genre : ${this.genre} </p>`)
    })
  }
}

document.write('<h3>Afficher les marques avec un object</h3>')

voituresSportObj.afficherVoitures()

voituresSport.push('Maserati')

// Utilisation du for ... of
// for (let marque of voituresSport) {
//   document.write(`<p>Marque: ${marque} </p>`)
// }

let mapVoitures = new Map([
  ['porsche911', 'Porsche 911'],
  ['testarossa', 'Ferrari Testarossa'],
  ['bmwm5', 'BMW M5']
])

// Ajouter un élément à la fin de la Map
mapVoitures.set('simca1100', 'Simca 1100')

// Affichage des clefs
for (let cle of mapVoitures.keys()) {
  document.write(cle + '<br />')
}

// Affichage des valeurs
for (let value of mapVoitures.values()) {
  document.write(value + '<br />')
}

// Affichage sous forme d'entrées 
for (let voiture of mapVoitures.entries()) {
  document.write(`${voiture[0]} - ${voiture[1]} </br>`)
}

// Destructuration
for (let [cle, valeur] of mapVoitures.entries()) {
  document.write(`${cle} - ${valeur} </br>`)
}

let setVoitures = new Set(['Ferrari Testarossa', 'Porsche 911', 'BMW M5', 'BMW M5'])

setVoitures.add('Simca 1100')

setVoitures.forEach(voiture => {
  document.write(`Set Voiture : ${voiture} <br/>`)
})