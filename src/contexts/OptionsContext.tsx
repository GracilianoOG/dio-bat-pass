import { createContext, ReactNode, useState } from "react";
import { OptionTypes } from "../types/optionTypes";

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

  return (
    <OptionsContext value={{ options, setOptions }}>{children}</OptionsContext>
  );
};
