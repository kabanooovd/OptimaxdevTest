import React from "react";
import st from './ButtonToCart.module.css'


export const ButtonToCart: React.ComponentType<{
    buttonName: string
    disabled: boolean
}> = props => {

    const {buttonName, disabled} = props

    return (
        <button disabled={disabled} className={st.buttonStyles}>
            {buttonName}
        </button>
    )
}