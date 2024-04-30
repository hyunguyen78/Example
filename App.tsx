import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {};

const App = (props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22, fontFamily: 'QuickSand-Bold'}}>
        React Native Vector Icons
      </Text>
      <View
        style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 100}}>
        <Ionicons name="accessibility-outline" size={30} />
        <Ionicons name="add-outline" size={30} />
        <Ionicons name="airplane-outline" size={30} />
        <Ionicons name="albums-outline" size={30} />
        <Ionicons name="alert-outline" size={30} />
        <Ionicons name="arrow-forward-circle-outline" size={30} />
        <Ionicons name="arrow-redo-outline" size={30} />
        <Ionicons name="car-sport-outline" size={30} />
        <Ionicons name="cog-outline-outline" size={30} />
        <Ionicons name="eyedrop-outline" size={30} />
        <Ionicons name="language-outline" size={30} />
        <Ionicons name="mail-outline" size={30} />
      </View>

      <Text style={{fontSize: 22, fontFamily: 'QuickSand-Bold', marginTop: 20}}>
        React Native Font Family
      </Text>
      <Text style={{fontSize: 18, fontFamily: 'QuickSand-Light'}}>
        Font Light
      </Text>

      <Text style={{fontSize: 18, fontFamily: 'QuickSand-Regular'}}>
        Font Regular
      </Text>
      <Text style={{fontSize: 18, fontFamily: 'QuickSand-Medium'}}>
        Font Medium
      </Text>

      <Text style={{fontSize: 18, fontFamily: 'QuickSand-Bold'}}>
        Font Bold
      </Text>

      <Text style={{fontSize: 18, fontFamily: 'QuickSand-SemiBold'}}>
        Font SemiBold
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontFamily: 'Quicksand-SemiBold',
  },
});
