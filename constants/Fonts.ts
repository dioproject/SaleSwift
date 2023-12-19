import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useFonts = async () => {
  const [loadAsyncFonts, setLoadAsyncFonts] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "poppins-semiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      });
      setLoadAsyncFonts(true);
    })();
  }, []);

  return loadAsyncFonts;
};