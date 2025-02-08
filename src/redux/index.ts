import { combineReducers, configureStore } from '@reduxjs/toolkit'
import accountReducer from "./reducers/account"

const rootReducer = combineReducers({
    account: accountReducer,
});

const store = configureStore({
  reducer: rootReducer, 
  middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false
      })
  },
})

export type RootState = ReturnType<typeof rootReducer>;

export default store