import { useState } from 'react';
import { StyleSheet,FlatList,View,Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const[modeIsVisible,setModalVisible]=useState(false);
  const[CourseGoals,setCourseGoals,]=useState([]);

  function startAddGoalHandler(){
    setModalVisible(true);
  }
  function endAddGoalHandler(){
setModalVisible(false);
  }

  function AddGoalHandler(enteredGoalText){
  setCourseGoals(currentCourseGoal =>
    [...currentCourseGoal,
    {text: enteredGoalText,id:Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  function DeleteGoalHandler(id){
   setCourseGoals(currentCourseGoal =>{
    return currentCourseGoal.filter((goal)=>goal.id !==id);
  });
  }
  return (
   
    <View style={styles.appcontainer} >
      <Button title='حدد هدف جديد' color="#5e0acc"
      onPress={startAddGoalHandler}/>
      
      <GoalInput
       visible={modeIsVisible}
       onAddGoal={AddGoalHandler}
        onCancel={endAddGoalHandler}/>
       
       
      <View style={styles.ListGoals}>
      <FlatList 
        data ={CourseGoals} 
        renderItem={(itemData) => {
       return(
       <GoalItem
        text={itemData.item.text}
        id={itemData.item.id}
         onDeleteItem={DeleteGoalHandler}/>

  );}} 
      keyExtractor={(item,index)=>{
        return item.id;
      }}
      alwaysBounceVertical ={false}
      />
        
        
    </View>
    
    </View>
  
  );

}

const styles = StyleSheet.create({

appcontainer:{
  paddingTop:50,
backgroundColor:'grey',
 paddingHorizontal:16,
 flex:1,


  
},


ListGoals:{
flex:5

},
});
