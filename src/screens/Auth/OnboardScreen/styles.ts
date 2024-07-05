import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  gap: 13px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;
