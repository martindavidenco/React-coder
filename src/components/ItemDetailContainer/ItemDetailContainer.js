import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { data } from "../../data/data";
import { useEffect, useState } from "react";
export const ItemDetailContainer = () => {
    const [productoSeleccionado, setProductoSeleccionado]= useState()
    const {id} = useParams();
    const getProduct = ()=>{
        const productoFiltrado = data.filter((producto)=>{
            return producto.id == id;
        })
        setProductoSeleccionado(productoFiltrado)
    }
    useEffect(()=>{
        getProduct()
    },[id])
    return (
        <div>

{productoSeleccionado &&
    <ItemDetail productoSeleccionado={productoSeleccionado}/>}
        </div>
    )
}
