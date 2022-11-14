import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Meal } from "../screens/Meal";
import { RegisterMeal } from "../screens/RegisterMeal";
import { Statistics } from "../screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="register" component={RegisterMeal} />
      <Screen name="statistic" component={Statistics} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
}
