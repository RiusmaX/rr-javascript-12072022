// Premier Callback sur l'event 'load' de la fenêtre
window.addEventListener('load', function(e) {
  console.log('DOM Chargé')
  const element = document.createElement('button');
  element.innerHTML = 'Click me !'
  // Callback sur l'event 'click' du bouton
  element.addEventListener('click', function(e) {
    window.alert('Le bouton est cliqué !')
  })
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(element)
})


function monCallback (text) {
  alert('je suis le callback : ' + text)
}

function maFonctionAvecCallback (text, cb) {
  /* blabla - mon traitement*/
  text = 'Nouveau texte'
  cb(text)
}

// maFonctionAvecCallback('toto', monCallback)

function maPremierePromesse () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('ma promesse est terminée')
      reject('Une erreur s\'est produite')
    }, 3000)
  })
}

async function maPromesseAsync () {
  const response = await fetch('https://api.thecatapi.com/v1/images/search')
  const result = await response.json()
  return result
}

// maPremierePromesse()
// .then(resultat => document.write(resultat))
// .catch(error => console.error(error))

(async () => {
  const retour = await maPromesseAsync()
  console.log(retour)
})()