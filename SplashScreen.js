import React,{useEffect} from 'react';
import { View, Text, Image } from 'react-native';

const SplashScreen = (props) => {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.replace("WallpaperScreen");
        }, 3000);
    }, []);
  return (
    <View style={{height:"100%", width:"100%", backgroundColor:"#0745DD", justifyContent:"center", alignItems:"center"}}>
        <Image
        style={{height:290, width:350}}
        source={require("../assets/Images/ahsan.png")}
        />
        <Text style={{fontSize:39, color:"#DDC307", fontWeight:"bold"}}>MY WALLPAPER</Text>
        <View style={{height:65, width:"82%", backgroundColor:"white", borderRadius:29, borderWidth:0.5, borderColor:"gray", paddingHorizontal:20, marginTop:90, justifyContent:"center"}}>
            <Text style={{textAlign:"center", fontSize:26, fontWeight:"bold", color:"#DDC307"}}>GET STARTED</Text>
        </View>
    </View>
  );
};

export default SplashScreen;
