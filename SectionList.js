import React, { useState, useEffect } from 'react';
import {
	View,
	StyleSheet,
	SectionList,
	Dimensions,
	Text,
	ActivityIndicator,
} from 'react-native';
import { queryMovies, randomRefreshMovies } from './data/Service';
import { MovieItemCell } from './components/MovieItemCell';
import moviesData from './data/movie.json';

// 获取屏幕的宽度和高度
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

const SectionList = () => {
	// 初始化电影数据
	const disPlayMovies = queryMovies(1, 10); // 获取第一个 10条数据
	const incomingMovies = queryMovies(2, 10); // 获取第二个 10条数据

	// 电影数据
	const [sectionData, setSectionData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSectionData([
				{ title: '正在热映', data: disPlayMovies },
				{ title: '即将上映', data: incomingMovies },
			]);
			setIsLoading(false);
		}, 1000);
	}, []);

	// 渲染标题
	function renderTitle() {
		return (
			<View style={styles.barStyle}>
				<Text style={styles.txtStyle}>电影列表</Text>
			</View>
		);
	}
	// 渲染加载条
	function renderLoading() {
		if (isLoading) {
			return (
				<View style={styles.container}>
					{/* RN 内置的组件 显示一个圆形的 loading 提示符号*/}
					<ActivityIndicator size='large' color='#268dcd' />
					<Text
						style={{
							color: '#666',
							paddingLeft: 10,
						}}
					>
						努力加载中
					</Text>
				</View>
			);
		}
	}
	// 渲染列表
	function renderList() {
		if (!isLoading) {
			return (
				<SectionList
					sections={sectionData}
					renderItem={({ item }) => (
						<MovieItemCell
							movie={item}
							onPress={() => {
								alert('点击的电影为:' + item.title);
							}}
						/>
					)}
					keyExtractor={(item, index) => index.toString()}
					renderSectionHeader={({ section }) => (
						<View style={styles.sectionHeader}>
							<Text style={styles.sectionTitle}>{section.title}</Text>
						</View>
					)}
					stickySectionHeadersEnabled={true}
				/>
			);
		}
	}

	return (
		<View style={styles.flex}>
			{/* 标题区域 */}
			{renderTitle()}
			{/* 加载条区域 */}
			{renderLoading()}
			{/* 列表区域 */}
			{renderList()}
		</View>
	);
};

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		backgroundColor: '#268dcd',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		flexDirection: 'row',
	},
	barStyle: {
		height: 48,
		width: width,
		justifyContent: 'center',
		borderColor: '#268dcd',
	},
	txtStyle: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 18,
	},
	sectionHeader: {
		padding: 10,
		backgroundColor: '#268dcd',
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default SectionList;
