import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import { IcCloseWhite } from '@/assets/icons';

function ScheduleModal({ visible, onClose, onAdd, selectedDate }) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
      onClose();
    }
  };

  const handleClose = () => {
    setTitle('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>일정 추가</Text>
          <Text style={styles.subtitle}>진료 일정 제목을 입력하세요</Text>

          <TextInput
            style={styles.input}
            placeholder="예) 항공정내과 3시"
            placeholderTextColor="#9A9EA8"
            value={title}
            onChangeText={setTitle}
            autoFocus
          />

          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={handleClose}
            >
              <Text style={styles.cancelButtonText}>취소</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.addButton]}
              onPress={handleAdd}
            >
              <Text style={styles.addButtonText}>추가</Text>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.closeBtn} onPress={handleClose}>
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
  title: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 20,
    color: '#141D35',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9A9EA8',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E4E6EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#E4E6EB',
  },
  cancelButtonText: {
    color: '#141D35',
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#1E56A0',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  closeBtn: {
    marginTop: 12,
  },
});

export default ScheduleModal;
