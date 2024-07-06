import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FONT } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "../../routes/app.routes";

type ListCardProps = {
  title: string;
  image: any;
  description: string;
  price: number;
  type: string;
};

export default function ListCard({
  title,
  image,
  description,
  price,
  type,
}: ListCardProps) {
  const navigation = useNavigation<AppNavigationProps>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("product", {
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
        <Text style={[FONT.titleSm, styles.title]}>{title}</Text>
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
