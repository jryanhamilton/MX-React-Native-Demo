*This project is currently in **Beta**, and is provided as is.*

# MX React Native SDK Demo Application

MX has provided a React Native SDK for working with the Connect Widget in a React Native application: [React Native Widget SDK](https://docs.mx.com/connect/guides/sdk#react_native)

## Documentation
The purpose of this demo application is to provide an example of a functional MX Connect widget flow within a hybrid mobile application.

Caveats: This demo application uses Expo as the application foundation, and wraps around the React Native libraries.  As such, there are some limitations to this demo that you will need to be aware of.  This demo is intended to show of the functionality of the Connect widget on a hybrid mobile application only.


## Requirements
You will need to have either Apple Xcode or Android Studio installed, as well as the necessary command line components for those tools and their simulators.

You will also need a way of generating a Connect Widget URL.  My recommendation is via Postman, but you can use whatever method you like.


## Installation
Install React and Expo
`npm install expo`
`npm install react-native`

Create the expo app
`npx create-expo-app {my-app}` where {my-app} is the name of the application.

Install expo linking module
`npx expo install expo-linking`

Install React Navigation
`npm install @react-navigation/native-stack`

Install the MX React Native SDK
`npm install —save @mxenabled/react-native-widget-sdk`


## Getting Started

To start the demo application, in the application directory run `npm start` in your terminal.  That will trigger the expo startup, begin the expo server, and present you with the simulator you would like to run.  *Make note of the expo server IP address as you will need it to interact with the application.*

Generate a connect widget URL including the following configuration parameters:
* `"client_redirect_url": "exp://{ip}:{port}/--/oauth_complete"` where {ip} is the local IP address of your application server, and {port} is the port it is running on (defaults to 19000).
* `"is_mobile_webview": true` - this ensures that the widget will not try to send standard post message events and will prevent the connect widget from opening items in a new tab.  For more information please reference the MX documentation.
* `"ui_message_version": 4` - this ensures that the widget is sending messages in the correct manner.
* `"ui_message_webview_url_scheme": "mx"` - normally this isn't used when using the `client_redirect_url` but is required in this instance due to Expo and how it functions.

Once you have the connect widget URL, paste it into the `MXConnectWidget` file in the `url` variable and launch the demo application.  If the application is already running in the simulator, you can refresh it by pressing `r` in the terminal window, or by reloading the simulator application.

When the application is first launched, it presents you with the home screen.

There are three pages or screens to the application.  The "Home" screen or initial splash page, the "Broken" screen, and the "Connect Widget" screen.  All three screens have the same navigation options, and all will show the most recent URL recorded by the demo application.

"Home" is the initial landing screen.

"Broken" is where the application will default if a navigation / linking route is passed that the application doesn't recognize.

"Connect Widget" is where the Connect Widget is being loaded.  If the URL is valid it will load and display the widget.  If the URL has expired it will notify you that there was a problem authenticating and loading the URL.

## Development
This is presented as is.


## Contributing
Nothing at this time.