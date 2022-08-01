import React from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AccountBackground, AuthButton } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Text variant="title">Meals To Go</Text>
      <Spacer size="large">
        <AuthButton 
          icon="account" 
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
      </Spacer>
      <Spacer size="medium">
        <AuthButton 
          icon="account" 
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          >
          Register
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};