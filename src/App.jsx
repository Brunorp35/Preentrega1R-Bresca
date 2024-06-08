import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo = "Primer E-Commerce React" />
    </div>
  )
}

export default App
