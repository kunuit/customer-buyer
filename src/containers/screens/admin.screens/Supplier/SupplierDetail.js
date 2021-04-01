import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import ButtonBottomAdmin from "../../../../components/admin.components/ButtonBottomAdmin";
import DetailContainer from "../../../../components/admin.components/DetailContainer";
import ButtonBack from "../../../../components/ButtonBack";
import ProductDetailImageContainer from "../../../../components/productDetail.component/ProductDetailImageContainer";
import ProductUnitContainer from "../../../../components/productDetail.component/ProductUnitContainer";

const SupplierDetail = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <ScrollView>
        <ProductDetailImageContainer />
        <ProductUnitContainer title='NCC 1' unitText='Kun pro' isEdit={true} />
        <DetailContainer
          title='Supplier Detail'
          info={{
            phone: "012312123",
            address: "KTX khu b",
            email: "cuongkun2512@gmail.com",
            representation: "kunion",
          }}
        />
      </ScrollView>
      <ButtonBack navigation={navigation} />
      <ButtonBottomAdmin />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    paddingBottom: Dimensions.get("window").height * 0.09 + 37,
  },
});

export default SupplierDetail;
