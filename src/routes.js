import { createAppContainer, createSwitchNavigator } from "react-navigation";

import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      BookList,
      BookDetail,
    },
    {
      initialRouteName: "BookList",
      backBehavior: "history",
    }
  )
);

export default Routes;
