import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { ProductProps } from "../../@types/typesDTO";
import { carousel } from "../../data/carousel";
import { AppNavigationProps } from "../../routes/app.routes";
import { FONT } from "../../styles/theme";
import { CARD_WIDTH, styles } from "./styles";

const { width } = Dimensions.get("window");

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

type CarouselItemProps = {
  item: ProductProps;
  index: number;
  scrollX: {
    value: number;
  };
};

const CarouselItem = ({ item, index, scrollX }: CarouselItemProps) => {
  const navigation = useNavigation<AppNavigationProps>();

  const inputRange = [(index - 1) * 120, index * 120, (index + 1) * 120];

  const scale = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            inputRange,
            [0.8, 1, 0.8],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <AnimatedButton
      style={[styles.container, scale]}
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
    >
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <View style={styles.tag}>
        <Text style={styles.tagText}>{item.type}</Text>
      </View>

      <View style={styles.info}>
        <Text style={[FONT.titleSm, styles.title]}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.priceView}>
        <Text style={styles.currency}>R$ </Text>
        <Text style={[FONT.titleMd, styles.price]}>
          {item.price.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </AnimatedButton>
  );
};

export default function CarouselCard() {
  const flatListRef = useRef<FlatList>(null);
  const itemWidth = CARD_WIDTH;
  const snapOffset = (width - itemWidth) / 2;

  const handleScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor((offsetX + snapOffset) / itemWidth);
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: snapOffset,
    });
  };

  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <Animated.FlatList
      ref={flatListRef}
      horizontal
      data={carousel}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <CarouselItem item={item} index={index} scrollX={scrollX} />
      )}
      contentContainerStyle={styles.listContainer}
      style={{ flexGrow: 0 }}
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      onScrollEndDrag={handleScrollEnd}
      snapToInterval={itemWidth}
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
}
