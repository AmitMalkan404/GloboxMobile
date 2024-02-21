import React, { FC, useEffect, useReducer, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Dimensions, Button, PermissionsAndroid } from 'react-native';
import * as Location from 'expo-location';


export const DEFAULT_LAT = 31.776822;
export const DEFAULT_LNG = 35.234440;
export interface LatLng {
    lat:number;
    lng:number
}

export interface MapComponentInterface {
    currentLatLng:LatLng;
    onCurrentLocationChanged: (latLng:LatLng) => void;
}

export const MapComponent:FC<MapComponentInterface> = (props:MapComponentInterface) => {
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = useState<LatLng>({lat:DEFAULT_LAT,lng:DEFAULT_LNG});
  const locationRef = useRef<LatLng>({lat:DEFAULT_LAT,lng:DEFAULT_LNG});
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      })
      .then(res =>{
        if(res){
            setLocation({lat:res?.coords.latitude,lng:res?.coords.longitude})
            locationRef.current = {lat:res?.coords.latitude,lng:res?.coords.longitude}
            // console.log(res.coords.latitude,res.coords.longitude)
            props.onCurrentLocationChanged({lat:res?.coords.latitude,lng:res?.coords.longitude})
            forceUpdate();
        }
       })
      .catch(e => console.log(e)).finally(() => {
        console.log(location);
        console.log(locationRef.current);
        forceUpdate();
      })
    })();
  }, []);

  useEffect(() =>{
    forceUpdate();
  },[location,locationRef.current])

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        followsUserLocation
        initialRegion={{
          latitude: props.currentLatLng.lat,
          longitude: props.currentLatLng.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.00000421,
        }}
      >
        <Marker
          coordinate={{
            latitude: props.currentLatLng.lat,
            longitude: props.currentLatLng.lng,
          }}
          pinColor='blue'
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: screenWidth * 0.95,
    height: screenHeight * 0.82, // Adjust this value as needed
  },
});
