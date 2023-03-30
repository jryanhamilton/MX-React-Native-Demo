import { StyleSheet, Text, View, Button } from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import * as Linking from 'expo-linking';
import {Nav} from './Nav';

export function HomeScreen({url}) {
	const linkTo = useLinkTo();

	return (
		<>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
				<Button 
					title="Home"
					onPress={() => linkTo("/index")}
			 	/>
				<Button
					title="Broken"
					onPress={() => linkTo("/stack/user/Wojciech/22")}
				/>
				<Button
					title="Connect Widget"
					onPress={() => linkTo("/widget")}
				/>
			</View>
	    	<View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Text>URL: {url}</Text>
	    	</View>
		</>
	);
  }