import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import FilterCheckBox from "../../components/FilterCheckbox"
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/Button";
import Colors from "../../constants/colors";

const Filter = () => {
    const fakeDataCategory = ["Eggs", "Noddles & Pasta", "Chip & Crispt", "Fast Food"];
    const fakeDataBrand = ["Individual", "Cocacola", "Ifad", "Kazi Farmas"];
    return (
    <View style={styles.container}>
        <View style={styles.titleTextContainer}>
        <MaterialIcons name="close" size={24} color="black" /> 
            <Text style={styles.titleText}>Filter</Text>  
        </View>
        <View style={styles.checkboxContainer}>
            <View style={styles.checkboxTypeContainer}>
                <View style={styles.checkboxTypeTitleContainer}>
                    <Text style={styles.checkboxTypeTitle}>
                    Category
                    </Text>
                </View>
                <View style={styles.filterCheckboxSmallContainer}>
                {
                fakeDataCategory.map((object) => {
                    return (
                        <FilterCheckBox>
                            {object}
                        </FilterCheckBox>
                    )
                }) 
                }
                </View>
            </View>
            <View style={styles.checkboxTypeContainer}>
                <View style={styles.checkboxTypeTitleContainer}>
                    <Text style={styles.checkboxTypeTitle}>
                    Brand
                    </Text>
                </View>
                <View style={styles.filterCheckboxSamllContainer}>
                {
                fakeDataBrand.map((object) => {
                    return (
                        <FilterCheckBox>
                            {object}
                        </FilterCheckBox>
                    )
                }) 
                }
                </View>
            </View>
        </View>
        <Button
            style={{
            backgroundColor: Colors.green,
            width: "90%",
            position: "absolute",
            marginLeft : "5%",
            bottom: Dimensions.get("window").height * 0.08,}}
        >
        <Text style={{ color: "white", fontFamily: "gilroy-bold" }}>
          Apply filter
        </Text>
        </Button>
    </View>
    )};

const styles = StyleSheet.create({
    titleTextContainer: {
        width: "100%",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        backgroundColor: "white",
        paddingVertical: 20,
        flexDirection : "row",
        alignItems : "center"
    },
        titleText: {
        textAlign: "center",
        fontSize: 18,
        fontFamily: "gilroy-bold",
        width : "90%"
    },
        container: { 
        flex: 1,
    },
        checkboxContainer: {
        width : "100%",
        height : "100%",
        backgroundColor : "#F2F3F2",
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
    },
        checkboxTypeContainer: {
        marginStart: 10,
    },
        checkboxTypeTitle: {
        fontSize: 18,
        fontFamily: "gilroy-bold",
    },
        checkboxTypeTitleContainer : {
        marginBottom : 20,
        marginTop : 20,
        marginLeft : 10,
    },
        filterCheckboxSmallContainer : {
        marginBottom : 20, 
    },

});
export default Filter;