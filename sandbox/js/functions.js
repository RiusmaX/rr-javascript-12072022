console.log('Hello word !')

var addition = {
  x: 5,
  y: 10,
  calcul: function () {
    return this.x + this.y
  }
}
console.log('Somme : ' + addition.calcul())

let maVoiture = new Voiture('Volkswagen', 'Golf V', 'France')

document.write(maVoiture.afficherVoiture())

let maVoitureDeSport = new VoitureSport('Porsche', '911', 'France', 290)

document.write(maVoitureDeSport.afficherVoitureSport())


// const nouvelleFenetre = window.open('', 'width=200, height=200, location=yes, titlebar=yes')

// nouvelleFenetre.focus()

// nouvelleFenetre.close()