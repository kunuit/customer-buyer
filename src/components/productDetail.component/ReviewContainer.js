import React from 'react';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import {View, StyleSheet, Text, } from 'react-native';

const ReviewContainer = () => {
    return (
        <View style={styles.reviewContainer}>
            <Text style={styles.reviewTittle}>Review</Text>
            <View style={styles.ratingContainer}>
                <View style={styles.star}>
                    <AntDesign onPress={() => console.log('star1Clicked')} name="star" size={18} color="#F3603F" />
                    <AntDesign onPress={() => console.log('star2Clicked')} name="star" size={18} color="#F3603F" />
                    <AntDesign onPress={() => console.log('star3Clicked')} name="star" size={18} color="#F3603F" />
                    <AntDesign onPress={() => console.log('star4Clicked')} name="star" size={18} color="#F3603F" />
                    <AntDesign onPress={() => console.log('star5Clicked')} name="star" size={18} color="#F3603F" />
                </View>
                <AntDesign name="right" size={24} color="black" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    reviewContainer: {
        marginHorizontal: "5%",
        borderTopWidth: 1,
        borderTopColor: "rgba(226, 226, 226, 0.7)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "5%",
    },
    reviewTittle: {
        fontFamily: "gilroy-bold",
        fontSize: 18,
        color: "#181725",
    },
    ratingContainer: {
        height: "100%",
        justifyContent: "flex-end", 
        flexDirection: "row",
        alignItems: 'center',
    },
    star: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: "15%",
        paddingVertical: "5%",
    },
})

export default ReviewContainer;