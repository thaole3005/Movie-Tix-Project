const initialState = {
    callBackConfirm: () => {
        alert("confirm default");
    },
    callBackCalc: () => {
        alert("cancel default");
    },

}

export const ConfirmAntdReducer = (state = initialState, action) => {
    switch (action.type) {

    case '':
        return { ...state };

    default:
        return state;
    }
}
