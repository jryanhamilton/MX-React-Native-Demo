import { ConnectWidget } from "@mxenabled/react-native-widget-sdk";
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import * as Linking from 'expo-linking';
import {Nav} from './Nav';

export function MXConnectWidget({url}) {
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
					url= 'https://int-widgets.moneydesktop.com/md/connect/jrvAwxw5dk5zj358zwlgh8A5k7Zp63zy2pm1zf5pjm9v37dqdqk0tzbcj7979f34swq15qg1ljx02r4xchm0v2vzlf4myjmv2Ab2gry1fytys3n87lA5scjAzbcm7lt6pz19v4jlsrf774n0p06AhdlAnl67w6yzxvwnf35m4lhl125tfyqj5scwpvv0rs8ykl7q7gjwbsj1vjm8pp0s6A2rmxd064dp4srzmq0xv1yA1ydmrt927m4p742fyvqlddAk9rqj04l03884k3b3hd5fwx1skvhv1xmwyfAwbw5wh1fzqppch97lp94h2lgb0dt1xcg35dz9snt8f64cfcbhvvlxbdk8gqvmyxsm/eyJ1aV9tZXNzYWdlX3ZlcnNpb24iOjQsInVpX21lc3NhZ2Vfd2Vidmlld191cmxfc2NoZW1lIjoibXgiLCJjb2xvcl9zY2hlbWUiOiJsaWdodCIsImlzX21vYmlsZV93ZWJ2aWV3Ijp0cnVlLCJjbGllbnRfcmVkaXJlY3RfdXJsIjoiZXhwOi8vMTcyLjI0LjE1LjIzODoxOTAwMC8tLS9vYXV0aF9jb21wbGV0ZSIsImluY2x1ZGVfdHJhbnNhY3Rpb25zIjp0cnVlLCJtb2RlIjoiYWdncmVnYXRpb24iLCJ1cGRhdGVfY3JlZGVudGlhbHMiOmZhbHNlLCJ3YWl0X2Zvcl9mdWxsX2FnZ3JlZ2F0aW9uIjpmYWxzZX0%3D'
				  	
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