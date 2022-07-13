import { Link } from 'react-router-dom'
import { checkAuth } from '../helpers/tokenHelpers'

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: 30,
    backgroundColor: '#333333'
  },
  nav: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 200
  },
  link: {
    marginInline: 10,
    textDecoration: 'none',
    color: 'white'
  }
}

function Header () {
  const auth = JSON.parse(window.localStorage.getItem('AUTH'))
  let greedings
  if (checkAuth()) {
    greedings = <h4>Bonjour {auth.user.email}</h4>
  } else {
    greedings = <h4>Vous n'est pas connecté</h4>
  }

  return (
    <header style={styles.header}>
      <img src='/img/logo.png' style={styles.logo} />
      <nav style={styles.nav}>
        <Link to='/' style={styles.link}>
          Accueil
        </Link>
        <Link to='/restaurants' style={styles.link}>
          Restaurants
        </Link>
        <Link to='/about' style={styles.link}>
          A propos
        </Link>
      </nav>
      {greedings}
    </header>
  )
}

export default Header
