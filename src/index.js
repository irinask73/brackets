module.exports = function check(str, bracketsConfig) {
  let n = str.length / 2;
  do {
    for (let i = 0; i < bracketsConfig.length; i++){
      //пара "скобок"
          let brackets = bracketsConfig[i][0] +  bracketsConfig[i][1];
      //удаляем их из проверяемой строки
          str = str.replace(brackets, '');
      }
      n--;
  }
  while (str !== '' && n > 0)   
  if (str !== ''){
    return false;
  } else return true;
}