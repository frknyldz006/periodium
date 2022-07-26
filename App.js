/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

const customData = require('./assets/periodictable.json');
var prevTappedSymbol = '';
var prevTappedItem = '';
const Periodium = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={item.key == 'empty' ? styles.empty : styles.test}
        onPress={() => {
          console.log(item.symbol);
          console.log('prev' + prevTappedSymbol);
          if (prevTappedSymbol == '') {
            prevTappedSymbol = item.symbol;
            prevTappedItem = item;
            setZoom(!zoom);
          }
          if (prevTappedSymbol == item.symbol) {
            prevTappedSymbol = item.symbol;
            prevTappedItem = item;
            console.log('prev2' + prevTappedItem);
            setZoom(!zoom);
          }
          if (prevTappedSymbol != item.symbol) {
            prevTappedSymbol = item.symbol;
            prevTappedItem = item;
            console.log('prev2' + {prevTappedItem});
            setZoom(zoom);
          }
        }}>
        <View style={item.key == 'empty' ? {opacity: 0} : styles.container}>
          <View style={styles.border}>
            <View style={zoom == false ? styles.item : styles.item2}>
              <Text style={zoom == false ? {fontSize: 8} : {fontSize: 4}}>
                {item.number}
              </Text>
              <Text style={zoom == false ? {fontSize: 16} : {fontSize: 12}}>
                {item.symbol}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [zoom, setZoom] = React.useState(false);

  console.log(zoom);
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <ScrollView>
          <View style={styles.list}>
            <Text style={styles.text}>Periodium</Text>
          </View>
          <View style={zoom == false ? styles.list : styles.list2}>
            <FlatList
              data={customData.elements}
              renderItem={renderItem}
              numRows={7}
              numColumns={18}
              style={styles.flatList}
            />
          </View>
          <View style={zoom == false ? styles.shortList : styles.shortList2}>
            <FlatList
              data={customData.l1}
              renderItem={renderItem}
              numRows={2}
              numColumns={15}
              style={styles.flatList}
            />
          </View>
        </ScrollView>
        <View
          style={
            zoom == true
              ? {
                  width: 200,
                  backgroundColor: '#353535',
                  alignItems: 'center',
                }
              : {width: 0}
          }>
          <Text style={styles.text}>{prevTappedItem.name}</Text>
          <Text style={styles.text2}>{prevTappedItem.atomic_mass}</Text>
          <Text style={styles.text2}>{prevTappedItem.summary}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },
  list2: {
    alignItems: 'flex-start',
  },
  shortList: {paddingTop: 10, paddingLeft: 40, alignItems: 'center'},
  shortList2: {paddingTop: 5, paddingLeft: 70, alignItems: 'flex-start'},
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
  text2: {
    alignText: 'center',
    padding: 10,
    fontSize: 14,
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
  item2: {
    height: 28,
    width: 28,
    borderRadius: 4,
    paddingLeft: 2,
    justifyContent: 'center',
    backgroundColor: 'mediumspringgreen',
  },
  test: {},
});
export default Periodium;
