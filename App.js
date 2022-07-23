import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const picsumImages = new Array(126).fill('http://placeimg.com/640/360/any');

function renderItem({item}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.border}>
          <Image source={{uri: item}} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const Periodium = () => {
  const [images, setImages] = React.useState(picsumImages);
  return (
    <View style={styles.list}>
      <Text style={styles.text}>Periodium</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        numRows={7}
        numColumns={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
  },
  container: {
    padding: 2,
  },
  border: {
    backgroundColor: '#87ceeb',
    padding: 1,
  },
  text: {
    alignText: 'center',
    padding: 5,
    fontSize: 20,
  },
  image: {
    height: 36,
    width: 36,
    opacity: 0,
  },
});
export default Periodium;
