import { Link } from 'react-router-dom'

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
    </header>
  )
}

export default Header
