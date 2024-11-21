import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {DataContext} from '../context/Data'; // Context adını düzgün içe aktarıyoruz.

const Render = () => {
  const {pinterestPosts} = useContext(DataContext); // Doğru context'e erişiyoruz.
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Card', {item})}
      style={styles.item}>
      <Image style={styles.image} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pinterestPosts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Render;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: 7,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 9,
  },
});
