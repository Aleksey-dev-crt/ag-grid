import {
  Action,
  configureStore,
  ThunkAction,
  ActionCreator,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { commonReducer } from "./reducers/commonReducer";

const store = configureStore({
  reducer: commonReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, Action>
>;

export default store;
