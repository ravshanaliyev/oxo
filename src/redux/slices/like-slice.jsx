import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/load-state";


const like = createSlice({
    name: "data",
    initialState: {
        data: loadState("data") || [],
    },
    reducers: {
        addLike: (state, action) => {
            return { ...state, data: [...state.data, action.payload] };
        },
        removeLike: (state, action) => {
            return {
                ...state,
                data: state.data.filter((el) => el.id !== action.payload.id),
            };
        },
    },
});

export const { addLike, removeLike } = like.actions;

export default like.reducer;