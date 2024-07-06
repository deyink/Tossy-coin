import { View, Text, Image, StyleSheet, Animated, TouchableOpacity, Easing, Button } from 'react-native'
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

      let sunC = kingCount + queenCount
    const resetCounts = () => { 
      setKingCount(0); 
      setQueenCount(0);
      setCounts(0)
  }; 
  if( sunC === counts && kingCount > queenCount ){
    alert('King is the winner')
    resetCounts();
  }
  else if( sunC === counts && queenCount > kingCount ){
    alert('Queen is the winner')
      resetCounts();
  }


  

  return (
    <View style={styles.home} >
        <StatusBar style="auto" />
    <View style={styles.homeContainer}  >
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
      
  <View style={{flexDirection:'row', justifyContent:'space-between'}} >
  <Text style={styles.tossTime} >Set Flip Time: {counts} </Text>
    {/* <TouchableOpacity onPress={()=>setCounts(counts +1)} style={styles.flips} >
        <Text style={{textAlign:'center', color:'white', fontSize:14}} >
          Add Flips
        </Text>
      </TouchableOpacity> */}
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:vs(30)}} >
    <TouchableOpacity onPress={ ()=>setCounts(1) } style={styles.flips} >
      <Text style={styles.resetText} >
        1
      </Text>
    </TouchableOpacity  >
    <TouchableOpacity onPress={ ()=>setCounts(3) } style={styles.flips} >
      <Text style={styles.resetText}  >
        3
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ ()=>setCounts(5) } style={styles.flips} >
      <Text style={styles.resetText}  >
        5
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ ()=>setCounts(7) } style={styles.flips} >
      <Text style={styles.resetText}  >  
        7
      </Text>
    </TouchableOpacity>

  </View>
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
    marginTop:vs(50),
  
    
  },
  count:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:vs(14)
    
  },
  countText:{
    color: 'black',
    fontSize:ms(18),
  },
  toss:{
    padding:ms(18) ,
    backgroundColor:'#013300',
    width:hs(315),
    marginHorizontal:'auto',
    marginTop:vs(35),
    borderRadius:ms(20)
  },
  tossText:{
    color:'white',
    textAlign:'center',
    fontSize: ms(14),
    
  },
  reset:{
    backgroundColor:'#001900',
    padding:ms(15),
    width:hs(175),
    marginTop:vs(55),
    
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
    marginTop:vs(-10),
    fontSize:ms(17)
  },
  flips:{
    padding:ms(11),
    backgroundColor:'#013303',
    width:hs(70),
    marginTop:vs(-25)
    
  
  }
})