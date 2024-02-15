import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
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

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id: number, thunkAPI) => {
    try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        console.log('res', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const loadFavorite = createAsyncThunk('users/loadFavorite', async () => {
    const data = localStorage.getItem('isFavorite');

    if (data) {
        return JSON.parse(data);
    }

    return {};
});

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList: [],
        isFavorite: {},
        singleUserData: [],
        loading: false,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;
            state.isFavorite = {...state.isFavorite, [id]: !state.isFavorite[id as keyof typeof state.isFavorite]};
            localStorage.setItem('isFavorite', JSON.stringify(state.isFavorite));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.userList = action.payload.users;
            state.loading = false;
        });
        builder.addCase(fetchUserById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.singleUserData = action.payload;
            state.loading = false;
        });
        builder.addCase(loadFavorite.fulfilled, (state, action) => {
            state.isFavorite = action.payload;
            state.loading = false;
        });
    },
});

export const {toggleFavorite} = userSlice.actions;

export default userSlice.reducer;
