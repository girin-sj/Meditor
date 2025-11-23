import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { launchCamera } from "react-native-image-picker";
import { IcShare, IcVoiceRead, IcRightWhite } from "@/assets/icons";
import GradiBtn from "@/components/GradiBtn";
import { INITIAL_TREAT } from "./TreatExampleData";

function SummaryScreen({ route, navigation }) {
    const { id } = route.params || {};
    const treatData = INITIAL_TREAT.find(item => item.id === id) || INITIAL_TREAT[0];
    const [photoTaken, setPhotoTaken] = useState(false);

    const handleOpenCamera = () => {
        const options ={
            mediaType: 'photo',
            cameraType: 'back',
            saveToPhoto: 'true',
        };
        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('카메라가 취소되었습니다.')
            } else if (response.errorCode){
                console.log('카메라 에러: ', response.errorMessage);
            } else {
                console.log('촬영 성공:', response.assets[0]);
                setPhotoTaken(true);
            }
        })
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
                    {treatData.diagnosis.map((item, index) => (
                        <Text key={index} style={styles.describe}>• {item}</Text>
                    ))}
                </View>

                {!photoTaken && (
                    <>
                        <Text style={styles.sectionTitle}>처방 약물</Text>
                        <View style={styles.section}>
                        <GradiBtn
                            title={"처방전 입력하기"}
                            onPress={handleOpenCamera}
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
                        <Text style={styles.describe}>{prescription.description}</Text>
                        <Text style={styles.describe}></Text>
                        <View style={styles.rowBetween}>
                            <Text style={styles.describeeat}>{prescription.dosage}</Text>
                            <Pressable
                                style={styles.alarmBtn}
                                >
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
                        <Text key={index} style={styles.describe}>• {item}</Text>
                    ))}
                </View>
            </View>
        </ScrollView>
        <Pressable 
            style={styles.adContainer}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ScriptScreen', {id:1})}>
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
        paddingBottom: 50,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4,
        marginBottom: 10,
    },
    section: {
        paddingVertical: 10,
        marginBottom: 15,
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
    describeeat: {
        fontSize: 14,
        color:"#9A9EA8",
    }, 
    rowBetween: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
    },
    alarmTxt:{
        color: "#000",
        fontSize: 12,
        textDecorationLine: "underline"
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