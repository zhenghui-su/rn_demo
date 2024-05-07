import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useToDoListStore } from '../zustand/ToDoListStore';

// 负责接收用户的输入, 当用户点击确定时需要将输入内容同步到仓库里面
const Input = () => {
	const [inputValue, setInputValue] = useState('');

	// const dispatch = useDispatch();
	const increment = useToDoListStore((state) => state.increment);
	// 事件出来方法
	const pressHandle = () => {
		// 获取用户的输入, 通过 inputValue
		// 调用 actionCreator 生成一个 action, 然后派发到仓库里面
		// dispatch(increment(inputValue));
		increment(inputValue);
		setInputValue('');
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder='请输入内容'
				placeholderTextColor={'#999'}
				value={inputValue}
				onChangeText={(text) => setInputValue(text)}
			/>
			<Button title='添加' onPress={pressHandle} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'flex-start',
	},
	input: {
		width: 300,
		backgroundColor: '#fff',
		height: 40,
		padding: 10,
		borderWidth: 1,
		borderColor: '#DDD',
		borderRadius: 3,
		marginHorizontal: 10,
	},
});

export default Input;
