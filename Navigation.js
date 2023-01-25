import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../Screens/SplashScreen";
import WallpaperScreen from "../Screens/Home/WallpaperScreen";
import DetailedWallpaperScreen from "../Screens/Home/DetailedWallpaperScreen";

const Stack =  createStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen options={{headerShown:false}}
                name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="WallpaperScreen" component={WallpaperScreen} />
                <Stack.Screen name="DetailedWallpaperScreen" component={DetailedWallpaperScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};
export default Navigation;