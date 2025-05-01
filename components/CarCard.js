import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
var darkCol = '#b485ff'
var lightCol= '#e1cfff'

const CarCard = ({
  image,
  title,
  description,
  cost,
  yearlyAvgCost,
  avgMileage,
  chargingTime,
  batteryCapacity,
  chargingPort,
  id,
  isSelected = false,
  onCompareToggle
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        {title && (
          <Text style={styles.title}>{title}</Text>
        )}
        
        {/* Compare Checkbox */}
        {onCompareToggle && (
          <TouchableOpacity 
            style={[styles.checkbox, isSelected && styles.checkboxSelected]} 
            onPress={() => onCompareToggle(id)}
          >
            <Text style={styles.checkboxText}>Compare</Text>
            {isSelected && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        )}
      </View>
      
      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
      )}
      
      {description && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
      
      <View style={styles.pillsContainer}>
        {cost && (
          <View style={styles.pillWrapper}>
            <Text style={styles.pillLabel}>Cost</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{cost}</Text>
            </View>
          </View>
        )}
        
        {yearlyAvgCost && (
          <View style={styles.pillWrapper}>
            <Text style={styles.pillLabel}>Average Yearly Cost</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{yearlyAvgCost}</Text>
            </View>
          </View>
        )}
        
        {avgMileage && (
          <View style={styles.pillWrapper}>
            <Text style={styles.pillLabel}>Average Mileage</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{avgMileage}</Text>
            </View>
          </View>
        )}
        
        {chargingTime && (
          <View style={styles.pillWrapper}>
            <Text style={styles.pillLabel}>Time to Full</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{chargingTime}</Text>
            </View>
          </View>
        )}
        
        {batteryCapacity && (
          <View style={styles.pillWrapper}>
            <Text style={styles.pillLabel}>Battery Capacity</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{batteryCapacity}</Text>
            </View>
          </View>
        )}
        
        {chargingPort && (
          <View style={styles.pillWrapper}>
            <Text style={styles.pillLabel}>Charging Port</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>{chargingPort}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 800,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 20,
    backgroundColor: 'white',
    marginVertical: 10,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#000000'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Proxima-Bold',
    fontWeight: 'bold',
    flex: 1,
  },
  descriptionContainer: {
    backgroundColor: lightCol,
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Proxima-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pillWrapper: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  pillLabel: {
    fontFamily: 'Proxima-Bold',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  pill: {
    backgroundColor: lightCol,
    borderRadius: 30,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  pillText: {
    fontWeight: 'bold',
    fontFamily: 'Proxima',
    fontSize: 14,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightCol,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  checkboxSelected: {
    backgroundColor: darkCol,
  },
  checkboxText: {
    fontFamily: 'Proxima',
    fontSize: 14,
    marginRight: 5,
  },
  checkmark: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default CarCard;