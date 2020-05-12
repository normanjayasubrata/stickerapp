import * as ActionType from '../action/type';
import { hasToken } from "../../utils/token";
const initialState = {
    account: {
        email: "",
        username: ""
    },
    isLogin: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ActionType.FETCH_ACCOUNT:
        return { ...state, account: payload }
    
    case ActionType.IS_LOGIN:
        if (hasToken()) {
            return {...state, isLogin: true}
        } else {
            return {...state, isLogin: false}
        }

    default:
        return state
    }
}
