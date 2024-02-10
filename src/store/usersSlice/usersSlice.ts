import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        console.log('res', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.userList = action.payload;
            state.loading = false;
        });
    },
});

export default userSlice.reducer;
