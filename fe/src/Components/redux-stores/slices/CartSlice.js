
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice(
    {
      name:'cart',
      initialState:{
        cartItems:[],
      },
      reducers:{
         addToCart:(state,action)=>{
            console.log("action.payload>>>>>>>>>>>>>>>>>>>>>>>>>>>",action.payload.name);
            let isExist = false;
            state.cartItems.forEach((cart)=>{
              if(cart.name==action.payload.name){
                    isExist = true;
                    cart.quantity = cart.quantity+1;
              }
              console.log("cart!!!!!!!!!!!!!!!!",cart.name);
            })
            if(!isExist){
              state.cartItems.push(action.payload);
            }
           
         },
         incCartItem:(state,action)=>{
           console.log("Inc CArt Item@@@@@@@@@@@@",action.payload);
           state.cartItems.forEach((cart)=>{
            console.log("Cart name@@@@@@@@@@@@@@@@@@@@@@@@",cart.name);
            if(cart.name == action.payload){
               console.log("Cart item exist incrementing");
              cart.quantity = cart.quantity+1;
            }
           })
           console.log("cart Otems after increment$$$$$$$$$$$$$$$$$$$",state.cartItems[0].quantity)
         },
         decCartItem:(state,action)=>{
          state.cartItems.forEach((cart)=>{
            if(cart.name == action.payload){
               cart.quantity = cart.quantity -1;
            }
          })
         },
         deleteCartItem:(state,action)=>{
          state.cartItems =  state.cartItems.filter((cart)=>{
               return  cart.name!=action.payload
           })
         }
      }
    }
)

export const {addToCart,incCartItem,decCartItem,deleteCartItem} = cartSlice.actions;
export default cartSlice.reducer