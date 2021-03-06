import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return(
        <View >
            <Text style = {styles.text30}>{props.main}</Text>
            <Text style = {styles.text15}>{props.description}</Text>
            <Text style = {styles.text30}>Wind speed is {props.wind}</Text>
            <Text style = {styles.text30}>{props.temp} °C</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    backdrop : {
        flexDirection : 'column',
        justifyContent : 'space-between',
        width : '100%',
        height : '100%',
        backgroundColor: 'black',
        opacity: .5,
    },
    text30 :{
        textAlign : 'center',
        textAlignVertical: 'center',
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    text15 :{
        textAlign : 'center',
        textAlignVertical: 'auto',
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
})