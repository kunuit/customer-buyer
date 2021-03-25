import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import {View, StyleSheet, Text, } from 'react-native';
import RoundedButton from '../RoundedButton'

class DescriptionContainer extends React.Component {
    // const productDes = 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.';
    constructor(props) {
        super(props)
        this.state = {
            name: 'right',
            productDetail: '',
            isExtend: false,
        }
    }
    extend = () => {
        const productDes = 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'
        if (!this.state.isExtend) {
            this.setState({
                'name': 'down',
                'productDetail': productDes,
                'isExtend': true,
            })
        } else {
            this.setState({
                'name': 'right',
                'productDetail': '',
                'isExtend': false,
            })
        }
    }
    render() {
        return (
            <View style={styles.descriptionContainer}>
                <View style={styles.descriptionTittleContainer}>
                    <Text style={styles.descriptionTittle}>Product Detail</Text>
                    <RoundedButton style={styles.buttonExtend} onPress={this.extend}>
                        <AntDesign name={this.state.name} size={24} color="black" />
                    </RoundedButton>
                </View>
                <Text numberOfLines={3} style={styles.descriptionText}>{this.state.productDetail}</Text>
            </View>
        )
    }
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
    buttonExtend: {
        borderWidth: 0,
    },
    descriptionText: {
        fontFamily: "gilroy-light",
        fontSize: 14,
        color: "#7C7C7C",
        paddingBottom: "5%",
    },
})

export default DescriptionContainer;
