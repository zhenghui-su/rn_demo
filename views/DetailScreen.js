import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
	// 接收参数
	const { itemId, otherParam } = route.params;
	const pressHandle = () => {
		navigation.navigate('HomeScreen');
	};

	return (
		<View style={styles.container}>
			<Text>这是详情页面</Text>
			<Text>
				这是接收的参数: itemId {itemId} otherParam: {otherParam}
			</Text>
			<Button title='跳转到首页' onPress={pressHandle} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default DetailScreen;
