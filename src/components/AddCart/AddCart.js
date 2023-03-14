import "./AddCart.css"
import { useState} from "react"
import addCart from "../../assets/add-to-cart.png"
import Counter from "../Counter/Counter"
const AddCart = ({ product }) => {
    const [modal, settModal] = useState(false);
    const toggleModal = () => {
        settModal(!modal)
    }
    return (
        <>
            <div className="add-btn btn-modal1 " onClick={toggleModal}>
                <img src={addCart} alt="addCart" width="50px"
                    height="40px" />

            </div>
            {modal && (
                <div className="modal1">
                    <div onClick={toggleModal} className="overlay1" ></div>
                    <div className="modal-content1">
                        <Counter settModal={settModal} modal={modal} product={product}></Counter>
                    </div>

                    <button className="close-modal1 btn" onClick={toggleModal}>
                        Cerrar  </button>
                </div>

            )}
        </>
    )
}

export default AddCart