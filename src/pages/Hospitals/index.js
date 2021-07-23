import React from 'react';
import { ImageBackground, StyleSheet, Text, View} from "react-native";
import { DummyAnak, DummyCitra, DummyJiwa } from '../../assets/dumy';
import { ILHospitalsBg } from '../../assets/illustration';
import ListHospitals from '../../components/atom/molekul/listhospital';
const Hospitals = () => {
    return(
        <View style={styles.page}>
            <ImageBackground source={ILHospitalsBg} style={styles.background} >
                <Text style={styles.title} >Nearby Hospitals</Text>
                <Text style={styles.deskripsi} >3 tersedia</Text>
            </ImageBackground>
            <View style={styles.page2} >
                <ListHospitals type =  "Rumah Sakit" name = "Citra Bunga Merdeka" addres = "Jln. Surya Sejahtera 20" pic = {DummyCitra} />
                <ListHospitals type =  "Rumah Sakit Anak" name = "Rumah Sakit Anak Happy Family & Kids" addres = "Jln. Surya Sejahtera 20" pic = {DummyAnak} />
                <ListHospitals type =  "Rumah Sakit Jiwa" name = "Rumah Sakit Jiwa Tingkatan Paling Atas" addres = "Jln. Surya Sejahtera 20" pic = {DummyJiwa} />    
            </View>
        </View>
    )
}
export default Hospitals;
const styles = StyleSheet.create({
    page:{
        backgroundColor: "#112340",
        flex: 1
    },
    page2:{
        backgroundColor: "white",
        flex: 1,
        borderRadius: 20,
        marginTop: -30,
        paddingTop: 14
    },
    background:{
        height: 240,
        alignItems: "center",
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: "Nunito-SemiBold",
        fontWeight: "800",
        color: "white",
    },
    deskripsi: {
        fontSize: 14,
        fontFamily: "Nunito-Reguler",
        fontWeight: "300",
        color: "white"
    }
});