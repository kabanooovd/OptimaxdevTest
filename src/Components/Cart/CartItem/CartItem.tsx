import React from "react";
import st from './CartItem.module.css'
import {apiResponseType} from "../../../dal/marketAPI";
import {Rating} from "../../common/Rating/Rating";
import {QuantityHandler} from "../../common/QuantityHandler/QuantityHandler";

// type PropsType = {
//     data: Array<apiResponseType & {quantity: number}>
// }

export const CartItem: React.FC<{cartData: apiResponseType & { quantity: number }}> = (props) => {

    const {cartData} = props


    return (
        <div className={st.cartItemWrapper}>
            <div>
                <img src={cartData.image} alt="" className={st.itemPic}/>
            </div>
            <div className={st.cartItemDataStyles} style={{position: 'relative'}}>
                <div className={st.cartPrice}>
                    <h3>{cartData.price} $</h3>
                </div>
                <div className={st.cartTitle}>
                    {cartData.title}
                </div>
                <div className={st.cartQuantity}>
                    {cartData.quantity} {cartData.quantity > 1 ? <span> - items</span> : <span> - item</span>}
                    <div className={st.quantityHandler}>
                        <QuantityHandler itemID={cartData.id} />
                    </div>
                </div>
                <div className={st.cartCategory}>
                    {cartData.category}
                </div>
                <div className={st.cartRating}>
                    <Rating rate={cartData.rating.rate}/>
                </div>
                <div className={st.cartDescription}>
                    {cartData.description}
                </div>
            </div>

        </div>
    )
}

