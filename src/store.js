import { configureStore } from '@reduxjs/toolkit'
import textReducer from './textpage/textSlice'
import photoReducer from './photopage/photoSlice'

export default configureStore({
    reducer: {
        text: textReducer,
        photo: photoReducer
    }
})


