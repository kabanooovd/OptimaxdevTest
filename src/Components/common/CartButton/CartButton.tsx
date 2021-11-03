import React from "react";
import st from './CartButton.module.css'
import shoppingCart from '../../../assets/shoppingCart.png'
import {useSelector} from "react-redux";
import {MainStoreType} from "../../../bll/store";

export const CartButton = () => {


    const cartItemsQuantity = useSelector<MainStoreType, number>(state => state.cart.cartItemsQuantity)

    return(
        <div className={st.cartContainer}>
            <div className={st.cartWrapper}>
                <img src={shoppingCart} alt="" className={st.cartImg}/>
            </div>

            {cartItemsQuantity !== 0 &&
            <div className={st.cartItemsQuantity}>
                {cartItemsQuantity}
            </div>
            }


        </div>

    )
}





