import defaultColors from 'tailwindcss/colors';

const colors = {
  black: defaultColors.black,
  white: defaultColors.white,
  primary: defaultColors.blue,
  secondary: defaultColors.neutral,
  success: defaultColors.emerald,
  error: defaultColors.red,
  warning: defaultColors.amber,
  info: defaultColors.violet,
}

export type IColor = keyof typeof colors;

export default colors;
