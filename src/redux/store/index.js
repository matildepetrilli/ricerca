import{ configureStore} from "@reduxjs/toolkit"
import mainReducer from "../reducer"

const store=configureStore({
    reducer: mainReducer//qui ci va il reducer dello store di redux
})

export default store