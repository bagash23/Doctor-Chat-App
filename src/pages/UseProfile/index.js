import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/atom/molekul/Header'
import { List, Profile } from '../../components/atom/molekul'
import { Gap } from '../../components'
import { getData, storeData } from '../../utils'
import { ILNullPhoto } from '../../assets'
import { showMessage } from 'react-native-flash-message'
import { Fire } from '../../Config'

const UseProfile = ({navigation}) => {
    const [profile, setProfile] = useState ({
        fullName: '',
        profession: '',
        photo: ILNullPhoto,
    })
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photo = {uri: res.photo};
            setProfile(data)
        });
    }, [])
    const SignOut = () => {
        Fire.auth().signOut().then(() => {
            navigation.replace('GetStarted')      
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.red,
                color: colors.white
            })
        })
    }
    return (
        <View style = {styles.page} >
            <Header title = "Profile" onPress = {() => navigation.goBack()}  />
            <View>
                <Gap height = {10}/>
                {profile.fullName.length > 0 && (<Profile name = {profile.fullName} desc = {profile.profession} photo = {profile.photo} />)}
                <Gap height = {24}/>
                <List name = "Edit Profile" desc = "Last updated yesterday" icon = "User" onPress = {() => navigation.navigate("UpdateProfile") } />
                <List name = "Language" desc = "Available 12 languages" icon = "Bahasa"/>
                <List name = "Give Us Rate" desc = "On Google Play Store" icon = "BIntang" />
                <List name = "Sign Out" desc = "Keluar"  icon = "Notes" onPress = {SignOut} />
            </View>
        </View>
    )
}

export default UseProfile
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    }
});