import { ArrowLeft } from "phosphor-react-native";
import clsx from "clsx";

import { tw } from "../lib/tailwind";
import { PADDING_TOP } from "../utils/paddingTop";

import { Box } from "../components/Typograph/Box";
import { Text } from "../components/Typograph/Text";
import { Card } from "../components/Card";

export function Statistics() {
  const status = "bad";

  return (
    <Box
      className={clsx(`flex-1 pt-${PADDING_TOP}px`, {
        "bg-green-light": status === "good",
        "bg-red-light": status === "bad",
      })}
    >
      <ArrowLeft
        color={status === "bad" ? "#BF3B44" : "#639339"}
        style={tw`absolute top-${PADDING_TOP}px left-6`}
      />

      <Box className="items-center justify-center mt-11">
        <Text className="text-gray-1 font-7 text-[32px]">90,86%</Text>

        <Text className="text-sm text-gray-2 font-4">
          das refeições dentro da dieta
        </Text>
      </Box>

      <Box className="flex-1 bg-white rounded-t-[20px] mt-6 items-center py-8 px-6">
        <Text className="text-sm font-7 text-gray-1 mb-6">
          Estatísticas gerais
        </Text>

        <Card.Root className="bg-gray-6 w-full mb-3">
          <Card.Title className="text-2xl">22</Card.Title>
          <Card.Title>melhor sequência de pratos dentro da dieta</Card.Title>
        </Card.Root>

        <Card.Root className="bg-gray-6 w-full mb-3">
          <Card.Title className="text-2xl">109</Card.Title>
          <Card.Title>refeições registradas</Card.Title>
        </Card.Root>

        <Box className="flex-row items-center justify-between w-full">
          <Card.Root className="bg-green-mid w-[48%] h-[89px]">
            <Card.Title className="text-2xl">99</Card.Title>
            <Card.Title className="text-center">
              refeições dentro da dieta
            </Card.Title>
          </Card.Root>
          <Card.Root className="bg-red-mid w-[48%] h-[89px]">
            <Card.Title className="text-2xl">10</Card.Title>
            <Card.Title className="text-center">
              refeições fora da dieta
            </Card.Title>
          </Card.Root>
        </Box>
      </Box>
    </Box>
  );
}
