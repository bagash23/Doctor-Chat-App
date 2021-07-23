import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DoctorCategory, GoodNews, HomeProfiles, RateDoctor } from '../../components/atom/molekul';
import Gap from '../../components/atom/molekul/Gap';
import { colors, showError } from '../../utils';
import { Fire } from '../../Config'
import { DummyApple, DummyDokter1, DummyDokter4, DummyDokter7, DummyJeruk, DummyUser } from '../../assets';
const Doctor = ({navigation}) => {
    const [news, setNews] = useState([]);
    const [categoryDoctor, setCategoryDoctor] = useState([]);
    const [doctors, setDoctors] = useState ([]);
    useEffect(() => {
        getCategoryDoctor();
        getTopRatedDoctors();
        getNews();
    }, []);
    const getTopRatedDoctors = () => {
        Fire.database()
        .ref(`doctors/`)
        .orderByChild('rate')
        .limitToLast(3)
        .once('value')
        .then(res => {
            if (res.val()) {
                const oldData = res.val();
                const data = [];
                Object.keys(oldData).map(key => {
                    data.push({
                        id: key,
                        data: oldData[key],
                    });
                });
                setDoctors(data);
            }
        })
        .catch (err => {
            showError(err.message);
        })
    }
    const getCategoryDoctor = () => {
        Fire.database().ref(`category_doctors/`).once('value').then(res => {
            if (res.val()) {
                const data = res.val()
                const filterData = data.filter(el => el !== null);
                setCategoryDoctor(filterData)
            }
        }).catch(err => {
            showError(err.message)
        })
    }
    const getNews = () => {
        Fire.database().ref(`news/`).once('value').then(res => {
            if (res.val()) {
                const data = res.val()
                const filterData = data.filter(el => el !== null);
                setNews(filterData)
            }
        }).catch(err => {
            showError(err.message)
        })
    }
    return(
        <View style = {styles.page} >
            <View style={styles.page2} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style = {styles.content} >
                        <Gap height= {30}/>
                        <HomeProfiles onPress = {() => navigation.navigate("UseProfile")} />
                        <Text style = {styles.welcome} >Mau konsultasi dengan siapa hari ini?</Text>
                    </View>
                    <View style = {styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style = {styles.category} >
                            <Gap width ={32}/>
                            <DoctorCategory onPress = {() => navigation.navigate("ChooseDokter")} />
                            <DoctorCategory category = "psikiater" />
                            <DoctorCategory category = "obat"  />
                            <DoctorCategory category = "anak" />
                            <Gap width ={22}/>
                        </View>
                    </ScrollView>
                    </View>
                    <View style={styles.content} >
                        <Text>Top Rated Doctors</Text>
                        <Gap height={16}/>
                        <RateDoctor avatar = {DummyDokter1} name = "Jessica" desc = "Dokter Umum" />
                        <RateDoctor avatar = {DummyDokter4} name = "Lee Yun" desc = "Dokter Psikiater" />
                        <RateDoctor avatar = {DummyDokter7} name = "Mila" desc = "Dokter Obat" />
                        <Text>Good News</Text>
                    </View>
                    <GoodNews image = {DummyJeruk} title = "Kenapa Kita Harus Rajin Makan Jerok ?" date = "Karena agar tubuh kita mendapatkan imun tubuh yang baik" />
                    <GoodNews image = {DummyApple} title = "Maanfaat Makan Apel" date = "Karena agar tubuh kita mendapatkan imun tubuh yang baik" />
                    <GoodNews image = {DummyUser} title = "Banyak Dokter Baru Yang Sangat Cerdas" date = "5 Dokter Cerdas Yang Ada DiIndonesia" />
                    <Gap height={30}/>
                </ScrollView>
            </View>
        </View>
    )
}
export default Doctor;
const styles = StyleSheet.create({
    page:{
        backgroundColor: "#112340",
        flex: 1
    },
    page2:{
        backgroundColor: "white",
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    welcome:{
        fontSize: 20,
        fontFamily: "Nunito-SemiBold",
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 18,
        maxWidth: 209
    },
    category: {
        flexDirection: "row"
    },
    wrapperScroll:{
        marginHorizontal: -16
    },
    content:{
        paddingHorizontal: 16
    },
});