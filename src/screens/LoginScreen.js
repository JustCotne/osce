import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Context } from '../context/globalContext'

const LoginScreen = ({ navigation, route, props }) => {
  const globalContext = useContext(Context)
  const { setIsLoggedIn, appSettings, domain, userObj,setUserObj,setToken, isLoggedIn } = globalContext

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    let body = {
      username: email.toLowerCase(),
      password: password
    }

    fetch(`http://192.168.1.102:8000/api/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
    })
      .then(res => {
        // if (res.ok) {
        //   return res.json()
        // } else {
        //   throw res.json()
        // }
        console.log("res",JSON.stringify(res))
      })
      .then(json => {
        // setUserObj(json)
        // setToken(json.token)
        console.log(isLoggedIn)
        setIsLoggedIn(true)
        console.log(isLoggedIn)
        // console.log("json",json)

      })
      .catch(error => { console.error(error) })
  }

  return (
    <View style={s.container}>
      <View style={s.wrapper}>
        <Text>{globalContext}</Text>
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
          <Button title="შესვლა" onPress={handleLogin}/>
        </View>
        <View style={s.reg}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={s.link}>რეგისტრაცია</Text>
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