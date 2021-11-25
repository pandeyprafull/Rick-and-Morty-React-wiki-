import React from 'react'
import styles from "./Cards.module.scss"

const Cards = ({ results }) => {
    console.log(results)
    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            let statusColor = ''

            //conditional status color status
            if (status === 'Dead') statusColor = 'bg-danger';
            else if (status === 'Alive') statusColor = 'bg-success';
            else statusColor = 'bg-secondary';

            return (
                <div key={id} className="col-4 position-relative mb-4">
                    <div className={styles.cards}>
                        <img src={image} alt="" className={`${styles.img} img-fluid img `} />
                        <div style={{ padding: '10px' }} className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.badge} position-absolute badge ${statusColor}`}>{status}</div>
                </div>
            )
        })
    } else {
        display = `No characters Found :/`
    }
    return (
        <>{display}</>
    )
}

export default Cards
