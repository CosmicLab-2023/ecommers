"use client";
import { useLayoutEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { setToken, setUser } from "../features/userSlice";
import { store } from "./store";

function StoreProvider({ children, ...rest }) {
  return (
    <Provider store={store}>
      <GlobalState {...rest}>{children}</GlobalState>
    </Provider>
  );
}

function GlobalState({ children, user, token }) {
  const dispatch = useDispatch();


  useLayoutEffect(() => {
    if (!!user) {
      dispatch(setUser(user));
    }
  }, [user]);

  useLayoutEffect(() => {
    if (!!token) {
      dispatch(setToken(token));
    }
  }, [token]);

  return <>{children}</>;
}

export default StoreProvider;
