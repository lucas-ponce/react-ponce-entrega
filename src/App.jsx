import './App.css';
import NavBar from './components/NavBar/navBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Chekout';


function App() {

  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ponce/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/checkout' element={ <Checkout/>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App
