import React from "react";
import {CartItem} from "./CartItem/CartItem";
import {useSelector} from "react-redux";
import {MainStoreType} from "../../bll/store";
import {apiResponseType} from "../../dal/marketAPI";
import st from './Cart.module.css'
import {EmptyCart} from "./EmptyCart/EmptyCart";
import {Payment} from "./Payment/Payment";

export const Cart = () => {

    const cartData = useSelector<MainStoreType, Array<apiResponseType & { quantity: number, rmFlag: boolean }>>(state => state.cart.cartData)

    const mappedCartList = cartData.map(el => (
        <CartItem cartData={el} key={el.id}/>
    ))

    if (cartData.length === 0) {
        return <EmptyCart/>
    }

    return (
        <div className={st.cartItemContainer}>
            <h1>Cart</h1>
            <Payment/>
            {mappedCartList}
        </div>
    )
}


