import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemons";
import { useDispatch, useSelector, useStore } from "react-redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: pokemonsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
