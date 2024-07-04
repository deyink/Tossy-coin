import { View, Text, StyleSheet,  } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreenCus = ({navigation}) => {
  useEffect( ()=>{
    const timeout= setTimeout( ()=>{
      navigation.navigate('HomePage')
    }, 5000)
    return ()=>{
      clearTimeout(timeout)
    }
}, [] )
  return (
    <View style={styles.container} >
      <View style={styles.box} >
        <Text style={styles.tossy} >
            TOSSY
        </Text>

      </View>
    </View>
  )
}

export default SplashScreenCus

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fffcf3',
        width:'100%',
        height:'100%'
    },
    box:{
        width:'90%',
        height:'45%',
        backgroundColor:'#009900',
        margin:'auto',
        borderRadius:700
    },
    tossy:{
        margin:'auto',
        color:'#fffcf3',
        fontSize:40
    }
})