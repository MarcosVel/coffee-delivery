import React from "react";
import {
  Keyboard,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Header, Input } from "../../components";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Home() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "red" }}
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={[styles.header, { paddingTop: statusBarHeight }]}>
          <Header />

          <Text style={[FONT.titleMd, styles.title]}>
            {"Encontre o café perfeito para\nqualquer hora do dia"}
          </Text>

          <Input />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
