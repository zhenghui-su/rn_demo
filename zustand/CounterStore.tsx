import { create } from 'zustand';

type CounterStoreState = {
	count: number;
	increment: () => void;
	decrement: () => void;
};
// 创建store示例和对应的方法
export const useCounterStore = create<CounterStoreState>()((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));
