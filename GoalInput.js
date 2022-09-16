import { useState } from 'react';
import {View,StyleSheet,TextInput,Button,Modal,Image}from'react-native';

    function GoalInput(props){
    const[enteredGoalText,setEnteredGoalText]=useState('');

    
    function GoalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
   
  };
  function addgoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

    return(
        <Modal visible={props.visible}animationType="side">
    <View style={styles.inputContanier}>
    <Image style={styles.Image} source={require('../assets/images/large.png')}/>

    <TextInput style={styles.inputText} 
    placeholder="اهدافك"
    onChangeText={GoalInputHandler}
    value={enteredGoalText}
    />
    <View style={styles.ButtonContainer}>
        <View style={styles.Button}>
            <Button title="اضف الهدف" onPress={addgoalHandler} color="#5e0acc"/>
        </View>

    <View style={styles.Button} >
        <Button title="الغاء"  onPress={props.onCancel} color="#f31282"/>
        </View>
    
    </View>
    
    
    </View>
    </Modal>
);
}

export default GoalInput;
const styles = StyleSheet.create({

    inputContanier:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      backgroundColor:'grey',
      padding:16,
      },
      
inputText:{
    borderWidth:1,
    borderColor:'black',
    width:'90%',
    borderRadius:6,
    padding:5,
},
ButtonContainer:{
    marginTop:16,
    flexDirection:'row'
    

},
Button:{
width:'30%',
marginHorizontal:8,
},
Image:{
width:100,
height:100,
margin:16,
},

});

