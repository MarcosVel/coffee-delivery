import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { carousel } from "../../data/carousel";
import { AppNavigationProps } from "../../routes/app.routes";
import { FONT } from "../../styles/theme";
import { CARD_WIDTH, LIST_GAP, styles } from "./styles";

const { width } = Dimensions.get("window");

export default function CarouselCard() {
  const navigation = useNavigation<AppNavigationProps>();

  const flatListRef = useRef<FlatList>(null);
  const itemWidth = CARD_WIDTH + LIST_GAP;
  const snapOffset = (width - itemWidth) / 2;

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor((offsetX + snapOffset) / itemWidth);
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: snapOffset,
    });
  };

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      data={carousel}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            navigation.navigate("product", {
              id: item.id,
              image: item.image,
              title: item.title,
              description: item.description,
              price: item.price,
              type: item.type,
            })
          }
          activeOpacity={0.9}
        >
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />

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
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContainer}
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
      onScrollEndDrag={handleScroll}
      snapToInterval={itemWidth}
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
}
