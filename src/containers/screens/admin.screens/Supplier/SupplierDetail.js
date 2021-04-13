import React, { useEffect } from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../../common/theme";
import ButtonBottomAdmin from "../../../../components/admin.components/ButtonBottomAdmin";
import DetailContainer from "../../../../components/admin.components/DetailContainer";
import ButtonBack from "../../../../components/ButtonBack";
import ProductDetailImageContainer from "../../../../components/productDetail.component/ProductDetailImageContainer";
import ProductUnitContainer from "../../../../components/productDetail.component/ProductUnitContainer";
import { typeSuppliers } from "../../../../sagas/supplier.saga";

const SupplierDetail = ({ navigation, route }) => {
  const { isCreatedOrUpdatedOrDeletedSupplier } = useSelector(
    (state) => state.suppliers
  );

  const dispatch = useDispatch();
  const item = route.params;

  useEffect(() => {
    if (isCreatedOrUpdatedOrDeletedSupplier) {
      dispatch({ type: typeSuppliers.resetCreateSupplier });
      navigation.navigate("Bottom tab");
    }
  }, [isCreatedOrUpdatedOrDeletedSupplier]);

  const redirect = () => {
    navigation.navigate("Create Supplier", item);
  };

  const handleDeletedSupplier = () => {
    dispatch({
      type: typeSuppliers.removeSupplierFirebase,
      payload: {
        index: item.id,
      },
    });
  };

  return (
    <View style={styles.root}>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.itemImageDetail}
        barStyle="dark-content"
        hidden={true}
      />
      <ScrollView>
        <ProductDetailImageContainer images={item.images} />
        <ProductUnitContainer
          title={item.name}
          unitText={item.representation}
          isEdit={true}
          upDateProduct={redirect}
        />
        <DetailContainer
          title="Supplier Detail"
          info={{
            phone: item.phone,
            address: item.address,
            email: item.email,
            representation: item.representation,
          }}
        />
      </ScrollView>
      <ButtonBack navigation={navigation} isBackground={true} />
      <ButtonBottomAdmin onDeletedProduct={handleDeletedSupplier} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
  },
});

export default SupplierDetail;
