import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { FONT } from "../../styles/theme";

type ListCardProps = {
  title: string;
  image: any;
  description: string;
  price: number;
};

export default function ListCard({
  title,
  image,
  description,
  price,
}: ListCardProps) {
  return (
    <View style={styles.container}>
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
    </View>
  );
}
