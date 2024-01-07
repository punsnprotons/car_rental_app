import React from 'react'
import {ScrollView,View,Text,StyleSheet,Image} from 'react-native'
import { Foundation,FontAwesome,MaterialCommunityIcons,Entypo,FontAwesome5,Feather,AntDesign, FontAwesome6 } from '@expo/vector-icons'; 
import DetailIntro from '../components/DetailIntro';
import DetailInfo from '../components/DetailInfo';
import DetailSpecs from '../components/DetailSpecs';
import DetailPlan from '../components/DetailPlan';
import DetailFooter from '../components/DetailFooter';
import Plan from '../components/Plan';
// Detail Intro
//Detail Info
//Detail Specs 
//Detail Plan 
//Footer 

const CarDetailScreen = () =>{
    return (
        <ScrollView style={styles.container}>
            <DetailIntro/>
            <DetailInfo/>
            <DetailSpecs/>
            <DetailFooter/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:70, 
        marginHorizontal:15,
    }
})

export default CarDetailScreen 