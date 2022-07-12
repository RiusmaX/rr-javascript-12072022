function FormatedDate ({ date }) {
  return (
    <h1>Il est : {date.toLocaleTimeString()}</h1>
  )
}

export default FormatedDate
