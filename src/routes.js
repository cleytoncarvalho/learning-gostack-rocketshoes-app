import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

import colors from './styles/colors';

const MainNavigator = createStackNavigator(
  {
    Main,
    Cart,
  },
  {
    defaultNavigationOptions: navigation => ({
      header: <Header {...navigation} />,
    }),
    cardStyle: {
      backgroundColor: colors.mint.b,
    },
  }
);

const Routes = createAppContainer(MainNavigator);

export default Routes;
