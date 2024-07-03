import React from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import coffee from "../../assets/images/coffee.png";
import { CarouselCard, Header, Input } from "../../components";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Home() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
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

            <View>
              <Input />

              <Image source={coffee} style={styles.coffee} />
            </View>
          </View>

          <View style={styles.main}>
            <CarouselCard />
          </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
