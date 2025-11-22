import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import UserScreen from '../screens/user/UserScreen';
import RecordScreen from '../screens/home/RecordScreen';
import {
  IcHome,
  IcCalendar,
  IcContacts,
  IcUser,
  IcHomeOn,
  IcCalendarOn,
  IcContactsOn,
  IcUserOn,
} from '@/assets/icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 58,
          paddingTop: 10,
          paddingBottom: 14,
          borderTopWidth: 0,
          backgroundColor: '#F6F6F6',
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <IcHomeOn /> : <IcHome />),
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IcCalendarOn /> : <IcCalendar />,
        }}
      />
      <Tab.Screen
        name="ContactsTab"
        component={ContactsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IcContactsOn /> : <IcContacts />,
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <IcUserOn /> : <IcUser />),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
