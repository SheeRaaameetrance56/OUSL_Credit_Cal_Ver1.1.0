import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function topBar(props) {
  return (
    <View style = {styles.container}>
      {/* Data adding bar */}
      <View style = {styles.inputContainer}>
        <TextInput
          multiline
          style = {styles.inputs}
          placeholder='Enter course'
          value={props.value1}
          onChangeText={props.onChangeText1}
        />
        <TextInput
          keyboardType='numeric'
          style = {styles.inputs}
          placeholder='Enter credit amount'
          value={props.value2}
          onChangeText={props.onChangeText2}
        />
        {/* Enter button */}
        <TouchableOpacity style = {styles.button} onPress = {props.onPressEnter}>
          <Text style = {{fontSize:18, color:'#fff'}}>Enter</Text>
        </TouchableOpacity> 
        {/* Delete button */}
        <TouchableOpacity onPress={props.onPressDelete} style = {{marginLeft: 298, marginTop:-20}}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    //margin: 5,
    alignItems:'center'
  },
  inputs:{
    margin:2,
    fontSize:15,
    borderColor:'#C5B3FF',
    borderWidth:2,
    borderRadius:20,
    width: 280,
    height: 40,
    paddingHorizontal: 10
  },
    inputContainer:{
    alignItems:'flex-start',
    marginBottom:20
  },
  button:{
    position:'absolute',
    backgroundColor:'#5E577C',
    marginLeft: 286,
    padding: 10,
    marginTop: 4,
    borderRadius: 20
  },
})