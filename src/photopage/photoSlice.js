import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        value: null
    },
    reducers: {
        changePhoto: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload
        },
        deletePhoto: state => {
            state.value = ""
        }
    }
})

export default photoSlice.reducer

export const changePhoto = photo => {
    return {
        type: 'photo/changePhoto',
        payload: photo
    }
}

export const deletePhoto = () => {
    return {
        type: 'photo/deletePhoto',
    }
}

export const selectPhoto = state => state.photo.value
