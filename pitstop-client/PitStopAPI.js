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

			console.log("Got here.\n");
			let responseJson = await response.json();
			console.log("Got here, now.\n");
			successCallback(responseJson);
		} catch(error) {
			errorCallback(error);
		}
	}
}
