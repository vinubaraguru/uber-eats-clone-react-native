import { ScrollView, Text, View, Image } from 'react-native';
import React from 'react';

const items = [
    {
        image : require('../../assets/images/shopping-bag.png'),
        text :"Pick-up"
    },
    {
        image : require('../../assets/images/soft-drink.png'),
        text :"Soft Drinks"
    },
    {
        image : require('../../assets/images/bread.png'),
        text :"Bakery Items"
    },
    {
        image : require('../../assets/images/fast-food.png'),
        text :"Fast Foods"
    },
    {
        image : require('../../assets/images/deals.png'),
        text :"Deals"
    },
    {
        image : require('../../assets/images/desserts.png'),
        text :"Desserts"
    },
    {
        image : require('../../assets/images/coffee.png'),
        text :"Coffee & Tea"
    },
]

const Categories = () => {
  return (
      <View style={{marginTop:5, backgroundColor:"#fff", paddingVertical:10, paddingLeft:20 }} >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[0].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[0].text}</Text>
            </View>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[1].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[1].text}</Text>
            </View>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[2].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[2].text}</Text>
            </View>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[3].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[3].text}</Text>
            </View>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[4].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[4].text}</Text>
            </View>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[5].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[5].text}</Text>
            </View>
            <View style={{alignItems:'center', marginRight:20}}>
                <Image
                    source={items[6].image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>{items[6].text}</Text>
            </View>
        </ScrollView>
      </View>
    
  );
};

export default Categories;
