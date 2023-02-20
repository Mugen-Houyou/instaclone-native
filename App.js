import AppLoading from 'expo-app-loading';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import * as Font from 'expo-font';

import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { Appearance } from 'react-native-web';

export default function App() {
  const [loading,setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map(font => Font.loadAsync(font) );
    const imagesToLoad = [
      require("./assets/logo.png"),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png",
    ];
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image));

    console.log(fontPromises);
    return Promise.all([...fontPromises, ...imagePromises]) ;
  }
  
  if (loading) 
    return <AppLoading // Apploading는 Splash-screen으로 대체 예정. https://docs.expo.dev/versions/latest/sdk/splash-screen/
      startAsync={preload }
      onError={console.warn} 
      onFinish={onFinish} 
    />

  const subscription = Appearance.addChangeListener(({colorScheme}) =>{
    console.log(colorScheme);
  });
  
  return <NavigationContainer>
    <LoggedOutNav />
  </NavigationContainer>
    
}
