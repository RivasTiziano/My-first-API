export const initialState = {
    isopen: false,
    user: null,
}
export const actionTypes = {
    TOGGLE_MENU: "TOGGLE_MENU",
    SET_USER: "SET_USER",
}
const reducer = (state, action)=>{
    switch (action.type){
        case actionTypes.TOGGLE_MENU:
        return {
            ...state,
            isopen: action.isopen,
        }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default: return state;
    }
}

export default reducer;
