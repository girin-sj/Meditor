import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import { IcSearch, IcHeartEmpty, IcHeartFull } from '@/assets/icons';
import { INITIAL_CONTACTS } from './ContactExampleData';

function Contact() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [searchText, setSearchText] = useState('');

  const handleToggleBookmark = id => {
    setContacts(prevContacts => {
      const updated = prevContacts.map(contact =>
        contact.id === id
          ? { ...contact, isBookmarked: !contact.isBookmarked }
          : contact,
      );
      return updated.sort((a, b) => b.isBookmarked - a.isBookmarked);
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.nameTxt.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
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
      <View style={styles.contactListContainer}>
        {filteredContacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            profileSrc={contact.profileSrc}
            nameTxt={contact.nameTxt}
            isBookmarked={contact.isBookmarked}
            isLast={index === filteredContacts.length - 1}
            onToggleBookmark={() => handleToggleBookmark(contact.id)}
          />
        ))}
      </View>
    </>
  );
}

const ContactItem = ({
  profileSrc,
  nameTxt,
  isBookmarked,
  isLast,
  onToggleBookmark,
}) => {
  return (
    <View style={[styles.contactItem, !isLast && styles.contactItemBorder]}>
      <View style={styles.contactItemLeft}>
        <Image
          source={profileSrc}
          style={styles.contactprofile}
          resizeMode="cover"
        />
        <Text style={styles.nameTxt}>{nameTxt}</Text>
      </View>
      <Pressable onPress={onToggleBookmark}>
        {isBookmarked ? <IcHeartFull /> : <IcHeartEmpty />}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E6EB',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  contactListContainer: {
    width: '100%',
    marginTop: 8,
  },
  contactItem: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
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
    gap: 18,
  },
  contactprofile: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  nameTxt: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 20,
    color: '#141D35',
  },
});

export default Contact;
