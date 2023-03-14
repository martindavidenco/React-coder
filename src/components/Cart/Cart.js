import { cartContext } from '../../context/CartProvider';
import "./Cart.css";
import creditCardForm from "../../assets/creditCardForm.png";
import creditCard from "../../assets/creditCard.png";
import chip from "../../assets/chip.png";
import logo from "../../assets/free-logo.png"
import { useContext, useState, useEffect } from 'react';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment/moment';
import swal from 'sweetalert';


//data images
const productoImg = require.context("../../assets/productos", true)


const Cart = () => {
    const { cart, removeItem, cleanCart } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [modal, settModal] = useState(false);

    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: ""
    })


    const [creditNumber, setCreditNumber] = useState("#### #### #### ####")
    const [creditHolder, setCreditHolder] = useState("NOMBRE COMPLETO")
    const [creditMonth, setCreditMonth] = useState("MM")
    const [creditYear, setCreditYear] = useState("YYYY")
    const [creditCvv, setCreditCvv] = useState("***")


    const imputChangeNumber = (event) => {
        setCreditNumber(event.target.value)

    }
    const imputChangeHolder = (event) => {
        setCreditHolder(event.target.value)
    }
    const imputChangeMonth = (event) => {
        setCreditMonth(event.target.value)
    }
    const imputChangeYear = (event) => {
        setCreditYear(event.target.value)
    }
    const imputChangeCvv = (event) => {
        setCreditCvv(event.target.value)
    }

    const toggleModal = () => {
        settModal(!modal)
    }

    const getTotalPrice = () => {
        setTotal(
            cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
        );
    }
    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, "Order");
        const newOrder = {
            buyer: {
                name: formValues.name,
                phone: formValues.phone,
                email: formValues.email,
            },
            date: moment().format("DD/MM/YYYY"),
            items: cart,
            total: total
        };
        addDoc(query, newOrder)
            .then((response) => {
                swal({
                    title: "ORDEN DE COMPRA EXITOSA",
                    text: `Orden creada con exito a nombre de: ${formValues.name} con el id:${response.id}.
                    Recibiras en tu casilla e-mail "${formValues.email}" los detalles de la compra.
                     Gracias por confiar en FLAME`,
                    className: "red-bg",

                    button: "Aceptar",

                });
                cleanCart()
                return (response)
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc(db, "items", product.id);
                    updateDoc(query, {
                        stock: product.stock - product.quantity,
                    });
                });

                return res
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getTotalPrice()
    }, [cart])
    const handleInputCHange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    };
    return (
        <div className={cart.length <= 1 ? "cartEmpty" : "cart"}>


            <div className='cartContainer'>
                <div className="titleCart">
                    <h2>Tu carrito de compras</h2>
                    {total === 0 ? <h3>No tienes ningun item en tu carrito</h3> : <h3>Total: ${total}</h3>}

                </div>
                {cart.map((product) => (
                    <div className='itemCart' key={product.id}>
                        <img alt={product.title} src={productoImg(`./${product.imageId}`)} />
                        <div>
                            <div>
                                <h2 className='productTitle'>{product.title}</h2>
                                <h2>Precio: ${product.price * product.quantity}</h2>
                            </div>
                            <div>
                                <h2>Talle: {product.talle}</h2>
                                <h2>Cantidad: {product.quantity}</h2>
                            </div>

                        </div>
                        <button className='btn' onClick={() => removeItem(product.id)}>Eliminar producto</button>
                    </div>
                ))}
                <div>
                </div>
            </div>


            <div className='formContainer'>
                <div className='datosContainer'>

                    <div>Introduce tus datos para realizar la compra</div>
                    <div className="inputBoxClient">
                        <span>Nombre y Apellido: </span>
                        <input type="text"
                            className="card-number-input"
                            name='name'
                            placeholder='Nombre completo'
                            value={formValues.name}
                            onChange={handleInputCHange}
                        />
                    </div>
                    <div className="inputBoxClient">
                        <span>Telefono: </span>
                        <input type="tel"
                            name='phone'
                            placeholder='Telefono'
                            value={formValues.phone}
                            onChange={handleInputCHange}
                        />
                    </div>
                    <div className="inputBoxClient">
                        <span>Correo electronico: </span>
                        <input type="text"
                            name='email'
                            placeholder='email'
                            value={formValues.email}
                            onChange={handleInputCHange}
                        />
                    </div>
                    <div onClick={() => {
                        document.querySelector('.formContainer').style.height = "165vh"
                    }
                    }>
                        <button className='btn' onClick={toggleModal}>INTRODUCIR TARJETA</button>
                    </div>
                </div>
                {modal && (

                    <div className="modal1">
                        <div className="close-modal2"
                            onClick={() => {
                                document.querySelector('.formContainer').style.height = "53vh"
                            }
                            }><button className="close-modal2 btn" onClick={toggleModal}>
                                X  </button>
                        </div>
                        <div onClick={toggleModal} className="overlay1" ></div>
                        <div className="modal-content1">
                            <div className="container">


                                <div className="card-container">

                                    <div className="front">
                                        <div className="image">
                                            <div className='cardImages'>
                                                <div>
                                                    <img src={chip} alt="chip" />
                                                    <img src={logo} alt="logo" />

                                                </div>
                                                <img src={creditCard} alt="Visa/masterCard" />

                                            </div>
                                            <div className="card-number-box">{creditNumber}</div>
                                            <div className="flexbox">
                                                <div className="box">
                                                    <span>Titular:</span>
                                                    <div className="card-holder-name">{creditHolder}</div>
                                                </div>
                                                <div className="box">
                                                    <span>VENCIMIENTO:</span>
                                                    <div className="expiration">
                                                        <span className="exp-month">{creditMonth} </span>
                                                        <span className="exp-year">{creditYear}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="back">
                                            <div className="stripe"></div>
                                            <div className="box">
                                                <span>CVV</span>
                                                <div className="cvv-box">{creditCvv}</div>
                                                <img src={logo} alt="logo" />
                                                <img src={creditCard} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form action="">
                                    <div className="inputBox">
                                        <span>Titular</span>
                                        <input type="text"
                                            placeholder='NOMBRE COMPLETO'
                                            className="card-holder-input"
                                            onChange={imputChangeHolder} />
                                    </div>
                                    <div className="inputBox">
                                        <div><span>Numero de tarjeta
                                        </span>
                                            <img src={creditCardForm} alt="Visa/masterCard" width="40px" height="20px" />
                                        </div>
                                        <input type="text"
                                            maxLength="19"
                                            name='numeroTarjeta'
                                            className="card-number-input"
                                            onChange={imputChangeNumber}
                                        />

                                    </div>
                                    <div className="flexbox">
                                        <div className="inputBox">
                                            <span>MES VENCIMIENTO</span>
                                            <select name="" id="" className="month-input" onChange={imputChangeMonth} >
                                                <option value="month" selected disabled>mes</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>
                                        <div className="inputBox">
                                            <span>AÑO VENCIMIENTO</span>
                                            <select name="" id="" className="year-input" onChange={imputChangeYear} >
                                                <option value="year" selected disabled>año</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                            </select>
                                        </div>
                                        <div className="inputBox">
                                            <span>CVV</span>
                                            <input type="text"
                                                maxLength="4" className="cvv-input"
                                                onChange={imputChangeCvv}
                                                onClick={() => {
                                                    document.querySelector('.back').style.backfaceVisibility = "visible";
                                                    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                        <div className="titleCart2" >
                            <h3 >Total: ${total}  </h3>
                            <button onClick={createOrder} className="btn" >TERMINAR COMPRA</button>
                        </div>

                    </div>
                )}


            </div>

        </div>

    )
}

export default Cart