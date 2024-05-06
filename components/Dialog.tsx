import React from 'react';
import {
	Dimensions,
	Text,
	View,
	Image,
	StyleSheet,
	Pressable,
	ImageSourcePropType,
	ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

type PropType = {
	isShow: boolean;
	title: string;
	content: string;
	buttonContent: string;
	imageSource: ImageSourcePropType;
	onClose: () => void;
};
export const Dialog = (props: PropType) => {
	const { isShow, title, content, buttonContent, imageSource, onClose } = props;
	return (
		isShow && (
			// 整体两个部分
			<View style={styles.containerBg}>
				{/* 上面 */}
				<View style={styles.dialogBg}>
					<Image source={imageSource} style={styles.logoStyle} />
					<Text style={styles.titleStyle}>{title}</Text>
					<Text style={styles.contentStyle}>{content}</Text>
					<Pressable>
						<ImageBackground
							resizeMode='stretch'
							source={require('../assets/bg_btn.png')}
							style={styles.buttonStyle}
						>
							<Text style={styles.btnContentStyle}>{buttonContent}</Text>
						</ImageBackground>
					</Pressable>
				</View>
				{/* 下面 */}
				<Pressable style={styles.btnCloseStyle} onPress={onClose}>
					<Image
						source={require('../assets/ic_close.png')}
						style={{
							height: 38,
							width: 38,
						}}
					/>
				</Pressable>
			</View>
		)
	);
};
const styles = StyleSheet.create({
	containerBg: {
		backgroundColor: 'raba(0, 0, 0, 0.7)',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dialogBg: {
		width: width - 100,
		backgroundColor: '#fff',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
	},
	logoStyle: {
		height: ((width - 100) * 250) / 400,
		width: width - 100,
	},
	titleStyle: {
		marginTop: 14,
		color: '#333333',
		fontSize: 18,
		fontWeight: '600',
	},
	contentStyle: {
		marginTop: 5,
		color: '#333333',
		fontSize: 14,
		fontWeight: '400',
	},
	buttonStyle: {
		height: ((width - 135) * 88) / 480,
		width: width - 180,
		marginTop: 36,
		marginBottom: 22,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnContentStyle: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
		fontWeight: '600',
	},
	btnCloseStyle: {
		padding: 10,
		marginTop: 33,
		alignItems: 'center',
	},
});
export default Dialog;
