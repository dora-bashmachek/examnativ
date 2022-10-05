import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

const FitBack = (props, onSubmit) => {
  const [value, setValue] = useState("");
  function goToAboutBook() {
    //вернуться назад
    props.navigation.navigate("AboutBook");
  }
  const pressHandler = () => {
    if (!value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("название не может быть пустым");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="оставьте отзыв"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="вернуться к книге" onPress={goToAboutBook} />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab"
  }
});
export default FitBack;
