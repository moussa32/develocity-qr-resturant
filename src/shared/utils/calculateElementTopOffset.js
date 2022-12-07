const calculateElementTopOffset = element => {
  const yOffset = -80;
  const elementYOffset = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  return elementYOffset;
};

export default calculateElementTopOffset;
