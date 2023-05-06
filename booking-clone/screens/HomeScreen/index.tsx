import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { SCREEN_TYPES } from './constants';
import clsx from 'clsx';

const HomeScreen = () => {
	const [selectedKey, setSelectedKey] = useState<string>(SCREEN_TYPES[0].key);

	const [availableContent, setAvailableContent] = useState([SCREEN_TYPES[0].key]);

	const onChangeTab = (key: string) => {
		setSelectedKey(key);

		if (!availableContent.includes(key)) {
			setAvailableContent([...availableContent, key]);
		}
	};
	return (
		<View className="flex-col h-full w-full">
			<View className="bg-[#003580] py-3 px-4 flex-row space-x-2 justify-center h-16">
				{SCREEN_TYPES.map((type) => (
					<Pressable
						onPress={() => onChangeTab(type.key)}
						key={type.key}
						className={clsx(
							'flex-row items-center justify-center p-2 space-x-2',
							{
								'rounded-full border-white border-solid border-[1px]':
									selectedKey === type.key,
							}
						)}
					>
						<View className="flex-row justify-center items-center">
							{type.icon}
						</View>
						<Text className="text-white flex-row justify-center items-center">
							{type.title}
						</Text>
					</Pressable>
				))}
			</View>
			<ScrollView className="w-full">
				{SCREEN_TYPES.map(
					(type) =>
						availableContent.includes(type.key) && (
							<View
								key={type.key}
								className={clsx('flex-row w-full h-full', {
									"hidden": selectedKey !== type.key,
								})}
							>
								{type.component}
							</View>
						)
				)}
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
