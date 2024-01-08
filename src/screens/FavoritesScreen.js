import React from 'react'
import CarListItem from '../components/CarListItem'
import {View,StyleSheet} from 'react-native'

const FavoritesScreen = () => {
  return (
    <View>
        <CarListItem/>
        <CarListItem/>
        <CarListItem/>
    </View>
  )
}

export default FavoritesScreen
