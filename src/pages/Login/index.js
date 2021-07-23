import  React, { useState } from "react";
import { ScrollView, StyleSheet, Text , View } from "react-native";
import { useDispatch } from "react-redux";
import { ILLogo } from "../../assets/illustration";
import { Button, Gap, Input, Link } from "../../components/atom";
import Fire from "../../Config/Fire";
import { colors, showError, storeData, UseForm } from "../../utils";

const Login = ({navigation}) => {
    const [form, setForm] = UseForm ({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()

    const login = () => {
        dispatch({type: "SET_LOADING", value: true});
        Fire.auth().signInWithEmailAndPassword(form.email, form.password).then(res => {
            dispatch({type: "SET_LOADING", value: false})
            Fire.database().ref(`users/${res.user.uid}/`).once('value').then(resDB => {
                if(resDB.val()) {
                    storeData('user', resDB.val())
                    navigation.replace('MainApp')
                }
            })
        })
        .catch(err => {
            dispatch({type: "SET_LOADING", value: false});
            showError(err.message);
        })
    }

    return (
        <View style = {styles.page}>
            <ScrollView showsVerticalScrollIndicator={false} >
            <Gap height = {40}/>
            <ILLogo/>
            <Text style = {styles.titlw} >Masuk dan mulai berkonsultasi</Text>
            <Input label = {"Email Addres"} value = {form.email} onChangeText= {value => setForm('email', value)}  />
            <Gap height = {24} />
            <Input label = {"Password"} value = {form.password} onChangeText= {value => setForm('password', value)}  secureTextEntry />
            <Gap height = {10} />
            <Link title = {"Forgot My Password"} size = {12} />
            <Gap height = {40}/>
            <Button title = {"Sign In"} onPress={login} />
            <Gap height = {30}/>
            <Link title = {"Create New Account"} size = {16} align = {"center"} onPress = {() => navigation.navigate('Register')} />
            </ScrollView>
        </View>
    )
}
export default Login
const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: "white",
    },  
    titlw: {
        fontSize: 20,
        color: "black",
        fontFamily: "Nunito-Bold",
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 200,
    }
});