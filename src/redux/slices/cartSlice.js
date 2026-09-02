import { createSlice } from '@reduxjs/toolkit'

const initialState = {
fechItem:[],
loading:false,
error:null,
}

export const cartSlice = createSlice({
  name: 'item',
  initialState,
 reducer:{

 }
})


export default cartSlice.reducer