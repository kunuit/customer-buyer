import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../../screens/Profile';
import { theme } from '../../../common/theme';
import { Dimensions, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: theme.colors.primary,
            labelStyle: { fontSize: 12, },
            style: {
              backgroundColor: theme.backgrounds.white,
              paddingBottom: 15,
              paddingVertical: 10,
              height: Dimensions.get('window').height * 0.09,
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,
              position: 'absolute',
            },
            showIcon: true,
            showLabel: true,
          }}>
          <Tab.Screen
            name='Shop'
            component={Profile}
            showIcon={true}
            options={{
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
              name='md-nutrition-outline'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
              ),
            }}
          />
          <Tab.Screen
            name='Explore'
            component={Profile}
            options={{
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
              name='md-rocket-outline'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
              ),
            }}
          />
          <Tab.Screen
            name='Cart'
            component={Profile}
            showIcon={true}
            options={{
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
              name='md-cart-outline'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
              ),
            }}
          />
          <Tab.Screen
            name='Favorite'
            component={Profile}
            showIcon={true}
            options={{
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
              name='md-heart-half-outline'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
              ),
            }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            showIcon={true}
            options={{
              tabBarIcon: ({ focused, tintColor }) => (
                <Icon
              name='md-person-outline'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
              ),
            }}
          />
        </Tab.Navigator>
      );
    }
    
export default BottomTab;
