import {createSlice} from '@reduxjs/toolkit';

export const articlesSlice = createSlice({
    name: 'articlesData',
    initialState: [],
    reducers: {
        addArticle: (state, {payload}) => {
            // const {title, cover, text, author, category} = payload;
            state.push(payload)
        }
    }
});

export const {addArticle} = articlesSlice.actions;
export default articlesSlice.reducer;