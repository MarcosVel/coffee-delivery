import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import { CartProps, ProductProps } from "../../@types/typesDTO";
import cup from "../../assets/images/cup.png";
import { Amount, Button } from "../../components";
import { AppNavigationProps } from "../../routes/app.routes";
import { cartAdd } from "../../storage/cartStorage";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Product() {
  const navigation = useNavigation<AppNavigationProps>();
  const { params } = useRoute();
  const { id, image, title, description, price, type } = params as ProductProps;

  const [amount, setAmount] = useState(1);

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

        <Text style={[FONT.titleLg, styles.title]}>{title}</Text>

        <Text style={[FONT.textMd, styles.description]}>{description}</Text>

        <Image source={cup} style={styles.cup} />
      </View>

      <View style={styles.footer}>
        <View style={styles.flex}>
          <Text style={styles.value}>Valor:</Text>
          <Text style={[FONT.titleXl, { color: COLORS.GRAY_200 }]}>
            R$ 9,90
          </Text>
        </View>

        <View style={styles.addCoffee}>
          <Amount hasMinimum defaultValue={amount} onChange={selectAmount} />

          <Button
            title="ADICIONAR"
            onPress={() =>
              handleAddToCart({
                id,
                image,
                title,
                price,
                amount,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
