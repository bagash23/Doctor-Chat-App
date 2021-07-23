import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessage, IconMessageActive } from '../../../assets/icon';
import { colors } from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Doctor') {
             return active ? <IconDoctorActive/> : <IconDoctor/>
        }
        if (title === 'Message') {
             return active ? <IconMessageActive/> : <IconMessage/>
        }
        if (title === 'Hospitals') {
             return active ? <IconHospitalsActive/> : <IconHospitals/>
        }
        return <IconDoctor/>
    }

    return(
        <TouchableOpacity style = {styles.container} onPress={onPress} onLongPress={onLongPress} >
            <Icon/>
            <Text style = {styles.text(active)} >{title}</Text>
        </TouchableOpacity>
    )
}
export default TabItem;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? colors.text.menuActive : colors.text.inactive,
            fontFamily: "Nunito-SemiBold"
        }
    ),
});