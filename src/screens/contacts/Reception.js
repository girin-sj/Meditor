import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { IcRightBlack } from '@/assets/icons';

function Reception({ receptionItems, onItemPress, navigation }) {

  const handleItemPress = (id) => {
    navigation.navigate('SummaryScreen', {id, hideScript: true });
  };

  return (
    <View style={styles.container}>
      {receptionItems.map((item, index) => (
        <ReceptionItem
          key={item.id}
          profileSrc={item.profileSrc}
          nameTxt={item.nameTxt}
          dateTxt={item.dateTxt}
          isNew={item.isNew}
          isLast={index === receptionItems.length - 1}
          onPress={() => {
            onItemPress(item.id);
            handleItemPress(item.id, item.isNew);
          }}
        />
      ))}
    </View>
  );
}

const ReceptionItem = ({
  profileSrc,
  nameTxt,
  dateTxt,
  isLast,
  isNew,
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.receptionItem, !isLast && styles.receptionItemBorder]}
      onPress={onPress}
    >
      <View style={styles.receptionItemLeft}>
        <Image
          source={profileSrc}
          style={styles.contactprofile}
          resizeMode="cover"
        />
        <View style={styles.textWrapper}>
          <View style={styles.nameTxtWrapper}>
            <Text style={styles.nameTxt}>{nameTxt}</Text>
            {isNew && <View style={styles.redDot} />}
          </View>
          <Text style={styles.dateTxt}>{dateTxt}</Text>
        </View>
      </View>
      <IcRightBlack />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receptionItem: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receptionItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
  },
  text: {
    fontSize: 20,
    fontFamily: 'KAKAOBIGSANS-BOLD',
    color: '#141D35',
  },
  receptionItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameTxtWrapper: {
    position: 'relative',
  },
  nameTxt: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 20,
    color: '#141D35',
  },
  redDot: {
    position: 'absolute',
    top: 0,
    right: -8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#DB3434',
  },
  dateTxt: {
    fontFamily: 'KAKAOBIGSANS-BOLD',
    fontSize: 16,
    color: '#9A9EA8',
  },
});

export default Reception;
