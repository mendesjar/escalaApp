import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, extendTheme } from "native-base";
import { StyleSheet } from "react-native";
import { Dashboard } from "./src/view";

export default function App() {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          solid: {
            bg: "#f8d57e",
            rounded: 'xl',
            _text: {
              fontWeight: 800,
              color: "#362f4c",
            },
            _pressed: {
              bg: "#f8d599",
            },
          },
        },
      },
    },
    colors: {
      primary: {
        500: "#f8d57e",
      },
      purple: {
        500: "#362f4c",
      },
    },
  });
  
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar />
      <Dashboard />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
