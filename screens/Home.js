import { View, SafeAreaView,ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import Searchbar from '../components/Searchbar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#eee', flex:1}}>
        <View style={{backgroundColor:'white', padding:15}}>
            <HeaderTabs/>
            <Searchbar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItem/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
