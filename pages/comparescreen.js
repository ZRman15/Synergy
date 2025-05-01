import React from 'react';
import { SafeAreaView } from 'react-native';
import CarCardContainer from '../components/CarCardContainer';

const CompareScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <CarCardContainer
      customStyles={{
        container: { backgroundColor: '#e6f7ff' }
      }} 
    />
  </SafeAreaView>
);

export default CompareScreen;