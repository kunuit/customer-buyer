import React from 'react';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../RoundedButton";
import {View, StyleSheet, Text, } from 'react-native';
import Colors from "../../../constants/colors";

const QuantityAjustContainer = () => {
    return(
        <View style={styles.quantityAjustContainer}>
            <View style={styles.quantityAjustButton}>
              <RoundedButton onPress={() => console.log('minusClicked')} style={[styles.buttonItem, styles.buttonClickable]}>
                <Entypo name="minus" size={25} color={Colors.gray} />
              </RoundedButton>
              <View style={{ marginLeft: 12, marginRight: 12 }}>
                <RoundedButton>
                  <Text>1</Text>
                </RoundedButton>
              </View>
              <RoundedButton onPress={() => console.log('plusClicked')} style={[styles.buttonItem, styles.buttonClickable]}>
                <Entypo name="plus" size={25} color={Colors.gray} />
              </RoundedButton>
            </View>
            <Text style={styles.titleText}>$4.99</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    quantityAjustContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "5%",
        paddingBottom: "5%",
    },
    quantityAjustButton: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonItem: {
        borderWidth: 0,
    },
    buttonClickable: {
    },
    titleText: {
        fontFamily: "gilroy-bold",
        fontSize: 24,
        color: "#181725",
    },
})
export default QuantityAjustContainer;