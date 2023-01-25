import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {DATA} from "../../Data/DummyData";

const WallpaperScreen = (props) => {
  return (
    <View style={{flex:1, bacgroundColor:"white"}}>
        <View style={{marginHorizontal:5}}>
            <FlatList
            numColumns={2}
            data={DATA}
            keyExtractor={(item, index)=> index.toString()}
            renderItem={(itemData)=>{
                return(
                    <TouchableOpacity 
                    onPress={()=>{
                        props.navigation.navigate("DetailedWallpaperScreen",{
                            catId: itemData.item.id,
                        });
                    }}
                    style={{height:310, width:"45%", margin:10}}>
                        <Image
                        borderRadius={10}
                        style={{flex:1}}
                        source={{uri: itemData.item.image}}
                        />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
      
    </View>
  );
};

export default WallpaperScreen;
