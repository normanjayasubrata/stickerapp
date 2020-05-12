import * as ActionType from './type';

export const fetcAccount = (payload) => ({
    type: ActionType.FETCH_ACCOUNT,
    payload
})

export const isLogin = () => ({
    type: ActionType.IS_LOGIN
})
