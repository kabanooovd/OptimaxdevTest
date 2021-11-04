import React from "react";
import st from './ButtonToCart.module.css'


export const ButtonToCart: React.ComponentType<{
    buttonName: string
    disabled: boolean
    addItem: () => void | undefined
}> = props => {

    const {buttonName, disabled, addItem} = props

    const onClickHandler = () => {
        addItem()
    }

    return (
        <button disabled={disabled}
                className={st.buttonStyles}
                onClick={onClickHandler}
        >
            {buttonName}
        </button>
    )
}