import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Game = () => {
	return (
		<View style={styles.container}>
			<Text>这是Game页面</Text>
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
export default Game;
