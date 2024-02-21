import { StatusBar } from 'expo-status-bar';
import React, { FC, useEffect, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export enum AppView {
    List,
    Map
}

export interface HeaderButtonsSliderProps {
  onChangeView: (view:AppView) => void;
}

export const HeaderButtonsSlider:FC<HeaderButtonsSliderProps> = (props: HeaderButtonsSliderProps) => {

    const [currentView, setCurrentView] = useState<AppView>(AppView.List);
    const onMapPress = () => {
        setCurrentView(AppView.Map);
        props.onChangeView(AppView.Map);
    }

    const onListPress = () => {
        setCurrentView(AppView.List);
        props.onChangeView(AppView.List);
    }

    const getStyle = (view:AppView) => {
        return view===currentView? styles.selectedButton:styles.unselectedButton
    }
    return (
    <View style={styles.mainContainer}>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity key={'list'} style={getStyle(AppView.List)} onPress={onListPress}>
                <Text style={styles.text}>📋</Text>
            </TouchableOpacity>
            <TouchableOpacity key={'map'} style={getStyle(AppView.Map)} onPress={onMapPress}>
                <Text style={styles.text}>🌎</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    height:70,
    borderRadius:8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'relative'
  },
  buttonsContainer: {
    backgroundColor: '#DDDDDD',
    flexDirection: 'row',
    borderRadius:40,
    padding: 3,
  },
  unselectedButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius:100,
  },
  selectedButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFA',
    padding: 10,
    borderRadius:100,
  },
  text: {
    fontSize: 30,
  }
});
