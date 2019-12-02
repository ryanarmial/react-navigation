import React from 'react'
import {View, Text, Button} from 'react-native'

export default ({navigation}) => {
	console.log('halo saya dari about')
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
			<Text>Saya Halaman About</Text>
			<Button
				title="pergi ke Blog"
				onPress={() => navigation.navigate('Blog')}
			/>
		</View>
	)
}