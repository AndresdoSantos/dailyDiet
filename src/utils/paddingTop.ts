import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const PADDING_TOP = parseInt(String(getStatusBarHeight()), 10) + 30;