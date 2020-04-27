import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import HomePage from './HomePage';
import Home from './Component/Home';

 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       email:'',
       password:'',
  
     }
   }

   
   render(){
     return (
          <View style={styles.container}>
          <HomePage />
          <Home/>
          
                    
   </View>
     ) ;
   }
   
  };
  
  const styles=StyleSheet.create({
    container:{
       
    },

  })
      export default App;
    
