import {configureStore} from '@reduxjs/toolkit'
import cartSliceReducer from './slices/CartSlice';
const appStore = configureStore({
    reducer:{
        cart:cartSliceReducer
    }
    
});


export default appStore