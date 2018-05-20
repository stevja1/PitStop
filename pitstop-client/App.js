import React from 'react';
import {
	AsyncStorage,
	View,
} from 'react-native';

import LoginForm from './LoginForm.js';
import VehiclePicker from './VehiclePicker.js';
import MileageForm from './MileageForm.js';

const styles = require('./global-styles.js');

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: "LOGIN",
			userId: null,
			selectedVehicleId: null,
		};
		this.getUserId();
		// StatusBar.setHidden(true);
	}

	getUserId() {
		console.log("Checking for a userId in storage...");
		AsyncStorage.getItem('@PitStopStore:userId')
			.then((userId) => {
				console.log("Retrieved userId "+userId+" from storage.");
				if(userId == null) {
					this.setState({userId:userId, currentForm: "LOGIN"});
				} else {
					// Request a list of vehicles that belong to this user
					this.setState({userId:userId, currentForm: "VEHICLES"});
				}
			}).catch((error) => {
				console.error("There was a problem fetching the userId from storage.");
			});
	}

	handleLogin(responseJson) {
		console.log(responseJson);
		if(responseJson.responseData == null) {
			alert("Invalid login.");
		}
		try {
			AsyncStorage.setItem("@PitStopStore:userId", ""+responseJson.responseData.id)
				.then((userId) => {console.log("UserID was stored.")})
				.catch((error) => {
					console.error("There was a problem storing the userId.");
				});
			this.setState({userId: responseJson.responseData.id, currentForm: "VEHICLES"});
		} catch(error) {
			console.log("Caught error while saving user ID: "+error);
		}
	}

	handleError(error) {
		console.log("There was an error: "+error);
	}

  render() {
		if(this.state.currentForm == "VEHICLES") {
			return (
				<View>
					<VehiclePicker userId={this.state.userId} onPress={(vehicleId) => {
							this.setState({
								currentForm: "MILEAGE",
								selectedVehicleId: vehicleId,
							})
						}
					} />
				</View>
			);
		} else if(this.state.currentForm == "MILEAGE") {
			return (
				<View>
					<MileageForm vehicleId={this.state.selectedVehicleId} onPress={() => {this.setState({currentForm: "VEHICLES"})}}/>
				</View>
			);
		} else if(this.state.currentForm == "LOGIN") {
			return (
				<View>
					<LoginForm onPress={this.handleLogin.bind(this)} onError={this.handleError} />
				</View>
			);
		}
  }
}
