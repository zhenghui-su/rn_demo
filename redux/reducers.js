import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
	name: 'todolist',
	// 初始化状态
	initialState: {
		listItem: [
			{
				title: '看书',
				isCompleted: false,
			},
			{
				title: '学习React',
				isCompleted: false,
			},
			{
				title: '学习RN',
				isCompleted: true,
			},
		],
	},
	// 定义reducer函数
	reducers: {
		increment: (state, action) => {
			let arr = [...state.listItem];
			arr.push({
				title: action.payload,
				isCompleted: false,
			});
			state.listItem = arr;
		},
		decrement: (state, action) => {
			let arr = [...state.listItem];
			arr.splice(action.payload, 1);
			state.listItem = arr;
		},
		changeStatus: (state, action) => {
			let arr = [...state.listItem];
			arr[action.payload].isCompleted = !arr[action.payload].isCompleted;
			state.listItem = arr;
		},
	},
});

export const { increment, decrement, changeStatus } = todoListSlice.actions;
export default todoListSlice.reducer;
