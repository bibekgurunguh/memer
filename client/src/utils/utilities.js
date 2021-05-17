export const shortenText = (str) => {
  let newStr = '';
  if (str !== undefined && str.length > 30) {
    for (let i = 0; i < 27; i++) {
      newStr += str[i];
    }
    newStr += '...';
  } else newStr = str;
  return newStr;
};

export const deepCopy = (input) => {
  if (
    typeof input === 'number' ||
    typeof input === 'string' ||
    typeof input === 'boolean'
  )
    return input;
  if (Array.isArray(input)) {
    const newArr = [];
    for (let i = 0; i < input.length; i++) {
      newArr.push(deepCopy(input[i]));
    }
    return newArr;
  } else {
    const newObj = {};
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        newObj[key] = deepCopy(input[key]);
      }
    }
    return newObj;
  }
};
