import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#2f80ed', '#56ccf2']
    }
}

export default function Weather({ temp, condition, name }) {
    return(
    
        <LinearGradient
          // Button Linear Gradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={100}
                    color="white"
                />
                
                <Text style={styles.temp}>{temp}'C</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.text}>{name}의 날씨</Text>
                <Text style={styles.condition}>{condition}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        color: "white",
        fontSize: 40
    },
    text: {
        color: "white",
        fontSize: 30,
        marginBottom: 5
    },
    condition: {
        color: "white",
        fontSize: 40,
        fontWeight: "600"
    }
});

