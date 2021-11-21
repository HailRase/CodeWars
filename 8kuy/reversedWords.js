function reverseWords(str){
    let arrayStr = str.split(" ");
    str = arrayStr.reverse().join(' ');
    return str;
}
const reverseArray = reverseWords("yoda doesn't speak like this");