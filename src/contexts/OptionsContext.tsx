import { createContext, ReactNode, useEffect, useState } from "react";
import { OptionTypes } from "../types/optionTypes";
import { loadOptions, saveOptions } from "../services/storageService";

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
