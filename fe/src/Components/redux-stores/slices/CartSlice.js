
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice(
    {
      name:'cart',
      initialState:{
        cartItems:[],
      },
      reducers:{
         addToCart:(state,action)=>{
            console.log("action.payload>>>>>>>>>>>>>>>>>>>>>>>>>>>",action.payload);
            state.cartItems.push(action.payload);
         },
      }
    }
)

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer