import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IcShare, IcVoiceRead, IcRightWhite } from "@/assets/icons";

function SummaryScreen({ navigation }) {
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
                <Text style={styles.headerSmall}>유착성 관절낭염(Frozen shoulder)</Text>
                <View style={styles.headerRow}>
                    <Text style={styles.headerTitle}>오십견 진료 요약</Text>
                    <Pressable>
                        <View style={styles.voiceRow}>
                            <IcVoiceRead />
                            <Text style={styles.voiceText}>음성으로 듣기</Text>
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={styles.sectionWrap}>
                <Text style={styles.sectionTitle}>진단 소견</Text>
                <View style={styles.sectionBox}>
                    <Text style={styles.describe}>• 어깨 운동 범위 제한</Text>
                    <Text style={styles.describe}>• 근육 긴장도 증가{"\n"}  → 오십견 의심</Text>
                </View>

                <Text style={styles.sectionTitle}>처방 약물</Text>
                <View style={styles.sectionBox}>
                    <Text style={styles.bold}>근육 이완제(Persion 50mg)</Text>
                    <Text style={styles.describe}>어깨 근육을 풀어주는 약</Text>
                    <Text style={styles.describe}>1정 | 하루 3회 | 식후</Text>
                </View>

                <View style={styles.sectionBox}>
                    <Text style={styles.bold}>보조 진통제(Acetaminopen 500mg)</Text>
                    <Text style={styles.describe}>통증을 완화하고 열을 낮추는 약{"\n"}</Text>
                    <Text style={styles.describe}>1정 | 통증이 있을 때 복용(특히 야간)</Text>
                    <Text style={styles.warning}>※ 하루에 4회 이상 복용 금지</Text>
                </View>

                <Text style={styles.sectionTitle}>치료 및 관리</Text>
                <View style={styles.sectionBox}>
                    <Text style={styles.describe}>• 매일 꾸준한 어깨 스트레칭</Text>
                    <Text style={styles.describe}>• 물리 치료 병행 권장</Text>
                    <Text style={styles.describe}>• 수술 없이 회복 가능</Text>
                    <Text style={styles.describe}>(단, 6개월 이상 증상 지속 시 수술 고려)</Text>
                </View>
            </View>
        </ScrollView>
        <Pressable 
            style={styles.adContainer}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ScriptScreen')}>
            <Text style={styles.adTxt}>어떤 대화가 오갔나요? <Text style={styles.adTxtBold}>전문 보기</Text></Text>
            <IcRightWhite />
        </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    headerBox: {
        marginTop: 15,
        backgroundColor: "#1E56A0",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    headerSmall: {
        fontSize: 14,
        color: "#FFFFFF",
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FFFFFF",   
    },
    voiceRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E6EFF6",
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
        gap: 5,
    },
    voiceText: {
        fontSize: 14,
    },
    sectionWrap: {
        marginTop: 4,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4,
        marginBottom: 10,
    },
    sectionBox: {
        backgroundColor: "#F6F6F6",
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
    },
    describe: {
        fontSize: 14,
    },
    bold: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    warning: {
        color: "red",
        marginTop: 5,
    },
    adContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#163172",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    adTxt: {
        color: "#FFFFFF",
        fontSize: 12,
    },
    adTxtBold: {
        fontFamily: "KAKAOBIGSANS-BOLD",
    },
});

export default SummaryScreen;