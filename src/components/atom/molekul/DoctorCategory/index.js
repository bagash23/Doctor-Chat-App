import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IcButuh, IcObat, IcUmum, IcAnak } from '../../../../assets/icon';
import { colors } from '../../../../utils';

const DoctorCategory = ({category, onPress}) => {
    const Icon = () => {
        if (category === "umum") {
            return <IcUmum/>
        }
        if (category === "psikiater") {
            return <IcButuh/>
        }
        if (category === "obat") {
            return <IcObat/>
        }
        if (category === "anak") {
            return <IcAnak/>
        }
        return <IcUmum style ={ styles.illustration} />
    }
    return(
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            <Icon/>
            <Text style = {styles.label} >Saya Butuh</Text>
            <Text style = {styles.category} >{category}</Text>
        </TouchableOpacity>
    )
}
export default DoctorCategory;
const styles = StyleSheet.create({
    container:{
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: "flex-start",
        borderRadius: 10,
        marginRight: 10,
        width: 150,
        height: 130
    },
    illustration:{
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: "Nunito-Reguler",
        fontWeight: "300"
    },
    category: {
        fontSize: 12,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "600"
    }
});