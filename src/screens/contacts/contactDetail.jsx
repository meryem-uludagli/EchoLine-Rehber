import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Avatar from '../../components/contacts/avatar';
import {convertFullName} from '../../utils/functions';
import {height, sizes} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import CircleIconButton from '../../components/ui/circleIconButton';
import {Call, Sms, Messages3} from 'iconsax-react-native';

const ContactDetail = ({route}) => {
  const {contact} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View style={styles.userContainer}>
          <Avatar name={contact.name} surname={contact?.surname} />
          <Text style={styles.fullName}>
            {convertFullName(contact?.name, contact?.surname)}
          </Text>
          <Text style={styles.job}>{contact.job}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CircleIconButton
            icon={<Sms size="28" color={Colors.WHITE} variant="Bold" />}
            color={Colors.PURPLE}
          />
          <CircleIconButton
            icon={<Messages3 size="28" color={Colors.WHITE} variant="Bold" />}
            color={Colors.GREEN}
          />
          <CircleIconButton
            icon={<Call size="28" color={Colors.WHITE} variant="Bold" />}
            color={Colors.BLUE}
          />
        </View>

        <View style={styles.infoContainer}></View>
      </ScrollView>
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  userContainer: {
    alignItems: 'center',
    height: height * 0.2,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    height: height * 0.1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  fullName: {
    fontSize: 18,
    fontWeight: '700',
  },
  job: {
    color: Colors.GRAY,
    fontSize: 16,
  },
  infoContainer: {
    backgroundColor: Colors.SOFTGRAY,
    margin: 5,
    borderRadius: 5,
  },
});
