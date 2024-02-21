import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { PackageList } from './List/PackageList';
import { AppView, HeaderButtonsSlider } from './HeaderButtonsSlider';
import { DEFAULT_LAT, DEFAULT_LNG, LatLng, MapComponent } from './Map/MapComponent';
import { AppRegistry } from 'react-native';

export enum FooterButtonState {
  Off,
  AddPackageId,
  AddDeliveryInfo
}

export const MainScreen = () => {

    const [currentView, setCurrentView] = useState<AppView>(AppView.List);
    const [currentLocation,setCurrentLocation] = useState<LatLng>({lat:DEFAULT_LAT,lng:DEFAULT_LNG})
    const [footerState, setFooterState] = useState<FooterButtonState>(FooterButtonState.Off)
    const handleViewChange = (view:AppView) => {
        setCurrentView(view);
    }
    const handleLocationChange = (latLng:LatLng) => {
      setCurrentLocation(latLng)
    }

    const OnOpenPackageIdPage = () => {
      setFooterState(FooterButtonState.AddPackageId);
    }
    
    const OnOpenTextMessagePage = () => {
      setFooterState(FooterButtonState.AddDeliveryInfo);
    }
    
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Image source={require('./../assets/image1.png')} />
          <Image source={require('./../assets/globox_tracer.png')} />
          <Image source={require('./../assets/Burger.png')} />
        </View>
        
        <HeaderButtonsSlider onChangeView={handleViewChange}/>
        {currentView===AppView.List &&(<PackageList/>)}
        {currentView===AppView.Map &&(<MapComponent currentLatLng={currentLocation} onCurrentLocationChanged={handleLocationChange}/>)}
        {footerState===FooterButtonState.AddPackageId && }
        <View style={styles.footer}>
          <TouchableOpacity 
            onPress={OnOpenPackageIdPage}
            style={styles.roundButton1}>
              <Text>➕</Text>
            
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={OnOpenTextMessagePage}
            style={styles.roundButton1}>
              <Text>💬</Text>
            
          </TouchableOpacity>
        </View>
    </View>
    );
}

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    flexDirection: 'column'
  },
  header: {
    flexDirection:'row-reverse',
    top: 10,
    justifyContent: 'space-between',
    width: screenWidth*0.90,
    height:10,
    position: 'relative'
  },
  footer: {
    flexDirection:'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'space-between',
    width: screenWidth*0.90
  },
  roundButton1: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    shadowColor: 'grey'
  },
});
