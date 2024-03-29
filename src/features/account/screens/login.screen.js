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

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(AuthenticationContext);

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
        {error && (
           <Spacer size="large">
             <Text variant="error">{error}</Text>
           </Spacer>
         )}
        <Spacer size="large">
          <AuthButton
            icon="account" 
            mode="contained"
            onPress={() => login(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};