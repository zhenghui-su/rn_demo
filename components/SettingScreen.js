import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SettingScreen = ({ navigation }) => {
	const pressHandle = () => {
		// 传递参数
		navigation.navigate('Profile');
	};
	const openDrawerHandle = () => {
		navigation.openDrawer();
	};
	const closeDrawerHandle = () => {
		navigation.closeDrawer();
	};
	const toggleDrawerHandle = () => {
		navigation.toggleDrawer();
	};
	return (
		<View style={styles.container}>
			<Text>这是Setting页面</Text>
			<Button title='跳转到 Profile 页面' onPress={pressHandle} />
			<View style={{ marginTop: 20 }}>
				<Button title='打开抽屉' onPress={openDrawerHandle} />
			</View>
			<View style={{ marginTop: 20 }}>
				<Button title='关闭抽屉' onPress={closeDrawerHandle} />
			</View>
			<View style={{ marginTop: 20 }}>
				<Button title='切换抽屉' onPress={toggleDrawerHandle} />
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
export default SettingScreen;
