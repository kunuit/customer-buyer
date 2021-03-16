import { DefaultTheme } from 'react-native-paper';


// const addFonts = useFonts({
//   'Gilroy-light': require('../../../assets/fonts/Gilroy-Light.otf'),
//   'Gilroy-ExtraBold': require('../../../assets/fonts/Gilroy-ExtraBold.otf')
// })

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#19bd13',
    secondary: '#414757',
    error: '#f13a59',
    notBlack: '#181725',
    notGray: '#7C7C7C',
    lineBorder: '#E2E2E2'
  },
  backgrounds: {
    paper: '#F2F3F2',
    white: '#FFFFFF',
  }
};
