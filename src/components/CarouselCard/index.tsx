import React, { useRef } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { carousel } from "../../data/carousel";
import { FONT } from "../../styles/theme";
import { CARD_WIDTH, LIST_GAP, styles } from "./styles";

const { width } = Dimensions.get("window");

export default function CarouselCard() {
  const flatListRef = useRef(null);
  const itemWidth = CARD_WIDTH + LIST_GAP;
  const snapOffset = (width - itemWidth) / 2;

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor((offsetX + snapOffset) / itemWidth);
    flatListRef.current.scrollToIndex({
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
      onScrollEndDrag={handleScroll}
      snapToInterval={itemWidth}
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
}
