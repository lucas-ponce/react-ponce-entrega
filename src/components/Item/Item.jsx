import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={producto.imagen} />
            <div>
                <h4>{producto.nombre}</h4>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item