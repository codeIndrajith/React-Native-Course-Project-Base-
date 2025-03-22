import { Text, View, StyleSheet, Image } from "react-native";
import LandingImage from "@/assets/images/landing.png";

const HomeScreen = () => {
  return (
    <View style={styles.contatiner}>
      <Image source={LandingImage} style={styles.image} />
      <Text>Welcome To App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default HomeScreen;
