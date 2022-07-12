import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlatsList from '../components/PlatsList'
import { getRestaurantById } from '../services/Api'

import '../styles/Restaurant.css'

const API_URL = 'https://strapi.myidea.fr'

function Restaurant () {
  const [restaurant, setRestaurant] = useState()
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurantById(id)
      setRestaurant(data)
      document.title = data.title
    }
    getData()
  }, [])

  if (!restaurant) {
    return <h1>Chargement...</h1>
  }

  console.log(restaurant)

  return (
    <>
      <header className='restaurant-header'>
        <div className='header-logo'>
          <img src={`${API_URL}${restaurant.photos[0].url}`} />
        </div>
        <div className='header-infos'>
          <h1>{restaurant.title}</h1>
          <p>{restaurant.description}</p>
          <p>{restaurant.adresse.adresse}</p>
          <p>{restaurant.adresse.code_postal} - {restaurant.adresse.ville}</p>
          <p><a href={`tel:${restaurant.adresse.phone}`}>{restaurant.adresse.phone}</a></p>
        </div>
        <iframe
          width='100%'
          height='300'
          loading='lazy'
          frameborder='0'
          style={{ border: 0, margin: 0, padding: 0 }}
          allowfullscreen
          referrerpolicy='no-referrer-when-downgrade'
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB9_R_UodhlqzJ28E-yzF5G0vZdEGy_2pM=&q='${restaurant.title},${restaurant.ville},${restaurant.pays}`}
        />
        <div className='menu'>
          <h2>Notre carte</h2>
          <PlatsList plats={restaurant.plats} />
        </div>
      </header>
    </>
  )
}

export default Restaurant
