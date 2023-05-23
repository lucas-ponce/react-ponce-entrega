import './App.css';
import NavBar from './components/NavBar/navBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path='/ponce/:categoria' element={<ItemListContainer/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
