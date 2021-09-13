import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addValue: (state,action)=>{
            state.searchValue = action.payload;
        },
        clearValue : (state,action)=>{
            state.searchValue = '';
        }
    }
});

export const { addValue, clearValue} = searchSlice.actions;
export default searchSlice.reducer;