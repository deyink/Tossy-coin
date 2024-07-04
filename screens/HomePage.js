import { View, Text, Image, StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native'
import React, { useRef, useState } from 'react'

const HomePage = () => {
  const [coinSide, setCoinSide]= useState('queen')
  const [queenCount, setQueenCount] = useState(0)
  const [kingCount, setKingCount] = useState(0)

  const flipAnimation = useRef( new Animated.Value(0) ).current
  const animatedValue = useRef( new Animated.Value(0) ).current

  const tossCoin = ()=>{
    const randomSide = Math.floor(Math.random() *2)
  

  Animated.timing(flipAnimation, { 
    toValue: 3, 
    duration: 500, 
    easing: Easing.linear , 
    useNativeDriver: true, 
}).start(() => { 
            // Reset the animation value and set the 
            // coin side based on the random result 
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
  }; 
  
  return (
    <View style={styles.home} >
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
    </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  home:{
    height:'100%',
    width:'100%',
    backgroundColor:'#fffcf3',
  
  },
  homeContainer:{
    backgroundColor:'#e5ffe5',
    height:'100%',
    width:'100%',
    padding:'2%'
  },
  coinContainer:{
    margin:'auto',
    marginTop:'30%'
    
  },
  count:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:'5%'
    
  },
  countText:{
    color: 'black',
    fontSize:15,
    fontWeight:'700'
  },
  toss:{
    padding:23,
    backgroundColor:'#001900',
    width:'90%',
    margin:'auto',
    marginTop:'15%',

    borderRadius:10
  },
  tossText:{
    color:'white',
    textAlign:'center',
    fontSize: 13,
    
  },
  reset:{
    backgroundColor:'#000000',
    padding:20,
    width:'40%',
    marginTop:60,
    
    marginHorizontal:'auto',
    borderRadius:5
  },
  resetText:{
    color:'white',
    textAlign:'center',
  },
  money:{
    marginHorizontal:'auto'
  }
})