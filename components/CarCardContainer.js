import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CarCard from './CarCard';
import CarComparisonPopup from './CarComparisonPopup';
import carsData from '../assets/data/carsData.json';

// image map
const carImages = {
  'Polestar-2-2.jpg': require('../assets/images/Polestar-2-2.jpg'),
  'Nissan-Leaf.jpg': require('../assets/images/Nissan-Leaf.jpg'),
  'Tesla-Model-3.jpg': require('../assets/images/Tesla-Model-3.jpg'),
  'Kia-EV-6.jpg': require('../assets/images/Kia-EV-6.jpg'),
  'Hyundai-Ioniq-5.jpg': require('../assets/images/Hyundai-Ioniq-5.jpg'),
  'MG4.jpeg': require('../assets/images/MG4.jpeg'),
  'ID3.jpeg': require('../assets/images/ID3.jpeg'),
  'BMWi4.jpg': require('../assets/images/BMWi4.jpg')

};

const CarCardContainer = ({  
  showAllCars = true, 
  selectedCarIds = [], 
  customStyles = {} 
}) => {
  
  // state for selected cars and comparison modal
  const [selectedCars, setSelectedCars] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  
  // filter cars based on props
  const carsToDisplay = showAllCars 
    ? carsData 
    : carsData.filter(car => selectedCarIds.includes(car.id));
  
  // toggle car selection for comparison
  const handleCompareToggle = (carId) => {
    setSelectedCars(prev => {
      // if already selected, remove it
      if (prev.some(car => car.id === carId)) {
        return prev.filter(car => car.id !== carId);
      }
      
      // if not selected and less than 2 cars selected, add it
      if (prev.length < 2) {
        const carToAdd = carsData.find(car => car.id === carId);
        return [...prev, carToAdd];
      }
      
      // if already 2 cars selected, replace the first one
      const carToAdd = carsData.find(car => car.id === carId);
      return [prev[1], carToAdd];
    });
    
    // show comparison modal when exactly 2 cars are selected
    if (selectedCars.length === 1 && !selectedCars.some(car => car.id === carId)) {
      setShowComparison(true);
    }
  };
  
  return (
    <SafeAreaView style={[styles.container, customStyles.container]}>
      
      <ScrollView contentContainerStyle={[styles.scrollContent, customStyles.scrollContent]}>
        {carsToDisplay.map(car => (
          <CarCard 
            key={car.id}
            id={car.id}
            image={car.image ? carImages[car.image] : null}
            title={car.title}
            description={car.description}
            cost={car.cost}
            yearlyAvgCost={car.yearlyAvgCost}
            avgMileage={car.avgMileage}
            chargingTime={car.chargingTime}
            batteryCapacity={car.batteryCapacity}
            chargingPort={car.chargingPort}
            isSelected={selectedCars.some(selectedCar => selectedCar.id === car.id)}
            onCompareToggle={handleCompareToggle}
          />
        ))}
      </ScrollView>
      
      {/* car comparison popup */}
      <CarComparisonPopup
        visible={showComparison}
        onClose={() => setShowComparison(false)}
        selectedCars={selectedCars}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
  },
});

export default CarCardContainer;