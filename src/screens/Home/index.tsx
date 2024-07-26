import React, { useRef, useState } from "react";
import {
  Image,
  Keyboard,
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

  const sectionListRef = useRef<SectionList>(null);

  const scrollToSection = (sectionIndex: number) => {
    sectionListRef.current?.scrollToLocation({
      sectionIndex,
      itemIndex: 0,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
        > */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <Animated.View
          entering={SlideInUp.duration(1000)}
          style={[styles.header, { paddingTop: statusBarHeight }]}
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

      <View style={styles.main}>
        <Animated.View
          entering={SlideInRight.duration(600)
            .delay(1200)
            .easing(Easing.out(Easing.ease))}
        >
          <CarouselCard />
        </Animated.View>

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

          <SectionList
            ref={sectionListRef}
            sections={coffees}
            keyExtractor={(item) => item.title}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={[FONT.titleXs, styles.sectionTitle]}>{title}</Text>
            )}
            renderItem={({ item }) => (
              <ListCard
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
                type={item.type}
              />
            )}
            contentContainerStyle={styles.listContainer}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
