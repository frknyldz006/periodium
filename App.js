/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import React, {useState} from 'react';

const picsumImages = new Array(110).fill('H');
const customData = require('./assets/periodictable.json');

function renderItem({item}) {
  return (
    <TouchableOpacity style={item.key == 'empty' ? styles.empty : styles.test}>
      <View style={item.key == 'empty' ? {opacity: 0} : styles.container}>
        <View style={styles.border}>
          <View style={styles.item}>
            <Text style={{fontSize: 8}}>{item.number}</Text>
            <Text style={{fontSize: 16}}>{item.symbol}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const Periodium = () => {
  const [images, setImages] = React.useState(picsumImages);
  return (
    <SafeAreaView>
      <View style={styles.list}>
        <Text style={styles.text}>Periodium</Text>
        <FlatList
          data={customData.elements}
          renderItem={renderItem}
          numRows={7}
          numColumns={18}
          style={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },
  flatList: {},
  flatList2: {
    position: 'absolute',
    top: 260,
    left: 160,
  },
  container: {
    padding: 2,
  },
  empty: {
    padding: 2,
  },
  border: {
    padding: 1,
    opacity: 100,
  },
  text: {
    alignText: 'center',
    paddingTop: 10,
    fontSize: 20,
    color: 'white',
  },

  item: {
    height: 36,
    width: 36,
    borderRadius: 8,
    paddingLeft: 4,
    justifyContent: 'center',
    backgroundColor: 'mediumspringgreen',
  },
  test: {},
});
export default Periodium;
