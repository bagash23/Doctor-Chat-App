import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from "react-native";
import {colors, getData} from '../../utils'
import List from '../../components/atom/molekul/List';
import { DummyDokter1 } from '../../assets';

const Message = ({navigation}) => {
    return(
        <View style={styles.page} >
            <View style={styles.content} >
                <Text style={styles.title} >Messages</Text>
                <List profile = {DummyDokter1} name = "Jessica" desc = "Ooh kamu lagi sakit batuk nnti bakalan saya kasih resep untuk obatnya ya" onPress = {() => navigation.navigate('Chat')} /> 
            </View>
        </View>
    )
}
export default Message;
const styles = StyleSheet.create({
    page:{
        backgroundColor: "#112340",
        flex: 1
    },
    content:{
        backgroundColor: "white",
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title:{
        fontSize: 20,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "600",
        color: colors.text.primary,
        marginLeft: 16,
        marginTop: 30
    }
});