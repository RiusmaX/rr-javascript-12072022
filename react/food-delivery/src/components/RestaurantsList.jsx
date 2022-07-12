import RestaurantsListItem from './RestaurantsListItem'

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

function RestaurantsList ({ restaurants }) {
  return (
    <div style={styles.list}>
      {
        restaurants.map(restaurant => {
          return (
            <RestaurantsListItem key={restaurant.id} restaurant={restaurant} />
          )
        })
      }
    </div>
  )
}

export default RestaurantsList
