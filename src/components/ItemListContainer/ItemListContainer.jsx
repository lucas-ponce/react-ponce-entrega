import './ItemListContainer.css'
import React from 'react'
import data from "../../../productos.json";
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
    useEffect(() => {
        pedirProductos()
            .then((res) => { 
                if(categoria){
                    setProductos(res.filter((prod)=> prod.categoria === categoria)) ;
                }
                else{
                    setProductos(res);
                }
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
};

export default ItemListContainer