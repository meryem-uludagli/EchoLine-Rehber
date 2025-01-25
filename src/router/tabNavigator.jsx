import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Resents from '../screens/resents';
import {CONTACTS, FAVORITES, RESENTS} from '../utils/routes';
import Contacts from '../screens/contacts';
import Favorites from '../screens/favorites';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RESENTS} component={Resents} />
      <Tab.Screen name={CONTACTS} component={Contacts} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
    </Tab.Navigator>
  );
}
