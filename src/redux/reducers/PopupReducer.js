import React from "react";
import { OPEN_POPUP_TRAILER, CLOSE_POPUP_TRAILER } from './../actions/types/QuanLyPopupType';

const initialState = {
    popupShow: false,
    popupContent: <p>Defaul popup content</p>,
}

export const PopupReducer = (state = initialState, action) => {
    switch (action.type) {

    case OPEN_POPUP_TRAILER: {

        return { ...state, popupShow: true, popupContent: action.popupContent};
    }
    case CLOSE_POPUP_TRAILER: {

        return { ...state, popupShow: false};
    }

    default:
        return state
    }
}
