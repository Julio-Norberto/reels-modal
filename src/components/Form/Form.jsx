import React from "react";

//css
import styles from './Form.module.css'

export default function Form() {
    return (
        <form className={styles.form}>

            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name='title' placeholder='Título da tarefa' />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' />
            </div>
            <input type="submit" value='Enviar' />
                    
        </form>
    )
}