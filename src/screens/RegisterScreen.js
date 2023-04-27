import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Context } from '../context/globalContext'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] =useState(null);
  const [password, setPassword] =useState(null);
  const [name, setName] = useState(null);
  const val = useContext(Context)

  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Text>{val}</Text>
        <TextInput
          style={s.input}
          value={name}
          placeholder="სახელი გვარი"
          onChangeText={text => setName(text)}
        />

        <TextInput 
        style={s.input} 
        value={email}
        placeholder='შეიყვანეთ ელ-ფოსტა'
        onChangeText={text => setEmail(text)}
        />
        
        <TextInput 
        style={s.input} 
        value={password}
        placeholder='შეიყვანეთ პაროლი' 
        onChangeText={text => setPassword(text)}
        secureTextEntry
        />
        <View style={s.button}>
          <Button title="რეგისტრაცია"/>
        </View>
        <View style={s.reg}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={s.link}>ავტორიზაცია</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  )
}

export default LoginScreen

const s = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  reg:{
    flexDirection:'row',
    marginTop:20
  },
  wrapper:{
    width:'80%'
  },
  input:{
    padding:15,
    marginBottom:12,
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius:5,
    paddingHorizontal:14,
  },
  link:{
    fontWeight:600,
    marginTop:35,
    color: 'blue',
  },
  button:{
    marginHorizontal:70,
    paddingVertical:15,
  }
  

})