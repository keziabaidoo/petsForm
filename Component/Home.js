import React from 'react'
import {View,Text,Image ,StyleSheet, TextInput} from 'react-native'
import {MaterialIcons,MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons'

export default function Home({name,phone}) {
    return ( <View style={styles.container}>

         <View>
   <Image source={require('../assets/funny.jpg')} style={styles.image}/>
    </View>

   <View style={styles.infoContainer}>

      <View style={styles.textInputContainer}>
    <Text style={[styles.name,styles.input]}numberOfLines={1}>{name}</Text>
    <Text>{phone}</Text>


    <TextInput
      style={styles.input}
      placeholderTextColor='blue'
      placeholder='cat'
    />
      
      <TextInput
      style={styles.input}
      placeholderTextColor='blue'
      placeholder='2 years old'
    />
   
      <View style={styles.iconInput}>
          <SimpleLineIcons style={styles.icon} name='diamond' size={15} color='blue' marginTop={10}/>
          <TextInput
      style={styles.input}
      placeholderTextColor='blue'
      placeholder='Lovely pets '
    /> 
    </View> 
      </View>
    
        </View>
      
  </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:10,
        alignItems:'center',
        backgroundColor:'gray',
        paddingTop:50,
      
    },

    image:{
        height:150,
        width:160,
        borderRadius:15
    },
    infoContainer:{
        justifyContent:'center',
        marginRight:20,
        flex:4
    },
    name:{
        fontWeight:'bold',
        fontSize:17,
        marginBottom:-10,
        color:'blue'
    },
    icon:{
     marginTop:8
    },
    input:{
        marginLeft:15
    },

    iconInput:{
        flexDirection:'row',
        marginLeft:10,
        marginBottom:10,
        
        
    },
    textInputContainer:{
      backgroundColor:'pink',
      borderRadius:10
    }
})

    