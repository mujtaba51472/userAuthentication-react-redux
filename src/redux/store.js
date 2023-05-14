import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';

const store = configureStore({
    reducer: {
        authUser: authReducer,
    },
});

export default store;
