import { Trash } from "phosphor-react-native";
import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, FONT } from "../../styles/theme";
import Amount from "../Amount";
import IconButton from "../IconButton";
import { styles } from "./styles";

export default function CartItem() {
  return (
    <View style={styles.container}>
      <Image
        //  source={}
        style={styles.image}
      />

      <View style={{ flex: 1 }}>
        <View style={styles.spaceBetween}>
          <Text style={[FONT.textMd, styles.title]}>Irlandes</Text>
          <Text style={[FONT.titleSm, styles.title]}>{"RS 9,90"}</Text>
        </View>

        <Text style={[FONT.textSm, styles.ml]}>{"227ml"}</Text>

        <View style={styles.amount}>
          <Amount border />

          <IconButton hasBgColor onPress={() => console.log("click")}>
            <Trash color={COLORS.PURPLE} size={20} />
          </IconButton>
        </View>
      </View>
    </View>
  );
}
