import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :"cart",
    initialState : [],
    reducers : {
        add : (state , action)=>{
            state.push(action.payload);
        },
         remove  : (state , action)=>{
         return  state.filter((data : any)=> data.id !== action.payload)
        },
        update  : (state , action)=>{
            const {id  , quantity} =  action.payload;
            const itemToUpdate = state.find(item => item.id === id);
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