import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import Category from '../component/Categories';
import {SearchNormal1, ArrowRight2} from 'iconsax-react-native';
import {categories} from '../context/Category.js';

const trendingSearches = [
  'Home Decoration',
  'Fashion Ideas',
  'DIY Projects',
  'Travel Destinations',
  'Recipes',
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      <View
        style={[
          styles.searchBarContainer,
          isFocused && styles.searchBarFocused,
        ]}>
        <SearchNormal1 size="20" color="#E60023" />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for ideas"
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {searchQuery === '' ? (
          <View style={styles.trendingSection}>
            <Text style={styles.sectionTitle}>Trending Searches</Text>
            {trendingSearches.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.trendingItem}
                onPress={() => setSearchQuery(item)}>
                <View style={styles.trendingItemContent}>
                  <SearchNormal1 size="20" color="#666" variant="Linear" />
                  <Text style={styles.trendingItemText}>{item}</Text>
                </View>
                <ArrowRight2 size="20" color="#666" variant="Linear" />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.categoriesContainer}>
            {filteredCategories.map(category => (
              <Category
                key={category.id}
                title={category.title}
                images={category.images}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 0 : 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    letterSpacing: -0.5,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    height: 48,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  searchBarFocused: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E60023',
  },
  searchBar: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
  },
  trendingSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
    marginBottom: 16,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  trendingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
});

export default SearchPage;
