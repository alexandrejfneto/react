import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    return (
        <div className="container">
            <h1>Meu Contador</h1>
            {contador > 0 ? <h2>Valor maior que 0</h2> : <h2>Valor menor que 0</h2>}
            <h3>{contador}</h3>
            <div className="buttons">
                <button onClick={aumentar} className={styles.myButton}>aumentar</button>
                <button onClick={diminuir} className={styles.myButton}>diminuir</button>
            </div>
        </div>
    )

}