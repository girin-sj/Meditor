import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Contacts from 'react-native-contacts';
import { setSyncedContacts } from '../screens/contacts/ContactExampleData';

/**
 * 안드로이드 연락처 권한 요청
 * @returns {Promise<boolean>} 권한 허용 여부
 */
export const requestContactsPermission = async () => {
  if (Platform.OS !== 'android') {
    return true;
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: '연락처 접근 권한',
        message: '연락처를 가져오기 위해 권한이 필요합니다.',
        buttonPositive: '허용',
        buttonNegative: '거부',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.error('권한 요청 오류:', err);
    return false;
  }
};

/**
 * 연락처 가져오기 및 저장
 * @returns {Promise<{success: boolean, count: number, error?: string}>}
 */
export const syncContacts = async () => {
  try {
    // 권한 확인
    const hasPermission = await requestContactsPermission();

    if (!hasPermission) {
      Alert.alert(
        '권한 필요',
        '연락처를 가져오려면 연락처 접근 권한이 필요합니다.',
        [{ text: '확인', style: 'default' }],
      );
      return { success: false, count: 0, error: 'permission_denied' };
    }

    // 연락처 가져오기
    const contacts = await Contacts.getAll();
    console.log('가져온 연락처 수:', contacts.length);

    // 연락처 포맷팅
    const formattedContacts = contacts.map((contact, index) => ({
      id: index + 1,
      profileSrc: require('@/assets/images/ig_profile_default.png'),
      nameTxt: contact.displayName || '이름 없음',
      isBookmarked: false,
      phoneNumber: contact.phoneNumbers[0]?.number || '',
    }));

    // 저장
    setSyncedContacts(formattedContacts);

    console.log('연락처 저장 완료');

    return { success: true, count: contacts.length };
  } catch (err) {
    console.error('연락처 가져오기 오류:', err);
    Alert.alert('오류', '연락처를 가져오는 중 오류가 발생했습니다.', [
      { text: '확인' },
    ]);
    return { success: false, count: 0, error: err.message };
  }
};
