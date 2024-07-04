import { View, Text, Image, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { hs, ms, vs } from './Metrics'

const HomePage = () => {
  const [coinSide, setCoinSide]= useState('queen')
  const [queenCount, setQueenCount] = useState(0)
  const [kingCount, setKingCount] = useState(0)
  const [counts, setCounts] = useState(0)

  const flipAnimation = useRef( new Animated.Value(0) ).current
  const animatedValue = useRef( new Animated.Value(0) ).current

  const tossCoin = ()=>{
    const randomSide = Math.floor(Math.random() *2)
    

  Animated.timing(flipAnimation, { 
    toValue: 3, 
    duration: 1000, 
    easing: Easing.linear , 
    useNativeDriver: true, 
}).start(() => { 
      
            flipAnimation.setValue(0); 
            if (randomSide === 0) { 
                setCoinSide("king"); 
                setKingCount(kingCount + 1); 
            } else { 
                setCoinSide("queen"); 
                setQueenCount(queenCount + 1); 
            } 
        });
        
      }
    

    const resetCounts = () => { 
      setKingCount(0); 
      setQueenCount(0);
      setCounts(0)
  }; 
  if( kingCount + queenCount === counts && kingCount > queenCount ){
    alert('King is the winner')
    resetCounts();
  }
  else if( kingCount + queenCount === counts && queenCount > kingCount ){
    alert('Queen is the winnwer')
      resetCounts();
  }
  

  return (
    <View style={styles.home} >
        <StatusBar style="auto" />
    <View style={styles.homeContainer}  >
    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:'8%'}} >
       <Text onPress={()=>setCounts(1)} style={{paddingHorizontal:10, marginVertical:5, backgroundColor:'green'}} > 1 </Text>
       <Text onPress={()=>setCounts(3)} style={{paddingHorizontal:10, marginVertical:5, backgroundColor:'green'}} > 3 </Text>
       <Text onPress={()=>setCounts(5)} style={{paddingHorizontal:10, marginVertical:5, backgroundColor:'green'}} > 5 </Text>
       <Text onPress={()=>setCounts(7)} style={{paddingHorizontal:10, marginVertical:5, backgroundColor:'green'}} > 7 </Text>
    </View>
      <View style={styles.coinContainer} >
        {coinSide && ( <Animated.Image
        source={ coinSide === 'queen' ?
          require('../assets/queen.png') :
          require('../assets/king.png')
         }
         style={[ 
          styles.coinImage, 
          { 
              transform: [ 
                  { 
                      rotateY: flipAnimation.interpolate({ 
                          inputRange: [0, 1], 
                          outputRange: ["0deg", "180deg"], 
                      }), 
                  }, 
              ], 
          }, 
      ]}
        />

         ) }
      </View>
      <View style={styles.count} >
        <Text style={ styles.countText} > King: {kingCount} </Text>
        <Text style={ styles.countText} > Queen: {queenCount} </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.toss} onPress={tossCoin} >
          <Text style={styles.tossText} >
          TOSS COIN 
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reset} onPress={resetCounts} >
          <Text style={styles.resetText} >
          Reset 
          </Text>
          </TouchableOpacity>
      </View>

      <Image style={styles.money} source={require('../assets/money.png')} />
    <Text style={styles.tossTime} >Set Toss Time: {counts} </Text>
    </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  homeContainer:{
    backgroundColor:'#e5ffe5',
    height: vs(812),
    width:hs(375),
    padding:vs(10) && hs(10)
  },
  coinContainer:{
    marginHorizontal:'auto',
    marginTop:vs(40),
  
    
  },
  count:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:vs(20)
    
  },
  countText:{
    color: 'black',
    fontSize:ms(18),
  },
  toss:{
    padding:21,
    backgroundColor:'#013300',
    width:hs(315),
    marginHorizontal:'auto',
    marginTop:vs(20),
    borderRadius:ms(20)
  },
  tossText:{
    color:'white',
    textAlign:'center',
    fontSize: ms(14),
    
  },
  reset:{
    backgroundColor:'#001900',
    padding:16,
    width:hs(175),
    marginTop:vs(35),
    
    marginHorizontal:'auto',
    borderRadius:ms(5)
  },
  resetText:{
    color:'white',
    textAlign:'center',
  },
  money:{
    marginHorizontal:'auto',
    marginTop:vs(20)
  },
  tossTime:{
    marginTop:vs(-45),
    fontSize:ms(17)
  }
})