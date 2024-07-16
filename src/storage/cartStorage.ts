import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartProps } from "../@types/typesDTO";

const CART_COLLECTION = "@coffee_delivery:cart";

export async function cartGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CART_COLLECTION);
    const cart: CartProps[] = storage ? JSON.parse(storage) : [];

    return cart;
  } catch (error) {
    throw error;
  }
}

export async function cartAdd(newItem: CartProps) {
  try {
    const jsonValue = JSON.stringify([newItem]);
    await AsyncStorage.setItem(CART_COLLECTION, jsonValue);
  } catch (error) {
    throw error;
  }
}
