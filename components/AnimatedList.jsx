import React, { useState } from 'react';
import {
	StyleSheet,
	Dimensions,
	View,
	ImageBackground,
	ScrollView,
	Animated,
	Text,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
// 图片链接
const images = new Array(6).fill(
	'https://chen-1320883525.cos.ap-chengdu.myqcloud.com/KatouMegumi%2Ftimg.jpg?q-sign-algorithm=sha1&q-ak=AKIDH7Tb4WmUnfm14AUfbAGhx6l6K5JNSRLV6C41QH1yLNMmh37VnVgiAoEoWkvPkwoT&q-sign-time=1714745349;1714748949&q-key-time=1714745349;1714748949&q-header-list=&q-url-param-list=ci-process&q-signature=4c1e5a4aac64d5a105cd73ea3365969b085ae513&x-cos-security-token=168fAgtABaq3p7ROomSiMqJeE5ODZ49a14d993f40a78495ebba2fa4804bec8f0QasofuCcbDZ1ekhULTC8_Y6t-49m8U5Kod9dIuX43HF87-gMHvs8IV2BqdXqvyX5C65KMVXqbe4SMVtb25gKYDSNUZThcHOINwnWRhp8TBAzVDPde_HcMxmqscJeo8mrmvUMqVcAb6-pinDJhf9ngjn6KOuBbS90L3Us4TkU2ye_DsCCvJ9asoaMliyiIxIx&ci-process=originImage'
);

const AnimatedList = () => {
	const [scrollX] = useState(new Animated.Value(0));

	return (
		<View style={styles.container}>
			<View style={styles.scrollContainer}>
				{/* 上面滑动图片部分 */}
				<ScrollView
					horizontal={true} // 水平排列
					showsHorizontalScrollIndicator={false} // 不显示水平滚动条
					pagingEnabled={true} // 当值为 true 时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为 false。
					// 当我们滚动图片的时候会有个实时的 x 变化, 我们将这个 x 映射到 scrollX 中
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
				>
					{images.map((image, imageIndex) => {
						return (
							<View
								style={{ width: windowWidth, height: 250 }}
								key={imageIndex + image}
							>
								<ImageBackground source={{ uri: image }} style={styles.card}>
									<View style={styles.textContainer}>
										<Text style={styles.infoText}>
											{'Image - ' + (imageIndex + 1)}
										</Text>
									</View>
								</ImageBackground>
							</View>
						);
					})}
				</ScrollView>
				{/* 下面小圆点部分 */}
				<View style={styles.indicatorContainer}>
					{images.map((image, imageIndex) => {
						// 根据 scrollX 的值来动态地修改小圆点的 width
						return (
							<Animated.View
								style={[
									styles.normalDot,
									{
										width: scrollX.interpolate({
											inputRange: [
												windowWidth * (imageIndex - 1),
												windowWidth * imageIndex,
												windowWidth * (imageIndex + 1),
											],
											outputRange: [8, 16, 8],
											extrapolate: 'clamp', // 不进行增量计算
										}),
									},
								]}
								key={imageIndex}
							/>
						);
					})}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scrollContainer: {
		height: 300,
		alignContent: 'center',
		justifyContent: 'center',
	},
	card: {
		flex: 1,
		marginVertical: 4,
		marginHorizontal: 16,
		borderRadius: 5,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 24,
		paddingVertical: 8,
		borderRadius: 5,
	},
	infoText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	normalDot: {
		height: 8,
		width: 8,
		borderRadius: 4,
		backgroundColor: 'silver',
		marginHorizontal: 4,
	},
	indicatorContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'center',
	},
});

export default AnimatedList;
