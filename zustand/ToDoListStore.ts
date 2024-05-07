import { create } from 'zustand';

type ListItem = {
	title: string;
	isCompleted: boolean;
};

type ToDoListStore = {
	listItem: ListItem[];
	increment: (title: string) => void;
	decrement: (index: number) => void;
	changeStatus: (index: number) => void;
};

export const useToDoListStore = create<ToDoListStore>()((set) => ({
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

	increment: (title) => {
		set((state) => ({
			listItem: [...state.listItem, { title, isCompleted: false }],
		}));
	},

	decrement: (index) => {
		set((state) => ({
			listItem: state.listItem.filter((_, i) => i !== index),
		}));
	},

	changeStatus: (index) => {
		set((state) => ({
			listItem: state.listItem.map((item, i) =>
				i === index ? { ...item, isCompleted: !item.isCompleted } : item
			),
		}));
	},
}));
