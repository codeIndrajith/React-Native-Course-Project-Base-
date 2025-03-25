import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import LandingImage from "@/assets/images/landing.png";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.contatiner}>
      <Image source={LandingImage} style={styles.image} />
      <Text>Welcome To App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
  button: {
    padding: 10,
    backgroundColor: "blue",
  },
  buttonText: {
    color: "#fff",
  },
});

export default HomeScreen;
