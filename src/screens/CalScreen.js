import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import CountDown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';

const CalScreen = () => {
  const navigation = useNavigation();

    function handleExamStart(){
      navigation.navigate("QR_scanner");
    }
    const [buttonArr, setButtonArr] = React.useState([]);
    const renderButtons = () =>{
      return buttonArr.map ((index)=> 
        <Pressable style={s.button}  key={index} onPress={handleExamStart}>
          <Text style={s.btnText}>გამოცდის დაწყება</Text>
        </Pressable> 
      )
    } 
  return (
    <View >
      <View>
        <Text style={s.date}>გამოცდის თარიღი: 15.07.2023</Text>
      </View>
      <View style={s.timer}>
        <CountDown

          until={10}
          onFinish={() => setButtonArr( [...buttonArr , "Unique Index of new Button"] )}
          // onPress={() => alert('hello')}
          size={30}
          digitTxtStyle={{color: 'white'}}
          timeLabels={{d: 'დღე', h: 'საათი', m: 'წუთი', s: 'წამი'}}
          digitStyle={{backgroundColor: '#3498db'}}
          timeLabelStyle={{color: 'white', fontWeight: 'bold'}}

        />
      </View>
      {renderButtons()}
    </View>
  )
}

export default CalScreen

const s = StyleSheet.create({
  date:{
    fontSize:22,
    fontWeight:'700',
    marginTop:220,
    alignSelf:'center',
    color:"white"


  },
  timer:{
    marginTop:70,
    
  },
  button:{
    marginTop:50,
    alignSelf:'center',
    backgroundColor:'#1AA7EC',
    width:200,
    height:50,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
  },
  btnText:{
    fontSize:15,
    fontWeight:'600',
    color:'white',
    
  }

})