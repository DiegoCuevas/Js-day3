Object.deepFreeze = function (object) {
  Object.freeze(object);
  //...
  for ( var freezer in object){
    Object.deepFreeze(object[freezer]);
  }
}