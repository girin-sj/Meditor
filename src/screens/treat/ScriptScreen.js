import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IcBack, IcDoctor } from "@/assets/icons";

function ScriptScreen({ navigation }) {
    const handleExit = () => navigation.navigate("SummaryScreen");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>전문 보기</Text>
                <Pressable style={styles.exitButton} onPress={handleExit}>
                    <IcBack />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>                
                <View style={styles.rowLeft}>
                    <IcDoctor style={styles.profileImg} />
                    <View style={styles.bubbleLeft}>
                        <Text style={styles.bubbleText}>어떤 증상으로 내원하셨나요?</Text>
                    </View>
                </View>

                <View style={styles.rowRight}>
                    <View style={styles.bubbleRight}>
                        <Text style={styles.bubbleText}>
                            오른쪽 어깨가 아파서 팔이 잘 안 올라갑니다.
                            옷 입거나 머리 감을 때 특히 불편하고요.
                        </Text>
                    </View>
                </View>

                <View style={styles.rowLeft}>
                    <IcDoctor style={styles.profileImg} />
                    <View style={styles.bubbleLeft}>
                        <Text style={styles.bubbleText}>
                            통증은 계속 있으신가요, 아니면 움직일 때만 아프신가요?
                        </Text>
                    </View>
                </View>

                <View style={styles.rowRight}>
                    <View style={styles.bubbleRight}>
                        <Text style={styles.bubbleText}>
                            평소에도 욱신거렸지만 움직이면 더 아파요.
                            밤에 자다가도 아파서 깨요.
                        </Text>
                    </View>
                </View>

                <View style={styles.rowLeft}>
                    <IcDoctor style={styles.profileImg} />
                    <View style={styles.bubbleLeft}>
                        <Text style={styles.bubbleText}>
                            진찰해보니 관절의 움직임 범위가 제한되어 있고
                            근육 긴장도도 높습니다.
                        </Text>
                    </View>
                </View>

                <View style={styles.rowLeft}>
                    <IcDoctor style={styles.profileImg} />
                    <View style={styles.bubbleLeft}>
                        <Text style={styles.bubbleText}>
                            진단상 <Text style={styles.TreatText}>유착성 관절낭염</Text>이 의심됩니다.
                        </Text>
                    </View>
                </View>

                <View style={styles.rowRight}>
                    <View style={styles.bubbleRight}>
                        <Text style={styles.bubbleText}>어떤 병인가요?</Text>
                    </View>
                </View>

                <View style={styles.rowLeft}>
                    <IcDoctor style={styles.profileImg} />
                    <View style={styles.bubbleLeft}>
                        <Text style={styles.bubbleText}>
                            어깨 관절을 싸고 있는 관절낭이라는 조직에 염증이 생기고, 그 부위가 굳으면서 움직임이 줄어드는 상태입니다. 시간이 지나면 호전되긴 하지만, 치료 없이 방치하면 회복에 수개월 이상 걸릴 수 있습니다.
                        </Text>
                    </View>
                </View>

                <View style={styles.rowLeft}>
                    <IcDoctor style={styles.profileImg} />
                    <View style={styles.bubbleLeft}>
                        <Text style={styles.bubbleText}>
                            우선 통증 조절과 염증 완화를 위해 약을 처방해드릴게요.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    exitButton: {
        padding: 10,
    },
    scrollContainer: {
        paddingHorizontal: 25,
    },
    rowLeft: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 5,
    },
    rowRight: {
        alignItems: "flex-end",
        marginVertical: 8,
    },
    profileImg: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    bubbleLeft: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 12,
        maxWidth: "60%",
    },
    bubbleRight: {
        backgroundColor: "#E4E6EB",
        padding: 15,
        borderRadius: 12,
        maxWidth: "64%",
    },
    bubbleText: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
    },
    TreatText: {
        fontSize: 15,
        color: "#1E56A0",
        fontWeight: "bold",
    },
});

export default ScriptScreen;