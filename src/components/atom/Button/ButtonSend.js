import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcRowActive, IcRowDisable } from '../../../assets'
import { colors } from '../../../utils'

const ButtonSend = ({disable, onPress}) => {
    if(disable) {
        return (
            <View style = {styles.container(disable)}>
                <IcRowDisable />
            </View>
        )    
    }
    return (
        <TouchableOpacity style = {styles.container(disable)} onPress = {onPress}>
            <IcRowActive/>
            
        </TouchableOpacity>
    )
}

export default ButtonSend

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ?  colors.disable : colors.activeSend , 
        width: 46,
        height: 46,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8
        }
    )
})
