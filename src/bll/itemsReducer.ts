import {apiResponseType, marketAPI} from "../dal/marketAPI";
import {Dispatch} from "redux";

const SET_ITEMS = 'items/SET_ITEMS'

type ItemsStateTypes = {
    items: apiResponseType[]
}

const initState: ItemsStateTypes = {
    items: []
}

export const itemsReducer = (state: ItemsStateTypes = initState, action: ItemsReducerActionTypes): ItemsStateTypes => {
    switch (action.type) {
        case SET_ITEMS:
            return {...state, items: action.items}
        default: return state
    }

}

export type SetItemsAction_T = ReturnType<typeof setItemsAction>
export const setItemsAction = (items: apiResponseType[]) => {
    return {type: SET_ITEMS, items} as const
}

type ItemsReducerActionTypes = SetItemsAction_T

export const getInitialDataThunk = (dispatch: Dispatch) => {
    marketAPI.getItemsData()
        .then(res => {
            dispatch(setItemsAction(res.data))
        })
        .catch(err => {
            alert(err.message)
        })
}


