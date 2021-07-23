import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { colors } from '../../../../utils';

const ListHospitals = ({type, name, addres, pic}) => {
    return (
        <View style={styles.container} >
            <Image source = {pic} style = {styles.picture} />
            <View>
                <Text style={styles.title}> {type} </Text>
                <Text style={styles.title}> {name} </Text>
                <Text style={styles.addres} > {addres} </Text>
            </View>
        </View>
    )
}
export default ListHospitals;
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 16,
    },
    picture: {
        width: 80,
        height: 60,
        borderRadius: 11
    },
    title: {
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        color: colors.text.primary,
        fontWeight: "400",
        paddingLeft: 12
    },
    addres: {
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        fontWeight: "300",
        color: colors.text.secondary,
        paddingLeft: 12,
        marginTop: 6

    }
});