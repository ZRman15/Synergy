import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ChargingStationCard = ({
  // station info
  name,
  type,
  location,
  
  // navigation info
  travelTime,
  
  // status info
  hours,
  availableNow,
  totalChargers,
  pricing,
  
  // charger details
  chargerType,
  chargerSpeed,
  
  // callbacks 
  onCallPress,
  onWebsitePress,
  onSharePress,
  onDirectionsPress,
  onPlanRoutePress
}) => {
  return (
    <View style={styles.calloutContainer}>
      {/* header */}
      {name && (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Text style={styles.plusIcon}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.menuIcon}>⋯</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      
      {/* subtitle */}
      {(type || location) && (
        <Text style={styles.subtitle}>
          {type && type}
          {type && location && ' • '}
          {location && <Text style={styles.location}>{location}</Text>}
        </Text>
      )}
      
      {/* action buttons */}
      <View style={styles.actionButtons}>
        {onCallPress && (
          <TouchableOpacity style={styles.iconButton} onPress={onCallPress}>
            <MaterialCommunityIcons name='phone' style={styles.iconText}/>
          </TouchableOpacity>
        )}
        {onWebsitePress && (
          <TouchableOpacity style={styles.iconButton} onPress={onWebsitePress}>
            <MaterialCommunityIcons name='web' style={styles.iconText}/>
          </TouchableOpacity>
        )}
        {onSharePress && (
          <TouchableOpacity style={styles.iconButton} onPress={onSharePress}>
            <MaterialCommunityIcons name='share' style={styles.iconText}/>
          </TouchableOpacity>
        )}
      </View>
      
      {/* navigation buttons */}
      <View style={styles.navigationButtons}>
        {onDirectionsPress && travelTime && (
          <TouchableOpacity style={styles.directionsButton} onPress={onDirectionsPress}>
            <Text style={styles.directionsText}>Directions</Text>
            <Text style={styles.directionsTime}> {travelTime}</Text>
          </TouchableOpacity>
        )}
        {onPlanRoutePress && (
          <TouchableOpacity style={styles.routeButton} onPress={onPlanRoutePress}>
            <Text style={styles.routeText}>Plan Route</Text>
            <Text style={styles.routeSubtext}>from here</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {/* info bar */}
      {(hours || availableNow || pricing) && (
        <View style={styles.infoBar}>
          {hours && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>HOURS</Text>
              <Text style={styles.infoValueGreen}>{hours}</Text>
            </View>
          )}
          {(availableNow && totalChargers) && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>AVAILABLE NOW</Text>
              <Text style={styles.infoValue}> {availableNow} of {totalChargers} </Text>
            </View>
          )}
          {pricing && (
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>PRICING</Text>
              <Text style={styles.infoValue}>{pricing}</Text>
            </View>
          )}
        </View>
      )}
      
      {/* available now section */}
      {(availableNow && totalChargers) && (
        <>
          <Text style={styles.sectionTitle}>Available Now</Text>
          
          {chargerType && (
            <View style={styles.chargerInfo}>
              <Text style={styles.chargerType}>{chargerType}</Text>
              <View style={styles.chargerDetails}>
                {chargerSpeed && (
                  <Text style={styles.chargerSpeed}>Charging Speed • {chargerSpeed}</Text>
                )}
                <Text style={styles.availability}>{availableNow} of {totalChargers} </Text>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  calloutContainer: {
    width: 300,
    height: 'fit',
    backgroundColor: '#1f1324',
    borderRadius: 18,
    padding: 15,
    opacity: 0.93,
    borderWidth:'2',
    borderColor:'#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  plusIcon: {
    color: 'white',
    fontSize: 24,
    marginRight: 15,
  },
  menuIcon: {
    color: 'white',
    fontSize: 24,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 15,
  },
  location: {
    color: '#3498db',
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconButton: {
    marginRight: 20,
  },
  iconText: {
    fontSize: 22,
    color: 'white',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  directionsButton: {
    backgroundColor: '#b485ff',
    borderRadius: 14,
    padding: 10,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  directionsText: {
    color: 'white',
    fontWeight: 'bold',
  },
  directionsTime: {
    color: 'white',
  },
  routeButton: {
    backgroundColor: '#2c3e50',
    borderRadius: 14,
    padding: 10,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  routeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  routeSubtext: {
    color: 'white',
    opacity: 0.7,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#34495e',
    paddingVertical: 10,
    marginBottom: 15,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    color: '#95a5a6',
    fontSize: 12,
    marginBottom: 5,
  },
  infoValue: {
    color: 'white',
    fontSize: 14,
  },
  infoValueGreen: {
    color: '#2ecc71',
    fontSize: 14,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  chargerInfo: {
    backgroundColor: '#28104f',
    borderRadius: 14,
    padding: 15,
  },
  chargerType: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chargerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#34495e',
    paddingTop: 10,
  },
  chargerSpeed: {
    color: 'white',
  },
  availability: {
    color: '#2ecc71',
  },
});

export default ChargingStationCard;