import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OrdersScreen from "./src/screens/OrdersScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Orders: OrdersScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
