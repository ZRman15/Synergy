import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import LoadingBar from './chargerstatus';
import AsyncStorage from '@react-native-async-storage/async-storage';
import carsData from '../assets/data/carsData.json';
import { useFocusEffect } from '@react-navigation/native';
import EVMetrics from '../components/EVMetrics';
var themeColour = '#b485ff'

//  map for car images
const carImages = {
  '1': require('../assets/images/Nissan-Leaf-2.png'),
  '2': require('../assets/images/Tesla-Model-3-2.png'),
  '3': require('../assets/images/Polestar-2.png'),
  '4': require('../assets/images/Kia-EV-6-2.png'),
  '5': require('../assets/images/Hyundai-Ioniq-5-2.png'),
  '6': require('../assets/images/MG4-2.png'),
  '7': require('../assets/images/ID3-2.png'),
  '8': require('../assets/images/BMWi4-2.png')
};

const HomeScreen = () => {
  const [userName, setUserName] = useState('Zohaib');
  const [selectedCar, setSelectedCar] = useState('3'); // default car on launch
  const [carTitle, setCarTitle] = useState('Polestar 2');
  
  // loading user settings
  const loadSettings = async () => {
    try {
      const savedName = await AsyncStorage.getItem('userName');
      const savedCar = await AsyncStorage.getItem('selectedCar');
      
      if (savedName) setUserName(savedName);
      if (savedCar) {
        setSelectedCar(savedCar);
        // Find the car title from carsData
        const car = carsData.find(car => car.id === savedCar);
        if (car) setCarTitle(car.title);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };
  
  // load settings
  useEffect(() => {
    loadSettings();
  }, []);
  
  // reload settings every time the user navigates to the settings screen
  useFocusEffect(
    React.useCallback(() => {
      loadSettings();
      return () => {
        
      };
    }, [])
  );
  
      {/*main view*/}
  return (
    <SafeAreaView contentContainerStyle={styles.container}>
    <ScrollView style={styles.scroll}>

      // Main car card
      <Card style={styles.card}>
        <Card.Content>
        <View style={styles.cardContent}>
          <Title style={styles.title}>{userName}'s {carTitle}</Title>
          <Image
          source={carImages[selectedCar]}
          style={{ alignSelf: 'center', width: '100%', height: 250, paddingTop: -20, paddingBottom:-50 }} 
          resizeMode="contain"
          />
          
          <Paragraph style={styles.stats}> Fully Charged in 25m 30s</Paragraph>
          <Paragraph style={styles.stats}> Est. Range = 128 Miles </Paragraph>
           </View>
           <LoadingBar progress={52} color="purple" chargingSpeed="50 kW/h" />
        </Card.Content>
      </Card>
        //savings card 
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.subtitle}>Savings</Title>
          <Paragraph style={styles.paragraph}>You've saved £54.2 this month while using Synergy!</Paragraph>

        </Card.Content>
      </Card>
        //EV metrics card 
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.subtitle}>Your Metrics (25 Apr - 30 Apr)</Title>
          <EVMetrics 
            energyUsed="56 kWh"
            chargingCost="£2.57"
            chargingTime="2h 15m"
            distance="187 mi"
          />
        </Card.Content>
      </Card>
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:themeColour,
    height: '100%'
  },
  scroll: {
    padding: 15,
    backgroundColor:themeColour,
    height:'100%'
  
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF', 
    borderRadius: 25,         
    padding: 10,
    borderWidth:'2',
    borderColor:'#000000'
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-evenly', 
    alignItems: 'center',           
  },
  title:{
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Proxima-Extra'
  },
  paragraph:{
    fontSize:16,
    textAlign: 'left',
    fontFamily:'Proxima',
    fontWeight:'bold'
  },
  subtitle:{
    fontSize:22,
    textAlign: 'left',
    fontFamily: 'Proxima-Bold'
  },
  stats:{
    fontSize: 18,
    textAlign:'center',
    fontFamily:'Proxima-Bold',
    paddingTop: 10
  }

});
export default HomeScreen;