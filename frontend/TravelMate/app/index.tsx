import { View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

export default function Page() {
  return (
    <View>
     <Link style={styles.button} href="./travel/traveloptions" asChild>
      <Pressable>
        <Text>Home</Text>
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
    color:'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});