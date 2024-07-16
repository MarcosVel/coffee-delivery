import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import { CartProps, ProductProps } from "../../@types/typesDTO";
import cup from "../../assets/images/cup.png";
import smoke from "../../assets/images/smoke3.png";
import { Amount, Button, Select } from "../../components";
import { AppNavigationProps } from "../../routes/app.routes";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";
import { cartAdd } from "../../storage/cartStorage";

export default function Product() {
  const navigation = useNavigation<AppNavigationProps>();
  const { params } = useRoute();
  const { image, title, description, price, type } = params as ProductProps;

  const [sizeSelected, setSizeSelected] = useState(0);
  const [amount, setAmount] = useState(0);

  function selectSize(selectValue: number) {
    setSizeSelected(selectValue);
  }

  function selectAmount(amountSelected: number) {
    setAmount(amountSelected);
  }

  async function handleAddToCart(item: CartProps) {
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
          <Image source={smoke} style={styles.smoke} resizeMode="contain" />
        </View>
        <Image source={cup} style={styles.cup} />
      </View>

      <View style={styles.footer}>
        <Text style={[FONT.textSm, styles.footerText]}>
          Selecione o tamanho:
        </Text>

        <Select onSelect={selectSize} />

        <View style={styles.addCoffee}>
          <Amount onChange={selectAmount} />

          <Button
            title="ADICIONAR"
            disabled={!sizeSelected || amount === 0}
            onPress={() =>
              handleAddToCart({
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
