import React,{Component} from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import TabBarItem from './TabBarItem';
import HomeScreen from '../pages/HomePage';
import MineScreen from '../pages/MinePage';
import ProductScreen from '../pages/ProductPage';

const Tab = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({ focused, tintColor }) => ( 
              <TabBarItem 
                focused = { focused }
                normalImage = { require('../images/nav/nav_fav.png') }
                selectedImage = { require('../images/nav/nav_fav_active.png') }
                />
            )
        })
    },

    Mine: {
        screen: MineScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: '我',
            tabBarIcon: ({ focused, tintColor }) => ( 
              <TabBarItem 
                focused = { focused }
                normalImage = { require('../images/nav/tab_me.png') }
                selectedImage = { require('../images/nav/tab_me_select.png') }
                />
            )
        })
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#06c1ae',
        inactiveTintColor: '#979797',
        style: { backgroundColor: '#ffffff' },
        labelStyle: {
            fontSize: 16 // 文字大小
        }
    }
});

export default StackNavigator({
    Tab: { 
      screen: Tab,
      navigationOptions:{
        header:null
      }
    },
    Product: { 
      screen: ProductScreen,
      navigationOptions:{
        headerTitle:'产品页'
      }
    }
}, {
    headerMode: 'screen',
    model:'card',
    navigationOptions: {
        gesturesEnabled: false
    }
});