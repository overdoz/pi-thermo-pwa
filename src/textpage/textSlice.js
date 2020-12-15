import { createSlice } from '@reduxjs/toolkit'

export const textSlice = createSlice({
    name: 'text',
    initialState: {
        value: ""
    },
    reducers: {
        changeText: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        deleteText: state => {
            state.value = ""
        }
    }
})

export const { changeText, deleteText } = textSlice.actions

export default textSlice.reducer

export const changeText = text => {
    return {
        type: 'text/changeText',
        payload: text
    }
}

export const deleteText = text => {
    return {
        type: 'text/deleteText',
    }
}
