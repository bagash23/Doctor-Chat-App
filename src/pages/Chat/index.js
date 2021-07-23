import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {Chatitem, Header, InputChat} from '../../components/atom/molekul'
import { colors, getChatTine, getData, setDateChat, showError } from '../../utils';
import { DummyDokter1 } from '../../assets';
import Gap from '../../components/atom/molekul/Gap';

const Chat = ({navigation, route}) => {
    return (
        <View style = {styles.page} >
            <Header 
            type = "dark-profile" 
            title = {"Jessica"} 
            desc = {"Dokter Umum"} 
            photo = {DummyDokter1} />   
            <Text style = {styles.date} >Hari ini</Text>
            <View style = {styles.content} >
                <ScrollView showsVerticalScrollIndicator>
                    <Chatitem isME text = "Selamat Pagi Dokter" date = "12.00 am" />
                    <Chatitem outher photo = {DummyDokter1} text = "Selamat Pagi" date = "12.00 am" />
                    <Chatitem isME text = "Obat Untuk Batuk Apa YA Dok?" date = "12.00 am" />
                    <Chatitem outher photo = {DummyDokter1} text = "Ooh kamu lagi sakit batuk nnti bakalan saya kasih resep untuk obatnya ya" date = "12.00 am" />
                </ScrollView>
            </View>
            <InputChat />
        </View>
    )
};

export default Chat;
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    date: {
        fontSize: 11,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    },
    content: {
        flex: 1
    }
})
