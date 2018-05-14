import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = require('./global-styles.js');
import PitStopAPI from './PitStopAPI.js';

export default class VehicleAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<TouchableOpacity style={styles.vehicleAvatar} onPress={this.props.onPress}>
        <Image style={styles.vehicleImage} source={require('./assets/truck.png')} />
        <View>
  				<Text style={styles.vehicleName}>{this.props.name}</Text>
  				<Text style={styles.vehicleDescription}>{this.props.year} {this.props.make} {this.props.model}</Text>
        </View>
			</TouchableOpacity>
		);
	}
}
