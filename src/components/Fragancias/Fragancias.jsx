import React from 'react'
import { useParams } from 'react-router-dom'

const Fragancias = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Fragancias</h2>
            <p> ID PRODUCTO: {id} </p>
        </div>
    )
}

export default Fragancias