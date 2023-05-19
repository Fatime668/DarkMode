import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import HomeScreen from './Screens/HomeScreen'

export const App =()=> {
    return (
      <SafeAreaView>
       <View>
        <HomeScreen/>
       </View>
      </SafeAreaView>
    )
  
}

export default App
