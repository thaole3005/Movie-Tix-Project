import login from "../../API/authApi";
import * as actions from "../actions/authAction";

export const actionLogin =
  ({ username, password }) =>
  (dispatch) => {
    dispatch(actions.loginStart());

    login
      .customerLogin(username, password)
      .then((payload) => {

        dispatch(actions.loginSuccess(payload));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actions.loginFailure(error));
      });
  };
