import React, {useState} from 'react';
import {StyleSheet, ScrollView, TextInput, View} from 'react-native';
import Category from '../component/Categories';
import {SearchNormal1} from 'iconsax-react-native';
import {categories} from '../context/Category.js';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchNormal1 size="20" color="#555555" />
        <TextInput
          style={styles.searchBar}
          placeholder="Search "
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

      <ScrollView>
        {filteredCategories.map(category => (
          <Category
            key={category.id}
            title={category.title}
            images={category.images}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: '#333',
  },
});

export default SearchPage;
