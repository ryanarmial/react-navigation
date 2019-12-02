import React from 'react'
import {View, Text, Button} from 'react-native'

export default ({navigation}) => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
			<Text>Saya Halaman Login</Text>
			<Button
				title="Masuk"
				onPress={() => navigation.navigate('mainNavigator')}
			/>
		</View>
	)
}