import { View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

export default function GroupTripScreen() {
  return (
    <View>
     <Link style={styles.button} href="./solotrip" asChild>
      <Pressable>
        <Text style={styles.text}>Solo Trip</Text>
      </Pressable>
    </Link>
    <Link style={styles.button} href="./grouptrip" asChild>
      <Pressable>
        <Text style={styles.text}>Group Trip</Text>
      </Pressable>
    </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});