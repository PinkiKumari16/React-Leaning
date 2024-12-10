import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../../features/counter/CounterSlices'
import  ItemsSlice  from '../../features/total amount/ItemsSlice'

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        items: ItemsSlice,
    },
})