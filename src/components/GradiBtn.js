import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IcPlus } from '@/assets/icons';

function GradiBtn({ title, onPress }) {
  return (
    <Pressable style={styles.shadow} onPress={onPress}>
      <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#E6EFF6']}
        locations={[0, 0.12, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <IcPlus />
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    width: '100%',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    gap: 12,
  },
  text: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 22,
  },
});

export default GradiBtn;
