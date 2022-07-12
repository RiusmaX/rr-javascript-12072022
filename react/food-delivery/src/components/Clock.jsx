import { useEffect, useState } from 'react'
import FormatedDate from './FormatedDate'

function Clock () {
  const [date, setDate] = useState(new Date())

  // Appelé au montage du composant
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    // Appelé au démontage du composant
    return function () {
      clearInterval(interval)
    }
  }, [])

  return (
    <FormatedDate date={date} />
  )
}

export default Clock
