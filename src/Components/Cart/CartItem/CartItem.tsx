import React from "react";
import st from './CartItem.module.css'
import {apiResponseType} from "../../../dal/marketAPI";
import {Rating} from "../../common/Rating/Rating";
import {useDispatch, useSelector} from "react-redux";
import {MainStoreType} from "../../../bll/store";
import {raiseItems, reduceItems} from "../../../utils/quntityHelper";

export const CartItem: React.FC<{cartData: apiResponseType & { quantity: number }}> = (props) => {

    const {cartData} = props

    const dispatch = useDispatch()

    const quantity = useSelector<MainStoreType, Array<apiResponseType & { quantity: number }>>
    (state => state.cart.cartData).find(el => el.id === cartData.id)

    const currentQuantity = quantity && quantity.quantity

    const cartItemsQuantity = useSelector<MainStoreType, number>(state => state.cart.cartItemsQuantity)

    const raiseQuantity = () => currentQuantity && raiseItems(currentQuantity, cartData.id, cartItemsQuantity, dispatch)

    const reduceQuantity = () => currentQuantity && reduceItems(dispatch, currentQuantity, cartData.id, cartItemsQuantity)

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
                    <div className={st.arrowStyles} onClick={raiseQuantity}>&#x2191;</div>
                    {cartData.quantity} {cartData.quantity > 1 ? <span> - items</span> : <span> - item</span>}
                    <div className={st.arrowStyles} onClick={reduceQuantity}>&#8595;</div>
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

