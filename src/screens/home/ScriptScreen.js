import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { IcBack } from "@/assets/icons";

function ScriptScreen({ navigation }) {
    const handleExit = () => {
        navigation.navigate("SummaryScreen");
    };

    return (
        <View style={styles.container}>
            <View style={styles.toRow}>
                <Text style={styles.text}>전문 보기</Text>
                <TouchableOpacity
                    style={styles.exitButton}
                    onPress={handleExit}>
                    <IcBack />
                </TouchableOpacity>
            </View>

            <View style={styles.contentBox}>
                
            </View>
        </View>
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
        marginTop: 50,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default ScriptScreen;