import { Flex, Text, View, Button, VStack, HStack, Stack } from "native-base";
import { useState } from "react";
import {
  escalasMaioresNaturais,
  escalasMenoresNaturais,
} from "../../resources";

export default function Dashboard() {
  const [escala, setEscala] = useState("");
  const [notaSelected, setNotaSelected] = useState("C");

  const handleEscolhaEscala = (escala) => {
    setEscala(escala);
  };

  const notas = ["C", "D", "E", "F", "G", "A", "B"];

  return (
    <View className="h-screen flex bg-white items-center p-10 justify-center">
      <VStack className="w-full items-center">
        <HStack className="w-full rounded-[20rem] bg-gray-100 justify-center p-5 m-2">
          <Text>Selecione a Escala</Text>
        </HStack>
        <Stack className="flex-row">
          <Flex className="w-1/2 p-2">
            <Button
              className="rounded-[20rem]"
              onPress={() => handleEscolhaEscala("maior")}
              bgColor={escala === "maior" ? "#f2bc3e" : null}
              minHeight={140}
            >
              MAIOR
            </Button>
          </Flex>
          <Flex className="w-1/2 p-2">
            <Button
              className="rounded-[20rem]"
              onPress={() => handleEscolhaEscala("menor")}
              bgColor={escala === "menor" ? "#f2bc3e" : null}
              minHeight={140}
            >
              MENOR
            </Button>
          </Flex>
        </Stack>
        <HStack className="w-full rounded-[20rem] bg-gray-100 justify-center p-5 m-2">
          <Text>Selecione a Nota</Text>
        </HStack>
        <Stack className="w-full flex-row flex-wrap justify-center">
          {notas.map((nota, index) => (
            <Button
              key={index}
              className="max-w-full px-8 m-2"
              bgColor={notaSelected === nota ? "#f2bc3e" : null}
              onPress={() => setNotaSelected(nota)}
            >
              {nota}
            </Button>
          ))}
        </Stack>
        <HStack className="w-full items-center justify-center m-2 px-8 py-5 rounded-[20rem] bg-[#f8d57e] border-2 border-[#f2bc3e]">
          {escala === "maior" && notaSelected
            ? escalasMaioresNaturais[notaSelected].map((item) => {
                return (
                  <Text bold fontSize="xl" className="mx-1 text-orange-950">
                    {item}
                  </Text>
                );
              })
            : escalasMenoresNaturais[notaSelected].map((item) => {
                return (
                  <Text bold fontSize="xl" className="mx-1 text-orange-950">
                    {item}
                  </Text>
                );
              })}
        </HStack>
      </VStack>
    </View>
  );
}
