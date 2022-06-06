import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IsMobileState {
  isMobile: boolean
}

const initialState: IsMobileState = {
  isMobile: false,
}

export const isMobileSlice = createSlice({
  name: 'isMobile',
  initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
  },
})

export const {setMobile} = isMobileSlice.actions

export default isMobileSlice.reducer
