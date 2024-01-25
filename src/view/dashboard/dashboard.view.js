import {
  Flex,
  Text,
  View,
  Button,
  VStack,
  HStack,
  Box,
  Stack,
} from "native-base";
import { useState } from "react";

export default function Dashboard() {
  const [escala, setEscala] = useState("");

  const handleEscolhaEscala = (escala) => {
    setEscala(escala);
  };

  const notas = ["C", "D", "E", "F", "G", "A", "B"];

  return (
    <View className="h-screen flex bg-white items-center p-10 justify-center">
      <VStack className="w-full items-center gap-3">
        <HStack className="w-full rounded-3xl bg-gray-100 justify-center p-5">
          <Text>Selecione a escala:</Text>
        </HStack>
        <Stack className="mb-10 mt-6 flex-row gap-3">
          <Button
            onPress={() => handleEscolhaEscala("maior")}
            bgColor={escala === "maior" ? "#f2bc3e" : null}
            minHeight={140}
          >
            MAIOR
          </Button>
          <Button
            onPress={() => handleEscolhaEscala("maior")}
            bgColor={escala === "maior" ? "#f2bc3e" : null}
            minHeight={140}
          >
            MENOR
          </Button>
        </Stack>
        <Box className="w-full flex-row bg-slate-400">
          <Button
            onPress={() => handleEscolhaEscala("maior")}
            bgColor={escala === "maior" ? "#f2bc3e" : null}
            minHeight={140}
          >
            MAIOR
          </Button>
          <Button
            className="w-full m-2 rounded-3xl"
            onPress={() => handleEscolhaEscala("menor")}
            bgColor={escala === "menor" ? "#f2bc3e" : null}
            minHeight={140}
          >
            MENOR
          </Button>
        </Box>
      </VStack>
    </View>
  );
}
