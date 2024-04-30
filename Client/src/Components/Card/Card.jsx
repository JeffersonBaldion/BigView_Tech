import style from "./Card.module.css"

export default function Card(prop){

    const {name, price, image} = prop


    return(
        <div className={style.cardContainer}>
            <h2>{name}</h2>
            <img src={`${image}`} alt="" />
            <h3>{`$${price}`}</h3>
        </div>
    )
}