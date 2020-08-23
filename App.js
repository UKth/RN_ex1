import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "9adb52b3eb3f35e88a206b29a0215978";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
      name
    });
  }
  getLocation = async () => {
    try {
      const res = await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    } catch (error) {
      console.log(error);
      Alert.alert("can't find you?", "so sad");
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} name={name}/>;
  }
}


