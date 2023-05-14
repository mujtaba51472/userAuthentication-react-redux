import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('authData', JSON.stringify(state));
        },

        login: (state, action) => {
            const storedData = localStorage.getItem('authData');
            if (storedData) {
                const authData = JSON.parse(storedData);
                if (
                    authData.user.password === action.payload?.password &&
                    authData.user.email === action.payload?.email
                ) {
                    state.isAuthenticated = true;
                    state.user = authData.user; // Store the user object in the state
                    localStorage.setItem('authData', JSON.stringify(state));
                } else {
                    state.isAuthenticated = false;
                }
            } else {
                state.isAuthenticated = false;
            }

        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("authData");
        },

    }
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;
