import { ArrowLeft } from "phosphor-react-native";
import clsx from "clsx";
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { PADDING_TOP } from "../utils/paddingTop";

import { Box } from "../components/Typograph/Box";
import { Text } from "../components/Typograph/Text";

import { Input } from "../components/Input/Input";
import { Touchable } from "../components/Typograph/Touchable";
import { Button } from "../components/Button";

export function RegisterMeal() {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute() as { params: { meatId: string } };

  /* 
    If params
      - Load item by id
      - Push data to form
      - Change button name
  */

  const [insideTheDiet, setInsideTheDiet] = useState<boolean | undefined>(
    undefined
  );

  const [meatIsRegister, setMeatIsRegister] = useState(false);

  return meatIsRegister ? (
    <Box className="flex-1 bg-white">
      <Box className="flex-col items-center justify-center mt-[130px]">
        <Text
          className={clsx("font-7 text-2xl mb-2", {
            "text-green-dark": insideTheDiet,
            "text-red-dark": insideTheDiet === false,
          })}
        >
          {insideTheDiet ? "Continue assim!" : "Que pena!"}
        </Text>

        {insideTheDiet ? (
          <Box className="flex-row items-center mb-10">
            <Text className="text-gray-1 font-4">Você continua</Text>
            <Text className="text-gray-1 font-7 mx-1">dentro da dieta.</Text>
            <Text className="text-gray-1 font-4">Muito bem!</Text>
          </Box>
        ) : (
          <Box className="flex-col items-center mb-10">
            <Box className="flex-row">
              <Text className="text-gray-1 font-4">Você</Text>
              <Text className="text-gray-1 font-7 mx-1">saiu da dieta</Text>
              <Text className="text-gray-1 font-4">
                dessa vez, mas continue
              </Text>
            </Box>
            <Text className="text-gray-1 font-4">
              se esforçando e não desista!
            </Text>
          </Box>
        )}

        {insideTheDiet ? (
          <Image source={require("../assets/peopleInsideDiet.png")} />
        ) : (
          <Image source={require("../assets/peopleOutsideDiet.png")} />
        )}

        <Button.Root
          className="mt-8 w-[191px]"
          onPress={() => navigate("home")}
        >
          <Button.Title>Ir para a página inicial</Button.Title>
        </Button.Root>
      </Box>
    </Box>
  ) : (
    <Box className="flex-1 bg-gray-5">
      <Box className={`h-[130px] pt-${PADDING_TOP}px`}>
        <Box className="flex flex-row px-6">
          <Touchable className="flex-1" onPress={goBack}>
            <ArrowLeft size={24} />
          </Touchable>

          <Box className="flex flex-1 items-center">
            <Text className="font-7 text-gray-1 text-lg">Nova refeição</Text>
          </Box>

          <Box className="flex-1" />
        </Box>
      </Box>

      <Box className="flex-1 flex-col items-center justify-between bg-white rounded-t-[20px] py-8 px-6">
        <Box className="w-full">
          <Input.Root>
            <Input.Label>Nome</Input.Label>
            <Input.Box />
          </Input.Root>

          <Input.Root>
            <Input.Label>Descrição</Input.Label>
            <Input.Box className="h-[120px]" />
          </Input.Root>

          <Box className="flex-row items-center justify-between">
            <Input.Root className="flex-1">
              <Input.Label>Data</Input.Label>
              <Input.Box />
            </Input.Root>

            <Box className="w-5" />

            <Input.Root className="flex-1">
              <Input.Label>Hora</Input.Label>
              <Input.Box />
            </Input.Root>
          </Box>

          <Box className="w-full">
            <Text className="font-7 text-gray-1 mb-2">
              Está dentro da dieta?
            </Text>

            <Box className="flex-row items-center justify-between">
              <Touchable
                onPress={() => setInsideTheDiet(true)}
                className={clsx(
                  "flex-row items-center justify-center rounded-[6px] h-[48px] border border-gray-6 bg-gray-6 flex-1",
                  {
                    "border-green-dark": insideTheDiet,
                    "bg-green-light": insideTheDiet,
                  }
                )}
              >
                <Box className="w-2 h-2 bg-green-dark rounded-full" />

                <Text className="font-7 text-sm ml-2">Sim</Text>
              </Touchable>

              <Box className="w-5" />

              <Touchable
                onPress={() => setInsideTheDiet(false)}
                className={clsx(
                  "flex-row items-center justify-center rounded-[6px] h-[48px] border border-gray-6 bg-gray-6 flex-1",
                  {
                    "border-red-dark": insideTheDiet === false,
                    "bg-red-light": insideTheDiet === false,
                  }
                )}
              >
                <Box className="w-2 h-2 bg-red-dark rounded-full" />

                <Text className="font-7 text-sm ml-2">Não</Text>
              </Touchable>
            </Box>
          </Box>
        </Box>

        <Button.Root className="w-full" onPress={() => setMeatIsRegister(true)}>
          <Button.Title>Cadastrar refeição</Button.Title>
        </Button.Root>
      </Box>
    </Box>
  );
}
