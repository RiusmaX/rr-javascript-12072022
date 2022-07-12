
import '../styles/RestaurantsListItem.css'

const API_URL = 'https://strapi.myidea.fr'

function PlatsListItem ({ plat }) {
  return (
    <div className='card'>
      <img src={`${plat.photos[0] ? API_URL + plat.photos[0].url : '/img/logo.png'}`} />
      <div className='cardFooter'>
        <h2>{plat.nom}</h2>
        <p>{plat.description}</p>
        <p><strong>{plat.price.toFixed(2)} €</strong></p>
      </div>
    </div>
  )
}

export default PlatsListItem
