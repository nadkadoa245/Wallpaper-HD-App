import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { ALLDATA } from '../../Data/DummyData';

const DetailedWallpaperScreen = (props) => {
    const CatId = props.route.params.catId;
    const MyData = ALLDATA.filter((item) => item.catId == CatId);
  return (
    <View>
        <View style={{marginHorizontal:10}}>
            <FlatList
             data={MyData}
             keyExtractor={(item, index)=> index.toString()}
             renderItem={(itemData)=>{
                 return(
                     <View
                     style={{height:675, width:"100%"}}>
                         <ImageBackground 
                         source={{uri: itemData.item.image}}
                         style={{height:"100%", width:"100%"}}
                         >
                            <View style={{flex:1, justifyContent:"center"}}>
                            <Text style={{fontWeight:"bold", color:"white", fontSize:22, textAlign:"center"}}>{itemData.item.time}</Text>
                            <Text style={{fontWeight:"bold", color:"white", fontSize:22, textAlign:"center"}}>{itemData.item.daymonth}</Text>
                            <View style={{height:45, width:"83%", backgroundColor:"white", borderRadius:19, borderWidth:0.5, borderColor:"gray", paddingHorizontal:20, marginTop:90, justifyContent:"center", marginHorizontal:28}}>
                                <Text style={{textAlign:"center", fontSize:26, fontWeight:"bold", color:"#DDC307"}}>Make it Wallpaper</Text>
                                </View>
                            </View>
                        </ImageBackground>
                     </View>
                 )
             }}
             />
        </View>
      
    </View>
  );
};

export default DetailedWallpaperScreen;
