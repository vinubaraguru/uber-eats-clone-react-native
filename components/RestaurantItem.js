import { Image, TouchableOpacity, View,Text } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://s3-media0.fl.yelpcdn.com/bphoto/FLL1nVPFxwx_6FwxkX5mWQ/o.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

const RestaurantItem = () => {
  return (
      <TouchableOpacity activeOpacity={1} style={{marginBottom:20}}>
          {
            localRestaurants.map((restaurant, index)=>(
               <View
                key={index} 
                style={{marginTop:10, padding:15, backgroundColor:'white'}}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo
                        name = {restaurant.name}
                        rating = { restaurant.rating}
                    />
                </View>
            ))
          }
         
      </TouchableOpacity>
    
  );
};

export default RestaurantItem;

const RestaurantImage = ({image}) => (
    <>
        <Image
            source={{
                uri:image
            }}
            style={{
                width: '100%',
                height: 180
            }}
            
        />
        <TouchableOpacity style={{position:'absolute', right:20, top:20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
        </TouchableOpacity>
    </>
    
)

const RestaurantInfo = ({name, rating}) => (
    <View
        style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop:10
        }}
    >
        <View>
            <Text style={{fontSize:15, fontWeight:'bold'}}>
                {name}
            </Text>
            <Text style={{fontSize:13, color:'gray'}}>
                30-45 mins
            </Text>
        </View>
        <Text 
            style={{
                backgroundColor:'#eee', 
                height:30, 
                width:30, 
                borderRadius:15, 
                justifyContent:'center', 
                alignItems:'center'
            }}>{rating}</Text>
    </View>
)