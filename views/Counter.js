import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers';

export const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<View style={styles.container}>
			<View style={styles.counterContainer}>
				<Button title='-' onPress={() => dispatch(decrement())} />
				<Text style={styles.count}>{count}</Text>
				<Button title='+' onPress={() => dispatch(increment())} />
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
