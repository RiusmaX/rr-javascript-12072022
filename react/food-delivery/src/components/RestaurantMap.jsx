function RestaurantMap ({ restaurant }) {
  return (
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
  )
}

export default RestaurantMap
