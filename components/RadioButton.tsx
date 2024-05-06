import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

type PropType = {
	selected: boolean;
	text: string;
	drawablePadding: number;
	selectedChanged: (selected: boolean) => void;
};

const RadioButton = forwardRef((props: PropType, ref) => {
	const { selected, text, drawablePadding, selectedChanged } = props;

	const selectedTextColor = '#f83d2b';
	const unSelectedTextColor = '#333333';
	const selectedImage = require('../assets/radio_selectd.png');
	const unSelectedImage = require('../assets/radio_unselectd.png');

	const [select, setSelect] = useState(selected);

	const pressHandle = () => {
		const newSelect = !select;
		setSelect(newSelect);
		selectedChanged(newSelect);
	};

	useImperativeHandle(ref, () => ({
		setSelectedState: (isSelected: boolean) => {
			setSelect(isSelected);
		},
	}));

	return (
		<Pressable onPress={pressHandle}>
			<View style={styles.radioStyle}>
				{/* 左边图片 */}
				<Image
					style={styles.image}
					source={select ? selectedImage : unSelectedImage}
				/>
				{/* 右边文字 */}
				<Text
					style={{
						color: select ? selectedTextColor : unSelectedTextColor,
						marginLeft: drawablePadding,
						fontSize: 16,
					}}
				>
					{text}
				</Text>
			</View>
		</Pressable>
	);
});

const styles = StyleSheet.create({
	radioStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		marginBottom: 10,
	},
	image: {
		width: 22,
		height: 22,
	},
	text: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default RadioButton;
