import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export const PackageListItem = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app! my boy</Text>
    </View>
  );
}

const width_proportion = '90%';
const height_proportion = 80;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    width: Dimensions.get('window').width,
    height: height_proportion,
    borderColor: '#D4D4D4',
    // marginTop: '20%' 
  },
});
