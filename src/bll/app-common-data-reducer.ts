const SET_LOADING_MODE = 'app/SET_LOADING_MODE'

export type CommonDataReducerTypes = {
    isLoading: boolean
}

const initState: CommonDataReducerTypes = {
    isLoading: false
}

export const appCommonDataReducer = (state: CommonDataReducerTypes = initState, action: CommonDataActionsTypes): CommonDataReducerTypes => {
    switch (action.type) {
        case SET_LOADING_MODE:
            return {...state, isLoading: action.isLoading}
        default: return state
    }
}

export type SetLoadingMode_T = ReturnType<typeof setLoadingMode>
export const setLoadingMode = (isLoading: boolean) => {
    return {type: SET_LOADING_MODE, isLoading} as const
}

type CommonDataActionsTypes = SetLoadingMode_T