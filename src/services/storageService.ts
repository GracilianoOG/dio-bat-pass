import AsyncStorage from "@react-native-async-storage/async-storage";
import { OptionTypes } from "../types/optionTypes";

export const loadOptions = async () => {
  try {
    const jsonOptions = await AsyncStorage.getItem("bat-settings");
    const options: OptionTypes =
      jsonOptions !== null ? JSON.parse(jsonOptions) : null;
    return options;
  } catch (e) {
    console.log("Error while loading settings: ", e);
  }
};

export const saveOptions = async (options: OptionTypes) => {
  try {
    const jsonOptions = JSON.stringify(options);
    await AsyncStorage.setItem("bat-settings", jsonOptions);
  } catch (e) {
    console.log("Error while saving settings: ", e);
  }
};
