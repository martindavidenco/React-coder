import "./ItemListContainer.css"
import { data } from "../../data/data"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const getData = new Promise((res, rej) =>{
        setTimeout(()=>{
            res(data)
        }, 2000)
    })
    useEffect(()=>{
        getData.then((res) => setItems(res))
        
    }, [items])
    console.log(items||items)
    return (
        <div >
        <ItemList products={items} />
        </div>
    )
};

export default ItemListContainer