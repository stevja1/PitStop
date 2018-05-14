import React from 'react';
import {
  Button,
  ImageBackground,
  TextInput,
} from 'react-native';

const styles = require('./global-styles.js');
import PitStopAPI from './PitStopAPI.js';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.api = new PitStopAPI();
		this.state = {
			email: null,
			password: null,
			loggedIn: false,
		};
	}

	render() {
		return (
			<ImageBackground style={styles.loginPanel} source={require('./assets/pitstop.png')}>
				<TextInput style={styles.inputField}
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="Email"
					onChangeText={(value) => this.setState({email: value})} />
				<TextInput style={styles.inputField}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(value) => this.setState({password: value})} />
				<Button title="Login" color="#232323"
					onPress={() => {
						this.api.checkUser(this.state.email, this.state.password, this.props.onPress, this.props.onError);
					}} />
			</ImageBackground>
		);
	}
}
