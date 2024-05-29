import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import "../global.css";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
        <Text className='text-3xl text-center p-4'>Keep me
            <Text className='font-bold'> Beesy</Text> 🐝
        </Text>
        <StatusBar style="auto" />
        <Link href="/profile" className='text-blue-700'>Go to profile</Link>
    </View>
  );
}
