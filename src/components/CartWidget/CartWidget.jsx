import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div>
            <Link  className='link-cart' style={{ textDecoration: "none" }} to='/cart'>
                <img className="cartImg"src="\public\img\shopping-bag.png" alt="Carrito de Compras" />
                {
                cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget