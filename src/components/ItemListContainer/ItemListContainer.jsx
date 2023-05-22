import './ItemListContainer.css'
import React from 'react'
import data from "../../../productos.json";
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
    useEffect(() => {
        pedirProductos()
            .then((res) => { setProductos(res) })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
};

export default ItemListContainer