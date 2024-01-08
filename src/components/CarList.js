import React from 'react'
import {FlatList,StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native'
import CarListItem from './CarListItem'
import carListData from '../../assets/car-list.json'

const CarList = ({handlePress}) =>{
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Available Near You</Text>
            <TouchableOpacity style={styles.linkContaniner}>
                <Text style={styles.link}>See all</Text>
            </TouchableOpacity>
           
        </View>
            <FlatList
                horizontal
                data={carListData}
                renderItem={({item})=><CarListItem image={item.image} name={item.name} price={item.rent} review={item.review} handlePress={handlePress} />}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
       
    },
    title:{
        flex:1,
        fontSize:16,
        color:'black',
        fontWeight:'600',
        marginBottom:3,
       
    },
    linkContainer:{},
    link:{
       marginRight:5,
        color:'#007AFF'
    }

})


export default CarList 