import { createStackNavigator } from 'react-navigation';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import Sett from './components/Sett';

export const StackRouter = createStackNavigator({
  Albums: {
    screen: PageOne,
  },
  Details: {
    screen: PageTwo,
  },
  Coupons: {
    screen: PageThree,
  },
  Sett: {
    screen: Sett,
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });


