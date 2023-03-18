import "./ItemListContainer.css"
//import { data } from "../../data/data"
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";

import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import loading from "../../assets/loadingmoderno.gif";
import Modal from "../Modal/Modal";
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    //  FILTER PRICE ITEMS      
    // lower price
    const [lowerPriceFilter, setlowerPriceFilter] = useState(false);

    const toggleLowerFilter = () => {
        setlowerPriceFilter(!lowerPriceFilter)
        if (highestPriceFilter) { setHighestPriceFilter(false) }
    }

    //highest price

    const [highestPriceFilter, setHighestPriceFilter] = useState(false);

    const toggleHighestFilter = () => {
        setHighestPriceFilter(!highestPriceFilter)
        if (lowerPriceFilter) { setlowerPriceFilter(false) }
    }

    // param filter

    const [paramFilter, setParamFilter] = useState(false)

    const toggleParamFilter = () => {
        if (paramFilter) { getProducts() } else { setParamFilter(!paramFilter) }


    }
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxprice] = useState();

    const childrenMinprice = (datoMinPrice,) => {
        setMinPrice(datoMinPrice);

    }
    const childrenMaxprice = (datoMaxPrice) => {
        setMaxprice(datoMaxPrice)
    }


    // GET DATA
    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "items")

        if (categoryName) {
            const queryFilter = query(querySnapshot, where("categoryId", "==", categoryName))
            getDocs(queryFilter)
                .then((response) => {
                    const data = response.docs.map((item) => {
                        return { id: item.id, ...item.data() }

                    });
                    if (lowerPriceFilter) {
                        function comparacion(a, b) {
                            return a.price - b.price
                        }
                        data.sort(comparacion)
                        setItems(data)
                    }
                    if (highestPriceFilter) {
                        function comparacion(a, b) {
                            return b.price - a.price
                        }
                        data.sort(comparacion)
                        setItems(data)

                    }
                    if (paramFilter) {
                        const resultado = data.filter(elemento => elemento.price < maxPrice)
                        const resultado2 = resultado.filter(elemento => elemento.price > minPrice)
                        setItems(resultado2)

                    }
                    else {
                        setItems(data)
                    }
                })
                .catch((error) => { console.log(error) })
        }
        else {
            getDocs(querySnapshot)

                .then((response) => {
                    const data = response.docs.map((item) => {
                        return { id: item.id, ...item.data() }

                    });
                    if (lowerPriceFilter) {
                        function comparacion(a, b) {
                            return a.price - b.price
                        }
                        data.sort(comparacion)
                        setItems(data)
                    }
                    if (highestPriceFilter) {
                        function comparacion(a, b) {
                            return b.price - a.price
                        }
                        data.sort(comparacion)
                        setItems(data)

                    }
                    if (paramFilter) {
                        const resultado = data.filter(elemento => elemento.price < maxPrice)
                        const resultado2 = resultado.filter(elemento => elemento.price > minPrice)
                        setItems(resultado2)
                    }
                    else {
                        setItems(data)
                    }

                })
                .catch((error) => { console.log(error) })
        }
    };


    useEffect(() => {
        getProducts();
    }, [categoryName, lowerPriceFilter, highestPriceFilter, paramFilter, minPrice, maxPrice])

    return (
        <div className="main">

            <div className="containerSideBar">
                <div className="sidebar">
                    <div className="filtrosContainer">
                        <div className=" filtro" onClick={toggleLowerFilter}>MENOR PRECIO </div>
                        <div className="filtro " onClick={toggleHighestFilter}>MAYOR PRECIO </div>
                        <Modal toggleParamFilter={toggleParamFilter} childrenMinprice={childrenMinprice} childrenMaxprice={childrenMaxprice}> </Modal>
                    </div>
                </div>

                {items.length == 0 ? <img className="loading" src={loading} /> :
                    <ItemList products={items} />}
            </div>
        </div>
    )
};


export default ItemListContainer