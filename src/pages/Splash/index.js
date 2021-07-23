import  React, { useEffect }  from "react";
import { StyleSheet, Text ,  View } from "react-native";
import { ILLogo } from "../../assets/illustration";
import { Fire } from '../../Config'

const Splash = ({navigation}) => {
    useEffect (() => {
        const Temp = Fire.auth().onAuthStateChanged(user => {
            setTimeout(() => {
                if(user) {
                    // user masi login
                    navigation.replace('MainApp')
                }else {
                    // user logout
                    navigation.replace('GetStarted')
                }
            }, 3000);
        });
        return () => Temp();
    }, [navigation]);
    return (
        <View style = {styles.page} >
            <ILLogo/>
            <Text style = {styles.title} >
                My Doctor
            </Text>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({

    page: {
    backgroundColor: "white", 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
    },

    title: {
        fontSize: 25,
        fontFamily: "Nunito-Bold",
        marginTop: 20
    }

});