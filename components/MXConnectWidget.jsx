import { ConnectWidget } from "@mxenabled/react-native-widget-sdk";
import React, {useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import * as Linking from 'expo-linking';
import {Nav} from './Nav';

export function MXConnectWidget({url}) {
	// Update the Connect URl Variable variable
	let connectURL = "https://int-widgets.moneydesktop.com/md/connect/rmwd20dt2j3132t7h75n2k0fy3Zn9ck1t2xtny0m85672ysztAd0fhgmfnf01726h2z752lxrc9dcfzjvrbvw3mfv3skjl9mcjygc1jys0fvkyptv6bbAy9tbztx38jA27g29slrlbrpkfc9zzAzdAvnnznfwgvdsxmp3csgyqgxpsrsz4xdmp5vj841dg7z9ndrxc82xp7xznsj1sn28bjrd5trn1Adhynt5f3kAlh9m6645xm08yyjjxbws0gptAxlwdrkqgrqjxr58vskv0m3qfA0cllfhztAx3xdklAqkz3dh56tsynpAs9mksjbldp2l12y7fn1764vn9khc80993z793wp8yd1lqsy/eyJ1aV9tZXNzYWdlX3ZlcnNpb24iOjQsInVpX21lc3NhZ2Vfd2Vidmlld191cmxfc2NoZW1lIjoibXgiLCJjb2xvcl9zY2hlbWUiOiJsaWdodCIsImlzX21vYmlsZV93ZWJ2aWV3Ijp0cnVlLCJjbGllbnRfcmVkaXJlY3RfdXJsIjoiZXhwOi8vMTkyLjE2OC4xLjE3MzoxOTAwMC8tLS9vYXV0aF9jb21wbGV0ZSIsImluY2x1ZGVfdHJhbnNhY3Rpb25zIjp0cnVlLCJtb2RlIjoiYWdncmVnYXRpb24iLCJ1cGRhdGVfY3JlZGVudGlhbHMiOmZhbHNlLCJ3YWl0X2Zvcl9mdWxsX2FnZ3JlZ2F0aW9uIjpmYWxzZX0%3D";
	
	
	// Other variables
	const connectURLRef = useRef(connectURL);
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
					url= {connectURLRef.current}
				  	
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