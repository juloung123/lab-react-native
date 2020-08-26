import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setforecastInfo] = useState({
        main : 'main',
        description : 'description',
        temp : 0
    }) 
    return(
        <ImageBackground source = {require('../bg.jpg')} style = {styles.backdrop}>
            <Text style = {styles.textbackground}>Zip code is {props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop : {
        flexDirection : 'column',
        //justifyContent : 'space-evenly',
        alignItems : 'center',
        textAlign : 'center',
        width : '100%',
        height : '100%'
    },
    textbackground : {
        color: '#fff',
        backgroundColor: 'transparent',
        borderRadius: 30
    }
})

