import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  IcRightWhite,
  IcBell,
  IcRecentTreat,
  IcNote,
  IcRightBlack,
} from '@/assets/icons';
import GradiBtn from '@/components/GradiBtn';

function HomeScreen({ navigation }) {
  const handleAdPress = () => {
    Linking.openURL(
      'https://www.kgcshop.co.kr/index?gad_source=1&gad_campaignid=22306303119&gbraid=0AAAAADMVBU9mQWx-7chaq2WhfSVGn-CkW&gclid=EAIaIQobChMIqpWlp6-LkQMVyAV7Bx3u5Ai6EAAYASAAEgLcY_D_BwE',
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.bellWrapper}>
          <IcBell />
          <View style={styles.notificationBadge} />
        </View>
      </View>
      <Pressable style={styles.adContainer} onPress={handleAdPress}>
        <Text style={styles.adTxt}>
          오늘 하루 수고하신 부모님께,
          <Text style={styles.adTxtBold}> 정관장 홍삼정 20% 세일</Text>
        </Text>
        <IcRightWhite />
      </Pressable>
      <View style={styles.contents}>
        <View style={styles.topcontentsWrapper}>
          <View style={styles.topContents}>
            <View style={styles.titleContainer}>
              <View style={styles.titleWrapper}>
                <IcRecentTreat />
                <Text style={styles.titleTxt}>최근진료</Text>
              </View>
              <View>
                <Text style={styles.subtitleTxt}>
                  {' '}
                  • 온찜질로 통증 완화하기
                </Text>
                <Text style={styles.subtitleTxt}>
                  {' '}
                  • 매일 가벼운 어깨 스트레칭하기
                </Text>
              </View>
            </View>
            <View style={styles.nextTreatWrapper}>
              <Text style={styles.nextTreatTxt}>다음 진료일: 11/09 (일)</Text>
              <Image
                source={require('@/assets/images/ig_homeTreat.png')}
                style={styles.treatImage}
                resizeMode="cover"
              />
            </View>
          </View>
          <GradiBtn
            title={'진료 시작'}
            onPress={() => navigation.navigate('RecordScreen')}
          />
        </View>
        <View style={styles.treatListContainer}>
          <TreatItem dateTxt={'10/31 (금)'} />
          <TreatItem dateTxt={'10/16 (목)'} />
          <TreatItem dateTxt={'09/22 (월)'} isLast />
        </View>
      </View>
    </SafeAreaView>
  );
}

const TreatItem = ({ dateTxt, isLast }) => {
  return (
    <View style={[styles.treatItem, !isLast && styles.treatItemBorder]}>
      <View style={styles.treatLeft}>
        <View style={styles.treatIconWrapper}>
          <IcNote />
        </View>
        <Text style={styles.treatItemText}>
          {dateTxt}
          {'  '}진료내용
        </Text>
      </View>
      <IcRightBlack />
    </View>
  );
};

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
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 24,
    justifyContent: 'center',
    gap: 32,
  },
  topcontentsWrapper: {
    width: '100%',
    gap: 18,
  },
  topContents: {
    width: '100%',
    paddingHorizontal: 8,
    gap: 8,
  },
  titleContainer: {
    gap: 8,
  },
  titleWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  titleTxt: {
    fontFamily: 'KAKAOBIGSANS-EXTRABOLD',
    fontSize: 24,
  },
  subtitleTxt: {
    fontSize: 18,
  },
  nextTreatWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  nextTreatTxt: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 16,
    paddingVertical: 8,
  },
  treatListContainer: {
    width: '100%',
  },
  treatItem: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  treatItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  treatLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  treatItemText: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 16,
  },
  treatIconWrapper: {
    backgroundColor: '#E6EFF6',
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default HomeScreen;
