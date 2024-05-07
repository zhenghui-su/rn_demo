import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useCounterStore } from '../zustand/CounterStore';

const Count = () => {
	// 取出状态和方法 这里是取出所有 可以用解构
	// const { count, increment, decrement } = useCounterStore();
	const count = useCounterStore((state) => state.count);
	const increment = useCounterStore((state) => state.increment);
	const decrement = useCounterStore((state) => state.decrement);

	return (
		<View style={styles.container}>
			<View style={styles.counterContainer}>
				<Button title='-' onPress={decrement} />
				<Text style={styles.count}>{count}</Text>
				<Button title='+' onPress={increment} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	counterContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	count: {
		marginLeft: 30,
		fontSize: 20,
		marginRight: 30,
	},
});

export default Count;
