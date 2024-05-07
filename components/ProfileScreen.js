import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigation }) => {
	useFocusEffect(
		useCallback(() => {
			alert('进入到了 Profile 页面');
			// 可以执行一些操作
			return () => {
				alert('离开了 Profile 页面');
			};
		}, [])
	);
	return (
		<View style={styles.container}>
			<Text>这是Profile页面</Text>
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
export default ProfileScreen;
