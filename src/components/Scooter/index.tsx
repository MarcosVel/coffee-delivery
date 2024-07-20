import React, { useEffect } from "react";
import { Image, View } from "react-native";
import scooter from "../../assets/images/scooter.png";
import { styles } from "./styles";
import { Canvas, Path } from "@shopify/react-native-skia";
import {
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function Scooter() {
  const topMovement = useSharedValue(0);
  const middleMovement = useSharedValue(0);
  const bottomMovement = useSharedValue(0);

  const topMovementAnimated = withRepeat(
    withSpring(1, { duration: 1500 }),
    -1,
    true
  );
  const middleMovementAnimated = withDelay(
    200,
    withRepeat(withTiming(1, { duration: 1500 }), -1, true)
  );

  const bottomMovementAnimated = withRepeat(
    withSpring(1, { duration: 2000 }),
    -1,
    true
  );

  useEffect(() => {
    topMovement.value = topMovementAnimated;
    middleMovement.value = middleMovementAnimated;
    bottomMovement.value = bottomMovementAnimated;
  }, [topMovement]);

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path
          path="M102.88 41.9504C98.0743 42.2369 93.2669 42.4625 88.4583 42.6271C83.6499 42.805 78.8403 42.9269 74.0306 43.0381C69.2204 43.1313 64.41 43.2124 59.5984 43.2379C54.7871 43.2768 49.9745 43.2538 45.1606 43.1689C49.9667 42.8814 54.774 42.6553 59.5827 42.4908C64.3911 42.3131 69.2007 42.1912 74.0105 42.0812C78.8206 41.9892 83.631 41.9081 88.4426 41.8828C93.2539 41.8444 98.0665 41.8669 102.88 41.9504Z"
          color="#EBC136"
          opacity={topMovement}
        />
        <Path
          path="M64.1719 56.4291C59.3658 56.7156 54.5584 56.9412 49.7498 57.1059C44.9414 57.2839 40.1318 57.4058 35.3221 57.5168C30.5119 57.61 25.7015 57.6913 20.8899 57.7166C16.0787 57.7557 11.266 57.7327 6.45215 57.6478C11.2582 57.3601 16.0656 57.134 20.8742 56.9695C25.6826 56.7918 30.4921 56.6699 35.302 56.56C40.1121 56.468 44.9225 56.3868 49.7341 56.3617C54.5454 56.3231 59.358 56.3456 64.1719 56.4291Z"
          color="#EBC136"
          opacity={middleMovement}
        />
        <Path
          path="M80.7163 72.6327C75.9102 72.9192 71.1028 73.1449 66.2942 73.3096C61.4859 73.4875 56.6763 73.6094 51.8665 73.7205C47.0564 73.8136 42.246 73.8949 37.4344 73.9202C32.6231 73.9593 27.8105 73.9363 22.9966 73.8514C27.8027 73.5637 32.61 73.3376 37.4187 73.1732C42.227 72.9955 47.0366 72.8735 51.8464 72.7636C56.6566 72.6717 61.467 72.5904 66.2786 72.5653C71.0898 72.5267 75.9024 72.5492 80.7163 72.6327Z"
          color="#EBC136"
          opacity={bottomMovement}
        />
      </Canvas>

      <Image source={scooter} />
    </View>
  );
}
