import React, { useRef } from "react";
import {
  Keyboard,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  Easing,
  Extrapolation,
  FadeInDown,
  interpolate,
  interpolateColor,
  runOnJS,
  SlideInDown,
  SlideInRight,
  SlideInUp,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CarouselCard, Header, Input, ListCard } from "../../components";
import { coffees } from "../../data/coffees";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

const AnimatedFilter = Animated.createAnimatedComponent(TouchableOpacity);

export default function Home() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  const scrollY = useSharedValue(0);

  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const sectionRefs = useRef([]);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.measureLayout(scrollViewRef.current, (x, y) => {
      scrollViewRef.current?.scrollTo({
        x: 0,
        y: y - 208,
        animated: true,
      });
    });
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const fixedHeaderStyle = useAnimatedStyle(() => {
    return {
      top: interpolate(scrollY.value, [1, 400], [0, -10], Extrapolation.CLAMP),
      backgroundColor: interpolateColor(
        scrollY.value,
        [1, 400],
        [COLORS.GRAY_100, COLORS.GRAY_900]
      ),
    };
  });

  const fixedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [1, 400],
        [COLORS.WHITE, COLORS.GRAY_100]
      ),
    };
  });

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [1, 600],
        [COLORS.GRAY_100, COLORS.GRAY_900]
      ),
    };
  });

  const fixedFilterStyle = useAnimatedStyle(() => {
    return {
      display: scrollY.value <= 460 ? "none" : "flex",
      position: "absolute",
      width: "100%",
      top: 118,
      zIndex: 99,
    };
  });

  const filterOpacityStyles = useAnimatedStyle(() => {
    return {
      opacity: scrollY.value <= 460 ? 1 : 0,
    };
  });

  const filterAnimatedStyles = (inputRange: [number, number, number]) => {
    const animatedFilterStyles = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(scrollY.value, inputRange, [
          "transparent",
          COLORS.PURPLE,
          "transparent",
        ]),
      };
    });

    return animatedFilterStyles;
  };

  const filterTextAnimatedStyles = (inputRange: [number, number, number]) => {
    const animatedTextFilterStyle = useAnimatedStyle(() => {
      return {
        color: interpolateColor(scrollY.value, inputRange, [
          COLORS.PURPLE_DARK,
          COLORS.WHITE,
          COLORS.PURPLE_DARK,
        ]),
      };
    });

    return animatedTextFilterStyle;
  };

  const setLightStatusBar = () => StatusBar.setBarStyle("light-content", true);
  const setDarkStatusBar = () => StatusBar.setBarStyle("dark-content", true);

  useAnimatedReaction(
    () => scrollY.value,
    () => {
      if (scrollY.value < 200) {
        return runOnJS(setLightStatusBar)();
      }

      return runOnJS(setDarkStatusBar)();
    }
  );

  const CoffeeFilter = ({ fixed }: { fixed?: boolean }) => (
    <Animated.View
      style={[
        styles.listFilter,
        fixed ? fixedFilterStyle : filterOpacityStyles,
      ]}
    >
      <Text style={[FONT.titleSm, styles.filterHeaderTitle]}>Nossos cafés</Text>
      <View style={styles.filters}>
        <AnimatedFilter
          style={[styles.filterOption, filterAnimatedStyles([1, 460, 1312])]}
          activeOpacity={0.5}
          onPress={() => scrollToSection(0)}
        >
          <Animated.Text
            style={[FONT.tag, filterTextAnimatedStyles([1, 460, 1312])]}
          >
            TRADICIONAIS
          </Animated.Text>
        </AnimatedFilter>
        <AnimatedFilter
          style={[styles.filterOption, filterAnimatedStyles([460, 1312, 1857])]}
          activeOpacity={0.5}
          onPress={() => scrollToSection(1)}
        >
          <Animated.Text
            style={[FONT.tag, filterTextAnimatedStyles([460, 1312, 1857])]}
          >
            DOCES
          </Animated.Text>
        </AnimatedFilter>
        <AnimatedFilter
          style={[
            styles.filterOption,
            filterAnimatedStyles([1312, 1857, 3000]),
          ]}
          activeOpacity={0.5}
          onPress={() => scrollToSection(2)}
        >
          <Animated.Text
            style={[FONT.tag, filterTextAnimatedStyles([1312, 1857, 3000])]}
          >
            ESPECIAIS
          </Animated.Text>
        </AnimatedFilter>
      </View>
    </Animated.View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header animatedStyles={fixedHeaderStyle} textStyle={fixedTextStyle} />
      <CoffeeFilter fixed />

      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => Keyboard.dismiss()}
        >
          <View>
            <Animated.View
              entering={SlideInUp.duration(1000)}
              style={[
                styles.header,
                { paddingTop: statusBarHeight + 76 },
                animatedBackgroundStyle,
              ]}
            >
              <Animated.View entering={FadeInDown.delay(900)}>
                <Text style={[FONT.titleMd, styles.title]}>
                  {"Encontre o café perfeito para\nqualquer hora do dia"}
                </Text>

                <View>
                  <Input />
                </View>
              </Animated.View>
            </Animated.View>

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
                <CoffeeFilter />

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
          </View>
        </TouchableWithoutFeedback>
      </Animated.ScrollView>
    </View>
  );
}
