import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const CarComparisonPopup = ({
  visible,
  onClose,
  selectedCars = []
}) => {
  // only show comparison if we have exactly 2 cars
  const showComparison = selectedCars.length === 2;
  
  return (
    <Modal
      visible={visible && showComparison}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Compare</Text>
          
          <ScrollView style={styles.scrollView}>
            <View style={styles.comparisonTable}>
              {/* car names header */}
              <View style={styles.comparisonHeader}>
                <Text style={styles.featureLabel}>Feature</Text>
                {selectedCars.map(car => (
                  <Text key={car.id} style={styles.carLabel}>{car.title}</Text>
                ))}
              </View>
              
              {/* cost comparison */}
              <View style={styles.comparisonRow}>
                <Text style={styles.featureLabel}>Cost</Text>
                {selectedCars.map(car => (
                  <Text key={car.id} style={styles.featureValue}>{car.cost}</Text>
                ))}
              </View>
              
              {/* yearly cost comparison */}
              <View style={styles.comparisonRow}>
                <Text style={styles.featureLabel}>Yearly Cost</Text>
                {selectedCars.map(car => (
                  <Text key={car.id} style={styles.featureValue}>{car.yearlyAvgCost}</Text>
                ))}
              </View>
              
              {/* mileage comparison */}
              <View style={styles.comparisonRow}>
                <Text style={styles.featureLabel}>Mileage</Text>
                {selectedCars.map(car => (
                  <Text key={car.id} style={styles.featureValue}>{car.avgMileage}</Text>
                ))}
              </View>
              
              {/* charging time comparison */}
              <View style={styles.comparisonRow}>
                <Text style={styles.featureLabel}>Charging Time</Text>
                {selectedCars.map(car => (
                  <Text key={car.id} style={styles.featureValue}>{car.chargingTime}</Text>
                ))}
              </View>

              {/* baterry capacity comparison */}
              <View style={styles.comparisonRow}>
                <Text style={styles.featureLabel}>Battery Capacity</Text>
                {selectedCars.map(car => (
                  <Text key={car.id} style={styles.featureValue}>{car.batteryCapacity}</Text>
                ))}
              </View>
            </View>
          </ScrollView>
          
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  scrollView: {
    maxHeight: 400,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Proxima-Bold',
  },
  comparisonTable: {
    marginBottom: 20,
  },
  comparisonHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  comparisonRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  featureLabel: {
    flex: 1,
    fontFamily: 'Proxima',
  },
  carLabel: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Proxima-Bold',
  },
  featureValue: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Proxima',
  },
  closeButton: {
    backgroundColor: '#f3d9ff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontFamily: 'Proxima',
  },
});

export default CarComparisonPopup;