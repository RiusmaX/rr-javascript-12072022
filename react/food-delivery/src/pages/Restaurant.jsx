import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlatsList from '../components/PlatsList'
import RestaurantAddress from '../components/RestaurantAddress'
import RestaurantMap from '../components/RestaurantMap'
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

  return (
    <>
      <header className='restaurant-header'>
        <div className='header-logo'>
          <img src={`${API_URL}${restaurant.photos[0].url}`} />
        </div>
        <RestaurantAddress restaurant={restaurant} />
        <RestaurantMap restaurant={restaurant} />
        <div className='menu'>
          <h2>Notre carte</h2>
          <PlatsList plats={restaurant.plats} />
        </div>
      </header>
    </>
  )
}

export default Restaurant
