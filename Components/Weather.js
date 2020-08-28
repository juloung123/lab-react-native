import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
import Constants from 'expo-constants';

export default function Weather(props){
    
    const [forecastInfo, setForecastInfo] = useState({
        main : '-',
        description : '-',
        temp : 0
    }) 
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=5be54982f00de08a16a2818e4ddfa779`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
    }, [props.zipCode])
    if(props.zipCode == '90110'){
        return(
            <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
                    <Text style = {styles.textbackground}>Zip code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    else if(props.zipCode == '92000'){
        return(
            <ImageBackground source = {require('../bg1.jpg')} style = {styles.backdrop}>
                    <Text style = {styles.textbackground}>Zip code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
    else{
        return(
            <ImageBackground source = {require('../bg2.jpg')} style = {styles.backdrop}>
                    <Text style = {styles.textbackground}>Zip code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo}/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backdrop : {
        paddingTop : Constants.statusBarHeight,
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
        textAlign : 'center',
        width : '100%',
        height : '100%'
    },
    textbackground : {
        textAlign : 'center',
        textAlignVertical: 'auto',
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: 'black',
        opacity: .9,
    }
})

