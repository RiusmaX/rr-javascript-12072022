class Voiture {

  constructor(marque, modele, pays) {
    this.marque = marque
    this.modele = modele
    this.pays = pays
  }

  afficherVoiture () {
    return `
    <p>Marque : ${this.marque}</p>
    <p>Modèle : ${this.modele}</p>
    <p>Pays : ${this.pays}</p>
    `
  }
}