import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {MessageEdit, SearchNormal1, ProfileAdd} from 'iconsax-react-native';

const MessageScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animated.View style={{opacity: fadeAnim}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Messages</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <SearchNormal1 size="20" color="#E60023" />
          <TextInput
            style={styles.searchBar}
            placeholder="Search messages..."
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.newMessageSection}>
          <MessageEdit size="32" color="#E60023" variant="Bold" />
          <Text style={styles.newMessageTitle}>New message</Text>
        </TouchableOpacity>

        <View style={styles.messageList}>
          {[...Array(6)].map((_, index) => (
            <TouchableOpacity
              style={styles.messageItem}
              key={index}
              activeOpacity={0.7}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>M</Text>
              </View>
              <View style={styles.messageContent}>
                <Text style={styles.name}>Mert</Text>
                <Text style={styles.subtitle}>Sent a Pin • 2m ago</Text>
              </View>
              <View style={styles.messageStatus}>
                <View style={styles.unreadBadge} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.inviteSection} activeOpacity={0.8}>
          <ProfileAdd size="32" color="#E60023" variant="Bold" />
          <Text style={styles.inviteTitle}>Invite your friends</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
    backgroundColor: '#FFFFFF',
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
    margin: 16,
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
  searchBar: {
    flex: 1,
    color: '#333',
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  messageList: {
    marginTop: 8,
  },
  newMessageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#E60023',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  newMessageTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E60023',
    marginLeft: 12,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E60023',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  messageContent: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    fontWeight: '400',
  },
  messageStatus: {
    alignItems: 'flex-end',
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E60023',
  },
  inviteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    padding: 16,
    margin: 16,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#E60023',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  inviteTitle: {
    fontSize: 17,
    color: '#E60023',
    fontWeight: '600',
    marginLeft: 12,
  },
});
