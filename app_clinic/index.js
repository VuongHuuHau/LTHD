import { registerRootComponent } from 'expo';

import App from './App';
import Register from './components/User/Register';
import HomeScreen from './components/HomeScreen';
import AppNavigator from './Navigation/AppNavigator';

import AppointmentBooking from './components/User/Appintmentbooking';
import AppointmentScreen from './components/AppointmentScreen';
import AppointmentScreenp from './components/User/AppointmentScreenp';
import Login from './components/User/Login';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
