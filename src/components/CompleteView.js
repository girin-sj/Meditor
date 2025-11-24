import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IcCheck } from '@/assets/icons';

function CompleteView({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <IcCheck />
      <View style={styles.txtWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  txtWrapper: {
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#9A9EA8',
  },
});

export default CompleteView;
