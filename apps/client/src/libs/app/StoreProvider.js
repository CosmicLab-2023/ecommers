"use client";
import { useLayoutEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { setToken, setUser } from "../features/userSlice";
import { store } from "./store";
import { setWishlists } from "../features/wishlistSlice";

function StoreProvider({ children, ...rest }) {
  return (
    <Provider store={store}>
      <GlobalState {...rest}>{children}</GlobalState>
    </Provider>
  );
}

function GlobalState({ children, user: userData, token }) {
  const dispatch = useDispatch();
  const { wishlists } = userData??{};
  const user = { ...userData??{}, wishlists: null };

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

  useLayoutEffect(() => {
    if (!!wishlists) {
      dispatch(setWishlists(wishlists.map((wl)=>wl.id)));
    }
  }, [wishlists]);

  return <>{children}</>;
}

export default StoreProvider;
