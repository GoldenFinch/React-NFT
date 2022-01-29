import react from "react";
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({id, name, traits, img}) => {
    return (
        <div className="CollectionCard">
            <img src={img} />
            <div className="detail">
                <div className="name">
                    {name} <div className="id"> ·#{id}</div>
                </div>
                <div className="priceContainer">
                    <img src={weth} className="wethImage" alt="" />
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard