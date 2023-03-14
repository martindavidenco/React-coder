import { useState, useEffect } from "react"
import "./Modal.css"
import filter from "../../assets/filter.png"
export const Modal = ({ childrenMinprice, childrenMaxprice, toggleParamFilter }) => {
    const [modal, settModal] = useState(false);
    const toggleModal = () => {
        settModal(!modal)

    }
    const priceCall = () => {
        childrenMinprice(datoMinPrice)
        childrenMaxprice(datoMaxPrice)
    }
    const [precioMinimo, settPrecioMinimo] = useState(0)
    const [precioMaximo, settPrecioMaximo] = useState(0)
    const datoMinPrice = precioMinimo
    const datoMaxPrice = precioMaximo
    useEffect(() => { }, [])
    return (
        <div className="filtro ">
            <img onClick={toggleModal} src={filter} alt="filter" width="20px"
                height="20px" />
            <div className="btn-modal"
                onClick={toggleModal}>
                FLITRO DE PRECIOS
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>FILTRO DE PRECIOS</h2>
                        <label for="customRange2" className="form-label">Rango de precios en el que desea buscar
                            productos!</label>

                        <input value={precioMinimo}
                            onChange={(ev) => settPrecioMinimo(ev.target.value)}

                            className="rango form-range" step="0.5" type="range"
                            min="0" name="vol1" max="25000" id="customRange2 vol"></input>
                        <div className="pMax">
                            <p>Precio mínimo: ${precioMinimo} </p><output id="outvol1" name="outvol1" for="vol1"> </output>
                        </div>

                        <input value={precioMaximo} onChange={(ev) => settPrecioMaximo(ev.target.value)}
                            className="rango form-range" step="0.5" type="range"
                            min="0" name="vol" max="100000" id="customRange2 vol"></input>
                        <div className="pMax">
                            <p>Precio máximo:${precioMaximo}  </p><output id="outvol" name="outvol" for="vol"> </output>
                        </div><div onClick={priceCall}>
                            <div onClick={toggleModal}><button className="close-modal btn" onClick={toggleParamFilter}>
                                aplicar filtro y cerrar</button>
                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    )
}
export default Modal