import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { IcPwClose, IcPwOpen, IcKakao } from '@/assets/icons';

function LoginScreen({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          <Text style={styles.titleHighlight}>M</Text>EDITOR
        </Text>
        <Text style={styles.subtitle}>기억과 전달의 틈을 메우다</Text>
      </View>
      <View style={styles.contents}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>이메일</Text>
            <TextInput
              placeholder="예) meditor@gmail.com"
              placeholderTextColor="#9A9EA8"
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>비밀번호</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={!isPasswordVisible}
            />
            <Pressable
              style={styles.pwIcon}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <IcPwOpen /> : <IcPwClose />}
            </Pressable>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.localLoginBtn} onPress={handleLogin}>
            <Text style={styles.localLoginTxt}>로그인</Text>
          </Pressable>
          <Pressable style={styles.kakaoLoginBtn}>
            <IcKakao />
            <Text style={styles.kakaoLoginTxt}>카카오톡 로그인</Text>
          </Pressable>
        </View>
        <View style={styles.bottomTxtWrapper}>
          <Text style={styles.bottomTxt}>이메일 찾기</Text>
          <Text style={styles.bottomBar}>ㅣ</Text>
          <Text style={styles.bottomTxt}>비밀번호 찾기</Text>
          <Text style={styles.bottomBar}>ㅣ</Text>
          <Text style={styles.bottomTxt}>회원가입</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 70,
  },
  contents: {
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 56,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'KAKAOBIGSANS-EXTRABOLD',
  },
  titleHighlight: {
    color: '#1E56A0',
  },
  subtitle: {
    fontSize: 18,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 42,
  },
  inputWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputTitle: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 18,
  },
  textInput: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
    color: '#141D35',
  },
  pwIcon: {
    position: 'absolute',
    right: 8,
    bottom: 10,
  },
  btnContainer: {
    width: '100%',
    gap: 16,
  },
  localLoginBtn: {
    backgroundColor: '#9A9EA8',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  localLoginTxt: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  kakaoLoginBtn: {
    flexDirection: 'row',
    backgroundColor: '#FEE500',
    borderRadius: 8,
    gap: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kakaoLoginTxt: {
    fontSize: 18,
    color: '#403230',
  },
  bottomTxtWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  bottomTxt: {
    fontSize: 16,
  },
  bottomBar: {
    fontSize: 16,
    color: '#9A9EA8',
  },
});

export default LoginScreen;
