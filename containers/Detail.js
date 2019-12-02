import React from 'react'
import {View, Text, Button} from 'react-native'

export default ({navigation}) => {
	console.log(navigation.state.params.idCard)
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
			<Text>Saya Halaman Detail</Text>
		</View>
	)
}