function convertHashToArray(hash){
  //your code here - sort the keys!  
 var array = [];
 for ( var key in hash){
   array.push([key,hash[key]]);
 }
 return array.sort();
}