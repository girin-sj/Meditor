import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IcRecordStart, IcRecordStop, IcBack } from "@/assets/icons";

const { width } = Dimensions.get("window");

function RecordScreen({ navigation }) {
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const handleExit = () => navigation.goBack();

  const handleStartRecord = () => {
    setIsRecording(true);
    setSeconds(0);
  };

  const handleStopRecord = () => {
    setIsRecording(false);
    setSeconds(0);

    navigation.navigate("SummaryScreen", {
        recordedDuration: seconds,
    });
  };

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const formatTime = (sec) => {
    const minutes = String(Math.floor(sec / 60)).padStart(2, "0");
    const seconds = String(sec % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={[styles.container, 
        { backgroundColor: isRecording ? "#1b3e83ff" : "#ffffff"  }
    ]}>
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Pressable style={styles.exitButton} onPress={handleExit}>
          <IcBack color={isRecording ? "#ffffff" : "#1b3e83ff"} />
          <Text style={[styles.exitText,
            { color: isRecording ? "#ffffff" : "#1b3e83ff" }
          ]}>나가기</Text>
        </Pressable>
      </View>
      
      <View style={styles.centerWrapper}>
        <Text style={[styles.mainTitle, 
            { color: isRecording ? "#ffffff" : "#1b3e83ff" }
        ]}>
          {isRecording
            ? "진료가 끝나면\n 하단 버튼을 눌러주세요"
            : "하단 버튼을 눌러\n진료를 기록하세요"}
        </Text>
        <Pressable
          onPress={isRecording ? handleStopRecord : handleStartRecord}
          activeOpacity={0.7}
        >
          {isRecording ? <IcRecordStop /> : <IcRecordStart />}
        </Pressable>

        {isRecording ? (
          <>
            <Text style={[styles.subText, 
                {color: isRecording ? "#ffffff" : "#1b3e83ff"},
                { marginTop: 48 }]}>메디터가 진료 내용을 {"\n"} 기록하고 있어요</Text>
            <Text style={styles.timer}>{formatTime(seconds)}</Text>
          </>
        ) : (
          <Text style={[styles.subText, { marginTop: 48 }]}>
            메디터가 같이 듣고 진료 내용을{"\n"}요약 정리해드릴게요
          </Text>
        )}

      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        width: "100%",
        alignItems: "flex-end",
    },
    exitButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    exitText: {
        fontSize: 22,
        fontWeight: "600",
        color: "#2F6BDF",
        marginLeft: 6,
    },
    centerWrapper: {
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1B3062",
        textAlign: "center",
        lineHeight: 45,
        marginBottom: 72,
    },
    subText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "600",
        color: "#1B3062",
        lineHeight: 35,
    },
    timer: {
        marginTop: 16,
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "600",
        textAlign: "center",
    },
});

export default RecordScreen;