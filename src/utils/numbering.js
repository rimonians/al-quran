const numbering = (num) => {
  if (num === 0) return 0;
  if (num < 10) return "0" + num;
  return num;
};

export default numbering;
