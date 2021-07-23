import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../../utils'

const Other = ({text, date, photo}) => {
    return (
        <View  style = {styles.container} >
            <Image source = {photo} style = {styles.avatar} />
            <View>
                <View style={styles.chatContent} >
                    <Text style={styles.text} >{text}</Text>
                </View>
                <Text style = {styles.date} >{date}</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    chatContent: {
        padding: 13,
        paddingRight: 10,
        backgroundColor: colors.primary,
        maxWidth: '85%',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    text: {
        fontSize: 14,
        color: 'white'
    },
    date: {
        fontSize: 11,
        color: colors.text.secondary,
        marginTop: 8
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        marginRight: 32
    }
})
