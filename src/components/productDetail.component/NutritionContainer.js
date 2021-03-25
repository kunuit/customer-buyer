import React from 'react';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import {View, StyleSheet, Text, Dimensions, } from 'react-native';
import RoundedButton from '../RoundedButton'
class NutritionContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'right',
            productNutritions: '',
            isExtend: false,
        }
    }
    extend = () => {
        const productNutritions = 'Love you guys kong and kun'
        if (!this.state.isExtend) {
            this.setState({
                'name': 'down',
                'productNutritions': productNutritions,
                'isExtend': true,
            })
        } else {
            this.setState({
                'name': 'right',
                'productNutritions': '',
                'isExtend': false,
            })
        }
    }
    render() {
        return (
            <View style={styles.nutritionContainer}>
                <View style={styles.nutritionsTittleContainer}>
                    <Text style={styles.nutritionTittle}>Nutritions</Text>
                    <View style={styles.weightContainer}>
                        <View style={styles.backgroundText}>
                            <Text style={styles.weightText}>100gr</Text>
                        </View>
                        <RoundedButton style={styles.buttonExtend} onPress={this.extend}>
                            <AntDesign name={this.state.name} size={24} color="black" />
                        </RoundedButton>
                    </View>
                </View>
                <Text numberOfLines={3} style={styles.nutritionsText}>{this.state.productNutritions}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    nutritionContainer: {
        marginHorizontal: "5%",
        borderTopWidth: 1,
        borderTopColor: "rgba(226, 226, 226, 0.7)",
        // width: Dimensions.get('screen').width, 
    },
    nutritionsTittleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "5%",
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
    buttonExtend: {
        borderWidth: 0,
    },
    nutritionsText: {
        fontFamily: "gilroy-light",
        fontSize: 14,
        color: "#7C7C7C",
        paddingBottom: "5%",
    },
})

export default NutritionContainer;