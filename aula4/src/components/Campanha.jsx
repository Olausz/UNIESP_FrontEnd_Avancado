import React from "react";
import styles from "./Campanha.module.css";

const Campanha = (props) => {

    function qualMes() {

        let mes;

        if (props.mes === "Setembro") {

            return <div className={styles.setembro}><p>Prevenção ao suicídio.</p></div>

        }

        else if (props.mes === "Outubro") {

            return <div className={styles.outubro}><p>Conscientização sobre o câncer de mama.</p></div>

        }

        else if (props.mes === "Novembro") {

            return <div className={styles.novembro}><p>Prevenção e combate ao câncer de próstata.</p></div>

        }

        else {

            return <p>Mes não Correspondente</p>

        }

    }

    return (
        qualMes()
    );
};

export default Campanha;