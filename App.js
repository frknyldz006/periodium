/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
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
const Periodium = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={item.key == 'empty' ? styles.empty : styles.test}
        onPress={() => {
          if (element.symbol == '') {
            setElement(item);
            setZoom(!zoom);
          }
          if (element.symbol == item.symbol) {
            console.log('== ' + element.symbol);

            setElement(item);
            setZoom(!zoom);
          }
          if (element.symbol != item.symbol) {
            if (zoom == true) {
              setElement(item);
            }
            if (zoom == false) {
              setElement(item);
              setZoom(!zoom);
            }
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
  const [element, setElement] = React.useState({symbol: ''});

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', backgroundColor: '#ffafcc'}}>
        <ScrollView>
          <View
            style={
              zoom == false
                ? {position: 'absolute', left: 250, top: 50}
                : {position: 'absolute', left: 165, top: 30}
            }>
            <Image
              source={require('./assets/images/table.png')}
              style={{height: 80, width: 150}}
            />
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
          <View>
            <Text style={styles.text2}>2022 © Furkan Yıldız</Text>
          </View>
        </ScrollView>
        <View
          style={
            zoom == true
              ? {
                  width: 200,
                  backgroundColor: '#DD97B1',
                  alignItems: 'center',
                }
              : {width: 0}
          }>
          <ScrollView style={{}}>
            <Text style={styles.text}>{element.name}</Text>
            <Text style={styles.text2}>{element.atomic_mass}</Text>
            <Text style={styles.text2}>{element.summary}</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    paddingTop: 10,
  },
  list2: {
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingLeft: 5,
  },
  shortList: {paddingTop: 10, paddingLeft: 40, alignItems: 'center'},
  shortList2: {
    paddingTop: 5,
    paddingLeft: 75,
    alignItems: 'flex-start',
    paddingBottom: 25,
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
    padding: 10,
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
    backgroundColor: '#ffc8dd',
    elevation: 1,
  },
  item2: {
    height: 28,
    width: 28,
    borderRadius: 4,
    paddingLeft: 2,
    justifyContent: 'center',
    backgroundColor: '#ffc8dd',
    elevation: 1,
  },
});
export default Periodium;
