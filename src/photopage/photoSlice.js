import { createSlice } from '@reduxjs/toolkit'

export const photoSlice = createSlice({
    name: 'photo',
    initialState: {
        value: null,
        url: ""
    },
    reducers: {
        changePhoto: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload.target.files[0];
            state.url = getURL(action.payload);
        },
        deletePhoto: (state, action) => {
            state.url = "";
        }
    }
});

export default photoSlice.reducer
// export const { changePhoto, deletePhoto } = photoSlice.actions


export const changePhoto = photo => {
    return {
        type: 'photo/changePhoto',
        payload: photo
    }
};

export const deletePhoto = () => {
    return {
        type: 'photo/deletePhoto',
    }
};

export const selectPhotoPath = state => state.photo.url;
export const selectPhotoFile = state => state.photo.value;

function getURL(event) {
    return URL.createObjectURL(event.target.files[0])
}
