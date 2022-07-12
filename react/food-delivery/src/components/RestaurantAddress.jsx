function RestaurantAddress ({ restaurant }) {
  return (
    <div className='header-infos'>
      <h1>{restaurant.title}</h1>
      <p>{restaurant.description}</p>
      <p>{restaurant.adresse.adresse}</p>
      <p>{restaurant.adresse.code_postal} - {restaurant.adresse.ville}</p>
      <p><a href={`tel:${restaurant.adresse.phone}`}>{restaurant.adresse.phone}</a></p>
    </div>
  )
}

export default RestaurantAddress
