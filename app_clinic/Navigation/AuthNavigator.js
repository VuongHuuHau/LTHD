// // navigators/AuthNavigator.js
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import Login from '../components/User/Login';

// const Stack = createStackNavigator();

// const AuthNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={Login} />
//   </Stack.Navigator>
// );

// export default AuthNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/User/Login'; // Đảm bảo đường dẫn chính xác tới tệp Login.js
import ForgetPasswordScreen from '../components/ForgetPasswordScreen'; // Đảm bảo đường dẫn chính xác tới tệp ForgetPassword.js
import Register from '../components/User/Register';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;


