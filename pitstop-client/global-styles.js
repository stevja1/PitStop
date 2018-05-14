'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
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
    paddingTop: 63,
    paddingLeft: 20,
    paddingBottom: 10,
  },

  vehicleAvatar: {
    width: 380,
    height: 160,
    marginBottom: 8,
    paddingLeft: 10,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },

  vehicleImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 8,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
})
