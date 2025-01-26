import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getInitials} from '../../utils/functions';
import {Colors} from '../../theme/colors';

const Avatar = ({name, surname}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{getInitials(name, surname)}</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#2c3e50',
    borderRadius: 100,
    width: 55,
    height: 55,
  },
  name: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
