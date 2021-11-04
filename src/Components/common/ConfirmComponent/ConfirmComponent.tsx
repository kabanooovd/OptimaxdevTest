import React from "react";
import ConfirmationStyles from './ConfirmComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeItemsQuantity, removeInstance, setCurrentCartQuantity, switchRmFlag} from "../../../bll/cartsReducer";
import {setCartFlag} from "../../../bll/itemsReducer";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {MainStoreType} from "../../../bll/store";

export const ConfirmComponent = ({
    userID, title, currentQuantity
} : {
    userID: number, title: string, currentQuantity: number
}) => {

    const dispatch = useDispatch()

    const cartItemsQuantity = useSelector<MainStoreType, number>(state => state.cart.cartItemsQuantity)

    const onConfirmHandler = () => {
        dispatch(removeInstance(userID))
        dispatch(changeItemsQuantity(0, userID))
        dispatch(switchRmFlag(false, userID))
        dispatch(setCartFlag(false, userID))
        dispatch(setCurrentCartQuantity(cartItemsQuantity - currentQuantity))
    }

    const onRejectHandler = () => {
        dispatch(switchRmFlag(false, userID))
    }

    return (
        <div className={ConfirmationStyles.confirmationWrapper}>
            <div>{title}</div>
            <div className={ConfirmationStyles.btnWrapper}>
                <UniversalButton title={'Yes'} width={'50px'} height={'20px'}
                                 color={'snow'} backgroundColor={'blue'} borderRadius={'3px'}
                                 onClick={onConfirmHandler}
                />
                <UniversalButton title={'No'} width={'50px'} height={'20px'}
                                 color={'snow'} backgroundColor={'blue'} borderRadius={'3px'}
                                 onClick={onRejectHandler}
                />
            </div>

        </div>

    )
}



