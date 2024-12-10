import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    price: 0,
}

export const ItemsSlice = createSlice({
    name: 'totalItems',
    initialState,
    reducers:{
        addItem: (state, actions)=>{
            const amount = actions.payload.amount;
            state.value +=1
            state.price += amount
        },
        removeItem: (state, actions) =>{
            const amount = actions.payload.amount;
            state.value -= 1
            state.price -= amount
        },
        
    },
})

export const {addItem, removeItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;