import { configureStore } from "@reduxjs/toolkit";
import { homePageSliceReducer } from "@/pages/homePage";
export const store = configureStore({
  reducer: {
    homePageSliceReducer
  },
  middleware:  getDefaultMiddleware => getDefaultMiddleware(),
})