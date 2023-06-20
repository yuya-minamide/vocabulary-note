import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	_id: "",
	nickName: "",
	email: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLogin: (state, action) => {
			state._id = action.payload.data._id;
			state.nickName = action.payload.data.nickName;
			state.email = action.payload.data.email;
		},
		userLogout: (state) => {
			state._id = "";
			state.nickName = "";
			state.email = "";
		},
	},
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
