import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import WallpaperScreen from './Screens/Home/WallpaperScreen';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Navigation/>
  );
}