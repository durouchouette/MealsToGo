import React, { useContext } from "react";

import styled from "styled-components/native";

import { List, Avatar } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

// import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { logout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={100} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
           title="Favorites"
           description="View your favorites"
           left={(props) => <List.Icon {...props} color="black" icon="heart" />}
           onPress={() => navigation.navigate("Favorites")}
         />
         <SettingsItem
           title="Logout"
           left={(props) => <List.Icon {...props} color="black" icon="door" />}
           onPress={logout}
         />
       </List.Section>
    </SafeArea>
  )
};