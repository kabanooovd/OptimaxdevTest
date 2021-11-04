import React from "react";
import ConfirmationStyles from './ConfirmComponent.module.css'
import {useDispatch} from "react-redux";
import {changeItemsQuantity, removeInstance, setCurrentCartQuantity, switchRmFlag} from "../../../bll/cartsReducer";
import {setCartFlag} from "../../../bll/itemsReducer";
import {UniversalButton} from "../UniversalButton/UniversalButton";

export const ConfirmComponent = ({
    userID, title,
} : {
    userID: number, title: string
}) => {

    const dispatch = useDispatch()

    const onConfirmHandler = () => {
        dispatch(removeInstance(userID))
        dispatch(changeItemsQuantity(0, userID))
        dispatch(switchRmFlag(false, userID))
        dispatch(setCartFlag(false, userID))
        dispatch(setCurrentCartQuantity(0))
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



