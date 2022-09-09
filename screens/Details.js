import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log("------------------");
  console.log(data);
  console.log("------------------");
  return <Text>hello</Text>;
};

export default Details;
