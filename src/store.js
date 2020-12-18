import { configureStore } from '@reduxjs/toolkit'
import textReducer from './textpage/textSlice'

export default configureStore({
    reducer: {
        text: textReducer
    }
})



// function textReducerrrrr(state = initialState, action) {
//     // Check to see if the reducer cares about this action
//     switch(action.type) {
//         case 'text/changeText':
//             return {
//                 ...state,
//                 // and update the copy with the new value
//                 text: action.payload
//             }
//         case 'text/deleteText':
//             return {
//                 ...state,
//                 text: ""
//             }
//     }
//
//     // otherwise return the existing state unchanged
//     return state
// }
