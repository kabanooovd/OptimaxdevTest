import React from "react";
import {apiResponseType} from "../../dal/marketAPI";
import SingleItemStyle from './Item.module.css';
import {ButtonToCart} from "../common/ButtonToCart/ButtonToCart";

export const Item = ({itemData}: { itemData: apiResponseType }) => {

    return (
        <div className={SingleItemStyle.itemWrapper}>
            <div className={SingleItemStyle.item} >
                <div>
                    <h3>{itemData.price}$</h3>
                </div>
                <div>
                    <img src={itemData.image} className={SingleItemStyle.itemImage}/>
                </div>
                <div>
                    {itemData.title}
                </div>

            </div>
            <div className={SingleItemStyle.ratings}>
                <div>Rating: {itemData.rating.rate}</div>
                <div>Votes: {itemData.rating.count}</div>
            </div>
            <div className={SingleItemStyle.category}>
                {itemData.category}
            </div>
            <ButtonToCart buttonName={'TO CART'} disabled={false}/>
        </div>
    )
}