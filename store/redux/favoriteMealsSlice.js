import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id : []
}

const favoriteMealSlice = createSlice({
    name : 'favorite',
    initialState,
    reducers: {
        addFavorite : (state, action) => {
            state.id.push(action.payload.id)
        },
        removeFavorite : (state, action) => {
            //state.id = state.id.filter(item => item !== action.payload.id)
            state.id.splice(state.id.indexOf(action.payload.id) , 1);
        }
    }
})

export default favoriteMealSlice.reducer;

export const { addFavorite , removeFavorite} = favoriteMealSlice.actions;
