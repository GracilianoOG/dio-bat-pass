import { createContext, ReactNode, useEffect, useState } from "react";
import { OptionTypes } from "../types/optionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface OptionsContextProps {
  setOptions: React.Dispatch<React.SetStateAction<OptionTypes>>;
  options: OptionTypes;
}

interface OptionsProviderProps {
  children: ReactNode;
}

export const OptionsContext = createContext<OptionsContextProps | undefined>(
  undefined
);

export const OptionsProvider = ({ children }: OptionsProviderProps) => {
  const [options, setOptions] = useState<OptionTypes>({
    uppercase: true,
    lowercase: false,
    numeric: true,
    special: false,
  });

  const loadOptions = async () => {
    try {
      const jsonOptions = await AsyncStorage.getItem("bat-settings");
      const options: OptionTypes =
        jsonOptions !== null ? JSON.parse(jsonOptions) : null;
      return options;
    } catch (e) {
      console.log("Error while loading settings: ", e);
    }
  };

  const saveOptions = async (options: OptionTypes) => {
    try {
      const jsonOptions = JSON.stringify(options);
      await AsyncStorage.setItem("bat-settings", jsonOptions);
    } catch (e) {
      console.log("Error while saving settings: ", e);
    }
  };

  useEffect(() => {
    (async () => {
      const loadedOptions = await loadOptions();

      if (loadedOptions) {
        setOptions(loadedOptions);
        console.log("Loaded options from AsyncStorage");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await saveOptions(options);
      console.log("Saved options to AsyncStorage");
    })();
  }, [options]);

  return (
    <OptionsContext value={{ options, setOptions }}>{children}</OptionsContext>
  );
};
