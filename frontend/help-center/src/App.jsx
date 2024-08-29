import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Serachbar from './components/searchbar/Serachbar'
import Card from './components/card/Card'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Serachbar />
      <Footer />
    </>
  )
}

export default App
