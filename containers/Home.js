import React from 'react'
import {View, Text, Button} from 'react-native'

export default ({navigation}) => (
	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
		<Text>Saya Halaman Home</Text>
		<Button
			title="pergi ke About"
			onPress={() => navigation.navigate('Uzai')}
		/>
	</View>
)