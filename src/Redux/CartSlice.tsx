import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cart",
    initialState : [],
    reducers : {
        add : (state , action)=>{
            state.push(action.payload);
        },
         remove  : (state , action)=>{
         return  state.filter((data : any)=> data._id !== action.payload)
        },
        update  : (state , action)=>{
            const {_id  , quantity} =  action.payload;
            const itemToUpdate = state.find(item => item._id === _id);
          if (itemToUpdate) {
            itemToUpdate.quantity = quantity; // Immer handles the immutability
          } 
        },

        emptyCart : (state , action)=>{
          return  state = []
        }
    }
})

export const {add , remove, update , emptyCart} = cartSlice.actions; 
export default cartSlice.reducer;