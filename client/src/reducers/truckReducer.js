export const truckReducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    }
}