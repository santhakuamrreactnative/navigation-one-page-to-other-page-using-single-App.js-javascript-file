import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const ProfileScreen = ({ navigation, route }) => {
  return( 
    <View>
  <Text>This is {route.params.name}'s profile</Text>
  <Button
      title="Go to SignUp Page"
      onPress={() =>
        navigation.navigate('SignUp', { name: 'Jane' })
      }
    />
    </View>
  );
};

const SignUpScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s SignUp Page</Text>;
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App

