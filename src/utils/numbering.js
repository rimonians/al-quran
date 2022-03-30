const numbers = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};

const numbering = (input) => {
  input = input === String ? input : input.toString();
  const output = [];
  for (let i = 0; i < input.length; ++i) {
    if (numbers.hasOwnProperty(input[i])) {
      output.push(numbers[input[i]]);
    } else {
      output.push(input[i]);
    }
  }
  const outputNum = output.join("");
  const finalNum = outputNum.length <= 1 ? "০" + outputNum : outputNum;
  return finalNum;
};

export default numbering;
