import * as types from "../types";

const initialState = {
  number: 0,
};

export const operation = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: (state.number += 1),
      };
    case types.DECREMENT:
      return {
        ...state,
        number: (state.number -= 1),
      };
    default:
      return state;
  }
};
