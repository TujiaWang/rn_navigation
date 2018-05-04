import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    Dimensions,
    View
} from 'react-native';
var {height, width} = Dimensions.get('window')
export default class HomePage extends Component {
  
  render() {
      return ( 
          <View style={{position:'relative'}}>
            <View style={styles.search}>
              <Text>搜索</Text>
            </View>
            <View style={styles.header}>
              <Text>首页</Text>
            </View>
            <View style={styles.notice}>
              <Text>首页</Text>
            </View>
            <View style={styles.recommond}>
              <Text>首页</Text>
            </View>
            <View style={styles.products}>
              <Text>首页</Text>
            </View>
            <Button
              title="Go to Home"
              onPress={() => this.props.navigation.navigate('Product')}
            />
          </View>
      )
  }
}
const styles = StyleSheet.create({
    search:{
      width:width,
      position: 'absolute',
      left:0,
      top:20,
      zIndex:99,
      height: 30,
      backgroundColor: 'rgba(255, 255, 255, .5)'
    },
    header: {
        height: 100,
        backgroundColor: '#ff4400'
    },
    notice:{
        height: 50,
        backgroundColor: '#ff4400'
    },
    recommond:{
        height: 80,
        backgroundColor: '#ff4400'
    },
    products:{
        backgroundColor: '#ff4400'
    }
});