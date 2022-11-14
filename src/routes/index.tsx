import { NavigationContainer } from "@react-navigation/native";

import { AppRoute } from "./App.routes";

export function Route() {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
}
