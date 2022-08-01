import React, { useContext, useState } from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { 
  AccountBackground, 
  AuthButton,
  AccountContainer,
  AuthTextInput } 
  from "../components/account.styles";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { register, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountContainer>
        <AuthTextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          onChangeText={u => setEmail(u)}
        />
        <AuthTextInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          onChangeText={u => setPassword(u)}
        />
        <AuthTextInput
          label="Repeat password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          onChangeText={u => setRepeatedPassword(u)}
        />
        {error && (
           <Spacer size="large">
             <Text variant="error">{error}</Text>
           </Spacer>
         )}
        <Spacer size="large">
          <AuthButton
            icon="account" 
            mode="contained"
            onPress={() => register(email, password, repeatedPassword)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};