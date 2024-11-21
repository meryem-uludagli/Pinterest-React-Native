import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React from 'react';

const Category = ({title, images}) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageScroll}>
        {images.map((image, index) => (
          <Image key={index} source={{uri: image}} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageScroll: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Category;
