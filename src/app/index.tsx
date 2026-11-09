import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* NAVBAR */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>Expo Starter</Text>

        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.navText}>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.navText}>Docs ↗</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>Campus Connect</Text>

        <Text style={styles.description}>
          One campus. Connected students.
          {"\n"}
          Welcome to the Week 1 project foundation.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  navbar: {
    height: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
  },

  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  navText: {
    fontSize: 14,
    color: "#334155",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },

  description: {
    fontSize: 12,
    color: "#000000",
    textAlign: "center",
    lineHeight: 16,
  },
});