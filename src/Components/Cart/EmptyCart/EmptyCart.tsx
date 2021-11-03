import React from "react";
import st from './EmptyCart.module.css'
import { Link } from "react-router-dom";
import {Path} from "../../Routes/Routes";
import {UniversalButton} from "../../common/UniversalButton/UniversalButton";

export const EmptyCart = () => {

    return(
        <div className={st.emptyCartStyles}>
            <h1>
                Add necessary items to the cart
            </h1>
            <div className={st.infoTextStyles}>
                <h3>To find them, look into catalog</h3>
            </div>

            <div className={st.redirectionLinkContainer}>
                <UniversalButton title={'DISCOUNTS'}
                                 width={'150px'}
                                 height={'30px'}
                                 borderRadius={'3px'}
                                 color={'snow'}
                                 backgroundColor={'blue'}
                />
                <Link to={Path.WEB_STORE} className={st.linkStyles}>Catalog</Link>
            </div>
        </div>
    )
}








