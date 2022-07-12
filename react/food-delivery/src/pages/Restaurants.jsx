import { useEffect, useState } from 'react'
import { getRestaurants } from '../services/Api'
import RestaurantsList from '../components/RestaurantsList'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurants()
      setRestaurants(data)
    }
    getData()
  }, [])

  if (!restaurants || restaurants.length < 1) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Restaurants
