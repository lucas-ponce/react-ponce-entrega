import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../../../productos.json";


const ItemDetailContainer = () => {
    const id = useParams().id;
    console.log(id);
    const [item, setItem] = useState(null);
    const pedirItemPorId = (iden) => {
        return new Promise((resolve, reject) => {
            const item = data.find((el) => el.id === iden);
            if (item) {
                resolve(item);
            } else {
                reject({
                    error: "No se encontró el producto"
                })
            }
        })
    }
    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])
    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer