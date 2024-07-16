import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CartItem } from "../../components";

export default function Cart() {
  return (
    <View style={styles.container}>
      <CartItem />
    </View>
  );
}
