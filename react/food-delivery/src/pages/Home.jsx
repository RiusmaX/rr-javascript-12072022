function Home () {
  const handleLogout = () => {
    window.localStorage.removeItem('AUTH')
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <>
      <h1>HOME</h1>
      <button onClick={handleLogout}>Déconnection</button>
    </>
  )
}

export default Home
