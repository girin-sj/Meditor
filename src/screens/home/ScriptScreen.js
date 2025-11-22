import React from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IcBack } from "@/assets/icons";

function ScriptScreen({ navigation }) {
    const handleExit = () => {
        navigation.navigate("SummaryScreen");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.toRow}>
                <Text style={styles.text}>전문 보기</Text>
                <Pressable
                    style={styles.exitButton}
                    onPress={handleExit}>
                    <IcBack />
                </Pressable>
            </View>

            <View style={styles.contentBox}>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    toRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default ScriptScreen;