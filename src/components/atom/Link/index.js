import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Link = ({title, size, align, onPress}) => {
    return (
        <TouchableOpacity onPress = {onPress}>
            <Text style = {styles.Text(size, align)} > {title} </Text>
        </TouchableOpacity >

    )
}
export default Link;
const styles = StyleSheet.create({
    Text: (size, align) => ({
        fontSize: size,
        color: "#7D8797",
        fontFamily: "Nunito-Regular",
        textDecorationLine: "underline",
        textAlign: align,
    })
});