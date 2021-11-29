import { authType } from "./types/authType";

export const loginStart = () => ({
  type: authType.CUSTOMER_LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: authType.CUSTOMER_LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = (error) => ({
  type: authType.CUSTOMER_LOGIN_FAILURE,
  payload: error,
});
