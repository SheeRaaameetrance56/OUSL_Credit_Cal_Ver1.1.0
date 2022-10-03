import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { useState } from 'react';
import React from 'react'
import { A } from '@expo/html-elements';

export default function About(props) {

  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => alert("Enter suggestions to my email for further updates")}>
        <Text style = {{fontSize: 30, textAlign:'center', fontWeight:'600'}}>Developer</Text>
        <Text style = {{fontSize: 25, textAlign:'center'}}>Shehan Wijerathna</Text>
        <Text style = {{fontSize: 20, textAlign:'center'}}>1st Year student at Open university of Srilanka</Text>
        <Text style = {{fontSize: 15, textAlign:'center'}}>App version 1.1.0</Text>
      </TouchableOpacity>
      <Text style = {{fontSize: 15, textAlign:'center', color:'blue', marginTop: 20}}><A href='shehanranjukaw5@gmail.com'>Email : shehanranjukaw5@gmail.com</A></Text>
      <Text style = {{fontSize: 15, textAlign:'center', color:'blue', marginTop: 10}}><A href = 'https://github.com/SheeRaaameetrance56'>GitHub</A></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:15,
    marginTop: 160
  }
})