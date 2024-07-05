import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  align-items: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  width: 100%;
  min-height: 80%;
  margin-top: 50px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  position: absolute;
  bottom: 0;
  align-items: center;
`;
