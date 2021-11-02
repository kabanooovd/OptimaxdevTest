import React from "react";
import {Redirect, Route } from "react-router-dom";
import {ItemsList} from "../ItemsList/ItemsList";
import {Cart} from "../Cart/Cart";

export enum Path {
    WEB_STORE = '/web-store',
    CART = '/cart',

}

export const Routes = () => {

    return(
        <div>
            <Route exact path={'/'} render={() => <Redirect to={Path.WEB_STORE}/>}/>

            <Route path={Path.WEB_STORE} render={() => <ItemsList/>}/>
            <Route path={Path.CART} render={() => <Cart />}/>
        </div>
    )
}





