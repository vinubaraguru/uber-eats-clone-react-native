import { Text, View,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

const HeaderTabs = ({activeTab, setActiveTab}) => {
//   const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{flexDirection:'row', alignSelf:'center'}}>
      <HeaderButton 
        text='Delivery' 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
      <HeaderButton 
        text='Pickup' 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({text,setActiveTab,activeTab}) => (
    <TouchableOpacity
        onPress={()=>setActiveTab(text)}
        style={{
            backgroundColor : activeTab === text ? 'black':'white',
            paddingVertical:10,
            paddingHorizontal:17,
            borderRadius:30,
        }}
    >
        <Text 
            style={{
                color:activeTab === text ? 'white':'black', 
                fontSize:15, 
                fontWeight:"900"
            }}
        >
            {text}
        </Text>
    </TouchableOpacity>
)

export default HeaderTabs;


