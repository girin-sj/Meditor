import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { IcCloseWhite, IcSearch, IcPlus } from '@/assets/icons';
import { getSyncedContacts } from './ContactExampleData';
import { syncContacts } from '@/utils/contactSync';
import CompleteView from '@/components/CompleteView';
import Toast from '@/components/Toast';

function ContactPlusModal({
  visible,
  onClose,
  onAddContact,
  showToast,
  onToastHide,
  contacts,
}) {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [contactCount, setContactCount] = useState(0);
  const [syncedContacts, setSyncedContacts] = useState(getSyncedContacts());
  const [loadingContactId, setLoadingContactId] = useState(null);

  const filteredContacts = useMemo(
    () =>
      syncedContacts.filter(contact =>
        contact.nameTxt.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [syncedContacts, searchText],
  );

  const isSynced = syncedContacts.length > 0;

  // 연락처 연동 처리
  const handleSyncContacts = async () => {
    setIsLoading(true);
    const result = await syncContacts();
    setIsLoading(false);

    if (result.success) {
      setContactCount(result.count);
      setShowComplete(true);
    }
  };

  // CompleteView 1초 후 자동으로 숨기기 및 연락처 목록 업데이트
  useEffect(() => {
    if (showComplete) {
      const timer = setTimeout(() => {
        setShowComplete(false);
        setSyncedContacts(getSyncedContacts());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showComplete]);

  // 연락처 추가 핸들러 (스피너 포함)
  const handleAddContactWithLoading = async contact => {
    setLoadingContactId(contact.id);

    // 연락처 추가
    await new Promise(resolve => {
      onAddContact(contact);
      // 약간의 딜레이를 줘서 state 업데이트 완료 대기
      setTimeout(resolve, 300);
    });

    setLoadingContactId(null);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {showComplete ? (
            <CompleteView
              title="연락처 연동 완료"
              subtitle={`${contactCount}개의 연락처를 연결중입니다.\n잠시만 기다려주세요.`}
            />
          ) : (
            <>
              <View style={styles.searchContainer}>
                <IcSearch />
                <TextInput
                  style={styles.searchInput}
                  placeholder="이름을 입력하세요"
                  placeholderTextColor="#9A9EA8"
                  value={searchText}
                  onChangeText={setSearchText}
                />
              </View>
              {!isSynced ? (
                <View style={styles.noSyncContainer}>
                  <Text style={styles.noSyncText}>연락처를 연동해주세요</Text>
                  <Pressable
                    style={styles.contactBtn}
                    onPress={handleSyncContacts}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ActivityIndicator size="small" color="#000000" />
                    ) : (
                      <Text style={styles.contactBtnText}>연락처 연동하기</Text>
                    )}
                  </Pressable>
                </View>
              ) : (
                <ScrollView style={styles.contactList}>
                  {filteredContacts.map((contact, index) => {
                    const isAdded = contacts.some(
                      c => c.nameTxt === contact.nameTxt,
                    );
                    return (
                      <ContactItem
                        key={contact.id}
                        profileSrc={contact.profileSrc}
                        nameTxt={contact.nameTxt}
                        isLast={index === filteredContacts.length - 1}
                        isLoading={loadingContactId === contact.id}
                        isAdded={isAdded}
                        onPress={() => handleAddContactWithLoading(contact)}
                      />
                    );
                  })}
                  {filteredContacts.length === 0 && (
                    <Text style={styles.emptyText}>검색 결과가 없습니다</Text>
                  )}
                </ScrollView>
              )}
            </>
          )}
        </View>
        <Pressable
          style={styles.closeBtn}
          onPress={showComplete ? () => setShowComplete(false) : onClose}
        >
          <IcCloseWhite />
        </Pressable>
        <Toast
          visible={showToast}
          message="연락처가 추가되었습니다"
          onHide={onToastHide}
        />
      </View>
    </Modal>
  );
}

const ContactItem = ({
  profileSrc,
  nameTxt,
  isLast,
  isLoading,
  isAdded,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.contactItem, !isLast && styles.contactItemBorder]}
      onPress={isAdded ? null : onPress}
      disabled={isLoading || isAdded}
    >
      <View style={styles.contactItemLeft}>
        <Image
          source={profileSrc}
          style={styles.contactprofile}
          resizeMode="cover"
        />
        <Text style={styles.nameTxt}>{nameTxt}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size="small" color="#1E56A0" />
      ) : isAdded ? null : (
        <IcPlus />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxHeight: '70%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
  },
  text: {
    fontSize: 24,
    fontFamily: 'KAKAOBIGSANS-BOLD',
    marginBottom: 20,
  },
  closeBtn: {
    marginTop: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E6EB',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 10,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  contactList: {
    width: '100%',
  },
  contactItem: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  contactItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  contactprofile: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  nameTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#141D35',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#9A9EA8',
  },
  noSyncContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noSyncText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141D35',
    marginBottom: 12,
    textAlign: 'center',
  },
  noSyncSubText: {
    fontSize: 14,
    color: '#9A9EA8',
    textAlign: 'center',
    lineHeight: 20,
  },
  contactBtn: {
    backgroundColor: '#E8EFF7',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginTop: 16,
    minWidth: 120,
    alignItems: 'center',
  },
  contactBtnText: {
    color: '#000000',
    fontWeight: '600',
  },
});

export default ContactPlusModal;
