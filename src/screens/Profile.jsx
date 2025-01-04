import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {DataContext} from '../context/Data';

const Profile = () => {
  const navigation = useNavigation();
  const {pinterestPosts} = useContext(DataContext);

  const user = {
    name: 'Meryem Uludagli',
    followers: 967,
    following: 300,
    profileImage:
      'https://i.pinimg.com/564x/40/c3/0d/40c30dca70da6777f2f3de8b2407c9b9.jpg',
  };

  const renderGridItem = ({item}) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate('Card', {item})}
      activeOpacity={0.9}>
      <Image style={styles.gridImage} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={{uri: user.profileImage}}
            />
            <Text style={styles.name}>{user.name}</Text>
            <View style={styles.usernameContainer}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
                }}
              />
              <Text style={styles.username}>meryemuludagli</Text>
            </View>
            <View style={styles.followContainer}>
              <Text style={styles.followCount}>{user.followers} Followers</Text>
              <Text style={styles.separator}> · </Text>
              <Text style={styles.followCount}>{user.following} Following</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        )}
        data={pinterestPosts}
        renderItem={renderGridItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContent: {
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  profileContainer: {
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  followCount: {
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },
  separator: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 8,
  },
  editButton: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginBottom: 24,
  },
  editButtonText: {
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },
  gridItem: {
    flex: 1,
    margin: 4,
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  gridImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
});
