import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = require('./global-styles.js');

export default class VehiclesForm extends React.Component {
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
				<Button title="Photo" onPress={() => {console.log("Vehicle icon pressed.");}} />
				<Button title="Save" color="#232323" onPress={() => {this.props.onPress()}} />
				<Button title="Cancel" color="#a2a2a2" onPress={() => {console.log('Cancel pressed...');}} />
			</ImageBackground>
		);
	}
}
