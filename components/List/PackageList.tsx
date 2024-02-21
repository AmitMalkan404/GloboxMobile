import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PackageListItem } from './PackageListItem';

export const PackageList = () => {
  return (
    <View style={styles.container}>
        <ScrollView >
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
            <PackageListItem/>
        </ScrollView>
    </View>
  );
}

const width_proportion = '90%';
const height_proportion = 15;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D2DC00',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
    borderColor: '#D4D4D4',
    // marginTop: '20%' 
  },
});
