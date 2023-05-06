import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		setUser(state, action: PayloadAction<{}>) {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions

export const userSelector = (state) => state.user.user 
export default userSlice.reducer;
