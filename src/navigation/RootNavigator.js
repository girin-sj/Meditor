import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import UserScreen from '../screens/user/UserScreen';
import RecordScreen from '../screens/treat/RecordScreen';
import SummaryScreen from '../screens/treat/SummaryScreen';
import ScriptScreen from '../screens/treat/ScriptScreen';
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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';

        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: 
          routeName === 'RecordScreen' 
            ? { display: 'none' }
       : {
          height: 58,
          paddingTop: 10,
          paddingBottom: 14,
          borderTopWidth: 0,
          backgroundColor: '#F6F6F6',
        },
      }}
    }
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <IcHomeOn /> : <IcHome />),
        }}
      />
      <Tab.Screen
        name="CalendarTab"
        component={CalendarStackScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IcCalendarOn /> : <IcCalendar />,
        }}
      />
      <Tab.Screen
        name="ContactsTab"
        component={ContactStackScreen}
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

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="ScriptScreen" component={ScriptScreen} />
    </Stack.Navigator>
  );
}

function CalendarStackScreen() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="ScriptScreen" component={ScriptScreen} />
    </Stack.Navigator>
  )
}

function ContactStackScreen() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="ScriptScreen" component={ScriptScreen} />
    </Stack.Navigator>
  )
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
    </Stack.Navigator>
  );
}

export default RootNavigator;
