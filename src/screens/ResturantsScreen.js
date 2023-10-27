import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfo from "../components/ResturantInfo";
import { useFonts } from "expo-font";

const ResturantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={() => <ResturantInfo />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
export default ResturantsScreen;
