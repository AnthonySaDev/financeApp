import React from "react";

import { TextInputProps } from "react-native";
import { Input } from "./styles";

interface InputProps extends TextInputProps {}
export default function TextInput({ ...rest }: InputProps) {
  return <Input {...rest} />;
}
