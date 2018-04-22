import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	Button,
	ImageBackground,
	Image,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import PitStopAPI from './PitStopAPI.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {currentForm: "LOGIN"};
		StatusBar.setHidden(true);
	}

  render() {
		if(this.state.currentForm == "VEHICLES") {
			return (
				<View>
					<VehiclesList onPress={() => {this.setState({currentForm: "LOGIN"})}}/>
				</View>
			);
		} else if(this.state.currentForm == "MILEAGE") {
			return (
				<View>
					<MileageForm onPress={() => {this.setState({currentForm: "VEHICLES"})}}/>
				</View>
			);
		} else if(this.state.currentForm == "LOGIN") {
			return (
				<View>
					<LoginForm onPress={() => {this.setState({currentForm: "VEHICLES"})}}/>
				</View>
			);
		}
  }
}

const styles = StyleSheet.create({
	loginPanel: {
		width: '100%',
		height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
	},

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

	inputField: {
		color: 'white',
		fontSize: 20,
		height: 60,
		width: 200,
	},

	menuButton: {
		width: 20,
		height: 20,
	},

	pitStopPanel: {
		width: '100%',
		height: '100%',
		paddingTop: 47,
		paddingLeft: 12,
	},

	vehicleAvatar: {
		width: '96%',
		height: 160,
		marginBottom: 8,
		paddingLeft: 5,
		paddingBottom: 5,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
	},

	vehicleName: {
		fontSize: 40,
		color: 'white',
    textShadowColor: '#232323',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
	},

	vehicleDescription: {
		fontSize: 18,
		color: 'white',
    textShadowColor: '#232323',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
	},
});

class LoginForm extends React.Component {
	render() {
		return (
			<ImageBackground style={styles.loginPanel} source={require('./assets/pitstop.png')}>
				<TextInput style={styles.inputField} autoCapitalize="none" keyboardType="email-address" placeholder="Email" />
				<TextInput style={styles.inputField} placeholder="Password" secureTextEntry={true} />
				<Button title="Login" color="#232323" onPress={() => {this.props.onPress()}} />
			</ImageBackground>
		);
	}
}

class PitStopPanel extends React.Component {
	handleIntroductions(responseJson) {
		console.log("Server said: "+responseJson.message);
	}

	handleAPICallFailure(error) {
		console.log("API call failed: "+error);
	}

	render() {
		let selected = this.props.selected;
		var api = new PitStopAPI();
		return(
			<ImageBackground style={styles.pitStopPanel} source={this.props.background}>
				<TouchableOpacity
					style={{top: 12, right: 12, position: 'absolute',}}
					onPress={() => api.sayHello('Jared', this.handleIntroductions, this.handleAPICallFailure)}>
					<Image style={styles.menuButton} source={require('./assets/menu-icon.png')} />
				</TouchableOpacity>
				<ScrollView>
					{React.Children.map(this.props.children.filter(c=>c),(el)=>
						<View>
							{selected == (el.props.name || el.key) ? React.cloneElement(el, {selected: true, style: [el.props.style, this.props.selectedStyle, el.props.selectedStyle]}) : el}
						</View>
					)}
				</ScrollView>
			</ImageBackground>
		);
	}
}

class VehiclesForm extends React.Component {
	render() {
		return (
			<ImageBackground style={styles.pitStopPanel} source={require('./assets/vehicles.png')}>
				<TouchableOpacity style={{top: 12, right: 12, position: 'absolute',}} onPress={() => {console.log('Menu pressed.');}}>
					<Image style={styles.menuButton} source={require('./assets/menu-icon.png')} />
				</TouchableOpacity>
				<TextInput style={styles.inputField} placeholder="Name" />
				<TextInput style={styles.inputField} placeholder="Year" />
				<TextInput style={styles.inputField} placeholder="Make" />
				<TextInput style={styles.inputField} placeholder="Model" />
				<Button title="Photo" onPress={() => {}} />
				<Button title="Save" color="#232323" onPress={() => {this.props.onPress()}} />
				<Button title="Cancel" color="#a2a2a2" onPress={() => {console.log('Cancel pressed...');}} />
			</ImageBackground>
		);
	}
}

class VehiclesList extends React.Component {
	render() {
		return (
			<PitStopPanel background={require('./assets/vehicles.png')}>
				<VehicleAvatar />
				<VehicleAvatar />
				<VehicleAvatar />
				<VehicleAvatar />
			</PitStopPanel>
		);
	}
}

class VehicleAvatar extends React.Component {
	render() {
		return (
			<ImageBackground style={styles.vehicleAvatar} source={require('./assets/truck.png')}>
				<Text style={styles.vehicleName}>Silverado</Text>
				<Text style={styles.vehicleDescription}>2009 Chevrolet Silverado</Text>
			</ImageBackground>
		);
	}
}
