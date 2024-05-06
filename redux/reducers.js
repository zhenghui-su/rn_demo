import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	// 初始化状态
	initialState: {
		value: 0,
	},
	// 定义reducer函数
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
