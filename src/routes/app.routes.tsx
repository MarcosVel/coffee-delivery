import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Cart, Confirmation, Home, Product } from "../screens";
import { ArrowLeft } from "phosphor-react-native";
import { COLORS } from "../styles/theme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type AppRoutes = {
  home: undefined;
  confirmation: undefined;
  cart: undefined;
  product: {
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
        options={{ headerTitle: "Carrinho" }}
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
