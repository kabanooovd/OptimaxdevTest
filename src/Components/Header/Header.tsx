import React from "react";
import HeaderStyles from './Header.module.css'
import {SelfPrintingString} from "../common/SelfPrintingString/SelfPrintingString";
import {CartButton} from "../common/CartButton/CartButton";
import { Link } from "react-router-dom";
import {Path} from "../Routes/Routes";


export const Header = () => {

    return (
        <div className={HeaderStyles.HeaderWrapper}>
            <div className={HeaderStyles.headerMenu}>
                <h1>Store Project</h1>
                <Link to={Path.CART}>
                    <CartButton />
                </Link>
            </div>
            <SelfPrintingString word={'Place for your commercial....'} seconds={0.09}/>
        </div>
    )
}





