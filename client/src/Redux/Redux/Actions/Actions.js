import { LOGIN } from "../Reducer/actionTypes";

export const getLogin = (payload) => {
    return{ 
        type: LOGIN, 
        payload
    };
};