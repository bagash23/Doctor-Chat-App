import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Input } from '../../components'
import { Header, Profile } from '../../components/atom/molekul'
import { getData, storeData, colors } from '../../utils'
import { showMessage } from 'react-native-flash-message'
import { Fire } from '../../Config'
import {launchImageLibrary} from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets'

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState ({
        fullName: '',
        profession: '',
        email: '',
    })


    const [password, setPassword] = useState ("");
    const [photo, setPhoto] = useState (ILNullPhoto);
    const [photoForDB, setPhotoforDB] = useState ('')

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setPhoto({uri: res.photo});
            setProfile  (data)
        });
    }, [])

    const update = () => {
        console.log('profile', profile);
        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: "Kamu Seperti Kurang Dari 6 Karakter PaPaPaLe",
                    type: 'default',
                    backgroundColor: colors.red,
                    color: colors.white,
                });
            } else {
                // update password berhasil
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }
        } else {
            updateProfileData();
            navigation.replace('MainApp');
        }
    }

    const updatePassword = () => {
        // update password berhasil
        Fire.auth().onAuthStateChanged(user => {
            // jika ada password
            if(user){
                // update password
                user.updatePassword(password).catch(err => {
                    showMessage({
                        message: err.message,
                        type: 'default',
                        backgroundColor: colors.red,
                        color: colors.white,
                    });
                })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile;
        data.photo = photoForDB;
        Fire.database().ref(`users/${profile.uid}/`).update(data).then(() => {
            console.log('berhasil: ');
            storeData('user', data);
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

    // update profile
    const changeText = (key, value) => {
        // di copy profile lama
        setProfile({
            ...profile,
            // update profile baru
            [key]: value,
        })
    }

    const getImage = () => {
        launchImageLibrary( {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, response => {
            console.log( 'response: ' ,response);

            // cancel photo
            if (response.didCancel || response.error) {
                showMessage({
                    message: "Maaf Sepertinya Anda TIdak Memilih Photo",
                    type: 'default',
                    backgroundColor: colors.red,
                    color: colors.white,
                });
            }else {
                // ambil photo
                const source = {uri: response.uri};
                // kirim ke DB
                setPhotoforDB (`data:${response.type};base64, ${response.base64}`);
                setPhoto(source);
            }
        });
    }

    return (
        <View style = {styles.page} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header title = "Edit Profile" onPress = {() => navigation.goBack()} />
                <View style= {styles.content}>
                    <Profile isRemove photo = {photo} onPress={getImage} />
                    <Gap height = {24}/>
                    <Input label = "Full Name" value = {profile.fullName} onChangeText= {(value) => changeText( 'fullName', value)} />
                    <Gap height = {24}/>
                    <Input label = "Pekerjaan"  value = {profile.profession} onChangeText= {(value) => changeText( 'professions', value)} />
                    <Gap height = {24}/>
                    <Input disable  label = "Email" value = {profile.email} />
                    <Gap height = {24}/>
                    <Input label = "Password" value = {password} onChangeText = {(value) => setPassword(value)} secureTextEntry />
                    <Gap height = {40}/>
                    <Button title = "Simpan Profile" onPress = {update} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
