import React from "react";
import {CartItem} from "./CartItem/CartItem";
import {useSelector} from "react-redux";
import {MainStoreType} from "../../bll/store";
import {apiResponseType} from "../../dal/marketAPI";
import st from './Cart.module.css'

const testArr: Array<apiResponseType & { quantity: number }> = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        quantity: 3
    }
]




export const Cart = () => {

    const cartData = useSelector<MainStoreType, Array<apiResponseType & { quantity: number }>>(state => state.cart.cartData)

    const mappedCartList = cartData.map(el => (
        <CartItem cartData={el} key={el.id}/>
    ))



    return (
        <div className={st.cartItemContainer}>
            <h1>Cart</h1>
            {mappedCartList}
        </div>
    )
}


