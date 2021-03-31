import React from "react";
import { Picker } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { theme } from "../common/theme";

const SelectItem = ({
  errorText,
  title = "No name",
  value,
  onChangeValue,
  data,
  ...props
}) => {
  return (
    <View style={styles.root}>
      <Picker
        selectedValue={value}
        mode='dialog'
        style={{ width: "100%" }}
        onValueChange={(itemValue, itemIndex) => onChangeValue(itemValue)}
        {...props}>
        <Picker.Item color={theme.colors.notGray} label={title} value='' />
        {data ? (
          data.map((e, i) => (
            <Picker.Item label={e.name} value={e.value} key={i} />
          ))
        ) : (
          <></>
        )}
      </Picker>
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 12,
    borderColor: theme.colors.disabled,
    borderBottomWidth: 1,
    width: "100%",
  },
});

export default SelectItem;
