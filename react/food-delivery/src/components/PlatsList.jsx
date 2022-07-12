import PlatsListItem from './PlatsListItem'

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  platList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
}

const categoriesTrad = {
  dish: 'Plats',
  drink: 'Boissons',
  dessert: 'Desserts',
  starter: 'Entrées'
}

function PlatsList ({ plats }) {
  const categories = [...new Set(plats.map(p => p.category))]

  return (
    <div style={styles.list}>
      {
        categories.map((category, index) => {
          return (
            <div key={index}>
              <h3>{categoriesTrad[category]}</h3>
              <div style={styles.platList}>
                {
                  plats.filter(p => p.category === category).map(plat => {
                    return (
                      <PlatsListItem key={plat.id} plat={plat} />
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PlatsList
