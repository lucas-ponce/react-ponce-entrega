import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre} </h3>
            <p>${precio} </p>
            <p>Id: {id} </p>
            <p>Stock:{stock} </p>
            <Link className='miBtn' to={`/item/${id}`}> Ver Detalles </Link>
        </div>
    )
}

export default Item