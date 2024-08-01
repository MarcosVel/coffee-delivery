import { Audio } from "expo-av";

async function playAudio(success: boolean) {
  const file = success
    ? require("../assets/audios/correct.mp3")
    : require("../assets/audios/wrong.mp3");

  const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

  await sound.setPositionAsync(0);
  await sound.playAsync();
}

export { playAudio };
