import { Link, usePathname } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AppTabs() {
  const pathname = usePathname();

  return (
    <View style={styles.navbar}>
      <Text style={styles.brand}>Expo Starter</Text>

      <View style={styles.links}>
        <Link href="/" style={pathname === '/' ? styles.active : styles.link}>
          Home
        </Link>

        <Link href={"/explore" as any} style={styles.link}>
          Explore
        </Link>

        <Link href={"/docs" as any} style={styles.link}>
          Docs ↗
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#202124',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brand: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  links: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  link: {
    color: '#dddddd',
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textDecorationLine: 'none',
  },

  active: {
    backgroundColor: '#343638',
    borderRadius: 20,
    color: '#ffffff',
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textDecorationLine: 'none',
  },
});