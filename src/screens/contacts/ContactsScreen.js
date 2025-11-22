import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ContactsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.text}>Contacts Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  text: {
    fontSize: 24,
  },
});

export default ContactsScreen;
