import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IcBack, IcDoctor, IcVoiceReadWhite, IcPause } from '@/assets/icons';
import { SCRIPT_MAP } from './TreatExampleData';
import Tts from 'react-native-tts';

function ScriptScreen({ route, navigation }) {
  const { id } = route.params;
  const conversation = SCRIPT_MAP[id];
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // TTS 초기 설정


    Tts.addEventListener('tts-start', () => setIsSpeaking(true));
    Tts.addEventListener('tts-finish', () => setIsSpeaking(false));
    Tts.addEventListener('tts-cancel', () => setIsSpeaking(false));

    return () => {
      Tts.removeAllListeners('tts-start');
      Tts.removeAllListeners('tts-finish');
      Tts.removeAllListeners('tts-cancel');

    };
  }, []);

  const handleExit = () => {

    navigation.navigate('SummaryScreen');
  };

  const handleSpeak = () => {
    if (isSpeaking) {

    } else {
      // 대화 내용을 텍스트로 변환
      const fullText = conversation
        .map(msg => {
          if (msg.keyword) {
            return `진단상 ${msg.keyword}입니다.`;
          }
          return msg.message;
        })
        .join('. ');

      Tts.speak(fullText);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>전문 보기</Text>
        <View style={styles.headerRight}>
          <Pressable style={styles.speakButton} onPress={handleSpeak}>
            {isSpeaking ? <IcPause /> : <IcVoiceReadWhite />}
            <Text style={styles.speakButtonText}>
              {isSpeaking ? '정지' : '음성으로 듣기'}
            </Text>
          </Pressable>
          <Pressable style={styles.exitButton} onPress={handleExit}>
            <IcBack />
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {conversation.map(msg => {
          return msg.speaker === 'doctor' ? (
            <View key={msg.id} style={styles.rowLeft}>
              <IcDoctor style={styles.profileImg} />
              <View style={styles.bubbleLeft}>
                <Text style={styles.bubbleText}>
                  {msg.keyword ? (
                    <>
                      진단상 <Text style={styles.TreatText}>{msg.keyword}</Text>
                      입니다.
                    </>
                  ) : (
                    msg.message
                  )}
                </Text>
              </View>
            </View>
          ) : (
            <View key={msg.id} style={styles.rowRight}>
              <View style={styles.bubbleRight}>
                <Text style={styles.bubbleText}>{msg.message}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.dividerWrap}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>진료가 종료되었습니다</Text>
          <View style={styles.line} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  speakButton: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    backgroundColor: '#1E56A0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  speakButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  exitButton: {
    padding: 10,
  },
  scrollContainer: {
    paddingHorizontal: 25,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  rowRight: {
    alignItems: 'flex-end',
    marginVertical: 8,
  },
  profileImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  bubbleLeft: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    maxWidth: '60%',
  },
  bubbleRight: {
    backgroundColor: '#E4E6EB',
    padding: 15,
    borderRadius: 12,
    maxWidth: '64%',
  },
  bubbleText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  TreatText: {
    fontSize: 15,
    color: '#1E56A0',
    fontWeight: 'bold',
  },
  dividerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
  line: {
    flex: 1,
    height: 1.2,
    backgroundColor: '#D0D4DA',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#7A7F85',
    fontWeight: '500',
  },
});

export default ScriptScreen;
