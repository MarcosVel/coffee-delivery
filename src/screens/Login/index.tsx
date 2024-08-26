import React from "react";
import {
  Image,
  Keyboard,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/svgs/Google";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "../../routes/app.routes";

const GoogleButton = ({ onPress }) => {
  const buttonScale = useSharedValue(1);

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  function onPressIn() {
    buttonScale.value = withSpring(0.8);
  }

  function onPressOut() {
    buttonScale.value = withSpring(1);

    setTimeout(() => {
      onPress();
    }, 300);
  }

  return (
    <View style={styles.googleBtnBorder}>
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.googleBtn, buttonAnimatedStyle]}>
          <Google />
          <Text style={styles.googleText}>Login com Google</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default function Login() {
  const { navigate } = useNavigation<AppNavigationProps>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.main}>
          <Image source={Logo} style={{ marginBottom: 32 }} />

          <Text style={styles.text}>Acesse sua conta</Text>

          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={styles.login}
            activeOpacity={0.7}
            onPress={() => navigate("home")}
          >
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>

          <GoogleButton onPress={() => navigate("home")} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>Ainda não tem acesso?</Text>
          <TouchableOpacity style={styles.createAccountBtn} activeOpacity={0.6}>
            <Text style={styles.createAccountText}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
