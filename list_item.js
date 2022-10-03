import { View, Text, StyleSheet,} from 'react-native'
import React from 'react'

// Functional component... Course card
export default function ListItem(props){
    return(
      <View style = {styles.listItem}>
        <Text style = {{fontSize:18}}>{props.name}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    listItem:{
      backgroundColor:'#C5B3FF',
      margin: 3,
      padding: 8,
      borderRadius: 15
    }
  });