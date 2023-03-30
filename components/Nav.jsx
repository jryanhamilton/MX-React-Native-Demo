import { StyleSheet, Text, View } from 'react-native';

import * as Linking from 'expo-linking';

export function Nav({url}) {
	const linkTo = useLinkTo();
	
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
		  <Button 
			title="test"
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
	);
  }