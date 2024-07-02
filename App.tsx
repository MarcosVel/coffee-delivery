import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Routes from "./src/routes";

export default function App() {
  const [loaded, error] = useFonts({
    Baloo2_700Bold,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Routes />;
}
