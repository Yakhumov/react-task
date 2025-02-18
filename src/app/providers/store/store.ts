import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import PostsReducer from "../../../entities/Posts/model/slices/PostsSlices";
import { profileApi } from "../../../shared/api/rtkApi";
import WeatherReducer from "../../../entities/Weather/model/slices/WeatherSlices";

const store = configureStore({
  reducer: {
    posts: PostsReducer,
    weather: WeatherReducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
