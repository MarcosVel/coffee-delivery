import React, { RefObject, useRef } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  SectionList,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  Easing,
  FadeInDown,
  SlideInDown,
  SlideInRight,
  SlideInUp,
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import coffee from "../../assets/images/coffee.png";
import { CarouselCard, Header, Input, ListCard } from "../../components";
import { coffees } from "../../data/coffees";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Home() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const scrollViewRef = useRef<ScrollView>(null);
  const sectionRefs = useRef([]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.measureLayout(scrollViewRef.current, (x, y) => {
      scrollViewRef.current?.scrollTo({
        x: 0,
        y: y - statusBarHeight,
        animated: true,
      });
    });
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <Animated.View
          entering={SlideInUp.duration(1000)}
          style={[styles.header, { paddingTop: statusBarHeight + 20 }]}
        >
          <Header />

          <Animated.View entering={FadeInDown.delay(900)}>
            <Text style={[FONT.titleMd, styles.title]}>
              {"Encontre o café perfeito para\nqualquer hora do dia"}
            </Text>

            <View>
              <Input />

              <Image source={coffee} style={styles.coffee} />
            </View>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>

      <View style={styles.carousel}>
        <Animated.View
          entering={SlideInRight.duration(600)
            .delay(1200)
            .easing(Easing.out(Easing.ease))}
        >
          <CarouselCard />
        </Animated.View>
      </View>

      <View style={{ flexGrow: 1 }}>
        <Animated.View
          style={{ flex: 1 }}
          entering={SlideInDown.duration(800)
            .delay(1000)
            .easing(Easing.out(Easing.ease))}
        >
          <View style={styles.listFilter}>
            <Text style={[FONT.titleSm, styles.filterHeaderTitle]}>
              Nossos cafés
            </Text>
            <View style={styles.filters}>
              <TouchableOpacity
                style={styles.filterOption}
                activeOpacity={0.5}
                onPress={() => scrollToSection(0)}
              >
                <Text style={[FONT.tag, { color: COLORS.PURPLE_DARK }]}>
                  TRADICIONAIS
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterOption}
                activeOpacity={0.5}
                onPress={() => scrollToSection(1)}
              >
                <Text style={[FONT.tag, { color: COLORS.PURPLE_DARK }]}>
                  DOCES
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterOption}
                activeOpacity={0.5}
                onPress={() => scrollToSection(2)}
              >
                <Text style={[FONT.tag, { color: COLORS.PURPLE_DARK }]}>
                  ESPECIAIS
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {coffees.map((item, index) => (
            <View
              key={index}
              ref={(ref) => (sectionRefs.current[index] = ref)}
              style={styles.listContainer}
            >
              <Text style={[FONT.titleXs, styles.sectionTitle]}>
                {item.title}
              </Text>

              {item.data.map((eachCoffee) => (
                <ListCard
                  key={eachCoffee.id}
                  id={eachCoffee.id}
                  title={eachCoffee.title}
                  image={eachCoffee.image}
                  description={eachCoffee.description}
                  price={eachCoffee.price}
                  type={eachCoffee.type}
                />
              ))}
            </View>
          ))}
        </Animated.View>
      </View>
    </ScrollView>
  );
}
