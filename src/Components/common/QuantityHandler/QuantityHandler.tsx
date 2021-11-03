import React from "react";
import st from './QuantityHandler.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MainStoreType} from "../../../bll/store";
import {apiResponseType} from "../../../dal/marketAPI";
import {raiseItems, reduceItems} from "../../../utils/quntityHelper";

export const QuantityHandler = ({itemID}: { itemID: number }) => {

    const dispatch = useDispatch()

    const quantity = useSelector<MainStoreType, Array<apiResponseType & { quantity: number }>>
    (state => state.cart.cartData).find(el => el.id === itemID)

    const cartItemsQuantity = useSelector<MainStoreType, number>(state => state.cart.cartItemsQuantity)

    const currentQuantity = quantity && quantity.quantity

    const raiseQuantity = () => currentQuantity && raiseItems(currentQuantity, itemID, cartItemsQuantity, dispatch)

    const reduceQuantity = () => currentQuantity && reduceItems(dispatch, currentQuantity, itemID, cartItemsQuantity)

    return (
        <div className={st.quantityWrapper}>
            <div className={st.quantityRemote}>
                <div className={st.remoteButtonStyles} onClick={reduceQuantity}>-</div>
                <div className={st.quantityDataStyles}>{currentQuantity}</div>
                <div className={st.remoteButtonStyles} onClick={raiseQuantity}>+</div>
            </div>
        </div>
    )
}








