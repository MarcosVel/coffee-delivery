import { Trash } from "phosphor-react-native";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { CartProps } from "../../@types/typesDTO";
import { COLORS, FONT } from "../../styles/theme";
import Amount from "../Amount";
import IconButton from "../IconButton";
import { styles } from "./styles";

export default function CartItem({ image, title, price, amount }: CartProps) {
  const [amountSelected, setAmountSelected] = useState(amount);

  function selectAmount(newAmount: number) {
    setAmountSelected(newAmount);
  }

  function handlePrice() {
    let totalPrice = (amountSelected * price).toFixed(2).replace(".", ",");
    return totalPrice;
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={[FONT.textMd, styles.title]} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.spaceBetween}>
          <View style={styles.amount}>
            <Amount
              border
              onChange={selectAmount}
              defaultValue={amountSelected}
            />

            <IconButton hasBgColor onPress={() => selectAmount(0)}>
              <Trash color={COLORS.PURPLE} size={20} />
            </IconButton>
          </View>

          <Text style={[FONT.titleSm, styles.title]}>RS {handlePrice()}</Text>
        </View>
      </View>
    </View>
  );
}
