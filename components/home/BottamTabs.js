import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from 'react-native-vector-icons'

const BottamTabs = () => {
  return (
    <View 
        style={{
            flexDirection:'row',
            margin: 10,
            marginHorizontal:30,
            justifyContent:'space-between'
        }}
    >
     <Icon icon="home" text="home"/>
     <Icon icon="search" text="Browse"/>
     <Icon icon="shopping-bag" text="Grocery"/>
     <Icon icon="receipt" text="Orders"/>
     <Icon icon="user" text="Account"/>
    </View>
  );
};

export default BottamTabs;

const Icon = (props) => (
    <TouchableOpacity>
         <View>
            <FontAwesome5 name={props.icon} size={25} style={{
                marginBottom:3, alignSelf:"center"
                }}
            />
        </View>
    </TouchableOpacity>
   
   
)