const str1 = '({})([])';
const str2 = '{asd}';
const str3 = '{()}{]}';

const map = {
    ')': '(',
    '}': '{',
    ']': '['
}

const validator = (str) => {
    const bracketArray = Object.entries(map).flat()
    const filteredStr = str.split('').filter(bracket => bracketArray.includes(bracket)).join('')

    const stack = []

    for (let i = 0; i < filteredStr.length; i++) {
        if (filteredStr[i] === '(' || filteredStr[i] === '{' || filteredStr[i] === '[') {
            stack.push(filteredStr[i])
        } else if (stack[stack.length - 1] === map[filteredStr[i]]) {
            stack.pop()
        } else return false 
    }
    return stack.length ? false : true
  };
  
  console.log(validator(str1)); // true
  console.log(validator(str2)); // true
  console.log(validator(str3)); // false
  