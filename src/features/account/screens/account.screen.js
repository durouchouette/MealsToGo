import React from "react";

import LottieView from "lottie-react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AccountBackground, AuthButton, AnimationWrapper } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />        
      </AnimationWrapper>
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