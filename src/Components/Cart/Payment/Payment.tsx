import React, {useState} from "react";
import st from './Payment.module.css'
import {UniversalButton} from "../../common/UniversalButton/UniversalButton";
import {useDispatch, useSelector} from "react-redux";
import {MainStoreType} from "../../../bll/store";
import {apiResponseType} from "../../../dal/marketAPI";
import { Link } from "react-router-dom";
import {Path} from "../../Routes/Routes";
import {PaymentWindow} from "../../common/PaymentWindow/PaymentWindow";
import {setPaymentFlag} from "../../../bll/app-common-data-reducer";

export const Payment = () => {

    const dispatch = useDispatch()

    const paymentFlag = useSelector<MainStoreType, boolean>(state => state.appState.paymentFlag)

    const cartItemsData = useSelector<MainStoreType, Array<apiResponseType & {quantity: number}>>
    (state => state.cart.cartData)

    const totalSumToPay = cartItemsData.reduce( (acc, el) => (acc += el.price * el.quantity), 0 )
    const chosenItemsQuantity = cartItemsData.reduce( (acc, el) => (acc += el.quantity), 0 )

    return(
        <div className={st.paymentComponentContainer}>
            <div className={st.paymentWrapper}>
                {paymentFlag && <PaymentWindow totalSumToPay={totalSumToPay}/>}
                <h1>You have</h1>
                <div>
                    <h2 className={st.productsStyles}>products: {chosenItemsQuantity}</h2>
                </div>
                <div>
                    <h2>price: {totalSumToPay}</h2>
                </div>
                <div className={st.linksWrapper}>
                    <UniversalButton title={'PAYMENT'}
                                     height={'30px'}
                                     width={'150px'}
                                     backgroundColor={'blue'}
                                     color={'snow'}
                                     borderRadius={'4px'}
                                     onClick={() => dispatch(setPaymentFlag(true))}
                    />
                    <Link to={Path.WEB_STORE} className={st.linkStyle}>CATALOG</Link>
                </div>
            </div>
        </div>
    )
}