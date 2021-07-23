import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, DummyDokter6, DummyDokter8 } from '../../assets'
import {Header, List} from '../../components/atom/molekul'
import { Fire } from '../../Config'


const ChooseDokter = ({navigation}) => {
    return (
        <View style = {styles.page} >
            <Header title = "Pilih Dokter" onPress = {() => navigation.goBack()} /> 
            <List profile = {DummyDokter1} name = "Jessica" desc = "Dokter Umum" />
            <List profile = {DummyDokter8} name = "Putri" desc = "Dokter Umum"  />
            <List profile = {DummyDokter6} name = "Michel" desc = "Dokter Umum"  />
        </View>
    )
}

export default ChooseDokter

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    }
})
