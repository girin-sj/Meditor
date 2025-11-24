import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  Animated,
  PanResponder,
} from 'react-native';
import { IcSearch, IcHeartEmpty, IcHeartFull } from '@/assets/icons';

function Contact({ contacts, setContacts }) {
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

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id),
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.nameTxt.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
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
      <ScrollView
        style={styles.contactListContainer}
        contentContainerStyle={styles.contactListContent}
      >
        {filteredContacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            contactId={contact.id}
            profileSrc={contact.profileSrc}
            nameTxt={contact.nameTxt}
            isBookmarked={contact.isBookmarked}
            isLast={index === filteredContacts.length - 1}
            onToggleBookmark={() => handleToggleBookmark(contact.id)}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const ContactItem = ({
  contactId,
  profileSrc,
  nameTxt,
  isBookmarked,
  isLast,
  onToggleBookmark,
  onDelete,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 5;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(Math.max(gestureState.dx, -80));
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -40) {
          Animated.spring(translateX, {
            toValue: -80,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const handleDelete = () => {
    Animated.timing(translateX, {
      toValue: -500,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onDelete();
    });
  };

  return (
    <View
      style={[styles.contactItemContainer, !isLast && styles.contactItemBorder]}
    >
      <View style={styles.deleteButtonContainer}>
        <Pressable style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>삭제</Text>
        </Pressable>
      </View>
      <Animated.View
        style={[
          styles.contactItem,
          {
            transform: [{ translateX }],
          },
        ]}
        {...panResponder.panHandlers}
      >
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
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 90,
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
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  contactListContainer: {
    flex: 1,
    marginTop: 8,
  },
  contactListContent: {
    paddingBottom: 20,
  },
  contactItemContainer: {
    width: '100%',
    position: 'relative',
  },
  contactItem: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  contactItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  deleteButtonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#D33B3B',
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
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
