function getElementWidth(content, padding, border) {
  const elementWidth =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  return elementWidth;
}
