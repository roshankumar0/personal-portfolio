import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/userSlice";
import postReducer from '@/reduxStore/features/currentUser'
import userSlice from "@/reduxStore/features/loginUser";
import apiSliceAction from "./features/apiSliceAction";
const store = configureStore({
  reducer: {
    auth,
    posts: postReducer,
    users: userSlice,
    api: apiSliceAction

  },
});

export default store;
