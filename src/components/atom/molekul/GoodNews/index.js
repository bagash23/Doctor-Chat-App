import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from '../../../../utils';

const GoodNews = ({title, date, image}) => {
    return(
        <View style={styles.container}>
            <View style={styles.titlewrapper} >
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.date} >{date}</Text>
            </View>
            <Image source = {image} style={styles.gambar} />
        </View>
    )
}
export default GoodNews;
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.border.primary,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    titlewrapper:{
        flex: 1,
    },
    title:{
        fontSize: 16,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "800",
        color: colors.text.primary,
    },
    date:{
        fontSize:12,
        fontFamily:"Nunito-Reguler",
        fontWeight:"400",
        color:colors.text.secondary,
        marginTop: 4
    },
    gambar:{
        width: 60,
        height: 60,
        borderRadius: 11
    }
});