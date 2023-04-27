import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Pressable } from 'react-native';

const MultipleChoiceQuestion = ({ question, options, onSelect, }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer]=useState(null)
  const [questionData, setQuestionData]=useState(null)
  const handleSubmit = () => {
    setAnswer(selectedOption)
    setQuestionData(question)
    fetch('http://172.26.2.202:8000/api/save-answer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token fe57507f32c6f1ecb6bfc6f5eb62dc368285b94f`,
      },
      body: JSON.stringify({
        question: questionData,
        selectedOption: answer,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.questionWrap}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => handleOptionSelect(option)}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption,
          ]}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === option && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>

        </TouchableOpacity>
      ))}
      </View>
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>პასუხის დადასტურება</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  
    option: {
    width:220,
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius:10,
  },
  optionText: {
    color: '#000',
    fontSize:18,
  },
  selectedOption: {
    backgroundColor: '#03A89E',
    borderColor:'white'
  },
  selectedOptionText: {
    color: '#FFF',
  },
  question:{
    marginTop:20,
    margin:15,
    fontSize:18,
},
questionWrap:{
    marginTop:70,
    justifyContent:'center',
    alignItems:'center'
    
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
});

export default MultipleChoiceQuestion;


