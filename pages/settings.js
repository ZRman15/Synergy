import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import carsData from '../assets/data/carsData.json';
var themeColour = '#e6f7ff'

const SettingsScreen = () => {
  const [userName, setUserName] = useState('Zohaib');
  const [selectedCar, setSelectedCar] = useState('3'); // default val = Polestar 2 (id: 3)
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCarTitle, setSelectedCarTitle] = useState('Polestar 2');
  
  // saved settings
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedName = await AsyncStorage.getItem('userName');
        const savedCar = await AsyncStorage.getItem('selectedCar');
        
        if (savedName) setUserName(savedName);
        if (savedCar) {
          setSelectedCar(savedCar);
          // find  car title for selected car ID
          const car = carsData.find(car => car.id === savedCar);
          if (car) setSelectedCarTitle(car.title);
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };
    
    loadSettings();
  }, []);
  
  // save settings to async
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('selectedCar', selectedCar);
      alert('Settings Updated Successfully.');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings');
    }
  };
  
  // car select dropdown
  const handleCarSelect = (car) => {
    setSelectedCar(car.id);
    setSelectedCarTitle(car.title);
    setDropdownVisible(false);
  };
  
  return (
    <SafeAreaView contentContainerStyle={styles.container}>
    <ScrollView style={styles.scroll}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Manage My Car</Title>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
              placeholder="Enter your name"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Select Your Car</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setDropdownVisible(true)}
            >
              <Text style={styles.dropdownButtonText}>{selectedCarTitle}</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
            
            <Modal
              visible={dropdownVisible}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setDropdownVisible(false)}
            >
              <TouchableOpacity 
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={() => setDropdownVisible(false)}
              >
                <View style={styles.dropdownContainer}>
                  <Text style={styles.dropdownTitle}>Select a Car</Text>
                  <FlatList
                    data={carsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[
                          styles.dropdownItem,
                          selectedCar === item.id && styles.selectedDropdownItem
                        ]}
                        onPress={() => handleCarSelect(item)}
                      >
                        <Text 
                          style={[
                            styles.dropdownItemText,
                            selectedCar === item.id && styles.selectedDropdownItemText
                          ]}
                        >
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </TouchableOpacity>
            </Modal>
          </View>
          
          <Button
            mode="contained"
            style={styles.saveButton}
            onPress={saveSettings}
          >
            Save Changes
          </Button>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>My Account</Title>
        </Card.Content>
      </Card>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: themeColour,
    height: '100%'
  },
  scroll: {
    padding: 15,
    backgroundColor: themeColour,
    height: '100%'
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,         
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000'
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 15,
    fontFamily: 'Proxima-Bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Proxima-Bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#000000',
  },
  dropdownButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 16,
    fontFamily: 'Proxima',
  },
  dropdownIcon: {
    fontSize: 16,
    color: '#8968CD',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownContainer: {
    width: '80%',
    maxHeight: '70%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    borderWidth: 2,
    borderColor: '#000000',
  },
  dropdownTitle: {
    fontSize: 18,
    fontFamily: 'Proxima-Bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#8968CD',
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#8968CD',
    borderRadius: 25,
    marginBottom: 5,
  },
  selectedDropdownItem: {
    backgroundColor: '#8968CD',
  },
  dropdownItemText: {
    fontSize: 16,
    fontFamily: 'Proxima',
  },
  selectedDropdownItemText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#8968CD',
    paddingVertical: 14,
    borderRadius: 30
  },
});

export default SettingsScreen;