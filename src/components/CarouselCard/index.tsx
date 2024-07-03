import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { carousel } from "../../data/carousel";
import { FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function CarouselCard() {
  return (
    <FlatList
      horizontal
      data={carousel}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={item.image} style={styles.image} />

          <View style={styles.tag}>
            <Text style={styles.tagText}>{item.type}</Text>
          </View>

          <View style={styles.info}>
            <Text style={[FONT.titleXs, styles.title]}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          <View style={styles.priceView}>
            <Text style={styles.currency}>R$ </Text>
            <Text style={[FONT.titleSm, styles.price]}>
              {item.price.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>
      )}
      contentContainerStyle={styles.listContainer}
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
