import { Flex, Text, View, Button } from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Dashboard() {
  const [escala, setEscala] = useState("");

  const handleEscolhaEscala = (escala) => {
    setEscala(escala);
  };

  const notas = ["C", "D", "E", "F", "G", "A", "B"];

  const escalasMaioresNaturais = {
    C: ["C", "D", "E", "F", "G", "A", "B", "C"],
    D: ["D", "E", "F♯", "G", "A", "B", "C♯", "D"],
    E: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E"],
    F: ["F", "G", "A", "B♭", "C", "D", "E", "F"],
    G: ["G", "A", "B", "C", "D", "E", "F♯", "G"],
    A: ["A", "B", "C♯", "D", "E", "F♯", "G♯", "A"],
    B: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯", "B"],
  };

  const escalasMenoresNaturais = {
    C: ["C", "D", "E♭", "F", "G", "A♭", "B♭", "C"],
    D: ["D", "E", "F", "G", "A", "B♭", "C", "D"],
    E: ["E", "F♯", "G", "A", "B", "C", "D", "E"],
    F: ["F", "G", "A♭", "B♭", "C", "D♭", "E♭", "F"],
    G: ["G", "A", "B♭", "C", "D", "E♭", "F", "G"],
    A: ["A", "B", "C", "D", "E", "F", "G", "A"],
    B: ["B", "C♯", "D", "E", "F♯", "G", "A", "B"],
  };

  return (
    <View style={styles.container}>
      <Text paddingBottom={5}>Escala maior ou menor?</Text>
      <Flex direction="row" w="full" marginBottom={5} style={styles.flex}>
        <Button
          onPress={() => handleEscolhaEscala("maior")}
          bgColor={escala === "maior" ? "#f2bc3e" : null}
          width={"50%"}
        >
          MAIOR
        </Button>
        <Button
          onPress={() => handleEscolhaEscala("menor")}
          bgColor={escala === "menor" ? "#f2bc3e" : null}
          width={"50%"}
        >
          MENOR
        </Button>
      </Flex>
      <Flex
        direction="row"
        w="full"
        wrap="wrap"
        style={styles.flex}
        justifyContent={"center"}
      >
        {notas.map((nota, index) => (
          <Button
            key={index}
            paddingRight={10}
            paddingLeft={10}
            maxWidth={"full"}
          >
            {nota}
          </Button>
        ))}
      </Flex>
      {/* {escala === "maior" && <Button>C</Button>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30,
    justifyContent: "center",
  },
});
