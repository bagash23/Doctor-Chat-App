import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { colors } from '../../../../utils';
import {IcBahasa, IcBintang, IcNote, IconNext, IcUser} from '../../../../assets'

const List = ({profile, name, desc, type, icon, onPress}) => {
    const Icon = () => {
        if (icon === "User") {
            return <IcUser/>
        } 
        if (icon === "Bahasa") {
            return <IcBahasa/>
        }
        if (icon === "Bintang") {
            return <IcBintang/>
        }
        if (icon === "Notes") {
            return <IcNote/>
        }
        return <IcUser/>
    }
    return(
        <TouchableOpacity style = {styles.container} onPress = {onPress} >
            {icon ?  <Icon/> : <Image source={profile} style = {styles.avatar} /> }
            <View style = {styles.content} >
                <Text style = {styles.name} >{name}</Text>
                <Text style = {styles.riwayat} >{desc}</Text>
            </View>
            {type === "next" && <IconNext/> }
        </TouchableOpacity>
    )
}
export default List;
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        marginLeft: 16
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    name :{
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        fontWeight : "400",
        color: colors.text.primary,
        paddingLeft: 12
    },
    riwayat: {
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        fontWeight: "300",
        color:  colors.text.secondary,
        paddingLeft: 12
    }
});