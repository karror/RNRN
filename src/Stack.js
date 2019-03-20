import { createDrawerNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  register
} from './sites';
import { colors } from 'statics';


const root = createStackNavigator(
  {
    register
  },
  {
    initialRouteName: 'register',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.color1
      },
      headerTintColor: colors.front,
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '400',
        flex: 1,
        textAlign: 'center'
      }
    }
  },
);


export default createAppContainer(root);
