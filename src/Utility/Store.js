import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./Productslice.js"
import UserSlice from "./UserSlice.js"
const store = configureStore({
    reducer:{
        productSlice,
        UserSlice
    }
})
export default store