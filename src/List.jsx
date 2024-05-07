import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { useToDoListStore } from '../zustand/ToDoListStore';
// 一项一项的待办事项
const List = () => {
	// todolistItem 是从仓库拿到的数据
	// const todolistItem = useSelector((state) => state.todolist.listItem);
	// const dispatch = useDispatch(); // 通过 dispatch 方法来派发 action 对象
	const todolistItem = useToDoListStore((state) => state.listItem);
	const changeStatus = useToDoListStore((state) => state.changeStatus);
	const decrement = useToDoListStore((state) => state.decrement);

	// 短按, 切换已完成和未完成的状态
	const pressHandle = (index) => {
		// dispatch(changeStatus(index));
		changeStatus(index);
	};
	// 删除
	const longPressHandle = (index) => {
		Alert.alert('通知', '你是否要删除此条待办事项？', [
			{
				text: '取消',
				onPress: () => console.log('取消删除'),
				style: 'cancel',
			},
			{
				text: '确定',
				onPress: () => {
					// dispatch(decrement(index));
					decrement(index);
				},
				style: 'default',
			},
		]);
	};

	return (
		<View style={styles.container}>
			{todolistItem.map((item, index) => (
				<View style={styles.item} key={index}>
					<Pressable
						onPress={() => pressHandle(index)}
						onLongPress={() => longPressHandle(index)}
					>
						{item.isCompleted ? (
							<Text style={styles.complete}>{item.title}</Text>
						) : (
							<Text>{item.title}</Text>
						)}
					</Pressable>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	item: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		marginBottom: 10,
		textAlign: 'center',
		width: 300,
	},
	complete: {
		textDecorationLine: 'line-through',
	},
});

export default List;
