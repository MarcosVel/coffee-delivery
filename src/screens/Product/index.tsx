import { useRoute } from "@react-navigation/native";
import { Minus, Plus } from "phosphor-react-native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import cup from "../../assets/images/cup.png";
import { Button, Select } from "../../components";
import { COLORS, FONT } from "../../styles/theme";
import { styles } from "./styles";

type ParamsProps = {
  title: string;
  description: string;
  price: number;
  type: string;
};

export default function Product() {
  const { params } = useRoute();
  const { title, description, price, type } = params as ParamsProps;

  const [sizeSelected, setSizeSelected] = useState(0);

  function selectSize(selectValue: number) {
    setSizeSelected(selectValue);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.tag}>
          <Text style={[FONT.tag, styles.tagText]}>{type}</Text>
        </View>

        <View style={styles.info}>
          <Text style={[FONT.titleLg, styles.title]}>{title}</Text>

          <View style={styles.priceView}>
            <Text style={[FONT.textSm, styles.price]}>R$ </Text>
            <Text style={[FONT.titleXl, styles.price]}>
              {price.toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>

        <Text style={[FONT.textMd, styles.description]}>{description}</Text>

        <Image source={cup} style={styles.cup} />
      </View>

      <View style={styles.footer}>
        <Text style={[FONT.textSm, styles.footerText]}>
          Selecione o tamanho:
        </Text>

        <Select onSelect={selectSize} />

        <View style={styles.addCoffee}>
          <View style={styles.amount}>
            <TouchableOpacity style={styles.amountButton} activeOpacity={0.5}>
              <Minus color={COLORS.PURPLE} size={20} />
            </TouchableOpacity>

            <Text style={[FONT.textMd, styles.amountText]}>1</Text>

            <TouchableOpacity style={styles.amountButton} activeOpacity={0.5}>
              <Plus color={COLORS.PURPLE} size={20} />
            </TouchableOpacity>
          </View>

          <Button title="ADICIONAR" disabled={!sizeSelected} />
        </View>
      </View>
    </SafeAreaView>
  );
}
