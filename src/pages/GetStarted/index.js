import  React  from "react";
import { ImageBackground, StyleSheet, Text ,  View } from "react-native";
import { ILGetStarted, ILLogo } from "../../assets/illustration";
import { Button, Gap } from "../../components";
import { colors } from "../../utils";

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source = {ILGetStarted} style = {styles.page}>
            <View>
                <ILLogo/>
                <Text style = {styles.title1} >Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title = "Get Started" onPress = {() => navigation.navigate("Register")} />
                <Gap height = {16}/>
                <Button type = "secondery" title = "Sign In" onPress = {() => navigation.replace("Login")} />
            </View>
        </ImageBackground>
    )
}
export default GetStarted
const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: "space-between",
        flex: 1
    },
    title1: {
        fontSize: 28,
        color: colors.white,
        marginTop: 91,
        fontFamily: "Nunito-SemiBold"
    }
});