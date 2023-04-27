import { ConnectWidget } from "@mxenabled/react-native-widget-sdk";
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import * as Linking from 'expo-linking';
import {Nav} from './Nav';

export function MXConnectWidget({url}) {
	// Update the connectURL variable
	const connectURL = "";
	
	const linkTo = useLinkTo();
	
	return(
		<>
			<View style={{ flex: 6, alignItems: 'center', justifyContent: 'top' }}>
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
				<Text>Widget</Text>
				<Text>URL: {url}</Text>
			</View>
			<View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
				<ConnectWidget
					onLoaded={() => console.log("Connect Widget Loaded")}
					url= connectURL
				  	
			  		onMessage={(request) => console.log(`Message: ${request.url}`)}
			  		onLoaded={(payload) => { 
						console.log(`User guid: ${payload.user_guid}`)
						console.log(`Session guid: ${payload.session_guid}`)
						console.log(`Initial step: ${payload.initial_step}`)
						}
			  	  	}
			  		onSelectedInstitution={(payload) => {
						console.log(`User guid: ${payload.user_guid}`)
						console.log(`Session guid: ${payload.session_guid}`)
						console.log(`Code: ${payload.code}`)
						console.log(`Guid: ${payload.guid}`)
						console.log(`Name: ${payload.name}`)
						console.log(`Url: ${payload.url}`)
						}
			  		}
			  		onMemberStatusUpdate={(payload) => {
						console.log(`User guid: ${payload.user_guid}`)
						console.log(`Session guid: ${payload.session_guid}`)
						console.log(`Member guid: ${payload.member_guid}`)
						console.log(`Connection status: ${payload.connection_status}`)
						}
			  		}
			  		onOAuthRequested={(payload) => {
						const oAuthURL = payload.url;
						
						console.log(`User guid: ${payload.user_guid}`)
						console.log(`Session guid: ${payload.session_guid}`)
						console.log(`Url: ${payload.url}`)
						console.log(`Member guid: ${payload.member_guid}`)
						
						const openOAuthURL = Linking.openURL(oAuthURL);
						}
			  		}
					onMemberConnected={(payload) => {
						console.log('Member Connected')
						console.log(`User guid: ${payload.user_guid}`)
						console.log(`Session guid: ${payload.session_guid}`)
						console.log(`Member guid: ${payload.member_guid}`)
						}
					}
			  	/>
			</View>
		</>
	)
  }