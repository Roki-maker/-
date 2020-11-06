let arr = [ [1,2] , 3,[4,[5,[6]] , 7] ];
let newArr=[];
function even(arr,newArr){
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            even(arr[i],newArr);
        }
        else{
            newArr.push(arr[i]);
        }
    }
}
console.log(newArr);
even(arr,newArr);   // [1,2,3,4,5,6,7]