import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, PencilSimpleLine, Trash } from "phosphor-react-native";
import { useState } from "react";
import Modal from "react-native-modal";

import { Button } from "../components/Button";
import { Box } from "../components/Typograph/Box";
import { Text } from "../components/Typograph/Text";
import { Touchable } from "../components/Typograph/Touchable";
import { tw } from "../lib/tailwind";

import { PADDING_TOP } from "../utils/paddingTop";

export function Meal() {
  const { goBack, navigate } = useNavigation();

  const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);

  return (
    <>
      <Box className="flex-1 bg-gray-5">
        <Box className={`h-[130px] pt-${PADDING_TOP}px`}>
          <Box className="flex flex-row px-6">
            <Touchable className="flex-1" onPress={goBack}>
              <ArrowLeft size={24} />
            </Touchable>

            <Box className="flex flex-1 items-center">
              <Text className="font-7 text-gray-1 text-lg">Refeição</Text>
            </Box>

            <Box className="flex-1" />
          </Box>
        </Box>
        <Box className="flex-1 flex-col items-start justify-between bg-gray-7 rounded-t-[20px] py-10 px-6">
          <Box>
            <Box className="mb-6">
              <Text className="font-7 text-xl mb-2">Sanduíche</Text>
              <Text className="font-4 text-base text-gray-2">
                Sanduíche de pão integral com atum e salada de alface e tomate.
              </Text>
            </Box>

            <Box className="mb-6">
              <Text className="font-7 text-sm mb-2">Data e hora</Text>
              <Text className="font-4 text-base text-gray-2">
                12/08/2022 às 16:00
              </Text>
            </Box>

            <Box className="flex-row items-center justify-center rounded-full bg-gray-6 h-8 max-w-[144px]">
              <Box className="h-2 w-2 bg-green-dark rounded-full mr-2"></Box>
              <Text className="font-4 text-gray-1 text-sm">
                dentro da dieta
              </Text>
            </Box>
          </Box>

          <Box className="w-full">
            <Button.Root
              className="w-full"
              onPress={() => navigate("register", { meatId: "1" })}
            >
              <Button.Icon>
                <PencilSimpleLine size={18} color="#FFF" />
              </Button.Icon>

              <Button.Title>Editar refeição</Button.Title>
            </Button.Root>

            <Box className="mb-2" />

            <Button.Root
              className="w-full bg-white border border-gray-1"
              onPress={() => setRemoveModalIsOpen(true)}
            >
              <Button.Icon>
                <Trash size={18} color="#1B1D1E" />
              </Button.Icon>

              <Button.Title className="text-gray-1">
                Excluir refeição
              </Button.Title>
            </Button.Root>
          </Box>
        </Box>
      </Box>

      <Modal
        isVisible={removeModalIsOpen}
        // onRequestClose={() => setRemoveModalIsOpen(false)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className="items-center justify-center rounded-[8px] bg-gray-7 px-5 pt-10 pb-6 max-w-[300px]">
          <Text className="text-gray-1 text-lg font-7">
            Deseja realmente excluir o
          </Text>
          <Text className="text-gray-1 text-lg font-7">
            registro da refeição?
          </Text>

          <Box className="flex-row items-center justify-between mt-8 w-full">
            <Button.Root
              className="flex-1 border border-gray-1 bg-white"
              onPress={() => setRemoveModalIsOpen(false)}
            >
              <Button.Title className="text-gray-1">Cancelar</Button.Title>
            </Button.Root>

            <Box className="w-3" />

            <Button.Root
              className="flex-1"
              onPress={() => setRemoveModalIsOpen(false)}
            >
              <Button.Title>Sim, excluir</Button.Title>
            </Button.Root>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
