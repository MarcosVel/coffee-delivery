import { useNavigation, useRoute } from "@react-navigation/native";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { CartProps, ProductProps } from "../../@types/typesDTO";
import cup from "../../assets/images/cup.png";
import { Amount, Button, Select, Smoke } from "../../components";
import { AppNavigationProps } from "../../routes/app.routes";
import { cartAdd } from "../../storage/cartStorage";
import { COLORS, FONT } from "../../styles/theme";
import { playAudio } from "../../utils";
import { styles } from "./styles";

export default function Product() {
  const navigation = useNavigation<AppNavigationProps>();
  const { params } = useRoute();
  const { id, image, title, description, price, type } = params as ProductProps;

  const [sizeSelected, setSizeSelected] = useState(0);
  const [amount, setAmount] = useState(1);

  const displayError = useSharedValue(0);

  const textErrorAnimation = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        displayError.value,
        [0, 1],
        [COLORS.GRAY_400, COLORS.RED_DARK]
      ),
    };
  });

  const sizeBorderAnimation = useAnimatedStyle(() => {
    return {
      borderWidth: 1,
      borderColor: interpolateColor(
        displayError.value,
        [0, 1],
        [COLORS.GRAY_700, COLORS.RED_DARK]
      ),
    };
  });

  function selectSize(selectValue: number) {
    setSizeSelected(selectValue);
  }

  function selectAmount(amountSelected: number) {
    setAmount(amountSelected);
  }

  async function handleAddToCart(item: CartProps) {
    if (!sizeSelected) {
      displayError.value = withSequence(
        withTiming(1, { easing: Easing.inOut(Easing.quad) }),
        withDelay(700, withTiming(0, { easing: Easing.inOut(Easing.quad) }))
      );

      await playAudio(false);
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      return;
    }

    await cartAdd(item)
      .then(() => {
        navigation.navigate("cart");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.tag}>
          <Text style={[FONT.tag, styles.tagText]}>{type}</Text>
        </View>

        <View style={styles.info}>
          <Text style={[FONT.titleLg, styles.title]}>{title}</Text>

          <View style={styles.priceView}>
            <Text style={[FONT.textSm, styles.price]}>R$ </Text>
            <Text style={[FONT.titleXl, styles.price]}>
              {price.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>

        <Text style={[FONT.textMd, styles.description]}>{description}</Text>

        <View style={styles.smokeView}>
          <Smoke />
        </View>
        <Image source={cup} style={styles.cup} />
      </View>

      <View style={styles.footer}>
        <Animated.Text
          style={[FONT.textSm, styles.footerText, textErrorAnimation]}
        >
          Selecione o tamanho:
        </Animated.Text>

        <Select onSelect={selectSize} animatedStyle={sizeBorderAnimation} />

        <View style={styles.addCoffee}>
          <Amount hasMinimum defaultValue={amount} onChange={selectAmount} />

          <Button
            title="ADICIONAR"
            opacity={!sizeSelected}
            onPress={() =>
              handleAddToCart({
                id,
                image,
                title,
                price,
                sizeSelected,
                amount,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
