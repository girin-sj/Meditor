import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcRightWhite, IcBell } from '@/assets/icons';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.bellWrapper}>
          <IcBell />
          <View style={styles.notificationBadge} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.adContainer}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('RecordScreen')}
      >
      <View style={styles.adContainer}>
        <Text style={styles.adTxt}>
          오늘 하루 수고하신 부모님께,
          <Text style={styles.adTxtBold}> 정관장 홍삼정 20% 세일</Text>
        </Text>
        <IcRightWhite />
      </View>
      </TouchableOpacity>
      <View style={styles.contents}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bellWrapper: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: -2,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#D33B3B',
  },
  adContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#B87F7F',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  adTxt: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  adTxtBold: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
  },
  contents: {
    flex: 1,
  },
});

export default HomeScreen;
