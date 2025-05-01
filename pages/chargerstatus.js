import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoadingBar = ({ progress = 0, color = 'green', chargingSpeed = '22 kW/h' }) => {
  const pulseAnim = useRef(new Animated.Value(0.4)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  
  // color schemes
  const colorSchemes = {
    purple: ['#8968CD', '#A020F0'],
    green: ['#BCFF84', '#78E91A'],
    blue: ['#00bfff', '#0000ff'],
  };
  
  const gradientColors = colorSchemes[color] || colorSchemes.green;
  
  useEffect(() => {
    // animate progress bar
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();
    
    // create pulsing effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    ).start();
  }, [progress]);
  
  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  
  const shadowOpacity = pulseAnim;
  
  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.progressBarBackground, { width: progressWidth }]}>
          <Animated.View style={[
            styles.glowEffect, 
            { 
              opacity: shadowOpacity,
              shadowColor: gradientColors[1],
              backgroundColor: gradientColors[1],
            }
          ]} />
          
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.progressBar}
          />
        </Animated.View>
        
        <View style={styles.textContainer}>
          <View style={styles.textWrapper}>
            <Animated.Text style={styles.percentageText}>
              {progressAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              })}
            </Animated.Text>
            <Text style={styles.speedText}>{chargingSpeed}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  barContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  progressBarBackground: {
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  progressBar: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  glowEffect: {
    position: 'absolute',
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  textContainer: {
    position: 'absolute',
    right: 15,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    alignItems: 'right',
  },
  percentageText: {
    fontFamily:'Proxima-Bold',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign:'right'
  },
  speedText: {
    fontFamily:'Proxima',
    color: '#ffffff',
    fontSize: 12,
    marginTop: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }
});

export default LoadingBar;