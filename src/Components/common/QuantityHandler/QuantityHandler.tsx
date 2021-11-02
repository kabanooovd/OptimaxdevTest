import React from "react";
import st from './QuantityHandler.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MainStoreType} from "../../../bll/store";
import {apiResponseType} from "../../../dal/marketAPI";
import {raiseItemsQuantity} from "../../../bll/cartsReducer";

export const QuantityHandler = ({itemID} : {itemID: number}) => {

    const dispatch = useDispatch()

    const quantity = useSelector<MainStoreType, Array<apiResponseType & {quantity: number}>>
    (state => state.carts.cartData).find(el => el.id === itemID)

    const currentQuantity = quantity && quantity.quantity


    const raiseQuantity = () => {
        if (currentQuantity) {
            dispatch(raiseItemsQuantity(currentQuantity + 1, itemID))
        }
    }

    const reduceQuantity = () => {
        if (currentQuantity) {
            dispatch(raiseItemsQuantity(currentQuantity - 1, itemID))
        }
    }

    return(
        <div className={st.quantityWrapper}>
            <div className={st.quantityRemote}>
                <div className={st.remoteButtonStyles} onClick={reduceQuantity}>-</div>
                <div className={st.quantityDataStyles}>{currentQuantity}</div>
                <div className={st.remoteButtonStyles} onClick={raiseQuantity}>+</div>
            </div>
        </div>
    )
}








