import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        value: ""
    },
    reducers: {
        changeText: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload
        },
        deleteText: state => {
            state.value = ""
        }
    }
})
