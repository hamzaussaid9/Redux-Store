import { actionTypes } from "../contants/actionTypes"
const initialState = {
    products: []
};

export const productReducer = (state=initialState, { type, payload }) => {
    if (type === actionTypes.SET_PRODUCT) {
        return {...state,products: payload};
    }
    else {
        return state;
    }
}
export const selectProductReducer = (state = {}, { type, payload }) => {
    if (type === actionTypes.SELECTED_PRODUCTS) {
        return {
            ...state,
            product: payload
        };
    }
    else {
        return state;
    }
}