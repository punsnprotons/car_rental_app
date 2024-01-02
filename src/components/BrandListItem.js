import React from 'react'
import {Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native'

const BrandListItem = ({car}) => {
  return (
    <TouchableOpacity style={styles.container}onPress={()=>{console.log(car)}}>
            <Text style={styles.text}>{car}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    text:{
        padding:30,
        borderColor: 'gray',
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:10
    },
    container:{
        marginLeft:5,
        marginRight:5
    }

})
export default BrandListItem
