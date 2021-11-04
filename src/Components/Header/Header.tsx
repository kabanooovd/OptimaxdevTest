import React from "react";
import HeaderStyles from './Header.module.css'
import {SelfPrintingString} from "../common/SelfPrintingString/SelfPrintingString";
import {CartButton} from "../common/CartButton/CartButton";
import { Link } from "react-router-dom";
import {Path} from "../Routes/Routes";
import {useSelector} from "react-redux";
import {MainStoreType} from "../../bll/store";


export const Header = () => {

    const paymentFlag = useSelector<MainStoreType, boolean>(state => state.appState.paymentFlag)

    const cartLinkStyles = !paymentFlag? '' : HeaderStyles.cartDisabledMode

    return (
        <div className={HeaderStyles.HeaderWrapper}>
            <div className={HeaderStyles.headerMenu}>
                <h1>Store Project</h1>
                <Link to={Path.CART} className={cartLinkStyles}>
                    <CartButton />
                </Link>
            </div>
            <SelfPrintingString word={'Place for your commercial....'} seconds={0.09}/>
        </div>
    )
}





