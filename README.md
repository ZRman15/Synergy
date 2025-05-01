          
# Synergy - Your Electric Car Companion

## Overview
Synergy is a comprehensive mobile application designed to enhance the electric vehicle (EV) ownership experience. It provides EV owners with essential tools for managing their vehicles, finding charging stations, comparing different EV models, and tracking energy usage metrics.

## Features

### 🏠 Home Dashboard
- View your EV's current charging status with an animated progress bar
- Monitor battery level and estimated range
- Track charging time remaining
- View personalized savings information
- Access detailed EV usage metrics including energy consumption, charging costs, and distance traveled

### 🗺️ Charging Station Map
- Interactive map showing nearby EV charging stations
- Detailed information for each station including:
  - Availability status (number of available chargers)
  - Charging speeds and connector types
  - Pricing information
  - Travel time estimates
  - Operating hours
- Get directions to charging stations
- Plan routes with charging stops

### 🚗 EV Comparison Tool
- Browse a catalog of popular electric vehicles
- Compare up to two EVs side-by-side
- Compare key metrics:
  - Purchase cost
  - Yearly operating costs
  - Range/mileage
  - Charging time
  - Battery capacity
  - Charging port compatibility

### ⚙️ Settings
- Personalize your profile with your name
- Select your current EV from a list of popular models
- Save your preferences for a customized experience

## Technical Details

This application is built using:
- React Native with Expo
- React Navigation for screen management
- AsyncStorage for local data persistence
- Custom UI components for a seamless user experience
- React Native Maps for charging station locations
- React Native Paper for UI components
- Expo Vector Icons for UI elements
- Expo Linear Gradient for gradient effects

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Use the Expo Go app to test on your device or use an emulator

## Project Structure

- `/assets`: Contains images, fonts, and data files
- `/components`: Reusable UI components
- `/pages`: Main application screens
- `/App.js`: Main application entry point

## Installation and Setup

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional for local testing)

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/synergy-app.git
cd synergy-app
```

2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

3. Start the development server:
```bash
npm start
```
or
```bash
yarn start
```

4. Run on a device or emulator:
   - Scan the QR code with the Expo Go app on your device
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

## Future Enhancements

- Real-time charging station availability updates
- Trip planning with battery consumption estimates
- User accounts and cloud synchronization
- Integration with vehicle APIs for real-time vehicle data
- Charging session payment processing
- Community features and reviews for charging stations

## About

Synergy was developed as a prototype for a Mobile Computing module to demonstrate how technology can make electric vehicle ownership more convenient and efficient by connecting users with charging stations and providing them with valuable insights into their EV usage. All this is done through a proposed centralized platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. This is my own work for educational purposes and is not intended for commercial use.
## Acknowledgments

- Thanks to the contributors and open-source libraries used in this project

## Contact

For questions or feedback, please open an issue on this repository.

---

Developed with Expo and React Native by Zohaib Rehman.