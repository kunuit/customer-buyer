import { DefaultTheme } from "react-native-paper";

// const addFonts = useFonts({
//   'Gilroy-light': require('../../../assets/fonts/Gilroy-Light.otf'),
//   'Gilroy-ExtraBold': require('../../../assets/fonts/Gilroy-ExtraBold.otf')
// })

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#53B175",
    secondary: "#414757",
    error: "#f13a59",
    notBlack: "#181725",
    notGray: "#7C7C7C",
    gray: "#B3B3B3",
    notpink: "#FA8072",
    lineBorder: "#E2E2E2",
  },
  backgrounds: {
    statusBar: "#FFFFFF",
    paper: "#F2F3F2",
    white: "#FFFFFF",
    itemImageDetail: "rgb(242, 243, 242)",
    modal: "rgba(0, 0, 0, 0.5)",
    buttonBack: "rgba(0,0,0,0.3)",
    transparent: "rgba(0,0,0,0)",
  },
};
