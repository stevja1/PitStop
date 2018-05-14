import React from 'react';
import {Text} from 'react-native';

export default class PitStopAPI {
	constructor() {
		this.protocol = "http";
		this.host = "192.168.1.15";
		this.port = "8080";
	}

	/**
	 * A more elegant way of saying hi.
	 */
	async sayHello(name, successCallback, errorCallback) {
		var path = "/user/hello/";
		var url = this.protocol+"://"+this.host+":"+this.port+path+name;
		console.log("Calling (GET) URL: "+url);
		try {
			let response = await fetch(url, {
				method: 'GET',
				headers: {
				},
			});

			let responseJson = await response.json();
			successCallback(responseJson);
		} catch(error) {
			errorCallback(error);
		}
	}

	/**
	 * Authenticate
	 */
	async checkUser(email, password, successCallback, errorCallback) {
		var path = "/user/auth/"+email+"/"+password;
		var url = this.protocol+"://"+this.host+":"+this.port+path;
		console.log("Calling (GET) URL: "+url);
		try {
			let response = await fetch(url, {
				method: 'GET',
				headers: {
				},
			});

			let responseJson = await response.json();
			successCallback(responseJson);
		} catch(error) {
			errorCallback(error);
		}
	}

	async getVehicles(userId, successCallback, errorCallback) {
		var path = "/user/"+userId+"/vehicles/";
		var url = this.protocol+"://"+this.host+":"+this.port+path;
		console.log("Calling (GET) URL: "+url);
		try {
			let response = await fetch(url, {
				method: 'GET',
				headers: {
				},
			});

			let responseJson = await response.json();
			successCallback(responseJson);
		} catch(error) {
			errorCallback(error);
		}
	}
}
