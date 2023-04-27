import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);

  const handleSubmit = () => {
    const handleSubmit = async () => {
      // Create an object representing the question and choices.
      const questionData = {
        question: question,
        choices: choices,
      };
    
      try {
        // Send a POST request to the Django backend to store the question.
        const response = await axios.post(
          'http://your-django-api-url/questions/',
          questionData,
        );
    
        // Log the response from the backend to the console for debugging.
        console.log(response.data);
    
        // Clear the form after the question is stored.
        setQuestion('');
        setChoices(['', '', '', '']);
      } catch (error) {
        // Log any errors that occur during the request.
        console.error(error);
      }
    };
    
  };

  const handleChoiceChange = (choiceIndex, text) => {
    const newChoices = [...choices];
    newChoices[choiceIndex] = text;
    setChoices(newChoices);
  };

  return (
    <View>
      <Text>Question:</Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Type your question here"
      />

      <Text>Choices:</Text>
      {[0, 1, 2, 3].map((choiceIndex) => (
        <View key={choiceIndex}>
          <TextInput
            value={choices[choiceIndex]}
            onChangeText={(text) => handleChoiceChange(choiceIndex, text)}
            placeholder={`Choice ${choiceIndex + 1}`}
          />

          <TouchableOpacity onPress={() => {}}>
            <Icon name="minus" type="font-awesome" />
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionForm;
