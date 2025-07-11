
function camel(str){
    let cleaned = str.replaceAll('_','-');
    let words = cleaned.split('-');
    let camelCase = words.map(function(element,index){
        if (index===0) return element;
        return element.charAt(0).toUpperCase()+element.slice(1);
    })
    return camelCase.join('');
}
console.log(camel('the-boss_shook'));
/*function toCamelCase(str){ 
  let arr = str.split('');
  for(i = 0; i < arr.length; i++){
    let letter = arr[i];
    if(letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    } 
  }
  return arr.join('');
}*/