// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindThemeTokens = require('./figmaTokens.json');

const oneLayerWithPixelAdding = (itemName) => {
  const fontSizes = { ...tailwindThemeTokens[itemName] };
  Object.keys(fontSizes).map((property) => {
    if (fontSizes[property]?.value)
      fontSizes[property] = `${fontSizes[property]?.value}px`;
  });
  return fontSizes;
};
const themeFontFamily = () => {
  const fontFamily = { ...tailwindThemeTokens['fontFamily'] };
  Object.keys(fontFamily).map((property) => {
    fontFamily[property] = [fontFamily[property]['value']];
  });
  return fontFamily;
};
const oneLayerWithNoPixel = (itemName) => {
  const fontWeight = { ...tailwindThemeTokens[itemName] };
  Object.keys(fontWeight).map((property) => {
    fontWeight[property] = fontWeight[property]?.value;
  });
  return fontWeight;
};
const themeShadowBox = () => {
  const boxShadow = { ...tailwindThemeTokens['boxShadow'] };
  Object.keys(boxShadow).map((property) => {
    boxShadow[property] = Object.keys(boxShadow[property]['value'])
      .map((item) => {
        if (item !== 'type' && item !== 'color')
          return `${boxShadow[property]['value'][item]}px`;
        if (item === 'color') return boxShadow[property]['value'][item];
        return;
      })
      .join(' ');
  });
  return boxShadow;
};
const themeLetterSpacing = () => {
  const letterSpacing = { ...tailwindThemeTokens['letterSpacing'] };
  Object.keys(letterSpacing).map((property) => {
    const valueWithNoPercentage = letterSpacing[property]?.value?.replace(
      '%',
      ''
    );
    const convertToNumber = +valueWithNoPercentage;
    letterSpacing[property] = `${convertToNumber / 100}em`;
  });
  return letterSpacing;
};
module.exports = {
  oneLayerWithPixelAdding,
  themeFontFamily,
  oneLayerWithNoPixel,
  themeShadowBox,
  themeLetterSpacing,
};
