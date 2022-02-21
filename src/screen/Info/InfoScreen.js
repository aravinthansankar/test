import { View, Text,Linking} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import React,{useState, useEffect} from 'react'



const  InfoScreen = () => {
  const route = useRoute()
 

  return (
    <View style={{flex:1}}>

      
      <View style={{flex:1, backgroundColor:'green'}}>
      <Text>{route.params.Id}</Text>

      </View>

      <View style={{flex:1, backgroundColor:'red'}}>
      <WebView
   source={{html: `<iframe width="100%" height="50%" src=${route.params.Embed_url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
   style={{marginTop: 20, backgroundColor:'green'}}
/>
      </View>
 
    </View>
  )
}
export default InfoScreen




