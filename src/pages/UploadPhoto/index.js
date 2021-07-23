import  React, { useState }  from "react";
import { StyleSheet, Text , View, Image, TouchableOpacity} from "react-native";
import { IconTtambah, IcRemovePhoto } from "../../assets/icon";
import { ILNullPhoto } from "../../assets/illustration";
import Button from "../../components/atom/Button";
import Link from "../../components/atom/Link";
import Gap from "../../components/atom/molekul/Gap";
import Header from "../../components/atom/molekul/Header";
import { colors, showError, storeData } from "../../utils";
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Fire from "../../Config/Fire";

const UploadPhoto = ({navigation, route}) => {
    const {fullName, profession, uid} = route.params;
    const [photoForDB, setPhotoforDB]  = useState ('');
    const [hashPhoto, setHashPhoto] = useState (false);
    const [photo, setPhoto] = useState (ILNullPhoto);

    const getImage = () => {
        launchImageLibrary( {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, response => {
            // cancel photo
            if (response.didCancel || response.error) {
            }else {
                // ambil photo
                const source = {uri: response.uri};
                // kirim ke DB
                setPhotoforDB (`data:${response.type};base64, ${response.base64}`);
                setPhoto(source);
                setHashPhoto(true);
            }
        });
    };
    const takePhoto = () => {
        launchCamera( {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, (res) => {
            if (res.didCancel || res.error) {
                showMessage({
                    message: "Maaf Sepertinya Anda Tidak Mengambil Photo",
                    type: 'default',
                    backgroundColor: 'red',
                    color: 'white',
                });
            }else {
                // ambil photo
                const source = {uri: res.uri};
                // kirim ke DB
                setPhotoforDB (`data:${res.type};base64, ${res.base64}`);
                setPhoto(source);
                setHashPhoto(true);
            }
        })
    }
    // fungsi buat button continue
    const uploadAndContinue = () => {
        // simpan ke DB
        Fire.database().ref('users/' +uid+ '/').update({photo: photoForDB});
        // ambil data ke local storage
        const data = route.params;
        data.photo = photoForDB;
        // simpan data
        storeData('user', data);
        // pindah halaman
        navigation.replace('MainApp')
    };
    return (
        <View style = {styles.page}>
            <Header title = "UploadPhoto"/>
            <View style = {styles.content} >
                <View style = {styles.profile} >
                    <TouchableOpacity style = {styles.avatarWrapper} onPress={getImage} >
                        <Image source = {photo} style = {styles.avatar} />
                        {hashPhoto && <IcRemovePhoto style = {styles.add} />}
                        {!hashPhoto && <IconTtambah style = {styles.add} />}
                    </TouchableOpacity>
                    <Text style = {styles.name} > {fullName} </Text>
                    <Text style = {styles.proffesion} > {profession} </Text>
                </View>
                <View>
                    <Button disable={!hashPhoto} title = "Upload and Continue" onPress = {uploadAndContinue} />
                    <Gap height = {30} />
                    <Button title = "Ambil Photo" onPress = {takePhoto}/>
                </View>
            </View>
        </View>
    )
}
export default UploadPhoto;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110/2
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border.primary,
        borderRadius: 130 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        position: "absolute",
        bottom: 8,
        right: 6
    },
    name:{
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: "Nunito-SemiBold",
        textAlign: 'center'
    },
    proffesion: {
        fontSize: 18,
        fontFamily: "Nunito-Reguler",
        textAlign: "center",
        color: colors.text.secondary
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        paddingBottom: 64
    },
    profile: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    }
});