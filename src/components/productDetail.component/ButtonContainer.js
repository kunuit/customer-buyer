import React from 'react';
import {View, StyleSheet, Text, } from 'react-native';
import { theme } from '../../common/theme';
import Button from "../Button"

const ButtonContainer = () => {
    return (
        <View style={styles.buttonContainer}>
            <Button mode='contained' onPress={() => console.log('addButtonClicked')} style={styles.buttonAddToBasket}>
              <Text style={styles.buttonText}>Add To Basket</Text>
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        paddingBottom: "10%",
    },
    buttonAddToBasket: {
        width: "90%",
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        fontFamily: "gilroy-bold",
        fontSize: 15,
        color: theme.backgrounds.white,
    },
})

export default ButtonContainer;