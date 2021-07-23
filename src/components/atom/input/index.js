import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border, setBorder] = useState(colors.border);
    const onFocusform = () => {
        setBorder(colors.three);
    };
    const onBlurform = () => {
        setBorder(colors.black);
    };
    return (
        <View>
            <Text style = {styles.label}> {label} </Text>
            <TextInput onFocus={onFocusform} onBlur={onBlurform} style = {styles.input(border)} value ={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} editable={!disable} selectTextOnFocus={!disable}  />
        </View>

    )
}
export default Input;
const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: "Nunito-Regular",
    },
    input: (border) => (
        {
            borderWidth: 1,
            borderColor: border,
            borderRadius: 10,
            padding: 12
        }
    )
});