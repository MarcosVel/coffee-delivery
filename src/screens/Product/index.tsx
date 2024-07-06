import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";
import cup from "../../assets/images/cup.png";

type ParamsProps = {
  title: string;
  description: string;
  price: number;
  type: string;
};

export default function Product() {
  const { params } = useRoute();
  const { title, description, price, type } = params as ParamsProps;

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

        <Image source={cup} style={styles.cup} />
      </View>

      <View style={styles.footer}>
        <Text style={[FONT.textSm, styles.footerText]}>
          Selecione o tamanho:
        </Text>
      </View>
    </SafeAreaView>
  );
}
