import React from 'react';
import PitStopPanel from './PitStopPanel.js';
import VehicleAvatar from './VehicleAvatar.js';
import PitStopAPI from './PitStopAPI.js';

import {
	View,
	Text,
} from 'react-native';

const styles = require('./global-styles.js');

export default class VehiclePicker extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			vehicles: null,
		};
		this.api = new PitStopAPI();
  }

	componentDidMount() {
		this.api.getVehicles(this.props.userId, this.handleVehicleList.bind(this), this.handlerError);
	}

	handleVehicleList(responseJson) {
		if(responseJson == null) {
			console.log("Didn't get anything back from the server.");
		} else if(responseJson.responseData == null) {
			console.log("This user doesn't have any vehicles.");
		} else {
			console.log("Retrieved data for "+responseJson.responseData.length+" vehicles");
			this.setState({
				vehicles: responseJson.responseData
			});
		}
	}

	handleError(error) {
		console.log("There was some sort of error.");
		console.log(error);
	}

	render() {
		if(this.state.vehicles != null) {
			let onPress = this.props.onPress;
			return (
				<PitStopPanel background={require('./assets/vehicles.png')}>
					{this.state.vehicles.map(function(d, idx){
						return (<VehicleAvatar key={d.id} year={d.year} make={d.make} model={d.model} name={d.nickName} onPress={() => {onPress(d.id)}}/>)
					})}
				</PitStopPanel>
			);
		} else {
			return (
				<View>
					<Text>You dont have any vehicles yet.</Text>
				</View>
			);
		}
	}
}
