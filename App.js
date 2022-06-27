import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './component/film.jsx'
import Film from './component/afiche.jsx';
import Detailfilm from './component/detailfilm.jsx';

import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer style={styles.container} >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Film}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Detailfilm" component={Detailfilm} />
      </Stack.Navigator>
    </NavigationContainer>

  )



  //   <View style={styles.container}>


  //     <Film/>

  //   </View>
  // );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight


  },
});
