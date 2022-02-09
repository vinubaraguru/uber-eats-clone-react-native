import { View,ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import Searchbar from '../components/home/Searchbar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements';
import BottamTabs from '../components/home/BottamTabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    // const yelpUrl = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
    // const apiOptions = {
    //     headers: {
    //     Authorization: `Bearer ${YELP_API_KEY}`,
    //     },
    // };
    
    // return fetch(yelpUrl, apiOptions)
    //     .then((res) => res.json())
    //     .then((json) =>
    //     setRestaurantData(
    //         json.businesses.filter((business) =>
    //         business.transactions.includes(activeTab.toLowerCase())
    //         )
    //     )
    //     );
    };

  useEffect(() => {
    getRestaurantsFromYelp();
    }, [city, activeTab]);

  return (
    <SafeAreaProvider style={{backgroundColor:'#eee', flex:1}}>
        <View style={{backgroundColor:'white', padding:15}}>
            <HeaderTabs activeTab = {activeTab} setActiveTab={setActiveTab} />
            <Searchbar  cityHandler={setCity}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItems restaurantData={restaurantData}/>
        </ScrollView>
        <Divider width={1}/>
        <BottamTabs/>
    </SafeAreaProvider>
  );
};

export default Home;
