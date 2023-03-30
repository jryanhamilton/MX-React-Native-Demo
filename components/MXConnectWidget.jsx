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
					url= 'https://int-widgets.moneydesktop.com/md/connect/Ajxmwrpvkmbyjndxvsxbv6tdfmZAh7h9wnp9f3tf1kd82b5k3AkAcyhxtf53Afk5lnxtvpk3n78sb6gw6r2j3A419vg60dtzr5gk8tlw9Aqxj3ljg185k2zxs6fzbcfAtlt7zqpcyyh94m22czs5zbjr27df2z5tfc5j1klxr45dAc7m3xhr9nnlwzxs4vjly9wr5f623723pj3br0x98l49wjd7h3f53zzxg34mr7thdq12y2Ar00jAdrqbs21jg9cffslqgmfn51p4A90tgnyns1ly8dhzddszn1z5wc5216g8fcs5kAv6j22rl1q482p52lkrAyctk0xhpblm1fjx5ctntzfjlb7dltlw/eyJ1aV9tZXNzYWdlX3ZlcnNpb24iOjQsInVpX21lc3NhZ2Vfd2Vidmlld191cmxfc2NoZW1lIjoibXgiLCJjb2xvcl9zY2hlbWUiOiJsaWdodCIsImlzX21vYmlsZV93ZWJ2aWV3Ijp0cnVlLCJpbmNsdWRlX3RyYW5zYWN0aW9ucyI6dHJ1ZSwibW9kZSI6ImFnZ3JlZ2F0aW9uIiwidXBkYXRlX2NyZWRlbnRpYWxzIjpmYWxzZSwid2FpdF9mb3JfZnVsbF9hZ2dyZWdhdGlvbiI6ZmFsc2V9'
				  	
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