import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';


import TopBar from '../components/bottomBar/bottomBar.js';
import DataAddingBar from '../components/topBar/topBar.js';
import ListItem from '../components/list_Item/list_item.js';


export default function Main({ navigation }) {


  // Data inputs
  const [inputText, setInputText] = useState('');
  const [inputText2, setInputText2] = useState('');
  
  // Setting courses
  const [courseList, setCourseList] = useState([]);

  // Set Total credits
  const [previousVal, setPreviousVal] = useState(0);
  
  function totCredits(){
    if(inputText && inputText2 !== ""){
      const credit = Number(inputText2);
      setPreviousVal(0);
      let sum = credit + previousVal;
      setPreviousVal(sum);
      return sum;
    } 
    else{
      return 0;
    }
  }

  // Set Total amount
  function totAmount(){
    //console.log(clearAmount);
    const credits = totCredits();
    const amount = credits * 3500;
    return amount;
  }
  
  // Set total courses
  function totCourses(){
    if(inputText && inputText2 !== ""){
      const count = courseList.length + 1;
      return count;
    }
    else{
      return 0;
    }
  }

  // adding course function
  function addText(text1, text2) {
    if (inputText && inputText2 !== ""){
      const output = text1 + "\n" + "Credits - "+ text2;
      setCourseList(prev => {
        return [
          ...prev,
          output
        ]
      });
    setInputText();
    setInputText2();
    }
    else{
      alert("Please enter course and credit value");
    }
    
  }

  // Clear function
  function clear(){
    setCourseList([]);
    setTC(0);
    setCR(0);
    setAM(0);
    setPreviousVal(0);
  }
  

//console.log(courseList);

  // Button function
  const [CR, setCR] = useState(0);
  const [AM, setAM] = useState(0);
  const [TC, setTC] = useState(0);
  function pressHandler(){
    addText(inputText, inputText2);
    setCR(totCredits());
    setAM(totAmount());
    setTC(totCourses());
    // console.log(totCredits());
    // console.log(totAmount());
    // console.log(totCourses());
  }
  

  return (
    <View style = {styles.container}>
      <View style = {styles.headContainer}>
        {/*<Text style = {styles.head}>OUSL Credit Cal</Text>*/}
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('About')}
        style = {{margin:5, marginLeft:350}}
      >
        <Text style = {{backgroundColor:'#C5B3FF', padding: 2, width: 45, borderRadius:7}}>
          About
        </Text>
      </TouchableOpacity>
      {/* data representing bar */}
      <TopBar
        CR = {CR}
        AM = {AM}
        TC = {TC}
      />

      {/* Content pane */}
      <ScrollView style = {{padding:5, margin: 5}} vertical = {true}>
        <FlatList style = {{}}
          data = {courseList}
          renderItem = {({item}) => <ListItem name = {item}/>}
        />
      </ScrollView>

      {/* <Button title='settings' onPress={() => navigation.navigate('Settings')}/> */}

      <DataAddingBar
        value1 = {inputText}
        onChangeText1 = {(text) => setInputText(text)}
        value2 = {inputText2}
        onChangeText2 = {(text) => setInputText2(text)}
        onPressEnter = {() => pressHandler()}
        onPressDelete = {() => clear()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //margin: 10,
    //marginTop:5
  },
  head:{
    backgroundColor:'#C5B3FF',
    padding:10,
    width: Dimensions.get('window').width,
    textAlign:'center',
    fontSize:20,
    fontWeight:'700'
  },
  headContainer:{
    alignItems:'center'
  },
  
});
