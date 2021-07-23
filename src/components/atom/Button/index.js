import  React  from "react";
import { StyleSheet, Text , View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../../utils";
import IconOnly from "./BUttoniconon;y";
import ButtonSend from "./ButtonSend";

const Button = ({type, title, onPress, icon, disable}) => {
    if (type === 'btn-icon-send') {
        return <ButtonSend disable={disable} onPress = {onPress} />
    }
    if( type === "icon-only" ) {
        return (
            <IconOnly icon={icon} onPress = {onPress} />
        )
    }
    if (disable) {
        return (
            <View style = {styles.disableBg}>
                <Text style = {styles.disableText}>
                    {title}
                </Text>
            </View>
        )
    }
    return (
        <TouchableOpacity style = {styles.Button1 (type)} onPress = {onPress}>
            <Text style = {styles.text1 (type)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    Button1: (type) => ({
        backgroundColor: type === "secondery" ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }),
    text1: (type) => ({
        fontSize: 16,
        textAlign: "center",
        color: type === "secondery" ? colors.button.secondary.text : colors.button.primary.text,
    }),
    disableBg: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.button.disable.background
    },
    disableText: {
        fontSize: 16,
        textAlign: "center",
        color: colors.button.disable.text
    }
});