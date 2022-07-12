import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strapi.myidea.fr',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

const getRestaurants = async () => {
  try {
    const response = await api.get('/restaurants')
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(response)
    }
  } catch (error) {
    console.error(error)
  }
}

const getRestaurantById = async (id) => {
  try {
    const response = await api.get(`/restaurants/${id}`)
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(response)
    }
  } catch (error) {
    console.error(error)
  }
}

export {
  getRestaurants,
  getRestaurantById
}
