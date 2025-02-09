import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {convertFullName} from '../../utils/functions';
import {Colors} from '../../theme/colors';
import Avatar from './avatar';
import {useNavigation} from '@react-navigation/native';
import {CONTACTDETAIL} from '../../utils/routes';
import {sizes} from '../../utils/constants';

const ContactItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(CONTACTDETAIL, {contact: item})}
      style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar name={item.name} surname={item.surname} size={sizes.SMALL} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {convertFullName(item.name, item.surname)}
        </Text>
        <Text style={styles.job}>{item.job}</Text>
      </View>
    </Pressable>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    margin: 5,
    color: Colors.WHITE,
  },
  job: {
    fontSize: 14,
    color: Colors.GRAY,
    margin: 5,
  },
  infoContainer: {
    flex: 4,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
