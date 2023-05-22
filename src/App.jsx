import './App.css';
import NavBar from './components/NavBar/navBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/nosotros';
import Fragancias from './components/Fragancias/fragancias';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path='/fragancias/:id' element={<Fragancias/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
