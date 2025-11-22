import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { IcCloseWhite } from '@/assets/icons';

function ContactPlusModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.text}>연락처 추가</Text>
        </View>
        <Pressable style={styles.closeBtn} onPress={onClose}>
          <IcCloseWhite />
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'KAKAOBIGSANS-BOLD',
    marginBottom: 20,
  },
  closeBtn: {
    marginTop: 12,
  },
});

export default ContactPlusModal;
