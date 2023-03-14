import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
export const ItemDetailContainer = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState()
    const { id } = useParams();

    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, "items", id);
        getDoc(query)
            .then(
                response => {
                    setProductoSeleccionado({ id: response.id, ...response.data() })
                }
            )
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <div>
            {productoSeleccionado &&
                <ItemDetail productoSeleccionado={productoSeleccionado} />}
        </div>
    )
}
