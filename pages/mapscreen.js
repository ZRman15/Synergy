import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker, UrlTile, Callout } from 'react-native-maps';
import { UIManager } from 'react-native';
import ChargingStationCard from '../components/ChargingStationCard';
import chargingStations from '../assets/data/chargingStations.json';

if (typeof UIManager.hasViewManagerConfig !== 'function') {
  UIManager.hasViewManagerConfig = () => false;
}

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.75496,
          longitude: -0.22136,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <UrlTile
          urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={6}
        />
        
        {chargingStations.map(station => (
          <Marker 
            key={station.id}
            coordinate={station.coordinates}
            pinColor="#b485ff"
          >
            <Callout tooltip>
              <ChargingStationCard 
                name={station.name}
                type={station.type}
                location={station.location}
                travelTime={station.travelTime}
                hours={station.hours}
                availableNow={station.availableNow}
                totalChargers={station.totalChargers}
                pricing={station.pricing}
                chargerType={station.chargerDetails?.[0]?.type}
                chargerSpeed={station.chargerDetails?.[0]?.speed}
                onCallPress={() => console.log(`Call ${station.name}`)}
                onWebsitePress={() => console.log(`Visit website for ${station.name}`)}
                onSharePress={() => console.log(`Share ${station.name}`)}
                onDirectionsPress={() => console.log(`Get directions to ${station.name}`)}
                onPlanRoutePress={() => console.log(`Plan route to ${station.name}`)}
              />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;