import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function bottomBar(props) {
  return (
    <View>
      {/* Bottom bar */}
      <View style = {styles.bottomStatus}>
        <View style = {styles.stat}>
          <Text style = {{fontSize: 16}}>Total credits</Text>
          <Text style = {{fontSize: 16}}>{props.CR}</Text>
        </View>
        <View style = {styles.stat}>
          <Text style = {{fontSize: 16}}>Total amount</Text>
          <Text style = {{fontSize: 16}}>{props.AM}</Text>
        </View>
        <View style = {styles.stat}>
          <Text style = {{fontSize: 16}}>Total courses</Text>
          <Text style = {{fontSize: 16}}>{props.TC}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bottomStatus:{
        flexDirection:'row',
        backgroundColor:'#C5B3FF',
        borderRadius: 20,
        margin: 5
    },
    stat:{
        margin:15,
    },
})