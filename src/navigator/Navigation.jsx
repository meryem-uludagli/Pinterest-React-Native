import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Add from '../screens/Add';
import {Home2, ProfileCircle} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Home2 size="32" color="#FF8A65" />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Add size="32" color="#FF8A65" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <ProfileCircle size="32" color="#FF8A65" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
