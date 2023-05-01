import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/navBar'

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer props={"Ponce Joyas"}/>
    </>
  )
}

export default App
