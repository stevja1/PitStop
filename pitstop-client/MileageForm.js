import React from 'react';
import PitStopPanel from './PitStopPanel.js';
import VehicleAvatar from './VehicleAvatar.js';
import PitStopAPI from './PitStopAPI.js';
import DatePicker from 'react-native-datepicker'

import {
	View,
	Text,
  TextInput,
  Button,
} from 'react-native';

const styles = require('./global-styles.js');

export default class MileageForm extends React.Component {
  constructor(props) {
    super(props);
    this.api = new PitStopAPI();
    this.state = {
      date: null,
      odometer: null,
      fuelVolume: null,
      pricePerUnit: null,
      geoLocation: null,
    };
    this.formValues = {
      date: null,
      odometer: null,
      fuelVolume: null,
      pricePerUnit: null,
      geoLocation: null,
    };
  }

  render() {
    return (
      <PitStopPanel background={require('./assets/mileage.png')}>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2028-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <TextInput style={styles.inputField}
          autoCapitalize="none"
          keyboardType="default"
          placeholder="Date"
          onChangeText={(value) => {this.formValues.date = value}} />
        <TextInput style={styles.inputField}
          autoCapitalize="none"
          keyboardType="numeric"
          placeholder="Odometer"
          onChangeText={(value) => {this.formValues.odometer = value}} />
        <TextInput style={styles.inputField}
          id="fuelVolumeInput"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholder="Fuel Volume"
          onChangeText={(value) => {this.formValues.fuelVolume = value}} />
        <TextInput style={styles.inputField}
          id="priceInput"
          autoCapitalize="none"
          keyboardType="numeric"
          placeholder="Cost Per Unit"
          onChangeText={(value) => {this.formValues.pricePerUnit = value}} />
        <Button title="Save" color="#232323"
          onPress={() => {
            let date = this.formValues.date;
            console.log("Logging new fuel entry: " + date);
            this.setState({
              date: this.formValues.date,
              odometer: this.formValues.odometer,
              fuelVolume: this.formValues.fuelVolume,
              pricePerUnit: this.formValues.pricePerUnit,
              geoLocation: this.formValues.geoLocation,
            });
          }} />
      </PitStopPanel>
    )
  }
}
