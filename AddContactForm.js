import React from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'
import {Constants} from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
    this.setState({name}, this.validateForm)

  }

  handlePhoneChange = phone => {
    //check if it's a number && smaller than 10
    if (+phone >= 0 && phone.length <= 10){
    this.setState({phone}, this.validateForm)
    }
  }

  validateForm = () => {
    if(this.state.name.length > 3 && +this.state.phone >= 0 && this.state.phone.length === 10){
      return this.setState({isFormValid: true})
    }
    else{
      return this.setState({isFormValid: false})
    }

  }
  
  handleSubmit = () =>{
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phones"
        />
        <Button 
        onPress={this.handleSubmit}
        disabled={!this.state.isFormValid}
        title="Submit" />
      </View>
    )
  }
}
