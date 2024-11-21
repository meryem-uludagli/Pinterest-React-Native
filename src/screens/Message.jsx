import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MessageEdit, SearchNormal1, ProfileAdd} from 'iconsax-react-native';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchNormal1 size="20" color="#555555" />
        <TextInput
          style={styles.searchBar}
          placeholder="Search by name or email"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.newMessageSection}>
        <MessageEdit size="32" color="red" variant="Bold" />
        <Text style={styles.newMessageTitle}>New message</Text>
      </View>

      {[...Array(6)].map((_, index) => (
        <TouchableOpacity style={styles.messageItem} key={index}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <View style={styles.messageContent}>
            <Text style={styles.name}>Mert</Text>
            <Text style={styles.subtitle}>Sent a Pin</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.inviteSection}>
        <ProfileAdd size="32" color="blue" variant="Bold" />
        <Text style={styles.inviteTitle}>Invite your friends</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    flex: 1,
    color: '#333',
    marginLeft: 8,
  },
  newMessageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  newMessageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  inviteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 19,
    borderColor: '#ddd',
    borderWidth: 1,
    position: 'static',
    bottom: 10,
    left: 16,
    right: 16,
  },
  inviteTitle: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
