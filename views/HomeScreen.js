import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
	const pressHandle = () => {
		// 传递参数
		navigation.navigate('DetailScreen', {
			itemId: 86,
			otherParam: '参数',
		});
	};
	const goToSettingHandle = () => {
		navigation.navigate('Second', { screen: 'Settings' });
	};

	return (
		<View style={styles.container}>
			<Text>这是首页</Text>
			<Button title='跳转到 Detail 页面' onPress={pressHandle} />
			<View style={{ marginTop: 20 }}>
				<Button title='跳转到 Setting 页面' onPress={goToSettingHandle} />
			</View>
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
export default HomeScreen;
