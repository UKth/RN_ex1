import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';


export default class extends React.Component {

  getLocation = async() => {
    try {
      console.log("AAAAAAAAAAAA");
      const res = await Location.requestPermissionsAsync();
      console.log(res);
      console.log("BBBBB");
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch(error){
      console.log(error);
      Alert.alert("can't find you?", "so sad");
    }
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading />;
  }
}


