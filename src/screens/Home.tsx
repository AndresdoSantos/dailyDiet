import { Image, ScrollView } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ArrowUpRight, Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { tw } from "../lib/tailwind";

import { Box } from "../components/Typograph/Box";
import { Text } from "../components/Typograph/Text";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Food } from "../components/Food";

type Data = {
  time: string;
  name: string;
  type: "bad" | "good";
};

const PADDING_TOP = parseInt(String(getStatusBarHeight()), 10) + 30;

const DATA: Data[] = [
  {
    time: "20:00",
    name: "X-tudo",
    type: "bad",
  },
  {
    time: "12:30",
    name: "Whey protein com leite",
    type: "good",
  },
  {
    time: "09:00",
    name: "Pão com ovo",
    type: "good",
  },
  {
    time: "08:00",
    name: "Vitamina com banana",
    type: "good",
  },
  {
    time: "07:32",
    name: "250ml de água",
    type: "good",
  },
];

export function Home() {
  const { navigate } = useNavigation();

  return (
    <Box className={`flex-1 bg-gray-7 px-6 pt-${PADDING_TOP}px`}>
      <Box className="flex-row items-center justify-between">
        <Image source={require("../assets/logo.png")} />
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/71148901?v=4",
          }}
          style={tw`w-10 h-10 rounded-full border-2 border-gray-2`}
        />
      </Box>
      <Card.Root className="bg-green-light mt-9 mb-10 h-[102px]">
        <ArrowUpRight
          size={24}
          color="#639339"
          style={tw`absolute right-2 top-2`}
        />

        <Card.Title className="text-[32px]">90,86%</Card.Title>
        <Card.Description>das refeições dentro da dieta</Card.Description>
      </Card.Root>
      <Text className="font-4 text-gray-1 text-base">Refeições</Text>
      <Button.Root className="mt-2" onPress={() => navigate("register")}>
        <Button.Icon>
          <Plus color="#FFF" size={18} weight="bold" />
        </Button.Icon>

        <Button.Title>Nova refeição</Button.Title>
      </Button.Root>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="font-7 text-lg mt-8">12.08.22</Text>

        {DATA.map((item) => (
          <Food.Root key={item.name} onPress={() => navigate('meal')}>
            <Food.Content>
              <Food.Time>{item.time}</Food.Time>
              <Food.Separator />
              <Food.Name>{item.name}</Food.Name>
            </Food.Content>

            <Food.Type type={item.type} />
          </Food.Root>
        ))}

        <Text className="font-7 text-lg mt-8">11.08.22</Text>

        {DATA.map((item) => (
          <Food.Root key={item.name}>
            <Food.Content>
              <Food.Time>{item.time}</Food.Time>
              <Food.Separator />
              <Food.Name>{item.name}</Food.Name>
            </Food.Content>

            <Food.Type type={item.type} />
          </Food.Root>
        ))}
      </ScrollView>
    </Box>
  );
}
