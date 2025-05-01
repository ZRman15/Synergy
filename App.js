import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BarIndicator } from 'react-native-indicators';
import HomeScreen from './pages/homescreen';
import MapScreen from './pages/mapscreen';
import CompareScreen from './pages/comparescreen';
import SettingsScreen from './pages/settings';
import * as Font from 'expo-font';

const MyTheme = {
  colors: {
    card: 'rgba(0, 0, 0, 0.85)',
    text: 'rgb(255, 255, 255)',
    border:'rgba(0, 0, 0, 0.85)',
  },
};



const Tab = createBottomTabNavigator();



// load fonts
const loadFonts = async () => {
  await Font.loadAsync({
    'Proxima': require('./assets/font/Proxima.otf'),
    'Proxima-Bold': require('./assets/font/Proxima-Bold.otf'),
    'Proxima-Extra': require('./assets/font/Proxima-Extra.otf')
  });
};


const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black',  }}>
    // app icon on splash screen
    <Image
      source={require('./assets/icon/icon.png')}
      style={{ width: 300, height: 300, marginTop: 200  }}
      resizeMode="contain"
    />
    //loading indicator
    <BarIndicator color="#b485ff" size='70' count4 style={{marginBottom: 50, marginTop:-40}} />
    <Text style={{ color: 'white', marginBottom:20, fontFamily: 'Proxima-Extra', fontSize: '36', fontWeight:'bold'  }}>Synergy</Text>
    <Text style={{ color: 'white', fontSize: '20', fontFamily: 'Proxima-Bold', marginBottom: 190}}> Your Electric Car Companion</Text>
  </View>
);



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

useEffect(() => {
    //set loading state after fonts are loaded
    const prepare = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn('Error loading fonts:', e);
      } finally {
        // complete splash screen timer
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      }
    };
    
    prepare();
  }, []);

  if (isLoading || !fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Charger Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Compare') {
              iconName = focused ? 'car' : 'car-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog-outline';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
                marginTop={5}
              />
            );
          },
          tabBarStyle: { backgroundColor:'rgba(0, 0, 0, 0.85)' },
          tabBarActiveTintColor: '#b485ff',
          tabBarInactiveTintColor: 'gray',

          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Proxima-Bold',
          },  
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Charger Map" component={MapScreen} />
        <Tab.Screen name="Compare" component={CompareScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

