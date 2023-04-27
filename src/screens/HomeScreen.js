import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <View style={s.imageWrap}>
        <Image style={s.image} source={{ uri:'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg'}}></Image>
      </View>
      <View>
        <Text style={s.text}>სტუდენტი: სახელი გვარი</Text>
        <Text style={s.secText}>ფაკულტეტი: მედიცინა</Text>
        <Text style={s.secText}>საფეხური: მე-2 კურსი</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const s = StyleSheet.create({
  image:{
    height:200,
    width:200,
    borderRadius:100,

  },
  imageWrap:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:130,
  },
  text:{
    margin:40,
    fontSize:21,
    fontWeight:'600',
    color:"white"
  },
  secText:{
    alignSelf:'center',
    color:"white",
    marginTop:15,
    fontSize:18,
    fontWeight:'500',
  },
})