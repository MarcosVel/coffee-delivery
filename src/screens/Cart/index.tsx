import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { CartProps } from "../../@types/typesDTO";
import { Button, CartItem, Loading } from "../../components";
import { cartGetAll } from "../../storage/cartStorage";
import { styles } from "./styles";
import { COLORS, FONT } from "../../styles/theme";

export default function Cart() {
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

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <CartItem
            image={item.image}
            title={item.title}
            price={item.price}
            sizeSelected={item.sizeSelected}
            amount={item.amount}
          />
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

        <Button title="Confirmar pedido" variant="yellow" />
      </View>
    </SafeAreaView>
  );
}
