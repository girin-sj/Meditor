import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { IcHospital, IcNote, IcRightBlack } from '@/assets/icons';
import {
  getScheduleByDate,
  getMarkedDates,
  addSchedule,
} from './CalendarExampleData';
import GradiBtn from '@/components/GradiBtn';
import ScheduleModal from './ScheduleModal';

// 한글 로케일 설정
LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'kr';

function CalendarScreen({ navigation }) {
  const todayDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 일정이 있는 날짜들과 선택된 날짜를 함께 표시
  const [markedDates, setMarkedDates] = useState({
    ...getMarkedDates(),
    [todayDate]: {
      selected: true,
      selectedColor: '#4A90E2',
      marked: getMarkedDates()[todayDate]?.marked || false,
      dotColor: '#DB3434',
    },
  });

  const handleDayPress = day => {
    const date = day.dateString;
    setSelectedDate(date);

    // 일정 마킹을 유지하면서 선택된 날짜 업데이트
    const scheduledDates = getMarkedDates();
    setMarkedDates({
      ...scheduledDates,
      [date]: {
        selected: true,
        selectedColor: '#4A90E2',
        marked: scheduledDates[date]?.marked || false,
        dotColor: '#DB3434',
      },
    });
  };

  // 날짜 포맷팅 함수
  const formatDate = dateString => {
    const dayNames = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dayName = dayNames[date.getDay()];

    return `${year}/${month}/${day}/${dayName}`;
  };

  // 일정 추가 핸들러
  const handleAddSchedule = title => {
    addSchedule(selectedDate, title);
    // 마킹된 날짜 업데이트
    const scheduledDates = getMarkedDates();
    setMarkedDates({
      ...scheduledDates,
      [selectedDate]: {
        selected: true,
        selectedColor: '#4A90E2',
        marked: true,
        dotColor: '#DB3434',
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.calendarContainer}>
        <Calendar
          current={new Date().toISOString().split('T')[0]}
          onDayPress={handleDayPress}
          markedDates={markedDates}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#9A9EA8',
            selectedDayBackgroundColor: '#1E56A0',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#1E56A0',
            dayTextColor: '#2d4150',
            textDisabledColor: '#E4E6EB',
            dotColor: '#1E56A0',
            selectedDotColor: '#ffffff',
            arrowColor: '1E56A02',
            monthTextColor: '#163172',
            indicatorColor: '#1E56A0',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '600',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
          onMonthChange={month => {
            console.log('월 변경:', month);
          }}
          enableSwipeMonths={true}
          monthFormat={'yyyy년 MM월'}
        />
      </View>
      <View style={styles.grayLine} />
      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateTxt}>{formatDate(selectedDate)}</Text>
      </View>
      {getScheduleByDate(selectedDate).length > 0 ? (
        <ScrollView
          style={styles.scheduleListContainer}
          showsVerticalScrollIndicator={true}
        >
          {getScheduleByDate(selectedDate).map((schedule, index) => {
            const isLast = index === getScheduleByDate(selectedDate).length - 1;
            if (schedule.type === 'treat') {
              return (
                <TreatItem
                  key={schedule.id}
                  titleTxt={schedule.title}
                  isLast={isLast}
                  navigation={navigation}
                  treatId={schedule.treatId}
                />
              );
            } else {
              return (
                <HospitalItem
                  key={schedule.id}
                  titleTxt={schedule.title}
                  isLast={isLast}
                />
              );
            }
          })}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>일정이 없습니다</Text>
        </View>
      )}
      <View style={styles.gradiContainer}>
        <GradiBtn title={'일정 추가'} onPress={() => setIsModalVisible(true)} />
      </View>
      <ScheduleModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAdd={handleAddSchedule}
        selectedDate={selectedDate}
      />
    </SafeAreaView>
  );
}

const truncateText = (text, maxLength = 10) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + ' ···';
  }
  return text;
};

const TreatItem = ({ titleTxt, isLast, navigation, treatId }) => {
  return (
    <Pressable 
      style={[styles.treatItem, !isLast && styles.treatItemBorder]}
      onPress={() => navigation.navigate('SummaryScreen', { id: treatId })}>
      <View style={styles.treatLeft}>
        <View style={styles.treatIconWrapper}>
          <IcNote />
        </View>
        <Text style={styles.treatItemText}>
          {truncateText(titleTxt)}
          {'  '}진료 요약
        </Text>
      </View>
      <IcRightBlack />
    </Pressable>
  );
};

const HospitalItem = ({ titleTxt, isLast }) => {
  return (
    <View style={[styles.treatItem, !isLast && styles.treatItemBorder]}>
      <View style={styles.treatLeft}>
        <View style={styles.hospitalIconWrapper}>
          <IcHospital />
        </View>
        <Text style={styles.treatItemText}>{truncateText(titleTxt)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  calendarContainer: {
    padding: 16,
  },
  grayLine: {
    width: '100%',
    height: 4,
    backgroundColor: '#E4E6EB',
  },
  selectedDateContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  selectedDateTxt: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 18,
  },
  scheduleListContainer: {
    width: '100%',
    paddingHorizontal: 24,
    maxHeight: 187,
  },
  treatListContainer: {
    width: '100%',
  },
  treatItem: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  treatItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  treatLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  treatItemText: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 16,
  },
  treatIconWrapper: {
    backgroundColor: '#E6EFF6',
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  hospitalIconWrapper: {
    backgroundColor: '#1E56A0',
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  emptyContainer: {
    width: '100%',
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 22,
    color: '#9A9EA8',
  },
  gradiContainer: {
    paddingHorizontal: 40,
    paddingVertical: 24,
  },
});

export default CalendarScreen;
