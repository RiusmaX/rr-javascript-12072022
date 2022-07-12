
class VoitureSport extends Voiture {
  constructor(marque, modele, pays, vitesseMax) {
    super(marque, modele, pays)
    this.vitesseMax = vitesseMax
  }

  setMarque (marque) {
    this.marque = marque
  }

  getMarque () {
    return this.marque
  }

  afficherVoitureSport() {
    return super.afficherVoiture()
     + `<p>Vitesse maximale : ${this.vitesseMax} km/h</p>`
  }
}
