import React from "react";
import st from './PaymentWindow.module.css'
import {useDispatch} from "react-redux";
import {setPaymentFlag} from "../../../bll/app-common-data-reducer";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {getInitialDataThunk} from "../../../bll/itemsReducer";

export const PaymentWindow = ({totalSumToPay} : {totalSumToPay: number}) => {

    const dispatch = useDispatch()

    const payButtonHandler = () => {
        alert(`Thank you, ${totalSumToPay} received...`)
        dispatch(setPaymentFlag(false))
        dispatch({type: 'carts/REFRESH_CART_DATA'})
        dispatch(getInitialDataThunk)

    }

    return(
        <div className={st.paymentModalWindowContainer}>
            <div className={st.onCloseButtonWrapper} >
                <div className={st.btnPositionHelper}>
                    <div className={st.onCloseButtonSt} onClick={() => dispatch(setPaymentFlag(false))}>
                        <div style={{position: 'absolute', top: '-2px'}}>&times;</div>
                    </div>
                </div>
            </div>
            <div className={st.paymentModalWindowWrapper}>
                <h1>Payment</h1>
                <h3>Price: {totalSumToPay}</h3>
                <div className={st.payButton}>
                    <UniversalButton title={'PAY'} width={'200px'} height={'40px'} color={'snow'}
                                     backgroundColor={'blue'} borderRadius={'5px'}
                                     onClick={payButtonHandler} />
                </div>

            </div>
        </div>
    )
}

