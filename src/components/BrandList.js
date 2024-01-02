import React from 'react'
import {StyleSheet,FlatList,View,TouchableOpacity,Text} from 'react-native'
import carBrands from '../../assets/car-brands.json'
import BrandListItem from './BrandListItem'


const BrandList = () =>{
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Top Brands</Text>
            <TouchableOpacity style={styles.linkContaniner}>
                <Text style={styles.link}>See all</Text>
            </TouchableOpacity>
           
        </View>
            <FlatList
                horizontal
                data={carBrands}
                renderItem={({item})=><BrandListItem car={item.name}/>}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:15
    },
    title:{
        flex:1,
        fontSize:20,
        color:'black',
        fontWeight:'600'
    },
    linkContainer:{},
    link:{
       
        color:'#007AFF'
    }

})
export default BrandList 