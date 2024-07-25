import { useNavigation } from "@react-navigation/native";
import { Trash } from "phosphor-react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Animated, {
  LinearTransition,
  SlideInUp,
  SlideOutLeft,
} from "react-native-reanimated";
import { CartProps } from "../../@types/typesDTO";
import { Button, CartItem, Loading } from "../../components";
import { AppNavigationProps } from "../../routes/app.routes";
import { cartGetAll, cartRemove } from "../../storage/cartStorage";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

export default function Cart() {
  const { navigate } = useNavigation<AppNavigationProps>();
  const swipeableRefs = useRef<Swipeable[]>([]);

  const [cart, setCart] = useState<CartProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  async function fetchHistory() {
    const response = await cartGetAll();

    const totalPrice = response
      .map((item) => item.price * item.amount)
      .reduce((acc, item) => acc + item, 0);

    setCart(response);
    setTotalPrice(totalPrice);
    setIsLoading(false);
  }

  async function removeFromCart(id: string) {
    swipeableRefs.current?.[Number(id)].close();

    setTimeout(async () => {
      await cartRemove(id);
      fetchHistory();
    }, 500);
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
        itemLayoutAnimation={LinearTransition.springify()}
        renderItem={({ item }) => (
          <Animated.View entering={SlideInUp} exiting={SlideOutLeft}>
            <Swipeable
              ref={(ref) => {
                if (ref) {
                  swipeableRefs.current[Number(item.id)] = ref;
                }
              }}
              overshootLeft={false}
              renderLeftActions={() => (
                <TouchableOpacity
                  style={styles.trash}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Trash color={COLORS.RED_DARK} size={28} />
                </TouchableOpacity>
              )}
            >
              <CartItem
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                sizeSelected={item.sizeSelected}
                amount={item.amount}
              />
            </Swipeable>
          </Animated.View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.flex}>
          <Text style={[FONT.textMd, { color: COLORS.GRAY_200 }]}>
            Valor total
          </Text>
          <Text style={[FONT.titleMd, { color: COLORS.GRAY_200 }]}>
            R$ {totalPrice.toFixed(2).replace(".", ",")}
          </Text>
        </View>

        <Button
          title="Confirmar pedido"
          variant="yellow"
          onPress={() => navigate("confirmation")}
        />
      </View>
    </SafeAreaView>
  );
}
