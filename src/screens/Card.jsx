import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Card = () => {
  const route = useRoute();
  const {item} = route.params || {};

  return (
    <View style={styles.container}>
      {item ? (
        <>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </>
      ) : (
        <Text>No details available</Text>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
