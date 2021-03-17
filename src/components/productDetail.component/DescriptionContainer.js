import React from 'react';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import {View, StyleSheet, Text, } from 'react-native';

const DescriptionContainer = () => {
    return (
        <View style={styles.descriptionContainer}>
            <View style={styles.descriptionTittleContainer}>
              <Text style={styles.descriptionTittle}>Product Detail</Text>
              <AntDesign name="down" size={24} color="black" />
            </View>
            <Text numberOfLines={3} style={styles.descriptionText}>Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    descriptionContainer: {
        marginHorizontal: "5%",
        borderTopWidth: 1,
        borderTopColor: "rgba(226, 226, 226, 0.7)",
    },
    descriptionTittleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "5%",
    },
    descriptionTittle: {
        fontFamily: "gilroy-bold",
        fontSize: 18,
        color: "#181725",
    },
    descriptionText: {
        fontFamily: "gilroy-light",
        fontSize: 14,
        color: "#7C7C7C",
        paddingBottom: "5%",
    },
})

export default DescriptionContainer;