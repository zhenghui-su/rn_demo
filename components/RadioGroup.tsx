import React, { useRef } from 'react';
import RadioButton from './RadioButton';
import { View } from 'react-native';

type PropType = {
	orientation: 'column' | 'row';
	data: any[];
	defaultValue: number; // 默认选中的值
	drawablePadding: number; // 图片与文字的间距
	itemChange: (index: number) => void;
};

const RadioGroup = (props: PropType) => {
	const { orientation, data, defaultValue, drawablePadding, itemChange } =
		props;

	const radioButtonsRef = useRef<(any | null)[]>([]); // 存储子组件的引用

	const change = (index: number) => {
		// 当前索引 index
		// 1. 触发父组件App的方法
		itemChange(index);
		// 2. 遍历每一个子组件, 调用子组件的 setSelectedState 方法
		radioButtonsRef.current.forEach((item: any, i: any) => {
			if (item !== null) {
				item.setSelectedState(i === index);
			}
		});
	};

	return (
		<View style={{ flexDirection: orientation }}>
			{data.map((item, index) => (
				<RadioButton
					selected={index === defaultValue}
					key={index}
					text={item.text}
					drawablePadding={drawablePadding}
					ref={(ref) => {
						radioButtonsRef.current[index] = ref;
					}}
					selectedChanged={() => change(index)}
				/>
			))}
		</View>
	);
};

export default RadioGroup;
