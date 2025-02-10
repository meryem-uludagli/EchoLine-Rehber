import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNEWCONTACT,
  CALLING,
  CONTACTDETAIL,
  TABNAVIGATOR,
  UPDATECONTACT,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import ContactDetail from '../screens/contacts/contactDetail';
import {Colors} from '../theme/colors';
import Calling from '../screens/calling';
import AddContact from '../screens/contacts/addContact';
import {Pressable, View} from 'react-native';
import {Edit, Trash} from 'iconsax-react-native';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../store/actions/contactAction';
import UpdateContact from '../screens/contacts/updateContact';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        options={({navigation, route}) => ({
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => dispatch(deleteContact(route.params.contact.id))}
                style={{marginRight: 10}}>
                <Trash name="trash" color={Colors.RED} size={25} />
              </Pressable>
              <Pressable
                onPress={() =>
                  navigation.navigate(UPDATECONTACT, {
                    contact: route.params.contact,
                  })
                }
                style={{marginRight: 5}}>
                <Edit name="edit" color={Colors.BLUE} size={25} />
              </Pressable>
            </View>
          ),
        })}
        name={CONTACTDETAIL}
        component={ContactDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={CALLING}
        component={Calling}
      />
      <Stack.Screen name={ADDNEWCONTACT} component={AddContact} />
      <Stack.Screen name={UPDATECONTACT} component={UpdateContact} />
    </Stack.Navigator>
  );
}
