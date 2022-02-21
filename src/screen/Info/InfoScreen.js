import { View, Text,Linking} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import React,{useState, useEffect} from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';



const  InfoScreen = () => {
  const route = useRoute()
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});



  return (
    <View style={{flex:1}}>

      
      <View style={{flex:1, backgroundColor:'green'}}>
      <Text>{route.params.Id}</Text>

      </View>

      <View style={{flex:1, backgroundColor:'red'}}>

     
      {/* <WebView
   source={{html: `<iframe width="100%" height="50%" originWhitelist=${route.params.Embed_url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
   style={{marginTop: 20, backgroundColor:'green'}}
/> */}
<WebView
   source={{ uri: route.params.Embed_url }}
   originWhitelist={['https://*']}
   startInLoadingState={true}
  renderLoading={() => <Text>Lodding</Text>}
/>
      </View>
 
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default InfoScreen




