import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import displayName from "./user";
import email from "./email";
import uid from "./uid";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    displayName,
    email,
    uid,
  })(state, action);
};

export default reducer;
