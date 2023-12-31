import { StyleSheet } from "react-native";
import ResturantsScreen from "./src/screens/ResturantsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantsScreen />
      </ThemeProvider>
    </>
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
