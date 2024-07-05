import React from "react";
import { ViewProps } from "react-native";
import Text from "../Text";
import { Container, Content } from "./styles";

interface ScreenProps extends ViewProps {
  title: string;
  children: React.ReactNode;
}
export default function Screen({ children, title, ...rest }: ScreenProps) {
  return (
    <Container {...rest}>
      <Text preset="title" style={{ marginTop: 70, fontSize: 30 }}>
        {title}
      </Text>
      <Content>{children}</Content>
    </Container>
  );
}
