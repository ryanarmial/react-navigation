import React, {useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'

// https://api.pokemontcg.io/v1/cards

export default ({navigation}) => {

	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		halo()

	}, [])

	async function halo() {
		const response = await fetch('https://api.pokemontcg.io/v1/cards?pageSize=5')
		const data = await response.json()

		setPokemons(data.cards)
	}

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
			<Text>Saya Halaman Blog</Text>
			{
				pokemons.map(pokemon => (
					<Text
						onPress={() => navigation.navigate('Detail', {idCard: pokemon.id})}
					>
						{pokemon.name}
					</Text>
				))
			}
			<Button
				title="pergi ke Home"
				onPress={() => navigation.navigate('Login')}
			/>
		</View>
	)
}