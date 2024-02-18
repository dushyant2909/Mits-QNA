import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("Login slice called");
            state.status = true,
                state.userData = action.payload;
        },
        logout: (state) => {
            console.log("Logout slice called");
            state.status = false,
                state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions;

// my custom hook
export const selectUser = (state) => state.auth.userData

export default authSlice.reducer;