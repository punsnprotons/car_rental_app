import React from 'react'
import {Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 


const CarListItem = ({image,name,price,review,handlePress}) =>{
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image style={styles.carImage} source={require('../../assets/mercedez.jpeg')} />
            <Text style={styles.carTitle}>{name}</Text>
            <View style={styles.detailContainer}>
                <View style={styles.reviewContainer}>
                    <AntDesign name="staro" size={18} color="black" />
                    <Text style={styles.reviewStyle}>{review}</Text>
                </View>
                <Text style={styles.carPrice}>{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:15, 
        borderColor:'gray',
        borderWidth:StyleSheet.hairlineWidth,
        margin:5, 
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'column',
        width:300,
        height:220,
        backgroundColor:'white'
        
        

    },
    carImage:{
        width:200,
        height:150,
        alignSelf:'center',
        paddingBottom:100
    }, 
    carTitle:{
        fontWeight:'600',
        fontSize:17,
        paddingBottom:10,
    },
    detailContainer:{
        paddingTop:8,
        flexDirection:'row',
        alignItems:'center'
    },
    reviewContainer:{
        flexDirection:'row',
        flex:1
    },
    carPrice:{
        fontWeight:'600',
    },
    reviewStyle:{
        color:'gray',
        fontSize:13,
        paddingLeft:5,
    }


})


export default CarListItem

