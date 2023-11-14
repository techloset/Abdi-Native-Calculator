import ratio from './ratio';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

/* fonts */
// export const FONT_FAMILY = {
//   montserratSemiBold: 'Montserrat-SemiBold',
//   montserratBold: 'Montserrat-Bold',
//   montserratMedium: 'Montserrat-Medium',
//   montserratRegular: 'Montserrat-Regular',
//   montserratLight: 'Montserrat-Light',
// };
/* Colors */
export const COLOR = {
  light: '#F1F2F3',
  dark: '#17171C',
  blue: '#89CFF0',
  btnGray: '#4E505F',
  btnDark: '#2E2F38',
  gray: '#747477',
  black: '#000000',
  white: '#FFFFFF',
  result: '#FFA500',
  query: '#FF0000',
};
/* Common */
export const COMMON_STYLES = {
  btnBlue: {
    width: widthPixel(72),
    height: widthPixel(72),
    borderRadius: widthPixel(5),
    backgroundColor: COLOR.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: pixelSizeVertical(8),
  },
  btnDark: {
    width: widthPixel(72),
    height: widthPixel(72),
    borderRadius: widthPixel(5),
    backgroundColor: COLOR.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: pixelSizeVertical(8),
  },
  btnLight: {
    width: widthPixel(72),
    height: widthPixel(72),
    borderRadius: widthPixel(5),
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: pixelSizeVertical(8),
  },
  btnGray: {
    width: widthPixel(72),
    height: widthPixel(72),
    borderRadius: widthPixel(5),
    backgroundColor: COLOR.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: pixelSizeVertical(8),
  },
  smallTextLight: {
    fontSize: fontPixel(32),
    color: COLOR.white,
  },
  smallTextDark: {
    fontSize: fontPixel(32),
    color: COLOR.black,
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: fontPixel(96),
    color: COLOR.blue,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: fontPixel(40),
    color: COLOR.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
};
