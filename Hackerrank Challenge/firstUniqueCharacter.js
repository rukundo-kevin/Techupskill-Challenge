function getIndexOfFirstUniqueCharacter(str){
    let charMap = {};
    for(let i = 0; i < str.length; i++){
        if(charMap[str[i]] === undefined){
            charMap[str[i]] = 1;
        } else {
            charMap[str[i]]++;
        }
    }
    for(let i = 0; i < str.length; i++){
        if(charMap[str[i]] === 1){
            return i;
        }
    }
    return -1;
}