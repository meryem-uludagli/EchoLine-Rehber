import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../contacts/avatar';
import {sizes} from '../../utils/constants';
import {convertFullName} from '../../utils/functions';

const ResentItem = ({item}) => {
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

export default ResentItem;

const styles = StyleSheet.create({});
