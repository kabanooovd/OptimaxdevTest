import React from "react";
import {apiResponseType} from "../../dal/marketAPI";
import SingleItemStyle from './Item.module.css';
import {ButtonToCart} from "../common/ButtonToCart/ButtonToCart";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCartQuantity, setNewItem} from "../../bll/cartsReducer";
import {QuantityHandler} from "../common/QuantityHandler/QuantityHandler";
import {setCartFlag} from "../../bll/itemsReducer";
import {MainStoreType} from "../../bll/store";
import {Rating} from "../common/Rating/Rating";

export const Item = ({itemData}: { itemData: apiResponseType & { cartFlag: boolean } }) => {

    const dispatch = useDispatch()

    const cartItemsQuantity = useSelector<MainStoreType, number>(state => state.cart.cartItemsQuantity)

    const addItemHandler = () => {
        dispatch(setNewItem(itemData, 1))
        dispatch(setCartFlag(true, itemData.id))
        dispatch(setCurrentCartQuantity(cartItemsQuantity + 1))
    }

    return (
        <div className={SingleItemStyle.itemWrapper}>
            <div className={SingleItemStyle.item}>
                <div className={SingleItemStyle.priceWrapper}>
                    <h3>{itemData.price}$</h3>
                </div>
                <div>
                    <img src={itemData.image} className={SingleItemStyle.itemImage} alt=''/>
                </div>
                <div>
                    {itemData.title}
                </div>

            </div>
            <div className={SingleItemStyle.ratings}>
                <Rating rate={itemData.rating.rate}/>
                <div>Votes: {itemData.rating.count}</div>
            </div>
            <div className={SingleItemStyle.category}>
                {itemData.category}
            </div>
            <div className={SingleItemStyle.buttonToCartPosition}>
                {itemData.cartFlag && <QuantityHandler itemID={itemData.id}/>}
                <ButtonToCart buttonName={'TO CART'}
                              disabled={false}
                              addItem={addItemHandler}
                />
            </div>
        </div>
    )
}