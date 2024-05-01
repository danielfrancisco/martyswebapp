import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    menudata: [],
    cartCounter: 0,
  },
  reducers: {
    getMenuData: (state, action) => {
        if(Array.isArray(action.payload)){
          state.menudata = action.payload  
        }else{
          state.menudata = [...state.menudata,action.payload]
        }
        
    },
    setCartCounter: (state, action)=> {
       state.cartCounter = action.payload
    },

    /*incrementByAmount: (state, action) => {
        state.value += action.payload
      }*/
    
  }
})

// Action creators are generated for each case reducer function
export const { getMenuData, setCartCounter } = cartSlice.actions

export default cartSlice.reducer