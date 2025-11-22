import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { 
  IcContactsImg, 
  IcTreatSummary, 
  IcBell,
  IcSetting, 
  IcNotice, 
  IcCustomer, 
  IcOpinion, 
  IcMore, 
  IcInfomation,
  IcRightBlack
} from '@/assets/icons';

function UserScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 16 }}>
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>연락처 쉽게 관리하기</Text>
            <Text style={styles.describe}>
              중요한 진료 요약을{'\n'}바로 공유할 수 있도록 연동을 완료해 주세요
            </Text>
            <Pressable style={styles.contactBtn}>
              <Text style={styles.contactBtnText}>연락처 연동하기</Text>
            </Pressable>
          </View>
          <IcContactsImg style={{ marginLeft: 8 }} />
        </View>

        <View style={styles.section}>
          <Pressable style={styles.row}>
            //프로필 이미지 넣어야함
            <Text style={styles.profilerowText}>제임스</Text>
            <IcRightBlack />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>설정</Text>

          <Pressable style={styles.row}>
            <IcTreatSummary />
            <Text style={styles.rowText}>진료 요약 설정</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <IcBell />
            <Text style={styles.rowText}>알림 설정</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <IcSetting />
            <Text style={styles.rowText}>앱 설정</Text>
            <IcRightBlack />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>고객지원</Text>

          <Pressable style={styles.row}>
            <IcNotice />
            <Text style={styles.rowText}>공지사항</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <IcCustomer />
            <Text style={styles.rowText}>고객센터</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <IcOpinion />
            <Text style={styles.rowText}>의견 남기기</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <IcMore />
            <Text style={styles.rowText}>메디터 더 알아보기</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <IcInfomation />
            <Text style={styles.rowText}>약관 및 정책</Text>
            <IcRightBlack />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기타</Text>

          <Pressable style={styles.row}>
            <Text style={styles.rowText}>오픈소스 라이선스</Text>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <View style={{ flex: 1 }}>
            <Text style={styles.versionMain}>버전 25.01.01</Text>
            <Text style={styles.versionSub}>최신 버전을 사용중이에요</Text>
            </View>
            <IcRightBlack />
          </Pressable>

          <Pressable style={styles.row}>
            <Text style={styles.rowText}>로그아웃</Text>
            <IcRightBlack />
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  describe: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 16,
  },
  contactBtn: {
    backgroundColor: "#E8EFF7",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  contactBtnText: {
    color: "#1E56A0",
    fontWeight: "600",
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  profilerowText: {
    flex: 1,
    fontSize: 23,
    marginLeft: 12,
    fontWeight: "bold",
  },
  rowText: {
    flex: 1,
    fontSize: 15,
    marginLeft: 12,
  },
  versionMain: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
    marginLeft: 12,
  },
  versionSub: {
    fontSize: 12,
    color: "#777",
    marginLeft: 12,
  },
});

export default UserScreen;