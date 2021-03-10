import * as types from "./../types";

export const increment = () => async (dispatch) => {
  dispatch({
    type: types.INCREMENT,
  });
};

export const decrement = () => async (dispatch) => {
  dispatch({
    type: types.DECREMENT,
  });
};
