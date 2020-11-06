let str = "can-enter-volunteer-organization"
function change(str){
  let arr=str.split("-");
  for(var i=1;i<arr.length;i++)
  {
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
  }
    alert(arr.join(""));
}

change(str)

let arr = ["myfirstactivity","today activity","yourActivity","activitys"]
var newArr=arr.concat("activity");
 console.log(newArr);