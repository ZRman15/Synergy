import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
var iconColour = '#8968CD'

const EVMetrics = ({ energyUsed, chargingCost, chargingTime, distance }) => {
  return (
    <View style={styles.metricsContainer}>
      <View style={styles.metricItem}>
        <MaterialCommunityIcons name="lightning-bolt" size={24} color="#8968CD" />
        <Paragraph style={styles.metricValue}>{energyUsed || '56 kWh'}</Paragraph>
        <Paragraph style={styles.metricLabel}>Energy Used</Paragraph>
      </View>
      
      <View style={styles.metricItem}>
        <MaterialCommunityIcons name="cash" size={24} color="#8968CD" />
        <Paragraph style={styles.metricValue}>{chargingCost || '£2.57'}</Paragraph>
        <Paragraph style={styles.metricLabel}>Charging Cost</Paragraph>
      </View>
      
      <View style={styles.metricItem}>
        <MaterialCommunityIcons name="clock-outline" size={24} color="#8968CD" />
        <Paragraph style={styles.metricValue}>{chargingTime || '2h 15m'}</Paragraph>
        <Paragraph style={styles.metricLabel}>Charging Time</Paragraph>
      </View>
      
      <View style={styles.metricItem}>
        <MaterialCommunityIcons name="map-marker-distance" size={24} color="#8968CD" />
        <Paragraph style={styles.metricValue}>{distance || '187 mi'}</Paragraph>
        <Paragraph style={styles.metricLabel}>Distance</Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%'
  },
  metricItem: {
    width: '48%',
    backgroundColor: '#f3d9ff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Proxima-Bold',
    marginTop: 5
  },
  metricLabel: {
    fontSize: 14,
    fontFamily: 'Proxima',
    color: '#555',
    marginTop: 2
  }
});

export default EVMetrics;