import React from 'react'
import {View,StyleSheet} from 'react-native'
import BrandList from '../components/BrandList'
import CarList from '../components/CarList'
import SearchBar from '../components/SearchBar'
import HomeTitle from '../components/HomeTitle'
import HomeHeader from '../components/HomeHeader'

const ExploreScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <HomeHeader/>
            </View>

            <View style={styles.title}>
                <HomeTitle/>

            </View>
            <View>
                <SearchBar/>
            </View>

           <View style={styles.listContainer}>
                <View style={styles.brandList}>
                    <BrandList/>
                </View>

                <View style={styles.carList}>
                    <CarList handlePress={()=> navigation.navigate('CarDetail')}/>
                </View>
            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'whitesmoke',
        flex:1,
    },
    header:{
        //marginTop:80,
        marginBottom:30,
    },
    title:{
        marginBottom:30,
    },
    listContainer:{
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        flex:1,
    

    },
    brandList:{
        marginTop:20,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
    },
    carList:{
        marginBottom:30,
        paddingLeft:10,
        paddingRight:10,
    }
  
})

export default ExploreScreen