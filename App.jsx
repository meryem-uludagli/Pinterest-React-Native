import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigator/Navigation';
import {DataProvider} from './src/context/Data';

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </DataProvider>
  );
}
