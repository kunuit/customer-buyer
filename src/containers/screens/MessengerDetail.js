import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../../common/theme";
import TextInput from "../../components/TextInput";
import TitleScreen from "../../components/TitleScreen";
import RoundedButton from "../../components/RoundedButton";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function MessengerDetail({ navigation, route }) {
  const [message, setMessage] = useState("");
  const item = route.params;
  return (
    <View style={styles.root}>
      <View>
        <TitleScreen title={"Núi Đỏ Near"} navigation={navigation} />
      </View>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.rightMessage}>
            <Text style={[styles.rightText, styles.text]}>
              alo alo cho hỏi là mấy giờ rồi anh taxi à, anh taxi ơi!
            </Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>Tôi là Kunion</Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>
              Rất hân hạnh được phục vụ bạn
            </Text>
          </View>
          <View style={styles.rightMessage}>
            <Text style={[styles.rightText, styles.text]}>
              Thôi bớt bớt deeeee !
            </Text>
          </View>
          <View style={styles.rightMessage}>
            <Text style={[styles.rightText, styles.text]}>
              Bán chậm thôi, chậm chậm thôi
            </Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>
              Oke oke và mấy khách hàng này thì okay
            </Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>
              Không thích thì mua deee
            </Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>
              Còn Thích thì mua luôn
            </Text>
          </View>
          <View style={styles.rightMessage}>
            <Text style={[styles.rightText, styles.text]}>
              Oke oke đã vậy thì mua đây
            </Text>
          </View>
          <View style={styles.rightMessage}>
            <Text style={[styles.rightText, styles.text]}>
              Mua lun cả cái app này lun deee
            </Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>No no nồ nô nô</Text>
          </View>
          <View style={styles.leftMessage}>
            <Text style={[styles.leftText, styles.text]}>
              Cái app này là no page
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{ flex: 8.5 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Khách hàng muốn gì ạ!"
            // returnKeyType={()=> setMessage()}
            underlineColor="transparent"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
        </View>
        <View style={{ flex: 1.5, paddingLeft: 10 }}>
          <RoundedButton
            mode="contained"
            onPress={() => console.log("sent")}
            style={styles.buttonItem}
          >
            <FontAwesome name="send" size={24} color={theme.colors.primary} />
          </RoundedButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },
  main: {
    flex: 10,
    backgroundColor: theme.backgrounds.paper,
  },
  footer: {
    flex: 1,
    backgroundColor: theme.backgrounds.paper,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 2,
  },
  rightMessage: {
    flexDirection: "row-reverse",
  },
  leftMessage: {
    flexDirection: "row",
  },
  rightText: {
    backgroundColor: theme.backgrounds.buttonBack,
    color: theme.colors.notBlack,
    marginLeft: 50,
    marginRight: 10,
  },
  leftText: {
    backgroundColor: theme.colors.primary,
    color: theme.backgrounds.white,
    marginLeft: 10,
    marginRight: 50,
  },
  text: {
    // fontFamily: "gilroy-medium",
    padding: 10,
    marginVertical: 8,
    borderRadius: 15,
  },
  textInput: {
    backgroundColor: theme.backgrounds.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  buttonItem: {
    borderWidth: 0,
  },
});
