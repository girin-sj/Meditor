import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  IcPersonOn,
  IcPersonOff,
  IcReceptionOn,
  IcReceptionOff,
} from '@/assets/icons';
import Contact from './Contact';
import Reception from './Reception';
import GradiBtn from '@/components/GradiBtn';
import ContactPlusModal from './ContactPlusModal';
import { INITIAL_RECEPTION_ITEMS, getContacts } from './ContactExampleData';

function ContactsScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = React.useState('contact');
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [contacts, setContacts] = React.useState(getContacts());
  const [receptionItems, setReceptionItems] = React.useState(
    INITIAL_RECEPTION_ITEMS,
  );
  const [showToast, setShowToast] = React.useState(false);

  const newReceptionCount = receptionItems.filter(item => item.isNew).length;

  const handleReceptionItemPress = id => {
    setReceptionItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isNew: false } : item,
      ),
    );
  };

  const handleAddContact = contact => {
    const newContact = {
      ...contact,
      id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
      isBookmarked: false,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setShowToast(true);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.frame}>
        <View style={styles.header}>
          <Pressable
            style={styles.headerItem}
            onPress={() => setSelectedTab('contact')}
          >
            {selectedTab === 'contact' ? <IcPersonOn /> : <IcPersonOff />}
            <Text
              style={[
                styles.headerTxt,
                { color: selectedTab === 'contact' ? '#1E56A0' : '#9A9EA8' },
              ]}
            >
              연락처
            </Text>
          </Pressable>
          <View style={styles.headerItemWrapper}>
            <Pressable
              style={styles.headerItem}
              onPress={() => setSelectedTab('reception')}
            >
              {selectedTab === 'reception' ? (
                <IcReceptionOn />
              ) : (
                <IcReceptionOff />
              )}
              <Text
                style={[
                  styles.headerTxt,
                  {
                    color: selectedTab === 'reception' ? '#1E56A0' : '#9A9EA8',
                  },
                ]}
              >
                수신내역
              </Text>
            </Pressable>
            {newReceptionCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{newReceptionCount}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.contents}>
          {selectedTab === 'contact' && (
            <Contact contacts={contacts} setContacts={setContacts} />
          )}
          {selectedTab === 'reception' && (
            <Reception
              receptionItems={receptionItems}
              onItemPress={handleReceptionItemPress}
              navigation={navigation}
            />
          )}
        </View>
      </View>
      {selectedTab === 'contact' && (
        <View style={styles.gradiContainer}>
          <GradiBtn
            title={'연락처 추가'}
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      )}
      <ContactPlusModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddContact={handleAddContact}
        showToast={showToast}
        onToastHide={() => setShowToast(false)}
        contacts={contacts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
  },
  frame: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#E6EFF6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    gap: 8,
  },
  headerItemWrapper: {
    position: 'relative',
  },
  headerItem: {
    width: 144,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 6,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DB3434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'KAKAOBIGSANS-BOLD',
  },
  headerTxt: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 20,
  },
  contents: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  gradiContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 24,
    paddingHorizontal: 16,
  },
});

export default ContactsScreen;
