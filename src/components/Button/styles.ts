import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface ContainerProps extends TouchableOpacityProps {
  color?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ color }) => color};
  width: 200px;
  height: 45px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 18px;
  font-weight: bold;
  font-family: "Poppins-SemiBold";
`;
