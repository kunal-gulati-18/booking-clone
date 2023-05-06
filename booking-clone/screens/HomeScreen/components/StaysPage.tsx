import { Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const StaysPage = () => {
	const [inputs, setInputs] = useState<{
		destination: '';
		start_date: Date;
		end_date: Date;
		room: 1;
		adults: 1;
		children: 0;
	}>({
		destination: '',
		start_date: new Date(),
		end_date: new Date(),
		room: 1,
		adults: 1,
		children: 0,
	});
	const [show, setShow] = useState(false);

	const onChangeInput = (key: string, value: number | string) => {
		console.log('valye', value);
		setInputs({
			...inputs,
			[key]: value,
		});
	};
	useEffect(() => {
		console.log('okkk');
	}, []);
	return (
		<View className="flex-col w-full p-3">
			<View className="w-full">
				<Input
					leftIcon={<AntDesign name="search1" size={24} color="black" />}
					style={{ width: '100%' }}
					placeholder="Enter your destination"
					onChangeText={(text) => onChangeInput('destination', text)}
				/>
			</View>
			{/* <Pressable onPress={() => setShow(!show)}>
				<View>
					<View></View>
					<Text>Enter your dates</Text>
				</View>
				<DatePicker
					modal
					open={show}
					date={new Date()}
					onConfirm={(date) => {
						setShow(false);
						onChangeInput("date", date);
					}}
					onCancel={() => {
						setShow(false);
					}}
				/>
			</Pressable> */}
			<View className="flex-row items-center justify-between">
				<View className="flex-row items-center">
					<View>
						<Text>From</Text>
					</View>
					<View>
						<DateTimePicker
							testID="dateTimePicker"
							value={inputs.start_date}
							mode="date"
							is24Hour={true}
							onChange={(e, value) => onChangeInput('start_date', value)}
						/>
					</View>
				</View>
				<View className="flex-row items-center">
					<View>
						<Text>To</Text>
					</View>
					<View>
						<DateTimePicker
							testID="dateTimePicker"
							value={inputs.end_date}
							mode="date"
							is24Hour={true}
							onChange={(e, value) => onChangeInput('start_date', value)}
						/>
					</View>
				</View>
			</View>
			<View></View>
		</View>
	);
};

export default StaysPage;
