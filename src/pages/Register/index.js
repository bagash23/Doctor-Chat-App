import  React, { useState }  from "react";
import { ScrollView, StyleSheet, Text ,  View } from "react-native";
import { Button, Gap, Input } from "../../components/atom";
import Header from "../../components/atom/molekul/Header";
import Fire from "../../Config/Fire";
import { colors, getData, showError, storeData, UseForm } from "../../utils";
import { useDispatch } from "react-redux";

const Register = ({navigation}) => {

    const [form, setForm] = UseForm ({
        fullName : "",
        profession : "",
        email : "",
        password : "",
    })
    const dispatch = useDispatch();
    const onContinue = () => {
        dispatch({type: "SET_LOADING", value: true});
        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // succesd
            dispatch({type: "SET_LOADING", value: false});
            // reset succes
            setForm('reset');
            // simpen data
            const data = {
                fullName: form.fullName,
                profession: form.profession,
                email: form.email,
                uid: user.uid
            };
            Fire.database().ref('users/' +user.uid+ '/').set(data);
            // ambil data
            storeData( 'user', data);
            // pindah data
            navigation.navigate('UploadPhoto', data)
        })
        .catch((error) => {
            dispatch({type: "SET_LOADING", value: false});
            showError(error.message);
        });
    };
    return (
        <View style = {styles.page}>
            <Header onPress={() => navigation.goBack()} title = "Daftar Akun"  />
            <View style = {styles.page2}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Input label = {"Nama Lengkap"} value = {form.fullName} onChangeText= {(value) => setForm( 'fullName', value)} />
                <Gap height = {24}/>
                <Input label = {"Pekerjaan"} value = {form.profession} onChangeText = {(value) => setForm( 'profession', value)} />
                <Gap height = {24}/>
                <Input label = {"Email Addres"} value = {form.email} onChangeText = {(value) => setForm( 'email' ,value)} />
                <Gap height = {24}/>
                <Input label = {"Password"} value = {form.password} onChangeText = {(value) => setForm( 'password' ,value)} secureTextEntry />
                <Gap height = {40}/>
                <Button title = {"Continue"} onPress={onContinue} />
            </ScrollView>
            </View>
        </View>
    )
}
export default Register
const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    page2: {
        padding: 40,
        paddingTop: 0,
    }
});