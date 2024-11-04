import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Render from '../component/Render';

const Profile = () => {
  const user = {
    name: 'Meryem Uludagli',
    followers: 967,
    following: 300,
    profileImage:
      'https://i.pinimg.com/564x/40/c3/0d/40c30dca70da6777f2f3de8b2407c9b9.jpg',
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={[user]}
      renderItem={({item}) => (
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{uri: item.profileImage}}
          />
          <Text style={styles.name}>{item.name}</Text>
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
            <Text style={styles.followCount}>{item.followers} Followers</Text>
            <Text style={styles.separator}> · </Text>
            <Text style={styles.followCount}>{item.following} Following</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.name}
      ListHeaderComponent={<View style={styles.headerSpacer} />}
      ListFooterComponent={<Render />}
      contentContainerStyle={styles.container}
    />
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    marginTop: 10,
  },
  followCount: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  separator: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    margin: 2,
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSpacer: {
    height: 20,
  },
});
