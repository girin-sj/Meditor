let CONTACTS = [
  {
    id: 1,
    profileSrc: require('@/assets/images/ig_profile_default.png'),
    nameTxt: '할머니',
    isBookmarked: true,
  },
  {
    id: 2,
    profileSrc: require('@/assets/images/ig_profileex3.png'),
    nameTxt: '아빠',
    isBookmarked: true,
  },
  {
    id: 3,
    profileSrc: require('@/assets/images/ig_profileex2.png'),
    nameTxt: '엄마',
    isBookmarked: false,
  },
  {
    id: 4,
    profileSrc: require('@/assets/images/ig_profile_default.png'),
    nameTxt: '사회복지사',
    isBookmarked: false,
  },
];

// 연동된 연락처 (UserScreen에서 연동한 연락처 - ContactPlusModal 전용)
let SYNCED_CONTACTS = [];

// 연락처 연동 여부 flag
let isContactSynced = false;

// 연락처 가져오기
export const getContacts = () => {
  return CONTACTS;
};

// 연락처 설정하기 (연동 시 사용)
export const setContacts = newContacts => {
  CONTACTS = newContacts;
};

// 연락처 추가하기
export const addContact = contact => {
  CONTACTS.push(contact);
};

// 연동된 연락처 가져오기 (ContactPlusModal 전용)
export const getSyncedContacts = () => {
  return SYNCED_CONTACTS;
};

// 연동된 연락처 설정하기 (UserScreen에서 호출)
export const setSyncedContacts = newContacts => {
  SYNCED_CONTACTS = newContacts;
  isContactSynced = newContacts.length > 0;
};

// 연락처 연동 여부 확인
export const getIsContactSynced = () => {
  return isContactSynced;
};

// 초기 연락처 (호환성 유지)
export const INITIAL_CONTACTS = CONTACTS;

export const INITIAL_RECEPTION_ITEMS = [
  {
    id: 1,
    profileSrc: require('@/assets/images/ig_profile_default.png'),
    nameTxt: '할머니',
    dateTxt: '11/18 화요일 15:20',
    isNew: true,
  },
  {
    id: 2,
    profileSrc: require('@/assets/images/ig_profileex2.png'),
    nameTxt: '엄마',
    dateTxt: '10/27 월요일 12:00',
    isNew: false,
  },
  {
    id: 3,
    profileSrc: require('@/assets/images/ig_profileex3.png'),
    nameTxt: '아빠',
    dateTxt: '02/12 화요일 23:52',
    isNew: false,
  },
  {
    id: 4,
    profileSrc: require('@/assets/images/ig_profile_default.png'),
    nameTxt: '사회복지사',
    dateTxt: '2024/12/30 월요일',
    isNew: false,
  },
];
