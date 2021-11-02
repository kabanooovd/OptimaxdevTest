import React from "react";
import HeaderStyles from './Header.module.css'
import {SelfPrintingString} from "../common/SelfPrintingString/SelfPrintingString";

export const Header = () => {

    return(
        <div className={HeaderStyles.HeaderWrapper}>
            <h1>
                Store Project
            </h1>
            <SelfPrintingString word={'Place for your commercial....'} seconds={0.09}/>
        </div>
    )
}





