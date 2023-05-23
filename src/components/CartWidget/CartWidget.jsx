import "./CartWidget.css"
import React from 'react'

const CartWidget = () => {
    return (
        <div> 
            <img className="cartImg"src="\public\img\shopping-bag.png" alt="Carrito de Compras" />
            <p>10</p>
        </div>
    )
}

export default CartWidget