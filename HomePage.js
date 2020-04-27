import React from 'react'
import {StyleSheet,View,Text,Button,FlatList} from 'react-native'
import Home from './Component/Home'

 function HomePage() {
    const home =[
            {name:'Pastel'},
            {name:'Raka'},
            {name:'Jhony'}
    ]
    return (
    <View>
       <FlatList
       data={home}
       renderItem={({item})=>{
       return<Home name={item.name}  phone={item.number}/> 
       }}
      keyExtractor={(item)=>item.number}
       />
    </View>
    )
}

export default HomePage


