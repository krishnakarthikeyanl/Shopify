import {configureStore} from "@reduxjs/toolkit"
import cartSliceReducer from "./cartslice"

export const store = configureStore( {
    reducer : {
        cart : cartSliceReducer
    }
} )