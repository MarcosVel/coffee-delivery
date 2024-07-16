import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { CartProps } from "../../@types/typesDTO";
import { CartItem, Loading } from "../../components";
import { cartGetAll } from "../../storage/cartStorage";
import { styles } from "./styles";

export default function Cart() {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchHistory() {
    const response = await cartGetAll();
    setCart(response);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log("cart", cart);

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
    </SafeAreaView>
  );
}
