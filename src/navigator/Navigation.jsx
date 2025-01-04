import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AddPage from '../screens/AddPage';
import SearchPage from '../screens/SearchPage';
import Message from '../screens/Message';
import {
  Home2,
  SearchFavorite1,
  ProfileCircle,
  Add,
  Messages1,
} from 'iconsax-react-native';
import Card from '../screens/Card';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Card"
        component={Card}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Card"
        component={Card}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function Navigation() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Home2 size="32" color="#555555" variant="Bold" />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <SearchFavorite1 size="32" color="#555555" variant="Bold" />
          ),
        }}
      />

      <Tab.Screen
        name="add"
        component={AddPage}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Add size="32" color="#555555" variant="Bold" />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Messages1 size="32" color="#555555" variant="Bold" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <ProfileCircle size="32" color="#555555" variant="Bold" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
