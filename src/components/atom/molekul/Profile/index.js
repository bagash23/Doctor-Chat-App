import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcRemovePhoto } from '../../../../assets'
import { colors } from '../../../../utils'

const Profile = ({name, desc, isRemove, photo, onPress}) => {
    return (
        <View style = {styles.container} >
            {!isRemove && (
                <TouchableOpacity style = {styles.borderprofile} >
                    <Image source = {photo} style = {styles.avatar} />
                    {isRemove && <IcRemovePhoto style = {styles.remove} /> }
                </TouchableOpacity>
            )}
            {isRemove && (
                <TouchableOpacity style = {styles.borderprofile} onPress={onPress} >
                    <Image source = {photo} style = {styles.avatar} />
                    {isRemove && <IcRemovePhoto style = {styles.remove} /> }
                </TouchableOpacity>
            )}
            {
                name && ( 
                    <View>
                        <Text style = {styles.name} >{name}</Text>
                        <Text style = {styles.profesi} >{desc}</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar : {
        width: 110,
        height: 110,
        borderRadius: 110 /2 
    },
    borderprofile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name:{ 
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 16,
        textAlign: 'center',
    },
    profesi: {
        fontSize: 16,
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center',
    },
    remove: {
        position: 'absolute',
        right: 8,
        bottom: 8
    }
})
