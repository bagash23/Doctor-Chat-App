import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDokter6 } from '../../../../assets'
import { colors } from '../../../../utils'
import Button from '../../Button'

const DarkProfile = ({onPress, title, desc, photo}) => {
    return (
        <View style = {styles.container}>
            <Button type = "icon-only" icon = 'dark' onPress = {onPress} />
            <View style = {{flex: 1}}>
                <Text style = {styles.name} >{title}</Text>
                <Text style = {styles.disc} >{desc}</Text>
            </View>
            <Image source = {photo} style =  {{
                width: 46,
                height: 46,
                borderRadius: 46 / 2
            }} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name :{
        fontSize: 20,
        color: colors.white,
        textAlign: 'center'
    },
    disc :{
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.subTitle
    }
})
