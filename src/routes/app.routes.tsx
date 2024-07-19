import { useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Cart, Confirmation, Home, Product } from "../screens";
import { COLORS } from "../styles/theme";

type AppRoutes = {
  home: undefined;
  confirmation: undefined;
  cart: undefined;
  product: {
    id: string;
    image: number;
    title: string;
    description: string;
    price: number;
    type: string;
  };
};

export type AppNavigationProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  const navigation = useNavigation();

  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="confirmation" component={Confirmation} />
      </Group>
      <Screen
        name="cart"
        component={Cart}
        options={{
          headerTitle: "Carrinho",
          headerTitleStyle: {
            fontSize: 16,
            color: COLORS.GRAY_200,
            fontFamily: "Baloo2_700Bold",
          },
          headerStyle: {
            backgroundColor: COLORS.GRAY_900,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 12 }}
            >
              <ArrowLeft size={24} color={COLORS.GRAY_100} />
            </TouchableOpacity>
          ),
        }}
      />
      <Screen
        name="product"
        component={Product}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.GRAY_100,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 12 }}
            >
              <ArrowLeft size={24} color={COLORS.WHITE} />
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}
