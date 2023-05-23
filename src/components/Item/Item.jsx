import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"


const Item = ({ producto }) => {
    return (
        <div className="producto">
            <div className='imagen-producto'>
                <img src={producto.imagen} />
            </div>
            <div>
                <h4>{producto.nombre}</h4>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item