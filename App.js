import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class Greenbutton extends Component{
  render(){
    return(

<Button style={{marginTop:50}}title="Click me!"color="green"></Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop:50}}>My first App</Text>
        <Greenbutton/>

</View>
    );
  }
}