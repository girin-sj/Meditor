import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {
  IcShare,
  IcVoiceRead,
  IcRightWhite,
  IcPauseBlue,
} from '@/assets/icons';
import GradiBtn from '@/components/GradiBtn';
import { INITIAL_TREAT } from './TreatExampleData';
import Tts from 'react-native-tts';

function SummaryScreen({ route, navigation }) {
  const { id, isNew, hideScript } = route.params || {};
  const treatData =
    INITIAL_TREAT.find(item => item.id === id) || INITIAL_TREAT[0];
  const [photoTaken, setPhotoTaken] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (!isNew) {
        if (treatData.prescriptions?.length > 0) {
        setPhotoTaken(true);
      }
    }
  }, [isNew, treatData]);


  useEffect(() => {
    // TTS 초기 설정
    Tts.setDefaultLanguage('ko-KR');
    Tts.setDefaultRate(0.5);
    
    Tts.addEventListener('tts-start', () => setIsSpeaking(true));
    Tts.addEventListener('tts-finish', () => setIsSpeaking(false));
    Tts.addEventListener('tts-cancel', () => setIsSpeaking(false));

    return () => {
      Tts.removeAllListeners('tts-start');
      Tts.removeAllListeners('tts-finish');
      Tts.removeAllListeners('tts-cancel');
      Tts.stop();
    };
  }, []);

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhoto: 'true',
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('카메라가 취소되었습니다.');
      } else if (response.errorCode) {
        console.log('카메라 에러: ', response.errorMessage);
      } else {
        console.log('촬영 성공:', response.assets[0]);
        setPhotoTaken(true);
      }
    });
  };

  const handleSelectGallery = () => {
    const options = {
        mediaType:'photo',
        selectionLimit: 1.
    };
     launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('갤러리 선택 취소됨');
    } else if (response.errorMessage) {
      console.log('갤러리 에러:', response.errorMessage);
    } else {
      console.log('갤러리 선택 성공:', response.assets[0]);
      setPhotoTaken(true);
    }
  });
  };

  const handleSelect = () => {
    Alert.alert(
        "처방전 사진 추가","사진을 입력방식을 선택하시오",[
            {text: "촬영", onPress:handleOpenCamera},
            {text: "갤러리", onPress:handleSelectGallery},
            {text: "취소", style:"cancel"}
        ]
    )
  }

  const handleSpeak = () => {
    if (isSpeaking) {
      Tts.stop();
    } else {
      // 진료 요약 내용을 텍스트로 변환
      let fullText = `${treatData.title}. ${treatData.subtitle}. `;

      fullText += '진단 소견. ';
      treatData.diagnosis.forEach(item => {
        fullText += `${item}. `;
      });

      if (photoTaken && treatData.prescriptions) {
        fullText += '처방 약물. ';
        treatData.prescriptions.forEach(prescription => {
          fullText += `${prescription.name}. ${prescription.description}. ${prescription.dosage}. `;
          if (prescription.warning) {
            fullText += `${prescription.warning}. `;
          }
        });
      }

      fullText += '치료 및 관리. ';
      treatData.treatmentAndCare.forEach(item => {
        fullText += `${item}. `;
      });


    }
  };

  return (
    <SafeAreaView style={styles.wrap} edges={['top', 'bottom']}>
      <ScrollView style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.title}>진료 요약</Text>
          <Pressable>
            <IcShare />
          </Pressable>
        </View>

        <View style={styles.headerBox}>
          <Text style={styles.headerSmall}>{treatData.title}</Text>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>{treatData.subtitle}</Text>
            <Pressable onPress={handleSpeak}>
              <View style={styles.voiceRow}>
                {isSpeaking ? <IcPauseBlue /> : <IcVoiceRead />}
                <Text style={styles.voiceText}>
                  {isSpeaking ? '정지' : '음성으로 듣기'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionWrap}>
          <Text style={styles.sectionTitle}>진단 소견</Text>
          <View style={styles.sectionBox}>
            {treatData.diagnosis.map((item, index) => (
              <Text key={index} style={styles.describe}>
                • {item}
              </Text>
            ))}
          </View>

          {!photoTaken && (
            <>
              <Text style={styles.sectionTitle}>처방 약물</Text>
              <View style={styles.section}>
                <GradiBtn
                  title={'처방전 입력하기'}
                  onPress={handleSelect}
                />
              </View>
            </>
          )}
          {photoTaken && (
            <>
              <Text style={styles.sectionTitle}>처방 약물</Text>
              {treatData.prescriptions.map((prescription, index) => (
                <View key={index} style={styles.sectionBox}>
                  <Text style={styles.bold}>{prescription.name}</Text>
                  <Text style={styles.describe}>
                    {prescription.description}
                  </Text>
                  <Text style={styles.describe}></Text>
                  <View style={styles.rowBetween}>
                    <Text style={styles.describeeat}>
                      {prescription.dosage}
                    </Text>
                    <Pressable style={styles.alarmBtn}>
                      <Text style={styles.alarmTxt}>+ 복약 알람 추가</Text>
                    </Pressable>
                  </View>

                  {prescription.warning && (
                    <Text style={styles.warning}>{prescription.warning}</Text>
                  )}
                </View>
              ))}
            </>
          )}

          <Text style={styles.sectionTitle}>치료 및 관리</Text>
          <View style={styles.sectionBox}>
            {treatData.treatmentAndCare.map((item, index) => (
              <Text key={index} style={styles.describe}>
                • {item}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      {!hideScript && (
      <Pressable
        style={styles.adContainer}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ScriptScreen', { id })}
      >
        <Text style={styles.adTxt}>
          어떤 대화가 오갔나요? <Text style={styles.adTxtBold}>전문 보기</Text>
        </Text>
        <IcRightWhite />
      </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerBox: {
    marginTop: 15,
    backgroundColor: '#1E56A0',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerSmall: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  voiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6EFF6',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    gap: 5,
  },
  voiceText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#163172',
  },
  sectionWrap: {
    marginTop: 4,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 10,
  },
  section: {
    paddingVertical: 10,
    marginBottom: 15,
  },
  sectionBox: {
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  describe: {
    fontSize: 14,
  },
  describeeat: {
    fontSize: 14,
    color: '#9A9EA8',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alarmTxt: {
    color: '#000',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  warning: {
    color: 'red',
    marginTop: 5,
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#163172',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  adTxt: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  adTxtBold: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
  },
});

export default SummaryScreen;
