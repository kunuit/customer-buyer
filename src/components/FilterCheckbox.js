import * as React from 'react';
import { memo } from "react";
import {Checkbox} from 'react-native-paper';
import Colors from '../constants/colors';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";

const FilterCheckbox = ({mode, style, children, ...props}) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <TouchableOpacity 
            style={[styles.filterCheckboxContainer,
            style,        
            ]} 
            mode={mode}
            {...props}
            onPress={()=> setChecked(!checked)}>
            <Checkbox 
                color = {Colors.green}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                setChecked(!checked);
                }}
            />
            <View>
                <Text style={{color : checked ? Colors.green : "black", fontSize: 14  }}>
                {children}
                </Text>
            </View> 
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    filterCheckboxContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft : 10,
        alignItems : "center",
    },

});
export default memo(FilterCheckbox)