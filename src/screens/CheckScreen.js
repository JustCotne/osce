import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar,TouchableOpacity, Modal, Animated } from 'react-native'
import data from '../data/QuizData';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { CheckBox } from 'react-native-elements'


const CheckScreen = () => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
      const [checkedItems, setCheckedItems] = useState({});

  const handleCheckBoxChange = (value) => {
    setCheckedItems({ ...checkedItems, [value]: !checkedItems[value] });
  };

    const renderTimer = () => {
        return (
            <View style={{justifyContent:'center',alignSelf:'center', marginBottom:15}}>
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={'#3498db'}
                    trailColor='#202542'
                    strokeWidth={6}
                    size={50}
                    onComplete={() => {
                        //alert
                    }}
                
                >
                    {({ remainingTime }) => {
                        const minutes = Math.floor(remainingTime / 60);
                        const seconds = remainingTime % 60;
                        const formattedTime = `${minutes.toString().padStart(2)}:${seconds.toString().padStart(2, '0')}`;

                        return <Text style={{color:"white",fontWeight:'500',alignSelf:'center',justifyContent:'center'}}>{formattedTime}</Text>;
                    }}
                </CountdownCircleTimer>
            </View>
    );
            
            
    }

    const renderOptions = () => {
        return (
            <View style={{marginTop:50}}>
                {
                    allQuestions[currentQuestionIndex]?.options.map((option, index) => (
                            <CheckBox
                              key={index}
                              title={option.label}
                              checked={checkedItems[option.value]}
                              containerStyle={{
                                  borderWidth: 3, 
                                  borderColor: '#1E90FF',
                                  backgroundColor:'#1E90FF' +'50',
                                  height: 70,
                                  borderRadius: 10,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  paddingHorizontal: 20,
                                  marginVertical: 15
                                }}
                              titleProps={{ style: { color: 'white' , marginLeft:10,fontSize:16,fontWeight:'300'} }}
                              onPress={() => handleCheckBoxChange(option.value)}
                            />
                          ))}
                    
                
            </View>
        )
    }

  



    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={'#252c4a'} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: "#252C4A",
               position:'relative'
           }}>
            
                {/* Timer */}
               { renderTimer() }

               {renderOptions()}  

           </View>
       </SafeAreaView>
    )
}

export default CheckScreen
