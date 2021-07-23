import  React  from "react";
import { StyleSheet, Text ,  View } from "react-native";
import { IconBackDark } from "../../../../assets/icon";
import { colors } from "../../../../utils";
import Button from "../../Button";
import Gap from "../Gap";
import DarkProfile from "./DarkProfile";

const Header = ({onPress, title, type, photo, desc}) => {
    if (type === "dark-profile") {
        return <DarkProfile onPress = {onPress} title = {title} desc = {desc} photo = {photo} />
    }
    return (
        <View style = {styles.container(type)}>
            {/* <IconBackDark/> */}
            <Button type = "icon-only" icon = {type === 'dark' ? 'light-icon' : 'dark-icon'} onPress={onPress} />
            <Text style = {styles.Text(type)} > {title} </Text>
            <Gap width = {24}/>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container: (type) => (
        {
            paddingHorizontal: 16,
            paddingVertical: 30,
            backgroundColor:  type === "dark" ? colors.secondary : colors.white,
            flexDirection: "row",
            alignItems: "center",
            borderBottomLeftRadius: type === "dark" ?  20 : 0,
            borderBottomRightRadius: type === "dark" ?  20 : 0
        }
    ),
    Text: (type) => (
        {
            textAlign: "center",
            fontSize: 20,
            fontFamily: "Nonito-Bold",
            flex: 1,
            color: type === "dark" ? colors.white : colors.text.primary,
            textTransform: 'capitalize'
        }
    )
});