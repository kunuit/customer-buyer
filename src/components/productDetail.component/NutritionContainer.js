import React from 'react';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import {View, StyleSheet, Text, Dimensions, } from 'react-native';

const NutritionContainer = () => {
    return (
        <View style={styles.nutritionContainer}>
            <Text style={styles.nutritionTittle}>Nutritions</Text>
            <View style={styles.weightContainer}>
            <View style={styles.backgroundText}>

              <Text style={styles.weightText}>100gr</Text>
            </View>
              <AntDesign name="right" size={24} color="black" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    nutritionContainer: {
        marginHorizontal: "5%",
        borderTopWidth: 1,
        borderTopColor: "rgba(226, 226, 226, 0.7)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "5%",
        // width: Dimensions.get('screen').width, 
    },
    nutritionTittle: {
        fontFamily: "gilroy-bold",
        fontSize: 18,
        color: "#181725",
    },
    weightContainer: {
        flexDirection: "row",
        height: "100%",
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    backgroundText: {
        backgroundColor: "#EBEBEB",
        paddingHorizontal: "10%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: "15%",
        borderRadius: 5,
        paddingVertical: "5%",
    },
    weightText: {
        fontSize: 10,
        fontFamily: "gilroy-light",
     },
})

export default NutritionContainer;