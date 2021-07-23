import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ILNullPhoto } from '../../../../assets';
import { colors, getData } from '../../../../utils';

const HomeProfiles = ({onPress}) => {
    const [profile, setProfile] = useState ({
        photo: ILNullPhoto,
        fullName: '',
    })

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.photo = {uri: res.photo};
            setProfile(res);
        })
    }, [])

    return(
        <TouchableOpacity style = {styles.container} onPress={onPress} >
            <Image source={profile.photo} style = {styles.avatar} />
            <View>
                <Text style = { styles. name} >{profile.fullName}</Text>  
            </View>
        </TouchableOpacity>
    )
}
export default HomeProfiles;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    profesion:{
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        color: colors.text.secondary,
        textTransform: 'capitalize'
    }
});