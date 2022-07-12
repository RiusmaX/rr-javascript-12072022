function creationCookie(nomCookie, valeurCookie, expirationCookie, cheminCookie, domaineCookie, securiteCookie) {
  const cookie = `${nomCookie}=${encodeURI(valeurCookie)} ${!expirationCookie ? '' : '; expires=' + expirationCookie.toGMTString()} ${!cheminCookie ? '' : '; path=' + cheminCookie } ${!domaineCookie ? '' : '; domain=' + domaineCookie} ${securiteCookie ? '; secure' : ''}`
  console.log(cookie)
  document.cookie = cookie
}

let dateExpiration = new Date()
dateExpiration.setTime(dateExpiration.getTime() + 300 * 1000)

creationCookie(
  'monCookie',
  'ENI SERVICE',
  dateExpiration,
  '/',
  null
)

function lectureCookie(nomCookie) {
  if (document.cookie.length > 0) {
    // Séparation de la chaîne de caractères sur le caractère "="
    const cookieTab = document.cookie.split(';')
    // Récupération du nom et de la valeur de l'élément avec la méthode substring
    const nomElement = cookieTab[0].split('=')[0]
    const valeurElement = cookieTab[0].split('=')[1]
    if (nomCookie === nomElement) {
      return decodeURI(valeurElement)
    } else {
      return null
    }
  } else {
    console.log('Pas de cookies dans ce navigateur')
  }
}

console.log(lectureCookie('monCookie'));


/**
 * Local storage
 */

function storeData(key, value) {
  localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
}

function getData(key) {
  return JSON.parse(localStorage.getItem(key))
}

const data = {
  nom: 'Toto',
  prenom: 'Tata'
}

storeData('TEST', data)

// localStorage.clear()

window.addEventListener('load', function () {
  console.log('DOM Chargé')
  const inputNom = document.getElementById('nom')
  const inputPrenom = document.getElementById('prenom')

  if(localStorage.getItem('nom'))
    document.getElementById('nom').value = localStorage.getItem('nom')

  if(localStorage.getItem('prenom'))
    document.getElementById('prenom').value = localStorage.getItem('prenom')

  inputNom.addEventListener('keyup', function(event) {
    localStorage.setItem(event.target.id, event.target.value)
  })
  inputPrenom.addEventListener('keyup', function(event) {
    localStorage.setItem(event.target.id, event.target.value)
  })

})