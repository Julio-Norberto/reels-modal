import React from "react";

//css
import styles from './Modal.module.css'

// components
import Form from "../Form/Form";

export default function Modal() {

    function closeModal() {
        const modal = document.querySelector('#modal')
        modal.classList.add('hide')
    }

    return (
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModal}>

            </div>

            <div className={styles.modal}>
                <h2>Texto Modal</h2>
                <Form />
            </div>
        </div>
    )
}