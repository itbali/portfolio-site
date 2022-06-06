import {configureStore} from '@reduxjs/toolkit'
import isMobileReducer from './AppSlice'

export const store = configureStore({
  reducer: {
    isMobileStore: isMobileReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
