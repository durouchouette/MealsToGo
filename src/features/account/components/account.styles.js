import React from "react";
import styled from "styled-components/native";
import { Button, TextInput } from 'react-native-paper';

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthTextInput = styled(TextInput)`
   width: 300px;
 `;

 export const AnimationWrapper = styled.View`
   width: 100%;
   height: 40%;
   position: absolute;
   top: 100px;
   padding: ${(props) => props.theme.space[2]};
 `;