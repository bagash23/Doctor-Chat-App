import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../../utils'
import Button from '../../Button'

const InputChat = ({value, onChangeText, onButtonPress}) => {
    return (
        <View style = {{
            padding: 16,
            flexDirection: 'row'
        }} >
            <TextInput style = {styles.input} placeholder = "Tulis Pesan Anda" value={value} onChangeText={onChangeText} />
            <Button type = 'btn-icon-send' onPress = {onButtonPress} />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    input:{
        borderColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        maxHeight: 45,
        borderWidth:1   
    }
})