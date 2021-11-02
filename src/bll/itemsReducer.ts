import {apiResponseType, marketAPI} from "../dal/marketAPI";
import {Dispatch} from "redux";
import {setLoadingMode} from "./app-common-data-reducer";

const SET_ITEMS = 'items/SET_ITEMS'
const SET_CART_FLAG = 'items/SET_CART_FLAG'

export type ItemsTypes = Array<apiResponseType & {cartFlag: boolean}>

type ItemsStateTypes = {
    items: ItemsTypes
}

const initState: ItemsStateTypes = {
    items: [],
}

export const itemsReducer = (state: ItemsStateTypes = initState, action: ItemsReducerActionTypes): ItemsStateTypes => {
    switch (action.type) {
        case SET_ITEMS:
            return {...state, items: action.items.map(el => ({...el, cartFlag: false}))}
        case SET_CART_FLAG:
            return {...state, items: state.items
                    .map(el => el.id === action.id
                        ? {...el, cartFlag: action.cartFlag}
                        : el)}
        default: return state
    }

}

export type SetCartFlag_T = ReturnType<typeof setCartFlag>
export const setCartFlag = (cartFlag: boolean, id: number) => {
    return {type: SET_CART_FLAG, cartFlag, id} as const
}

export type SetItemsAction_T = ReturnType<typeof setItemsAction>
export const setItemsAction = (items: apiResponseType[]) => {
    return {type: SET_ITEMS, items} as const
}

type ItemsReducerActionTypes = SetItemsAction_T | SetCartFlag_T

export const getInitialDataThunk = (dispatch: Dispatch) => {
    dispatch(setLoadingMode(true))
    marketAPI.getItemsData()
        .then(res => {
            dispatch(setItemsAction(res.data))
            dispatch(setLoadingMode(false))
        })
        .catch(err => {
            alert(err.message)
            dispatch(setLoadingMode(false))
        })
}


