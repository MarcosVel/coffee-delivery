import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ProductProps } from "../../@types/typesDTO";
import { AppNavigationProps } from "../../routes/app.routes";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function ListCard({
  id,
  title,
  image,
  description,
  price,
  type,
}: ProductProps) {
  const navigation = useNavigation<AppNavigationProps>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("product", {
          id,
          image,
          title,
          description,
          price,
          type,
        })
      }
      activeOpacity={0.7}
    >
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={[FONT.titleSm, styles.title]} numberOfLines={2}>
          {title}
        </Text>
        <Text style={[FONT.textXs, styles.description]} numberOfLines={2}>
          {description}
        </Text>

        <View style={styles.priceView}>
          <Text style={[FONT.textXs, styles.price]}>R$ </Text>
          <Text style={[FONT.titleMd, styles.price]}>
            {price.toFixed(2).replace(".", ",")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
