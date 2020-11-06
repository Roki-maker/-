let arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}];
function compare(property){
    return function(obj1,obj2){
        var value1=obj1[property];
        var value2=obj2[property];
        return value1-value2;
    }
}
var result=arr.sort(compare("id"));
console.log(result);
