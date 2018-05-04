import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    Image,
    TextInput,
    TouchableHighlight,
    Dimensions,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';

var { height, width } = Dimensions.get('window');

export default class HomePage extends Component { 
    constructor(props){
      super(props);
      this.state = {
        text:'宝贝名称/关键词(如：连衣裙)'
      }
    }
    render() {
        return ( 
          <View style = {{ position: 'relative' }} >
            <View style = { styles.search }>
              <TouchableHighlight onPress = {() => this.props.navigation.navigate('Product') }>
                <View style={styles.search_wrapp}>
                  <Text style={{height: 30,lineHeight:30, width:width - 100,backgroundColor: 'rgba(255, 255, 255, .5)',marginRight:10,paddingLeft:20,borderRadius:15}}>宝贝名称/关键词(如：连衣裙)</Text>
                  <Text style={{color:'#ffffff'}}>搜索</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style = { styles.header } >
              <Swiper style={styles.wrapper} height={250} loop={true} autoplay={true} paginationStyle={{bottom: 5}} autoplayTimeout={5}>
                <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                  <Image resizeMode='stretch' style={styles.image} source={require('../images/banner.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                  <Image resizeMode='stretch' style={styles.image} source={require('../images/banner1.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                  <Image resizeMode='stretch' style={styles.image} source={require('../images/banner2.jpg')} />
                </View>
              </Swiper>
            </View> 
            <View style = { styles.notice } >
              <Text > 通知 </Text> 
            </View> 
            <View style = { styles.recommond } >
              <Text > 推荐 </Text> 
            </View> 
            <View style = { styles.products } >
              <Text > 产品 </Text> 
            </View> 
          </View>
        )
    }
}
const styles = StyleSheet.create({
    search: {
        width: width - 20,
        marginHorizontal: 10,
        position: 'absolute',
        left: 0,
        top: 20,
        zIndex: 99
    },
    search_wrapp:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: 250,
        backgroundColor: '#ff4400'
    },
    notice: {
        height: 50,
        backgroundColor: '#ff4400'
    },
    recommond: {
        height: 80,
        backgroundColor: '#ff4400'
    },
    products: {
        backgroundColor: '#ff4400'
    },
    wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width,
    flex: 1
  }
});