
import { Link } from 'react-router-dom'
import '../styles/RestaurantsListItem.css'

const API_URL = 'https://strapi.myidea.fr'

function RestaurantsListItem ({ restaurant }) {
  return (
    <div className='card'>
      <Link to={`/restaurant/${restaurant.id}`}>
        <img src={`${API_URL}${restaurant.photos[0].url}`} />
        <div className='cardFooter'>
          <h2>{restaurant.title}</h2>
          <p>{restaurant.description.substring(0, 200)}...</p>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantsListItem
