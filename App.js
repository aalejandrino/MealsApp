import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Front from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold")
  });
};

export default function App() {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    );
  };

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};
