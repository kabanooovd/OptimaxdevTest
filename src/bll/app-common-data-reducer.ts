const SET_LOADING_MODE = 'app/SET_LOADING_MODE'
const SET_PAYMENT_FLAG = 'app/SET_PAYMENT_FLAG'

export type CommonDataReducerTypes = {
    isLoading: boolean
    paymentFlag: boolean
}

const initState: CommonDataReducerTypes = {
    isLoading: false,
    paymentFlag: false,
}

export const appCommonDataReducer = (state: CommonDataReducerTypes = initState, action: CommonDataActionsTypes): CommonDataReducerTypes => {
    switch (action.type) {
        case SET_LOADING_MODE:
            return {...state, isLoading: action.isLoading}
        case SET_PAYMENT_FLAG:
            return {...state, paymentFlag: action.paymentFlag}
        default: return state
    }
}

export type SetPaymentFlag_T = ReturnType<typeof setPaymentFlag>
export const setPaymentFlag = (paymentFlag: boolean) => {
    return {type: SET_PAYMENT_FLAG, paymentFlag} as const
}

export type SetLoadingMode_T = ReturnType<typeof setLoadingMode>
export const setLoadingMode = (isLoading: boolean) => {
    return {type: SET_LOADING_MODE, isLoading} as const
}

type CommonDataActionsTypes = SetLoadingMode_T | SetPaymentFlag_T