import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TABNAVIGATOR} from '../utils/routes';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TABNAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
}
