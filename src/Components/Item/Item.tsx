import React from "react";
import {apiResponseType} from "../../dal/marketAPI";
import SingleItemStyle from './Item.module.css';
import {ButtonToCart} from "../common/ButtonToCart/ButtonToCart";
import {useDispatch, useSelector} from "react-redux";
import {CartsReducerTypes, setNewItem} from "../../bll/cartsReducer";
import {QuantityHandler} from "../common/QuantityHandler/QuantityHandler";
import {MainStoreType} from "../../bll/store";
import {ItemsTypes, setCartFlag} from "../../bll/itemsReducer";

export const Item = ({itemData}: { itemData: apiResponseType & { cartFlag: boolean } }) => {

    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(setNewItem(itemData, 1))
        dispatch(setCartFlag(true, itemData.id))
    }

    return (
        <div className={SingleItemStyle.itemWrapper}>
            <div className={SingleItemStyle.item}>
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
            <div style={{position: 'relative'}}>
                {itemData.cartFlag && <QuantityHandler itemID={itemData.id}/>}
                <ButtonToCart buttonName={'TO CART'} disabled={false} addItem={addItemHandler}/>
            </div>
        </div>
    )
}