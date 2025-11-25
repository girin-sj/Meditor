// 날짜별 일정 데이터
let CALENDAR_SCHEDULE_DATA = {
  '2025-10-22': [{ id: 3, type: 'treat', title: '허리 디스크' }],
  '2025-10-27': [{ id: 3, type: 'treat', title: '허리 디스크' }],
  '2025-11-07': [{ id: 7, type: 'treat', title: '어깨 회전근개 파열', treatId: 11 }],
  '2025-11-10': [{ id: 5, type: 'treat', title: '목 통증' }],
  '2025-11-14': [{ id: 8, type: 'treat', title: '오십견', treatId: 1}],
  '2025-11-21': [{ id: 10, type: 'treat', title: '오십견', treatId: 1}],
  '2025-11-25': [
    { id: 11, type: 'treat', title: '발목 염좌', treatId: 12 },
    { id: 12, type: 'hospital', title: '정형외과 11시' },
  ],
  '2025-11-27': [{ id: 13, type: 'hospital', title: '재활의학과 2시' }],
  '2025-11-30': [
    { id: 14, type: 'hospital', title: '재활의학과 2시' },
    { id: 15, type: 'hospital', title: '골다공증 검진' },
    { id: 16, type: 'hospital', title: '정형외과 11시' },
  ],
  '2025-12-05': [{ id: 1, type: 'hospital', title: '물리치료 9시' }],
};

// 특정 날짜의 일정 가져오기
export const getScheduleByDate = dateString => {
  return CALENDAR_SCHEDULE_DATA[dateString] || [];
};

// 일정이 있는 날짜들 가져오기
export const getMarkedDates = () => {
  const marked = {};
  Object.keys(CALENDAR_SCHEDULE_DATA).forEach(date => {
    marked[date] = {
      marked: true,
      dotColor: '#DB3434',
    };
  });
  return marked;
};

// 일정 추가하기
export const addSchedule = (dateString, title) => {
  const newSchedule = {
    id: Date.now(),
    type: 'hospital',
    title: title,
  };

  if (CALENDAR_SCHEDULE_DATA[dateString]) {
    CALENDAR_SCHEDULE_DATA[dateString].push(newSchedule);
  } else {
    CALENDAR_SCHEDULE_DATA[dateString] = [newSchedule];
  }
};
