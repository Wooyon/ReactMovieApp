import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
  {
    MoviesScreen,
    TVScreen,
    SearchScreen
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

//createAppContainer는 리엑트 네비게이션에게 애플리케이션이 여기 있다고 말해주는기능
export default createAppContainer(TabNavigation);
