import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
}
export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <Container color={color} {...rest}>
      <Title style={{ fontFamily: "Poppins-SemiBold" }}>{title}</Title>
    </Container>
  );
}
