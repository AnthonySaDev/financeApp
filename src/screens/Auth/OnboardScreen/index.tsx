import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "../../../components/Button";
import Text from "../../../components/Text";
import theme from "../../../global/styles/theme";
import { Container, Logo, LogoContainer } from "./styles";

export function OnboardScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleForgot = () => {
    navigation.navigate("Forgot");
  };
  return (
    <Container>
      <LogoContainer>
        <Logo source={require("../../../assets/images/logo.png")} />
      </LogoContainer>
      <Text
        preset="subtext"
        style={{
          paddingHorizontal: 90,
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        Sua solução financeira na palma da sua mão.
      </Text>
      <Button
        title="Conectar"
        color={theme.colors.primaryGreen}
        onPress={handleLogin}
      />
      <Button
        title="Cadastrar-se"
        color={theme.colors.lightGreen}
        onPress={handleRegister}
      />
      <Text
        preset="subtext"
        style={{ marginTop: 20, fontFamily: "Poppins-Bold", fontSize: 10 }}
        onPress={handleForgot}
      >
        Esqueceu sua senha?
      </Text>
    </Container>
  );
}
