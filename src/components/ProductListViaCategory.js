import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import MainLoading from "../components/Loader/MainLoading";
import { CategoryNameList } from "./category.components/CategoryNameList";
import { ProductListWithCondition } from "./ProductListWithCondition";
import { statusFilter, typeProducts } from "../sagas/product.saga";
import { theme } from "../common/theme";

export const ProductListViaCategory = ({ title, navigation, ...props }) => {
  const { data, isLoading } = useSelector((state) => state.categories);
  const [activeId, setActiveId] = useState(statusFilter.default);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeId != statusFilter.default) {
      dispatch({
        type: typeProducts.filterProductByCategory,
        payload: { id: activeId },
      });
    }
  }, [activeId]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title ? title : "No Title"}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      {!isLoading ? (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListHeaderComponent={
              <TouchableHighlight
                underlayColor={theme.backgrounds.white}
                onPress={() => setActiveId(statusFilter.default)}
              >
                <View
                  style={[
                    styles.root,
                    activeId == statusFilter.default && styles.active,
                  ]}
                >
                  <Text
                    style={[
                      styles.text,
                      activeId == statusFilter.default ? styles.textActive : {},
                    ]}
                  >
                    All
                  </Text>
                </View>
              </TouchableHighlight>
            }
            renderItem={({ item }) => (
              <CategoryNameList
                item={item}
                onChangeCategory={(id) => setActiveId(id)}
                activeId={activeId}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <ProductListWithCondition
            activeId={activeId}
            navigation={navigation}
          />
        </View>
      ) : (
        <MainLoading height={190} padding={30} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "auto",
  },
  titleContainer: {
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "5%",
  },
  title: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "#181725",
  },
  seeAllText: {
    color: "#53B175",
    fontFamily: "gilroy-light",
    fontSize: 12,
  },
  cardItemContainer: {
    flex: 1,
  },
  nameDetail: {
    backgroundColor: "red",
    margin: 3,
  },
  root: {
    flex: 1,
    padding: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.lineBorder,
  },
  text: {
    textAlign: "center",
    color: theme.colors.notBlack,
  },
  active: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  textActive: {
    color: theme.backgrounds.white,
  },
});
