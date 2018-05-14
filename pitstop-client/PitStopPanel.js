import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = require('./global-styles.js');
import PitStopAPI from './PitStopAPI.js';

export default class PitStopPanel extends React.Component {
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
